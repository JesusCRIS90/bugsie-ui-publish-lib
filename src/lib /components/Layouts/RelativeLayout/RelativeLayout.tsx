import { CSSProperties, FC } from 'react'
import { CommonProps } from "../../../interfaces"

import styles from "./RelativeLayout.module.css"


function BuildStyle( 
    userStyle: CSSProperties,
    ): CSSProperties
{

    const newCustomStyle = { 
        ...userStyle,
        // Add here new StylesProps
    };

    return newCustomStyle;
}


const RelativeLayout: FC<CommonProps> = ({
    children,
    id = undefined,
    className = "",
    style = {},
}) => {

    const combinedClassName = `${styles['relative-layout']} ${className}`;
    const combinedStyles = BuildStyle( style );

    return (
        <div className={combinedClassName} id={id} style={combinedStyles}>
            {children}
        </div>
    )
}


export { RelativeLayout }