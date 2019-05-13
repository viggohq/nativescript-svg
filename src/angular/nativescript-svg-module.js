"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_svg_directives_1 = require("./nativescript-svg-directives");
var NativeScriptSvgModule = (function () {
    function NativeScriptSvgModule() {
    }
    NativeScriptSvgModule = __decorate([
        core_1.NgModule({
            declarations: [nativescript_svg_directives_1.DIRECTIVES],
            exports: [nativescript_svg_directives_1.DIRECTIVES]
        })
    ], NativeScriptSvgModule);
    return NativeScriptSvgModule;
}());
exports.NativeScriptSvgModule = NativeScriptSvgModule;
element_registry_1.registerElement('SVGImage', function () { return require('../').SVGImage; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlc2NyaXB0LXN2Zy1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXRpdmVzY3JpcHQtc3ZnLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwRUFBd0U7QUFFeEUsNkVBQTJEO0FBTTNEO0lBQUE7SUFBb0MsQ0FBQztJQUF4QixxQkFBcUI7UUFKakMsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsd0NBQVUsQ0FBQztZQUMxQixPQUFPLEVBQUUsQ0FBQyx3Q0FBVSxDQUFDO1NBQ3RCLENBQUM7T0FDVyxxQkFBcUIsQ0FBRztJQUFELDRCQUFDO0NBQUEsQUFBckMsSUFBcUM7QUFBeEIsc0RBQXFCO0FBRWxDLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUF2QixDQUF1QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5cbmltcG9ydCB7IERJUkVDVElWRVMgfSBmcm9tICcuL25hdGl2ZXNjcmlwdC1zdmctZGlyZWN0aXZlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RJUkVDVElWRVNdLFxuICBleHBvcnRzOiBbRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgTmF0aXZlU2NyaXB0U3ZnTW9kdWxlIHt9XG5cbnJlZ2lzdGVyRWxlbWVudCgnU1ZHSW1hZ2UnLCAoKSA9PiByZXF1aXJlKCcuLi8nKS5TVkdJbWFnZSk7XG4iXX0=