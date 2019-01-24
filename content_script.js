'use strict';

document.addEventListener('mousedown', (event) => {
    // if right-click on a div.GalleryNav element
    if (event.button === 2 && event.target.classList.contains('GalleryNav')) {
        const parent = event.target.parentElement;
        const img = parent.querySelector('.Gallery-media img.media-image');
        // image is inside a sibling div.Gallery-media
        if (img && img.src) {
            browser.runtime.sendMessage({
                'name': 'mousedown',
                'url': img.src
            });
        }
    }
}, true);

document.addEventListener('mouseup', (event) => {
    // right-click released
    if (event.button === 2) {
        browser.runtime.sendMessage({
            'name': 'mouseup'
        });
    }
}, true);