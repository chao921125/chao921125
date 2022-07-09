(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-post-process", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-post-process"] = factory(require("babylonjs"));
	else
		root["POSTPROCESSES"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_core_Misc_decorators__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../node_modules/tslib/tslib.es6.js":
/*!***************************************************!*\
  !*** ../../../../node_modules/tslib/tslib.es6.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "../../../lts/postProcesses/dist/digitalRain/digitalRainPostProcess.js":
/*!*****************************************************************************!*\
  !*** ../../../lts/postProcesses/dist/digitalRain/digitalRainPostProcess.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitalRainFontTexture": () => (/* binding */ DigitalRainFontTexture),
/* harmony export */   "DigitalRainPostProcess": () => (/* binding */ DigitalRainPostProcess)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Engines/Extensions/engine.dynamicTexture */ "core/Misc/decorators");
/* harmony import */ var core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _digitalrain_fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./digitalrain.fragment */ "../../../lts/postProcesses/dist/digitalRain/digitalrain.fragment.js");








/**
 * DigitalRainFontTexture is the helper class used to easily create your digital rain font texture.
 *
 * It basically takes care rendering the font front the given font size to a texture.
 * This is used later on in the postprocess.
 */
var DigitalRainFontTexture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(DigitalRainFontTexture, _super);
    /**
     * Create a new instance of the Digital Rain FontTexture class
     * @param name the name of the texture
     * @param font the font to use, use the W3C CSS notation
     * @param text the caracter set to use in the rendering.
     * @param scene the scene that owns the texture
     */
    function DigitalRainFontTexture(name, font, text, scene) {
        if (scene === void 0) { scene = null; }
        var _this = _super.call(this, scene) || this;
        scene = _this.getScene();
        if (!scene) {
            return _this;
        }
        _this.name = name;
        _this._text == text;
        _this._font == font;
        _this.wrapU = core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Texture.CLAMP_ADDRESSMODE;
        _this.wrapV = core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Texture.CLAMP_ADDRESSMODE;
        // Get the font specific info.
        var maxCharHeight = _this._getFontHeight(font);
        var maxCharWidth = _this._getFontWidth(font);
        _this._charSize = Math.max(maxCharHeight.height, maxCharWidth);
        // This is an approximate size, but should always be able to fit at least the maxCharCount.
        var textureWidth = _this._charSize;
        var textureHeight = Math.ceil(_this._charSize * text.length);
        // Create the texture that will store the font characters.
        _this._texture = scene.getEngine().createDynamicTexture(textureWidth, textureHeight, false, core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Texture.NEAREST_SAMPLINGMODE);
        //scene.getEngine().setclamp
        var textureSize = _this.getSize();
        // Create a canvas with the final size: the one matching the texture.
        var canvas = document.createElement("canvas");
        canvas.width = textureSize.width;
        canvas.height = textureSize.height;
        var context = canvas.getContext("2d");
        context.textBaseline = "top";
        context.font = font;
        context.fillStyle = "white";
        context.imageSmoothingEnabled = false;
        // Sets the text in the texture.
        for (var i = 0; i < text.length; i++) {
            context.fillText(text[i], 0, i * _this._charSize - maxCharHeight.offset);
        }
        // Flush the text in the dynamic texture.
        scene.getEngine().updateDynamicTexture(_this._texture, canvas, false, true);
        return _this;
    }
    Object.defineProperty(DigitalRainFontTexture.prototype, "charSize", {
        /**
         * Gets the size of one char in the texture (each char fits in size * size space in the texture).
         */
        get: function () {
            return this._charSize;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the max char width of a font.
     * @param font the font to use, use the W3C CSS notation
     * @return the max char width
     */
    DigitalRainFontTexture.prototype._getFontWidth = function (font) {
        var fontDraw = document.createElement("canvas");
        var ctx = fontDraw.getContext("2d");
        ctx.fillStyle = "white";
        ctx.font = font;
        return ctx.measureText("W").width;
    };
    // More info here: https://videlais.com/2014/03/16/the-many-and-varied-problems-with-measuring-font-height-for-html5-canvas/
    /**
     * Gets the max char height of a font.
     * @param font the font to use, use the W3C CSS notation
     * @return the max char height
     */
    DigitalRainFontTexture.prototype._getFontHeight = function (font) {
        var fontDraw = document.createElement("canvas");
        var ctx = fontDraw.getContext("2d");
        ctx.fillRect(0, 0, fontDraw.width, fontDraw.height);
        ctx.textBaseline = "top";
        ctx.fillStyle = "white";
        ctx.font = font;
        ctx.fillText("jH|", 0, 0);
        var pixels = ctx.getImageData(0, 0, fontDraw.width, fontDraw.height).data;
        var start = -1;
        var end = -1;
        for (var row = 0; row < fontDraw.height; row++) {
            for (var column = 0; column < fontDraw.width; column++) {
                var index = (row * fontDraw.width + column) * 4;
                if (pixels[index] === 0) {
                    if (column === fontDraw.width - 1 && start !== -1) {
                        end = row;
                        row = fontDraw.height;
                        break;
                    }
                    continue;
                }
                else {
                    if (start === -1) {
                        start = row;
                    }
                    break;
                }
            }
        }
        return { height: end - start + 1, offset: start - 1 };
    };
    /**
     * Clones the current DigitalRainFontTexture.
     * @return the clone of the texture.
     */
    DigitalRainFontTexture.prototype.clone = function () {
        return new DigitalRainFontTexture(this.name, this._font, this._text, this.getScene());
    };
    /**
     * Parses a json object representing the texture and returns an instance of it.
     * @param source the source JSON representation
     * @param scene the scene to create the texture for
     * @return the parsed texture
     */
    DigitalRainFontTexture.Parse = function (source, scene) {
        var texture = core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Parse(function () { return new DigitalRainFontTexture(source.name, source.font, source.text, scene); }, source, scene, null);
        return texture;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)("font")
    ], DigitalRainFontTexture.prototype, "_font", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)("text")
    ], DigitalRainFontTexture.prototype, "_text", void 0);
    return DigitalRainFontTexture;
}(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.BaseTexture));

