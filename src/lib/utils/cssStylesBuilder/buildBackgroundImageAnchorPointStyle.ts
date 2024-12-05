import { POLICY_POSITION as ANCHOR_POINT } from "../../enums"
import { AnchorPointMap } from "../../Maps"

import { CSSProperties } from 'react'

export function buildBackgroundImageAnchorPointStyle(
    userStyle: CSSProperties,
    anchorPoint: ANCHOR_POINT, 
): CSSProperties {

    return { 
        ...userStyle, 
        backgroundPosition: AnchorPointMap.get( anchorPoint ),
    };
}
