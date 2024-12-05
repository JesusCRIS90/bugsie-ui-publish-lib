import { FC, CSSProperties } from 'react'

import styles from "./Label.module.css"

import { CommonProps as Props } from "../../../interfaces"

// interface Props extends CommonProps {
//     // 
// }

function buildStyle( 
    userStyle: CSSProperties,
    ): CSSProperties
{

    const newCustomStyle = { ...userStyle };

    return newCustomStyle;
}

const Label: FC<Props> = ({
    children = "",
    id = undefined,
    className = "",
    style = {},
}) => {

    const combinedClassName = `${styles["default-label"]} ${className}`;
    const combinedStyle = buildStyle(style);

    return (
        <span id={id} className={combinedClassName} style={combinedStyle} >
            {children}
        </span>
    )

}

export { Label };