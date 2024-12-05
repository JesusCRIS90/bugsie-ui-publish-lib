import { CSSProperties } from 'react'

import { iStringVec2D } from "../../interfaces"
import { inputGridInterpretation } from ".."

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