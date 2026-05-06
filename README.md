# BUSN 201 Business Law Readiness Lab

## Purpose
This is a production-ready, GitHub Pages compatible interactive learning tool for BUSN 201 Business Law quiz and final exam preparation.

The tool is concept-based and aligned to the uploaded Canvas quiz export. It does not reproduce actual test questions.

## Files Included
- index.html
- style.css
- script.js
- terms.js
- README.md

## Key Features
- Module and final comprehensive review selection
- Flashcards: term, definition, example, common mistake
- Multi-round matching: 6 → 8 → 10 items
- Weak-area matching based on student performance
- True/false misconception checks
- Scenario-based questions tied to modules
- Adaptive final readiness challenge
- Real-time progress bar
- Distance to 80% readiness
- Dashboard with attempts, best score, terms mastered, category performance, and module performance
- Printable certificate
- Instructor-only report
- Local data cleanup after 48 days

## Student Name / Personalization
Students should use the same sign-on name every time. The tool stores a separate local profile for each typed name. This allows the tool to remember weak areas and recommend targeted practice.

## Data Storage
This tool uses browser localStorage only. No login, server, database, or external analytics are used.

Important limitation:
Because this is browser-only, the instructor report shows data stored in the browser where the tool is being viewed. It does not automatically collect data from every student device. For official grading, use Canvas screenshot submissions or a Google Form confirmation.

## 48-Day Cleanup
The tool automatically removes stored response records older than 48 days. Instructor report also includes a manual cleanup button.

## Instructor Report
The Instructor Report is available from the dashboard.

Default instructor passcode:
BUSN201

To change the passcode, open script.js and edit:
const INSTRUCTOR_PASSCODE = 'BUSN201';

This passcode is a practical classroom barrier, not enterprise-grade security. GitHub Pages is static, so a determined user could inspect the source. For true secure reporting, use a server/database solution.

## GitHub Pages Upload
1. Create or open your GitHub repository.
2. Upload these files to the root:
   - index.html
   - style.css
   - script.js
   - terms.js
   - README.md
3. Go to Settings.
4. Go to Pages.
5. Select:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
6. Save.
7. Open the GitHub Pages link.

## Canvas External Link
Add the GitHub Pages URL as an External URL in Canvas and check "Load in a new tab."

## Canvas Embed Code
Replace the URL with your GitHub Pages link:

```html
<iframe src="https://mraleski.github.io/business-law-readiness-lab/"
        width="100%"
        height="850"
        style="border:1px solid #d9e2ec; border-radius:12px;"
        loading="lazy">
</iframe>
```

## Final Check
This package contains no external dependencies and works locally or on GitHub Pages.
