const TERMS = [
  {
    "module": "Module 1",
    "category": "Legal Foundations",
    "term": "Primary Source of Law",
    "definition": "Binding law from constitutions, statutes, regulations, and court decisions.",
    "example": "A state statute governs a business licensing dispute.",
    "mistake": "Thinking treatises or study guides are primary law.",
    "misconception": "Primary Source of Law: Thinking treatises or study guides are primary law.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Legal Foundations",
    "term": "Secondary Source of Law",
    "definition": "A source that explains, summarizes, or analyzes primary law.",
    "example": "A legal encyclopedia explains how courts interpret negligence.",
    "mistake": "Treating law review articles as binding law.",
    "misconception": "Secondary Source of Law: Treating law review articles as binding law.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Legal Foundations",
    "term": "Supremacy Clause",
    "definition": "The U.S. Constitution and valid federal law override conflicting state law.",
    "example": "A state law conflicting with the Constitution cannot be enforced.",
    "mistake": "Thinking a state constitution can override the U.S. Constitution.",
    "misconception": "Supremacy Clause: Thinking a state constitution can override the U.S. Constitution.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Legal Foundations",
    "term": "Uniform Commercial Code",
    "definition": "A uniform law adopted by states to govern many commercial transactions.",
    "example": "Article 3 applies to negotiable instruments and Article 2 applies to sales of goods.",
    "mistake": "Thinking the UCC is federal criminal law.",
    "misconception": "Uniform Commercial Code: Thinking the UCC is federal criminal law.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Legal Foundations",
    "term": "Common Law",
    "definition": "Law developed from judges decisions in cases.",
    "example": "A court applies prior decisions to a contract dispute.",
    "mistake": "Thinking common law means informal custom only.",
    "misconception": "Common Law: Thinking common law means informal custom only.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Legal Foundations",
    "term": "Stare Decisis",
    "definition": "The doctrine that courts should follow precedent in similar cases.",
    "example": "A trial court follows a higher court decision in the same jurisdiction.",
    "mistake": "Thinking precedent is optional when it is controlling.",
    "misconception": "Stare Decisis: Thinking precedent is optional when it is controlling.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Legal Foundations",
    "term": "Binding Authority",
    "definition": "Legal authority a court must follow.",
    "example": "A state trial court follows its state supreme court.",
    "mistake": "Confusing persuasive authority with binding authority.",
    "misconception": "Binding Authority: Confusing persuasive authority with binding authority.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Legal Foundations",
    "term": "Persuasive Authority",
    "definition": "Authority a court may consider but does not have to follow.",
    "example": "A court considers a decision from another state.",
    "mistake": "Thinking all cited cases are binding.",
    "misconception": "Persuasive Authority: Thinking all cited cases are binding.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Courts and ADR",
    "term": "Jurisdiction",
    "definition": "A court authority to hear and decide a case.",
    "example": "A court must have subject matter and personal jurisdiction.",
    "mistake": "Thinking any court can hear any case.",
    "misconception": "Jurisdiction: Thinking any court can hear any case.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Courts and ADR",
    "term": "Venue",
    "definition": "The proper geographic location for a lawsuit.",
    "example": "A case is filed in the county where the dispute occurred.",
    "mistake": "Confusing venue with jurisdiction.",
    "misconception": "Venue: Confusing venue with jurisdiction.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Courts and ADR",
    "term": "Arbitration",
    "definition": "A private dispute process where a neutral third party makes a decision.",
    "example": "A contract requires disputes to go to arbitration.",
    "mistake": "Thinking arbitration is always informal mediation.",
    "misconception": "Arbitration: Thinking arbitration is always informal mediation.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Courts and ADR",
    "term": "Mediation",
    "definition": "A nonbinding process where a neutral helps parties reach agreement.",
    "example": "A mediator helps two businesses settle before trial.",
    "mistake": "Thinking the mediator decides the winner.",
    "misconception": "Mediation: Thinking the mediator decides the winner.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Constitutional Law",
    "term": "Commerce Clause",
    "definition": "Federal power to regulate interstate commerce.",
    "example": "Congress regulates business activities affecting interstate trade.",
    "mistake": "Thinking states have no role in commerce regulation.",
    "misconception": "Commerce Clause: Thinking states have no role in commerce regulation.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Constitutional Law",
    "term": "Dormant Commerce Clause",
    "definition": "A limit on state laws that unduly burden interstate commerce.",
    "example": "A state law favors local businesses over out-of-state competitors.",
    "mistake": "Thinking states can always regulate commerce however they want.",
    "misconception": "Dormant Commerce Clause: Thinking states can always regulate commerce however they want.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Constitutional Law",
    "term": "Preemption",
    "definition": "Federal law overrides state law when Congress acts exclusively or there is conflict.",
    "example": "A federal safety rule overrides a conflicting state rule.",
    "mistake": "Thinking state law always controls business disputes.",
    "misconception": "Preemption: Thinking state law always controls business disputes.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Ethics and Social Responsibility",
    "term": "Business Ethics",
    "definition": "Standards for deciding what is right or wrong in business conduct.",
    "example": "A manager refuses to mislead customers even if sales would increase.",
    "mistake": "Thinking legal compliance is the same as ethical behavior.",
    "misconception": "Business Ethics: Thinking legal compliance is the same as ethical behavior.",
    "tfAnswer": false
  },
  {
    "module": "Module 1",
    "category": "Ethics and Social Responsibility",
    "term": "Corporate Social Responsibility",
    "definition": "The idea that businesses should consider effects on stakeholders and society.",
    "example": "A company considers workers, customers, and community impact.",
    "mistake": "Thinking CSR means ignoring profit entirely.",
    "misconception": "Corporate Social Responsibility: Thinking CSR means ignoring profit entirely.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Tort Law",
    "term": "Tort",
    "definition": "A civil wrong that causes harm and creates legal liability.",
    "example": "A customer slips because a store failed to clean a spill.",
    "mistake": "Thinking torts require a contract.",
    "misconception": "Tort: Thinking torts require a contract.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Tort Law",
    "term": "Negligence",
    "definition": "Failure to use reasonable care, causing harm.",
    "example": "A driver texts while delivering products and causes a crash.",
    "mistake": "Thinking negligence requires intent to harm.",
    "misconception": "Negligence: Thinking negligence requires intent to harm.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Tort Law",
    "term": "Duty of Care",
    "definition": "The legal obligation to act reasonably toward others.",
    "example": "A store owes customers reasonable care to keep aisles safe.",
    "mistake": "Thinking no duty exists unless there is a written agreement.",
    "misconception": "Duty of Care: Thinking no duty exists unless there is a written agreement.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Tort Law",
    "term": "Causation",
    "definition": "The link between the defendant conduct and the plaintiff injury.",
    "example": "Unsafe equipment causes a worker injury.",
    "mistake": "Skipping causation and focusing only on bad conduct.",
    "misconception": "Causation: Skipping causation and focusing only on bad conduct.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Tort Law",
    "term": "Strict Liability",
    "definition": "Liability without proving fault for certain dangerous activities or products.",
    "example": "A seller may be liable for a defective product.",
    "mistake": "Thinking every injury creates strict liability.",
    "misconception": "Strict Liability: Thinking every injury creates strict liability.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Tort Law",
    "term": "Defamation",
    "definition": "False statement of fact that harms reputation.",
    "example": "A business falsely says a competitor sells unsafe products.",
    "mistake": "Thinking opinions are always defamation.",
    "misconception": "Defamation: Thinking opinions are always defamation.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Intellectual Property",
    "term": "Trademark",
    "definition": "A word, symbol, or design identifying the source of goods or services.",
    "example": "A logo identifies a restaurant brand.",
    "mistake": "Confusing trademark with copyright.",
    "misconception": "Trademark: Confusing trademark with copyright.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Intellectual Property",
    "term": "Copyright",
    "definition": "Protection for original creative expression fixed in a tangible medium.",
    "example": "A training video or textbook chapter is copyrighted.",
    "mistake": "Thinking copyright protects ideas instead of expression.",
    "misconception": "Copyright: Thinking copyright protects ideas instead of expression.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Intellectual Property",
    "term": "Patent",
    "definition": "Protection for a new, useful, and nonobvious invention.",
    "example": "A company patents a new machine design.",
    "mistake": "Thinking a business name is patented.",
    "misconception": "Patent: Thinking a business name is patented.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Intellectual Property",
    "term": "Trade Secret",
    "definition": "Valuable confidential business information protected by secrecy.",
    "example": "A secret recipe or customer list is protected.",
    "mistake": "Thinking registration is always required.",
    "misconception": "Trade Secret: Thinking registration is always required.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Internet and Privacy",
    "term": "Electronic Contract",
    "definition": "A contract formed through electronic communications.",
    "example": "A customer clicks to accept online terms.",
    "mistake": "Thinking online contracts are not real contracts.",
    "misconception": "Electronic Contract: Thinking online contracts are not real contracts.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Internet and Privacy",
    "term": "Privacy Policy",
    "definition": "A statement explaining how a business collects and uses personal data.",
    "example": "An ecommerce site explains how customer data is used.",
    "mistake": "Thinking a privacy policy alone guarantees compliance.",
    "misconception": "Privacy Policy: Thinking a privacy policy alone guarantees compliance.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Criminal and Cyber Law",
    "term": "White-Collar Crime",
    "definition": "Nonviolent crime usually committed in business or professional settings.",
    "example": "Embezzlement, fraud, or insider trading.",
    "mistake": "Thinking crime only means physical violence.",
    "misconception": "White-Collar Crime: Thinking crime only means physical violence.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Criminal and Cyber Law",
    "term": "Embezzlement",
    "definition": "Fraudulent taking of property by someone entrusted with it.",
    "example": "An employee diverts company funds to a personal account.",
    "mistake": "Confusing embezzlement with ordinary theft by a stranger.",
    "misconception": "Embezzlement: Confusing embezzlement with ordinary theft by a stranger.",
    "tfAnswer": false
  },
  {
    "module": "Module 2",
    "category": "Criminal and Cyber Law",
    "term": "Cybercrime",
    "definition": "Crime involving computers, networks, or digital data.",
    "example": "A hacker steals customer payment information.",
    "mistake": "Thinking cybercrime only happens to large companies.",
    "misconception": "Cybercrime: Thinking cybercrime only happens to large companies.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Sales and Lease Contracts",
    "term": "Sale of Goods",
    "definition": "A transaction involving transfer of ownership of movable goods.",
    "example": "A business buys office furniture from a supplier.",
    "mistake": "Applying UCC sales rules to real estate.",
    "misconception": "Sale of Goods: Applying UCC sales rules to real estate.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Sales and Lease Contracts",
    "term": "Merchant",
    "definition": "A person who deals in goods of the kind or has special knowledge of them.",
    "example": "A dealer selling appliances is a merchant.",
    "mistake": "Thinking every buyer is a merchant.",
    "misconception": "Merchant: Thinking every buyer is a merchant.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Sales and Lease Contracts",
    "term": "Firm Offer",
    "definition": "A merchant signed offer that remains open for a stated time.",
    "example": "A supplier promises in writing to keep a price open for 30 days.",
    "mistake": "Thinking all offers stay open indefinitely.",
    "misconception": "Firm Offer: Thinking all offers stay open indefinitely.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Sales and Lease Contracts",
    "term": "Battle of the Forms",
    "definition": "Conflicting terms in business forms under UCC contract rules.",
    "example": "A purchase order and invoice contain different warranty terms.",
    "mistake": "Thinking one different term always kills the contract.",
    "misconception": "Battle of the Forms: Thinking one different term always kills the contract.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Sales and Lease Contracts",
    "term": "Risk of Loss",
    "definition": "Rules determining who bears loss if goods are damaged before receipt.",
    "example": "Goods are destroyed during shipment.",
    "mistake": "Assuming ownership and risk always transfer at the same moment.",
    "misconception": "Risk of Loss: Assuming ownership and risk always transfer at the same moment.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Sales and Lease Contracts",
    "term": "Express Warranty",
    "definition": "A seller statement or promise about goods that becomes part of the bargain.",
    "example": "A seller promises a machine can process 500 units per hour.",
    "mistake": "Thinking all sales talk creates a warranty.",
    "misconception": "Express Warranty: Thinking all sales talk creates a warranty.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Sales and Lease Contracts",
    "term": "Implied Warranty of Merchantability",
    "definition": "A merchant seller implied promise that goods are fit for ordinary use.",
    "example": "A new toaster should toast bread safely.",
    "mistake": "Thinking only written warranties matter.",
    "misconception": "Implied Warranty of Merchantability: Thinking only written warranties matter.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Sales and Lease Contracts",
    "term": "Implied Warranty of Fitness",
    "definition": "A warranty arising when the buyer relies on seller expertise for a particular purpose.",
    "example": "A seller recommends boots for chemical work.",
    "mistake": "Confusing particular purpose with ordinary use.",
    "misconception": "Implied Warranty of Fitness: Confusing particular purpose with ordinary use.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Performance and Breach",
    "term": "Perfect Tender Rule",
    "definition": "Under the UCC, goods generally must conform exactly to the contract.",
    "example": "A buyer rejects goods that do not match specifications.",
    "mistake": "Thinking minor defects never matter in sales.",
    "misconception": "Perfect Tender Rule: Thinking minor defects never matter in sales.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Performance and Breach",
    "term": "Cure",
    "definition": "A seller right to fix nonconforming goods within the allowed time.",
    "example": "A seller replaces defective items before the delivery deadline.",
    "mistake": "Thinking rejection always ends the seller options.",
    "misconception": "Cure: Thinking rejection always ends the seller options.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Performance and Breach",
    "term": "Anticipatory Repudiation",
    "definition": "One party indicates before performance is due that they will not perform.",
    "example": "A seller says it will not deliver next month as promised.",
    "mistake": "Waiting until the due date when repudiation is already clear.",
    "misconception": "Anticipatory Repudiation: Waiting until the due date when repudiation is already clear.",
    "tfAnswer": false
  },
  {
    "module": "Module 3",
    "category": "Performance and Breach",
    "term": "Cover",
    "definition": "Buyer remedy of purchasing substitute goods after seller breach.",
    "example": "A buyer buys replacement inventory from another supplier.",
    "mistake": "Thinking cover means suing only for full contract price.",
    "misconception": "Cover: Thinking cover means suing only for full contract price.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Negotiable Instrument",
    "definition": "A written promise or order to pay money that meets legal requirements.",
    "example": "A properly drafted check or promissory note.",
    "mistake": "Thinking any IOU is negotiable.",
    "misconception": "Negotiable Instrument: Thinking any IOU is negotiable.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Draft",
    "definition": "An order by one party directing another to pay money to a third party.",
    "example": "A check is a type of draft.",
    "mistake": "Confusing a draft with a note.",
    "misconception": "Draft: Confusing a draft with a note.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Promissory Note",
    "definition": "A written promise to pay money.",
    "example": "A borrower signs a note promising to repay a lender.",
    "mistake": "Thinking a note orders a bank to pay.",
    "misconception": "Promissory Note: Thinking a note orders a bank to pay.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Check",
    "definition": "A draft drawn on a bank and payable on demand.",
    "example": "A customer writes a check to a vendor.",
    "mistake": "Forgetting checks can involve UCC Articles 3 and 4.",
    "misconception": "Check: Forgetting checks can involve UCC Articles 3 and 4.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Holder",
    "definition": "A person in possession of an instrument payable to them or bearer.",
    "example": "A payee holding a properly endorsed check.",
    "mistake": "Thinking possession alone always makes someone a holder.",
    "misconception": "Holder: Thinking possession alone always makes someone a holder.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Holder in Due Course",
    "definition": "A holder with special protection who takes in good faith, for value, and without notice of problems.",
    "example": "A bank takes a check without knowledge of defenses.",
    "mistake": "Thinking every holder is automatically an HDC.",
    "misconception": "Holder in Due Course: Thinking every holder is automatically an HDC.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Endorsement",
    "definition": "A signature or instruction transferring rights in an instrument.",
    "example": "A payee signs the back of a check.",
    "mistake": "Thinking endorsement is optional for every transfer.",
    "misconception": "Endorsement: Thinking endorsement is optional for every transfer.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Blank Endorsement",
    "definition": "An endorsement that does not name a new payee.",
    "example": "A payee signs only their name on the back.",
    "mistake": "Forgetting it can make the instrument payable to bearer.",
    "misconception": "Blank Endorsement: Forgetting it can make the instrument payable to bearer.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Special Endorsement",
    "definition": "An endorsement naming the person to whom the instrument is payable.",
    "example": "Pay to Jordan Lee followed by signature.",
    "mistake": "Confusing it with a blank endorsement.",
    "misconception": "Special Endorsement: Confusing it with a blank endorsement.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Restrictive Endorsement",
    "definition": "An endorsement limiting how the instrument may be used.",
    "example": "For deposit only.",
    "mistake": "Thinking restrictions never matter.",
    "misconception": "Restrictive Endorsement: Thinking restrictions never matter.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Drawer",
    "definition": "The person who writes or signs a draft or check.",
    "example": "A business owner signs a check from the business account.",
    "mistake": "Confusing drawer with drawee.",
    "misconception": "Drawer: Confusing drawer with drawee.",
    "tfAnswer": false
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "term": "Drawee",
    "definition": "The person or bank ordered to pay a draft.",
    "example": "The bank is drawee on a check.",
    "mistake": "Calling the payee the drawee.",
    "misconception": "Drawee: Calling the payee the drawee.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Banking",
    "term": "Electronic Fund Transfer",
    "definition": "A funds transfer made electronically rather than by paper check.",
    "example": "ATM withdrawals, direct deposits, and debit card transactions.",
    "mistake": "Thinking electronic payments are governed exactly like checks.",
    "misconception": "Electronic Fund Transfer: Thinking electronic payments are governed exactly like checks.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Banking",
    "term": "Certified Check",
    "definition": "A check accepted by the bank before payment.",
    "example": "A buyer obtains a certified check for a car purchase.",
    "mistake": "Confusing it with an ordinary personal check.",
    "misconception": "Certified Check: Confusing it with an ordinary personal check.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Banking",
    "term": "Forged Drawer Signature",
    "definition": "An unauthorized signature of the account holder on a check.",
    "example": "A thief signs another person name on a check.",
    "mistake": "Assuming the customer always bears the loss.",
    "misconception": "Forged Drawer Signature: Assuming the customer always bears the loss.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Banking",
    "term": "Stop Payment Order",
    "definition": "Customer instruction to bank not to pay a check.",
    "example": "A customer stops payment after a dispute.",
    "mistake": "Thinking a stop payment order is always permanent.",
    "misconception": "Stop Payment Order: Thinking a stop payment order is always permanent.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Creditors Rights and Bankruptcy",
    "term": "Security Interest",
    "definition": "A creditor legal right in collateral securing payment.",
    "example": "A lender has a lien on a financed vehicle.",
    "mistake": "Thinking the creditor owns the collateral immediately.",
    "misconception": "Security Interest: Thinking the creditor owns the collateral immediately.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Creditors Rights and Bankruptcy",
    "term": "Perfection",
    "definition": "A step that protects a secured creditor against others.",
    "example": "A lender files a financing statement.",
    "mistake": "Thinking last to perfect is first in priority.",
    "misconception": "Perfection: Thinking last to perfect is first in priority.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Creditors Rights and Bankruptcy",
    "term": "Mechanic Lien",
    "definition": "A lien on real property for labor or materials used to improve it.",
    "example": "A contractor files a lien after unpaid construction work.",
    "mistake": "Confusing it with an artisan lien.",
    "misconception": "Mechanic Lien: Confusing it with an artisan lien.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Creditors Rights and Bankruptcy",
    "term": "Artisan Lien",
    "definition": "A possessory lien for services performed on personal property.",
    "example": "A repair shop keeps equipment until paid.",
    "mistake": "Thinking it applies to real estate improvements.",
    "misconception": "Artisan Lien: Thinking it applies to real estate improvements.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Creditors Rights and Bankruptcy",
    "term": "Chapter 7 Bankruptcy",
    "definition": "Liquidation bankruptcy involving sale of nonexempt assets.",
    "example": "A debtor seeks discharge after assets are liquidated.",
    "mistake": "Thinking Chapter 7 erases every debt.",
    "misconception": "Chapter 7 Bankruptcy: Thinking Chapter 7 erases every debt.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Creditors Rights and Bankruptcy",
    "term": "Chapter 11 Bankruptcy",
    "definition": "Reorganization bankruptcy often used by businesses.",
    "example": "A company keeps operating while restructuring debt.",
    "mistake": "Thinking Chapter 11 always means closure.",
    "misconception": "Chapter 11 Bankruptcy: Thinking Chapter 11 always means closure.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Agency",
    "term": "Agency Relationship",
    "definition": "A relationship where an agent acts for a principal.",
    "example": "A purchasing agent negotiates supply contracts.",
    "mistake": "Thinking agency requires a written contract every time.",
    "misconception": "Agency Relationship: Thinking agency requires a written contract every time.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Agency",
    "term": "Duty of Loyalty",
    "definition": "Agent duty to put the principal interest ahead of personal gain.",
    "example": "An agent cannot secretly profit from property bought for the principal.",
    "mistake": "Thinking good results excuse self-dealing.",
    "misconception": "Duty of Loyalty: Thinking good results excuse self-dealing.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Agency",
    "term": "Actual Authority",
    "definition": "Authority the principal intentionally gives the agent.",
    "example": "A manager authorizes an employee to order supplies.",
    "mistake": "Confusing actual authority with appearance to outsiders.",
    "misconception": "Actual Authority: Confusing actual authority with appearance to outsiders.",
    "tfAnswer": false
  },
  {
    "module": "Module 5",
    "category": "Agency",
    "term": "Apparent Authority",
    "definition": "Authority a third party reasonably believes the agent has because of the principal conduct.",
    "example": "A company lets a salesperson appear authorized to bind deals.",
    "mistake": "Thinking only written permission creates authority.",
    "misconception": "Apparent Authority: Thinking only written permission creates authority.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Employment Law",
    "term": "Employment-at-Will",
    "definition": "Default rule allowing either party to end employment, subject to exceptions.",
    "example": "An employer can terminate without cause unless an exception applies.",
    "mistake": "Thinking at-will allows illegal discrimination.",
    "misconception": "Employment-at-Will: Thinking at-will allows illegal discrimination.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Employment Law",
    "term": "Title VII",
    "definition": "Federal law prohibiting discrimination based on protected traits.",
    "example": "Employer cannot refuse to hire because of race or sex.",
    "mistake": "Thinking every unfair action is Title VII discrimination.",
    "misconception": "Title VII: Thinking every unfair action is Title VII discrimination.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Employment Law",
    "term": "Prima Facie Case",
    "definition": "Initial showing of facts sufficient to support a claim.",
    "example": "A rejected qualified applicant shows protected-class status and adverse action.",
    "mistake": "Thinking proof beyond all doubt is required at the first step.",
    "misconception": "Prima Facie Case: Thinking proof beyond all doubt is required at the first step.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Employment Law",
    "term": "Americans with Disabilities Act",
    "definition": "Law requiring covered employers to avoid disability discrimination and provide reasonable accommodation.",
    "example": "A qualified employee receives an accessible workstation.",
    "mistake": "Thinking every requested accommodation is required.",
    "misconception": "Americans with Disabilities Act: Thinking every requested accommodation is required.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Employment Law",
    "term": "Equal Pay Act",
    "definition": "Law requiring equal pay for equal work unless a legal factor explains the difference.",
    "example": "Seniority may justify different pay.",
    "mistake": "Thinking every pay difference is automatically illegal.",
    "misconception": "Equal Pay Act: Thinking every pay difference is automatically illegal.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Employment Law",
    "term": "COBRA",
    "definition": "Law allowing continuation of group health coverage after certain events, usually at employee expense.",
    "example": "A terminated employee continues coverage by paying premiums.",
    "mistake": "Thinking the employer must always pay.",
    "misconception": "COBRA: Thinking the employer must always pay.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Business Organizations",
    "term": "Sole Proprietorship",
    "definition": "Business owned by one person with no separate legal entity.",
    "example": "A freelance consultant works under their own name.",
    "mistake": "Thinking it provides limited liability.",
    "misconception": "Sole Proprietorship: Thinking it provides limited liability.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Business Organizations",
    "term": "Partnership",
    "definition": "Business owned by two or more people sharing profits.",
    "example": "Two people operate a restaurant together.",
    "mistake": "Ignoring personal liability risk.",
    "misconception": "Partnership: Ignoring personal liability risk.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Business Organizations",
    "term": "Limited Liability Company",
    "definition": "Flexible business entity offering liability protection and tax flexibility.",
    "example": "A small Indiana business forms an LLC.",
    "mistake": "Thinking LLC protection covers fraud or personal misconduct.",
    "misconception": "Limited Liability Company: Thinking LLC protection covers fraud or personal misconduct.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Business Organizations",
    "term": "Corporation",
    "definition": "A legal entity separate from its owners.",
    "example": "A corporation owns assets and issues stock.",
    "mistake": "Thinking shareholders always pay corporate debts personally.",
    "misconception": "Corporation: Thinking shareholders always pay corporate debts personally.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Business Organizations",
    "term": "Piercing the Corporate Veil",
    "definition": "Holding owners personally liable when they misuse the entity.",
    "example": "Owner commingles personal and company funds.",
    "mistake": "Thinking incorporation is an unbreakable shield.",
    "misconception": "Piercing the Corporate Veil: Thinking incorporation is an unbreakable shield.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Business Organizations",
    "term": "Shareholder Derivative Suit",
    "definition": "Shareholder lawsuit on behalf of the corporation.",
    "example": "Shareholder sues when directors fail to redress harm to the firm.",
    "mistake": "Thinking recovered damages go directly to the shareholder.",
    "misconception": "Shareholder Derivative Suit: Thinking recovered damages go directly to the shareholder.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Business Organizations",
    "term": "Franchise",
    "definition": "Arrangement allowing use of a brand and business system.",
    "example": "A local operator runs a restaurant under a national brand.",
    "mistake": "Thinking a franchisee can ignore system rules.",
    "misconception": "Franchise: Thinking a franchisee can ignore system rules.",
    "tfAnswer": false
  },
  {
    "module": "Module 6",
    "category": "Business Organizations",
    "term": "Professional Corporation",
    "definition": "Corporation for licensed professionals with special liability rules.",
    "example": "Doctors or lawyers form a professional corporation.",
    "mistake": "Thinking it shields professionals from their own malpractice.",
    "misconception": "Professional Corporation: Thinking it shields professionals from their own malpractice.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Securities and Governance",
    "term": "Security",
    "definition": "An investment interest such as stock or bond regulated by securities law.",
    "example": "A share of stock sold to investors.",
    "mistake": "Thinking stock represents corporate debt.",
    "misconception": "Security: Thinking stock represents corporate debt.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Securities and Governance",
    "term": "Stock",
    "definition": "Ownership interest in a corporation.",
    "example": "A shareholder owns common stock.",
    "mistake": "Confusing stock with bonds.",
    "misconception": "Stock: Confusing stock with bonds.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Securities and Governance",
    "term": "Bond",
    "definition": "Debt instrument showing issuer owes money.",
    "example": "A corporation issues bonds to borrow capital.",
    "mistake": "Thinking bonds are ownership shares.",
    "misconception": "Bond: Thinking bonds are ownership shares.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Securities and Governance",
    "term": "Securities Act of 1933",
    "definition": "Law requiring truthful disclosure when securities are first offered.",
    "example": "A company issuing stock avoids material misstatements.",
    "mistake": "Thinking it guarantees investment success.",
    "misconception": "Securities Act of 1933: Thinking it guarantees investment success.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Securities and Governance",
    "term": "Securities Exchange Act of 1934",
    "definition": "Law regulating securities trading markets and public company reporting.",
    "example": "Public companies file periodic reports.",
    "mistake": "Thinking it covers only initial offerings.",
    "misconception": "Securities Exchange Act of 1934: Thinking it covers only initial offerings.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Securities and Governance",
    "term": "Insider Trading",
    "definition": "Trading based on material nonpublic information in violation of a duty.",
    "example": "Executive trades before undisclosed merger news.",
    "mistake": "Thinking all employee trades are illegal.",
    "misconception": "Insider Trading: Thinking all employee trades are illegal.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Securities and Governance",
    "term": "Sarbanes-Oxley Act",
    "definition": "Law increasing public company accountability and executive certification duties.",
    "example": "Executives certify financial reports.",
    "mistake": "Thinking it applies only to small private businesses.",
    "misconception": "Sarbanes-Oxley Act: Thinking it applies only to small private businesses.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Antitrust",
    "term": "Antitrust Law",
    "definition": "Law protecting competition and preventing unfair restraints of trade.",
    "example": "Competitors cannot agree to fix prices.",
    "mistake": "Thinking every large company violates antitrust law.",
    "misconception": "Antitrust Law: Thinking every large company violates antitrust law.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Antitrust",
    "term": "Monopolization",
    "definition": "Improper acquisition or maintenance of monopoly power.",
    "example": "A firm uses exclusionary conduct to keep rivals out.",
    "mistake": "Thinking market success alone is illegal.",
    "misconception": "Monopolization: Thinking market success alone is illegal.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Antitrust",
    "term": "Relevant Product Market",
    "definition": "The set of products used to evaluate market power.",
    "example": "A court defines whether a company competes in all beverages or only energy drinks.",
    "mistake": "Ignoring market definition in monopoly analysis.",
    "misconception": "Relevant Product Market: Ignoring market definition in monopoly analysis.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Antitrust",
    "term": "Predatory Pricing",
    "definition": "Selling below cost to drive competitors out and later raise prices.",
    "example": "A dominant firm prices below cost to eliminate rivals.",
    "mistake": "Calling every low price predatory.",
    "misconception": "Predatory Pricing: Calling every low price predatory.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Antitrust",
    "term": "Price Discrimination",
    "definition": "Charging different buyers different prices in ways that may harm competition.",
    "example": "A supplier gives favored dealers better prices.",
    "mistake": "Thinking every discount is illegal.",
    "misconception": "Price Discrimination: Thinking every discount is illegal.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Consumer Law",
    "term": "Truth in Lending Act",
    "definition": "Law requiring clear disclosure of consumer credit terms.",
    "example": "Installment financing discloses APR and finance charges.",
    "mistake": "Thinking it sets all interest rates.",
    "misconception": "Truth in Lending Act: Thinking it sets all interest rates.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Consumer Law",
    "term": "Fair Credit Reporting Act",
    "definition": "Law giving consumers rights to accurate credit reports.",
    "example": "A consumer disputes unverifiable false information.",
    "mistake": "Thinking credit bureaus may keep false data indefinitely.",
    "misconception": "Fair Credit Reporting Act: Thinking credit bureaus may keep false data indefinitely.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Consumer Law",
    "term": "Fair Debt Collection Practices Act",
    "definition": "Law restricting abusive debt collection practices.",
    "example": "Collector keeps calling at work after employer objects.",
    "mistake": "Thinking collectors can use any tactic if the debt is real.",
    "misconception": "Fair Debt Collection Practices Act: Thinking collectors can use any tactic if the debt is real.",
    "tfAnswer": false
  },
  {
    "module": "Module 7",
    "category": "Consumer Law",
    "term": "Deceptive Advertising",
    "definition": "Advertising that misleads or makes false factual claims.",
    "example": "A business falsely claims a competitor product is dangerous.",
    "mistake": "Confusing puffery with false factual claims.",
    "misconception": "Deceptive Advertising: Confusing puffery with false factual claims.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Personal Property",
    "term": "Personal Property",
    "definition": "Movable property and ownership interests other than real property.",
    "example": "Vehicles, inventory, equipment, and intangible rights.",
    "mistake": "Thinking personal property cannot evolve with new ownership interests.",
    "misconception": "Personal Property: Thinking personal property cannot evolve with new ownership interests.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Personal Property",
    "term": "Gift",
    "definition": "Voluntary transfer of property without consideration.",
    "example": "A parent gives a laptop to a student.",
    "mistake": "Thinking a future promise is a completed gift.",
    "misconception": "Gift: Thinking a future promise is a completed gift.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Personal Property",
    "term": "Gift Intent",
    "definition": "Donor present intent to transfer ownership.",
    "example": "I give this to you now.",
    "mistake": "Confusing future intent with present transfer.",
    "misconception": "Gift Intent: Confusing future intent with present transfer.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Personal Property",
    "term": "Delivery",
    "definition": "Transfer of possession or control required for a gift.",
    "example": "Handing over keys to a vehicle.",
    "mistake": "Thinking words alone always complete the gift.",
    "misconception": "Delivery: Thinking words alone always complete the gift.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Personal Property",
    "term": "Acceptance",
    "definition": "Donee agreement to receive a gift, usually presumed for valuable items.",
    "example": "A student accepts a gifted laptop.",
    "mistake": "Forgetting acceptance is still an element.",
    "misconception": "Acceptance: Forgetting acceptance is still an element.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Personal Property",
    "term": "Bailment",
    "definition": "Transfer of possession, not ownership, for a purpose.",
    "example": "Leaving a car with a repair shop.",
    "mistake": "Thinking bailment transfers title.",
    "misconception": "Bailment: Thinking bailment transfers title.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Personal Property",
    "term": "Lost Property",
    "definition": "Property unintentionally left or dropped by the owner.",
    "example": "A wallet falls from someone pocket.",
    "mistake": "Confusing lost with mislaid property.",
    "misconception": "Lost Property: Confusing lost with mislaid property.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Personal Property",
    "term": "Mislaid Property",
    "definition": "Property intentionally placed somewhere and forgotten.",
    "example": "A customer leaves a phone on a store counter.",
    "mistake": "Thinking the finder always gets title.",
    "misconception": "Mislaid Property: Thinking the finder always gets title.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Real Property",
    "term": "Real Property",
    "definition": "Land and things attached to land.",
    "example": "A building and the land beneath it.",
    "mistake": "Thinking real property means soil only.",
    "misconception": "Real Property: Thinking real property means soil only.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Real Property",
    "term": "Fixture",
    "definition": "Personal property attached so it becomes part of real property.",
    "example": "A built-in furnace in a building.",
    "mistake": "Thinking any movable item is a fixture.",
    "misconception": "Fixture: Thinking any movable item is a fixture.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Real Property",
    "term": "Fee Simple",
    "definition": "The broadest ownership interest in real property.",
    "example": "Owner has indefinite ownership subject to legal limits.",
    "mistake": "Thinking fee simple always includes every mineral right if previously reserved.",
    "misconception": "Fee Simple: Thinking fee simple always includes every mineral right if previously reserved.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Real Property",
    "term": "Joint Tenancy",
    "definition": "Co-ownership with right of survivorship if created properly.",
    "example": "Two owners hold property so survivor receives the interest.",
    "mistake": "Confusing it with tenancy in common.",
    "misconception": "Joint Tenancy: Confusing it with tenancy in common.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Real Property",
    "term": "Tenancy in Common",
    "definition": "Co-ownership where each share can pass to heirs.",
    "example": "A cottage owner share passes to heirs at death.",
    "mistake": "Thinking survivorship is automatic.",
    "misconception": "Tenancy in Common: Thinking survivorship is automatic.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Real Property",
    "term": "Adverse Possession",
    "definition": "Acquiring ownership through open, hostile, actual, exclusive, continuous possession for the statutory period.",
    "example": "A fence encroachment continues openly for years.",
    "mistake": "Thinking secret use can create ownership.",
    "misconception": "Adverse Possession: Thinking secret use can create ownership.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Real Property",
    "term": "Easement",
    "definition": "Right to use another land for a specific purpose.",
    "example": "A driveway access easement.",
    "mistake": "Thinking an easement gives full ownership.",
    "misconception": "Easement: Thinking an easement gives full ownership.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Environmental Law",
    "term": "Environmental Impact Statement",
    "definition": "Formal analysis for major federal actions significantly affecting the environment.",
    "example": "A project on federal land may require review.",
    "mistake": "Thinking every private business decision requires one.",
    "misconception": "Environmental Impact Statement: Thinking every private business decision requires one.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Environmental Law",
    "term": "Clean Water Act",
    "definition": "Federal law regulating pollutant discharges into waters.",
    "example": "A factory needs permits for wastewater discharge.",
    "mistake": "Thinking water pollution rules are only state-level.",
    "misconception": "Clean Water Act: Thinking water pollution rules are only state-level.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "Environmental Law",
    "term": "Safe Drinking Water Act",
    "definition": "Federal law setting standards for public drinking water systems.",
    "example": "A city water system must meet EPA contaminant limits.",
    "mistake": "Thinking municipal systems can ignore federal standards.",
    "misconception": "Safe Drinking Water Act: Thinking municipal systems can ignore federal standards.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "International and Space Law",
    "term": "International Law",
    "definition": "Rules governing relations among nations and cross-border conduct.",
    "example": "A U.S. firm enters a distribution agreement overseas.",
    "mistake": "Thinking only U.S. statutes matter in global business.",
    "misconception": "International Law: Thinking only U.S. statutes matter in global business.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "International and Space Law",
    "term": "Normal Trade Relations",
    "definition": "Trade status giving another country favorable treatment regarding imports and exports.",
    "example": "WTO members receive comparable trade treatment.",
    "mistake": "Thinking it means special treatment above all countries.",
    "misconception": "Normal Trade Relations: Thinking it means special treatment above all countries.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "International and Space Law",
    "term": "Act of State Doctrine",
    "definition": "U.S. courts generally avoid judging official acts of foreign governments within their own territory.",
    "example": "A foreign government nationalizes property within its borders.",
    "mistake": "Thinking U.S. courts always review foreign sovereign acts.",
    "misconception": "Act of State Doctrine: Thinking U.S. courts always review foreign sovereign acts.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "International and Space Law",
    "term": "Alien Tort Statute",
    "definition": "Federal law allowing certain civil actions in U.S. courts for torts committed in violation of international law.",
    "example": "A foreign national sues for a serious international law violation.",
    "mistake": "Thinking it covers ordinary contract disputes.",
    "misconception": "Alien Tort Statute: Thinking it covers ordinary contract disputes.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "International and Space Law",
    "term": "Outer Space Treaty",
    "definition": "International agreement setting basic rules for peaceful use and non-appropriation of outer space.",
    "example": "No nation may claim ownership of the Moon.",
    "mistake": "Thinking space is a lawless territory.",
    "misconception": "Outer Space Treaty: Thinking space is a lawless territory.",
    "tfAnswer": false
  },
  {
    "module": "Module 8",
    "category": "International and Space Law",
    "term": "Space Liability",
    "definition": "Rules assigning responsibility for damage caused by space objects.",
    "example": "A satellite causes damage after reentry.",
    "mistake": "Thinking private space activity has no legal responsibility.",
    "misconception": "Space Liability: Thinking private space activity has no legal responsibility.",
    "tfAnswer": false
  }
];

