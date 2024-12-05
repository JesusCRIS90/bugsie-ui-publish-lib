import { CSSProperties } from 'react'

import { IMAGE_FITTING } from "../../enums"

export function buildImageFittingStyle( 
    userStyle: CSSProperties, 
    fittingMode: IMAGE_FITTING
 ) : CSSProperties
{
    return { 
        ...userStyle,
        objectFit: fittingMode
    }
}