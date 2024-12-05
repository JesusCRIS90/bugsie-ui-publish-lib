import { 
    ReactElement,
} from 'react'

import { CardProps } from '../components'
import { iMinMax } from "../interfaces"
import { CardChildren } from "../types"

export function calculateCardMinMaxWidth(children: CardChildren){

    let childArray: ReactElement<CardProps>[] = [];
    const minmax: iMinMax = { max: 0, min: 0 };

    // Ensure children is an array, even if it's a single element or undefined/null
    if (Array.isArray(children)) {
        childArray = children;
    } else if (children) {
        childArray = [children];
    }

    if (childArray.length > 0) {

        // Calculate min and max card widths based on the children props
        const minWidthArray = childArray.map(child => child.props.minMaxWidth.min);
        const maxWidthArray = childArray.map(child => child.props.minMaxWidth.max);

        minmax.max = Math.max(...maxWidthArray);
        minmax.min = Math.min(...minWidthArray);
    }

    return minmax;
}