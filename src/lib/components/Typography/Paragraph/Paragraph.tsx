import { 
    CSSProperties, 
    FC
} from 'react'

import { CommonPropsWithoutChildren } from "../../../interfaces"
import { StringArray, TSX_Components } from "../../../types"
import { renderWords } from "../../../utils"

import styles from "./Paragraph.module.css"

interface Props extends CommonPropsWithoutChildren {
    children?: string,
    keywords?: StringArray
}

function buildStyle( 
    userStyle: CSSProperties,
    ): CSSProperties
{
    const newCustomStyle = { ...userStyle };

    return newCustomStyle;
}

const Paragraph: FC<Props> = ({
    children = "",
    id = undefined,
    className = "",
    style = {},
    keywords = [],
}) => {

    const combinedClassName = `${styles["single-text"]} ${className}`;
    const combinedStyle = buildStyle(style);
    const children2draw: string | TSX_Components = renderWords(children, keywords);

    return (
        <p id={id} className={combinedClassName} style={combinedStyle} >
            {children2draw}
        </p>
    )
}

export { Paragraph };