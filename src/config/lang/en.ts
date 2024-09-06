import { Localization } from '../../utils/Localization'

const en: Localization = {
	'nav.title': 'Assessment Web',
	'nav.home': 'The Assessment Web',
	'nav.scan': 'Assessment Web Scan',
	'nav.result': 'Results',
	'home.heroTitle':
		'GETTING STARTED WITH THE ASSESSMENT WEB: WORKING ON THE QUALITY OF ASSESSMENT',
	'home.heroSubtitle':
		"On this website you can complete the Assessment Web Scan with your degree course team, the assessment or curriculum committee of your team or another relevant representation of the degree course. The Assessment Web Scan is based on the methodology of the 'Asssement Assessed' and is intended to analyze, improve and guarantee the quality of the assessment. The Assessment Web forms the theoretical foundation of the 'Assessment Assessed'.",
	'home.assessmentQualityTitle': 'Jointly determine assessment quality',
	'home.assessmentQualityText':
		'With the help of the Assessment Web you can determine together as a team what the (sustainable) quality of assessment currently looks like in your degree course (position determination). With the help of this scan, you can also make choices together about your development towards (sustainable) assessment quality (ambition determination). In addition, you use the scan with your team to make a substantiated action plan to achieve your ambition.',
	'home.assessmentExplainedTitle': 'The Assessment Web explained',
	'home.assessmentExplainedText':
		'The Assessment Web consists of five assessment entities; assessment (tasks), assessment programme, assessment policy, assessment organisation and assessment literacy. These five entities are connected with one another and also with the centre of the web. The shape of the web symbolizes the interconnectedness of the different assessment entities, makes it visually visible that they are all connected to each other and shows four different development phases.',
	'home.modelExplained':
		'By hovering the mouse over one of the parts of the Assessment Web, the explanation of this part becomes visible.',

	'home.entities.title': 'Entities, elements and development phases',
	'home.entities.text.part1':
		'Three elements can be distinguished within each assessment entity. These are the elements quality criteria, design and quality assurance. The first element, quality criteria, concerns the question of what information is used to achieve and establish the quality of the assessment entities. The second element, design, focuses on the question of how the development and deployment of the five assessment entities are achieved. The third element, quality assurance, focuses on the way in which the quality assurance of the assessment entities is organised. Structural attention to these three elements ensures that work is done from the PDCA cycle.',
	'home.entities.text.part2':
		'A team of a degree course can develop the quality of assessment. Four development phases are distinguished. In the web, these phases of development are symbolized as boxes.',
	'home.entities.text.part3':
		'For each assessment entity, a short description is available for each development phase about how the assessment entity is filled in during that phase. To make this description visible, move your mouse over these parts of the Assessment Web.',

	'home.startscan.title': 'Start the Scan',
	'home.startscan.text':
		"If you want to run the Assessment Web Scan, make sure you can work with your team at the same time. Completing the scan, if you do that as a team, takes at least an hour. You can also choose to first have the scan completed individually, then discuss this in the team and complete the scan again together. Once you have clicked 'start', the scan will start. For each assessment entity and then per element (quality criteria, design and assurance), you are asked to choose a place in the Assessment Web. You fill in both the current position and your ambition. You have the opportunity to give an explanation of this. At the end of the scan, the result will be displayed and you will have the option to download the result.",
	'home.startscan.button': 'Start the Assessment Web Scan',

	'developers.title': 'Developers',
	'developers.text':
		"The Assessment Web was developed by the research centre Contemporary Assessment and Decision Making. The research centre is part of the research team Teacher Qualities of the School of  Education of the HAN University of Applied Sciences. This Assessment-Web Scan was created in collaboration with B302 and with the help of a subsidy from the Dutch ‘Versnellingsplan Onderwijsinnovatie met ICT'.",

	'colofon.title': 'More information?',
	'colofon.subtitle': 'Then contact us!',
	'colofon.tamara.role': 'Lecturer',
	'colofon.tamara.academy': 'Academy of Education',
	'colofon.linda.role': 'Researcher',
	'colofon.linda.academy': 'Academy of Education',
	'colofon.marjoleine.role': 'Researcher',
	'colofon.marjoleine.academy': 'Academy of Education',
	'colofon.edwin.role': 'Researcher',
	'colofon.edwin.academy': 'Academy of Education',
	'colofon.marion.role': 'Educator/Trainer/Advisor',
	'colofon.marion.academy': 'Academy of Education',

	position: 'Position',
	'position.description':
		'In which description do you recognize your degree course the most?',
	ambition: 'Ambition',
	'ambition.description':
		'Which description best suits your degree course in 2 years?',
	positionambitionempty: 'Choose at least 1 option for position and ambition',
	explanation: 'Explanation',
	'scan.explain': 'Explain your answer',
	'scan.next': 'Next question',
	'scan.previous': 'Previous question',
	'scan.toresults': 'To results',
	'results.notfilledin': 'Not filled in',
	'results.positionexplanation': 'Position explanation',
	'results.ambitionexplanation': 'Ambition explanation',
	'results.downloadresults': 'Download results',
	'results.downloadadvice': 'Download advice',
	'results.functionnotavailable': 'This feature is not available at this time',
	'results.resetscan': 'Reset scan',

	'notfound.title': '404 Page not found',
	'notfound.buttonText': 'Back to home',
}

export const enEntities: string[] = [
	'Assessment (tasks)',
	'Assessment programme',
	'Assessment policy',
	'Assessment organisation',
	'Assessment literacy',
]

export const enElements: string[] = [
	'Quality criteria',
	'Design',
	'Quality assurance',
]

export const enPhases: string[] = [
	'Activity-oriented phase',
	'Process-oriented phase',
	'System-oriented phase',
	'Chain-oriented phase',
]

export const enEntityElementPhaseDescriptions: string[][][] = [
	[
		[
			'Teachers develop assessments as they see fit: they use their own quality criteria.',
			'When designing assessments, teachers use quality criteria that are based on the experiences of experienced assessment developers.',
			"Teachers' quality criteria when developing assessments are regularly adjusted based on current (scientific) insights.",
			'The quality criteria used in the design of both the assessments and the learning and assessment objectives are discussed with the professional field.',
		],
		[
			'Teachers often design the assessments on their own and shortly before administering the assessment.',
			'Teachers develop assessments using an assessments cycle or design process. The assessments, which are developed during the teaching period, are made together with colleagues.',
			'The assessments, developed prior to the teaching, are appropriate for the learning outcomes and fit in with earlier education.',
			'The assessments are developed prior to the teaching period. These assessments match not only the study programme that the student follows within the degree  course, but also what is learned in the workplace.',
		],
		[
			'The quality of the assessments is evaluated only when there is reason to do so.',
			'The quality of the assessments is regularly evaluated by the teachers involved. The results are not necessarily discussed with colleagues or students but are used to improve their own assessments.',
			'The quality of assessments is structurally evaluated based on the quality criteria. The results are discussed with relevant partners within the degree course.',
			'Assessments are structurally evaluated on the basis of the quality criteria. The results are discussed with both the relevant partners within the degree course and the professional field.',
		],
	],
	[
		[
			'Within the degree course, it has not been determined which quality criteria the assessment programme should meet.',
			'In the degree course quality criteria have been established for the assessment programme.',
			'The quality criteria for developing the assessment programme are regularly adjusted based on new (scientific) insights.',
			'The quality criteria used in the design of the assessment programme are discussed with the professional field and are regularly adjusted based on current (scientific) insights.',
		],
		[
			'Every teacher develops his own assessments, but there is no overview of the coherence between the assessments. Therefore, it is impossible to establish with certainty that the assessments collectively cover the intended learning outcomes.',
			'The intended learning outcomes form the basis for designing the assessment programme.',
			'During development, attention is paid to both horizontal and vertical coherence between the assessments. There is also consultation on the most suitable assessment design, assessment functions, and the number of assessments.',
			'The structure of the assessment programme is discussed and determined with the professional field. Programme components that take place in the workplace are coordinated with the professional field so that they are feasible and appropriate.',
		],
		[
			'The quality of the assessment programme is evaluated only when there is reason to do so.',
			"With some regularity, the assessment programme's coverage and feasibility are evaluated. The results are not necessarily discussed with all colleagues or students but are used to improve the assessment programme.",
			'The quality of the assessment programme is structurally evaluated based on the quality criteria. The results are discussed with relevant partners within the degree course.',
			'The assessment programme is structurally evaluated on the basis of the quality criteria. The results are discussed with both the relevant partners within the degree course and the professional field.',
		],
	],
	[
		[
			'Within the degree course, it has not been determined which quality requirements an assessment (policy) plan must meet.',
			'Within the degree course, quality criteria have been established for the assessment (policy) plan.',
			'The quality criteria used in developing the assessment (policy) plan are regularly adjusted based on current (scientific) insights.',
			'The quality criteria set for the assessment (policy) plan are discussed with relevant internal and/or external partners and are in line with the national frameworks.',
		],
		[
			'The policy plan is mainly a description of (separate) assessment processes. These are not yet (completely) in line with the vision on education.',
			'The vision on education and the assessment framework of the institution form the basis for the policy plan. In addition to assessment processes, the policy plan includes interventions describing how the ambitions will be achieved.',
			'Current (scientific) knowledge is used to develop processes and interventions. The policy plan, the vision on education and the assessment framework of the institution connect seamlessly.',
			'The processes and interventions included in the policy plan are aimed at the long term. Intermediate goals have been set so that mid-term evaluation is possible.',
		],
		[
			'The quality of the policy plan is only evaluated if there is reason to do so.',
			'The quality, feasibility, and practicality of the policy plan are evaluated at regular intervals. The results are not automatically discussed with all colleagues or students, but are used to adjust the policy plan.',
			'The policy plan is structurally evaluated based on the quality criteria. The results are discussed with relevant partners within the degree  course.',
			'The policy plan is structurally evaluated based on the quality criteria, and the results are discussed with both the relevant partners within the degree course and the professional field.',
		],
	],
	[
		[
			'Within the degree course, it has not been determined which quality criteria the assessment organisation should meet.',
			'Quality criteria have been established for the assessment organisation within the degree course.',
			'The quality criteria used in setting up the assessment organisation are regularly adjusted based on current (scientific) insights.',
			'The quality criteria that are used when setting up the assessment organisation are discussed with the professional field.',
		],
		[
			"The teachers design the assessment processes as they see fit. Agreements have been made about the assessment processes' roles, tasks and responsibilities, but employees only know which responsibilities they themselves have to meet.",
			'All roles, tasks and responsibilities have been defined, so everyone knows who is responsible for what. It is clear to everyone how the various assessment processes relate to or should relate to each other. However, the processes do not yet seamlessly align with each other.',
			'The roles, tasks and responsibilities in the degree course are regularly discussed and aligned with each other.',
			'The design of the assessment organization is discussed with the professional field. The roles, tasks and responsibilities of the professional field in the assessment organisation are laid down, as well as the assessment processes which take place at the workplace.',
		],
		[
			'The quality of the assessment organisation is only evaluated when there is reason to do so.',
			'The quality of the assessment organisation is evaluated regularly. The results are not automatically discussed with all colleagues or students but are used to improve assessment processes.',
			'The quality of the assessment organisation is structurally evaluated based on the quality criteria. The results are discussed with relevant partners within the degree course.',
			'The quality of the assessment organisation is structurally evaluated based on the quality criteria, and the results are discussed with the relevant partners within the degree course and the professional field.',
		],
	],
	[
		[
			'Within the degree course no (concrete) agreements have been made about the assessment literacy expected from teachers.',
			'The requirements for assessment literacy within the degree course are based on the experiences of experienced assessment developers.',
			'The requirements for assessment literacy are regularly adjusted based on (national) frameworks and current insights.',
			'The requirements for assessment literacy are discussed with internal and/or relevant external partners and are in line with the national frameworks.',
		],
		[
			'The responsibility for the development of assessment literacy lies with individual teachers.',
			'For all employees in the assessment organisation, the required assessment literacy has been laid down. To realise this literacy, concrete goals have been formulated.',
			'The required assessment literacy is not only established at an individual level but also at a team level. A targeted effort is made to professionalise employees and teams.',
			'Not only for the partners within the degree course, but also for the partners from the professional field, it has been determined which Assessment literacy they must have.',
		],
		[
			"Teachers' assessment literacy is only evaluated when there is reason to do so.",
			'Both the status of the development of assessment literacy and the quality of assessment literacy are evaluated regularly. The results are not automatically discussed with all colleagues or students but are used to initiate actions to improve assessment literacy.',
			'The quality of assessment literacy is structurally evaluated based on the requirements for assessment literacy. The results are discussed with relevant partners within the degree course and serve as a basis for designing development plans.',
			'The quality of the assessment literacy of all partners in the assessment organisation is structurally evaluated based on the requirements for assessment literacy, and the results are discussed with the relevant partners within the degree course and the professional field.',
		],
	],
]

