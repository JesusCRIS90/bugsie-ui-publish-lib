import { CSSProperties } from 'react'
import { POLICY_POSITION as POL_POS } from "../../enums"


export function buildGridPolicyPositionStyle( 
    userStyle: CSSProperties, 
    groupPolicyPos: POL_POS, 
    ): CSSProperties 
{

    let alignItems: string;
    let justifyItems: string;

    switch (groupPolicyPos) {

        case POL_POS.TOP_LEFT:
            alignItems = "start";
            justifyItems = "start";
            break;

        case POL_POS.TOP_CENTER:
            alignItems = "start";
            justifyItems = "center";
            break;

        case POL_POS.TOP_RIGHT:
            alignItems = "start";
            justifyItems = "end";
            break;

        case POL_POS.CENTER_LEFT:
            alignItems = "center";
            justifyItems = "start";
            break;

        case POL_POS.CENTER_CENTER:
            alignItems = "center";
            justifyItems = "center";
            break;

        case POL_POS.CENTER_RIGHT:
            alignItems = "center";
            justifyItems = "end";
            break;

        case POL_POS.BOTTOM_LEFT:
            alignItems = "end";
            justifyItems = "start";
            break;

        case POL_POS.BOTTOM_CENTER:
            alignItems = "end";
            justifyItems = "center";
            break;

        case POL_POS.BOTTOM_RIGHT:
            alignItems = "end";
            justifyItems = "end";
            break;
        
        case POL_POS.INHERIT:
            alignItems = "inherit";
            justifyItems = "inherit";
            break;

        default:
            alignItems = "center";
            justifyItems = "center";
    }

    return { ...userStyle, alignItems, justifyItems };
}