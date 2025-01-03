export enum Entity {
	ASSESSMENT_TASKS,
	ASSESSMENT_PROGRAMME,
	ASSESSMENT_POLICY,
	ASSESSMENT_ORGANISATION,
	ASSESSMENT_LITERACY,
}

export const EntityArray = Object.values(Entity).filter(value => typeof value === 'number') as Entity[];

export const entityColors: string[] = [
	'#45A7C3',
	'#2DB3A5',
	'#AF72AD',
	'#ED7A0F',
	'#46AD48',
]