import { FC, CSSProperties } from 'react'

import { CommonProps } from "../../../interfaces"

import { checkSvgRefNameExist } from "../../../utils"

import styles from "./SvgIcon.module.css"

interface Props extends CommonProps {
    refName: string;
    size?: number;
}

function buildStyle(
    userStyle: CSSProperties,
): CSSProperties {

    const newCustomStyle = { ...userStyle };

    return newCustomStyle;
}

const SvgIcon: FC<Props> = ({
    refName,
    id = undefined,
    className = "",
    style = {},
    size = 24,
}) => {

    if( !checkSvgRefNameExist(refName) ) {
        refName = "default-icon";
    }

    const combinedClassName = `${styles["svg-icon"]} ${className}`;
    const combinedStyle = buildStyle(style);

    return (
        <svg
            id={id} className={combinedClassName} style={combinedStyle}
            width={size} height={size}
        >
            <use xlinkHref={`#${refName}`} />
        </svg>
    )
}



export { SvgIcon };


