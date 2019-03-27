/// <reference path="node_modules/tns-platform-declarations/android.d.ts" />
import svg = require('./svg');
import common = require('./svg.common');
export declare class ImageSourceSVG implements svg.ImageSourceSVG {
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
export declare class SVGImage extends common.SVGImage {
    constructor();
    createNativeView(): any;
    _setNativeImage(nativeImage: any): void;
}
