window.CAMPUS_DATA = {
  updated: '30 août 2026',
  masterclasses: [
    {
      code:'MC-AI', zone:'AI LAB', title:'AI Foundations & Model Literacy',
      field:'AI', intensity:'ENTRY',
      question:'Que fait réellement un modèle — et que ne fait-il pas ?',
      description:'Anatomie des modèles, tokens, contexte, embeddings, multimodalité, outils, provenance, incertitude, hallucinations et évaluation.',
      build:'Construire une petite “AI field notebook” qui compare plusieurs modèles sur les mêmes tâches et documente leurs écarts.',
      labs:['Comparer 3 modèles sur un même problème','Cartographier contexte / mémoire / outils','Construire une grille d’évaluation sans score global'],
      resources:['OpenAI Academy — AI foundations','Hugging Face — cours et documentation','CS50 AI — concepts fondamentaux'],
      bridge:['MC-PY','MC-LLM','MC-RES']
    },
    {
      code:'MC-PY', zone:'THE FORGE', title:'Python with AI',
      field:'CODE', intensity:'ENTRY',
      question:'Comment passer d’une idée à un programme que l’on comprend et peut modifier ?',
      description:'Python, variables, fonctions, structures de données, fichiers, APIs, environnements, debugging et usage critique d’un assistant IA pour coder.',
      build:'Une série de petits outils personnels : analyseur de fichiers, collecteur d’API, convertisseur de données, mini-interface.',
      labs:['DeepLearning.AI AI Python for Beginners','Kaggle Python','Débogage assisté et revue manuelle du code'],
      resources:['DeepLearning.AI — AI Python for Beginners (10 h 20)','Kaggle Learn — Python (~5 h)','PyTorch Learn the Basics — plus tard'],
      bridge:['MC-GIT','MC-WEB','MC-ML','MC-LOCAL']
    },
    {
      code:'MC-GIT', zone:'THE FORGE', title:'Git, GitHub & Code Craft',
      field:'CODE', intensity:'ENTRY',
      question:'Comment garder la mémoire d’un projet sans figer son évolution ?',
      description:'Repositories, commits, branches, pull requests, Markdown, README, issues, historique et publication de code.',
      build:'Un dépôt propre pour chaque expérience importante, avec README, journal des décisions et versions.',
      labs:['GitHub Skills — Introduction to GitHub','Git en ligne de commande','Déployer une page depuis un dépôt'],
      resources:['GitHub Skills — Introduction to GitHub','GitHub Skills — GitHub Pages','Infomaniak — Git/GitHub avec hébergement Web'],
      bridge:['MC-WEB','MC-INFRA','MC-CAP']
    },
    {
      code:'MC-WEB', zone:'WEB / SYSTEMS', title:'The Web as a Medium',
      field:'WEB', intensity:'ENTRY',
      question:'Comment transformer une idée en espace accessible depuis n’importe quel navigateur ?',
      description:'HTML sémantique, CSS, JavaScript, responsive design, accessibilité, HTTP, formulaires, données et publication.',
      build:'Le premier module réellement conçu et publié par Arthur sur son propre domaine.',
      labs:['MDN — Getting Started','MDN Core curriculum','Créer une interface de données responsive'],
      resources:['MDN Learn Web Development','Infomaniak Web Hosting','GitHub Skills — GitHub Pages'],
      bridge:['MC-API','MC-INFRA','MC-CRE']
    },
    {
      code:'MC-API', zone:'WEB / SYSTEMS', title:'APIs & Systems Integration',
      field:'WEB', intensity:'BUILD',
      question:'Comment faire dialoguer plusieurs mondes logiciels ?',
      description:'HTTP/JSON, REST, authentification, webhooks, rate limits, erreurs, secrets, clients Python/JS et composition de services.',
      build:'Une application qui rassemble au moins deux services externes et une source locale avec provenance visible.',
      labs:['Appel API en Python','API côté navigateur / serveur','Webhook et traitement d’événement'],
      resources:['MDN HTTP','OpenAI Academy — Builder resources','Documentation des APIs utilisées'],
      bridge:['MC-LLM','MC-AGT','MC-INFRA']
    },
    {
      code:'MC-LLM', zone:'AI LAB', title:'LLM Applications',
      field:'AI', intensity:'BUILD',
      question:'Comment construire une application autour d’un modèle sans confondre modèle et système ?',
      description:'Structured outputs, tool use, mémoire locale, contexte, retrieval, contraintes, traces et UX d’une application IA.',
      build:'Une application IA simple mais instrumentée : entrées, sortie structurée, sources, erreurs et traces.',
      labs:['Structured outputs','Tool calling','Contexte + documents'],
      resources:['OpenAI Academy — Building with AI','Hugging Face documentation','Jedha IA Essentials — option encadrée'],
      bridge:['MC-AGT','MC-EVAL','MC-LOCAL']
    },
    {
      code:'MC-AGT', zone:'AI LAB', title:'Agents, RAG & Automation',
      field:'AI', intensity:'BUILD',
      question:'Quand un modèle devient-il un agent — et comment garder ses actions observables ?',
      description:'Agents outillés, boucles d’action, RAG, bases vectorielles, orchestration, n8n, LangGraph/smolagents, mémoire et limites.',
      build:'Un agent de recherche ou de projet dont chaque action, source et échec est consultable.',
      labs:['Hugging Face Agents Course','RAG sur un corpus personnel','Workflow n8n / agent outillé'],
      resources:['Hugging Face — AI Agents Course','OpenAI Academy — Builder Bootcamp','Jedha IA Essentials (75 h)'],
      bridge:['MC-EVAL','MC-INFRA','MC-RES']
    },
    {
      code:'MC-EVAL', zone:'RESEARCH COMMONS', title:'Evaluation, LLMOps & Observability',
      field:'RESEARCH', intensity:'DEEP',
      question:'Comment savoir ce qu’un système IA fait réellement après le prototype ?',
      description:'Evals, jeux de tests, logs, latence, coûts, dérive, hallucinations, sécurité, monitoring, feedback loops, RAG evaluation.',
      build:'Un banc d’essai reproductible pour comparer plusieurs versions d’un même système.',
      labs:['Créer un jeu de tests','Observer latence / erreurs / sources','Comparer versions et modèles'],
      resources:['UNIGE — Managing and Evaluating Generative AI systems','OpenAI Academy — Builder resources','NVIDIA — RAG evaluation learning path'],
      bridge:['MC-RES','MC-CAP']
    },
    {
      code:'MC-ML', zone:'DATA OBSERVATORY', title:'Data Science & Machine Learning',
      field:'DATA', intensity:'DEEP',
      question:'Comment passer de données observées à un modèle testable ?',
      description:'Pandas, exploration, visualisation, séparation train/test, validation, modèles classiques, réseaux neuronaux, biais et interprétation.',
      build:'Une étude de données complète avec baseline, modèle, validation et visualisation des erreurs.',
      labs:['Kaggle Intro to ML','Google ML Crash Course','PyTorch Learn the Basics'],
      resources:['EPFL Applied Data Science: ML — profondeur académique','Kaggle Learn','Google Machine Learning Crash Course'],
      bridge:['MC-EVAL','MC-OBS','MC-LOCAL']
    },
    {
      code:'MC-LOCAL', zone:'ORION LAB', title:'Local AI on Orion',
      field:'SYSTEMS', intensity:'BUILD',
      question:'Que peut réellement faire la machine locale, hors cloud ?',
      description:'Audit CPU/GPU/RAM/VRAM, modèles quantifiés, Ollama, LM Studio, Transformers/PyTorch, serveurs locaux, confidentialité et benchmarks.',
      build:'Un laboratoire local documenté avec fiche matériel réelle, modèles testés, mémoire utilisée, latence et cas où le local est préférable.',
      labs:['Audit matériel avec outils système / nvidia-smi','LM Studio ou Ollama','Servir un modèle local via API'],
      resources:['LM Studio docs — Windows, ≥16 GB RAM recommandé, ≥4 GB VRAM conseillé','Ollama — accélération NVIDIA et API locale','Hugging Face Transformers + PyTorch'],
      bridge:['MC-LLM','MC-EVAL','MC-INFRA','MC-GAME']
    },
    {
      code:'MC-GAME', zone:'WORLD STUDIO', title:'Game Worlds & Game AI',
      field:'CREATE', intensity:'BUILD',
      question:'Comment donner des règles, des perceptions et des comportements à un monde ?',
      description:'Godot, scènes/nœuds, GDScript, navigation, états, comportements, systèmes de règles, agents, simulation et expérimentation RL optionnelle.',
      build:'Un petit monde interactif où les entités observent, choisissent et changent de comportement.',
      labs:['Godot Step by Step + premier jeu','FSM / behavior logic','Option : Unity ML-Agents pour RL expérimental'],
      resources:['Godot stable docs 4.7','Unity ML-Agents — option expérimentale','CS50 AI — search / game-playing foundations'],
      bridge:['MC-CRE','MC-LOCAL','MC-AI']
    },
    {
      code:'MC-CRE', zone:'MEDIA STUDIO', title:'Creative AI & Digital Media',
      field:'CREATE', intensity:'BUILD',
      question:'Comment faire de l’IA une matière de création plutôt qu’un générateur de contenu interchangeable ?',
      description:'Image, vidéo, son, 3D, direction artistique, systèmes génératifs, interaction, provenance et combinaison avec Blender/Godot/Web.',
      build:'Une œuvre ou expérience interactive où l’IA n’est qu’une couche parmi d’autres.',
      labs:['Image / animation / audio','Blender + génération assistée','Expérience web ou game interactive'],
      resources:['HEAD Genève — modules IA créative à surveiller','Harvard Extension — Creative AI & Digital Experience Design (horizon)','Blender/Godot/Web docs'],
      bridge:['MC-GAME','MC-WEB','MC-CAP']
    },
    {
      code:'MC-INFRA', zone:'SERVER ROOM', title:'Servers, Linux & Deployment',
      field:'SYSTEMS', intensity:'BUILD',
      question:'Que se passe-t-il entre le code local et un service réellement accessible ?',
      description:'SSH, SFTP, DNS, SSL/TLS, Git, PHP/Python/Node.js, bases MariaDB, logs, cron, secrets, processus, sauvegardes et conteneurs.',
      build:'Déployer un service sur Infomaniak, le versionner, le diagnostiquer et documenter son architecture.',
      labs:['SSH + clés','Git → serveur','Node/Python/PHP + base de données'],
      resources:['Infomaniak — Web Hosting / Node.js / Git / SSH','MDN — Web & HTTP','GitHub Skills'],
      bridge:['MC-API','MC-AGT','MC-CAP']
    },
    {
      code:'MC-RES', zone:'RESEARCH COMMONS', title:'Research Builder',
      field:'RESEARCH', intensity:'BUILD',
      question:'Comment transformer une curiosité en enquête vérifiable puis en prototype ?',
      description:'Recherche Web, sources primaires, papers, provenance, notes, hypothèses, tests, reproductibilité, argumentation et publication.',
      build:'Un dossier de recherche court + prototype ou expérience + bibliographie et zones non résolues.',
      labs:['Question → sources → claims','Notebook de recherche','Reproduction d’un résultat simple'],
      resources:['Documentation primaire','Papers / arXiv selon sujet','OpenAI Deep Research comme outil, jamais comme source unique'],
      bridge:['MC-EVAL','MC-OBS','MC-CAP']
    },
    {
      code:'MC-OBS', zone:'DATA OBSERVATORY', title:'Computational Markets Observatory',
      field:'DATA', intensity:'BUILD',
      question:'Comment observer un marché comme un système de données sans transformer l’analyse en oracle ?',
      description:'APIs de marché, séries temporelles, indicateurs, microstructure, visualisation, backtesting descriptif, provenance et replay.',
      build:'Un observatoire local/web reproduisant les données et analyses d’un instant donné, avec hypothèses explicitables.',
      labs:['Collecte API','Visualisation multi-échelle','Replay et validation hors-échantillon'],
      resources:['Documentation API des plateformes','Kaggle / Pandas','Cours ML/statistiques selon besoin'],
      bridge:['MC-ML','MC-RES','MC-WEB']
    },
    {
      code:'MC-CAP', zone:'EXHIBITION HALL', title:'Open Lab & Capstone',
      field:'OPEN', intensity:'OPEN',
      question:'Qu’est-ce qui apparaît quand plusieurs champs se rencontrent ?',
      description:'Projet libre croisant plusieurs Master Classes. Aucun format imposé : application, jeu, agent, serveur, installation, outil, étude, atlas ou combinaison.',
      build:'Une réalisation montrable avec dépôt, démonstration, note d’architecture, sources et retour critique.',
      labs:['Prototype','Field test','Exhibition / publication'],
      resources:['Les ressources utiles au projet, choisies localement'],
      bridge:['MC-AI','MC-WEB','MC-GAME','MC-RES']
    }
  ],
  external: [
    {kind:'ROMANDIE', name:'42 Lausanne', status:'OPEN PATH', detail:'Renens · gratuit · 18+ · aucun diplôme ni expérience requis · cursus par projets et pairs · 3–5 ans indicatifs · Piscine 4 semaines · IA/LLM/RAG/agents/Python et systèmes dans le cursus.', url:'https://42lausanne.ch/fr/formation'},
    {kind:'ROMANDIE', name:'Jedha Lausanne — IA Essentials', status:'PRACTICAL', detail:'75 h · aucun prérequis technique · Python, APIs LLM, agents, n8n, RAG, bases vectorielles · projet/Demo Day · présentiel ou online · 1 500 €.', url:'https://www.jedha.co/formations/formation-agent-ia'},
    {kind:'ROMANDIE', name:'UNIGE — IA : perspective pragmatique', status:'8–9 OCT 2026', detail:'Genève · présence · 14 h · 2 ECTS avec microcertification · inscription jusqu’au 30 septembre · aucune programmation requise.', url:'https://www.unige.ch/formcont/cours/ai'},
    {kind:'ROMANDIE', name:'UNIGE — Managing & Evaluating GenAI Systems', status:'9–10 OCT 2026', detail:'Campus Biotech · anglais · 2 ECTS · RAG, agents, LLMOps, monitoring, coûts, sécurité · Python intermédiaire recommandé.', url:'https://www.unige.ch/formcont/en/courses/ai-manage-evaluate'},
    {kind:'ROMANDIE', name:'HEG Genève — CAS IA & transformation digitale', status:'WAITLIST 2026–27', detail:'13 ECTS · 6 mois · démarre le 8 octobre 2026 · promotion 2026–27 annoncée complète / liste d’attente · orientation professionnels et transformation.', url:'https://www.hesge.ch/heg/formations/formation-continue/formations-diplomantes/certificate-advanced-studies-cas/intelligence-artificielle-au-service-la-transformation-digitale'},
    {kind:'ROMANDIE', name:'HEAD Genève — IA niveau avancé', status:'WATCH NEXT', detail:'Atelier créatif de 3 jours ; session mars 2026 complète. Intéressant à surveiller pour image, vidéo, code et projet artistique.', url:'https://head.hesge.ch/formations-recherche/intelligence-artificielle-niveau-avance-0'},
    {kind:'ONLINE', name:'EPFL — Applied Data Science: Machine Learning', status:'FORMAL DEPTH', detail:'100 % online · Certificate of Open Studies · 15 ECTS · quatre cours + capstone personnalisable · environ 450 h · CHF 590/mois.', url:'https://www.epfl.ch/education/continuing-education/applied-data-science-machine-learning/'},
    {kind:'ONLINE', name:'OpenAI Academy', status:'CURRENT', detail:'Cours structurés AI foundations, Applied AI foundations, Agents & workflows ; ressources builders, Codex et API ; événements live et certificats selon programmes.', url:'https://openai.com/academy/'},
    {kind:'ONLINE', name:'DeepLearning.AI — AI Python for Beginners', status:'ENTRY', detail:'10 h 20 · aucun prérequis · Python avec assistant IA, fichiers, packages, APIs et projets. Accès annoncé gratuit pendant la bêta de la plateforme.', url:'https://www.deeplearning.ai/courses/ai-python-for-beginners'},
    {kind:'ONLINE', name:'Hugging Face — AI Agents Course', status:'FREE', detail:'Cours gratuit · théorie + pratique · smolagents, LlamaIndex, LangGraph · partage sur le Hub · challenges et certificat de réussite.', url:'https://huggingface.co/learn/agents-course/fr/unit0/introduction'},
    {kind:'ONLINE', name:'Harvard CS50 AI with Python', status:'OPENCOURSEWARE', detail:'7 semaines de matière · projets · search, knowledge, uncertainty, optimization, learning, neural networks, language · Python préalable recommandé.', url:'https://cs50.harvard.edu/ai/'},
    {kind:'ONLINE', name:'Kaggle Learn', status:'FREE', detail:'Cours courts et gratuits avec certificats ; Python ~5 h, puis ML, Pandas, SQL, Game AI & Reinforcement Learning, etc.', url:'https://www.kaggle.com/learn'},
    {kind:'ONLINE', name:'Google — Machine Learning Crash Course', status:'FREE / OPEN', detail:'Introduction pratique au ML avec vidéos, visualisations interactives et exercices ; version actualisée avec davantage d’IA récente.', url:'https://developers.google.com/machine-learning/crash-course/'},
    {kind:'ONLINE', name:'NVIDIA Learning / DLI', status:'OPTIONAL', detail:'Parcours self-paced, dont plusieurs cours gratuits ; deep learning, infrastructure IA, RAG, diffusion et déploiement GPU.', url:'https://www.nvidia.com/en-us/training/academy/self-paced-courses/'},
    {kind:'ONLINE', name:'MDN Learn Web Development', status:'OPEN', detail:'Curriculum structuré du débutant à un niveau “comfortable” : HTML, CSS, JavaScript, accessibilité, responsive, outils et versioning.', url:'https://developer.mozilla.org/fr/docs/Learn_web_development'},
    {kind:'ONLINE', name:'GitHub Skills', status:'OPEN', detail:'Exercices interactifs dans de vrais dépôts : branches, commits, pull requests, Markdown, Git, Pages et workflows.', url:'https://learn.github.com/skills'}
  ]
};
