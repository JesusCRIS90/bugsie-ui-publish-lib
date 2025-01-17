import { FC, CSSProperties } from 'react'

import { TSX_Components } from "../../../types"
import { CommonPropsWithoutChildren } from "../../../interfaces"
import { POLICY_POSITION as ANCHOR_POINT } from "../../../enums"
import { 
    buildBackgroundImageAnchorPointStyle,
    buildBackgroundImageStyle
 } from "../../../utils"


import styles from "./Background.module.css"

interface Props extends CommonPropsWithoutChildren {
    children?: TSX_Components,
    img?: string,
    anchorPoint?: ANCHOR_POINT,
}

function buildStyle(
    userStyle: CSSProperties,
    img: string, 
    anchorPoint: ANCHOR_POINT
): CSSProperties {

    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildBackgroundImageStyle( newCustomStyle, img ) }
    newCustomStyle = { ...buildBackgroundImageAnchorPointStyle( newCustomStyle, anchorPoint ) }

    return newCustomStyle;
}

const BackGround: FC<Props> = ({
    children,
    id = undefined,
    className = "",
    style = {},
    img = "",
    anchorPoint = ANCHOR_POINT.TOP_LEFT,
}) => {

    const combinedClassName = `${styles["bg"]} ${className}`;
    const combinedStyle = buildStyle(style, img, anchorPoint);

    return (
        <section id={id} className={combinedClassName} style={combinedStyle} >
            {children}
        </section>
    )
}


export {BackGround}
