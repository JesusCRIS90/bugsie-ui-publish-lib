import { FC, CSSProperties } from 'react'

import { CommonProps } from "../../../interfaces"
import {
    buildOuterSizeIconStyle,
    checkSvgRefNameExist
} from "../../../utils"
import { DefaultSVG } from "../../Iconographic"

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

    const combinedClassName = `${styles["round-icon"]} ${className}`;
    const combinedStyle = buildStyle(style, outerSize);

    return (

        <div id={id} className={combinedClassName} style={combinedStyle}>
            {
                checkSvgRefNameExist(refName) ?
                    <svg width={innerSize} height={innerSize}>
                        <use xlinkHref={`#${refName}`} />
                    </svg>
                    : <DefaultSVG id={id} className={combinedClassName} style={style}
                        refName={"no-icon"} size={innerSize} />
            }
        </div>

    )
}

export { RoundIcon };
