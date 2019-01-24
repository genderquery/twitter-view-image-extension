'use strict';

const menuId = 'view-image';

browser.runtime.onMessage.addListener((message) => {
    if (message.name === 'mousedown') {
        browser.contextMenus.create({
            id: menuId,
            title: browser.i18n.getMessage('menuItemViewImage'),
            contexts: ['all']
        });
        browser.contextMenus.onClicked.addListener(function onClicked() {
            browser.contextMenus.onClicked.removeListener(onClicked);
            browser.tabs.create({
                'url': message.url
            });
        });
    } else { // mouseup
        browser.contextMenus.remove(menuId);
    }
});