export const enGenericEntityPhaseDescriptions: string[][] = [
	[
		'Teachers develop assessments as they see fit: they use their own quality criteria, often design the assessments on their own and shortly before administering the assessment. The quality of the assessments is evaluated only when there is reason to do so.',
		'Teachers develop assessments using an assessments cycle or design process and use quality criteria that are based on the experiences of experienced assessment developers. The assessments, which are developed during the teaching period, are made together with colleagues. The quality of the assessments is regularly evaluated by the teachers involved. The results are not necessarily discussed with colleagues or students but are used to improve their own assessments.',
		"Teachers' quality criteria when developing assessments are regularly adjusted based on current (scientific) insights. The assessments, developed prior to the teaching, are appropriate for the learning outcomes and fit in with earlier education. The quality of assessments is structurally evaluated based on the quality criteria. The results are discussed with relevant partners within the degree course.",
		'The quality criteria used in the design of both the assessments and the learning and assessment objectives are discussed with the professional field. These assessments match not only the study programma that the student follows within the degree  course, but also what is learned in the workplace. Assessments are structurally evaluated on the basis of the quality criteria. The results are discussed with both the relevant partners within the degree course and the professional field.',
	],
	[
		'Within the degree course, it has not been determined which quality criteria the assessment programme should meet. Every teacher develops his own assessments, but there is no overview of the coherence between the assessments. Therefore, it is impossible to establish with certainty that the assessments collectively cover the intended learning outcomes.',
		"In the degree course quality criteria have been established for the assessment programme. The intended learning outcomes form the basis for designing the assessment programme. With some regularity, the assessment programme's coverage and feasibility are evaluated. The results are not necessarily discussed with all colleagues or students but are used to improve the assessment programme.",
		'The quality criteria for developing the assessment programme are regularly adjusted based on new (scientific) insights. During development, attention is paid to both horizontal and vertical coherence between the assessments. There is also consultation on the most suitable assessment design, assessment functions, and the number of assessments. The quality of the assessment programme is structurally evaluated based on the quality criteria. The results are discussed with relevant partners within the degree course.',
		'The quality criteria and the structure of the assessment programme are discussed with the professional field. Programme components that take place in the workplace are coordinated with the professional field so that they are feasible and appropriate. The assessment programme is structurally evaluated on the basis of the quality criteria. The results are discussed with both the relevant partners within the degree course and the professional field.',
	],
	[
		'Within the degree course, it has not been determined which quality requirements an assessment (policy) plan must meet. The policy plan is mainly a description of (separate) assessment processes. These are not yet (completely) in line with the vision on education. The quality of the policy plan is only evaluated if there is reason to do so.',
		'Within the degree course, quality criteria have been established for the assessment (policy) plan. The vision on education and the assessment framework of the institution form the basis for the policy plan. In addition to assessment processes, the policy plan includes interventions describing how the ambitions will be achieved. The quality, feasibility, and practicality of the policy plan are evaluated at regular intervals. The results are not automatically discussed with all colleagues or students, but are used to adjust the policy plan.',
		'The quality criteria used in developing the assessment (policy) plan are regularly adjusted based on current (scientific) insights. Current (scientific) knowledge is used to develop processes and interventions. The policy plan, the vision on education and the assessment framework of the institution connect seamlessly. The policy plan is structurally evaluated based on the quality criteria. The results are discussed with relevant partners within the degree course.',
		'The quality criteria set for the assessment (policy) plan are discussed with relevant internal and/or external partners and are in line with the national frameworks. The processes and interventions included in the policy plan are aimed at the long term. Intermediate goals have been set so that mid-term evaluation is possible. The policy plan is structurally evaluated based on the quality criteria, and the results are discussed with both the relevant partners within the degree course and the professional field',
	],
	[
		"Within the degree course, it has not been determined which quality criteria the assessment organisation should meet. The teachers design the assessment processes as they see fit. Agreements have been made about the assessment processes' roles, tasks and responsibilities, but employees only know which responsibilities they themselves have to meet. The quality of the assessment organisation is only evaluated when there is reason to do so.",
		'Quality criteria have been established for the assessment organisation within the degree course. All roles, tasks and responsibilities have been defined, so everyone knows who is responsible for what. It is clear to everyone how the various assessment processes relate to or should relate to each other. However, the processes do not yet seamlessly align with each other. The quality of the assessment organisation is evaluated regularly. The results are not automatically discussed with all colleagues or students but are used to improve assessment processes.',
		'The quality criteria used in setting up the assessment organisation are regularly adjusted based on current (scientific) insights. The roles, tasks and responsibilities in the degree course are regularly discussed and aligned with each other. The quality of the assessment organisation is structurally evaluated based on the quality criteria. The results are discussed with relevant partners within the degree course.',
		"The quality criteria and the assessment organisation's structure are discussed with the professional field. The roles, tasks and responsibilities of the professional field in the assessment organisation are laid down, as well as the assessment processes which take place at the workplace. The quality of the assessment organisation is structurally evaluated based on the quality criteria, and the results are discussed with the relevant partners within the degree course and the professional field.",
	],
	[
		"Within the degree course no (concrete) agreements have been made about the assessment literacy expected from teachers. The responsibility for the development of assessment literacy lies with individual teachers. Teachers' assessment literacy is only evaluated when there is reason to do so.",
		'The requirements for assessment literacy within the degree course are based on the experiences of experienced assessment developers. For all employees in the assessment organisation, the required assessment literacy has been laid down. To realise this literacy, concrete goals have been formulated. Both the status of the development of assessment literacy and the quality of assessment literacy are evaluated regularly. The results are not automatically discussed with all colleagues or students but are used to initiate actions to improve assessment literacy.',
		'The requirements for assessment literacy are regularly adjusted based on (national) frameworks and current insights. The required assessment literacy is not only established at an individual level but also at a team level. A targeted effort is made to professionalise employees and teams. The quality of assessment literacy is structurally evaluated based on the requirements for assessment literacy. The results are discussed with relevant partners within the degree course and serve as a basis for designing development plans.',
		'The requirements for assessment literacy are discussed with internal and/or relevant external partners and are in line with the national frameworks. Also for the partners from the professional field, it has been determined which Assessment literacy they must have. The quality of the assessment literacy of all partners in the assessment organisation is structurally evaluated based on the requirements for assessment literacy, and the results are discussed with the relevant partners within the degree course and the professional field.',
	],
]

