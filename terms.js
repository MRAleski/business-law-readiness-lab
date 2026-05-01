const TERMS = [
  {
    term: "Corporation",
    category: "Business Organizations",
    definition: "A legal entity that exists separately from its owners.",
    example: "A shareholder owns part of a corporation, but the corporation signs its own contracts and owns its own property.",
    mistake: "Thinking shareholders are automatically personally liable for all corporate debts.",
    misconception: "A corporation is legally separate from its shareholders.",
    tfAnswer: true
  },
  {
    term: "Sole Proprietorship",
    category: "Business Organizations",
    definition: "A business owned by one person with no legal separation between the owner and the business.",
    example: "A person runs a lawn care business under their own name.",
    mistake: "Assuming a sole proprietorship gives limited liability protection.",
    misconception: "A sole proprietor generally pays personal income tax on business profits.",
    tfAnswer: true
  },
  {
    term: "Limited Liability",
    category: "Business Organizations",
    definition: "A rule that limits an owner's risk to the amount invested in the business.",
    example: "An LLC member normally does not lose personal assets for ordinary company debts.",
    mistake: "Thinking limited liability protects owners from every wrongful act.",
    misconception: "All business forms provide limited liability.",
    tfAnswer: false
  },
  {
    term: "Piercing the Corporate Veil",
    category: "Business Organizations",
    definition: "A court action that holds owners personally liable when they misuse the corporate form.",
    example: "An owner mixes personal and corporate money so badly that the business has no separate identity.",
    mistake: "Thinking incorporation is a magic shield against all personal responsibility.",
    misconception: "Commingling personal and corporate assets can put limited liability at risk.",
    tfAnswer: true
  },
  {
    term: "Partnership Dissolution",
    category: "Business Organizations",
    definition: "The legal process of ending or changing a partnership relationship.",
    example: "Partners agree in advance how assets will be valued if one partner leaves.",
    mistake: "Assuming partners can avoid planning because the law will always produce a fair outcome.",
    misconception: "A partnership agreement can reduce disputes over asset division.",
    tfAnswer: true
  },
  {
    term: "Franchise",
    category: "Business Organizations",
    definition: "A business arrangement where one party uses another party's brand, system, and support.",
    example: "A local owner operates a restaurant under a national brand.",
    mistake: "Thinking franchise owners have total freedom to ignore brand rules.",
    misconception: "A franchise may include distributorships, chain-style operations, and manufacturing arrangements.",
    tfAnswer: true
  },
  {
    term: "Agency Relationship",
    category: "Agency and Employment",
    definition: "A relationship where an agent acts for a principal and can affect the principal's legal position.",
    example: "A purchasing agent negotiates supply contracts for a company.",
    mistake: "Thinking only written contracts create agency relationships.",
    misconception: "Principals use agents so they can conduct business in multiple places at once.",
    tfAnswer: true
  },
  {
    term: "Fiduciary Duty",
    category: "Agency and Employment",
    definition: "A duty to act loyally and in the best interest of another person or organization.",
    example: "An agent cannot secretly profit from property the principal hired the agent to acquire.",
    mistake: "Thinking loyalty is optional if the agent does good work otherwise.",
    misconception: "An agent who secretly profits from a transaction may breach the duty of loyalty.",
    tfAnswer: true
  },
  {
    term: "Duties of an Agent",
    category: "Agency and Employment",
    definition: "Core legal duties such as performance, notification, loyalty, obedience, and accounting.",
    example: "A sales agent must keep the principal informed about important customer issues.",
    mistake: "Thinking duties exist only if listed in the agency agreement.",
    misconception: "Some agent duties arise by operation of law.",
    tfAnswer: true
  },
  {
    term: "Independent Contractor",
    category: "Agency and Employment",
    definition: "A worker who controls how the work is done and is not treated as a regular employee.",
    example: "A contractor agrees to complete a website using their own tools and schedule.",
    mistake: "Looking only at the worker's title instead of the amount of control.",
    misconception: "The key factor in employee status is often the principal's right to control the details of the work.",
    tfAnswer: true
  },
  {
    term: "Employment-at-Will",
    category: "Agency and Employment",
    definition: "The default rule that employment can usually be ended by either party at any time, subject to exceptions.",
    example: "An employee manual promising discharge only for good cause may limit at-will termination.",
    mistake: "Thinking at-will employment means employers can fire for illegal reasons.",
    misconception: "A good-cause policy in a handbook can create an exception to employment-at-will.",
    tfAnswer: true
  },
  {
    term: "Workers' Compensation",
    category: "Agency and Employment",
    definition: "A state system for compensating employees for work-related injuries.",
    example: "A warehouse employee hurt while lifting freight files a workers' compensation claim.",
    mistake: "Thinking it only applies when the employer intended the injury.",
    misconception: "Workers' compensation is generally tied to work-related injury, not ordinary personal debt.",
    tfAnswer: true
  },
  {
    term: "Title VII",
    category: "Employment Law",
    definition: "A federal law prohibiting employment discrimination based on protected characteristics.",
    example: "An employer cannot refuse to hire an applicant because of race, color, religion, sex, or national origin.",
    mistake: "Thinking every unfair workplace action is automatically a Title VII violation.",
    misconception: "A prima facie discrimination case requires facts showing protected-class membership and adverse employment treatment.",
    tfAnswer: true
  },
  {
    term: "Americans with Disabilities Act",
    category: "Employment Law",
    definition: "A law requiring covered employers to avoid disability discrimination and provide reasonable accommodations.",
    example: "A qualified employee may need a reasonable schedule adjustment or accessible workstation.",
    mistake: "Thinking the ADA requires every accommodation requested, regardless of burden.",
    misconception: "The ADA applies to covered workplaces and focuses on qualified individuals with disabilities.",
    tfAnswer: true
  },
  {
    term: "Equal Pay Act",
    category: "Employment Law",
    definition: "A law requiring equal pay for equal work unless a lawful reason justifies the difference.",
    example: "Different pay may be lawful when based on seniority, merit, production quantity, or another factor other than sex.",
    mistake: "Thinking any pay difference between men and women is automatically illegal.",
    misconception: "Seniority can be a lawful basis for different wages.",
    tfAnswer: true
  },
  {
    term: "COBRA",
    category: "Employment Law",
    definition: "A law that may let employees continue group health coverage after certain job or life changes.",
    example: "A terminated employee may continue coverage for a period but usually pays the cost.",
    mistake: "Thinking the former employer must always pay the employee's continued coverage.",
    misconception: "COBRA continuation coverage is generally at the employee's expense.",
    tfAnswer: true
  },
  {
    term: "Negotiable Instrument",
    category: "Commercial Paper and Banking",
    definition: "A written document that promises or orders payment of money and meets legal requirements.",
    example: "A properly written check can be a negotiable instrument.",
    mistake: "Thinking any informal IOU automatically qualifies.",
    misconception: "A check can fall under UCC Article 3 and also be handled under UCC Article 4 during collection.",
    tfAnswer: true
  },
  {
    term: "Certified Check",
    category: "Commercial Paper and Banking",
    definition: "A check a bank accepts in advance by setting aside or confirming funds for payment.",
    example: "A buyer asks the bank to certify a check before paying a seller.",
    mistake: "Confusing a certified check with an ordinary personal check.",
    misconception: "When a bank agrees in advance to accept a drawer's check, the check may be certified.",
    tfAnswer: true
  },
  {
    term: "Forged Drawer Signature",
    category: "Commercial Paper and Banking",
    definition: "A signature on a check that was not authorized by the person whose account is used.",
    example: "Someone signs another person's name on a check without permission.",
    mistake: "Assuming the customer always bears the loss immediately.",
    misconception: "A bank may have to re-credit a customer's account when it pays a check with a forged drawer signature.",
    tfAnswer: true
  },
  {
    term: "Electronic Fund Transfer",
    category: "Commercial Paper and Banking",
    definition: "A transfer of funds through electronic systems instead of paper checks.",
    example: "ATMs, direct deposits, online payments, and point-of-sale debit transactions.",
    mistake: "Assuming every electronic payment system follows the same rules as a paper check.",
    misconception: "ATMs and direct deposits are common EFT systems.",
    tfAnswer: true
  },
  {
    term: "Security Interest",
    category: "Secured Transactions and Bankruptcy",
    definition: "A creditor's legal right in collateral that secures payment or performance.",
    example: "A lender has a security interest in a financed vehicle.",
    mistake: "Thinking unsecured creditors have the same priority as perfected secured creditors.",
    misconception: "Priority among perfected security interests is often based on first to file or perfect, not last to perfect.",
    tfAnswer: true
  },
  {
    term: "Perfection",
    category: "Secured Transactions and Bankruptcy",
    definition: "The step that protects a secured creditor's interest against certain third parties.",
    example: "A lender files a financing statement to perfect a security interest in equipment.",
    mistake: "Thinking perfection creates the loan instead of protecting the creditor's priority.",
    misconception: "The last security interest perfected is not usually first in priority.",
    tfAnswer: true
  },
  {
    term: "Mechanic's Lien",
    category: "Secured Transactions and Bankruptcy",
    definition: "A lien that gives security in real property for labor or materials used to improve it.",
    example: "A contractor files a lien after not being paid for work on a building.",
    mistake: "Confusing a mechanic's lien with a possessory artisan's lien.",
    misconception: "A mechanic's lien is tied to improvements on real estate.",
    tfAnswer: true
  },
  {
    term: "Artisan's Lien",
    category: "Secured Transactions and Bankruptcy",
    definition: "A possessory lien for labor or services performed on personal property.",
    example: "A repair shop keeps a repaired machine until the owner pays.",
    mistake: "Thinking it is the same as a filed real estate lien.",
    misconception: "An artisan's lien is generally possessory and tied to personal property.",
    tfAnswer: true
  },
  {
    term: "Chapter 7 Bankruptcy",
    category: "Secured Transactions and Bankruptcy",
    definition: "A liquidation bankruptcy where nonexempt assets may be sold to pay creditors.",
    example: "A debtor with overwhelming unsecured debt seeks liquidation relief.",
    mistake: "Thinking Chapter 7 always wipes out every debt.",
    misconception: "A court can dismiss a Chapter 7 case for substantial abuse.",
    tfAnswer: true
  },
  {
    term: "Chapter 11 Bankruptcy",
    category: "Secured Transactions and Bankruptcy",
    definition: "A reorganization bankruptcy often used by businesses to continue operating while restructuring debts.",
    example: "A company keeps operating as a debtor in possession while proposing a plan.",
    mistake: "Thinking Chapter 11 always means the business closes immediately.",
    misconception: "A debtor in possession performs functions similar to a trustee in some respects.",
    tfAnswer: true
  },
  {
    term: "Antitrust Law",
    category: "Securities, Antitrust, and Consumer Protection",
    definition: "Laws designed to protect competition and prevent unfair restraints of trade.",
    example: "Competitors cannot agree together to fix prices.",
    mistake: "Thinking market success by itself is illegal.",
    misconception: "Having consumer data by itself is not automatically an antitrust violation.",
    tfAnswer: true
  },
  {
    term: "Monopolization",
    category: "Securities, Antitrust, and Consumer Protection",
    definition: "Improper acquisition or maintenance of monopoly power in a relevant market.",
    example: "A firm uses exclusionary conduct to keep rivals out of a defined market.",
    mistake: "Assuming every monopoly is unlawful regardless of conduct.",
    misconception: "Relevant product market definition can determine whether monopoly power exists.",
    tfAnswer: true
  },
  {
    term: "Predatory Pricing",
    category: "Securities, Antitrust, and Consumer Protection",
    definition: "Selling below cost to drive competitors out and later raise prices.",
    example: "A dominant firm sells below production cost long enough to eliminate smaller rivals.",
    mistake: "Calling every low sale price predatory pricing.",
    misconception: "Below-cost pricing with an intent to eliminate competitors raises antitrust concerns.",
    tfAnswer: true
  },
  {
    term: "Securities Act of 1933",
    category: "Securities, Antitrust, and Consumer Protection",
    definition: "A federal law focused on truthful disclosure when securities are first offered to investors.",
    example: "A company issuing stock must avoid material misstatements in offering documents.",
    mistake: "Thinking it guarantees investors will make money.",
    misconception: "False information in a stock offering can create liability.",
    tfAnswer: true
  },
  {
    term: "Securities Exchange Act of 1934",
    category: "Securities, Antitrust, and Consumer Protection",
    definition: "A federal law regulating securities trading markets and ongoing public company reporting.",
    example: "Public companies file periodic reports and insiders face trading restrictions.",
    mistake: "Thinking it applies only to the original sale of new securities.",
    misconception: "The 1934 Act is central to trading markets and public company disclosure.",
    tfAnswer: true
  },
  {
    term: "Insider Trading",
    category: "Securities, Antitrust, and Consumer Protection",
    definition: "Trading securities using material nonpublic information in violation of a duty.",
    example: "An executive buys stock before secret merger news becomes public.",
    mistake: "Thinking all employee stock trading is illegal.",
    misconception: "The legal problem is misuse of material nonpublic information.",
    tfAnswer: true
  },
  {
    term: "Truth in Lending Act",
    category: "Securities, Antitrust, and Consumer Protection",
    definition: "A law requiring clear disclosure of credit terms for consumer borrowers.",
    example: "A store financing agreement must disclose key credit costs.",
    mistake: "Thinking it sets the interest rate for every loan.",
    misconception: "Truth in Lending protects consumer debtors by requiring credit disclosures.",
    tfAnswer: true
  },
  {
    term: "Fair Credit Reporting Act",
    category: "Securities, Antitrust, and Consumer Protection",
    definition: "A law giving consumers rights related to credit reports and inaccurate information.",
    example: "A consumer disputes an inaccurate account and asks for verification.",
    mistake: "Thinking credit bureaus can keep unverifiable false information indefinitely.",
    misconception: "Consumers can request verification and removal of false or unverifiable information.",
    tfAnswer: true
  },
  {
    term: "Fair Debt Collection Practices Act",
    category: "Securities, Antitrust, and Consumer Protection",
    definition: "A law restricting abusive, deceptive, or unfair debt collection practices.",
    example: "A debt collector keeps calling a consumer at work after learning the employer objects.",
    mistake: "Thinking collectors can use any pressure tactic if the debt is real.",
    misconception: "Calling at work after employer objection can violate debt collection rules.",
    tfAnswer: true
  },
  {
    term: "Deceptive Advertising",
    category: "Securities, Antitrust, and Consumer Protection",
    definition: "Advertising that misleads consumers or makes false claims.",
    example: "A company falsely claims a competitor's product is unsafe.",
    mistake: "Thinking puffery and factual deception are always the same thing.",
    misconception: "False statements about a competitor's product can create liability.",
    tfAnswer: true
  },
  {
    term: "Personal Property",
    category: "Property and Environment",
    definition: "Movable property and ownership rights other than real property.",
    example: "Equipment, vehicles, inventory, and certain intangible rights.",
    mistake: "Thinking personal property never changes as technology changes.",
    misconception: "The concept of personal property can expand to new ownership interests.",
    tfAnswer: true
  },
  {
    term: "Real Property",
    category: "Property and Environment",
    definition: "Land and things attached to land, including certain rights connected to land.",
    example: "A warehouse building and the land underneath it.",
    mistake: "Thinking a contract for land includes only dirt and nothing attached to it.",
    misconception: "Real property includes land and important rights or attachments connected to it.",
    tfAnswer: true
  },
  {
    term: "Tenancy in Common",
    category: "Property and Environment",
    definition: "Co-ownership where each owner has an interest that can pass to heirs.",
    example: "Two people own a cottage, and when one dies, that owner's share goes to heirs.",
    mistake: "Confusing it with joint tenancy with right of survivorship.",
    misconception: "In tenancy in common, a deceased owner's interest can pass to heirs.",
    tfAnswer: true
  },
  {
    term: "Environmental Impact Statement",
    category: "Property and Environment",
    definition: "A formal analysis required for major federal actions significantly affecting the environment.",
    example: "A new development project on federal land may require environmental review.",
    mistake: "Thinking private actions always require the same federal statement.",
    misconception: "Major federal actions with significant environmental effects may require an environmental impact statement.",
    tfAnswer: true
  },
  {
    term: "Safe Drinking Water Act",
    category: "Property and Environment",
    definition: "A federal law setting standards for public drinking water systems.",
    example: "A municipal water system must meet EPA pollutant limits.",
    mistake: "Thinking local governments can ignore federal drinking water standards.",
    misconception: "Public water systems must comply with maximum contaminant standards.",
    tfAnswer: true
  },
  {
    term: "Normal Trade Relations",
    category: "International and Regulatory",
    definition: "A trade status in which a country receives another country's most favorable trade treatment.",
    example: "A WTO member receives equal tariff treatment compared with similarly treated members.",
    mistake: "Thinking it means special treatment better than every other country.",
    misconception: "Normal trade relations generally means most-favored treatment regarding imports and exports.",
    tfAnswer: true
  },
  {
    term: "Foreign Corporation",
    category: "International and Regulatory",
    definition: "A corporation doing business in a state other than the one where it was incorporated.",
    example: "A Delaware corporation operates stores in Indiana.",
    mistake: "Thinking foreign always means outside the United States.",
    misconception: "A foreign corporation may need authority to do business in another state.",
    tfAnswer: true
  },
  {
    term: "Whistleblower",
    category: "International and Regulatory",
    definition: "An employee who reports illegal, unsafe, or unethical activity.",
    example: "An employee reports securities fraud or serious safety violations.",
    mistake: "Thinking whistleblowing means gossiping about ordinary workplace disagreements.",
    misconception: "Whistleblower protections focus on reporting misconduct, not routine complaints.",
    tfAnswer: true
  }
];

