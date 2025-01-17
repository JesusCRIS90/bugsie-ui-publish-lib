import { IsEmptyString } from "./StringsTools"

export function getHtmlElementsInBody(): HTMLElement[] {

    const body = document.body;

    if (!body) {
        throw new Error("Body element not found in the document.");
    }

    const elements = body.querySelectorAll<HTMLElement>("*");

    return Array.from(elements);
}

export function getHTMLElementsInBodyByType<T extends HTMLElement>(selector: string): T[] {

    const body = document.body;

    if (!body) {
        throw new Error("Body element not found in the document.");
    }

    const elements = body.querySelectorAll<T>(selector);

    return Array.from(elements);
}

export function getHTMLElementInBodyById<T extends HTMLElement>(id: string): T| null {

    const body = document.body;

    if (!body) {
        throw new Error("Body element not found in the document.");
    }

    if (IsEmptyString(id)) {
        throw new Error("Id Specify is empty.");
    }

    const element = body.querySelector<T>(`#${id}`);

    return element;
}

export function existHTMLElementWithIdInHTMLElementsArray<T extends HTMLElement>(
    elements: T[],
    id: string
): boolean {
    return elements.some(element => element.id === id);
}

export function createInjectHTMLElementOnBodyWithId<T extends HTMLElement>(type: string, id: string): T {

    const body = document.body;

    if (!body) {
        throw new Error("Body element not found in the document.");
    }

    if (IsEmptyString(id)) {
        throw new Error("Id Specify is empty.");
    }

    if (IsEmptyString(type)) {
        throw new Error("HTMLElement Type Specify is empty.");
    }

    const elementToInject = document.createElement(type) as T;

    // Check if the created element is compatible with T
    if (!(elementToInject instanceof HTMLElement)) {
        throw new Error(`The created element is not of the expected type.`);
    }

    elementToInject.id = id;

    // body.appendChild(elementToInject);
    body.insertBefore(elementToInject, body.firstChild);

    // return getHTMLElementsInBodyByType<T>(type);
    return elementToInject;
}

export function insertContentOnHTMLElement( element: HTMLElement | null, content: string ): HTMLElement | null {

    if (IsEmptyString(content)) {
        throw new Error("Content is empty.");
    }

    if ( element === null ) {
        return element;
    }

    // element.innerHTML = content;
    element.insertAdjacentHTML("afterbegin", content);

    return element;
}


/*
    Think this solution to a Future
*/

// type HTMLElementTagNameMap = {
//     div: HTMLDivElement;
//     span: HTMLSpanElement;
//     button: HTMLButtonElement;
//     // Add more as needed
// };

// export function createInjectHTMLElementOnBodyWithId<K extends keyof HTMLElementTagNameMap>(
//     type: K,
//     id: string
// ): HTMLElementTagNameMap[K][] {
//     const body = document.body;

//     if (!body) {
//         throw new Error("Body element not found in the document.");
//     }

//     if (IsEmptyString(id)) {
//         throw new Error("Id specified is empty.");
//     }

//     if (IsEmptyString(type)) {
//         throw new Error("HTMLElement type specified is empty.");
//     }

//     // Use the specific type to create the element
//     const elementToInject = document.createElement(type);
//     (elementToInject as HTMLElementTagNameMap[K]).id = id;

//     // Append the element to the body
//     body.appendChild(elementToInject);

//     // Return all elements of the specified type
//     return getHTMLElementsInBodyByType<HTMLElementTagNameMap[K]>(type);
// }