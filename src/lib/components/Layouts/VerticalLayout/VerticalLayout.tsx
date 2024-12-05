import { CSSProperties, FC } from 'react'
import { CommonProps } from "../../../interfaces"

import { VERTICAL_POLICY_POSITION as Vpos } from "../../../enums"
import { buildGapStyle, buildVerticalPolicyPosition } from "../../../utils"

import styles from "./VerticalLayout.module.css"


interface Props extends CommonProps {
    policyPos?: Vpos
    gap?: number,
}

function buildStyle( 
    userStyle: CSSProperties,
    policyPos: Vpos,
    gap: number
    ): CSSProperties
{
    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildVerticalPolicyPosition( newCustomStyle, policyPos ) }
    newCustomStyle = { ...buildGapStyle( newCustomStyle, gap ) }

    return newCustomStyle;
}

const VerticalLayout: FC<Props> = ({
    children,
    id = undefined,
    className = "",
    style = {},
    policyPos = Vpos.CENTER_CENTER,
    gap = 0,
}) => {


    const combinedClassName = `${styles["vertical-layout"]} ${className}`;
    const combinedStyle = buildStyle(style, policyPos, gap);

    return (

        <div id={id} className={combinedClassName} style={combinedStyle}>
            {children}
        </div>

    )
}

export { VerticalLayout };