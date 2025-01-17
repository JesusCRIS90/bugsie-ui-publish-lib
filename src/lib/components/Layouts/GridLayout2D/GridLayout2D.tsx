import { CSSProperties, FC } from 'react'

import { iStringVec2D, CommonProps } from "../../../interfaces"
import { POLICY_POSITION as POL_POS} from "../../../enums"

import { 
    buildGapStyle, 
    buildGridDistribution2D,
    buildGridPolicyPositionStyle,
} from "../../../utils"

import styles from "./GridLayout2D.module.css"


interface Props extends CommonProps {
    inputGrid2Distribution: iStringVec2D
    policyPos?: POL_POS,
    gap?: number,
}

function buildStyle( 
    userStyle: CSSProperties,
    input: iStringVec2D,
    policyPos: POL_POS,
    gap: number
    ): CSSProperties
{
    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildGridDistribution2D( newCustomStyle, input ) }
    newCustomStyle = { ...buildGridPolicyPositionStyle( newCustomStyle, policyPos ) }
    newCustomStyle = { ...buildGapStyle( newCustomStyle, gap ) }

    return newCustomStyle;
}


const GridLayout2D: FC<Props> = ({
    inputGrid2Distribution,
    children,
    id = undefined,
    className = "",
    style = {},
    policyPos = POL_POS.CENTER_CENTER,
    gap = 0
}) => {

    const combinedClassName = `${styles['grid-layout-2d']} ${className}`;    
    const combinedStyle = buildStyle( style, inputGrid2Distribution, policyPos, gap );

    return (
        <div id={id} className={combinedClassName} style={combinedStyle}>
            {children}
        </div>
    )
}

export { GridLayout2D };