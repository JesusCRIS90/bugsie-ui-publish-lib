import { generateDefaultSpriteSheet } from "./generateDefaultSpriteSheet"

export function injectDefaultSpriteSheet(): boolean {
    
    if (!document.querySelector('.icons-spritesheet')) {
        const div = document.createElement('div');
        div.className = 'icons-spritesheet';
        div.innerHTML = generateDefaultSpriteSheet();
        document.body.appendChild(div);
        return true;
    }

    return false;
}