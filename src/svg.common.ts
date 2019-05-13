import { View, Property } from 'tns-core-modules/ui/core/view';
import * as utils from 'tns-core-modules/utils/utils';
import * as types from 'tns-core-modules/utils/types';
import { fromUrl } from 'tns-core-modules/image-source/image-source';

const SRC = 'src';
const IMAGE_SOURCE = 'imageSource';
const LOAD_MODE = 'loadMode';
const SYNC = 'sync';
const ASYNC = 'async';
const ISLOADING = 'isLoading';

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

export const srcProperty = new Property<SVGImage, boolean>({
  name: SRC,
  defaultValue: undefined,
  valueChanged: (target, oldValue, newValue) =>
    target._createImageSourceFromSrc()
});
export const imageSourceProperty = new Property<SVGImage, ImageSourceSVG>({
  name: IMAGE_SOURCE,
  defaultValue: undefined
});
export const isLoadingProperty = new Property<SVGImage, boolean>({
  name: ISLOADING,
  defaultValue: false
});
export const loadModeProperty = new Property<SVGImage, string>({
  name: LOAD_MODE,
  defaultValue: SYNC
});

export class SVGImage extends View implements SVGImage {
  src: any;
  imageSource: ImageSourceSVG;
  isLoading: boolean;
  loadMode: 'sync' | 'async';

  constructor() {
    super();
  }

  /**
   * @internal
   */
  _createImageSourceFromSrc(): void {
    let value = this.src;
    if (types.isString(value)) {
      value = value.trim();
      this.imageSource = null;
      this['_url'] = value;

      // this._setValue(SVGImage.isLoadingProperty, true);
      this.isLoading = true;

      const source = new ImageSourceSVG();
      const imageLoaded = () => {
        const currentValue = this.src;
        if (!types.isString(this.src) || value !== currentValue.trim()) {
          return;
        }
        this.imageSource = source;
        // imageSourceProperty.nativeValueChange(this, source);
        // this._setValue(SVGImage.isLoadingProperty, false);
        this.isLoading = false;
      };
      // WRONG IMplementation, it can't load data uri, just base xml encode
      if (utils.isDataURI(value)) {
        const base64Data = value.split(',')[1];
        if (types.isDefined(base64Data)) {
          if (this.loadMode === SYNC) {
            source.loadFromBase64(base64Data);
            imageLoaded();
          } else if (this.loadMode === ASYNC) {
            source.fromBase64(base64Data).then(imageLoaded);
          }
        }
      } else if (utils.isFileOrResourcePath(value)) {
        if (value.indexOf(utils.RESOURCE_PREFIX) === 0) {
          const resPath = value.substr(utils.RESOURCE_PREFIX.length);
          if (this.loadMode === SYNC) {
            source.loadFromResource(resPath);
            imageLoaded();
          } else if (this.loadMode === ASYNC) {
            this.imageSource = null;
            source.fromResource(resPath).then(imageLoaded);
          }
        } else {
          if (this.loadMode === SYNC) {
            source.loadFromFile(value);
            imageLoaded();
          } else if (this.loadMode === ASYNC) {
            this.imageSource = null;
            source.fromFile(value).then(imageLoaded);
          }
        }
      } else {
        this.imageSource = null;
        (<any>fromUrl)(value).then(r => {
          if (this['_url'] === value) {
            this.imageSource = r;
            // this._setValue(SVGImage.isLoadingProperty, false);
            this.isLoading = false;
          }
        });
      }
    } else if (value instanceof ImageSourceSVG) {
      // Support binding the imageSource trough the src property
      this.imageSource = value;
      // this._setValue(SVGImage.isLoadingProperty, false);
      this.isLoading = false;
    } else {
      this.imageSource = fromNativeSource(value);
      // this._setValue(SVGImage.isLoadingProperty, false);
      this.isLoading = false;
    }
  }
}

export function fromResource(name: string): ImageSourceSVG {
  const image = new ImageSourceSVG();
  return image.loadFromResource(name) ? image : null;
}

export function fromFile(path: string): ImageSourceSVG {
  const image = new ImageSourceSVG();
  return image.loadFromFile(path) ? image : null;
}

export function fromData(data: any): ImageSourceSVG {
  const image = new ImageSourceSVG();
  return image.loadFromData(data) ? image : null;
}

export function fromBase64(source: string): ImageSourceSVG {
  const image = new ImageSourceSVG();
  return image.loadFromBase64(source) ? image : null;
}

export function fromNativeSource(source: any): ImageSourceSVG {
  const image = new ImageSourceSVG();
  return image.setNativeSource(source) ? image : null;
}

// export function fromUrl(url: string): ImageSourceSVG {
//   const image = new ImageSourceSVG();
//   return image.fromUrl(url) ? image : null;
// }

export function fromFileOrResource(path: string): ImageSourceSVG {
  if (!isFileOrResourcePath(path)) {
    throw new Error('Path "' + '" is not a valid file or resource.');
  }

  if (path.indexOf(utils.RESOURCE_PREFIX) === 0) {
    return fromResource(path.substr(utils.RESOURCE_PREFIX.length));
  }
  return fromFile(path);
}

export function isFileOrResourcePath(path: string): boolean {
  return utils.isFileOrResourcePath(path);
}

srcProperty.register(SVGImage);
imageSourceProperty.register(SVGImage);
loadModeProperty.register(SVGImage);
isLoadingProperty.register(SVGImage);
