export type idsType = Array<number>

export interface InitialState {
    newsIds: idsType,
    currentNews: null | INews,
    isSetting: boolean,
}

export interface INews {
    by: string,
    descendants: number,
    id: number,
    kids?: Array<number>,
    score: number,
    time: number,
    title: string,
    type: string,
    url: string,
}
