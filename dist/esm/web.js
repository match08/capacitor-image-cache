import { WebPlugin } from '@capacitor/core';
export class ImageCachePluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'ImageCachePlugin',
            platforms: ['web']
        });
    }
    clear() {
        return new Promise(() => { });
    }
    clearItem(options) {
        return new Promise(() => {
            console.log(options);
        });
    }
    hasItem(options) {
        return new Promise(() => {
            console.log(options);
        });
    }
    get(options) {
        return new Promise((resolve) => {
            // return default src for now
            resolve({ value: options.src });
        });
    }
    saveImage(options) {
        return new Promise((resolve) => {
            console.log(options);
            resolve();
        });
    }
}
const ImageCachePlugin = new ImageCachePluginWeb();
export { ImageCachePlugin };
//# sourceMappingURL=web.js.map