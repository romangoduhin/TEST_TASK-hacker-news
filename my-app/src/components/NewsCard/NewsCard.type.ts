import {News} from "../../redux/types";

export interface IProps {
    index: number
    id: number
}

export type NewsState = News | null;