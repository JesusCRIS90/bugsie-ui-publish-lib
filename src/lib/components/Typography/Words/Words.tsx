import { FC, CSSProperties, ReactNode, Fragment } from 'react'

import styles from "./Words.module.css"

import { 
    // CommonProps as Props,
    CommonPropsWithoutChildren,
} from "../../../interfaces"

interface Props extends CommonPropsWithoutChildren {
    children?: ReactNode;
}

function buildStyle( 
    userStyle: CSSProperties,
    ): CSSProperties
{
    const newCustomStyle = { ...userStyle };

    return newCustomStyle;
}

const NormalWord: FC<Props> = ({
    children = "",
    // id = undefined,
    // className = "",
    // style = {},
}) => {

    // const combinedClassName = `${styles['normal-word']} ${className}`;
    // const combinedStyle = buildStyle(style);

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

const KeyWord: FC<Props> = ({
    children = "",
    id = undefined,
    className = "",
    style = {},
}) => {

    const combinedClassName = `${styles['key-word']} ${className}`;
    const combinedStyle = buildStyle(style);

    return (
        <span id={id} className={combinedClassName} style={combinedStyle} >
            {children} 
        </span>
    )

}

export { NormalWord, KeyWord };