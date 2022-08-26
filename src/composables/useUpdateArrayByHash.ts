import { iUser } from "../interfaces";

export function useUpdateArrayByHash(baseArray: Array<any>, updateHash:any):Array<iUser> {
    const cacheKeys = Object.keys(updateHash)
    let positionToUpdate;
    cacheKeys.forEach(cacheKey => {
        positionToUpdate = baseArray.findIndex(baseArrayEl => baseArrayEl.id === Number(cacheKey))
        baseArray[positionToUpdate] = updateHash[Number(cacheKey)]
    })
    return baseArray;
}