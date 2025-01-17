import { FC, CSSProperties } from 'react'

import { CommonProps } from "../../../interfaces"
import {
    buildOuterSizeIconStyle,
    checkSvgRefNameExist
} from "../../../utils"

import styles from "./RoundIcon.module.css"


interface Props extends CommonProps {
    refName: string;
    innerSize?: number;
    outerSize?: number;
}

function buildStyle(
    userStyle: CSSProperties,
    outerSize: number
): CSSProperties {

    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildOuterSizeIconStyle(newCustomStyle, outerSize) }

    return newCustomStyle;
}

const RoundIcon: FC<Props> = ({
    refName,
    id = undefined,
    className = "",
    style = {},
    innerSize = 24,
    outerSize = 44
}) => {

    if (!checkSvgRefNameExist(refName)) {
        refName = "default-icon";
    }

    const combinedClassName = `${styles["round-icon"]} ${className}`;
    const combinedStyle = buildStyle(style, outerSize);

    return (
        <div id={id} className={combinedClassName} style={combinedStyle}>
            <svg width={innerSize} height={innerSize}>
                <use xlinkHref={`#${refName}`} />
            </svg>
        </div>
    )
}

export { RoundIcon };
