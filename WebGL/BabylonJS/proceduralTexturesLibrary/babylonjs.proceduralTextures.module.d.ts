
declare module "babylonjs-procedural-textures/brick/brickProceduralTexture" {
import { Color3 } from "babylonjs/Maths/math.color";
import { Texture } from "babylonjs/Materials/Textures/texture";
import { ProceduralTexture } from "babylonjs/Materials/Textures/Procedurals/proceduralTexture";
import { Scene } from "babylonjs/scene";
import { Nullable } from "babylonjs/types";
import "babylonjs-procedural-textures/brick/brickProceduralTexture.fragment";
export class BrickProceduralTexture extends ProceduralTexture {
    private _numberOfBricksHeight;
    private _numberOfBricksWidth;
    private _jointColor;
    private _brickColor;
    constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
    updateShaderUniforms(): void;
    get numberOfBricksHeight(): number;
    set numberOfBricksHeight(value: number);
    get numberOfBricksWidth(): number;
    set numberOfBricksWidth(value: number);
    get jointColor(): Color3;
    set jointColor(value: Color3);
    get brickColor(): Color3;
    set brickColor(value: Color3);
    /**
     * Serializes this brick procedural texture
     * @returns a serialized brick procedural texture object
     */
    serialize(): any;
    /**
     * Creates a Brick Procedural Texture from parsed brick procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing brick procedural texture information
     * @returns a parsed Brick Procedural Texture
     */
    static Parse(parsedTexture: any, scene: Scene, rootUrl: string): BrickProceduralTexture;
}

}
declare module "babylonjs-procedural-textures/brick/brickProceduralTexture.fragment" {
/** @internal */
export const brickProceduralTexturePixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-procedural-textures/brick/index" {
export * from "babylonjs-procedural-textures/brick/brickProceduralTexture";

}
declare module "babylonjs-procedural-textures/cloud/cloudProceduralTexture" {
import { Color4 } from "babylonjs/Maths/math.color";
import { Texture } from "babylonjs/Materials/Textures/texture";
import { ProceduralTexture } from "babylonjs/Materials/Textures/Procedurals/proceduralTexture";
import { Scene } from "babylonjs/scene";
import { Nullable } from "babylonjs/types";
import "babylonjs-procedural-textures/cloud/cloudProceduralTexture.fragment";
export class CloudProceduralTexture extends ProceduralTexture {
    private _skyColor;
    private _cloudColor;
    private _amplitude;
    private _numOctaves;
    constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
    updateShaderUniforms(): void;
    get skyColor(): Color4;
    set skyColor(value: Color4);
    get cloudColor(): Color4;
    set cloudColor(value: Color4);
    get amplitude(): number;
    set amplitude(value: number);
    get numOctaves(): number;
    set numOctaves(value: number);
    /**
     * Serializes this cloud procedural texture
     * @returns a serialized cloud procedural texture object
     */
    serialize(): any;
    /**
     * Creates a Cloud Procedural Texture from parsed cloud procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing cloud procedural texture information
     * @returns a parsed Cloud Procedural Texture
     */
    static Parse(parsedTexture: any, scene: Scene, rootUrl: string): CloudProceduralTexture;
}

}
declare module "babylonjs-procedural-textures/cloud/cloudProceduralTexture.fragment" {
/** @internal */
export const cloudProceduralTexturePixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-procedural-textures/cloud/index" {
export * from "babylonjs-procedural-textures/cloud/cloudProceduralTexture";

}
declare module "babylonjs-procedural-textures/fire/fireProceduralTexture" {
import { Vector2 } from "babylonjs/Maths/math.vector";
import { Color3 } from "babylonjs/Maths/math.color";
import { Texture } from "babylonjs/Materials/Textures/texture";
import { ProceduralTexture } from "babylonjs/Materials/Textures/Procedurals/proceduralTexture";
import { Scene } from "babylonjs/scene";
import { Nullable } from "babylonjs/types";
import "babylonjs-procedural-textures/fire/fireProceduralTexture.fragment";
export class FireProceduralTexture extends ProceduralTexture {
    private _time;
    private _speed;
    private _autoGenerateTime;
    private _fireColors;
    private _alphaThreshold;
    constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
    updateShaderUniforms(): void;
    render(useCameraPostProcess?: boolean): void;
    static get PurpleFireColors(): Color3[];
    static get GreenFireColors(): Color3[];
    static get RedFireColors(): Color3[];
    static get BlueFireColors(): Color3[];
    get autoGenerateTime(): boolean;
    set autoGenerateTime(value: boolean);
    get fireColors(): Color3[];
    set fireColors(value: Color3[]);
    get time(): number;
    set time(value: number);
    get speed(): Vector2;
    set speed(value: Vector2);
    get alphaThreshold(): number;
    set alphaThreshold(value: number);
    /**
     * Serializes this fire procedural texture
     * @returns a serialized fire procedural texture object
     */
    serialize(): any;
    /**
     * Creates a Fire Procedural Texture from parsed fire procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing fire procedural texture information
     * @returns a parsed Fire Procedural Texture
     */
    static Parse(parsedTexture: any, scene: Scene, rootUrl: string): FireProceduralTexture;
}

}
declare module "babylonjs-procedural-textures/fire/fireProceduralTexture.fragment" {
/** @internal */
export const fireProceduralTexturePixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-procedural-textures/fire/index" {
export * from "babylonjs-procedural-textures/fire/fireProceduralTexture";

}
declare module "babylonjs-procedural-textures/grass/grassProceduralTexture" {
import { Color3 } from "babylonjs/Maths/math.color";
import { Texture } from "babylonjs/Materials/Textures/texture";
import { ProceduralTexture } from "babylonjs/Materials/Textures/Procedurals/proceduralTexture";
import { Scene } from "babylonjs/scene";
import { Nullable } from "babylonjs/types";
import "babylonjs-procedural-textures/grass/grassProceduralTexture.fragment";
export class GrassProceduralTexture extends ProceduralTexture {
    private _grassColors;
    private _groundColor;
    constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
    updateShaderUniforms(): void;
    get grassColors(): Color3[];
    set grassColors(value: Color3[]);
    get groundColor(): Color3;
    set groundColor(value: Color3);
    /**
     * Serializes this grass procedural texture
     * @returns a serialized grass procedural texture object
     */
    serialize(): any;
    /**
     * Creates a Grass Procedural Texture from parsed grass procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing grass procedural texture information
     * @returns a parsed Grass Procedural Texture
     */
    static Parse(parsedTexture: any, scene: Scene, rootUrl: string): GrassProceduralTexture;
}

}
declare module "babylonjs-procedural-textures/grass/grassProceduralTexture.fragment" {
/** @internal */
export const grassProceduralTexturePixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-procedural-textures/grass/index" {
export * from "babylonjs-procedural-textures/grass/grassProceduralTexture";

}
declare module "babylonjs-procedural-textures/index" {
export * from "babylonjs-procedural-textures/brick/index";
export * from "babylonjs-procedural-textures/cloud/index";
export * from "babylonjs-procedural-textures/fire/index";
export * from "babylonjs-procedural-textures/grass/index";
export * from "babylonjs-procedural-textures/marble/index";
export * from "babylonjs-procedural-textures/normalMap/index";
export * from "babylonjs-procedural-textures/perlinNoise/index";
export * from "babylonjs-procedural-textures/road/index";
export * from "babylonjs-procedural-textures/starfield/index";
export * from "babylonjs-procedural-textures/wood/index";

}
declare module "babylonjs-procedural-textures/legacy/legacy-brick" {
export * from "babylonjs-procedural-textures/brick/index";

}
declare module "babylonjs-procedural-textures/legacy/legacy-cloud" {
export * from "babylonjs-procedural-textures/cloud/index";

}
declare module "babylonjs-procedural-textures/legacy/legacy-fire" {
export * from "babylonjs-procedural-textures/fire/index";

}
declare module "babylonjs-procedural-textures/legacy/legacy-grass" {
export * from "babylonjs-procedural-textures/grass/index";

}
declare module "babylonjs-procedural-textures/legacy/legacy-marble" {
export * from "babylonjs-procedural-textures/marble/index";

}
declare module "babylonjs-procedural-textures/legacy/legacy-normalMap" {
export * from "babylonjs-procedural-textures/normalMap/index";

}
declare module "babylonjs-procedural-textures/legacy/legacy-perlinNoise" {
export * from "babylonjs-procedural-textures/perlinNoise/index";

}
declare module "babylonjs-procedural-textures/legacy/legacy-road" {
export * from "babylonjs-procedural-textures/road/index";

}
declare module "babylonjs-procedural-textures/legacy/legacy-starfield" {
export * from "babylonjs-procedural-textures/starfield/index";

}
declare module "babylonjs-procedural-textures/legacy/legacy-wood" {
export * from "babylonjs-procedural-textures/wood/index";

}
declare module "babylonjs-procedural-textures/legacy/legacy" {
export * from "babylonjs-procedural-textures/index";

}
declare module "babylonjs-procedural-textures/marble/index" {
export * from "babylonjs-procedural-textures/marble/marbleProceduralTexture";

}
declare module "babylonjs-procedural-textures/marble/marbleProceduralTexture" {
import { Color3 } from "babylonjs/Maths/math.color";
import { Texture } from "babylonjs/Materials/Textures/texture";
import { ProceduralTexture } from "babylonjs/Materials/Textures/Procedurals/proceduralTexture";
import { Scene } from "babylonjs/scene";
import { Nullable } from "babylonjs/types";
import "babylonjs-procedural-textures/marble/marbleProceduralTexture.fragment";
export class MarbleProceduralTexture extends ProceduralTexture {
    private _numberOfTilesHeight;
    private _numberOfTilesWidth;
    private _amplitude;
    private _jointColor;
    constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
    updateShaderUniforms(): void;
    get numberOfTilesHeight(): number;
    set numberOfTilesHeight(value: number);
    get amplitude(): number;
    set amplitude(value: number);
    get numberOfTilesWidth(): number;
    set numberOfTilesWidth(value: number);
    get jointColor(): Color3;
    set jointColor(value: Color3);
    /**
     * Serializes this marble procedural texture
     * @returns a serialized marble procedural texture object
     */
    serialize(): any;
    /**
     * Creates a Marble Procedural Texture from parsed marble procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing marble procedural texture information
     * @returns a parsed Marble Procedural Texture
     */
    static Parse(parsedTexture: any, scene: Scene, rootUrl: string): MarbleProceduralTexture;
}

}
declare module "babylonjs-procedural-textures/marble/marbleProceduralTexture.fragment" {
/** @internal */
export const marbleProceduralTexturePixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-procedural-textures/normalMap/index" {
export * from "babylonjs-procedural-textures/normalMap/normalMapProceduralTexture";

}
declare module "babylonjs-procedural-textures/normalMap/normalMapProceduralTexture" {
import { Texture } from "babylonjs/Materials/Textures/texture";
import { ProceduralTexture } from "babylonjs/Materials/Textures/Procedurals/proceduralTexture";
import { Scene } from "babylonjs/scene";
import { Nullable } from "babylonjs/types";
import "babylonjs-procedural-textures/normalMap/normalMapProceduralTexture.fragment";
export class NormalMapProceduralTexture extends ProceduralTexture {
    private _baseTexture;
    constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
    updateShaderUniforms(): void;
    render(useCameraPostProcess?: boolean): void;
    resize(size: any, generateMipMaps: any): void;
    isReady(): boolean;
    get baseTexture(): Texture;
    set baseTexture(texture: Texture);
    /**
     * Serializes this normal map procedural texture
     * @returns a serialized normal map procedural texture object
     */
    serialize(): any;
    /**
     * Creates a Normal Map Procedural Texture from parsed normal map procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing normal map procedural texture information
     * @returns a parsed Normal Map Procedural Texture
     */
    static Parse(parsedTexture: any, scene: Scene, rootUrl: string): NormalMapProceduralTexture;
}

}
declare module "babylonjs-procedural-textures/normalMap/normalMapProceduralTexture.fragment" {
/** @internal */
export const normalMapProceduralTexturePixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-procedural-textures/perlinNoise/index" {
export * from "babylonjs-procedural-textures/perlinNoise/perlinNoiseProceduralTexture";

}
declare module "babylonjs-procedural-textures/perlinNoise/perlinNoiseProceduralTexture" {
import { Texture } from "babylonjs/Materials/Textures/texture";
import { ProceduralTexture } from "babylonjs/Materials/Textures/Procedurals/proceduralTexture";
import { Scene } from "babylonjs/scene";
import { Nullable } from "babylonjs/types";
import "babylonjs-procedural-textures/perlinNoise/perlinNoiseProceduralTexture.fragment";
export class PerlinNoiseProceduralTexture extends ProceduralTexture {
    time: number;
    timeScale: number;
    translationSpeed: number;
    private _currentTranslation;
    constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
    updateShaderUniforms(): void;
    render(useCameraPostProcess?: boolean): void;
    resize(size: any, generateMipMaps: any): void;
    /**
     * Serializes this perlin noise procedural texture
     * @returns a serialized perlin noise procedural texture object
     */
    serialize(): any;
    /**
     * Creates a Perlin Noise Procedural Texture from parsed perlin noise procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing perlin noise procedural texture information
     * @returns a parsed Perlin Noise Procedural Texture
     */
    static Parse(parsedTexture: any, scene: Scene, rootUrl: string): PerlinNoiseProceduralTexture;
}

}
declare module "babylonjs-procedural-textures/perlinNoise/perlinNoiseProceduralTexture.fragment" {
/** @internal */
export const perlinNoiseProceduralTexturePixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-procedural-textures/road/index" {
export * from "babylonjs-procedural-textures/road/roadProceduralTexture";

}
declare module "babylonjs-procedural-textures/road/roadProceduralTexture" {
import { Color3 } from "babylonjs/Maths/math.color";
import { Texture } from "babylonjs/Materials/Textures/texture";
import { ProceduralTexture } from "babylonjs/Materials/Textures/Procedurals/proceduralTexture";
import { Scene } from "babylonjs/scene";
import { Nullable } from "babylonjs/types";
import "babylonjs-procedural-textures/road/roadProceduralTexture.fragment";
export class RoadProceduralTexture extends ProceduralTexture {
    private _roadColor;
    constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
    updateShaderUniforms(): void;
    get roadColor(): Color3;
    set roadColor(value: Color3);
    /**
     * Serializes this road procedural texture
     * @returns a serialized road procedural texture object
     */
    serialize(): any;
    /**
     * Creates a Road Procedural Texture from parsed road procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing road procedural texture information
     * @returns a parsed Road Procedural Texture
     */
    static Parse(parsedTexture: any, scene: Scene, rootUrl: string): RoadProceduralTexture;
}

}
declare module "babylonjs-procedural-textures/road/roadProceduralTexture.fragment" {
/** @internal */
export const roadProceduralTexturePixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-procedural-textures/starfield/index" {
export * from "babylonjs-procedural-textures/starfield/starfieldProceduralTexture";

}
declare module "babylonjs-procedural-textures/starfield/starfieldProceduralTexture" {
import { Texture } from "babylonjs/Materials/Textures/texture";
import { ProceduralTexture } from "babylonjs/Materials/Textures/Procedurals/proceduralTexture";
import { Scene } from "babylonjs/scene";
import { Nullable } from "babylonjs/types";
import "babylonjs-procedural-textures/starfield/starfieldProceduralTexture.fragment";
export class StarfieldProceduralTexture extends ProceduralTexture {
    private _time;
    private _alpha;
    private _beta;
    private _zoom;
    private _formuparam;
    private _stepsize;
    private _tile;
    private _brightness;
    private _darkmatter;
    private _distfading;
    private _saturation;
    constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
    updateShaderUniforms(): void;
    get time(): number;
    set time(value: number);
    get alpha(): number;
    set alpha(value: number);
    get beta(): number;
    set beta(value: number);
    get formuparam(): number;
    set formuparam(value: number);
    get stepsize(): number;
    set stepsize(value: number);
    get zoom(): number;
    set zoom(value: number);
    get tile(): number;
    set tile(value: number);
    get brightness(): number;
    set brightness(value: number);
    get darkmatter(): number;
    set darkmatter(value: number);
    get distfading(): number;
    set distfading(value: number);
    get saturation(): number;
    set saturation(value: number);
    /**
     * Serializes this starfield procedural texture
     * @returns a serialized starfield procedural texture object
     */
    serialize(): any;
    /**
     * Creates a Starfield Procedural Texture from parsed startfield procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing startfield procedural texture information
     * @returns a parsed Starfield Procedural Texture
     */
    static Parse(parsedTexture: any, scene: Scene, rootUrl: string): StarfieldProceduralTexture;
}

}
declare module "babylonjs-procedural-textures/starfield/starfieldProceduralTexture.fragment" {
/** @internal */
export const starfieldProceduralTexturePixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-procedural-textures/wood/index" {
export * from "babylonjs-procedural-textures/wood/woodProceduralTexture";

}
declare module "babylonjs-procedural-textures/wood/woodProceduralTexture" {
import { Color3 } from "babylonjs/Maths/math.color";
import { Texture } from "babylonjs/Materials/Textures/texture";
import { ProceduralTexture } from "babylonjs/Materials/Textures/Procedurals/proceduralTexture";
import { Scene } from "babylonjs/scene";
import { Nullable } from "babylonjs/types";
import "babylonjs-procedural-textures/wood/woodProceduralTexture.fragment";
export class WoodProceduralTexture extends ProceduralTexture {
    private _ampScale;
    private _woodColor;
    constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
    updateShaderUniforms(): void;
    get ampScale(): number;
    set ampScale(value: number);
    get woodColor(): Color3;
    set woodColor(value: Color3);
    /**
     * Serializes this wood procedural texture
     * @returns a serialized wood procedural texture object
     */
    serialize(): any;
    /**
     * Creates a Wood Procedural Texture from parsed wood procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing wood procedural texture information
     * @returns a parsed Wood Procedural Texture
     */
    static Parse(parsedTexture: any, scene: Scene, rootUrl: string): WoodProceduralTexture;
}

}
declare module "babylonjs-procedural-textures/wood/woodProceduralTexture.fragment" {
/** @internal */
export const woodProceduralTexturePixelShader: {
    name: string;
    shader: string;
};

}

