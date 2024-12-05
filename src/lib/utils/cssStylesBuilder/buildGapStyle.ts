import { CSSProperties } from 'react'

export function buildGapStyle( userStyle: CSSProperties, gap: number ) : CSSProperties
{
    return { 
        ...userStyle,
        gridGap: `${gap}px`
    }
}