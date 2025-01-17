import { FC, CSSProperties } from 'react';

import { CommonProps } from '../../../interfaces';
import { POLICY_POSITION as AnchorPoint } from "../../../enums"
import { 
    buildFlexDirection,
    buildXYpositionStyle,
    buildMoveAnchorPointStyle
} from "../../../utils"

import styles from "./FloatingLayout.module.css"

interface Props extends CommonProps {
    orientation?: "row" | "column"
    posX: number;
    posY: number;
    anchorPoint?: AnchorPoint;
}

function buildStyle( 
    userStyle: CSSProperties,
    xpos: number,
    ypos: number,
    orientation: string,
    anchorPoint: AnchorPoint
    ): CSSProperties
{
    let newCustomStyle = { ...userStyle };

    newCustomStyle = { ...buildFlexDirection( newCustomStyle, orientation ) }
    newCustomStyle = { ...buildMoveAnchorPointStyle( newCustomStyle, anchorPoint ) }
    newCustomStyle = { ...buildXYpositionStyle( newCustomStyle, xpos, ypos ) }

    return newCustomStyle;
}

const FloatingLayout: FC<Props> = ({
    children,
    id,
    className,
    style = {},
    posX,
    posY,
    orientation = "row",
    anchorPoint = AnchorPoint.CENTER_CENTER
}) => {

    const combinedClassName = `${styles['floating-layout']} ${className}`;
    const newStyle = buildStyle(style, posX, posY, orientation, anchorPoint);

    return (
        <div id={id} className={combinedClassName} style={newStyle}>
            {children}
        </div>
    );
};

export { FloatingLayout };