/**
 * DigitalRainPostProcess helps rendering everithing in digital rain.
 *
 * Simmply add it to your scene and let the nerd that lives in you have fun.
 * Example usage: var pp = new DigitalRainPostProcess("digitalRain", "20px Monospace", camera);
 */
var DigitalRainPostProcess = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(DigitalRainPostProcess, _super);
    /**
     * Instantiates a new Digital Rain Post Process.
     * @param name the name to give to the postprocess
     * @camera the camera to apply the post process to.
     * @param camera
     * @param options can either be the font name or an option object following the IDigitalRainPostProcessOptions format
     */
    function DigitalRainPostProcess(name, camera, options) {
        var _this = _super.call(this, name, "digitalrain", ["digitalRainFontInfos", "digitalRainOptions", "cosTimeZeroOne", "matrixSpeed"], ["digitalRainFont"], {
            width: camera.getEngine().getRenderWidth(),
            height: camera.getEngine().getRenderHeight(),
        }, camera, core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Texture.TRILINEAR_SAMPLINGMODE, camera.getEngine(), true) || this;
        /**
         * This defines the amount you want to mix the "tile" or caracter space colored in the digital rain.
         * This number is defined between 0 and 1;
         */
        _this.mixToTile = 0;
        /**
         * This defines the amount you want to mix the normal rendering pass in the digital rain.
         * This number is defined between 0 and 1;
         */
        _this.mixToNormal = 0;
        /**
         * Speed of the effect
         */
        _this.speed = 0.003;
        // Default values.
        var font = "15px Monospace";
        var characterSet = "古池や蛙飛び込む水の音ふるいけやかわずとびこむみずのおと初しぐれ猿も小蓑をほしげ也はつしぐれさるもこみのをほしげなり江戸の雨何石呑んだ時鳥えどのあめなんごくのんだほととぎす";
        // Use options.
        if (options) {
            if (typeof options === "string") {
                font = options;
            }
            else {
                font = options.font || font;
                _this.mixToTile = options.mixToTile || _this.mixToTile;
                _this.mixToNormal = options.mixToNormal || _this.mixToNormal;
            }
        }
        _this._digitalRainFontTexture = new DigitalRainFontTexture(name, font, characterSet, camera.getScene());
        var textureSize = _this._digitalRainFontTexture.getSize();
        var alpha = 0.0;
        var cosTimeZeroOne = 0.0;
        var matrix = core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromValues(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
        _this.onApply = function (effect) {
            effect.setTexture("digitalRainFont", _this._digitalRainFontTexture);
            effect.setFloat4("digitalRainFontInfos", _this._digitalRainFontTexture.charSize, characterSet.length, textureSize.width, textureSize.height);
            effect.setFloat4("digitalRainOptions", _this.width, _this.height, _this.mixToNormal, _this.mixToTile);
            effect.setMatrix("matrixSpeed", matrix);
            alpha += _this.speed;
            cosTimeZeroOne = alpha;
            effect.setFloat("cosTimeZeroOne", cosTimeZeroOne);
        };
        return _this;
    }
    return DigitalRainPostProcess;
}(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.PostProcess));



