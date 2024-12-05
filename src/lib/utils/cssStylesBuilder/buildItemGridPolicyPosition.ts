import { CSSProperties } from 'react'
import { POLICY_POSITION as POL_POS } from "../../enums"


export function buildItemGridPolicyPosition( 
    userStyle: CSSProperties, 
    groupPolicyPos: POL_POS, 
    ): CSSProperties 
{

    let alignSelf: string;
    let justifySelf: string;

    switch (groupPolicyPos) {

        case POL_POS.TOP_LEFT:
            alignSelf = "start";
            justifySelf = "start";
            break;

        case POL_POS.TOP_CENTER:
            alignSelf = "start";
            justifySelf = "center";
            break;

        case POL_POS.TOP_RIGHT:
            alignSelf = "start";
            justifySelf = "end";
            break;

        case POL_POS.CENTER_LEFT:
            alignSelf = "center";
            justifySelf = "start";
            break;

        case POL_POS.CENTER_CENTER:
            alignSelf = "center";
            justifySelf = "center";
            break;

        case POL_POS.CENTER_RIGHT:
            alignSelf = "center";
            justifySelf = "end";
            break;

        case POL_POS.BOTTOM_LEFT:
            alignSelf = "end";
            justifySelf = "start";
            break;

        case POL_POS.BOTTOM_CENTER:
            alignSelf = "end";
            justifySelf = "center";
            break;

        case POL_POS.BOTTOM_RIGHT:
            alignSelf = "end";
            justifySelf = "end";
            break;
        
        case POL_POS.INHERIT:
            alignSelf = "inherit";
            justifySelf = "inherit";
            break;

        default:
            alignSelf = "center";
            justifySelf = "center";
    }

    return { ...userStyle, alignSelf, justifySelf };
}