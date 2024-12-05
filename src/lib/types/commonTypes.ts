import { 
    ReactElement,
    ReactNode
} from 'react'

import { CardProps } from '../components'
import { igridSpan } from "../interfaces"

export type CardChildren = ReactElement<CardProps> | ReactElement<CardProps>[] | undefined;
export type itemGridDir = igridSpan | null;
export type StringArray = string[];

export type TSX_Components = ReactNode | ReactNode[];
