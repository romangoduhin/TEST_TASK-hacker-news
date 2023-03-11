export interface IProps {
    id: number
}

export interface IComment {
    by?: string,
    id: number,
    kids?: Array<number>,
    parent?: number,
    text?: string,
    time?: number,
    type?: string
}