const SCENARIOS = [
  {
    "module": "Module 1",
    "category": "Legal Foundations",
    "prompt": "A state law conflicts with the U.S. Constitution. Which principle controls?",
    "choices": [
      "Supremacy Clause",
      "Venue",
      "Mediation",
      "Trade Secret"
    ],
    "answer": "Supremacy Clause",
    "feedback": "The U.S. Constitution is supreme over conflicting state law."
  },
  {
    "module": "Module 1",
    "category": "Courts and ADR",
    "prompt": "A neutral helps two businesses settle but does not decide the winner. What process is this?",
    "choices": [
      "Mediation",
      "Arbitration",
      "Judicial Review",
      "Preemption"
    ],
    "answer": "Mediation",
    "feedback": "Mediation helps parties reach agreement; arbitration produces a decision."
  },
  {
    "module": "Module 2",
    "category": "Tort Law",
    "prompt": "A delivery driver carelessly runs a red light and injures another driver. What concept is most relevant?",
    "choices": [
      "Negligence",
      "Patent",
      "Embezzlement",
      "Firm Offer"
    ],
    "answer": "Negligence",
    "feedback": "Negligence is failure to use reasonable care that causes harm."
  },
  {
    "module": "Module 2",
    "category": "Intellectual Property",
    "prompt": "A business protects its logo that identifies its brand. What type of IP is involved?",
    "choices": [
      "Trademark",
      "Copyright",
      "Patent",
      "Trade Secret"
    ],
    "answer": "Trademark",
    "feedback": "Trademarks identify the source of goods or services."
  },
  {
    "module": "Module 3",
    "category": "Sales and Lease Contracts",
    "prompt": "A merchant promises in signed writing to keep an offer open for 30 days. What rule is involved?",
    "choices": [
      "Firm Offer",
      "Cover",
      "Strict Liability",
      "Venue"
    ],
    "answer": "Firm Offer",
    "feedback": "A merchant firm offer may remain open without separate consideration."
  },
  {
    "module": "Module 3",
    "category": "Performance and Breach",
    "prompt": "A buyer purchases substitute goods after the seller fails to deliver. What remedy is this?",
    "choices": [
      "Cover",
      "Cure",
      "Risk of Loss",
      "Blank Endorsement"
    ],
    "answer": "Cover",
    "feedback": "Cover lets a buyer obtain substitute goods after breach."
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "prompt": "A payee signs only their name on the back of a check. What endorsement is this?",
    "choices": [
      "Blank Endorsement",
      "Special Endorsement",
      "Restrictive Endorsement",
      "Certified Check"
    ],
    "answer": "Blank Endorsement",
    "feedback": "A blank endorsement does not name a new payee."
  },
  {
    "module": "Module 4",
    "category": "Negotiable Instruments",
    "prompt": "A bank is ordered to pay a check drawn by its customer. What role does the bank play?",
    "choices": [
      "Drawee",
      "Drawer",
      "Payee",
      "Holder"
    ],
    "answer": "Drawee",
    "feedback": "The drawee is the party ordered to pay."
  },
  {
    "module": "Module 5",
    "category": "Creditors Rights and Bankruptcy",
    "prompt": "A repair shop keeps repaired equipment until the bill is paid. What lien is most likely?",
    "choices": [
      "Artisan Lien",
      "Mechanic Lien",
      "Preemption",
      "COBRA"
    ],
    "answer": "Artisan Lien",
    "feedback": "An artisan lien is possessory and tied to personal property work."
  },
  {
    "module": "Module 5",
    "category": "Agency",
    "prompt": "A purchasing agent secretly profits from property bought for the principal. What duty is breached?",
    "choices": [
      "Duty of Loyalty",
      "Duty of Venue",
      "Strict Scrutiny",
      "Perfect Tender"
    ],
    "answer": "Duty of Loyalty",
    "feedback": "Self-dealing violates the agent duty of loyalty."
  },
  {
    "module": "Module 6",
    "category": "Employment Law",
    "prompt": "A qualified applicant claims rejection based on race. What must be shown first?",
    "choices": [
      "Prima Facie Case",
      "Certified Check",
      "Cover",
      "Normal Trade Relations"
    ],
    "answer": "Prima Facie Case",
    "feedback": "The plaintiff starts by establishing basic facts supporting discrimination."
  },
  {
    "module": "Module 6",
    "category": "Business Organizations",
    "prompt": "An owner mixes personal and corporate funds so badly the company has no separate identity. What risk arises?",
    "choices": [
      "Piercing the Corporate Veil",
      "Arbitration",
      "Firm Offer",
      "Act of State Doctrine"
    ],
    "answer": "Piercing the Corporate Veil",
    "feedback": "Commingling can put limited liability at risk."
  },
  {
    "module": "Module 7",
    "category": "Antitrust",
    "prompt": "A dominant company sells below cost to eliminate competitors and later raise prices. What is this?",
    "choices": [
      "Predatory Pricing",
      "Price Puffery",
      "Fair Credit Reporting",
      "Gift Delivery"
    ],
    "answer": "Predatory Pricing",
    "feedback": "Predatory pricing involves below-cost pricing plus anticompetitive purpose and likely recovery."
  },
  {
    "module": "Module 7",
    "category": "Consumer Law",
    "prompt": "A credit bureau refuses to remove unverifiable false information after a dispute. What law is involved?",
    "choices": [
      "Fair Credit Reporting Act",
      "Truth in Lending Act",
      "Securities Act of 1933",
      "Clean Water Act"
    ],
    "answer": "Fair Credit Reporting Act",
    "feedback": "The FCRA gives consumers dispute and correction rights."
  },
  {
    "module": "Module 8",
    "category": "Personal Property",
    "prompt": "A person says they may give a laptop next month but does not deliver it. What gift element is missing?",
    "choices": [
      "Present intent and delivery",
      "Acceptance only",
      "Jurisdiction",
      "Normal trade relations"
    ],
    "answer": "Present intent and delivery",
    "feedback": "A completed gift needs present intent and delivery, not just a future promise."
  },
  {
    "module": "Module 8",
    "category": "Real Property",
    "prompt": "Two owners hold property so one owner share passes to heirs at death. What is this?",
    "choices": [
      "Tenancy in Common",
      "Joint Tenancy",
      "Fee Simple Absolute",
      "Easement"
    ],
    "answer": "Tenancy in Common",
    "feedback": "Tenancy in common interests can pass to heirs."
  },
  {
    "module": "Module 8",
    "category": "Environmental Law",
    "prompt": "A major federal project may significantly affect the environment. What formal review may be required?",
    "choices": [
      "Environmental Impact Statement",
      "Certified Check",
      "Derivative Suit",
      "Merchant Firm Offer"
    ],
    "answer": "Environmental Impact Statement",
    "feedback": "Major federal actions with significant environmental impact may require an EIS."
  },
  {
    "module": "Module 8",
    "category": "International and Space Law",
    "prompt": "A country claims ownership of part of the Moon. Which principle is implicated?",
    "choices": [
      "Outer Space Treaty",
      "Truth in Lending Act",
      "UCC Article 3",
      "Workers Compensation"
    ],
    "answer": "Outer Space Treaty",
    "feedback": "The Outer Space Treaty rejects national appropriation of outer space bodies."
  }
];

