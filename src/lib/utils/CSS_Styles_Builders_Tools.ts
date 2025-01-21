import { CSSProperties } from 'react'

import { itemGridDir } from "../types"

import { 
    iMinMax,
    ImageSize,
    iStringVec2D,
    iSize,
} from "../interfaces"

import { VERTICAL_POLICY_POSITION as Vpos } from "../enums"
import { POLICY_POSITION as ANCHOR_POINT } from "../enums"
import { POLICY_POSITION as POL_POS } from "../enums"
import { POLICY_ORIENTATION as ORIENTATION } from "../enums"
import { 
    IMAGE_FITTING,
    PAIR_DISTRIBUTION
} from "../enums"

import { StringArray } from "../types"

import { AnchorPointMap } from "../Maps"

import { moveAnchorPoint } from ".."
import { inputGridInterpretation } from ".."

const MAX_THICKNESS = 15;


function AssignLength(length: number) {
    if (length < 0) return 0;
    if (length >= 100) return 100;

    return length;
}

function AssignThickness(thickness: number) {
    if (thickness < 0) return 1;
    if (thickness >= MAX_THICKNESS) return MAX_THICKNESS;

    return thickness;
}

export function buildLineSeparatorStyle( 
    userStyle: CSSProperties,
    length: number,
    thickness: number
 ) : CSSProperties
{
    const newCustomStyle = {
        ...userStyle,
        width: `${AssignLength(length)}%`,
        height: `${AssignThickness(thickness)}px`,
    };

    return newCustomStyle;
}

export function buildMinMaxCardWidthStyle(
    userStyle: CSSProperties,
    MinMax: iMinMax,
): CSSProperties {


    const gridStyle = {
        '--min-card-width': `${MinMax.min}px`,
        '--max-card-width': `${MinMax.max}px`
    } as CSSProperties;

    const Style = {
        ...userStyle,
        ...gridStyle
    }

    return Style;
}

export function buildMinMaxWidthStyle( userStyle: CSSProperties, minmax: iMinMax ) : CSSProperties
{
    return { 
        ...userStyle,
        minWidth: minmax.min,
        maxWidth: minmax.max,
    }
}

export function buildMoveAnchorPointStyle( 
    userStyle: CSSProperties,
    anchorPoint: ANCHOR_POINT
 ) : CSSProperties
{
    return { 
        ...userStyle,
        ...moveAnchorPoint(anchorPoint),
    };
}

export function buildXYpositionStyle( 
    userStyle: CSSProperties,
    xpos: number,
    ypos: number,
 ) : CSSProperties
{
    return { 
        ...userStyle,
        top: `${ypos}%`,
        left: `${xpos}%`,
    };
}

export function buildOuterSizeIconStyle( 
    userStyle: CSSProperties, 
    outerSize: number
 ) : CSSProperties
{
    return { 
        ...userStyle,
        width: `${outerSize}px`,
        height: `${outerSize}px`
    }
}

export function buildVerticalPolicyPosition(
    userCustomStyle: CSSProperties,
    policyPosition: Vpos, 
    // Gap: number, 
): CSSProperties {

    let alignItems: string;
    let justifyContent: string;
    let alignContent: string;
    let flexWrap: CSSProperties["flexWrap"] = "nowrap"; // Default value to prevent undefined
    // const gap: string = `${Gap}px`;

    switch (policyPosition) {

        case Vpos.LEFT_LEFT:
            alignItems = "flex-start";   // Align left horizontally
            justifyContent = "flex-start"; // Align top vertically
            alignContent = "flex-start";   // Align content left within each row
            flexWrap = "wrap";
            break;

        case Vpos.LEFT_CENTER:
            alignItems = "center";        // Center horizontally
            justifyContent = "flex-start"; // Align top vertically
            alignContent = "flex-start";   // Align content left within each row
            flexWrap = "wrap";
            break;

        case Vpos.LEFT_RIGHT:
            alignItems = "flex-end";      // Align right horizontally
            justifyContent = "flex-start"; // Align top vertically
            alignContent = "flex-start";   // Align content left within each row
            flexWrap = "wrap";
            break;

        case Vpos.CENTER_LEFT:
            alignItems = "flex-start";    // Align left horizontally
            justifyContent = "center";     // Center vertically
            alignContent = "center";       // Align content center within each row
            flexWrap = "wrap";
            break;

        case Vpos.CENTER_CENTER:
            alignItems = "center";        // Center horizontally
            justifyContent = "center";     // Center vertically
            alignContent = "center";       // Align content center within each row
            flexWrap = "wrap";
            break;

        case Vpos.CENTER_RIGHT:
            alignItems = "flex-end";      // Align right horizontally
            justifyContent = "center";     // Center vertically
            alignContent = "center";       // Align content center within each row
            flexWrap = "wrap";
            break;

        case Vpos.RIGHT_LEFT:
            alignItems = "flex-start";    // Align left horizontally
            justifyContent = "flex-end";   // Align bottom vertically
            alignContent = "flex-end";     // Align content right within each row
            flexWrap = "wrap";
            break;

        case Vpos.RIGHT_CENTER:
            alignItems = "center";        // Center horizontally
            justifyContent = "flex-end";   // Align bottom vertically
            alignContent = "flex-end";     // Align content right within each row
            flexWrap = "wrap";
            break;

        case Vpos.RIGHT_RIGHT:
            alignItems = "flex-end";      // Align right horizontally
            justifyContent = "flex-end";   // Align bottom vertically
            alignContent = "flex-end";     // Align content right within each row
            flexWrap = "wrap";
            break;

        default:
            alignItems = "center";
            justifyContent = "center";
            alignContent = "center";
            flexWrap = "wrap";
            break;
    }

    return { ...userCustomStyle, alignItems, justifyContent, flexWrap, alignContent };

}

