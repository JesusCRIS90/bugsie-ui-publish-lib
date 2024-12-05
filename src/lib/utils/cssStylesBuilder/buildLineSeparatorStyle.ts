import { CSSProperties } from 'react'

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