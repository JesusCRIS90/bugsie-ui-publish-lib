import { CSSProperties } from 'react'

export function buildOuterSizeIconStyle( 
    userStyle: CSSProperties, 
    outerSize: number
 ) : CSSProperties
{
    return { 
        ...userStyle,
        width: `${outerSize}px`,
        height: `${outerSize}px`
    }
}