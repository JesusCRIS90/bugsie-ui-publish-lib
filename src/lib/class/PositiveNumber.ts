export class PositiveNumber {

    readonly value: number;

    constructor(value: number) {
        if (value <= 0) {
            throw new Error("Value must be greater than 0.");
        }
        this.value = value;
    }
}