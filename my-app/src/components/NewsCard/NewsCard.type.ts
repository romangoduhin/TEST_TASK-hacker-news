import {INews} from "../../redux/types";

export interface IProps {
    index: number
    id: number
}

export type NewsState = INews | null;