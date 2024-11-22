import { PropsWithChildren, CSSProperties } from 'react'

export interface CommonProps extends PropsWithChildren {
    id?: string,
    className?: string,
    style?: CSSProperties
}