const COVERAGE_SUMMARY = {
  "Module 1 Quiz": {
    "itemsDetected": 150,
    "chapters": [
      "Chapter 1 Legal and Constitutional Foundations",
      "Chapter 2 Courts and ADR",
      "Chapter 3 Ethics"
    ]
  },
  "Module 2 Quiz": {
    "itemsDetected": 200,
    "chapters": [
      "Chapter 4 Tort Law",
      "Chapter 5 Intellectual Property",
      "Chapter 6 Internet Law, Social Media, Privacy",
      "Chapter 7 Criminal and Cyber Law"
    ]
  },
  "Module 3 Quiz": {
    "itemsDetected": 100,
    "chapters": [
      "Chapter 11 Sales and Lease Contracts",
      "Chapter 12 Performance and Breach"
    ]
  },
  "Module 4 Quiz": {
    "itemsDetected": 50,
    "chapters": [
      "Chapter 13 Negotiable Instruments"
    ]
  },
  "Module 5 Quiz": {
    "itemsDetected": 150,
    "chapters": [
      "Chapter 14 Banking",
      "Chapter 15 Creditors Rights and Bankruptcy",
      "Chapter 16 Agency"
    ]
  },
  "Module 6 Quiz": {
    "itemsDetected": 150,
    "chapters": [
      "Chapter 17 Employment Law",
      "Chapter 18 Entrepreneur Options",
      "Chapter 19 Corporations"
    ]
  },
  "Module 7 Quiz": {
    "itemsDetected": 150,
    "chapters": [
      "Chapter 20 Securities and Governance",
      "Chapter 21 Antitrust",
      "Chapter 22 Consumer Law"
    ]
  },
  "Module 8 Final Exam Export": {
    "itemsDetected": 1100,
    "chapters": [
      "Comprehensive final exam export plus property, environmental, international, and space law concepts"
    ]
  }
};
