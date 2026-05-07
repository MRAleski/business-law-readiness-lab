const STORAGE_KEY = 'busn201ReadinessLabProfilesV1';
const RETENTION_DAYS = 48;
const INSTRUCTOR_PASSCODE = 'BUSN201';

const defaultProfile = (name) => ({
  studentName: name,
  createdAt: Date.now(),
  lastActive: Date.now(),
  attempts: 0,
  bestScore: 0,
  mastered: [],
  categoryStats: {},
  moduleStats: {},
  responseLog: []
});

let db = loadDatabase();
let activeId = null;
let profile = null;

let session = {
  progress: 0,
  currentItems: [],
  currentIndex: 0,
  currentScore: 0,
  finalResults: {},
  moduleFilter: 'All Modules',
  matchRound: 1
};

const $ = (id) => document.getElementById(id);
const allModules = ['All Modules', ...new Set(TERMS.map(t => t.module)), 'Final Comprehensive Review'];

/* ---------- Time-on-task tracking ---------- */
function ensureTimerFields() {
  if (!profile) return;
  if (!profile.timeOnTaskMs) profile.timeOnTaskMs = 0;
  if (!profile.activeSessionStart) profile.activeSessionStart = null;
}

function startTimeOnTask() {
  if (!profile) return;
  ensureTimerFields();
  if (!profile.activeSessionStart) {
    profile.activeSessionStart = Date.now();
    saveProfile();
  }
}

function pauseTimeOnTask() {
  if (!profile || !profile.activeSessionStart) return;
  const elapsed = Math.max(0, Date.now() - profile.activeSessionStart);
  profile.timeOnTaskMs = (profile.timeOnTaskMs || 0) + elapsed;
  profile.activeSessionStart = null;
  saveProfile();
}

function getTimeOnTaskMs() {
  if (!profile) return 0;
  ensureTimerFields();
  let total = profile.timeOnTaskMs || 0;
  if (profile.activeSessionStart) {
    total += Math.max(0, Date.now() - profile.activeSessionStart);
  }
  return total;
}

