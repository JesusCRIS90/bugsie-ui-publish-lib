import { 
    CSSProperties, 
    FC, 
    ReactElement,
} from 'react'

import { CardProps } from '..'
import { CommonPropsWithoutChildren, iMinMax } from "../../../interfaces"
import { 
    buildMinMaxCardWidthStyle, 
    buildGapStyle,
    calculateCardMinMaxWidth
} from "../../../utils"

import styles from "./ResponsiveCardGrid.module.css"

interface Props extends CommonPropsWithoutChildren {
    children?: ReactElement<CardProps> | ReactElement<CardProps>[];
    gap?: number,
}

function buildStyle( 
    userStyle: CSSProperties,
    MinMax: iMinMax,
    gap: number
    ): CSSProperties
{
    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildMinMaxCardWidthStyle( newCustomStyle, MinMax  ) }
    newCustomStyle = { ...buildGapStyle( newCustomStyle, gap ) }

    return newCustomStyle;
}


const ResponsiveCardGrid: FC<Props> = ({
    children,
    id = "",
    className = "",
    style = {},
    gap = 0,
}) => {

    const MinMax:iMinMax = calculateCardMinMaxWidth( children );
    const combinedClassName = `${styles['responsive-card-grid']} ${className}`;
    const combinedStyle = buildStyle( style, MinMax, gap );  

    // Avoiding Render a empty div if there is no children
    if( children === undefined ) {
        return <></>
    }

    return (
        <div className={combinedClassName} id={id} style={combinedStyle}>
            {children}
        </div>
    )
}

export { ResponsiveCardGrid }