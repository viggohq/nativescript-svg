import { View, Property } from "tns-core-modules/ui/core/view";
import * as definition from "./svg";
export declare const srcProperty: Property<SVGImage, boolean>;
export declare const imageSourceProperty: Property<SVGImage, definition.ImageSourceSVG>;
export declare const isLoadingProperty: Property<SVGImage, boolean>;
export declare const loadModeProperty: Property<SVGImage, string>;
export declare class SVGImage extends View implements definition.SVGImage {
    src: any;
    imageSource: definition.ImageSourceSVG;
    isLoading: boolean;
    loadMode: "sync" | "async";
    constructor(options?: definition.Options);
    _createImageSourceFromSrc(): void;
}
export declare function fromResource(name: string): definition.ImageSourceSVG;
export declare function fromFile(path: string): definition.ImageSourceSVG;
export declare function fromData(data: any): definition.ImageSourceSVG;
export declare function fromBase64(source: string): definition.ImageSourceSVG;
export declare function fromNativeSource(source: any): definition.ImageSourceSVG;
export declare function fromUrl(url: string): definition.ImageSourceSVG;
export declare function fromFileOrResource(path: string): definition.ImageSourceSVG;
export declare function isFileOrResourcePath(path: string): boolean;