// entity index: phase index = advice
export const enEntityPhaseAdvice: string[][] = [
	[
		`Jullie opleiding bevindt zich voor de toetsentiteit toetsen/toetstaken overall in de activiteiten-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de activiteit-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van toetsen en toetstaken. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de proces-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat er nog geen kwaliteitscriteria zijn geformuleerd. Of dat hierover verschillende beelden ontstaan bij de collega’s in de opleiding. Deze kwaliteitscriteria – en met name een gedeelde visie hierop – zijn echter essentieel omdat ze de basis zijn voor het ontwerpen van toetsen/toetstaken en het evalueren van de kwaliteit hiervan. Bij kwaliteitscriteria voor toetsen en toetstaken kan gedacht worden aan criteria als validiteit, betrouwbaarheid, objectiviteit, discriminerend vermogen, realiseerbaarheid, efficiëntie en acceptatie (Joosten-ten Brinke & Draaijer, 2014 en Draaijer & Joosten-ten Brinke, 2014). 
        
        Het risico van de activiteiten-georiënteerde ontwikkelingsfase is dat de kwaliteit van de toetsen en toetstaken afhankelijk is van de persoon die deze maakt. Doordat er geen gezamenlijke afspraken zijn over de kwaliteit waaraan toetsen en toetstaken moeten voldoen hebben de docenten mogelijk andere beelden bij kwaliteit. Studenten krijgen hierdoor toetsen voorgelegd van wisselende kwaliteit. De kwaliteit van de toets is in dit geval immers afhankelijk van de docent die de toets maakt. Bovendien is het niet mogelijk met zekerheid te zeggen dat de eigen kwaliteitscriteria aansluiten bij de visie op toetsing van de opleiding of op organisatorische randvoorwaarden binnen de opleiding. Dit kan ertoe leiden dat toetsen niet passend zijn bij de opleidingscontext of niet in lijn zijn met organisatorische en praktische afspraken en procedures binnen de opleiding.
        
        Ontwerp
        De activiteiten-georiënteerde ontwikkelingsfase kenmerkt zich daarnaast door de wijze waarop collega’s uit de opleiding betrokken zijn bij het ontwikkelen van de toetsen en toetstaken: vaak voeren de collega’s op ad-hoc basis losstaande activiteiten uit. Het werkveld is hier niet of nauwelijks bij betrokken, ook worden niet alle relevante partners uit de opleiding, zoals bijvoorbeeld studenten, vanzelfsprekend betrokken. Meestal zijn er binnen de opleiding geen concrete afspraken gemaakt over het ontwikkelproces van toetsen en toetstaken. 
        
        Het risico hiervan is dit kan leiden tot (veel) onduidelijkheid bij studenten: iedere docent toetst op zijn eigen manier, toetsen zien er – zelfs bij dezelfde toetsvorm – mogelijk anders uit en de toetsen zijn mogelijk kwalitatief van wisselend niveau. Daarnaast worden in de activiteiten-georiënteerde fase toetsen en toetstaken vaak vlak voor de toetsafname ontwikkeld. Risico hiervan is dat het toetsbureau toetsen mogelijk te laat ontvangt, waardoor zij onnodige druk ervaren bij het maken en verspreiden van de toetsen. Door de late ontwikkeling is het ook mogelijk dat er onzorgvuldigheden in de toets zitten doordat er geen tijd meer was om met ten minste 2 docenten naar de toets te kijken. Er is in dit geval bij de toetsontwikkeling onvoldoende tijd om gezamenlijk toetsen én onderwijs te ontwikkelen, zodat er geen goede invulling gegeven kan worden aan de aansluiting tussen de leeruitkomsten (onderwijs) en toetsdoelen (toetsing) (constructive alignment).
        
        Borging
        In de activiteiten-georiënteerde fase wordt de kwaliteit van toetsen en toetstaken meestal slechts incidenteel geëvalueerd. Hierdoor bestaat de mogelijkheid dat toetsen van onvoldoende kwaliteit afgenomen worden én dat deze toetsen meerdere jaren worden afgenomen zonder dat kwaliteitsverbetering plaatsvindt. 
        
        Op weg naar de proces-georiënteerde fase
        Om de stap te zetten naar de proces-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Formuleer concrete kwaliteitscriteria voor toetsen en toetstaken. Neem deze kwaliteitscriteria op in het toetsbeleidsplan. Deel de criteria met alle docenten die verantwoordelijk zijn voor het maken van toetsen. Als docenten weten aan welke kwaliteitscriteria een toets moet voldoen kan een basiskwaliteit van de toetsen worden gerealiseerd.
        -	Maak binnen het onderwijsteam afspraken over de stappen die doorlopen worden bij het ontwikkelen van toetsen. Hierdoor weten docenten welke stappen doorlopen moeten worden bij het maken van een toets en toetstaken. Als deze stappen ook daadwerkelijk door iedereen gezet worden, leidt dit tot eenduidigheid tussen toetsen en kan een basiskwaliteit van toetsen worden gerealiseerd.
        -	Maak binnen het onderwijsteam afspraken over planning bij het ontwikkelen van toetsen. Ontwikkel toetsmatrijzen voorafgaand aan het onderwijs, en ontwikkel concrete toetsvragen zodra dit mogelijk is. Hierdoor ontstaat er een logische samenhang tussen de toetsdoelen, het onderwijs en de toetsvragen, is er voldoende tijd om indien nodig invulling te geven aan het vier-ogenprincipe én zijn de toetsen tijdig beschikbaar voor de afname.
        -	Maak binnen het onderwijsteam afspraken over de evaluatie van toetsen. Gebruik de kwaliteitscriteria die zijn vastgesteld als basis om de evaluatie uit te voeren. Zet de evaluatie van toetsen op de agenda van de docentoverleggen, zodat met regelmaat de bevindingen uit de evaluaties gedeeld worden binnen het team.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toets(tak)en overall in de proces-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de proces-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van de toets(tak)en. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de systeem-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik wordt gemaakt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor deze criteria is veelal gebaseerd op ervaringen van relevante actoren in de opleiding. Het is echter niet mogelijk om met zekerheid te zeggen dat de vastgestelde kwaliteitscriteria aansluiten bij de visie op toetsing van de opleiding of op organisatorische randvoorwaarden binnen de opleiding. Dit kan ertoe leiden dat toetsen die volledig volgens de kwaliteitscriteria zijn ontwikkeld niet passend zijn bij de opleidingscontext of niet in lijn zijn met organisatorische en praktische afspraken en procedures binnen de opleiding.
        
        Ontwerp
        In deze ontwikkelingsfase worden bij het ontwikkelen van toetsen vaak de toetscyclus en het ontwerpproces doorlopen. Als de stappen in het ontwikkelproces (bijvoorbeeld de toetscyclus en het ontwerpproces) niet door alle docenten worden doorlopen, dan kan dit tot veel onduidelijkheid leiden bij studenten. Iedere docent toetst op zijn eigen manier, toetsen zien er – zelfs bij dezelfde toetsvorm – mogelijk anders uit en de toetsen zijn mogelijk kwalitatief van wisselend niveau.
        
        Toets(tak)en worden meestal ontwikkeld tijdens de uitvoering van de onderwijseenheid. Hierdoor is het mogelijk dat er onzorgvuldigheden in de toets zitten doordat er geen tijd meer was om met ten minste 2 docenten naar de toets te kijken. Er is dan in de toetsontwikkeling onvoldoende tijd om gezamenlijk toetsen én onderwijs te ontwikkelen, zodat er mogelijkerwijs geen optimale invulling gegeven kan worden aan de aansluiting tussen de leeruitkomsten (onderwijs) en toetsdoelen (toetsing) (constructive alignment).
        
        Borging
        In de proces-georiënteerde fase vindt evaluatie incidenteel plaats. Het resultaat van de evaluatie wordt besproken met relevante actoren in de opleiding en aanpassingen worden doorgevoerd. De evaluatie van toetsen vindt dus nog niet met regelmaat plaats, docenten en/of de toetscommissie bekijken toetsen uitsluitend als hier aanleiding toe lijkt te bestaan. Hierdoor is er geen overkoepelend zicht op de kwaliteit van de toetsen binnen de gehele opleiding. Ook is het niet vanzelfsprekend dat de evaluatie plaatsvindt aan de hand van afgesproken kwaliteitscriteria. Het is hierdoor mogelijk dat de toetsen van wisselende kwaliteit zijn, maar wel allemaal het stempel ‘voldoende kwaliteit’ krijgen.
        
        Op weg naar de systeem-georiënteerde fase
        Om de stap te zetten naar de systeem-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Baseer de kwaliteitscriteria voor toetsen op ervaringen van ervaren toetsontwikkelaars binnen de eigen opleiding én toets de kwaliteitscriteria aan de visie op onderwijs van de opleiding. Zorg er daarnaast voor dat de vastgestelde kwaliteitscriteria uitvoerbaar en passend zijn binnen de context van de opleiding.
        -	Maak tijdens het ontwikkelen van toetsen en toetstaken altijd bewust gebruik van een toetscyclus en een ontwerpproces. Dan worden toetsen ontwikkeld volgens een vooraf vastgestelde procedure waarin de vastgestelde kwaliteitscriteria een plek hebben gekregen. Als gevolg hiervan hebben alle toetsen een toetsmatrijs (indien relevant), een instructie voor de studenten en een beoordelingsmodel.  
        -	Ontwikkel de toetsen altijd samen met collega’s tijdens of voorafgaand aan de uitvoering van het onderwijs. Zorg dat de toetsen op tijd beschikbaar zijn. Zorg ook dat er in de toetsontwikkeling tijd is om gezamenlijk toetsen te ontwikkelen (4-ogenprincipe) en om de toetsen tijdig aan te leveren bij het toetsbureau.
        -	Maak afspraken over de regelmaat waarop de kwaliteit van toetsen worden geëvalueerd door de docenten die de toetsen ontwikkelen en/of de toetscommissie. De toetsontwikkelaars hebben daardoor enig zicht op de kwaliteit van de toetsen en kunnen de toetsen aanpassen op basis van de evaluatieresultaten.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toets(tak)en overall in de systeem-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de systeem-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van de toets(tak)en. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de keten-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik gemaakt wordt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor de criteria is gebaseerd op (wetenschappelijke) literatuur. De keuze is eveneens getoetst aan ervaringen van relevante actoren in de opleiding. De kwaliteitscriteria aan de hand waarvan toetsen worden geconstrueerd zijn mogelijkerwijs verouderd. En het is mogelijk dat in deze fase het oordeel van studenten over de kwaliteit van toetsen niet wordt meegenomen bij afspraken over het realiseren van kwaliteit.
        
        Ontwerp
        Bij het ontwikkelen van toetsen worden in deze ontwikkelingsfase de toetscyclus en het ontwerpproces volledig doorlopen door de toetsconstructeurs binnen de opleiding. Het ontwikkelingsproces van toetsen heeft een logische plaats binnen alle onderwijsprocessen binnen de opleiding. Het is echter niet vanzelfsprekend dat nagegaan wordt of de toets aansluit bij eerder gegeven onderwijs en onderwijs dat zal volgen. Het is daardoor mogelijk dat er sprake is van kwalitatief goede toetsen (technisch) die niet goed passen binnen het toetsprogramma.
        
        Toets(tak)en worden altijd ontwikkeld voorafgaand aan de onderwijseenheid. Er is in de toetsontwikkeling soms onvoldoende tijd om gezamenlijk toetsen én onderwijs te ontwikkelen, zodat er mogelijkerwijs geen optimale invulling gegeven kan worden aan de aansluiting tussen de leeruitkomsten (onderwijs) en toetsdoelen (toetsing) (constructive alignment).
        
        Borging
        In de systeem-georiënteerde fase vindt de evaluatie structureel en systematisch plaats als onderdeel van de kwaliteitscyclus van toetsing. Het resultaat van de evaluatie wordt besproken met alle relevante actoren in de opleiding en aanpassingen worden doorgevoerd. Het is niet altijd vanzelfsprekend dat de evaluatie plaatsvindt aan de hand van afgesproken kwaliteitscriteria. Het is hierdoor mogelijk dat de toetsen van wisselende kwaliteit zijn, maar wel allemaal het stempel ‘voldoende kwaliteit’ krijgen.
        
        Op weg naar de keten-georiënteerde fase
        Om de stap te zetten naar de keten-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Stel de vastgestelde kwaliteitscriteria bij op basis van nieuwe (wetenschappelijke) inzichten en op basis van studentevaluaties. Spreek regelmatig met elkaar over de kwaliteit van toetsen en kijk kritisch met elkaar naar nieuwe ontwikkelingen op het gebied van toetskwaliteit.
        -	Zorg bij het ontwikkelen van toetsen voor afstemming met docenten die – binnen het onderwijs- en toetsprogramma – onderwijs verzorgen voorafgaand aan en volgend op het onderwijs waarvoor de toets ontwikkeld wordt. Toetsen zijn dan niet alleen toetstechnisch ontworpen volgens een cyclus, ze sluiten dan ook goed aan bij eerder gegeven onderwijs en het onderwijs dat zal volgen. De toetsen zijn dan passend bij de beoogde leerresultaten.
        -	Ontwikkel de toetsen voorafgaand aan het onderwijs op basis de leeruitkomsten. Zorg dat er in de toetsontwikkeling ruimschoots tijd is om gezamenlijk toetsen én onderwijs te ontwikkelen, zodat er goed invulling gegeven kan worden aan de aansluiting tussen de leeruitkomsten (onderwijs) en toetsdoelen (toetsing) (constructive alignment).
        -	Evalueer de toetsen als onderdeel van een kwaliteitscyclus (PDCA) structureel en bespreek de opbrengsten van de toetsevaluaties met collega’s, studenten of andere relevante partners binnen de opleiding. Dan is er voortdurend zicht op de kwaliteit van de toetsen binnen de opleiding: het is bekend welke toetsen van goede kwaliteit zijn, maar er is ook bekend waar de verbeterpunten zich bevinden. Zorg dat de toetscommissie en/of docenten die de toetsevaluatie uitvoeren weten aan welke criteria toetsen moeten voldoen, en evalueer de toetsen structureel. Bevraag studenten met regelmaat op de kwaliteit van toetsen (bijvoorbeeld na afname van de toets). De informatie die hieruit naar voren komt, kan dan worden gebruikt om de toetsen kwalitatief te verbeteren.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toets(tak)en overall in de keten-georiënteerde fase. Dat betekent concreet dat alle onderstaande elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de keten-georiënteerde fase. 

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik wordt gemaakt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor de criteria is gebaseerd op (wetenschappelijke) literatuur. De keuze is eveneens getoetst aan ervaringen van relevante actoren in de opleiding, ketenpartners, collega-instellingen en/of externe deskundigen. Ketenpartners en/of externe deskundigen worden hierbij betrokken.
        
        Ontwerp
        Bij het ontwikkelen worden de toetscyclus en het ontwerpproces volledig doorlopen door de toetsconstructeurs binnen de opleiding. Waar relevant worden ketenpartners, collega-instellingen en/of experts hierbij betrokken. Toets(tak)en worden altijd ontwikkeld voorafgaand aan de onderwijseenheid.
        
        Borging
        In de keten-georiënteerde fase vindt de evaluatie structureel en systematisch plaats als onderdeel van de kwaliteitscyclus van toetsing. Het resultaat van de evaluatie wordt besproken met alle relevante actoren in de opleiding en met ketenpartners en/of externe deskundigen, en aanpassingen worden doorgevoerd.
        
        Ontwikkeling
        Jullie opleiding bevindt zich op dit moment voor deze entiteit in de keten-georiënteerde fase. Het is uiteraard van belang om aandacht te blijven besteden aan de kwaliteit van toetsing. Wellicht bevindt deze entiteit zich namelijk al in de keten- georiënteerde fase, maar geldt dat (nog) niet voor een of meerdere andere toetsentiteiten. Jullie kunnen er dan voor kiezen om daar nu meer prioriteit aan te geven. Blijf je er samen van bewust dat toetsentiteiten met elkaar samenhangen, zoals het toetsweb laat zien. Keuzes in een ander toetsentiteit kunnen dus ook van invloed zijn op deze toetsentiteit.`,
	],

	[
		`Jullie opleiding bevindt zich voor de toetsentiteit toetsprogramma overall in de activiteiten-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de activiteit-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van het toetsprogramma. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de proces-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat er nog geen kwaliteitscriteria zijn geformuleerd. Of dat hierover verschillende beelden ontstaan bij de collega’s in de opleiding. Deze kwaliteitscriteria – en met name een gedeelde visie hierop – zijn echter essentieel omdat ze de basis zijn voor het ontwerpen van het toetsprogramma en het evalueren van de kwaliteit hiervan. Bij kwaliteitscriteria voor het toetsprogramma kan gedacht worden aan criteria als eerlijkheid, authenticiteit, vergelijkbaarheid, haalbaarheid, transparantie, geschiktheid voor onderwijsdoelen en tijd & kosten (Baartman & Van der Vleuten, 2014).
        
        Het risico van de activiteiten-georiënteerde ontwikkelingsfase is dat de examencommissie, toetscommissie en curriculumcommissie geen gezamenlijke beelden hebben bij de kwaliteitscriteria die aan een toetsprogramma moeten worden gesteld. Hierdoor is het mogelijk onduidelijk of de eigen kwaliteitscriteria aansluiten bij de visie op toetsing van de opleiding of op organisatorische randvoorwaarden binnen de opleiding. Dit kan ertoe leiden dat de toetsen in de opleiding niet logisch samenhangen, dat toetsvormen niet passend zijn bij de opleidingscontext of de beoogde leerresultaten, of dat de beoogde leerresultaten niet worden gedekt.
        
        Ontwerp
        De activiteiten-georiënteerde ontwikkelingsfase kenmerkt zich daarnaast door de wijze waarop collega’s uit de opleiding betrokken zijn bij het ontwikkelen van het toetsprogramma: vaak ontwikkelen docenten toetsen zonder zich bewust te zijn van het geheel aan toetsen binnen de opleiding. Het werkveld is niet of nauwelijks betrokken bij de keuze voor toetsvormen, ook worden niet alle relevante partners uit de opleiding, zoals bijvoorbeeld studenten, vanzelfsprekend betrokken. 
        
        Risico hiervan is dat er geen overzicht beschikbaar is waarin te zien is hoeveel toetsen worden afgenomen, wat voor soort toetsen dit zijn en welke beoogde leerresultaten hierin centraal staan. Het is daardoor niet met zekerheid vast te stellen dat de student op basis van het onderwijs- en toetsprogramma wordt opgeleid tot startbekwame professional. Bovendien is het in deze ontwikkelingsfase vaak gebruikelijk dat iedere docent zijn eigen toetsen ontwikkeld. Overleg over de samenhang tussen toetsen – over bijvoorbeeld inhoud of toenemende complexiteit qua toetsvorm – vindt niet vanzelfsprekend plaats. Het is hierdoor niet met zekerheid vast te stellen dat er sprake is van een samenhangend toetsprogramma.
        
        Borging
        In de activiteiten-georiënteerde fase wordt de kwaliteit van het toetsprogramma meestal slechts incidenteel geëvalueerd. Het is daardoor onduidelijk of alle beoogde leerresultaten worden gedekt en of er sprake is van een logisch samenhangend geheel van toetsen.
        
        Op weg naar de proces-georiënteerde fase
        Om de stap te zetten naar de proces-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Formuleer concrete kwaliteitscriteria voor het toetsprogramma. Neem deze kwaliteitscriteria op in het toetsbeleidsplan. Deel de criteria met de toetscommissies, curriculumcommissie en examencommissie. Wanneer de leden van deze commissies weten aan welke kwaliteitscriteria het toetsprogramma moet voldoen kan een basiskwaliteit van het toetsprogramma worden gerealiseerd.
        -	Maak binnen curriculumcommissie een overzicht van alle toetsen. Deel dit overzicht binnen het onderwijsteam. Door een overzicht te maken wordt duidelijk hoeveel toetsen er binnen de gehele opleiding worden afgenomen en welke toetsvormen daarbij worden ingezet.
        -	Bespreek het toetsprogramma, en meer expliciet de samenhang tussen de toetsen en de dekking van de beoogde leerresultaten, binnen het onderwijsteam. Het benoemen van de relaties tussen de toetsen en de relaties van afzonderlijke toetsen met de beoogde leerresultaten zorgt ervoor dat toetsen worden gezien als onderdeel van een groter geheel. 
        -	Maak binnen het onderwijsteam afspraken over de evaluatie van het toetsprogramma. Gebruik de kwaliteitscriteria die zijn vastgesteld als basis om de evaluatie uit te voeren. Zet de evaluatie van het toetsprogramma op de agenda van de docentoverleggen, zodat met regelmaat de bevindingen uit de evaluaties gedeeld worden binnen het team.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsprogramma overall in de proces-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de proces-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van het toetsprogramma. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de systeem-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik wordt gemaakt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor deze criteria is veelal gebaseerd op ervaringen van relevante actoren in de opleiding. Het is echter niet mogelijk met zekerheid te zeggen dat de vastgestelde kwaliteitscriteria aansluiten bij de visie op toetsing van de opleiding of op organisatorische randvoorwaarden binnen de opleiding. Dit kan ertoe leiden dat de toetsen in de opleiding niet logisch samenhangen, dat toetsvormen niet passend zijn bij de opleidingscontext of de beoogde leerresultaten of dat de beoogde leerresultaten niet worden gedekt.
        
        Ontwerp
        In deze ontwikkelingsfase wordt het programma vaak – horizontaal – ontworpen. Het is duidelijk hoeveel toetsen afgenomen worden en wat voor soort toetsen dit zijn. Onduidelijk is echter soms nog welke beoogde leerresultaten hierin centraal staan. Het is hierdoor niet met zekerheid vast te stellen of de student op basis van het onderwijs- en toetsprogramma wordt opgeleid tot startbekwame professional.
        
        Bij het ontwerpen heeft soms nog te weinig afstemming plaatsgevonden over de uitvoerbaarheid van het programma. Er wordt weliswaar gekeken naar de samenhang tussen toetsen, maar niet naar de uitvoerbaarheid. Het is hierdoor mogelijk dat onderdelen van het toetsprogramma voor studenten, of voor docenten niet uitvoerbaar zijn. Ook is het mogelijk dat het programma in theorie haalbaar is voor studenten en docenten, maar niet passend en haalbaar binnen de toetsorganisatie.
        
        Borging
        In de proces-georiënteerde fase vindt evaluatie incidenteel plaats. Het resultaat van de evaluatie wordt besproken met relevante actoren in de opleiding en aanpassingen worden doorgevoerd. De evaluatie van het toetsprogramma vindt dus niet met regelmaat plaats, de verantwoordelijken bekijken het geheel van toetsen uitsluitend als hier aanleiding toe lijkt te bestaan. Hierdoor is er geen overkoepelend zicht op de mate van samenhang tussen en de voortdurende dekking van de beoogde leerresultaten door de toetsen. Ook is het niet vanzelfsprekend dat de evaluatie plaatsvindt aan de hand van afgesproken kwaliteitscriteria.
        
        Op weg naar de systeem-georiënteerde fase
        Om de stap te zetten naar de systeem-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Baseer de kwaliteitscriteria voor het toetsprogramma op ervaringen van ervaren ontwikkelaars binnen de eigen opleiding én toets de kwaliteitscriteria aan de visie op onderwijs van de opleiding. Zorg er daarnaast voor dat de vastgestelde kwaliteitscriteria uitvoerbaar en passend zijn binnen de context van de opleiding.
        -	Neem de beoogde leerresultaten als uitgangspunt bij het ontwerpen van het toetsprogramma. Als het toetsprogramma de leerresultaten dekt, dan betekent dit dat de student met het succesvol doorlopen van het onderwijs- en toetsprogramma aan kan tonen een startbekwame professional te zijn.
        -	Bekijk gezamenlijk in het opleidingsteam tijdens of na afronding van de ontwikkeling van het toetsprogramma of het programma uitvoerbaar is. Neem daarbij zowel de uitvoerbaarheid voor de studenten in ogenschouw (zodat bijvoorbeeld voorkomen kan worden dat studenten in één onderwijsperiode 6 portfolio’s moeten maken), als de uitvoerbaarheid voor de docenten en betrokkenen in het toetsproces (zodat bijvoorbeeld niet in 8 weken tijd 4 deeltoetsen afgenomen en nagekeken hoeven te worden).
        -	Maak afspraken over de regelmaat waarop de kwaliteit van toetsprogramma’s worden geëvalueerd door de actoren binnen die opleiding die verantwoordelijk zijn voor de dekking van de beoogde leerresultaten (bijvoorbeeld examencommissie, curriculumcommissie of toetscommissie). Er komt daardoor enig zicht op de kwaliteit van het toetsprogramma. Op basis van de resultaten van de evaluaties kunnen adviezen worden gegeven aan bijvoorbeeld toets- en onderwijsontwikkelaars om de samenhang tussen de toetsen of de wijze waarop de toetsen toeleiden naar de beoogde leerresultaten te verbeteren.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsprogramma overall in de systeem-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de systeem-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van het toetsprogramma. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de keten-georiënteerde fase. 

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik gemaakt wordt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor de criteria is gebaseerd op (wetenschappelijke) literatuur. De keuze is eveneens getoetst aan ervaringen van relevante actoren in de opleiding. De kwaliteitscriteria aan de hand waarvan toetsen worden geconstrueerd zijn mogelijkerwijs verouderd. En het is mogelijk dat in deze fase het oordeel van studenten over het toetsprogramma niet wordt meegenomen bij afspraken over het realiseren van kwaliteit
        
        Ontwerp
        Het programma wordt in deze ontwikkelingsfase – horizontaal en verticaal – ontworpen op basis van de opleidingskwalificaties/beoogde leerresultaten en de uitwerking daarvan in niveaus. Er kan met zekerheid worden vastgesteld dat de student aan het eind van de opleiding de beoogde leerresultaten beheerst, het is echter onduidelijk of er binnen de opleiding sprake is van een logische opbouwende lijn in de ontwikkeling hiervan. Het is niet met zekerheid vast te stellen dat bij het ontwerpen van de toetsen binnen onderwijseenheden (horizontaal programma) rekening gehouden wordt met de plaats van het onderwijs binnen het gehele onderwijs- en toetsprogramma (verticaal programma).
        
        Bij het ontwerpen heeft binnen de opleiding afstemming plaatsgevonden over de balans tussen de uitvoerbaarheid van het programma en de hoeveelheid toetsen. Hoewel er wel gesproken wordt over de haalbaarheid van het toetsprogramma, is er bij de ontwikkeling van het programma niet altijd voldoende aandacht voor de keuze van de toetsvormen. Hierdoor is het mogelijk dat toetsvormen worden ingezet die niet naadloos aansluiten op de aan te tonen beroepsbekwaamheid (denk bijvoorbeeld aan het laten uitvoeren van een literatuuronderzoek om vakbekwaamheid op het gebied van autotechniek aan te tonen). Daarnaast kan gebrek aan aandacht voor de functies van toetsen betekenen dat uitsluitend toetsing met een summatieve functie plaatsvindt en er geen aandacht is voor formatieve evaluatie die richting kan geven aan de ontwikkeling van de student.
        
        Borging
        In de systeem-georiënteerde fase vindt de evaluatie structureel en systematisch plaats als onderdeel van de kwaliteitscyclus van toetsing. Het resultaat van de evaluatie wordt besproken met alle relevante actoren in de opleiding en aanpassingen worden doorgevoerd. Het is niet vanzelfsprekend dat de evaluatie plaatsvindt aan de hand van afgesproken kwaliteitscriteria. Het is onduidelijk of er zowel binnen onderwijseenheden (horizontaal) als binnen de gehele opleiding (verticaal) sprake is van een samenhangend en logisch opgebouwd toetsprogramma.
        
        Op weg naar de keten-georiënteerde fase
        Om de stap te zetten naar de keten-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Stel de vastgestelde kwaliteitscriteria bij op basis van nieuwe (wetenschappelijke) inzichten en op basis van studentevaluaties. Spreek met regelmaat met elkaar over de kwaliteit van het toetsprogramma en kijk samen kritisch naar nieuwe ontwikkelingen op het gebied van toetskwaliteit.
        -	Stuur bij het ontwikkelen van het toetsprogramma bewust op samenhang en opbouw binnen zowel het horizontale als het verticale toetsprogramma. Zo zorg je dat het onderwijs- en toetsprogramma met elkaar in evenwicht zijn: bij het ontwerpen van de toetsen binnen onderwijseenheden (horizontaal programma) wordt rekening gehouden met de plaats van het onderwijs binnen het gehele onderwijs- en toetsprogramma (verticaal programma). Hierdoor is er sprake van een opbouwende lijn in het ontwikkelen van de beoogde leerresultaten.
        -	Zorg bij het ontwerp van het toetsprogramma dat er afstemming plaats vindt over de meest geschikte toetsvormen en de functies van deze toetsen. Behalve over haalbaarheid van het programma, spreek je met elkaar ook over afstemming tussen onderwijs en toetsing. Denk gezamenlijk na over welke toetsvormen het meest geschikt zijn gezien de aan te tonen beroepsbekwaamheid en over de leerfunctie van toetsen (balans tussen de inzet van toetsen met een summatieve functie en het gebruik van formatieve evaluatie).
        -	Evalueer het horizontale en verticale toetsprogramma als onderdeel van een kwaliteitscyclus (PDCA) structureel en bespreek de opbrengsten van deze evaluaties met collega’s, studenten of andere relevante partners binnen de opleiding. Dan is er voortdurend zicht op de samenhang tussen de toetsen, de opbouw van het toetsprogramma en de dekking van de beoogde leerresultaten, zowel binnen onderwijseenheden (horizontaal) als voor de gehele opleiding (verticaal). Het is dan ook bekend waar eventuele verbeterpunten zich bevinden. Zorg dat de actoren die de evaluatie uitvoeren weten aan welke criteria een toetsprogramma moet voldoen, en evalueer het programma structureel. Bevraag studenten met regelmaat op de kwaliteit van en de samenhang tussen toetsen en onderwijs (bijvoorbeeld na afname van de toets), de informatie die hieruit naar voren komt, kan dan worden gebruikt om het toetsprogramma te verbeteren.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsprogramma overall in de keten-georiënteerde fase. Dat betekent concreet dat alle onderstaande elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de keten-georiënteerde fase. 

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik wordt gemaakt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor de criteria is gebaseerd op (wetenschappelijke) literatuur. De keuze is eveneens getoetst aan ervaringen van relevante actoren in de opleiding, ketenpartners, collega-instellingen en/of externe deskundigen. Ketenpartners en/of externe deskundigen worden hierbij betrokken.
        
        Ontwerp
        Het programma wordt – horizontaal en verticaal – ontworpen op basis van de opleidingskwalificaties/beoogde leerresultaten en de uitwerking daarvan in niveaus. Waar relevant worden ketenpartners, collega-instellingen en/of experts hierbij betrokken. Bij het ontwerpen heeft binnen de opleiding afstemming plaatsgevonden over de balans tussen de uitvoerbaarheid van het programma, de meest geschikte toetsvormen, de functies van deze toetsen en de hoeveelheid toetsen. De uitvoerbaarheid van de onderdelen van het programma die op de werkplek plaatsvinden zijn besproken met de ketenpartners.
        
        Borging
        In de keten-georiënteerde fase vindt de evaluatie structureel en systematisch plaats als onderdeel van de kwaliteitscyclus van toetsing. Het resultaat van de evaluatie wordt besproken met alle relevante actoren in de opleiding en met ketenpartners en/of externe deskundigen, en aanpassingen worden doorgevoerd.
        
        Ontwikkeling
        Jullie opleiding bevindt zich op dit moment voor deze entiteit in de keten-georiënteerde fase. Het is uiteraard van belang om aandacht te blijven besteden aan de kwaliteit van toetsing. Wellicht bevindt deze entiteit zich namelijk al in de keten- georiënteerde fase, maar geldt dat (nog) niet voor een of meerdere andere toetsentiteiten. Jullie kunnen er dan voor kiezen om daar nu meer prioriteit aan te geven. Blijf je er samen van bewust dat toetsentiteiten met elkaar samenhangen, zoals het toetsweb laat zien. Keuzes in een ander toetsentiteit kunnen dus ook van invloed zijn op deze toetsentiteit.`,
	],

	[
		`Jullie opleiding bevindt zich voor de toetsentiteit toetsbeleid overall in de activiteiten-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de activiteit-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van het toetsbeleid. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de proces-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat er nog geen kwaliteitscriteria zijn geformuleerd. Of dat hierover verschillende beelden ontstaan bij de collega’s in de opleiding. Deze kwaliteitscriteria – en met name een gedeelde visie hierop – zijn echter essentieel omdat ze de basis zijn voor het ontwerpen van het toetsbeleid en het evalueren van de kwaliteit hiervan. Bij kwaliteitscriteria voor het toetsbeleid kan gedacht worden aan criteria als transparantie, actualiteit, ondersteuning, facilitering, aansluiting en haalbaarheid (Bruijns & Kok, 2014). 
        
        Het risico van de activiteiten-georiënteerde ontwikkelingsfase is dat het management, de toetscommissie en curriculumcommissie geen gezamenlijke beelden hebben bij de kwaliteitscriteria die aan een toetsbeleidsplan moeten worden gesteld. Hierdoor is het mogelijk onduidelijk of de eigen kwaliteitscriteria aansluiten bij de visie op toetsing van de opleiding of op organisatorische randvoorwaarden binnen de opleiding. Dit kan ertoe leiden dat de toetsprocessen die in het beleid beschreven staan niet bekend zijn bij de medewerkers, niet actueel zijn of niet uitvoerbaar zijn.
        
        Ontwerp
        De activiteiten-georiënteerde ontwikkelingsfase kenmerkt zich daarnaast door de wijze waarop collega’s uit de opleiding betrokken zijn bij het ontwikkelen van het toetsbeleid: als er een toetsbeleidsplan beschikbaar is, hebben vaak enkele collega’s het voortouw genomen bij het schrijven hiervan. Het is niet vanzelfsprekend dat de inhoud van het toetsbeleidsplan wordt voorgelegd aan relevante partners, zoals docenten in de opleiding, het werkveld of studenten.
        
        Bij sommige opleidingen is er in de activiteiten-georiënteerde fase geen toetsbeleidsplan beschikbaar. Het ‘beleid’ zelf bestaat dan vaak uit een beschrijving van losstaande toetsprocessen die niet, of niet helemaal, aansluiten bij de visie op onderwijs. Mogelijkerwijs zijn er wel procedures afgesproken, deze vormen echter niet vanzelfsprekend een coherent geheel. Doordat er niet altijd een gezamenlijke visie op toetsing (van de opleiding of van het instituut) aan deze procedures ten grondslag ligt (deze visie vormt de basis voor het toetsbeleid), is het niet vanzelfsprekend dat de procedures leiden tot voldoende kwaliteit van toetsing.
        
        Bij de opleidingen waar wel een toetsbeleidsplan beschikbaar is, bevat deze vaak uitsluitend een beschrijving van toetsprocessen. De uitwerking van deze processen is weliswaar doordacht, maar niet gebaseerd op analyses van mogelijke knelpunten of gebaseerd op een lange(re) termijn visie op toetsing. Het is niet met zekerheid vast te stellen of met de uitwerking aangesloten wordt bij recente inzichten over toetsing. Mede daardoor is niet met zekerheid vast te stellen of de toetsprocessen kwalitatief goed zijn en op die manier daadwerkelijk een positieve bijdrage leveren aan de ontwikkeling van de student.
        
        Borging
        In de activiteiten-georiënteerde fase wordt de kwaliteit van het toetsbeleid meestal slechts incidenteel geëvalueerd. Het is daardoor onduidelijk of alle medewerkers op de hoogte zijn van de inhoud van het toetsbeleidsplan.
        
        Op weg naar de proces-georiënteerde fase
        Om de stap te zetten naar de proces-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Formuleer concrete kwaliteitscriteria voor het toetsbeleidsplan. Neem deze criteria op in het toetsbeleidsplan. Deel de criteria met management, examencommissie, toetscommissie en curriculumcommissie. Wanneer de leden van deze commissies weten aan welke kwaliteitscriteria het toetsbeleidsplan moet voldoen kan een basiskwaliteit van zowel het toetsbeleidsplan als de uitvoering van de hierin beschreven toetsprocessen worden gerealiseerd.
        -	Houdt bij het schrijven van het toetsbeleidsplan expliciet rekening met de visie op onderwijs en toetsing en met de organisatorische randvoorwaarden van de toetsorganisatie waarbinnen de toetsprocessen uit het toetsbeleidsplan moeten worden uitgevoerd. Dit voorkomt dat er toetsprocessen worden uitgewerkt die niet passend of uitvoerbaar zijn.
        -	Bespreek binnen het onderwijsteam ‘de stip op de horizon’: welke doelen wil je als opleiding stellen om de kwaliteit van toetsing te handhaven en/of te optimaliseren. Neem de interventies om deze doelen te realiseren op in het toetsbeleidsplan. 
        -	Maak binnen het onderwijsteam afspraken over de evaluatie van het toetsbeleid. Kijk hierbij zowel naar de kwaliteit van het toetsbeleidsplan als naar de realisatie van de gestelde doelen. Gebruik de kwaliteitscriteria die zijn vastgesteld als basis om de evaluatie uit te voeren. Zet de evaluatie van het toetsbeleid op de agenda van de docentoverleggen, zodat met regelmaat de bevindingen uit de evaluaties gedeeld worden binnen het team.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsbeleid overall in de proces-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de proces-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van het toetsbeleid. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de systeem-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik wordt gemaakt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor deze criteria is veelal gebaseerd op ervaringen van relevante actoren in de opleiding. Het is echter niet mogelijk om met zekerheid te zeggen dat de vastgestelde kwaliteitscriteria aansluiten bij de visie op toetsing van de opleiding of op organisatorische randvoorwaarden binnen de opleiding. Dit kan ertoe leiden dat de toetsprocessen die in het beleid beschreven staan niet bekend zijn bij de medewerkers, niet actueel zijn of niet uitvoerbaar zijn.
        
        Ontwerp
        Bij het ontwerpen van het toetsbeleid wordt in deze ontwikkelingfase in enige mate aangesloten bij het toetsbeleidskader op instellingsniveau. Bij het ontwerpen van het toetsbeleid wordt wel rekening gehouden met opleidingsspecifieke aspecten (zoals organisatorische randvoorwaarden), maar nog niet voldoende met het toetsbeleidskader dat op instellingsniveau is vastgesteld. Hierdoor is de uitwerking van concrete processen wellicht niet in lijn met de visie op toetsing van de instelling.
        
        Het toetsbeleid beschrijft interventies die zijn vastgesteld op basis van incidentele analyses van mogelijke knelpunten. Dat betekent concreet dat er mogelijk alleen bij incidenten wordt ingegrepen, en dat niet met regelmaat wordt gecontroleerd of de overige processen leiden tot de beoogde doelen en het beoogde resultaat.
        
        Borging
        In de proces-georiënteerde fase vindt evaluatie incidenteel plaats. Het resultaat van de evaluatie wordt besproken met relevante actoren in de opleiding en aanpassingen worden doorgevoerd. De evaluatie van het toetsbeleid vindt dus niet met regelmaat plaats, de verantwoordelijken bekijken het plan uitsluitend als hier aanleiding toe lijkt te bestaan. Hierdoor is onbekend of medewerkers op de hoogte zijn van de inhoud van de beschreven procedures en of zij in de praktijk werken volgens deze procedures. Dit heeft mogelijkerwijs een negatief effect op de kwaliteit van toetsing.
        
        Op weg naar de systeem-georiënteerde fase
        Om de stap te zetten naar de systeem-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Baseer de kwaliteitscriteria voor het toetsbeleid op ervaringen van gebruikers binnen de eigen opleiding én toets de kwaliteitscriteria aan de visie op onderwijs van de opleiding. Zorg er daarnaast voor dat de vastgestelde kwaliteitscriteria uitvoerbaar en passend zijn binnen de context van de opleiding.
        -	Sluit het ontwerp van het toetsbeleid van de opleiding waar mogelijk (nog) meer aan bij het toetsbeleidskader van de instelling. Hierdoor kan er zoveel mogelijk aangesloten worden op de visie op toetsing van de instelling en op afspraken rondom processen die op instellingsbreed zijn vastgelegd.
        -	Toets de interventies en processen uit het toetsbeleid met regelmaat op uitvoerbaarheid en bruikbaarheid.  Laat deze analyses niet alleen plaatsvinden na incidenten, voer ze juist met regelmaat uit. Hierdoor is er ten minste enig zicht op de kwaliteit van de uitvoering van de verschillende interventies en processen die in het toetsbeleid beschreven staan.
        -	Maak afspraken over de regelmaat waarin de kwaliteit van het toetsbeleid bekeken wordt door de actoren binnen de opleiding die (mede-)verantwoordelijk zijn voor de uitvoering van het beleid (bijvoorbeeld management, curriculumcommissie of toetscommissie). Plan niet alleen een evaluatie van het toetsbeleid wanneer de termijn van het beleidsplan verstreken is. Hierdoor komt meer zicht op de kwaliteit van het toetsbeleid. Op basis van de resultaten van de evaluaties kan het toetsbeleid worden bijgesteld. Het met regelmaat evalueren van het toetsbeleid verkleint de mogelijkheid dat medewerkers in de praktijk afwijken van de beschreven en afgesproken procedures en dat kan een positief effect hebben op de kwaliteit van toetsing.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsbeleid overall in de systeem-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de systeem-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van de toetsbeleid. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de keten-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik gemaakt wordt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor de criteria is gebaseerd op (wetenschappelijke) literatuur. De keuze is eveneens getoetst aan ervaringen van relevante actoren in de opleiding. De kwaliteitscriteria aan de hand waarvan het toetsbeleid wordt opgesteld zijn mogelijkerwijs verouderd. Het is ook mogelijk dat het oordeel van gebruikers van het toetsbeleid (medewerkers die de processen moeten uitvoeren) en studenten (die onderdeel zijn van de processen) niet wordt meegenomen bij afspraken over het realiseren van kwaliteit.
        
        Ontwerp
        Bij het ontwerpen van het toetsbeleid wordt in deze ontwikkelingsfase volledig aangesloten bij het toetsbeleidskader. Er wordt bij het ontwerpen van het toetsbeleid dus wel rekening gehouden met het toetsbeleidskader, maar opleidingspecifieke aspecten zoals organisatorische randvoorwaarden, worden soms van groter belang geacht dan het aansluiten bij alle aandachtspunten uit het kader. 
        
        Het toetsbeleid beschrijft interventies die zijn vastgesteld op basis van structurele analyses van mogelijke knelpunten. De praktische consequenties hiervan zijn doordacht en grotendeels evidence-informed. Als bij de uitwerking van de interventies en procedures geen gebruik wordt gemaakt van ervaringen van andere opleidingen of van resultaten uit (wetenschappelijk) onderzoek, kunnen hierdoor wellicht processen ingericht worden waarvan vastgesteld is dat deze niet effectief zijn of minder effectief dan andere uitwerkingen. Dit heeft mogelijkerwijs een negatief effect op de kwaliteit van de interventies en de processen, zowel wat betreft de uitwerking hiervan, als het resultaat.
        
        Borging
        In de systeem-georiënteerde fase vindt de evaluatie structureel en systematisch plaats als onderdeel van de kwaliteitscyclus van toetsing. Het resultaat van de evaluatie wordt besproken met alle relevante actoren in de opleiding en aanpassingen worden doorgevoerd. Het is niet vanzelfsprekend dat de evaluatie plaatsvindt aan de hand van afgesproken kwaliteitscriteria. 
        
        Op weg naar de keten-georiënteerde fase
        Om de stap te zetten naar de keten-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Stel de vastgestelde kwaliteitscriteria bij op basis van nieuwe (wetenschappelijke) inzichten en op basis van (student)evaluaties. Spreek met regelmaat met elkaar over de kwaliteit van het toetsbeleid en kijk samen kritisch naar de uitvoerbaarheid van het plan.
        -	Laat het ontwerp van het toetsbeleid naadloos aansluiten op het toetsbeleidskader. De visie op toetsing van de instelling en de wijze waarop deze vertaald is in het toetsbeleidskader is leidend bij het ontwerpen van het toetsbeleid van de opleiding.
        -	Gebruik nieuwe (wetenschappelijke) inzichten bij het uitwerken van de praktische consequenties van de interventies en processen. Als de praktische consequenties van de interventies evidence-informed zijn, wordt hierdoor gebruik gemaakt van nieuwe inzichten, die vervolgens worden vertaald naar/passend gemaakt worden voor de eigen opleidingscontext.
        -	Evalueer het toetsbeleid als onderdeel van een kwaliteitscyclus (PDCA) structureel en bespreek de opbrengsten van deze evaluaties met collega’s, studenten of andere relevante partners binnen de opleiding. Er is dan voortdurend zicht op de kwaliteit van het toetsbeleid en het is bekend waar eventuele verbeterpunten zich bevinden (bijvoorbeeld procedures die niet volgens afspraak uitgevoerd worden of onbekend zijn bij medewerkers). Zorgt dat de actoren die de evaluatie uitvoeren weten aan welke criteria een toetsbeleid moet voldoen, en evalueer het programma structureel. Doordat bekend is waar de knelpunten zitten in de uitvoering van het beleid, is ook bekend waar zich mogelijke risico’s voordoen voor de kwaliteit van de toetsing.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsbeleid overall in de keten-georiënteerde fase. Dat betekent concreet dat alle onderstaande elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de keten-georiënteerde fase. 

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik wordt gemaakt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor de criteria is gebaseerd op (wetenschappelijke) literatuur. De keuze is eveneens getoetst aan ervaringen van relevante actoren in de opleiding, ketenpartners, collega-instellingen en/of externe deskundigen. Ketenpartners en/of externe deskundigen worden hierbij betrokken.
        
        Ontwerp
        Bij het ontwerpen van het toetsbeleid wordt volledig aangesloten bij het toetsbeleidskader en bij regionaal of landelijk geldende kaders. Het toetsbeleid beschrijft interventies die zijn vastgesteld op basis van structurele analyses van mogelijke knelpunten. De praktische consequenties hiervan zijn vertaald naar een langetermijnbeleid, doordacht en evidence-informed.
        
        Borging
        In de keten-georiënteerde fase vindt de evaluatie structureel en systematisch plaats als onderdeel van de kwaliteitscyclus van toetsing. Het resultaat van de evaluatie wordt besproken met alle relevante actoren in de opleiding en met ketenpartners en/of externe deskundigen, en aanpassingen worden doorgevoerd.
        
        Ontwikkeling
        Jullie opleiding bevindt zich op dit moment voor deze entiteit in de keten-georiënteerde fase. Het is uiteraard van belang om aandacht te blijven besteden aan de kwaliteit van toetsing. Wellicht bevindt deze entiteit zich namelijk al in de keten- georiënteerde fase, maar geldt dat (nog) niet voor een of meerdere andere toetsentiteiten. Jullie kunnen er dan voor kiezen om daar nu meer prioriteit aan te geven. Blijf je er samen van bewust dat toetsentiteiten met elkaar samenhangen, zoals het toetsweb laat zien. Keuzes in een ander toetsentiteit kunnen dus ook van invloed zijn op deze toetsentiteit.`,
	],

	[
		`Jullie opleiding bevindt zich voor de toetsentiteit toetsorganisatie overall in de activiteiten-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de activiteiten-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van de toetsorganisatie. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de proces-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat er nog geen kwaliteitscriteria zijn geformuleerd. Of dat hierover verschillende beelden ontstaan bij de collega’s in de opleiding. Deze kwaliteitscriteria – en met name een gedeelde visie hierop – zijn echter essentieel omdat ze de basis zijn voor het ontwerpen van de toetsorganisatie en het evalueren van de kwaliteit hiervan. Bij kwaliteitscriteria voor de toetsorganisatie kan gedacht worden aan criteria als doelgerichtheid, afstemming, kwaliteitsnormen en afdekken van risico’s (Van Deursen & Van Zijl, 2015).
        
        Het risico van de activiteiten-georiënteerde fase is dat management, beleidsmedewerkers en andere actoren die verantwoordelijk zijn voor de inrichting van de toetsorganisatie mogelijk ieder andere beelden hebben bij kwaliteit van een toetsorganisatie. Dit kan ertoe leiden dat afspraken die zij maken met actoren binnen de opleiding over hun betrokkenheid bij, maar ook rollen, taken en verantwoordelijkheden in en voor verschillende toetsprocessen, niet met elkaar in lijn zijn, of zelfs tegenstrijdig zijn.
        
        Ontwerp
        De activiteiten-georiënteerde ontwikkelingsfase kenmerkt zich daarnaast door de wijze waarop collega’s uit de opleiding betrokken zijn bij het inrichten van de toetsorganisatie: medewerkers weten vaak niet welke rollen, taken en verantwoordelijkheden onderscheiden worden binnen de verschillende toetsprocessen, en kunnen hier dus ook niet naar handelen. Het is hierdoor ook niet bekend ‘wie waarvan is’; bij incidenten is het onduidelijk wie waarop aangesproken kan worden of wie om advies gevraagd kan worden. Daarnaast is het mogelijk dat commissies onderling van elkaar niet goed weten waar welke verantwoordelijkheden liggen (bijvoorbeeld tussen examencommissie, toetscommissie en management), waardoor processen mogelijk niet met elkaar in lijn zijn of elkaar zelfs tegenwerken.
        
        Daarnaast geven de actoren binnen de opleiding in deze ontwikkelingsfase vaak op eigen wijze invulling aan de verschillende toetsprocessen. Hierdoor kunnen er niet alleen grote verschillen bestaan in de uitvoering, maar ook in de kwaliteit. Voor studenten leidt dit mogelijkerwijs tot onduidelijkheid: het kan er bijvoorbeeld toe leiden dat de wijze waarop cijfers op deeltoetsen leiden tot een eindbeoordeling wisselend is per docent, of dat zij bij vragen van het kastje naar de muur worden gestuurd.
        
        Borging
        In de activiteiten-georiënteerde fase wordt de kwaliteit van de toetsorganisatie meestal slechts incidenteel geëvalueerd. Het is daardoor onbekend of actoren zich bewust zijn van hun eigen rollen, taken en verantwoordelijkheden ten aanzien van toetsen en die van hun collega’s.
        
        Op weg naar de proces-georiënteerde fase
        Om de stap te zetten naar de proces-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Formuleer concrete kwaliteitscriteria voor de toetsorganisatie. Neem deze criteria op in het toetsbeleidsplan. Deel de criteria met management, beleidsmedewerkers en andere actoren die verantwoordelijk zijn voor de inrichting van de toetsorganisatie. Wanneer deze actoren weten aan welke kwaliteitscriteria de toetsorganisatie moet voldoen kan een basiskwaliteit van de inrichting van de toetsorganisatie worden gerealiseerd.
        -	Breng de rollen, taken en verantwoordelijkheden binnen de verschillende toetsprocessen in kaart. Maak hierbij inzichtelijk wie waarvoor verantwoordelijk is en deel dit overzicht met alle relevante actoren. Heirdoor weten de medewerkers binnen de opleiding aan welke rollen, taken en verantwoordelijkheden zij zelf moeten voldoen binnen de verschillende toetsprocessen waarin zij een rol hebben.   
        -	Maak binnen het onderwijsteam concrete afspraken over de wijze waarop verschillende toetsprocessen (bijvoorbeeld ontwerp van toetsprogramma en ontwerp toetsbeleid) worden ingericht en uitgevoerd. Hierdoor kan een basiskwaliteit van de afzonderlijke processen worden bereikt.
        -	Maak binnen het onderwijsteam afspraken over de evaluatie van de toetsorganisatie. Kijk hierbij zowel naar de kwaliteit van de toetsorganisatie als geheel als naar de uitvoering van de toetsprocessen. Gebruik de kwaliteitscriteria die zijn vastgesteld als basis om de evaluatie uit te voeren. Zet de evaluatie van de toetsorganisatie op de agenda van de docentoverleggen, zodat met regelmaat de bevindingen uit de evaluaties gedeeld worden binnen het team.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsorganisatie overall in de proces-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de proces-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van de toetsorganisatie. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de systeem-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik wordt gemaakt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor deze criteria is veelal gebaseerd op ervaringen van relevante actoren in de opleiding. Het is echter niet mogelijk met zekerheid te zeggen dat de  vastgestelde kwaliteitscriteria aansluiten bij de visie op toetsing van de opleiding. Dit kan ertoe leiden dat er kwaliteitscriteria zijn geformuleerd die niet uitvoerbaar zijn of die niet passend zijn binnen de context van de opleiding.
        
        Ontwerp
        Bij het ontwerpen van de toetsorganisatie in deze ontwikkelingsfase worden de rollen, taken en verantwoordelijkheden van alle actoren in toetsing vastgesteld. Alle medewerkers binnen de opleiding weten weliswaar aan welke rollen, taken en verantwoordelijkheden zij zelf moeten voldoen, het is daarmee nog niet met zekerheid gezegd dat ze ook bekend zijn met de rollen, taken en verantwoordelijkheden van hun collega’s. Hierdoor is het mogelijk dat er onduidelijkheden ontstaan in de uitvoering van de verschillende processen, dat er activiteiten binnen processen worden uitgevoerd die tegenstrijdig met elkaar zijn, of dat onbekend is wie waarvoor bij incidenten om advies gevraagd kan worden.
        
        Ook wordt de wijze waarop het ontwerp van toetsbeleid, toetsprogramma en toets(tak)en op elkaar aansluiten in deze fase in kaart gebracht. Hoewel er afspraken zijn over de inrichting en uitvoering van de afzonderlijke processen, is het niet vanzelfsprekend dat de processen onderling ook op elkaar aansluiten. Hierdoor is het mogelijk dat activiteiten binnen en tussen processen niet met elkaar in lijn zijn of elkaar zelfs tegenwerken.
        
        Borging
        In de proces-georiënteerde fase vind evaluatie incidenteel plaats. Het resultaat van de evaluatie wordt besproken met relevante actoren in de opleiding en aanpassingen worden doorgevoerd. De evaluatie van de toetsorganisatie vindt dus nog niet met regelmaat plaats, maar bijvoorbeeld uitsluitend als zich incidenten voordoen. Er is wel enig zicht op de mate waarin alle actoren zich bewust zijn van hun eigen en elkaars rollen, taken en verantwoordelijkheden, maar het is onduidelijk of iedereen ook de juiste personen weet te vinden bij vragen of specifieke toetsprocessen.
        
        Op weg naar de systeem-georiënteerde fase
        Om de stap te zetten naar de systeem-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Baseer de kwaliteitscriteria voor de toetsorganisatie op ervaringen van de actoren binnen de toetsorganisatie van de opleiding en toets dez aan de visie op onderwijs. Zorg er ook voor dat de vastgestelde kwaliteitscriteria uitvoerbaar en passend zijn binnen de context van de opleiding.
        -	Leg voor alle medewerkers binnen de opleiding de rollen, taken en verantwoordelijkheden binnen de toetsprocessen waarin zij betrokken zijn vast. Zorg dat alle medewerkers hiervan op de hoogte zijn, zodat ze hier dus ook naar kunnen handelen. Doordat de rollen, taken en verantwoordelijkheden bekend zijn, weten medewerkers wie waarop aangesproken of bevraagd kan worden.
        -	Breng de wijze waarop de verschillende toetsprocessen binnen de opleiding op elkaar aansluiten (bijvoorbeeld ontwerp van toetsen in relatie tot het toetsprogramma) in kaart. Zorg er hiermee voor dat voor alle actoren binnen de opleiding duidelijk is hoe de verschillende toetsprocessen zich tot elkaar verhouden. Hierdoor zijn de activiteiten die binnen en tussen deze processen worden uitgevoerd in lijn met elkaar. Er is hiermee niet alleen sprake van een basiskwaliteit van afzonderlijke processen, maar van de gehele processtructuur.
        -	Maak afspraken over de regelmaat waarin de kwaliteit van de toetsorganisatie geëvalueerd door het management, beleidsmedewerkers of andere relevante actoren. Dan is er in de opleiding enig zicht op de mate waarin alle actoren binnen de toetsingsprocessen zich bewust zijn van hun eigen en elkaars rollen, taken en verantwoordelijkheden. Als uit de evaluatie blijkt dat iemand de rollen, taken en/of verantwoordelijkheden niet goed oppakt, kan deze collega hierover aangesproken worden door zijn leidinggevende. Doordat iedereen weet ‘wie waarvan is’ weet men elkaar ook te vinden met vragen over specifieke toetsingsprocessen.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsorganisatie overall in de systeem-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de systeem-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van de toetsorganisatie. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de keten-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik gemaakt wordt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor de criteria is gebaseerd op (wetenschappelijke) literatuur. De keuze is eveneens getoetst aan ervaringen van relevante actoren in de opleiding. De kwaliteitscriteria aan de hand waarvan de toetsorganisatie wordt ingericht zijn mogelijkerwijs verouderd. Het is mogelijk dat de ervaringen van medewerkers en van studenten over de kwaliteit van toetsorganisatie niet wordt meegenomen bij afspraken over het realiseren van voldoende kwaliteit.
        
        Ontwerp
        Bij het ontwerpen van de toetsorganisatie in deze ontwikkelingsfase worden de rollen, taken en verantwoordelijkheden van alle actoren in toetsing op opleidingsniveau vastgesteld. De rollen, taken en verantwoordelijkheden zijn dan weliswaar bij alle actoren binnen de opleiding bekend en vastgelegd, deze zijn niet altijd binnen het team of de opleiding besproken en waar nodig op elkaar afgestemd. Hierdoor zijn de rollen, taken en verantwoordelijkheden mogelijk niet altijd passend bij de functie van de actoren en bij hun rol binnen de opleiding en kan er sprake zijn van onnodige dubbele petten. Ook de verantwoordelijkheden van de verschillende commissies (zoals toetscommissie, examencommissie, curriculumcommissie etc) zijn hierdoor mogelijk niet optimaal op elkaar afgestemd.
        
        De wijze waarop het ontwerp van toetsbeleid, toetsprogramma en toets(tak)en binnen de opleiding op elkaar aansluiten wordt op structurele en systematische wijze in kaart gebracht. Er is weliswaar bekend hoe de verschillende processen zich tot elkaar verhouden, afspraken over hoe dit binnen het team of de opleiding concreet vorm krijgt, zijn niet vanzelfsprekend vastgelegd. Hierdoor kan de kwaliteit van de totale toetsing in gevaar komen. Bijvoorbeeld: het is niet vanzelfsprekend dat  een docent die een toetsvorm wil wijzigen, hiervoor contact opneemt met degenen die verantwoordelijk zijn voor de totstandkoming van het toetsprogramma, voor het toetsbeleid, en voor de toetsbekwaamheid. Hierdoor kan het zijn dat de aanpassing van de toetsvorm niet passend blijkt binnen de visie op toetsen (beleid), niet aansluit bij het toetsprogramma, of dat de docenten niet de benodigde toetsbekwaamheid bezitten om deze toetsvorm kwalitatief goed uit te voeren.
        
        Borging
        In de systeem-georiënteerde fase vindt de evaluatie structureel en systematisch plaats als onderdeel van de kwaliteitscyclus van toetsing. Het resultaat van de evaluatie wordt besproken met alle relevante actoren in de opleiding en aanpassingen worden doorgevoerd. Het is niet vanzelfsprekend dat de evaluatie plaatsvindt aan de hand van afgesproken kwaliteitscriteria. Wel is er binnen de opleiding enig zicht op de mate waarin alle actoren binnen de toetsingsprocessen zich bewust zijn van hun eigen en elkaars rollen, taken en verantwoordelijkheden, en hoe de actoren binnen deze processen vanuit hun taken, rollen en verantwoordelijkheden samenwerken.
        
        Op weg naar de keten-georiënteerde fase
        Om de stap te zetten naar de keten-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Stel de vastgestelde kwaliteitscriteria bij op basis van nieuwe (wetenschappelijke) inzichten en op basis van studentevaluaties. Spreek regelmatig met elkaar over de kwaliteit van de toetsorganisatie en kijk samen kritisch naar nieuwe ontwikkelingen. Toets de afgesproken rollen, taken en verantwoordelijkheden aan nieuwe kaders, zoals de WHW, maar ook aan student- en medewerkersevaluaties.
        -	Bepaal de rollen, taken en verantwoordelijkheden gezamenlijk op team- of opleidingsniveau. Leg de rollen, taken en verantwoordelijkheden van alle actoren in toetsing binnen het team of de opleiding niet alleen vast, maar bespreek deze met elkaar en stem waar nodig op elkaar af. Hierdoor zijn de rollen, taken en verantwoordelijkheden passend bij de functie van de actoren en bij hun rol binnen de opleiding, is er geen sprake van onnodige dubbele petten en weet iedereen wie waarop aangesproken en bevraagd kan worden. Ook de verantwoordelijkheden van de verschillende commissies (zoals toetscommissie, examencommissie, curriculumcommissie etc) zijn hierdoor goed op elkaar afgestemd.
        -	Bespreek de wijze waarop de verschillende toetsprocessen binnen de opleiding op elkaar aansluiten (bijvoorbeeld ontwerp van toetsbekwaamheid in relatie tot toetsvormen in het toetsprogramma) op team- of opleidingsniveau. Bespreek de activiteiten binnen en tussen de toetsprocessen met elkaar en stem waar nodig op elkaar af. Het is hierdoor voor alle betrokken precies duidelijk welke processen mogelijkerwijs een invloed hebben op elkaar. Bijvoorbeeld: als een docent een toetsvorm wil wijzigen, weet hij wie verantwoordelijk is voor de totstandkoming van het toetsprogramma, voor het toetsbeleid, en voor de toetsbekwaamheid, en checkt hij of de alternatieve toetsvorm passend is binnen de visie op toetsen (beleid) en de vertaling hiervan in het toetsprogramma, en of de benodigde toetsbekwaamheid om invulling te kunnen geven aan deze toetsvorm aanwezig is.
        -	Evalueer de toetsorganisatie als onderdeel van een kwaliteitscyclus (PDCA) structureel en bespreek de opbrengsten hiervan met collega’s, studenten of andere relevante partners binnen de opleiding. Er is dan voortdurend zicht op de kwaliteit van de toetsorganisatie en meer specifiek op de mate waarin alle actoren van zichzelf en anderen weten waar hun taken, rollen en verantwoordelijkheden binnen de opleiding liggen ten aanzien van de toetsprocessen. Bevraag zowel medewerkers als studenten met regelmaat, waardoor er eveneens zicht is op de effectiviteit en efficiëntie van de verschillende toetsprocessen. Het is dan bekend wat er goed loopt, maar ook  waar de verbeterpunten zich bevinden. Zorg dat de medewerkers die de evaluatie uitvoeren weten aan welke criteria de toetsorganisatie moet voldoen, en evalueer deze structureel. Het is goed als collega’s elkaar, op grond van evaluaties, maar ook in de dagelijkse processen, aan spreken op de wijze waarop zij invulling geven aan hun taken, rollen en verantwoordelijkheden.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsorganisatie overall in de keten-georiënteerde fase. Dat betekent concreet dat alle onderstaande elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de keten-georiënteerde fase. 

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik wordt gemaakt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor de criteria is gebaseerd op (wetenschappelijke) literatuur. De keuze is eveneens getoetst aan ervaringen van relevante actoren in de opleiding, ketenpartners, collega-instellingen en/of externe deskundigen. Ketenpartners en/of externe deskundigen worden hierbij betrokken.
        
        Ontwerp
        Bij het ontwerpen van de toetsorganisatie worden  de rollen, taken en verantwoordelijkheden van alle actoren in toetsing op opleidingsniveau vastgesteld. De wijze waarop het ontwerp van toetsbeleid, toetsprogramma en toets(tak)en in de gehele toetsorganisatie (in- en extern) op elkaar aansluiten wordt op structurele en systematische wijze in kaart gebracht.
        
        Borging
        In de keten-georiënteerde fase vindt de evaluatie structureel en systematisch plaats als onderdeel van de kwaliteitscyclus van toetsing. Het resultaat van de evaluatie wordt besproken met alle relevante actoren in de opleiding en met ketenpartners en/of externe deskundigen, en aanpassingen worden doorgevoerd.
        
        Ontwikkeling
        Jullie opleiding bevindt zich op dit moment voor deze entiteit in de keten-georiënteerde fase. Het is uiteraard van belang om aandacht te blijven besteden aan de kwaliteit van toetsing. Wellicht bevindt deze entiteit zich namelijk al in de keten- georiënteerde fase, maar geldt dat (nog) niet voor een of meerdere andere toetsentiteiten. Jullie kunnen er dan voor kiezen om daar nu meer prioriteit aan te geven. Blijf je er samen van bewust dat toetsentiteiten met elkaar samenhangen, zoals het toetsweb laat zien. Keuzes in een ander toetsentiteit kunnen dus ook van invloed zijn op deze toetsentiteit.`,
	],

	[
		`Jullie opleiding bevindt zich voor de toetsentiteit toetsbekwaamheid overall in de activiteiten-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de activiteiten-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van toetsbekwaamheid. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de proces-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat er nog geen kwaliteitscriteria zijn geformuleerd. Of dat hierover verschillende beelden ontstaan bij de collega’s in de opleiding. Deze kwaliteitscriteria – en met name een gedeelde visie hierop – zijn echter essentieel omdat ze de basis zijn voor het ontwerpen van de toetsbekwaamheid en het evalueren van de kwaliteit hiervan. Bij kwaliteitscriteria voor toetsbekwaamheid kan gedacht worden aan criteria als transparantie (is duidelijk wie welke bekwaamheid moet hebben, wordt dit voor de hele opleiding vastgesteld en wordt professionalisering hierop afgestemd), actualiteit (bijvoorbeeld aansluiting bij landelijke ontwikkelingen en hogeschoolbrede kaders), ondersteuning, facilitering en haalbaarheid (o.a. Van Berkel, Sluijsmans & Joosten-ten Brinke, 2015)
        
        Het risico van de activiteiten-georiënteerde ontwikkelingsfase is dat actoren niet weten over welke toetsbekwaamheid zij moeten beschikken. Het is niet zeker dat docenten over die bekwaamheden beschikken die nodig zijn voor toetsing die aansluit bij de visie op toetsing van de opleiding.
        
        Ontwerp 
        De activiteiten-georiënteerde ontwikkelingsfase kenmerkt zich daarnaast door de wijze waarop collega’s uit de opleiding betrokken zijn bij het ontwikkelen van de toetsbekwaamheid: voor de verschillende actoren is het onduidelijk hoe zij hun toetsbekwaamheid kunnen ontwikkelen. Iedere actor pakt dit zijn eigen manier op, met het gevolg dat de mate waarin aan de toetsbekwaamheid wordt voldaan onderling aanzienlijk verschilt.
        
        Er vindt in deze ontwikkelingsfase vaak geen professionalisering plaats op het gebied van toetsing. Hierdoor kan het zijn dat verschillende actoren niet aan de gewenste kwaliteit van toetsbekwaamheid voldoen.
        
        Borging
        In de activiteiten-georiënteerde fase wordt de kwaliteit van de toetsbekwaamheid meestal slechts incidenteel geëvalueerd. De toetsbekwaamheid is hier door mogelijkerwijs van onvoldoende kwaliteit. 
        
        Op weg naar de proces-georiënteerde fase
        Om de stap te zetten naar de proces-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Formuleer concrete kwaliteitscriteria voor de toetsbekwaamheid. Neem deze criteria op in het toetsbeleidsplan. Deel de criteria met alle betrokken actoren zoals docenten, management, examencommissie en toetscommissie. Wanneer deze actoren weten aan welke kwaliteitscriteria de toetsbekwaamheid moet voldoen kan een basiskwaliteit van de toetsbekwaamheid worden gerealiseerd.
        -	Maak afspraken over de stappen die doorlopen moet worden bij het ontwikkelen en aantonen van de toetsbekwaamheid. Als alle stappen ook daadwerkelijk door iedereen worden gezet, leidt dit ertoe dat alle actoren in ieder geval beschikken over en basisbekwaamheid toetsen. 
        -	Zorg er voor dat actoren met hun leidinggevende afspraken kunnen maken over professionalisering op het gebied van toetsing. 
        -	Maak binnen het opleidingsteam afspraken over de evaluatie van de toetsbekwaamheid. Gebruik de kwaliteitscriteria die zijn vastgesteld als basis om de evaluatie uit te voeren. Zet de evaluatie van de toetsbekwaamheid op de agenda van de docentoverleggen, zodat met regelmaat de bevindingen uit de evaluaties gedeeld worden binnen het team.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsbekwaamheid overall in de proces-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de proces-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van de toetsbekwaamheid. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de systeem-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik wordt gemaakt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor deze criteria is veelal gebaseerd op ervaringen van relevante actoren in de opleiding. Het is echter niet mogelijk met zekerheid te zeggen dat de vastgestelde kwaliteitscriteria  aansluiten bij de visie op toetsing van de opleiding of op organisatorische randvoorwaarden binnen de opleiding. Dit kan er toe leiden dat de toetsbekwaamheid van docenten wel voldoet aan de gestelde kwaliteitscriteria maar dat zij toch niet beschikken over bepaalde bekwaamheden die zij nodig hebben om hun taak in toetsing binnen de visie van de opleiding uit te voeren.
        
        Ontwerp
        Bij het ontwerpen van toetsbekwaamheid wordt in deze ontwikkelingsfase voor alle toetsprocessen de vereiste toetsbekwaamheid van alle actoren in toetsing in kaart gebracht. Als het voor sommige toetsprocessen en voor sommige actoren niet duidelijk is over welke bekwaamheid zij moeten beschikken, dan is het niet mogelijk om de juiste stappen te kiezen voor professionalisering op het gebied van toetsing.
        
        De leidinggevende maakt met actoren in de opleiding afspraken over de doelen van professionalisering voor de korte termijn. Er vindt wel professionalisering plaats op het gebied van toetsing, maar vaak is dit nog incidenteel en weinig doelgericht. Hierdoor kan het zijn dat niet de opleiding in zijn geheel onvoldoende profiteert van de toegenomen toetsbekwaamheid. De kwaliteit van toetsing in zijn geheel verbeterd niet of nauwelijks.
        
        Borging
        In de proces-georiënteerde fase vindt evaluatie incidenteel plaats. Het resultaat van de evaluatie wordt besproken met relevante actoren in de opleiding en aanpassingen worden doorgevoerd. De evaluatie van toetsbekwaamheid vindt dus niet met regelmaat plaats, De toetsbekwaamheid wordt alleen geëvalueerd als hier aanleiding toe is. Hierdoor is er geen overkoepelend zicht op de kwaliteit van de toetsbekwaamheid. Ook is het niet vanzelfsprekend dat de evaluatie plaatsvindt aan de hand van de afgesproken kwaliteitscriteria. Het is hierdoor mogelijk dat de kwaliteit van de toetsbekwaamheid van de verschillende actoren van wisselende kwaliteit zijn, maar wel allemaal het stempel voldoende krijgt.
        
        Op weg naar de systeem-georiënteerde fase
        Om de stap te zetten naar de systeem-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Baseer de kwaliteitscriteria voor de toetsbekwaamheid op ervaringen van ervaren toetsontwikkelaars binnen de eigen opleiding en toets deze aan de visie op onderwijs. Zorg dat de vastgestelde criteria uitvoerbaar zijn en passen bij de context van de opleiding.
        -	Breng voor alle actoren de vereiste bekwaamheden voor alle toetsprocessen in kaart. De verschillende actoren die een taak hebben bij de verschillende toetsprocessen weten dan over welke bekwaamheden zij moeten beschikken om kwaliteit te kunnen realiseren.
        -	Zorg dat de leidinggevende, in samenspraak met actoren, professionaliseringsdoelen met betrekking tot toetsing, minimal voor de korte termijn, formuleert. Als actoren doelen hebben geformuleerd die zij door inzet van professionaliseringsactiviteiten op korte termijn kunnen behalen, dan kunnen bepaalde toetsactiviteiten (afhankelijk van het gestelde doel) beter worden uitgevoerd.
        -	Maak afspraken over de regelmaat waarin de kwaliteit van de toetsbekwaamheid geëvalueerd en besproken wordt met verschillende actoren die betrokken zijn bij toetsing. Dan heeft de opleiding enig zicht op de kwaliteit van de toetsbekwaamheid en kan op basis van deze evaluaties acties in worden gezet om de toetsbekwaamheid van actoren te verbeteren. De toetsbekwaamheid wordt bijvoorbeeld één keer per jaar besproken in het functioneringsgesprek- of bij beoordelingsgesprekken. De uitkomst van deze gesprekken kan dan worden gebruikt om individuele professionaliseringsactiviteiten te plannen.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsbekwaamheid overall in de systeem-georiënteerde fase. Dat betekent concreet dat ten minste één van onderstaande elementen, maar mogelijk alle 3 deze elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de systeem-georiënteerde fase en welke risico’s dit potentieel met zich meebrengt voor de kwaliteit van de toetsbekwaamheid. Afsluitend worden enkele concrete acties benoemd die mogelijk behulpzaam zijn bij het maken van een ontwikkelstap richting de keten-georiënteerde fase.

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik gemaakt wordt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor de criteria is gebaseerd op (wetenschappelijke) literatuur. De keuze is eveneens getoetst aan ervaringen van relevante actoren in de opleiding. De professionalisering die docenten/examinatoren volgen over toetsing is mogelijkerwijs verouderd en sluit onvoldoende aan bij de huidige situatie. Het is niet bekend welke examinatoren wel of niet de bekwaamheidseisen beheersen. Het oordeel van studenten maar ook van docenten zelf wordt niet altijd meegenomen als het gaat om het verbeteren van de toetsbekwaamheid van de examinatoren.
        
        Ontwerp
        Bij het ontwerpen van toetsbekwaamheid wordt in deze ontwikkelingsfase voor alle toetsprocessen de vereiste toetsbekwaamheid van alle actoren in toetsing op opleidingsniveau in kaart gebracht en vastgelegd. De benodigde toetsbekwaamheid voor alle toetsprocessen en en actoren is dus wel bekend, maar past mogelijk niet bij de visie van het opleidingsteam.
        
        Hierbij wordt aangesloten bij de specifieke rollen, taken en verantwoordelijkheden. De leidinggevende maakt als onderdeel van de kwaliteitscyclus van toetsing met actoren in de opleiding afspraken over de doelen van professionalisering voor de middellange termijn. Er worden dus wel professionaliseringsdoelen geformuleerd, maar deze staan soms nog los van de resultaten van de PDCA-cyclus. Hierdoor hebben de uitgevoerde professionaliseringsactiviteiten soms niet of nauwelijks invloed op de kwaliteit van toetsing in het algemeen.
        
        Borging
        In de systeem-georiënteerde fase vindt de evaluatie structureel en systematisch plaats als onderdeel van de kwaliteitscyclus van toetsing. Het resultaat van de evaluatie wordt besproken met alle relevante actoren in de opleiding en aanpassingen worden doorgevoerd. Als de resultaten van evaluaties niet of nauwelijks collectief besproken worden met de verschillende actoren in de opleiding, dan is hierdoor geen overzicht over de totale kwaliteit van de toetsbekwaamheid.
        
        Op weg naar de keten-georiënteerde fase
        Om de stap te zetten naar de keten-georiënteerde fase kan gedacht worden aan de volgende acties:
        -	Stel de vastgestelde kwaliteitscriteria bij op basis van nieuwe (wetenschappelijke) inzichten en op basis van ervaringen van student- en docentevaluaties. Reflecteer regelmatig met elkaar over toetsbekwaamheid. Examinatoren weten dan van elkaar over welke toetsbekwaamheid zij beschikken, waar verdere ondersteuning nodig is en waar ze elkaar kunnen versterken. Intervisiebijeenkomsten en kalibreersesses met collega’s zijn een gangbare praktijk. Kijk samen ook kritisch naar nieuwe ontwikkelingen op het gebied van toetsbekwaamheid.
        -	Bepaal de benodigde toetsbekwaamheid gezamenlijk op teamniveau. De benodigde toetsbekwaamheid voor alle toetsprocessen is dan niet alleen in kaart gebracht, maar past ook bij de visie van het opleidingsteam. 
        -	Formuleer bij de actoren passende middellange termijndoelen voor professionalisering die een logisch gevolg zijn van de resultaten van de kwaliteitscyclus. Er wordt dan doelgericht gewerkt aan middellange termijndoelen betreffende het verbeteren van de toetsbekwaamheid van actoren. De professionaliseringsactiviteiten dragen dan ook bij aan het verbeteren van de punten die tijdens het doorlopen van de PDCA-cyclus naar voren zijn gekomen.
        -	Evalueer toetsbekwaamheid als onderdeel van een kwaliteitscyclus (PDCA) structureel en bespreek de opbrengsten van de evaluaties met collega’s, studenten of andere relevante partners binnen de opleiding. Laat de toetskwaliteit jaarlijks op collectief niveau vaststellen door onafhankelijke toetsdeskundigen, waarbij het resultaat een nauwkeurig overzicht is van de mate waarin toetsbekwaamheid op organisatieniveau is geborgd. Laat individuele actoren de toetsbekwaamheid vaststellen door 360-graden feedback uit te zetten, de uitkomst te bespreken en op basis hiervan persoonlijke leerdoelen te formuleren. Maak een meerjaren scholings- en professionaliseringsplan.`,

		`Jullie opleiding bevindt zich voor de toetsentiteit toetsbekwaamheid overall in de keten-georiënteerde fase. Dat betekent concreet dat alle onderstaande elementen zich qua ontwikkeling in deze fase bevinden. Hieronder wordt per element kort geschetst wat kenmerkend is voor dit element in de keten-georiënteerde fase. 

        Kwaliteitscriteria
        Kenmerkend voor deze ontwikkelingsfase is dat gebruik wordt gemaakt van kwaliteitscriteria die op opleidingsniveau zijn vastgesteld. De keuze voor de criteria is gebaseerd op (wetenschappelijke) literatuur. De keuze is eveneens getoetst aan ervaringen van relevante actoren in de opleiding, ketenpartners, collega-instellingen en/of externe deskundigen. Ketenpartners en/of externe deskundigen worden hierbij betrokken.
        
        Ontwerp
        Bij het ontwerpen van toetsbekwaamheid wordt voor alle toetsprocessen de vereiste toetsbekwaamheid van alle actoren in toetsing op opleidingsniveau en van actoren uit de keten in kaart gebracht en vastgelegd. Hierbij wordt aangesloten bij de specifieke rollen, taken en verantwoordelijkheden. De leidinggevende maakt als onderdeel van de kwaliteitscyclus van toetsing met actoren in de opleiding afspraken over de doelen van professionalisering voor de lange termijn.
        
        Borging
        In de keten-georiënteerde fase vindt de evaluatie structureel en systematisch plaats als onderdeel van de kwaliteitscyclus van toetsing. Het resultaat van de evaluatie wordt besproken met alle relevante actoren in de opleiding en met ketenpartners en/of externe deskundigen, en aanpassingen worden doorgevoerd.
        
        Ontwikkeling
        Jullie opleiding bevindt zich op dit moment voor deze entiteit in de keten-georiënteerde fase. Het is uiteraard van belang om aandacht te blijven besteden aan de kwaliteit van toetsing. Wellicht bevindt deze entiteit zich namelijk al in de keten- georiënteerde fase, maar geldt dat (nog) niet voor een of meerdere andere toetsentiteiten. Jullie kunnen er dan voor kiezen om daar nu meer prioriteit aan te geven. Blijf je er samen van bewust dat toetsentiteiten met elkaar samenhangen, zoals het toetsweb laat zien. Keuzes in een ander toetsentiteit kunnen dus ook van invloed zijn op deze toetsentiteit.`,
	],
]

