import { CSSProperties, FC } from 'react'
import { CommonProps } from "../../../interfaces"

import { POLICY_POSITION as PolPos } from "../../../enums"
import { buildGapStyle, buildHorizontalPolicyPosition } from "../../../utils"

import styles from "./HorizontalLayout.module.css"

interface Props extends CommonProps {
    policyPos?: PolPos
    gap?: number,
}

function buildStyle( 
    userStyle: CSSProperties,
    policyPos: PolPos,
    gap: number
    ): CSSProperties
{
    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildHorizontalPolicyPosition( newCustomStyle, policyPos ) }
    newCustomStyle = { ...buildGapStyle( newCustomStyle, gap ) }

    return newCustomStyle;
}

const HorizontalLayout: FC<Props> = ({
    children,
    id = undefined,
    className = "",
    style = {},
    policyPos = PolPos.CENTER_CENTER,
    gap = 0,
}) => {


    const combinedClassName = `${styles["horizontal-layout"]} ${className}`;
    const combinedStyle = buildStyle(style, policyPos, gap);

    return (

        <div id={id} className={combinedClassName} style={combinedStyle}>
            {children}
        </div>

    )
}

export { HorizontalLayout };