function formatTimeOnTask(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} hr ${mins} min`;
  }
  return minutes === 0 ? `${seconds} sec` : `${minutes} min ${seconds} sec`;
}

function updateTimeOnTaskDisplay() {
  const el = document.getElementById('certTimeOnTask');
  if (el) el.textContent = formatTimeOnTask(getTimeOnTaskMs());
}

window.addEventListener('beforeunload', pauseTimeOnTask);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') pauseTimeOnTask();
  if (document.visibilityState === 'visible' && profile) startTimeOnTask();
});
/* ---------- End time-on-task tracking ---------- */


function normalizeName(name) {
  return (name || 'Student').trim().toLowerCase().replace(/\\s+/g, ' ');
}

function safeName(name) {
  return (name || 'Student').trim() || 'Student';
}

function loadDatabase() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (!parsed.profiles) parsed.profiles = {};
    return parsed;
  } catch {
    return { profiles: {} };
  }
}

function saveDatabase() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function purgeOldData() {
  const cutoff = Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000;
  Object.keys(db.profiles || {}).forEach(id => {
    const p = db.profiles[id];
    p.responseLog = (p.responseLog || []).filter(r => (r.timestamp || 0) >= cutoff);
    if ((p.lastActive || 0) < cutoff && (!p.responseLog || p.responseLog.length === 0)) {
      delete db.profiles[id];
    }
  });
  saveDatabase();
}

function setActiveProfile(name) {
  const displayName = safeName(name);
  activeId = normalizeName(displayName);
  if (!db.profiles[activeId]) db.profiles[activeId] = defaultProfile(displayName);
  profile = db.profiles[activeId];
  profile.studentName = displayName;
  profile.lastActive = Date.now();
  saveDatabase();
}

function saveProfile() {
  if (!profile || !activeId) return;
  profile.lastActive = Date.now();
  db.profiles[activeId] = profile;
  saveDatabase();
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function selectedTerms() {
  if (session.moduleFilter === 'Final Comprehensive Review') return TERMS;
  return session.moduleFilter === 'All Modules' ? TERMS : TERMS.filter(t => t.module === session.moduleFilter);
}

function selectedScenarios() {
  if (session.moduleFilter === 'Final Comprehensive Review') return SCENARIOS;
  return session.moduleFilter === 'All Modules' ? SCENARIOS : SCENARIOS.filter(s => s.module === session.moduleFilter);
}

function showOnly(id) {
  ['startScreen', 'dashboard', 'activityScreen', 'resultsScreen', 'certificate', 'reportScreen'].forEach(screen => {
    $(screen).classList.toggle('hidden', screen !== id);
  });
  $('homeBtn').classList.toggle('hidden', id === 'startScreen' || id === 'dashboard');
  $('reportBtn').classList.toggle('hidden', id === 'startScreen' || id === 'reportScreen');
  $('progressPanel').classList.toggle('hidden', id === 'startScreen' || id === 'reportScreen');
}

function pct(stats) {
  if (!stats || !stats.total) return 0;
  return Math.round((stats.correct / stats.total) * 100);
}

function getCategoryList() {
  return [...new Set(TERMS.map(t => t.category))];
}

function getModuleList() {
  return [...new Set(TERMS.map(t => t.module))];
}

function addResult(item, correct, mode) {
  if (!profile) return;
  const category = item.category || 'Uncategorized';
  const module = item.module || 'Unassigned';

  if (!profile.categoryStats[category]) profile.categoryStats[category] = { correct: 0, total: 0 };
  if (!profile.moduleStats[module]) profile.moduleStats[module] = { correct: 0, total: 0 };

  profile.categoryStats[category].total += 1;
  profile.moduleStats[module].total += 1;
  if (correct) {
    profile.categoryStats[category].correct += 1;
    profile.moduleStats[module].correct += 1;
  }

  profile.responseLog.push({
    timestamp: Date.now(),
    mode,
    module,
    category,
    term: item.term || item.answer || item.prompt?.slice(0, 40) || 'Practice item',
    correct
  });

  profile.responseLog = profile.responseLog.filter(r => r.timestamp >= Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000);
  saveProfile();
}

function updateProgress(value) {
  session.progress = Math.max(0, Math.min(100, value));
  $('progressFill').style.width = `${session.progress}%`;
  document.querySelector('.progress-track').setAttribute('aria-valuenow', session.progress);
  $('progressLabel').textContent = `${Math.round(session.progress)}% complete`;
  const distance = Math.max(0, 80 - (profile?.bestScore || 0));
  $('readinessLabel').textContent = distance === 0 ? 'Readiness goal met: 80% or higher' : `Distance to readiness: ${distance} points`;
  $('nearComplete').classList.toggle('hidden', session.progress < 85);
}

function weakCategories(limit = 3) {
  return getCategoryList()
    .map(cat => ({
      cat,
      pct: pct(profile?.categoryStats?.[cat]),
      total: profile?.categoryStats?.[cat]?.total || 0
    }))
    .sort((a, b) => {
      if (a.total === 0 && b.total !== 0) return -1;
      if (b.total === 0 && a.total !== 0) return 1;
      return a.pct - b.pct;
    })
    .slice(0, limit);
}

function recommendationFor(category, percent) {
  if (percent === 0) return 'Start with flashcards, then matching.';
  if (percent < 50) return 'Use flashcards and weak-area matching.';
  if (percent < 80) return 'Use scenarios and misconception checks.';
  return 'Maintain with readiness challenge.';
}

function renderBreakdown(targetId, labels, stats) {
  $(targetId).innerHTML = labels.map(label => {
    const percent = pct(stats?.[label]);
    const status = percent >= 80 ? 'Strong' : percent >= 50 ? 'Developing' : 'Needs Practice';
    return `
      <div class="category-card">
        <strong>${label}</strong>
        <span>${status} · ${percent}%</span>
        <div class="meter"><span style="width:${percent}%"></span></div>
        <span class="recommend">${recommendationFor(label, percent)}</span>
      </div>
    `;
  }).join('');
}

function updateAdaptiveRecommendation() {
  const practiced = Object.values(profile?.categoryStats || {}).some(s => s.total > 0);
  if (!practiced) {
    $('adaptiveRecommendation').textContent = 'Start with Flashcards or Multi-Round Matching. After one round, this panel will recommend practice based on your weak areas.';
    $('weakAreaList').innerHTML = '';
    return;
  }

  const weak = weakCategories(3);
  const topWeak = weak[0];
  $('adaptiveRecommendation').innerHTML = `Your lowest area is <strong>${topWeak.cat}</strong> at <strong>${topWeak.pct}%</strong>. Start with Weak-Area Matching, then complete Scenario Practice.`;
  $('weakAreaList').innerHTML = weak.map(w => `<span class="weak-pill">${w.cat} <span>${w.pct}%</span></span>`).join('');
}

function updateDashboard() {
  if (!profile) return;
  $('welcomeName').textContent = `Practice Dashboard: ${profile.studentName}`;
  $('attemptsStat').textContent = profile.attempts;
  $('bestScoreStat').textContent = `${profile.bestScore}%`;
  $('masteredStat').textContent = profile.mastered.length;
  $('readinessStat').textContent = profile.bestScore >= 80 ? 'Ready' : 'Practice More';
  $('readinessStat').style.color = profile.bestScore >= 80 ? '#2e7d32' : '#b7791f';
  renderBreakdown('categoryBreakdown', getCategoryList(), profile.categoryStats);
  renderBreakdown('moduleBreakdown', getModuleList(), profile.moduleStats);
  updateAdaptiveRecommendation();
  updateProgress(session.progress);
}

function weightedTerms(count = 16, weakBias = 0.65) {
  const terms = selectedTerms();
  const weak = weakCategories(4).map(w => w.cat);
  const weakPool = terms.filter(t => weak.includes(t.category));
  const generalPool = terms.filter(t => !weak.includes(t.category));

  const weakCount = Math.min(Math.round(count * weakBias), weakPool.length);
  let chosen = [
    ...shuffle(weakPool).slice(0, weakCount),
    ...shuffle(generalPool).slice(0, count - weakCount)
  ];

  if (chosen.length < count) {
    const remaining = terms.filter(t => !chosen.some(c => c.term === t.term));
    chosen = chosen.concat(shuffle(remaining).slice(0, count - chosen.length));
  }

  return shuffle(chosen).slice(0, count);
}

function weightedScenarios(count = 10, weakBias = 0.7) {
  const scenarios = selectedScenarios();
  const weak = weakCategories(4).map(w => w.cat);
  const weakPool = scenarios.filter(s => weak.includes(s.category));
  const generalPool = scenarios.filter(s => !weak.includes(s.category));

  const weakCount = Math.min(Math.round(count * weakBias), weakPool.length);
  let chosen = [
    ...shuffle(weakPool).slice(0, weakCount),
    ...shuffle(generalPool).slice(0, count - weakCount)
  ];

  if (chosen.length < count) {
    const remaining = scenarios.filter(s => !chosen.some(c => c.prompt === s.prompt));
    chosen = chosen.concat(shuffle(remaining).slice(0, count - chosen.length));
  }

  return shuffle(chosen).slice(0, count);
}

function startApp() {
  setActiveProfile($('studentName').value);
  startTimeOnTask();
  showOnly('dashboard');
  updateDashboard();
}

function openDashboard() {
  showOnly('dashboard');
  updateDashboard();
}

function setActivity(title, kicker, counter = '') {
  $('activityTitle').textContent = title;
  $('activityKicker').textContent = kicker;
  $('activityCounter').textContent = counter;
  $('activityContent').innerHTML = '';
  showOnly('activityScreen');
}

function startFlashcards() {
  session.currentItems = weightedTerms(16, 0.65);
  session.currentIndex = 0;
  renderFlashcard(false);
}

function renderFlashcard(showBack = false) {
  const item = session.currentItems[session.currentIndex];
  setActivity('Flashcards', 'Term → definition → example → common mistake', `${session.currentIndex + 1} of ${session.currentItems.length}`);
  updateProgress(Math.round((session.currentIndex / session.currentItems.length) * 100));

  $('activityContent').innerHTML = `
    <div class="flashcard">
      <p class="small-note">${item.module} · ${item.category}</p>
      <h3 class="flash-term">${item.term}</h3>
      ${showBack ? `
        <div class="stack">
          <div class="callout"><strong>Definition:</strong> ${item.definition}</div>
          <div class="callout"><strong>Example:</strong> ${item.example}</div>
          <div class="callout"><strong>Common mistake:</strong> ${item.mistake}</div>
        </div>
        <div class="result-actions">
          <button class="primary-btn" id="knowBtn" type="button">I knew this</button>
          <button class="ghost-btn" id="reviewBtn" type="button">Review again</button>
        </div>
      ` : `
        <p>Try to explain this term out loud before revealing the answer.</p>
        <button class="primary-btn" id="revealBtn" type="button">Reveal</button>
      `}
    </div>
  `;

  if (!showBack) $('revealBtn').onclick = () => renderFlashcard(true);
  else {
    $('knowBtn').onclick = () => markFlashcard(item, true);
    $('reviewBtn').onclick = () => markFlashcard(item, false);
  }
}

function markFlashcard(item, knewIt) {
  if (knewIt && !profile.mastered.includes(item.term)) profile.mastered.push(item.term);
  addResult(item, knewIt, 'Flashcards');
  session.currentIndex += 1;
  if (session.currentIndex >= session.currentItems.length) {
    updateProgress(100);
    openDashboard();
  } else {
    renderFlashcard(false);
  }
}

function startMatching(weakOnly = false) {
  session.matchRound = 1;
  const pool = weakOnly ? selectedTerms().filter(t => weakCategories(4).map(w => w.cat).includes(t.category)) : selectedTerms();
  session.currentItems = shuffle(pool.length >= 24 ? pool : selectedTerms()).slice(0, 30);
  renderMatchRound();
}

function renderMatchRound() {
  const size = session.matchRound === 1 ? 6 : session.matchRound === 2 ? 8 : 10;
  const start = (session.matchRound - 1) * 10;
  let items = session.currentItems.slice(start, start + size);
  if (items.length < 4) items = shuffle(selectedTerms()).slice(0, size);

  let selectedTerm = null;
  let selectedDefinition = null;
  const matched = new Set();

  setActivity('Multi-Round Matching', `Round ${session.matchRound} of 3`, `0 of ${items.length}`);
  updateProgress(Math.round(((session.matchRound - 1) / 3) * 100));

  function render() {
    const defs = shuffle(items);
    $('activityContent').innerHTML = `
      <div class="match-layout">
        <div><h3>Terms</h3><div class="match-list">
          ${items.map((item, idx) => `<button class="match-btn ${matched.has(item.term) ? 'matched' : ''}" data-kind="term" data-index="${idx}" ${matched.has(item.term) ? 'disabled' : ''}>${item.term}</button>`).join('')}
        </div></div>
        <div><h3>Definitions</h3><div class="match-list">
          ${defs.map(item => `<button class="match-btn ${matched.has(item.term) ? 'matched' : ''}" data-kind="definition" data-term="${item.term}" ${matched.has(item.term) ? 'disabled' : ''}>${item.definition}</button>`).join('')}
        </div></div>
      </div>
      <div id="matchFeedback" class="feedback hidden"></div>
    `;

    document.querySelectorAll('.match-btn').forEach(btn => {
      btn.onclick = () => {
        if (btn.dataset.kind === 'term') selectedTerm = items[Number(btn.dataset.index)];
        if (btn.dataset.kind === 'definition') selectedDefinition = btn.dataset.term;
        document.querySelectorAll('.match-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        if (selectedTerm && selectedDefinition) checkMatch();
      };
    });
  }

  function checkMatch() {
    const correct = selectedTerm.term === selectedDefinition;
    addResult(selectedTerm, correct, 'Matching');
    const fb = $('matchFeedback');
    fb.className = `feedback ${correct ? 'correct' : 'incorrect'}`;
    fb.classList.remove('hidden');
    fb.innerHTML = correct
      ? `<strong>Correct.</strong> ${selectedTerm.term}: ${selectedTerm.definition}`
      : `<strong>Correction:</strong> ${selectedTerm.mistake}`;

    if (correct) matched.add(selectedTerm.term);
    selectedTerm = null;
    selectedDefinition = null;
    $('activityCounter').textContent = `${matched.size} of ${items.length}`;
    updateProgress(Math.round(((session.matchRound - 1) + matched.size / items.length) / 3 * 100));

    if (matched.size === items.length) {
      setTimeout(() => {
        session.matchRound += 1;
        if (session.matchRound > 3) {
          updateProgress(100);
          openDashboard();
        } else {
          renderMatchRound();
        }
      }, 800);
    } else {
      setTimeout(render, 650);
    }
  }

  render();
}

function startTF() {
  session.currentItems = shuffle(selectedTerms()).slice(0, 12).map(t => ({
    module: t.module,
    category: t.category,
    term: t.term,
    prompt: t.misconception,
    choices: ['True', 'False'],
    answer: t.tfAnswer ? 'True' : 'False',
    feedback: `${t.term}: ${t.definition} Common mistake: ${t.mistake}`
  }));
  session.currentIndex = 0;
  session.currentScore = 0;
  renderQuestion('Misconception Check', 'True or false');
}

function startScenario(weighted = true) {
  session.currentItems = weighted ? weightedScenarios(10, 0.7) : shuffle(selectedScenarios()).slice(0, 10);
  session.currentIndex = 0;
  session.currentScore = 0;
  renderQuestion('Scenario Practice', 'Apply the rule');
}

function buildFinalItems() {
  const weakCats = weakCategories(4).map(w => w.cat);
  const weakTerms = TERMS.filter(t => weakCats.includes(t.category));
  const balanced = [];

  getModuleList().forEach(mod => {
    const modTerms = TERMS.filter(t => t.module === mod);
    balanced.push(...shuffle(modTerms).slice(0, 2).map(t => ({
      module: t.module,
      category: t.category,
      term: t.term,
      prompt: t.misconception,
      choices: ['True', 'False'],
      answer: t.tfAnswer ? 'True' : 'False',
      feedback: `${t.term}: ${t.definition} Common mistake: ${t.mistake}`
    })));
  });

  const weakItems = shuffle(weakTerms).slice(0, 8).map(t => ({
    module: t.module,
    category: t.category,
    term: t.term,
    prompt: t.misconception,
    choices: ['True', 'False'],
    answer: t.tfAnswer ? 'True' : 'False',
    feedback: `${t.term}: ${t.definition} Common mistake: ${t.mistake}`
  }));

  const scenarios = weightedScenarios(10, 0.7);
  return shuffle([...balanced, ...weakItems, ...scenarios]).slice(0, 24);
}

function startFinal() {
  profile.attempts += 1;
  session.currentItems = buildFinalItems();
  session.currentIndex = 0;
  session.currentScore = 0;
  session.finalResults = {};
  saveProfile();
  renderQuestion('Readiness Challenge', 'Adaptive + balanced final review');
}

function renderQuestion(title, kicker) {
  const item = session.currentItems[session.currentIndex];
  setActivity(title, kicker, `${session.currentIndex + 1} of ${session.currentItems.length}`);
  updateProgress(Math.round((session.currentIndex / session.currentItems.length) * 100));

  const choices = shuffle(item.choices || ['True', 'False']);
  $('activityContent').innerHTML = `
    <h3>${item.prompt}</h3>
    <div class="choice-grid">
      ${choices.map(choice => `<button class="choice-btn" data-choice="${choice}" type="button">${choice}</button>`).join('')}
    </div>
    <div id="questionFeedback" class="feedback hidden"></div>
  `;

  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.onclick = () => answerQuestion(btn.dataset.choice, item, title);
  });
}

function answerQuestion(choice, item, title) {
  const correct = choice === item.answer;
  if (correct) session.currentScore += 1;
  addResult(item, correct, title);

  if (title === 'Readiness Challenge') {
    if (!session.finalResults[item.category]) session.finalResults[item.category] = { correct: 0, total: 0 };
    session.finalResults[item.category].total += 1;
    if (correct) session.finalResults[item.category].correct += 1;
  }

  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.choice === item.answer) btn.classList.add('correct-choice');
    if (btn.dataset.choice === choice && !correct) btn.classList.add('wrong-choice');
  });

  const fb = $('questionFeedback');
  fb.className = `feedback ${correct ? 'correct' : 'incorrect'}`;
  fb.classList.remove('hidden');
  fb.innerHTML = correct
    ? `<strong>Correct.</strong> ${item.feedback}`
    : `<strong>Correction:</strong> The better answer is <strong>${item.answer}</strong>. ${item.feedback}`;

  const nextText = session.currentIndex + 1 >= session.currentItems.length ? 'Finish' : 'Next';
  fb.innerHTML += `<div class="result-actions"><button id="nextQuestionBtn" class="primary-btn" type="button">${nextText}</button></div>`;
  $('nextQuestionBtn').onclick = () => {
    session.currentIndex += 1;
    if (session.currentIndex >= session.currentItems.length) finishMode(title);
    else renderQuestion(title, $('activityKicker').textContent);
  };
}

function finishMode(title) {
  updateProgress(100);
  if (title === 'Readiness Challenge') {
    const score = Math.round((session.currentScore / session.currentItems.length) * 100);
    if (score > profile.bestScore) profile.bestScore = score;
    saveProfile();
    showResults(score);
  } else {
    openDashboard();
  }
}

function showResults(score) {
  updateTimeOnTaskDisplay();
  showOnly('resultsScreen');
  $('resultSummary').innerHTML = score >= 80
    ? `<strong>${score}%.</strong> You met the 80% readiness target. Keep reviewing weak categories before the actual exam.`
    : `<strong>${score}%.</strong> You are not at the 80% readiness target yet. Use the weak-area breakdown below to choose your next practice mode.`;
  renderBreakdown('resultBreakdown', getCategoryList(), session.finalResults);
  $('certName').textContent = profile.studentName;
  $('certScore').textContent = `${profile.bestScore}%`;
  $('certAttempts').textContent = profile.attempts;
  $('certDate').textContent = new Date().toLocaleDateString();
}

function printCertificate() {
  updateTimeOnTaskDisplay();
  $('certificate').classList.remove('hidden');
  window.print();
}

function startRecommendedPractice() {
  const practiced = Object.values(profile.categoryStats || {}).some(s => s.total > 0);
  if (!practiced) {
    startFlashcards();
    return;
  }
  const weak = weakCategories(1)[0];
  if (!weak || weak.pct < 60) startMatching(true);
  else if (weak.pct < 80) startScenario(true);
  else startFinal();
}

function openReportScreen() {
  showOnly('reportScreen');
  $('reportGate').classList.remove('hidden');
  $('reportContent').classList.add('hidden');
}

function unlockReport() {
  if ($('reportCode').value !== INSTRUCTOR_PASSCODE) {
    alert('Incorrect passcode.');
    return;
  }
  $('reportGate').classList.add('hidden');
  $('reportContent').classList.remove('hidden');
  renderInstructorReport();
}

function aggregateProfiles() {
  const profiles = Object.values(db.profiles || {});
  const categoryAgg = {};
  const moduleAgg = {};

  profiles.forEach(p => {
    Object.entries(p.categoryStats || {}).forEach(([cat, s]) => {
      if (!categoryAgg[cat]) categoryAgg[cat] = { correct: 0, total: 0 };
      categoryAgg[cat].correct += s.correct || 0;
      categoryAgg[cat].total += s.total || 0;
    });
    Object.entries(p.moduleStats || {}).forEach(([mod, s]) => {
      if (!moduleAgg[mod]) moduleAgg[mod] = { correct: 0, total: 0 };
      moduleAgg[mod].correct += s.correct || 0;
      moduleAgg[mod].total += s.total || 0;
    });
  });

  return { profiles, categoryAgg, moduleAgg };
}

function renderInstructorReport() {
  const { profiles, categoryAgg, moduleAgg } = aggregateProfiles();
  const totalAttempts = profiles.reduce((sum, p) => sum + (p.attempts || 0), 0);
  const avgBest = profiles.length ? Math.round(profiles.reduce((sum, p) => sum + (p.bestScore || 0), 0) / profiles.length) : 0;
  const totalResponses = profiles.reduce((sum, p) => sum + (p.responseLog?.length || 0), 0);

  $('reportSummary').innerHTML = `
    <article class="card stat-card"><span class="stat-label">Profiles</span><strong>${profiles.length}</strong></article>
    <article class="card stat-card"><span class="stat-label">Challenge Attempts</span><strong>${totalAttempts}</strong></article>
    <article class="card stat-card"><span class="stat-label">Average Best Score</span><strong>${avgBest}%</strong></article>
    <article class="card stat-card"><span class="stat-label">Stored Responses</span><strong>${totalResponses}</strong></article>
  `;

  const weak = Object.keys(categoryAgg).map(cat => ({ cat, pct: pct(categoryAgg[cat]), total: categoryAgg[cat].total }))
    .sort((a,b) => a.pct - b.pct)
    .slice(0, 6);

  $('reportWeakTrends').innerHTML = weak.map(w => `
    <div class="category-card">
      <strong>${w.cat}</strong>
      <span>${w.pct}% · ${w.total} responses</span>
      <div class="meter"><span style="width:${w.pct}%"></span></div>
    </div>
  `).join('');

  $('reportStudents').innerHTML = `
    <table class="report-table">
      <thead><tr><th>Student Name</th><th>Attempts</th><th>Best Score</th><th>Weakest Areas</th><th>Last Active</th></tr></thead>
      <tbody>
        ${profiles.map(p => {
          const weakAreas = Object.keys(p.categoryStats || {})
            .map(cat => ({cat, pct: pct(p.categoryStats[cat])}))
            .sort((a,b) => a.pct - b.pct)
            .slice(0,3)
            .map(w => `${w.cat} (${w.pct}%)`)
            .join(', ') || 'No data yet';
          return `<tr><td>${p.studentName}</td><td>${p.attempts || 0}</td><td>${p.bestScore || 0}%</td><td>${weakAreas}</td><td>${new Date(p.lastActive || Date.now()).toLocaleDateString()}</td></tr>`;
        }).join('')}
      </tbody>
    </table>
  `;
}

function downloadReportCSV() {
  const { profiles } = aggregateProfiles();
  const rows = [['Student Name','Attempts','Best Score','Terms Mastered','Weakest Areas','Last Active']];
  profiles.forEach(p => {
    const weakAreas = Object.keys(p.categoryStats || {})
      .map(cat => ({cat, pct: pct(p.categoryStats[cat])}))
      .sort((a,b) => a.pct - b.pct)
      .slice(0,3)
      .map(w => `${w.cat} (${w.pct}%)`)
      .join('; ');
    rows.push([p.studentName, p.attempts || 0, `${p.bestScore || 0}%`, (p.mastered || []).length, weakAreas, new Date(p.lastActive || Date.now()).toLocaleDateString()]);
  });
  const csv = rows.map(row => row.map(cell => `"${String(cell).replaceAll('"','""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'business-law-readiness-lab-report.csv';
  a.click();
  URL.revokeObjectURL(url);
}

