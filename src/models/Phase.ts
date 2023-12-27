export interface Phase {
    name: string;
    description: string;
    genericEntityDescription: string;
    color: string;
    fallbackColor: string;
    type: Phases;
}

export interface GenericPhase {
    name: string;
    description: string;
    type: Phases;
}

export enum Phases {
    ACTIVITY_ORIENTED,
    PROCESS_ORIENTED,
    SYSTEM_ORIENTED,
    CHAIN_ORIENTED
}

const selectIds: string[][] = [
    //activity oriented phase
    ["000", "001", "010", "100", "002", "011", "020", "101", "110", "200", "003", "012", "021", "030", "300", "013", "022", "031", "023", "032", "033"],
    //process oriented phase
    ["102", "111", "120", "201", "210", "103", "112", "121", "130", "202", "211", "220", "301", "310", "113", "122", "131", "203", "212", "221", "230", "302", "311", "320", "123", "132", "213", "231", "303", "312", "321", "330", "133", "313", "331"],
    //system oriented phase
    ["222", "223", "232", "322", "233", "323", "332"],
    //chain oriented phase
    ["333"]
];

export const getPhaseOfSelectId = (selectId: string): number => {
    const phase = selectIds.findIndex((phase: string[]) => phase.includes(selectId));
    return phase === -1 ? 0 : phase;
};

export const genericPhaseColors: string[] = [
    "#C7C7C7",
    "#B6B6B6",
    "#ABABAB",
    "#909090"
];