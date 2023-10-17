import {ClanRanking, ValueRanking} from "../types";

export const mapLeaderBoardObjectToRankingArray = <T extends ClanRanking | ValueRanking>(jsonResult: any, key: string): (T)[] => {
    const values = Object.values(jsonResult) as Record<string, (T)[]>[];
    const result =  values.find((value) => Object.keys(value).includes(key));
    
    if(result === undefined){
        throw new Error(`Missing key ${key} in jsonResultObject`);
    }
    
    return result[key];
}