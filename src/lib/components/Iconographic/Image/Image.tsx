import { FC, CSSProperties } from 'react'

import { IMAGE_FITTING } from '../../../enums'
import { CommonPropsWithoutChildren, ImageSize } from "../../../interfaces"
import { 
    buildImageFittingStyle, 
    buildImageSizeStyle
} from "../../../utils"

import styles from "./Image.module.css"


interface Props extends CommonPropsWithoutChildren {
    src?: string,
    size?: ImageSize,
    fittingMode?: IMAGE_FITTING,
}

function buildStyle(
    userStyle: CSSProperties,
    imageSize: ImageSize,
    fittingMode: IMAGE_FITTING
): CSSProperties {

    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildImageSizeStyle( newCustomStyle, imageSize ) }
    newCustomStyle = { ...buildImageFittingStyle( newCustomStyle, fittingMode ) }

    return newCustomStyle;
}

const Image: FC<Props> = ({
    id = undefined,
    className = "",
    style = {},
    src = "",
    size = { xSize: 100, ySize: 100 },
    fittingMode = IMAGE_FITTING.CONTAIN,
}) => {

    // const { fileExists } = useCheckStaticFileExist( src );

    const combinedClassName = `${styles["image"]} ${className}`;
    const combinedStyle = buildStyle( style, size, fittingMode );

    return (

        <img id={id} className={combinedClassName} style={combinedStyle}
            // src={ fileExists ? dataImg : getNoImage() }
            src={ src }>
        </img>

    )
}

export { Image };