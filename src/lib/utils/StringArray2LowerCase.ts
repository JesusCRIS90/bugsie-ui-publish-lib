import { StringArray } from "../types"

export function StringArray2LowerCase(arrayStrings: StringArray): StringArray {
    return arrayStrings.map((word) => word.toLowerCase());
}