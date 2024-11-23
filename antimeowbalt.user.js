// ==UserScript==
// @name         Remove Specific Image on Cobalt.tools
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove image with specific URL on cobalt.tools
// @author       Telefauci
// @match        https://cobalt.tools/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const observer = new MutationObserver(() => {
        const image = document.querySelector('img[src*="meowbalt/smile.png"]');
        if (image) {
            image.remove();
        }
    });

    // find cat image
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // remove the image incase its already loaded
    const initialImage = document.querySelector('img[src*="meowbalt/smile.png"]');
    if (initialImage) {
        initialImage.remove();
    }
})();