export function buildItemGridPolicyPosition( 
    userStyle: CSSProperties, 
    groupPolicyPos: POL_POS, 
    ): CSSProperties 
{

    let alignSelf: string;
    let justifySelf: string;

    switch (groupPolicyPos) {

        case POL_POS.TOP_LEFT:
            alignSelf = "start";
            justifySelf = "start";
            break;

        case POL_POS.TOP_CENTER:
            alignSelf = "start";
            justifySelf = "center";
            break;

        case POL_POS.TOP_RIGHT:
            alignSelf = "start";
            justifySelf = "end";
            break;

        case POL_POS.CENTER_LEFT:
            alignSelf = "center";
            justifySelf = "start";
            break;

        case POL_POS.CENTER_CENTER:
            alignSelf = "center";
            justifySelf = "center";
            break;

        case POL_POS.CENTER_RIGHT:
            alignSelf = "center";
            justifySelf = "end";
            break;

        case POL_POS.BOTTOM_LEFT:
            alignSelf = "end";
            justifySelf = "start";
            break;

        case POL_POS.BOTTOM_CENTER:
            alignSelf = "end";
            justifySelf = "center";
            break;

        case POL_POS.BOTTOM_RIGHT:
            alignSelf = "end";
            justifySelf = "end";
            break;
        
        case POL_POS.INHERIT:
            alignSelf = "inherit";
            justifySelf = "inherit";
            break;

        default:
            alignSelf = "center";
            justifySelf = "center";
    }

    return { ...userStyle, alignSelf, justifySelf };
}

export function buildItemGridDistribution( 
    usertyle: CSSProperties, 
    Xdir: itemGridDir, 
    Ydir: itemGridDir 
    ): CSSProperties
{

    let posStyle = { ...usertyle };

    // STYLE => X-POS or Col-Pos
    if( Xdir !== null ) {
        const gridColumn = `${Xdir.start.value} / span ${Xdir.span.value}`
        posStyle = {  ...posStyle, gridColumn };
    }

    if( Ydir !== null ) {
        const gridRow = `${Ydir.start.value} / span ${Ydir.span.value}`
        posStyle = {  ...posStyle, gridRow };
    }

    return posStyle;
}

export function buildImageSizeStyle( 
    userStyle: CSSProperties, 
    imageSize: ImageSize
 ) : CSSProperties
{
    return { 
        ...userStyle,
        width: `${imageSize.xSize}%`,
        height: `${imageSize.ySize}%`
    }
}

export function buildImageFittingStyle( 
    userStyle: CSSProperties, 
    fittingMode: IMAGE_FITTING
 ) : CSSProperties
{
    return { 
        ...userStyle,
        objectFit: fittingMode
    }
}

export function buildHorizontalPolicyPosition(
    userStyle: CSSProperties,
    policyPosition: POL_POS, 
): CSSProperties {

    let alignItems: string;
    let justifyContent: string;

    switch (policyPosition) {

        case POL_POS.TOP_LEFT:
            alignItems = "flex-start";
            justifyContent = "flex-start";
            break;

        case POL_POS.TOP_CENTER:
            alignItems = "flex-start";
            justifyContent = "center";
            break;

        case POL_POS.TOP_RIGHT:
            alignItems = "flex-start";
            justifyContent = "flex-end";
            break;

        case POL_POS.CENTER_LEFT:
            alignItems = "center";
            justifyContent = "flex-start";
            break;

        case POL_POS.CENTER_CENTER:
            alignItems = "center";
            justifyContent = "center";
            break;

        case POL_POS.CENTER_RIGHT:
            alignItems = "center";
            justifyContent = "flex-end";
            break;

        case POL_POS.BOTTOM_LEFT:
            alignItems = "flex-end";
            justifyContent = "flex-start";
            break;

        case POL_POS.BOTTOM_CENTER:
            alignItems = "flex-end";
            justifyContent = "center";
            break;

        case POL_POS.BOTTOM_RIGHT:
            alignItems = "flex-end";
            justifyContent = "flex-end";
            break;

        default:
            alignItems = "center";
            justifyContent = "center";
    }

    return { ...userStyle, alignItems, justifyContent };

}

