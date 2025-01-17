export function checkSvgRefNameExist( svgRefName:string ): boolean {
    if( svgRefName.length === 0 ) return false;
    if (!document.querySelector(`.icons-spritesheet symbol#${svgRefName}`)) {
        return false;
    }
    return true;
}