function clearOldDataManual() {
  purgeOldData();
  renderInstructorReport();
  alert('Data older than 48 days has been cleared.');
}

function initializeModuleFilter() {
  $('moduleFilter').innerHTML = allModules.map(m => `<option value="${m}">${m}</option>`).join('');
  $('moduleFilter').onchange = () => {
    session.moduleFilter = $('moduleFilter').value;
    updateDashboard();
  };
}

function bindEvents() {
  $('startBtn').onclick = startApp;
  $('homeBtn').onclick = openDashboard;
  $('reportBtn').onclick = openReportScreen;
  $('returnBtn').onclick = openDashboard;
  $('printCertBtn').onclick = printCertificate;
  $('unlockReportBtn').onclick = unlockReport;
  $('downloadReportBtn').onclick = downloadReportCSV;
  $('clearOldDataBtn').onclick = clearOldDataManual;
  $('startRecommendedBtn').onclick = startRecommendedPractice;

  document.querySelectorAll('.mode-card').forEach(btn => {
    btn.onclick = () => {
      const mode = btn.dataset.mode;
      if (mode === 'flashcards') startFlashcards();
      if (mode === 'matching') startMatching(false);
      if (mode === 'weakmatch') startMatching(true);
      if (mode === 'tf') startTF();
      if (mode === 'scenario') startScenario(true);
      if (mode === 'final') startFinal();
    };
  });
}

purgeOldData();
initializeModuleFilter();
bindEvents();
