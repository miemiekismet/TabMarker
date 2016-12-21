/**
 * @Inject into each tab.
 */

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
      var new_icon = 'http://katrina.im/res/icon.gif';
      var el, icon, link;
      el = document.querySelectorAll('head link[rel*="icon"]');
      // Remove existing favicons
      Array.prototype.forEach.call(el, function (node) {
          node.parentNode.removeChild(node);
      });

      // Set preconfigured or custom (http|https|data) icon
      icon = (/^(https?|data):/.test(new_icon) === true) ? new_icon : chrome.extension.getURL('/img/' + new_icon);
      // Create new favicon
      link      = document.createElement('link');
      link.type = 'image/x-icon';
      link.rel  = 'icon';
      link.href = icon;
      document.getElementsByTagName('head')[0].appendChild(link);
});
