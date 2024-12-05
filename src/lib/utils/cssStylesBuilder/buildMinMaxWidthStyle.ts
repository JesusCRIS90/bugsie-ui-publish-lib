import { CSSProperties } from 'react'
import { iMinMax } from "../../interfaces"

export function buildMinMaxWidthStyle( userStyle: CSSProperties, minmax: iMinMax ) : CSSProperties
{
    return { 
        ...userStyle,
        minWidth: minmax.min,
        maxWidth: minmax.max,
    }

}