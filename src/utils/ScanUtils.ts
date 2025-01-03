import {Entity} from "../models/Entity";
import {Element, ElementArray} from "../models/Element";
import {ScanAnswer} from "../models/ScanAnswer";

export const getScanAnswer = (entity: Entity, element: Element): ScanAnswer => {
	const localEntity = localStorage.getItem(`${entity}.${element}`);
	if (!localEntity) {
		return {
			checkedPosition: -1,
			checkedAmbition: -1
		}
	}
	return JSON.parse(localEntity) as ScanAnswer;
}

export const scanAnswerFilledIn = (entity: Entity, element: Element): boolean => {
	const scanAnswer = getScanAnswer(entity, element);
	if (!scanAnswer) return false;
	return scanAnswer.checkedPosition !== -1 && scanAnswer.checkedAmbition !== -1;
}

export const entityFilledIn = (entity: Entity): boolean => {
	for (const element of ElementArray) {
		if (!scanAnswerFilledIn(entity, element)) return false;
	}
	return true;
}

export const getResultFromAnswer = (entity: Entity, answerType: 'checkedPosition' | 'checkedAmbition') => {
	if (!entityFilledIn(entity)) return -1;

	const answers = ElementArray.map((element) => getScanAnswer(entity, element)[answerType]).join('');
	const phase = selectIds.findIndex((phase: string[]) => phase.includes(answers));
	return phase === -1 ? 0 : phase;
}

const selectIds: string[][] = [
	//activity oriented phase
	[
		'000',
		'001',
		'010',
		'100',
		'002',
		'011',
		'020',
		'101',
		'110',
		'200',
		'003',
		'012',
		'021',
		'030',
		'300',
		'013',
		'022',
		'031',
		'023',
		'032',
		'033',
	],
	//process oriented phase
	[
		'102',
		'111',
		'120',
		'201',
		'210',
		'103',
		'112',
		'121',
		'130',
		'202',
		'211',
		'220',
		'301',
		'310',
		'113',
		'122',
		'131',
		'203',
		'212',
		'221',
		'230',
		'302',
		'311',
		'320',
		'123',
		'132',
		'213',
		'231',
		'303',
		'312',
		'321',
		'330',
		'133',
		'313',
		'331',
	],
	//system oriented phase
	['222', '223', '232', '322', '233', '323', '332'],
	//chain oriented phase
	['333'],
]