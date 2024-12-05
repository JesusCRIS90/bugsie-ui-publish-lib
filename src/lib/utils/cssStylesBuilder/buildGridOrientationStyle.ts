import { CSSProperties } from 'react'
import { POLICY_ORIENTATION as ORIENTATION } from "../../enums"
import { inputGridInterpretation } from ".."

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