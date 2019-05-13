/// <reference path="node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="typings/SVGKit.d.ts" />
import * as common from './svg.common';
export declare class ImageSourceSVG {
    private nativeView;
    loadFromResource(name: string): boolean;
    fromResource(name: string): Promise<boolean>;
    loadFromFile(path: string): boolean;
    fromFile(path: string): Promise<boolean>;
    loadFromData(data: any): boolean;
    fromData(data: any): Promise<boolean>;
    loadFromBase64(source: string): boolean;
    fromBase64(source: string): Promise<boolean>;
    private loadFromUrl;
    fromUrl(url: string): Promise<boolean>;
    setNativeSource(source: any): boolean;
    saveToFile(path: string): boolean;
    toBase64String(format: string): string;
    readonly height: number;
    readonly width: number;
}
export declare class SVGImage extends common.SVGImage {
    private _imageSourceAffectsLayout;
    constructor();
    _setNativeImage(nativeImage: any): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
}
