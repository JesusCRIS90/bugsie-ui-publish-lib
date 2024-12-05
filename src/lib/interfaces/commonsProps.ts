import { PropsWithChildren, CSSProperties } from 'react'

export interface CommonProps extends PropsWithChildren {
    id?: string | undefined,
    className?: string,
    style?: CSSProperties
}

export interface CommonPropsWithoutChildren {
    id?: string | undefined,
    className?: string,
    style?: CSSProperties
}