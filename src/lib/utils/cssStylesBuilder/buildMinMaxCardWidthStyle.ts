import { 
    CSSProperties
} from 'react'

import { iMinMax } from "../../interfaces"

export function buildMinMaxCardWidthStyle(
    userStyle: CSSProperties,
    MinMax: iMinMax,
): CSSProperties {


    const gridStyle = {
        '--min-card-width': `${MinMax.min}px`,
        '--max-card-width': `${MinMax.max}px`
    } as CSSProperties;

    const Style = {
        ...userStyle,
        ...gridStyle
    }

    return Style;
}