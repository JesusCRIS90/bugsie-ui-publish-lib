import { 
    CSSProperties, 
    FC
} from 'react'

import { CommonPropsWithoutChildren } from "../../../interfaces"
import { TYPOGRAPHY_LEVEL as TY_LV } from "../../../enums"
import { StringArray, TSX_Components } from "../../../types"
import { renderWords } from "../../../utils"

import styles from "./Title.module.css"


interface Props extends CommonPropsWithoutChildren {
    children?: string,
    level?: TY_LV,
    keywords?: StringArray
}

function buildStyle( 
    userStyle: CSSProperties,
    ): CSSProperties
{

    const newCustomStyle = { ...userStyle };

    return newCustomStyle;
}

const Title: FC<Props> = ({
    children = "",
    id = undefined,
    className = "",
    style = {},
    level = TY_LV.LEVEL_1,
    keywords = [],
}) => {

    const combinedClassName = `${styles["tittle"]} ${className}`;
    const combinedStyle = buildStyle(style);

    const children2draw: string | TSX_Components = renderWords(children, keywords);

    if (level === TY_LV.LEVEL_1) {
        return (
            <h1 id={id} className={combinedClassName} style={combinedStyle} >
                {children2draw}
            </h1>
        )
    }

    if (level === TY_LV.LEVEL_2) {
        return (
            <h2 id={id} className={combinedClassName} style={combinedStyle} >
                {children2draw}
            </h2>
        )
    }

    if (level === TY_LV.LEVEL_3) {
        return (
            <h3 id={id} className={combinedClassName} style={combinedStyle} >
                {children2draw}
            </h3>
        )
    }

    if (level === TY_LV.LEVEL_4) {
        return (
            <h4 id={id} className={combinedClassName} style={combinedStyle} >
                {children2draw}
            </h4>
        )
    }

    if (level === TY_LV.LEVEL_5) {
        return (
            <h5 id={id} className={combinedClassName} style={combinedStyle} >
                {children2draw}
            </h5>
        )
    }

    if (level === TY_LV.LEVEL_6) {
        return (
            <h6 id={id} className={combinedClassName} style={combinedStyle} >
                {children2draw}
            </h6>
        )
    }

}

export { Title };