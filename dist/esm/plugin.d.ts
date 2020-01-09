import { IImageCache } from './definitions';
export declare class ImageCache implements IImageCache {
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
