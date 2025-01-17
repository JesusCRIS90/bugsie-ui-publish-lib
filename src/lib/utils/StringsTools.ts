import { StringArray } from "../types"

export function StringArray2LowerCase(arrayStrings: StringArray): StringArray {
    return arrayStrings.map((word) => word.toLowerCase());
}
export function IsEmptyString(str: string): boolean {
    return str.trim() === '';
}