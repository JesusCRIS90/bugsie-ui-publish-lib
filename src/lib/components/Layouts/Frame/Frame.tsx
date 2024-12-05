import { CSSProperties, FC } from 'react'
import { CommonProps, iSize } from "../../../interfaces"

import { buildFrameSizeStyle } from "../../../utils"

import styles from "./Frame.module.css"

// TODO: Think about the reason for this component

interface Props extends CommonProps {
    frameSize?: iSize,
}

function buildStyle( 
    userStyle: CSSProperties,
    frameSize: iSize,
    ): CSSProperties
{
    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildFrameSizeStyle( newCustomStyle, frameSize ) }

    return newCustomStyle;
}

const Frame: FC<Props> = ({
    children,
    id = undefined,
    className = "",
    style = {},
    frameSize = {height: "auto", width: "auto"}
}) => {

    const combinedClassName = `${styles.frame} ${className}`;
    const combinedStyles = buildStyle( style, frameSize );

    return (
        <div className={combinedClassName} id={id} style={combinedStyles}>
            {children}
        </div>
    )
}


export { Frame }