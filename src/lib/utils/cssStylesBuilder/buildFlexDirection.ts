import { CSSProperties } from 'react'

export function buildFlexDirection( 
    userStyle: CSSProperties,
    orientation: string,
 ) : CSSProperties
{
    return { 
        ...userStyle,
        flexDirection: `${orientation}`,
    } as CSSProperties;
}