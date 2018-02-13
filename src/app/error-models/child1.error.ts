export class Child1Error extends Error {
    message: string;

    constructor(message: string) {
        super(message);
        this.message = message;
        // Set the prototype explictilly
        Object.setPrototypeOf(this, Child1Error.prototype);
    }

    toString() {
        return this.message;
    }
}