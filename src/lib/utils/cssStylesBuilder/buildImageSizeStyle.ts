import { CSSProperties } from 'react'

import { ImageSize } from "../../interfaces"

export function buildImageSizeStyle( 
    userStyle: CSSProperties, 
    imageSize: ImageSize
 ) : CSSProperties
{
    return { 
        ...userStyle,
        width: `${imageSize.xSize}%`,
        height: `${imageSize.ySize}%`
    }
}