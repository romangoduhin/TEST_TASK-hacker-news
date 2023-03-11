import React from 'react';
import {IProps} from "./ParsedText.type";

function ParsedText({text}: IProps) {
    return (
        <div dangerouslySetInnerHTML={{__html: text}}/>
    );
}

export default ParsedText;