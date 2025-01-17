import { CSSProperties, FC } from 'react'
import { 
    POLICY_POSITION as POL_POS, 
} from "../../../enums"

import { CommonProps } from "../../../interfaces"
import { itemGridDir } from "../../../types"
import { 
    buildItemGridDistribution,
    buildItemGridPolicyPosition
} from "../../../utils"

import styles from "./ItemGridLayout.module.css"

interface Props extends CommonProps {
    x_dir?: itemGridDir;
    y_dir?: itemGridDir;
    policyPos?: POL_POS
}

function buildStyle( 
    userStyle: CSSProperties,
    Xdir: itemGridDir,
    Ydir: itemGridDir,
    policyPos: POL_POS,
    ): CSSProperties
{
    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildItemGridDistribution( newCustomStyle, Xdir, Ydir  ) }
    newCustomStyle = { ...buildItemGridPolicyPosition( newCustomStyle, policyPos ) }

    return newCustomStyle;
}

const ItemGridLayout: FC<Props> = ({
    x_dir = null,
    y_dir = null,
    children,
    id = undefined,
    className = "",
    style = {},
    policyPos = POL_POS.INHERIT,
}) => {

    const combinedClassName = `${styles["grid-item-layout"]} ${className}`;
    const combinedStyle = buildStyle( style, x_dir, y_dir, policyPos );

    return (
        <div id={id} className={combinedClassName} style={combinedStyle}>
            {children}
        </div>
    )
}

export { ItemGridLayout };