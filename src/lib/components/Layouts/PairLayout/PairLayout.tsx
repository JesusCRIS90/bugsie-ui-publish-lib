import { CSSProperties, FC, Children, ReactNode } from 'react'
import { CommonPropsWithoutChildren } from "../../../interfaces"

import {
    buildGridOrientationStyle,
    buildGapStyle,
    buildPairDistributionStyle
} from "../../../utils"

import {
    POLICY_ORIENTATION as ORIENTATION,
    PAIR_DISTRIBUTION
} from "../../../enums"


import styles from "./PairLayout.module.css"


interface Props extends CommonPropsWithoutChildren {
    children: ReactNode
    pairDistribution?: PAIR_DISTRIBUTION,
    spaceDistribution?: string,
    gap?: number
}


function buildStyle(
    userStyle: CSSProperties,
    spaceDistribution: string,
    gap: number
): CSSProperties {

    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildGridOrientationStyle( 
        newCustomStyle, ORIENTATION.HORIZONTAL, spaceDistribution ) }

    newCustomStyle = { ...buildGapStyle( newCustomStyle, gap ) }

    return newCustomStyle;
}

const PairLayout: FC<Props> = ({
    children,
    id = undefined,
    className = "",
    style = {},
    pairDistribution = PAIR_DISTRIBUTION.CENTER,
    spaceDistribution = "1fr 1fr",
    gap = 0
}) => {

    // Limit children to two
    const limitedChildren = Children.toArray(children).slice(0, 2);
    
    if (limitedChildren.length < 2)
        return (
            <div>
                Children Component less than two. Please Give Two Components.
            </div>
    );


    const combinedClassName = `${styles['pair-layout']} ${className}`;
    const combinedStyle = buildStyle(style, spaceDistribution, gap);

    const pairStyle = buildPairDistributionStyle( pairDistribution );

    return (

        <div id={id} className={combinedClassName} style={combinedStyle}>
            <div className={styles[pairStyle[0]]}>{limitedChildren[0]}</div>
            <div className={styles[pairStyle[1]]}>{limitedChildren[1]}</div>
        </div>

    )
}

export { PairLayout };