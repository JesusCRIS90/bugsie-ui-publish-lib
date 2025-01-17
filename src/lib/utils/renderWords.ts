import { createElement, Fragment } from "react";
import { KeyWord, NormalWord } from "../components";

import { StringArray, TSX_Components } from "../types";
import { StringArray2LowerCase } from ".";

export function renderWords(words: string, keywords: StringArray): TSX_Components {
    if (keywords.length === 0) {
        return words;
    }

    let id_key = 0;
    const keywords2check = StringArray2LowerCase(keywords);
    const result: TSX_Components[] = [];

    words.split(" ").forEach((word, index, arr) => {

        if (keywords2check.includes(word.toLowerCase()))
            result.push(createElement( KeyWord, { key: id_key++, children: word } ) );
        else
            result.push(createElement( NormalWord, { key: id_key++, children: word } ) );

        // Add a space except after the last word
        if (index < arr.length - 1) {
            result.push(createElement( NormalWord, { key: id_key++, children: " " } ));   
        }
    });

    // Wrap in Fragment to ensure a valid ReactNode is returned
    return createElement(Fragment, { children: result }); 
}
