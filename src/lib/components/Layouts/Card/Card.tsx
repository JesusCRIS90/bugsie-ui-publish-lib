import { CSSProperties, FC } from 'react'

import { CommonProps, iMinMax } from "../../../interfaces"
import { buildMinMaxWidthStyle } from "../../../utils"

import styles from "./Card.module.css"


export interface Props extends CommonProps {
    minMaxWidth: iMinMax,
}

function buildStyle( 
    userStyle: CSSProperties,
    minMaxWidth: iMinMax,
    ): CSSProperties
{

    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildMinMaxWidthStyle( newCustomStyle, minMaxWidth ) }

    return newCustomStyle;
}

const Card: FC<Props> = ({
    children,
    id = "",
    className = "",
    style = {},
    minMaxWidth
}) => {

    const combinedClassName = `${styles['card-container']} ${className}`;

    return (
        <div className={combinedClassName} id={id} style={buildStyle(style, minMaxWidth)}>
            {children}
        </div>
    )
}

export { Card }