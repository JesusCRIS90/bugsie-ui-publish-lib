import {
    existHTMLElementWithIdInHTMLElementsArray,
    getHTMLElementsInBodyByType,
    createInjectHTMLElementOnBodyWithId,
    insertContentOnHTMLElement,
    getHTMLElementInBodyById
} from "./DOM_Tools"

import {
    IsEmptyString
} from "./StringsTools"


const ICONS_SPRITE_SHEET_ID = "icons-sprite-sheet";
const SVG_COLLECTION_ID = "svg-collection";
const DEFAULT_ICON_ID = "default-icon";

export function generateDefSpriteSheet(): string {

    return `
        <svg style="display: none;" id=${SVG_COLLECTION_ID}>
            ${generateDefaultSVGIcon()}
        </svg>
    `
}

export function generateDefaultSVGIcon(): string {

    return `
        <symbol id=${DEFAULT_ICON_ID} viewBox="0 0 24 24">
            ${getDefaultSVGIcon}
        </symbol>
    `
}

export function getDefaultSVGIcon(): string {
    return `
    <svg viewBox="0 0 32 32">
        <path
            d="M30,3.4141,28.5859,2,2,28.5859,3.4141,30l2-2H26a2.0027,2.0027,0,0,0,2-2V5.4141ZM26,26H7.4141l7.7929-7.793,2.3788,2.3787a2,2,0,0,0,2.8284,0L22,19l4,3.9973Zm0-5.8318-2.5858-2.5859a2,2,0,0,0-2.8284,0L19,19.1682l-2.377-2.3771L26,7.4141Z" />
        <path
            d="M6,22V19l5-4.9966,1.3733,1.3733,1.4159-1.416-1.375-1.375a2,2,0,0,0-2.8284,0L6,16.1716V6H22V4H6A2.002,2.002,0,0,0,4,6V22Z" />
    </svg>
    `
}

export function checkSvgRefNameExist(svgRefName: string): boolean {

    // 1- Check if exist an Icons SpritesSheet
    if (!existIconSpritesSheet()) {
        // If does no exist an Icons SpriteSheet, we create it first
        createDefaultSpriteSheet();

        // If does not exist an Icons SpriteSheet, it is sure that the svgRefName does not exist
        return false;
    }

    // 2- Check if exist a SVGCollection Container
    if (!existSVGContainer()) {
        createInjectSVGContainer();
        return false;
    }

    // 3- Check if exist a SVG Default Icon
    if (!existDefaultIcon()) {
        createInjectDefaultIcon();
        return false;
    }

    // 4- Check if string icon ref is empty
    if (IsEmptyString(svgRefName)) {
        return false;
    }

    // 5- Check if exist that svg icon on the Icons SpriteSheet
    if (!existSvgOnIconsSpriteSheet(svgRefName)) {
        return false;
    }

    return true;
}

export function existIconSpritesSheet(): boolean {

    return existHTMLElementWithIdInHTMLElementsArray<HTMLDivElement>(
        getHTMLElementsInBodyByType<HTMLDivElement>("div"),
        ICONS_SPRITE_SHEET_ID);
}

// ---------------
export function existSVGContainer(): boolean {
    return getHTMLElementInBodyById<HTMLElement>(SVG_COLLECTION_ID) === null ? false : true;
}

export function createInjectSVGContainer(): HTMLElement | null {

    const spriteSheetDiv = getHTMLElementInBodyById<HTMLElement>(ICONS_SPRITE_SHEET_ID);

    if (spriteSheetDiv === null) {
        throw new Error("spriteSheetDiv does not exist");
    }

    return insertContentOnHTMLElement(spriteSheetDiv, generateDefSpriteSheet());
}

export function existDefaultIcon(): boolean {

    return existSvgOnIconsSpriteSheet(DEFAULT_ICON_ID)
}

export function createInjectDefaultIcon(): HTMLElement | null {

    const svgCollectionContainer = getHTMLElementInBodyById<HTMLElement>(SVG_COLLECTION_ID);

    if (svgCollectionContainer === null) {
        throw new Error("svgCollectionContainer does not exist");
    }

    return insertContentOnHTMLElement(svgCollectionContainer, generateDefaultSVGIcon());
}

// ---------------
export function existSvgOnIconsSpriteSheet(svgRefName: string): boolean {

    const spriteSheetDiv = getHTMLElementInBodyById<HTMLDivElement>(ICONS_SPRITE_SHEET_ID);

    if (spriteSheetDiv === null) return false;

    if (getHTMLSymbol(spriteSheetDiv, svgRefName) === null) return false;

    return true;
}

export function getHTMLSymbol(rootDiv: HTMLDivElement, id: string): HTMLElement | null {
    return rootDiv.querySelector(`#${id}`);
}

function createDefaultSpriteSheet(): HTMLElement | null {

    // console.log("Injecting Icons SpriteSheet")
    return insertContentOnHTMLElement(
        createInjectHTMLElementOnBodyWithId<HTMLDivElement>("div", ICONS_SPRITE_SHEET_ID),
        generateDefSpriteSheet()
    );
}