declare module "babylonjs-procedural-textures" {
    export * from "babylonjs-procedural-textures/legacy/legacy";
}


declare module BABYLON {
    export class BrickProceduralTexture extends ProceduralTexture {
        private _numberOfBricksHeight;
        private _numberOfBricksWidth;
        private _jointColor;
        private _brickColor;
        constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
        updateShaderUniforms(): void;
        get numberOfBricksHeight(): number;
        set numberOfBricksHeight(value: number);
        get numberOfBricksWidth(): number;
        set numberOfBricksWidth(value: number);
        get jointColor(): Color3;
        set jointColor(value: Color3);
        get brickColor(): Color3;
        set brickColor(value: Color3);
        /**
         * Serializes this brick procedural texture
         * @returns a serialized brick procedural texture object
         */
        serialize(): any;
        /**
         * Creates a Brick Procedural Texture from parsed brick procedural texture data
         * @param parsedTexture defines parsed texture data
         * @param scene defines the current scene
         * @param rootUrl defines the root URL containing brick procedural texture information
         * @returns a parsed Brick Procedural Texture
         */
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): BrickProceduralTexture;
    }


    /** @internal */
    export var brickProceduralTexturePixelShader: {
        name: string;
        shader: string;
    };




    export class CloudProceduralTexture extends ProceduralTexture {
        private _skyColor;
        private _cloudColor;
        private _amplitude;
        private _numOctaves;
        constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
        updateShaderUniforms(): void;
        get skyColor(): Color4;
        set skyColor(value: Color4);
        get cloudColor(): Color4;
        set cloudColor(value: Color4);
        get amplitude(): number;
        set amplitude(value: number);
        get numOctaves(): number;
        set numOctaves(value: number);
        /**
         * Serializes this cloud procedural texture
         * @returns a serialized cloud procedural texture object
         */
        serialize(): any;
        /**
         * Creates a Cloud Procedural Texture from parsed cloud procedural texture data
         * @param parsedTexture defines parsed texture data
         * @param scene defines the current scene
         * @param rootUrl defines the root URL containing cloud procedural texture information
         * @returns a parsed Cloud Procedural Texture
         */
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): CloudProceduralTexture;
    }


    /** @internal */
    export var cloudProceduralTexturePixelShader: {
        name: string;
        shader: string;
    };




    export class FireProceduralTexture extends ProceduralTexture {
        private _time;
        private _speed;
        private _autoGenerateTime;
        private _fireColors;
        private _alphaThreshold;
        constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
        updateShaderUniforms(): void;
        render(useCameraPostProcess?: boolean): void;
        static get PurpleFireColors(): Color3[];
        static get GreenFireColors(): Color3[];
        static get RedFireColors(): Color3[];
        static get BlueFireColors(): Color3[];
        get autoGenerateTime(): boolean;
        set autoGenerateTime(value: boolean);
        get fireColors(): Color3[];
        set fireColors(value: Color3[]);
        get time(): number;
        set time(value: number);
        get speed(): Vector2;
        set speed(value: Vector2);
        get alphaThreshold(): number;
        set alphaThreshold(value: number);
        /**
         * Serializes this fire procedural texture
         * @returns a serialized fire procedural texture object
         */
        serialize(): any;
        /**
         * Creates a Fire Procedural Texture from parsed fire procedural texture data
         * @param parsedTexture defines parsed texture data
         * @param scene defines the current scene
         * @param rootUrl defines the root URL containing fire procedural texture information
         * @returns a parsed Fire Procedural Texture
         */
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): FireProceduralTexture;
    }


    /** @internal */
    export var fireProceduralTexturePixelShader: {
        name: string;
        shader: string;
    };




    export class GrassProceduralTexture extends ProceduralTexture {
        private _grassColors;
        private _groundColor;
        constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
        updateShaderUniforms(): void;
        get grassColors(): Color3[];
        set grassColors(value: Color3[]);
        get groundColor(): Color3;
        set groundColor(value: Color3);
        /**
         * Serializes this grass procedural texture
         * @returns a serialized grass procedural texture object
         */
        serialize(): any;
        /**
         * Creates a Grass Procedural Texture from parsed grass procedural texture data
         * @param parsedTexture defines parsed texture data
         * @param scene defines the current scene
         * @param rootUrl defines the root URL containing grass procedural texture information
         * @returns a parsed Grass Procedural Texture
         */
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): GrassProceduralTexture;
    }


    /** @internal */
    export var grassProceduralTexturePixelShader: {
        name: string;
        shader: string;
    };




























    export class MarbleProceduralTexture extends ProceduralTexture {
        private _numberOfTilesHeight;
        private _numberOfTilesWidth;
        private _amplitude;
        private _jointColor;
        constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
        updateShaderUniforms(): void;
        get numberOfTilesHeight(): number;
        set numberOfTilesHeight(value: number);
        get amplitude(): number;
        set amplitude(value: number);
        get numberOfTilesWidth(): number;
        set numberOfTilesWidth(value: number);
        get jointColor(): Color3;
        set jointColor(value: Color3);
        /**
         * Serializes this marble procedural texture
         * @returns a serialized marble procedural texture object
         */
        serialize(): any;
        /**
         * Creates a Marble Procedural Texture from parsed marble procedural texture data
         * @param parsedTexture defines parsed texture data
         * @param scene defines the current scene
         * @param rootUrl defines the root URL containing marble procedural texture information
         * @returns a parsed Marble Procedural Texture
         */
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): MarbleProceduralTexture;
    }


    /** @internal */
    export var marbleProceduralTexturePixelShader: {
        name: string;
        shader: string;
    };




    export class NormalMapProceduralTexture extends ProceduralTexture {
        private _baseTexture;
        constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
        updateShaderUniforms(): void;
        render(useCameraPostProcess?: boolean): void;
        resize(size: any, generateMipMaps: any): void;
        isReady(): boolean;
        get baseTexture(): Texture;
        set baseTexture(texture: Texture);
        /**
         * Serializes this normal map procedural texture
         * @returns a serialized normal map procedural texture object
         */
        serialize(): any;
        /**
         * Creates a Normal Map Procedural Texture from parsed normal map procedural texture data
         * @param parsedTexture defines parsed texture data
         * @param scene defines the current scene
         * @param rootUrl defines the root URL containing normal map procedural texture information
         * @returns a parsed Normal Map Procedural Texture
         */
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): NormalMapProceduralTexture;
    }


    /** @internal */
    export var normalMapProceduralTexturePixelShader: {
        name: string;
        shader: string;
    };




    export class PerlinNoiseProceduralTexture extends ProceduralTexture {
        time: number;
        timeScale: number;
        translationSpeed: number;
        private _currentTranslation;
        constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
        updateShaderUniforms(): void;
        render(useCameraPostProcess?: boolean): void;
        resize(size: any, generateMipMaps: any): void;
        /**
         * Serializes this perlin noise procedural texture
         * @returns a serialized perlin noise procedural texture object
         */
        serialize(): any;
        /**
         * Creates a Perlin Noise Procedural Texture from parsed perlin noise procedural texture data
         * @param parsedTexture defines parsed texture data
         * @param scene defines the current scene
         * @param rootUrl defines the root URL containing perlin noise procedural texture information
         * @returns a parsed Perlin Noise Procedural Texture
         */
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): PerlinNoiseProceduralTexture;
    }


    /** @internal */
    export var perlinNoiseProceduralTexturePixelShader: {
        name: string;
        shader: string;
    };




    export class RoadProceduralTexture extends ProceduralTexture {
        private _roadColor;
        constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
        updateShaderUniforms(): void;
        get roadColor(): Color3;
        set roadColor(value: Color3);
        /**
         * Serializes this road procedural texture
         * @returns a serialized road procedural texture object
         */
        serialize(): any;
        /**
         * Creates a Road Procedural Texture from parsed road procedural texture data
         * @param parsedTexture defines parsed texture data
         * @param scene defines the current scene
         * @param rootUrl defines the root URL containing road procedural texture information
         * @returns a parsed Road Procedural Texture
         */
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): RoadProceduralTexture;
    }


    /** @internal */
    export var roadProceduralTexturePixelShader: {
        name: string;
        shader: string;
    };




    export class StarfieldProceduralTexture extends ProceduralTexture {
        private _time;
        private _alpha;
        private _beta;
        private _zoom;
        private _formuparam;
        private _stepsize;
        private _tile;
        private _brightness;
        private _darkmatter;
        private _distfading;
        private _saturation;
        constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
        updateShaderUniforms(): void;
        get time(): number;
        set time(value: number);
        get alpha(): number;
        set alpha(value: number);
        get beta(): number;
        set beta(value: number);
        get formuparam(): number;
        set formuparam(value: number);
        get stepsize(): number;
        set stepsize(value: number);
        get zoom(): number;
        set zoom(value: number);
        get tile(): number;
        set tile(value: number);
        get brightness(): number;
        set brightness(value: number);
        get darkmatter(): number;
        set darkmatter(value: number);
        get distfading(): number;
        set distfading(value: number);
        get saturation(): number;
        set saturation(value: number);
        /**
         * Serializes this starfield procedural texture
         * @returns a serialized starfield procedural texture object
         */
        serialize(): any;
        /**
         * Creates a Starfield Procedural Texture from parsed startfield procedural texture data
         * @param parsedTexture defines parsed texture data
         * @param scene defines the current scene
         * @param rootUrl defines the root URL containing startfield procedural texture information
         * @returns a parsed Starfield Procedural Texture
         */
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): StarfieldProceduralTexture;
    }


    /** @internal */
    export var starfieldProceduralTexturePixelShader: {
        name: string;
        shader: string;
    };




    export class WoodProceduralTexture extends ProceduralTexture {
        private _ampScale;
        private _woodColor;
        constructor(name: string, size: number, scene?: Nullable<Scene>, fallbackTexture?: Texture, generateMipMaps?: boolean);
        updateShaderUniforms(): void;
        get ampScale(): number;
        set ampScale(value: number);
        get woodColor(): Color3;
        set woodColor(value: Color3);
        /**
         * Serializes this wood procedural texture
         * @returns a serialized wood procedural texture object
         */
        serialize(): any;
        /**
         * Creates a Wood Procedural Texture from parsed wood procedural texture data
         * @param parsedTexture defines parsed texture data
         * @param scene defines the current scene
         * @param rootUrl defines the root URL containing wood procedural texture information
         * @returns a parsed Wood Procedural Texture
         */
        static Parse(parsedTexture: any, scene: Scene, rootUrl: string): WoodProceduralTexture;
    }


    /** @internal */
    export var woodProceduralTexturePixelShader: {
        name: string;
        shader: string;
    };



}


