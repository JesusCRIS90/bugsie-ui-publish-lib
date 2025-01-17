import { CSSProperties } from 'react'
import { POLICY_POSITION as AnchorPoint } from "../enums"

export function moveAnchorPoint(anchorPoint: AnchorPoint): CSSProperties {

    switch (anchorPoint) {

        case AnchorPoint.TOP_LEFT:
            return {
                transform: `translate(0, 0)`
            };

        case AnchorPoint.TOP_CENTER:
            return {
                transform: `translate(-50%, 0)`
            };

        case AnchorPoint.TOP_RIGHT:
            return {
                transform: `translate(-100%, 0)`
            };

        case AnchorPoint.CENTER_LEFT:
            return {
                transform: `translate(0, -50%)`
            };

        case AnchorPoint.CENTER_CENTER:
            return {
                transform: `translate(-50%, -50%)`
            };

        case AnchorPoint.CENTER_RIGHT:
            return {
                transform: `translate(-100%, -50%)`
            };

        case AnchorPoint.BOTTOM_LEFT:
            return {
                transform: `translate(0, -100%)`
            };

        case AnchorPoint.BOTTOM_CENTER:
            return {
                transform: `translate(-50%, -100%)`
            };

        case AnchorPoint.BOTTOM_RIGHT:
            return {
                transform: `translate(-100%, -100%)`
            };

        default:
            return {};
    }
}