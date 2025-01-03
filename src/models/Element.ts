export enum Element {
	QUALITY_CRITERIA,
	DESIGN,
	QUALITY_ASSURANCE,
}

export const ElementArray = Object.values(Element).filter(value => typeof value === 'number') as Element[];
