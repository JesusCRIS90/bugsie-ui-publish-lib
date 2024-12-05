import { CSSProperties } from "react"

import { VERTICAL_POLICY_POSITION as Vpos } from "../../enums"

export function buildVerticalPolicyPosition(
    userCustomStyle: CSSProperties,
    policyPosition: Vpos, 
    // Gap: number, 
): CSSProperties {

    let alignItems: string;
    let justifyContent: string;
    let alignContent: string;
    let flexWrap: CSSProperties["flexWrap"] = "nowrap"; // Default value to prevent undefined
    // const gap: string = `${Gap}px`;

    switch (policyPosition) {

        case Vpos.LEFT_LEFT:
            alignItems = "flex-start";   // Align left horizontally
            justifyContent = "flex-start"; // Align top vertically
            alignContent = "flex-start";   // Align content left within each row
            flexWrap = "wrap";
            break;

        case Vpos.LEFT_CENTER:
            alignItems = "center";        // Center horizontally
            justifyContent = "flex-start"; // Align top vertically
            alignContent = "flex-start";   // Align content left within each row
            flexWrap = "wrap";
            break;

        case Vpos.LEFT_RIGHT:
            alignItems = "flex-end";      // Align right horizontally
            justifyContent = "flex-start"; // Align top vertically
            alignContent = "flex-start";   // Align content left within each row
            flexWrap = "wrap";
            break;

        case Vpos.CENTER_LEFT:
            alignItems = "flex-start";    // Align left horizontally
            justifyContent = "center";     // Center vertically
            alignContent = "center";       // Align content center within each row
            flexWrap = "wrap";
            break;

        case Vpos.CENTER_CENTER:
            alignItems = "center";        // Center horizontally
            justifyContent = "center";     // Center vertically
            alignContent = "center";       // Align content center within each row
            flexWrap = "wrap";
            break;

        case Vpos.CENTER_RIGHT:
            alignItems = "flex-end";      // Align right horizontally
            justifyContent = "center";     // Center vertically
            alignContent = "center";       // Align content center within each row
            flexWrap = "wrap";
            break;

        case Vpos.RIGHT_LEFT:
            alignItems = "flex-start";    // Align left horizontally
            justifyContent = "flex-end";   // Align bottom vertically
            alignContent = "flex-end";     // Align content right within each row
            flexWrap = "wrap";
            break;

        case Vpos.RIGHT_CENTER:
            alignItems = "center";        // Center horizontally
            justifyContent = "flex-end";   // Align bottom vertically
            alignContent = "flex-end";     // Align content right within each row
            flexWrap = "wrap";
            break;

        case Vpos.RIGHT_RIGHT:
            alignItems = "flex-end";      // Align right horizontally
            justifyContent = "flex-end";   // Align bottom vertically
            alignContent = "flex-end";     // Align content right within each row
            flexWrap = "wrap";
            break;

        default:
            alignItems = "center";
            justifyContent = "center";
            alignContent = "center";
            flexWrap = "wrap";
            break;
    }

    return { ...userCustomStyle, alignItems, justifyContent, flexWrap, alignContent };

}