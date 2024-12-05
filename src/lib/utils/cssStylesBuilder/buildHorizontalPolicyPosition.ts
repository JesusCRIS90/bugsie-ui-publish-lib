import { CSSProperties } from 'react'
import { POLICY_POSITION as PolPos } from '../../enums'

export function buildHorizontalPolicyPosition(
    userStyle: CSSProperties,
    policyPosition: PolPos, 
): CSSProperties {

    let alignItems: string;
    let justifyContent: string;

    switch (policyPosition) {

        case PolPos.TOP_LEFT:
            alignItems = "flex-start";
            justifyContent = "flex-start";
            break;

        case PolPos.TOP_CENTER:
            alignItems = "flex-start";
            justifyContent = "center";
            break;

        case PolPos.TOP_RIGHT:
            alignItems = "flex-start";
            justifyContent = "flex-end";
            break;

        case PolPos.CENTER_LEFT:
            alignItems = "center";
            justifyContent = "flex-start";
            break;

        case PolPos.CENTER_CENTER:
            alignItems = "center";
            justifyContent = "center";
            break;

        case PolPos.CENTER_RIGHT:
            alignItems = "center";
            justifyContent = "flex-end";
            break;

        case PolPos.BOTTOM_LEFT:
            alignItems = "flex-end";
            justifyContent = "flex-start";
            break;

        case PolPos.BOTTOM_CENTER:
            alignItems = "flex-end";
            justifyContent = "center";
            break;

        case PolPos.BOTTOM_RIGHT:
            alignItems = "flex-end";
            justifyContent = "flex-end";
            break;

        default:
            alignItems = "center";
            justifyContent = "center";
    }

    return { ...userStyle, alignItems, justifyContent };

}