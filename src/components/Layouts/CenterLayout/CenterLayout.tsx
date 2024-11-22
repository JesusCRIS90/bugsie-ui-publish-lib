import { FC, CSSProperties } from 'react'
import { CommonProps } from '../../interfaces';

import styles from "./CenterLayout.module.css"

interface Props extends CommonProps{
    // Add here new props
    fit2Content?: boolean
}

function BuildStyle(
    userStyle: CSSProperties,
    fit2Content: boolean,
): CSSProperties {

    const Style = {
        ...userStyle,
        height: fit2Content === true ? "auto": "100vh",
    }

    return Style;
}

const CenterLayout: FC<Props> = ({
    children,
    id = "",
    className = "",
    style = {},
    fit2Content = true
}) => {

    const combinedClassName = `${styles["center-layout"]} ${className}`;
    const combinedStyle = BuildStyle( style, fit2Content );

    return (
        <div id={id} className={combinedClassName} style={combinedStyle}>
            {children}
        </div>
    )
}

export { CenterLayout };