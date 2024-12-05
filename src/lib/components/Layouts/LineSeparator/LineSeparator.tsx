import { CSSProperties, FC } from 'react'

import { CenterLayout } from ".."
import { CommonProps } from "../../../interfaces"
import { buildLineSeparatorStyle } from "../../../utils"

import styles from "./LineSeparator.module.css"


interface Props extends CommonProps {
    length?: number,
    thickness?: number,
}


function buildStyle( 
    userStyle: CSSProperties,
    length: number,
    thickness: number
    ): CSSProperties
{
    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildLineSeparatorStyle( userStyle, length, thickness ) }

    return newCustomStyle;
}


const LineSeparator: FC<Props> = ({
    children,
    id = undefined,
    className = "",
    style = {},
    length = 30,
    thickness = 1,
}) => {

    const combinedClassName = `${styles['line-separator']} ${className}`;
    const combinedStyles = buildStyle(style, length, thickness);

    return (
        <CenterLayout className={styles['line-separator-container']}>
            <div className={combinedClassName} id={id} style={combinedStyles}>
                {children}
            </div>
        </CenterLayout>
    )
}


export { LineSeparator }