/***/ }),

/***/ "../../../lts/postProcesses/dist/digitalRain/digitalrain.fragment.js":
/*!***************************************************************************!*\
  !*** ../../../lts/postProcesses/dist/digitalRain/digitalrain.fragment.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "digitalrainPixelShader": () => (/* binding */ digitalrainPixelShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Engines/shaderStore */ "core/Misc/decorators");
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "digitalrainPixelShader";
var shader = "varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D digitalRainFont;uniform vec4 digitalRainFontInfos;uniform vec4 digitalRainOptions;uniform mat4 matrixSpeed;uniform float cosTimeZeroOne;float getLuminance(vec3 color)\n{return clamp(dot(color,vec3(0.2126,0.7152,0.0722)),0.,1.);}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{float caracterSize=digitalRainFontInfos.x;float numChar=digitalRainFontInfos.y-1.0;float fontx=digitalRainFontInfos.z;float fonty=digitalRainFontInfos.w;float screenx=digitalRainOptions.x;float screeny=digitalRainOptions.y;float ratio=screeny/fonty;float columnx=float(floor((gl_FragCoord.x)/caracterSize));float tileX=float(floor((gl_FragCoord.x)/caracterSize))*caracterSize/screenx;float tileY=float(floor((gl_FragCoord.y)/caracterSize))*caracterSize/screeny;vec2 tileUV=vec2(tileX,tileY);vec4 tileColor=texture2D(textureSampler,tileUV);vec4 baseColor=texture2D(textureSampler,vUV);float tileLuminance=getLuminance(tileColor.rgb);int st=int(mod(columnx,4.0));float speed=cosTimeZeroOne*(sin(tileX*314.5)*0.5+0.6); \nfloat x=float(mod(gl_FragCoord.x,caracterSize))/fontx;float y=float(mod(speed+gl_FragCoord.y/screeny,1.0));y*=ratio;vec4 finalColor= texture2D(digitalRainFont,vec2(x,1.0-y));vec3 high=finalColor.rgb*(vec3(1.2,1.2,1.2)*pow(1.0-y,30.0));finalColor.rgb*=vec3(pow(tileLuminance,5.0),pow(tileLuminance,1.5),pow(tileLuminance,3.0));finalColor.rgb+=high;finalColor.rgb=clamp(finalColor.rgb,0.,1.);finalColor.a=1.0;finalColor= mix(finalColor,tileColor,digitalRainOptions.w);finalColor= mix(finalColor,baseColor,digitalRainOptions.z);gl_FragColor=finalColor;}";
// Sideeffect
core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
/** @hidden */
var digitalrainPixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../lts/postProcesses/dist/digitalRain/index.js":
/*!************************************************************!*\
  !*** ../../../lts/postProcesses/dist/digitalRain/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitalRainFontTexture": () => (/* reexport safe */ _digitalRainPostProcess__WEBPACK_IMPORTED_MODULE_0__.DigitalRainFontTexture),
/* harmony export */   "DigitalRainPostProcess": () => (/* reexport safe */ _digitalRainPostProcess__WEBPACK_IMPORTED_MODULE_0__.DigitalRainPostProcess)
/* harmony export */ });
/* harmony import */ var _digitalRainPostProcess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digitalRainPostProcess */ "../../../lts/postProcesses/dist/digitalRain/digitalRainPostProcess.js");



/***/ }),

/***/ "../../../lts/postProcesses/dist/legacy/legacy-digitalRain.js":
/*!********************************************************************!*\
  !*** ../../../lts/postProcesses/dist/legacy/legacy-digitalRain.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitalRainFontTexture": () => (/* reexport safe */ _digitalRain_index__WEBPACK_IMPORTED_MODULE_0__.DigitalRainFontTexture),
/* harmony export */   "DigitalRainPostProcess": () => (/* reexport safe */ _digitalRain_index__WEBPACK_IMPORTED_MODULE_0__.DigitalRainPostProcess)
/* harmony export */ });
/* harmony import */ var _digitalRain_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../digitalRain/index */ "../../../lts/postProcesses/dist/digitalRain/index.js");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var key in _digitalRain_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = _digitalRain_index__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}



/***/ }),

/***/ "core/Misc/decorators":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_Misc_decorators__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/digitalRain.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "postProcess": () => (/* reexport module object */ post_processes_legacy_legacy_digitalRain__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var post_processes_legacy_legacy_digitalRain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! post-processes/legacy/legacy-digitalRain */ "../../../lts/postProcesses/dist/legacy/legacy-digitalRain.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (post_processes_legacy_legacy_digitalRain__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=babylon.digitalRainPostProcess.js.map