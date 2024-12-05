import { CSSProperties } from 'react'
import { iSize } from "../../interfaces"

export function buildFrameSizeStyle( 
    userStyle: CSSProperties, 
    frameSize: iSize,
 ) : CSSProperties
{
    return { 
        ...userStyle,
        width: frameSize.width,
        height: frameSize.height
    }
}