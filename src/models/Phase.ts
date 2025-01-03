export enum Phase {
	ACTIVITY_ORIENTED,
	PROCESS_ORIENTED,
	SYSTEM_ORIENTED,
	CHAIN_ORIENTED,
}

export const PhaseArray = Object.values(Phase).filter(value => typeof value === 'number') as Phase[];

export const phaseColors: string[][] = [
	['#A1D3E1', '#85C5D7', '#73BDD2', '#45A7C3'],
	['#95D8D1', '#76CDC4', '#61C6BB', '#2DB3A5'],
	['#D6B7D5', '#CAA3C9', '#C395C1', '#AF72AD'],
	['#F5BB86', '#F3A862', '#F19B4B', '#ED7A0F'],
	['#A1D5A2', '#86C987', '#74C175', '#46AD48'],
]

export const genericPhaseColors: string[] = [
	'#C7C7C7',
	'#B6B6B6',
	'#ABABAB',
	'#909090',
]
