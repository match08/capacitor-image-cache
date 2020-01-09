import { WebPlugin } from '@capacitor/core';
import { IImageCache } from './definitions';
export declare class ImageCachePluginWeb extends WebPlugin implements IImageCache {
    constructor();
    clear(): Promise<{
        value: boolean;
    }>;
    clearItem(options: {
        src: string;
    }): Promise<{
        value: boolean;
    }>;
    hasItem(options: {
        src: string;
    }): Promise<{
        value: boolean;
    }>;
    get(options: {
        src: string;
        overwrite?: boolean;
    }): Promise<{
        value: string;
    }>;
    saveImage(options: {
        src: string;
    }): Promise<void>;
}
declare const ImageCachePlugin: ImageCachePluginWeb;
export { ImageCachePlugin };