export function buildGridPolicyPositionStyle( 
    userStyle: CSSProperties, 
    groupPolicyPos: POL_POS, 
    ): CSSProperties 
{

    let alignItems: string;
    let justifyItems: string;

    switch (groupPolicyPos) {

        case POL_POS.TOP_LEFT:
            alignItems = "start";
            justifyItems = "start";
            break;

        case POL_POS.TOP_CENTER:
            alignItems = "start";
            justifyItems = "center";
            break;

        case POL_POS.TOP_RIGHT:
            alignItems = "start";
            justifyItems = "end";
            break;

        case POL_POS.CENTER_LEFT:
            alignItems = "center";
            justifyItems = "start";
            break;

        case POL_POS.CENTER_CENTER:
            alignItems = "center";
            justifyItems = "center";
            break;

        case POL_POS.CENTER_RIGHT:
            alignItems = "center";
            justifyItems = "end";
            break;

        case POL_POS.BOTTOM_LEFT:
            alignItems = "end";
            justifyItems = "start";
            break;

        case POL_POS.BOTTOM_CENTER:
            alignItems = "end";
            justifyItems = "center";
            break;

        case POL_POS.BOTTOM_RIGHT:
            alignItems = "end";
            justifyItems = "end";
            break;
        
        case POL_POS.INHERIT:
            alignItems = "inherit";
            justifyItems = "inherit";
            break;

        default:
            alignItems = "center";
            justifyItems = "center";
    }

    return { ...userStyle, alignItems, justifyItems };
}

export function buildGridOrientationStyle( 
    userStyle: CSSProperties,
    orientation: ORIENTATION,
    input: string
    ) : CSSProperties
{

    let newStyleObject;

    switch (orientation) {
        
        case ORIENTATION.HORIZONTAL:
            
            newStyleObject = { 
                gridTemplateColumns: inputGridInterpretation( input )
            }

            break;

    
        case ORIENTATION.VERTICAL:
            
            newStyleObject = { 
                gridTemplateRows: inputGridInterpretation( input )
            }

            break;
        
        default:

            newStyleObject = { 
                gridTemplateRows: inputGridInterpretation( input )
            }

            break;
    }


    return { 
        ...userStyle,
        ...newStyleObject
    }
}

export function buildGridDistribution2D( 
    userStyle: CSSProperties, 
    input: iStringVec2D 
    ) : CSSProperties 
{
    const newStyleObject = { 
        gridTemplateColumns: inputGridInterpretation( input.x ),
        gridTemplateRows: inputGridInterpretation( input.y )
    }

    return { 
        ...userStyle,
        ...newStyleObject
    }
}

export function buildGapStyle( userStyle: CSSProperties, gap: number ) : CSSProperties
{
    return { 
        ...userStyle,
        gridGap: `${gap}px`
    }
}

export function buildFrameSizeStyle( 
    userStyle: CSSProperties, 
    frameSize: iSize,
 ) : CSSProperties
{
    return { 
        ...userStyle,
        width: frameSize.width,
        height: frameSize.height
    }
}

export function buildFlexDirection( 
    userStyle: CSSProperties,
    orientation: string,
 ) : CSSProperties
{
    return { 
        ...userStyle,
        flexDirection: `${orientation}`,
    } as CSSProperties;
}

export function buildBackgroundImageStyle(
    userStyle: CSSProperties,
    img: string, 
): CSSProperties {

    return { 
        ...userStyle, 
        backgroundImage: `url(${img})`,
    };
}

export function buildBackgroundImageAnchorPointStyle(
    userStyle: CSSProperties,
    anchorPoint: ANCHOR_POINT, 
): CSSProperties {

    return { 
        ...userStyle, 
        backgroundPosition: AnchorPointMap.get( anchorPoint ),
    };
}

export function buildWidthStyle(
    userStyle: CSSProperties,
    _width: number
): CSSProperties {

    return { 
        ...userStyle, 
        width: _width,
    };
}

export function buildHeightStyle(
    userStyle: CSSProperties,
    _height: number
): CSSProperties {

    return { 
        ...userStyle, 
        height: _height,
    };
}

// --------------------------

export function buildPairDistributionStyle(
    pairDIstribution: PAIR_DISTRIBUTION
): StringArray {

    const parDistributionArray: StringArray = [];

    switch (pairDIstribution) {
        case PAIR_DISTRIBUTION.OPPOSITE:
            parDistributionArray.push( "child-start" );
            parDistributionArray.push( "child-end" );
            break;
        case PAIR_DISTRIBUTION.CENTER:
            parDistributionArray.push( "child-center" );
            parDistributionArray.push( "child-center" );
            break;

        case PAIR_DISTRIBUTION.GLUED:
            parDistributionArray.push( "child-end" );
            parDistributionArray.push( "child-start" );
            break;

        default:
            break;
    }


    return parDistributionArray;
}