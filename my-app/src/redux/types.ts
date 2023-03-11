export type idsType = Array<number>

export interface InitialState {
    newsIds: idsType;
    isSetting: boolean
}

export interface News {
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
