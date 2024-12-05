import { FC, CSSProperties } from 'react'

import { CommonProps } from "../../../interfaces"
import { checkSvgRefNameExist } from "../../../utils"
import { DefaultSVG } from "../../Iconographic"

import styles from "./LinkIcon.module.css"


interface Props extends CommonProps {
    refName: string;
    size?: number;
    link?: string;
}

function buildStyle(
    userStyle: CSSProperties,
): CSSProperties {

    const newCustomStyle = { ...userStyle };

    return newCustomStyle;
}

const LinkIcon: FC<Props> = ({
    refName,
    id = undefined,
    className = "",
    style = {},
    size = 24,
    link = "",
}) => {

    const combinedClassName = `${styles["svg-icon-link"]} ${className}`;
    const combinedStyle = buildStyle(style);

    return (
        <a href={link} target='_blank' rel='noreferrer'>
            {
                checkSvgRefNameExist(refName) ?
                    <svg id={id} className={combinedClassName} style={combinedStyle}
                        width={size} height={size}>
                        <use xlinkHref={checkSvgRefNameExist(refName) ? `#${refName}` : `#default-icon`} />
                    </svg>
                    : <DefaultSVG id={id} className={combinedClassName} style={style}
                        refName={"no-icon"} size={size} />
            }
        </a>
    )
}

export { LinkIcon };


