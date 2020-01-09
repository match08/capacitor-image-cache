import { Plugins } from '@capacitor/core';
const { ImageCachePlugin } = Plugins;
export class ImageCache {
    clear() {
        return ImageCachePlugin.clear();
    }
    clearItem(options) {
        return ImageCachePlugin.clearItem(options);
    }
    hasItem(options) {
        return ImageCachePlugin.hasItem(options);
    }
    get(options) {
        return ImageCachePlugin.get(options);
    }
    saveImage(options) {
        return ImageCachePlugin.saveImage(options);
    }
}
//# sourceMappingURL=plugin.js.map