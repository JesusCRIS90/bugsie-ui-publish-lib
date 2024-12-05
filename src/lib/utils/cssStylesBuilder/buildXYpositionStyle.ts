import { CSSProperties } from 'react'

export function buildXYpositionStyle( 
    userStyle: CSSProperties,
    xpos: number,
    ypos: number,
 ) : CSSProperties
{
    return { 
        ...userStyle,
        top: `${ypos}%`,
        left: `${xpos}%`,
    };
}