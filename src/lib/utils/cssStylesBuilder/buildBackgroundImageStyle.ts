import { CSSProperties } from 'react'

export function buildBackgroundImageStyle(
    userStyle: CSSProperties,
    img: string, 
): CSSProperties {

    return { 
        ...userStyle, 
        backgroundImage: `url(${img})`,
    };

}