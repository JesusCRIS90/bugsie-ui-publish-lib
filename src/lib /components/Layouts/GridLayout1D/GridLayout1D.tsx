import { CSSProperties, FC } from 'react'
import { CommonProps } from "../../../interfaces"
import { 
    POLICY_POSITION as POL_POS, 
    POLICY_ORIENTATION as ORIENTATION
} from "../../../enums"

import { 
    buildGapStyle, 
    buildGridOrientationStyle, 
    buildGridPolicyPositionStyle,
} from "../../../utils"

import styles from "./GridLayout1D.module.css"

interface Props extends CommonProps {
    inputGridDistribution: string
    policyPos?: POL_POS,
    orientation?: ORIENTATION,
    gap?: number,
}

function buildStyle( 
    userStyle: CSSProperties,
    orientation: ORIENTATION,
    input: string,
    groupPolicyPos: POL_POS,
    gap: number
    ): CSSProperties
{
    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildGridOrientationStyle( newCustomStyle, orientation, input ) }
    newCustomStyle = { ...buildGridPolicyPositionStyle( newCustomStyle, groupPolicyPos ) }
    newCustomStyle = { ...buildGapStyle( newCustomStyle, gap ) }

    return newCustomStyle;
}

const GridLayout1D: FC<Props> = ({
    children,
    id = undefined,
    className = "",
    style = {},
    inputGridDistribution,
    policyPos = POL_POS.CENTER_CENTER,
    orientation = ORIENTATION.HORIZONTAL,
    gap = 0
}) => {

    const combinedClassName = `${styles['grid-layout-1d']} ${className}`;
    const combinedStyle = buildStyle( style, orientation, inputGridDistribution, policyPos, gap );

    return (
        <div id={id} className={combinedClassName} style={combinedStyle}>
            {children}
        </div>
    )
}

export { GridLayout1D };