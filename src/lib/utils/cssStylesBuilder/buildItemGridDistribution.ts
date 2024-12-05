import { CSSProperties } from 'react'
import { itemGridDir } from "../../types"

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


    // if( pos.x !== null ){
        
    //     if( size.x !== null ){
    //         const gridColumn = `${pos.x} / span ${size.x}`
    //         posStyle = {  ...posStyle, gridColumn };
    //     }

    // }

    // if( pos.y !== null ){
        
    //     if( size.y !== null ){
    //         const gridRow = `${pos.y} / span ${size.y}`
    //         posStyle = {  ...posStyle, gridRow };
    //     }

    // }

    return posStyle;
}