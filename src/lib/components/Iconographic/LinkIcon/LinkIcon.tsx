import { FC, CSSProperties } from 'react'

import { CommonProps } from "../../../interfaces"
import { checkSvgRefNameExist } from "../../../utils"

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

    if (!checkSvgRefNameExist(refName)) {
        refName = "default-icon";
    }

    const combinedClassName = `${styles["svg-icon-link"]} ${className}`;
    const combinedStyle = buildStyle(style);

    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <svg id={id} className={combinedClassName} style={combinedStyle}
                width={size} height={size}>
                <use xlinkHref={`#${refName}`} />
            </svg>
        </a>
    )
}

export { LinkIcon };


