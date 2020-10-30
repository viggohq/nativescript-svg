[![npm](https://img.shields.io/npm/v/@teammaestro/nativescript-svg.svg)](https://www.npmjs.com/package/@teammaestro/nativescript-svg)
[![npm](https://img.shields.io/npm/dt/@teammaestro/nativescript-svg.svg?label=npm%20downloads)](https://www.npmjs.com/package/@teammaestro/nativescript-svg)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# NativeScript SVG

## Install

`tns plugin add @viggohq/nativescript-svg`

## Usage

You use it in the same way you use Image source.

| Android Library                                               | iOS CocoaPod                                         |
| ------------------------------------------------------------- | ---------------------------------------------------- |
| [pents90 svg-android](https://github.com/pents90/svg-android) | [SVGKit by SVGKit](https://github.com/SVGKit/SVGKit) |

** there are limitations: ** - saveToFile ins't working

### Quick start

```js
var ImageSourceSVGModule = require('@viggohq/nativescript-svg');
var svgFile = new ImageSourceSVGModule.ImageSourceSVG();

var loaded = svgFile.fromResource('foxie');

var path = '//somepath/file.svg';
loaded = svgFile.loadFromFile(path);

var url = 'http://somepath/file.svg';
svgFile
  .fromUrl(url)
  .then(loaded => {
    console.log('object loaded');
  })
  .catch(e => {
    console.log('error');
  });
```

## API

##### ImageSourceSVGModule.fromResource(name: string): ImageSourceSVG

- Loads this instance from the specified resource name.

##### ImageSourceSVGModule.fromFile(path: string): ImageSourceSVG

- Creates a new ImageSourceSVG instance and loads it from the specified file.

##### ImageSourceSVGModule.fromData(data: any): ImageSourceSVG

- Creates a new ImageSourceSVG instance and loads it from the specified resource name.

##### ImageSourceSVGModule.fromBase64(source: string): ImageSourceSVG

- Creates a new ImageSourceSVG instance and loads it from the specified resource name.

##### ImageSourceSVGModule.fromBase64(source: string): ImageSourceSVG

- Creates a new ImageSourceSVG instance and loads it from the specified resource name.

##### ImageSourceSVGModule.fromUrl(url: string): Promise:ImageSourceSVG

- Downloads the image from the provided Url and creates a new ImageSourceSVG instance from it.

---

You can call every method in two ways, for example:

```
//from the svg file object
svgFile.loadFromResource(name: string): boolean  // synchronously
svgFile.fromResource(name: string): ImageSourceSVG //asynchronously
```

or

```
//from the svg module api
ImageSourceSVGModule.fromResource(name: string): ImageSourceSVG
```

Since ver 1.1 Implement a similar image tag to be used as for example:

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:svg="@viggohq/nativescript-svg" loaded="pageLoaded">
  <StackLayout>
    <!--svg image tag-->
    <svg:SVGImage src="~/image/nativescript.svg" height="100" />
    <svg:SVGImage src="https://media4.giphy.com/media/3uyIgVxP1qAjS/200.svg" height="200" />

    <!--normal image tag-->
    <Image src="~/images/logo.svg" stretch ="none" />
  </StackLayout>
</Page>
```

### Roadmap

ver 1.6 implement an SVGImage tag that can support svg tags.

```
<!-- this is more complicated to implement, pending to be implemented -->
    <svg:SVGImage width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
    </svg:SVGImage>
```

ver 1.5 Change api dependency from pents90/svg-android to Pixplicity/sharp

### Release note

v1.3.4 -- Angular 4 support, please check example code

v1.3.0 -- NS 3+ implementation and it will work with angular if you call registerElement before using it. Thanks to @tbozhikov

v1.1.4 -- Fix svg & demo

v1.1.3 -- Fix SVGImage for iOS - SVGKFastImageView issue#3

v1.1.0 -- Implemented a similar image tag to render svg images.

v1.0.11 -- Major fix for load library issue and demo include.

v1.0.9 -- load from URL on Android and IOS included.

v1.0.7 -- Fix svg.common override issue.

v1.0.5 -- fix for npm package lib not including the .js files.

v1.0.2 -- the base64 encondig on Android included - IOS pending.