export const enGenericPhaseDescriptions: string[] = [
	'Individual employees in the degree course (teachers/examiners, coursemanagement, examination board of examiners, assessment experts/assessment committee, support staff) carry out parts of assessment activities on an ad hoc basis, whereby there is no attention to the interrelationship between these activities.',
	'Relevant employees in the degree course (teachers/examiners, coursemanagement, examination board of examiners, assessment experts/assessment committee, support staff) carry out interrelated process-oriented assessment activities based on short-term policy.',
	'All relevant staff and partners in the degree course (students, teachers/examiners, coursemanagement, examination board of examiners, assessment experts/assessment committee, support staff) jointly carry out assessment activities from a medium-term perspective according to the PDCA cycle that are integrated into ongoing processes within the degree course.',
	'All relevant employees and partners within the degree course and in the chain (students, teachers/examiners, coursemanagement, examination board of examiners, assessment experts/assessment committee, support staff, professional field and external experts) jointly carry out assessment activities from a long-term perspective according to the PDCA cycle that are integrated into ongoing processes within the degree course and the chain.',
]

export const enGenericEntityDescriptions: string[] = [
	'Assessments are (learning) activities/measurement instruments used to establish whether the intended learning outcomes have been achieved (Joosten-ten Brinke & Draaier, 2015). The quality of the assessment as a whole also includes the design of the assessment models and instructions for students and assessors. The assessment tasks are the items, questions or assignments within an assessment whereby students are challenged to demonstrate their knowledge and skills (Draaier & Joosten-ten Brinke, 2015).',
	'The assessment programme is an intentional and substantiated combination of assessment types that match the objectives and structure of a degree course (study programme) (Baartman & Van der Vleuten, 2015). It is about the apparent relationship between assessment and the assurance of the different functions of assessment.',
	'Assessment policy refers to the entire range of substantive and procedural agreements concerning assessment (Bruijns & Kok, 2015). Several levels can be distinguished within the integral assessment policy, including the policy at the institutional level and the degree course level.',
	'The quality of the whole assessment organisation is key to assuring the quality of assessment. The assessment organization refers to how teachers, boards of examiners, assessment committees, management, and support staff work together purposefully to achieve the desired assessment quality for all assessment entities (Van Deursen & Van Zijl, 2015). It also concerns establishing the roles, tasks and responsibilities of the actors/parties involved in assessment, cooperation based on defined roles and the logistical organisation of assessment.',
	'In the assessment web, ‘assessment literacy’ refers to the expertise actors within the study programme should have to achieve quality across all assessment entities (Van Berkel, Sluijsmans & Joosten-ten Brinke, 2015). Specifically for the entity ’assessment’, the assessment literacy of teachers, boards of examiners and other involved parties is of utmost importance. Every teacher must be able to interpret assessment information and use it to establish how a student is doing and how this information can further contribute to the student’s learning (Straetmans, 2006).',
]

export default en
