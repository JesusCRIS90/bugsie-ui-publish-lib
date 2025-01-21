import { CSSProperties, FC } from 'react'
import { CommonProps } from "../../../interfaces"

import {
    buildWidthStyle,
} from "../../../utils"

import { NullableNumber } from "../../../types"

import styles from "./FixedWidthLayout.module.css"

interface Props extends CommonProps {
    width?: NullableNumber
}

function buildStyle(
    userStyle: CSSProperties,
    width: NullableNumber,
): CSSProperties {
    let newCustomStyle = { ...userStyle };

    if (width !== null)
        newCustomStyle = { ...buildWidthStyle( newCustomStyle, width ) }

    return newCustomStyle;
}

const FixedWidthLayout: FC<Props> = ({
    children,
    id = undefined,
    className = "",
    style = {},
    width = null,
}) => {


    const combinedClassName = `${styles['fixed-width-layout']} ${className}`;
    const combinedStyle = buildStyle(style, width);

    return (

        <div id={id} className={combinedClassName} style={combinedStyle}>
            {children}
        </div>

    )
}

export { FixedWidthLayout };