const SCENARIOS = [
  {
    category: "Business Organizations",
    prompt: "A shareholder uses the corporation's bank account to pay personal bills and never keeps separate records. What legal risk is most obvious?",
    choices: ["Piercing the corporate veil", "Normal trade relations", "Certified check", "Tenancy in common"],
    answer: "Piercing the corporate veil",
    feedback: "Courts may disregard limited liability when owners treat the corporation as their personal wallet."
  },
  {
    category: "Business Organizations",
    prompt: "A person opens a small repair business alone and does not form an LLC or corporation. What is the business form?",
    choices: ["Sole proprietorship", "Professional corporation", "Chapter 11 debtor", "Foreign corporation"],
    answer: "Sole proprietorship",
    feedback: "A sole proprietorship is owned by one person and does not create a separate legal entity."
  },
  {
    category: "Agency and Employment",
    prompt: "A purchasing agent secretly buys land and resells it to the principal at a profit. What duty is breached?",
    choices: ["Duty of loyalty", "Truth in Lending disclosure", "Perfection", "Environmental review"],
    answer: "Duty of loyalty",
    feedback: "An agent cannot secretly profit from an opportunity connected to the agency relationship."
  },
  {
    category: "Agency and Employment",
    prompt: "A company controls when, where, and how a worker performs daily tasks. What issue does this most directly affect?",
    choices: ["Employee versus independent contractor status", "Normal trade relations", "Tenancy in common", "Fair credit reporting"],
    answer: "Employee versus independent contractor status",
    feedback: "Control over the details of work is a key factor in classification."
  },
  {
    category: "Employment Law",
    prompt: "An employee claims race discrimination after being rejected for a job despite being qualified. What must the employee generally establish first?",
    choices: ["A prima facie case", "A certified check", "A mechanic's lien", "A security interest"],
    answer: "A prima facie case",
    feedback: "Employment discrimination claims often begin with facts supporting a prima facie case."
  },
  {
    category: "Employment Law",
    prompt: "A terminated employee wants to continue health insurance but is told continuation coverage is available only if the employee pays. Which concept applies?",
    choices: ["COBRA", "Equal Pay Act", "Predatory pricing", "Chapter 7 liquidation"],
    answer: "COBRA",
    feedback: "COBRA may allow continued coverage, usually at the employee's expense."
  },
  {
    category: "Commercial Paper and Banking",
    prompt: "A bank agrees in advance to accept a check by confirming funds for payment. What type of check is this?",
    choices: ["Certified check", "Promissory note", "Mechanic's lien", "Security interest"],
    answer: "Certified check",
    feedback: "Certification means the bank accepts responsibility for payment under the stated terms."
  },
  {
    category: "Commercial Paper and Banking",
    prompt: "Someone signs another person's name on a check without authority. What issue is raised?",
    choices: ["Forged drawer signature", "Predatory pricing", "Limited liability", "Normal trade relations"],
    answer: "Forged drawer signature",
    feedback: "A forged drawer signature may require the bank to re-credit the customer's account."
  },
  {
    category: "Secured Transactions and Bankruptcy",
    prompt: "A repair shop keeps a customer's machine until the repair bill is paid. Which lien is most likely involved?",
    choices: ["Artisan's lien", "Mechanic's lien", "Environmental impact statement", "Insider trading"],
    answer: "Artisan's lien",
    feedback: "An artisan's lien is usually possessory and tied to labor on personal property."
  },
  {
    category: "Secured Transactions and Bankruptcy",
    prompt: "A struggling corporation wants to keep operating while restructuring its debts. Which bankruptcy chapter is the better match?",
    choices: ["Chapter 11", "Chapter 7", "COBRA", "Fair Debt Collection Practices Act"],
    answer: "Chapter 11",
    feedback: "Chapter 11 is commonly used for business reorganization."
  },
  {
    category: "Securities, Antitrust, and Consumer Protection",
    prompt: "A dominant company sells below cost to drive rivals out of the market and then plans to raise prices. What is this?",
    choices: ["Predatory pricing", "Fair credit reporting", "Normal discounting", "A certified check"],
    answer: "Predatory pricing",
    feedback: "Below-cost pricing becomes legally concerning when used to eliminate competition and recover losses later."
  },
  {
    category: "Securities, Antitrust, and Consumer Protection",
    prompt: "A credit reporting company refuses to remove unverifiable false information after a consumer dispute. Which law is most relevant?",
    choices: ["Fair Credit Reporting Act", "Truth in Lending Act", "Securities Act of 1933", "Safe Drinking Water Act"],
    answer: "Fair Credit Reporting Act",
    feedback: "The FCRA gives consumers rights to dispute and correct inaccurate credit report information."
  },
  {
    category: "Property and Environment",
    prompt: "Two owners hold a cottage so that each owner's share passes to heirs at death. What form of co-ownership is most likely?",
    choices: ["Tenancy in common", "Certified ownership", "Chapter 11 possession", "Agency by ratification"],
    answer: "Tenancy in common",
    feedback: "In tenancy in common, a deceased owner's interest can pass to heirs."
  },
  {
    category: "Property and Environment",
    prompt: "A major project on federal land may significantly affect the environment. What formal analysis may be required?",
    choices: ["Environmental impact statement", "Mechanic's lien", "Fair credit report", "Certified check"],
    answer: "Environmental impact statement",
    feedback: "Major federal actions with significant environmental effects may require an EIS."
  },
  {
    category: "International and Regulatory",
    prompt: "A Delaware corporation opens operations in Indiana. In Indiana, what is it called?",
    choices: ["Foreign corporation", "Sole proprietor", "Certified drawer", "Chapter 7 trustee"],
    answer: "Foreign corporation",
    feedback: "Foreign corporation can mean incorporated in another state, not necessarily another country."
  },
  {
    category: "International and Regulatory",
    prompt: "An employee reports illegal financial reporting activity to the proper authority. What term fits?",
    choices: ["Whistleblower", "Artisan", "Debtor in possession", "Tenant in common"],
    answer: "Whistleblower",
    feedback: "A whistleblower reports illegal, unsafe, or unethical activity."
  }
];
