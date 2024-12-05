import { CSSProperties } from 'react'

import { POLICY_POSITION as AnchorPoint } from "../../enums"
import { moveAnchorPoint } from ".."

export function buildMoveAnchorPointStyle( 
    userStyle: CSSProperties,
    anchorPoint: AnchorPoint
 ) : CSSProperties
{
    return { 
        ...userStyle,
        ...moveAnchorPoint(anchorPoint),
    };
}