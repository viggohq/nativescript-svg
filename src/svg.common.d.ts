import { View, Property } from 'tns-core-modules/ui/core/view';
export declare class ImageSourceSVG {
    private nativeView;
    loadFromResource(name: string): boolean;
    fromResource(name: string): Promise<boolean>;
    loadFromFile(path: string): boolean;
    fromFile(path: string): Promise<boolean>;
    loadFromData(data: any): boolean;
    fromData(data: any): Promise<boolean>;
    loadFromBase64(source: string): boolean;
    fromBase64(data: any): Promise<boolean>;
    fromUrl(url: string): Promise<boolean>;
    setNativeSource(source: any): boolean;
    saveToFile(path: string): boolean;
    toBase64String(format: string): string;
    readonly height: number;
    readonly width: number;
}
export declare const srcProperty: Property<SVGImage, boolean>;
export declare const imageSourceProperty: Property<SVGImage, ImageSourceSVG>;
export declare const isLoadingProperty: Property<SVGImage, boolean>;
export declare const loadModeProperty: Property<SVGImage, string>;
export declare class SVGImage extends View implements SVGImage {
    src: any;
    imageSource: ImageSourceSVG;
    isLoading: boolean;
    loadMode: 'sync' | 'async';
    constructor();
    _createImageSourceFromSrc(): void;
}
export declare function fromResource(name: string): ImageSourceSVG;
export declare function fromFile(path: string): ImageSourceSVG;
export declare function fromData(data: any): ImageSourceSVG;
export declare function fromBase64(source: string): ImageSourceSVG;
export declare function fromNativeSource(source: any): ImageSourceSVG;
export declare function fromFileOrResource(path: string): ImageSourceSVG;
export declare function isFileOrResourcePath(path: string): boolean;
