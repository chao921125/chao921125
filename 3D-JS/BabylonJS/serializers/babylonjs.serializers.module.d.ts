
declare module "babylonjs-serializers/glTF/2.0/Extensions/EXT_mesh_gpu_instancing" {
import { INode } from "babylonjs-gltf2interface";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import { _BinaryWriter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
import { _Exporter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
import { Nullable } from "babylonjs/types";
import { Node } from "babylonjs/node";
import "babylonjs/Meshes/thinInstanceMesh";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_mesh_gpu_instancing/README.md)
 */
export class EXT_mesh_gpu_instancing implements IGLTFExporterExtensionV2 {
    /** Name of this extension */
    readonly name: string;
    /** Defines whether this extension is enabled */
    enabled: boolean;
    /** Defines whether this extension is required */
    required: boolean;
    private _exporter;
    private _wasUsed;
    constructor(exporter: _Exporter);
    dispose(): void;
    /** @hidden */
    get wasUsed(): boolean;
    postExportNodeAsync?(context: string, node: Nullable<INode>, babylonNode: Node, nodeMap?: {
        [key: number]: number;
    }, binaryWriter?: _BinaryWriter): Promise<Nullable<INode>>;
    private _buildAccessor;
}

}
declare module "babylonjs-serializers/glTF/2.0/Extensions/index" {
export * from "babylonjs-serializers/glTF/2.0/Extensions/KHR_texture_transform";
export * from "babylonjs-serializers/glTF/2.0/Extensions/KHR_lights_punctual";
export * from "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_clearcoat";
export * from "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_iridescence";
export * from "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_sheen";
export * from "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_unlit";
export * from "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_ior";
export * from "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_specular";
export * from "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_volume";
export * from "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_transmission";
export * from "babylonjs-serializers/glTF/2.0/Extensions/EXT_mesh_gpu_instancing";

}
declare module "babylonjs-serializers/glTF/2.0/Extensions/KHR_lights_punctual" {
import { Nullable } from "babylonjs/types";
import { Node } from "babylonjs/node";
import { INode } from "babylonjs-gltf2interface";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import { _Exporter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_lights_punctual/README.md)
 */
export class KHR_lights_punctual implements IGLTFExporterExtensionV2 {
    /** The name of this extension. */
    readonly name: string;
    /** Defines whether this extension is enabled. */
    enabled: boolean;
    /** Defines whether this extension is required */
    required: boolean;
    /** Reference to the glTF exporter */
    private _exporter;
    private _lights;
    /**
     * @param exporter
     * @hidden
     */
    constructor(exporter: _Exporter);
    /** @hidden */
    dispose(): void;
    /** @hidden */
    get wasUsed(): boolean;
    /** @hidden */
    onExporting(): void;
    /**
     * Define this method to modify the default behavior when exporting a node
     * @param context The context when exporting the node
     * @param node glTF node
     * @param babylonNode BabylonJS node
     * @param nodeMap Node mapping of unique id to glTF node index
     * @returns nullable INode promise
     */
    postExportNodeAsync(context: string, node: Nullable<INode>, babylonNode: Node, nodeMap?: {
        [key: number]: number;
    }): Promise<Nullable<INode>>;
}

}
declare module "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_clearcoat" {
import { IMaterial } from "babylonjs-gltf2interface";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import { _Exporter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
import { Material } from "babylonjs/Materials/material";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
/**
 * @hidden
 */
export class KHR_materials_clearcoat implements IGLTFExporterExtensionV2 {
    /** Name of this extension */
    readonly name: string;
    /** Defines whether this extension is enabled */
    enabled: boolean;
    /** Defines whether this extension is required */
    required: boolean;
    private _exporter;
    private _wasUsed;
    constructor(exporter: _Exporter);
    dispose(): void;
    /** @hidden */
    get wasUsed(): boolean;
    postExportMaterialAdditionalTextures?(context: string, node: IMaterial, babylonMaterial: Material): BaseTexture[];
    postExportMaterialAsync?(context: string, node: IMaterial, babylonMaterial: Material): Promise<IMaterial>;
}

}
declare module "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_ior" {
import { IMaterial } from "babylonjs-gltf2interface";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import { Material } from "babylonjs/Materials/material";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_ior/README.md)
 */
export class KHR_materials_ior implements IGLTFExporterExtensionV2 {
    /** Name of this extension */
    readonly name: string;
    /** Defines whether this extension is enabled */
    enabled: boolean;
    /** Defines whether this extension is required */
    required: boolean;
    private _wasUsed;
    constructor();
    dispose(): void;
    /** @hidden */
    get wasUsed(): boolean;
    private _isExtensionEnabled;
    postExportMaterialAsync?(context: string, node: IMaterial, babylonMaterial: Material): Promise<IMaterial>;
}

}
declare module "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_iridescence" {
import { IMaterial } from "babylonjs-gltf2interface";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import { _Exporter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
import { Material } from "babylonjs/Materials/material";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
/**
 * @hidden
 */
export class KHR_materials_iridescence implements IGLTFExporterExtensionV2 {
    /** Name of this extension */
    readonly name: string;
    /** Defines whether this extension is enabled */
    enabled: boolean;
    /** Defines whether this extension is required */
    required: boolean;
    private _exporter;
    private _wasUsed;
    constructor(exporter: _Exporter);
    dispose(): void;
    /** @hidden */
    get wasUsed(): boolean;
    postExportMaterialAdditionalTextures?(context: string, node: IMaterial, babylonMaterial: Material): BaseTexture[];
    postExportMaterialAsync?(context: string, node: IMaterial, babylonMaterial: Material): Promise<IMaterial>;
}

}
declare module "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_sheen" {
import { IMaterial } from "babylonjs-gltf2interface";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import { _Exporter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
import { Material } from "babylonjs/Materials/material";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
/**
 * @hidden
 */
export class KHR_materials_sheen implements IGLTFExporterExtensionV2 {
    /** Name of this extension */
    readonly name: string;
    /** Defines whether this extension is enabled */
    enabled: boolean;
    /** Defines whether this extension is required */
    required: boolean;
    private _wasUsed;
    private _exporter;
    constructor(exporter: _Exporter);
    dispose(): void;
    /** @hidden */
    get wasUsed(): boolean;
    postExportMaterialAdditionalTextures(context: string, node: IMaterial, babylonMaterial: Material): BaseTexture[];
    postExportMaterialAsync(context: string, node: IMaterial, babylonMaterial: Material): Promise<IMaterial>;
}

}
declare module "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_specular" {
import { IMaterial } from "babylonjs-gltf2interface";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import { _Exporter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
import { Material } from "babylonjs/Materials/material";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_specular/README.md)
 */
export class KHR_materials_specular implements IGLTFExporterExtensionV2 {
    /** Name of this extension */
    readonly name: string;
    /** Defines whether this extension is enabled */
    enabled: boolean;
    /** Defines whether this extension is required */
    required: boolean;
    private _exporter;
    private _wasUsed;
    constructor(exporter: _Exporter);
    dispose(): void;
    /** @hidden */
    get wasUsed(): boolean;
    postExportMaterialAdditionalTextures?(context: string, node: IMaterial, babylonMaterial: Material): BaseTexture[];
    private _isExtensionEnabled;
    private _hasTexturesExtension;
    postExportMaterialAsync?(context: string, node: IMaterial, babylonMaterial: Material): Promise<IMaterial>;
}

}
declare module "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_transmission" {
import { IMaterial } from "babylonjs-gltf2interface";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import { _Exporter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
import { Material } from "babylonjs/Materials/material";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_transmission/README.md)
 */
export class KHR_materials_transmission implements IGLTFExporterExtensionV2 {
    /** Name of this extension */
    readonly name: string;
    /** Defines whether this extension is enabled */
    enabled: boolean;
    /** Defines whether this extension is required */
    required: boolean;
    private _exporter;
    private _wasUsed;
    constructor(exporter: _Exporter);
    dispose(): void;
    /** @hidden */
    get wasUsed(): boolean;
    postExportMaterialAdditionalTextures?(context: string, node: IMaterial, babylonMaterial: Material): BaseTexture[];
    private _isExtensionEnabled;
    private _hasTexturesExtension;
    postExportMaterialAsync?(context: string, node: IMaterial, babylonMaterial: Material): Promise<IMaterial>;
}

}
declare module "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_unlit" {
import { IMaterial } from "babylonjs-gltf2interface";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import { Material } from "babylonjs/Materials/material";
/**
 * @hidden
 */
export class KHR_materials_unlit implements IGLTFExporterExtensionV2 {
    /** Name of this extension */
    readonly name: string;
    /** Defines whether this extension is enabled */
    enabled: boolean;
    /** Defines whether this extension is required */
    required: boolean;
    private _wasUsed;
    constructor();
    /** @hidden */
    get wasUsed(): boolean;
    dispose(): void;
    postExportMaterialAsync?(context: string, node: IMaterial, babylonMaterial: Material): Promise<IMaterial>;
}

}
declare module "babylonjs-serializers/glTF/2.0/Extensions/KHR_materials_volume" {
import { IMaterial } from "babylonjs-gltf2interface";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import { _Exporter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
import { Material } from "babylonjs/Materials/material";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md)
 */
export class KHR_materials_volume implements IGLTFExporterExtensionV2 {
    /** Name of this extension */
    readonly name: string;
    /** Defines whether this extension is enabled */
    enabled: boolean;
    /** Defines whether this extension is required */
    required: boolean;
    private _exporter;
    private _wasUsed;
    constructor(exporter: _Exporter);
    dispose(): void;
    /** @hidden */
    get wasUsed(): boolean;
    postExportMaterialAdditionalTextures?(context: string, node: IMaterial, babylonMaterial: Material): BaseTexture[];
    private _isExtensionEnabled;
    private _hasTexturesExtension;
    postExportMaterialAsync?(context: string, node: IMaterial, babylonMaterial: Material): Promise<IMaterial>;
}

}
declare module "babylonjs-serializers/glTF/2.0/Extensions/KHR_texture_transform" {
import { ITextureInfo } from "babylonjs-gltf2interface";
import { Texture } from "babylonjs/Materials/Textures/texture";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import "babylonjs-serializers/glTF/2.0/shaders/textureTransform.fragment";
/**
 * @hidden
 */
export class KHR_texture_transform implements IGLTFExporterExtensionV2 {
    private _recordedTextures;
    /** Name of this extension */
    readonly name: string;
    /** Defines whether this extension is enabled */
    enabled: boolean;
    /** Defines whether this extension is required */
    required: boolean;
    /** Reference to the glTF exporter */
    private _wasUsed;
    constructor();
    dispose(): void;
    /** @hidden */
    get wasUsed(): boolean;
    postExportTexture?(context: string, textureInfo: ITextureInfo, babylonTexture: Texture): void;
    preExportTextureAsync(context: string, babylonTexture: Texture): Promise<Texture>;
    /**
     * Transform the babylon texture by the offset, rotation and scale parameters using a procedural texture
     * @param babylonTexture
     * @param scene
     */
    private _textureTransformTextureAsync;
}

}
declare module "babylonjs-serializers/glTF/2.0/glTFAnimation" {
import { IAnimation, INode, IBufferView, IAccessor } from "babylonjs-gltf2interface";
import { AnimationSamplerInterpolation, AnimationChannelTargetPath, AccessorType } from "babylonjs-gltf2interface";
import { Node } from "babylonjs/node";
import { Nullable } from "babylonjs/types";
import { Animation } from "babylonjs/Animations/animation";
import { Scene } from "babylonjs/scene";
import { _BinaryWriter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
/**
 * @hidden
 * Interface to store animation data.
 */
export interface _IAnimationData {
    /**
     * Keyframe data.
     */
    inputs: number[];
    /**
     * Value data.
     */
    outputs: number[][];
    /**
     * Animation interpolation data.
     */
    samplerInterpolation: AnimationSamplerInterpolation;
    /**
     * Minimum keyframe value.
     */
    inputsMin: number;
    /**
     * Maximum keyframe value.
     */
    inputsMax: number;
}
/**
 * @hidden
 */
export interface _IAnimationInfo {
    /**
     * The target channel for the animation
     */
    animationChannelTargetPath: AnimationChannelTargetPath;
    /**
     * The glTF accessor type for the data.
     */
    dataAccessorType: AccessorType.VEC3 | AccessorType.VEC4 | AccessorType.SCALAR;
    /**
     * Specifies if quaternions should be used.
     */
    useQuaternion: boolean;
}
/**
 * @hidden
 * Utility class for generating glTF animation data from BabylonJS.
 */
export class _GLTFAnimation {
    /**
     * Determine if a node is transformable - ie has properties it should be part of animation of transformation.
     * @param babylonNode the node to test
     * @returns true if can be animated, false otherwise. False if the parameter is null or undefined.
     */
    private static _IsTransformable;
    /**
     * @ignore
     *
     * Creates glTF channel animation from BabylonJS animation.
     * @param babylonTransformNode - BabylonJS mesh.
     * @param animation - animation.
     * @param animationChannelTargetPath - The target animation channel.
     * @param convertToRightHandedSystem - Specifies if the values should be converted to right-handed.
     * @param useQuaternion - Specifies if quaternions are used.
     * @returns nullable IAnimationData
     */
    static _CreateNodeAnimation(babylonTransformNode: Node, animation: Animation, animationChannelTargetPath: AnimationChannelTargetPath, convertToRightHandedSystem: boolean, useQuaternion: boolean, animationSampleRate: number): Nullable<_IAnimationData>;
    private static _DeduceAnimationInfo;
    /**
     * @ignore
     * Create node animations from the transform node animations
     * @param babylonNode
     * @param runtimeGLTFAnimation
     * @param idleGLTFAnimations
     * @param nodeMap
     * @param nodes
     * @param binaryWriter
     * @param bufferViews
     * @param accessors
     * @param convertToRightHandedSystem
     * @param animationSampleRate
     */
    static _CreateNodeAnimationFromNodeAnimations(babylonNode: Node, runtimeGLTFAnimation: IAnimation, idleGLTFAnimations: IAnimation[], nodeMap: {
        [key: number]: number;
    }, nodes: INode[], binaryWriter: _BinaryWriter, bufferViews: IBufferView[], accessors: IAccessor[], convertToRightHandedSystem: boolean, animationSampleRate: number): void;
    /**
     * @ignore
     * Create individual morph animations from the mesh's morph target animation tracks
     * @param babylonNode
     * @param runtimeGLTFAnimation
     * @param idleGLTFAnimations
     * @param nodeMap
     * @param nodes
     * @param binaryWriter
     * @param bufferViews
     * @param accessors
     * @param convertToRightHandedSystem
     * @param animationSampleRate
     */
    static _CreateMorphTargetAnimationFromMorphTargetAnimations(babylonNode: Node, runtimeGLTFAnimation: IAnimation, idleGLTFAnimations: IAnimation[], nodeMap: {
        [key: number]: number;
    }, nodes: INode[], binaryWriter: _BinaryWriter, bufferViews: IBufferView[], accessors: IAccessor[], convertToRightHandedSystem: boolean, animationSampleRate: number): void;
    /**
     * @ignore
     * Create node and morph animations from the animation groups
     * @param babylonScene
     * @param glTFAnimations
     * @param nodeMap
     * @param nodes
     * @param binaryWriter
     * @param bufferViews
     * @param accessors
     * @param convertToRightHandedSystemMap
     * @param animationSampleRate
     */
    static _CreateNodeAndMorphAnimationFromAnimationGroups(babylonScene: Scene, glTFAnimations: IAnimation[], nodeMap: {
        [key: number]: number;
    }, nodes: INode[], binaryWriter: _BinaryWriter, bufferViews: IBufferView[], accessors: IAccessor[], convertToRightHandedSystemMap: {
        [nodeId: number]: boolean;
    }, animationSampleRate: number): void;
    private static _AddAnimation;
    /**
     * Create a baked animation
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation corresponding to the BabylonJS mesh
     * @param animationChannelTargetPath animation target channel
     * @param minFrame minimum animation frame
     * @param maxFrame maximum animation frame
     * @param fps frames per second of the animation
     * @param sampleRate
     * @param inputs input key frames of the animation
     * @param outputs output key frame data of the animation
     * @param minMaxFrames
     * @param minMaxFrames.min
     * @param minMaxFrames.max
     * @param convertToRightHandedSystem converts the values to right-handed
     * @param useQuaternion specifies if quaternions should be used
     */
    private static _CreateBakedAnimation;
    private static _ConvertFactorToVector3OrQuaternion;
    private static _SetInterpolatedValue;
    /**
     * Creates linear animation from the animation key frames
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation
     * @param animationChannelTargetPath The target animation channel
     * @param frameDelta The difference between the last and first frame of the animation
     * @param inputs Array to store the key frame times
     * @param outputs Array to store the key frame data
     * @param convertToRightHandedSystem Specifies if the position data should be converted to right handed
     * @param useQuaternion Specifies if quaternions are used in the animation
     */
    private static _CreateLinearOrStepAnimation;
    /**
     * Creates cubic spline animation from the animation key frames
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation
     * @param animationChannelTargetPath The target animation channel
     * @param frameDelta The difference between the last and first frame of the animation
     * @param inputs Array to store the key frame times
     * @param outputs Array to store the key frame data
     * @param convertToRightHandedSystem Specifies if the position data should be converted to right handed
     * @param useQuaternion Specifies if quaternions are used in the animation
     */
    private static _CreateCubicSplineAnimation;
    private static _GetBasePositionRotationOrScale;
    /**
     * Adds a key frame value
     * @param keyFrame
     * @param animation
     * @param outputs
     * @param animationChannelTargetPath
     * @param babylonTransformNode
     * @param convertToRightHandedSystem
     * @param useQuaternion
     */
    private static _AddKeyframeValue;
    /**
     * Determine the interpolation based on the key frames
     * @param keyFrames
     * @param animationChannelTargetPath
     * @param useQuaternion
     */
    private static _DeduceInterpolation;
    /**
     * Adds an input tangent or output tangent to the output data
     * If an input tangent or output tangent is missing, it uses the zero vector or zero quaternion
     * @param babylonTransformNode
     * @param tangentType Specifies which type of tangent to handle (inTangent or outTangent)
     * @param outputs The animation data by keyframe
     * @param animationChannelTargetPath The target animation channel
     * @param interpolation The interpolation type
     * @param keyFrame The key frame with the animation data
     * @param frameDelta Time difference between two frames used to scale the tangent by the frame delta
     * @param useQuaternion Specifies if quaternions are used
     * @param convertToRightHandedSystem Specifies if the values should be converted to right-handed
     */
    private static _AddSplineTangent;
    /**
     * Get the minimum and maximum key frames' frame values
     * @param keyFrames animation key frames
     * @returns the minimum and maximum key frame value
     */
    private static _CalculateMinMaxKeyFrames;
}

}
declare module "babylonjs-serializers/glTF/2.0/glTFData" {
/**
 * Class for holding and downloading glTF file data
 */
export class GLTFData {
    /**
     * Object which contains the file name as the key and its data as the value
     */
    glTFFiles: {
        [fileName: string]: string | Blob;
    };
    /**
     * Initializes the glTF file object
     */
    constructor();
    /**
     * Downloads the glTF data as files based on their names and data
     */
    downloadFiles(): void;
}

}
declare module "babylonjs-serializers/glTF/2.0/glTFExporter" {
import { IBufferView, IAccessor, INode, IMaterial, ITexture, IImage, ISampler, IMeshPrimitive, IGLTF, ITextureInfo, ISkin } from "babylonjs-gltf2interface";
import { ImageMimeType, AccessorComponentType } from "babylonjs-gltf2interface";
import { FloatArray, Nullable } from "babylonjs/types";
import { Vector3, Vector4 } from "babylonjs/Maths/math.vector";
import { Node } from "babylonjs/node";
import { TransformNode } from "babylonjs/Meshes/transformNode";
import { SubMesh } from "babylonjs/Meshes/subMesh";
import { MorphTarget } from "babylonjs/Morph/morphTarget";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
import { Texture } from "babylonjs/Materials/Textures/texture";
import { Material } from "babylonjs/Materials/material";
import { Scene } from "babylonjs/scene";
import { IGLTFExporterExtensionV2 } from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
import { _GLTFMaterialExporter } from "babylonjs-serializers/glTF/2.0/glTFMaterialExporter";
import { IExportOptions } from "babylonjs-serializers/glTF/2.0/glTFSerializer";
import { GLTFData } from "babylonjs-serializers/glTF/2.0/glTFData";
/**
 * Converts Babylon Scene into glTF 2.0.
 * @hidden
 */
export class _Exporter {
    /**
     * Stores the glTF to export
     */
    _glTF: IGLTF;
    /**
     * Stores all generated buffer views, which represents views into the main glTF buffer data
     */
    _bufferViews: IBufferView[];
    /**
     * Stores all the generated accessors, which is used for accessing the data within the buffer views in glTF
     */
    _accessors: IAccessor[];
    /**
     * Stores all the generated nodes, which contains transform and/or mesh information per node
     */
    _nodes: INode[];
    /**
     * Stores all the generated glTF scenes, which stores multiple node hierarchies
     */
    private _scenes;
    /**
     * Stores all the generated glTF cameras
     */
    private _cameras;
    /**
     * Stores all the generated mesh information, each containing a set of primitives to render in glTF
     */
    private _meshes;
    /**
     * Stores all the generated material information, which represents the appearance of each primitive
     */
    _materials: IMaterial[];
    _materialMap: {
        [materialID: number]: number;
    };
    /**
     * Stores all the generated texture information, which is referenced by glTF materials
     */
    _textures: ITexture[];
    /**
     * Stores all the generated image information, which is referenced by glTF textures
     */
    _images: IImage[];
    /**
     * Stores all the texture samplers
     */
    _samplers: ISampler[];
    /**
     * Stores all the generated glTF skins
     */
    _skins: ISkin[];
    /**
     * Stores all the generated animation samplers, which is referenced by glTF animations
     */
    /**
     * Stores the animations for glTF models
     */
    private _animations;
    /**
     * Stores the total amount of bytes stored in the glTF buffer
     */
    private _totalByteLength;
    /**
     * Stores a reference to the Babylon scene containing the source geometry and material information
     */
    _babylonScene: Scene;
    /**
     * Stores a map of the image data, where the key is the file name and the value
     * is the image data
     */
    _imageData: {
        [fileName: string]: {
            data: Uint8Array;
            mimeType: ImageMimeType;
        };
    };
    protected _orderedImageData: Array<{
        data: Uint8Array;
        mimeType: ImageMimeType;
    }>;
    /**
     * Stores a map of the unique id of a node to its index in the node array
     */
    _nodeMap: {
        [key: number]: number;
    };
    /**
     * Specifies if the source Babylon scene was left handed, and needed conversion.
     */
    _convertToRightHandedSystem: boolean;
    /**
     * Specifies if a Babylon node should be converted to right-handed on export
     */
    _convertToRightHandedSystemMap: {
        [nodeId: number]: boolean;
    };
    _includeCoordinateSystemConversionNodes: boolean;
    /**
     * Baked animation sample rate
     */
    private _animationSampleRate;
    private _options;
    private _localEngine;
    _glTFMaterialExporter: _GLTFMaterialExporter;
    private _extensions;
    private static _ExtensionNames;
    private static _ExtensionFactories;
    private _applyExtension;
    private _applyExtensions;
    _extensionsPreExportTextureAsync(context: string, babylonTexture: Nullable<Texture>, mimeType: ImageMimeType): Promise<Nullable<BaseTexture>>;
    _extensionsPostExportMeshPrimitiveAsync(context: string, meshPrimitive: IMeshPrimitive, babylonSubMesh: SubMesh, binaryWriter: _BinaryWriter): Promise<Nullable<IMeshPrimitive>>;
    _extensionsPostExportNodeAsync(context: string, node: Nullable<INode>, babylonNode: Node, nodeMap?: {
        [key: number]: number;
    }, binaryWriter?: _BinaryWriter): Promise<Nullable<INode>>;
    _extensionsPostExportMaterialAsync(context: string, material: Nullable<IMaterial>, babylonMaterial: Material): Promise<Nullable<IMaterial>>;
    _extensionsPostExportMaterialAdditionalTextures(context: string, material: IMaterial, babylonMaterial: Material): BaseTexture[];
    _extensionsPostExportTextures(context: string, textureInfo: ITextureInfo, babylonTexture: BaseTexture): void;
    private _forEachExtensions;
    private _extensionsOnExporting;
    /**
     * Load glTF serializer extensions
     */
    private _loadExtensions;
    /**
     * Creates a glTF Exporter instance, which can accept optional exporter options
     * @param babylonScene Babylon scene object
     * @param options Options to modify the behavior of the exporter
     */
    constructor(babylonScene?: Nullable<Scene>, options?: IExportOptions);
    dispose(): void;
    get options(): IExportOptions;
    /**
     * Registers a glTF exporter extension
     * @param name Name of the extension to export
     * @param factory The factory function that creates the exporter extension
     */
    static RegisterExtension(name: string, factory: (exporter: _Exporter) => IGLTFExporterExtensionV2): void;
    /**
     * Un-registers an exporter extension
     * @param name The name fo the exporter extension
     * @returns A boolean indicating whether the extension has been un-registered
     */
    static UnregisterExtension(name: string): boolean;
    private _reorderIndicesBasedOnPrimitiveMode;
    /**
     * Reorders the vertex attribute data based on the primitive mode.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param primitiveMode Primitive mode of the mesh
     * @param sideOrientation the winding order of the submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    private _reorderVertexAttributeDataBasedOnPrimitiveMode;
    /**
     * Reorders the vertex attributes in the correct triangle mode order .  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param primitiveMode Primitive mode of the mesh
     * @param sideOrientation the winding order of the submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    private _reorderTriangleFillMode;
    /**
     * Reorders the vertex attributes in the correct triangle strip order.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param primitiveMode Primitive mode of the mesh
     * @param sideOrientation the winding order of the submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    private _reorderTriangleStripDrawMode;
    /**
     * Reorders the vertex attributes in the correct triangle fan order.  This is necessary when indices are not available and the winding order is
     * clock-wise during export to glTF
     * @param submesh BabylonJS submesh
     * @param primitiveMode Primitive mode of the mesh
     * @param sideOrientation the winding order of the submesh
     * @param vertexBufferKind The type of vertex attribute
     * @param meshAttributeArray The vertex attribute data
     * @param byteOffset The offset to the binary data
     * @param binaryWriter The binary data for the glTF file
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    private _reorderTriangleFanMode;
    /**
     * Writes the vertex attribute data to binary
     * @param vertices The vertices to write to the binary writer
     * @param byteOffset The offset into the binary writer to overwrite binary data
     * @param vertexAttributeKind The vertex attribute type
     * @param meshAttributeArray The vertex attribute data
     * @param binaryWriter The writer containing the binary data
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    private _writeVertexAttributeData;
    /**
     * Writes mesh attribute data to a data buffer
     * Returns the bytelength of the data
     * @param vertexBufferKind Indicates what kind of vertex data is being passed in
     * @param attributeComponentKind
     * @param meshAttributeArray Array containing the attribute data
     * @param stride Specifies the space between data
     * @param binaryWriter The buffer to write the binary data to
     * @param convertToRightHandedSystem Converts the values to right-handed
     * @param babylonTransformNode
     */
    _writeAttributeData(vertexBufferKind: string, attributeComponentKind: AccessorComponentType, meshAttributeArray: FloatArray, stride: number, binaryWriter: _BinaryWriter, convertToRightHandedSystem: boolean, babylonTransformNode: TransformNode): void;
    /**
     * Writes mesh attribute data to a data buffer
     * Returns the bytelength of the data
     * @param vertexBufferKind Indicates what kind of vertex data is being passed in
     * @param attributeComponentKind
     * @param meshPrimitive
     * @param morphTarget
     * @param meshAttributeArray Array containing the attribute data
     * @param morphTargetAttributeArray
     * @param stride Specifies the space between data
     * @param binaryWriter The buffer to write the binary data to
     * @param convertToRightHandedSystem Converts the values to right-handed
     * @param minMax
     */
    writeMorphTargetAttributeData(vertexBufferKind: string, attributeComponentKind: AccessorComponentType, meshPrimitive: SubMesh, morphTarget: MorphTarget, meshAttributeArray: FloatArray, morphTargetAttributeArray: FloatArray, stride: number, binaryWriter: _BinaryWriter, convertToRightHandedSystem: boolean, minMax?: any): void;
    /**
     * Generates glTF json data
     * @param shouldUseGlb Indicates whether the json should be written for a glb file
     * @param glTFPrefix Text to use when prefixing a glTF file
     * @param prettyPrint Indicates whether the json file should be pretty printed (true) or not (false)
     * @returns json data as string
     */
    private _generateJSON;
    /**
     * Generates data for .gltf and .bin files based on the glTF prefix string
     * @param glTFPrefix Text to use when prefixing a glTF file
     * @param dispose Dispose the exporter
     * @returns GLTFData with glTF file data
     */
    _generateGLTFAsync(glTFPrefix: string, dispose?: boolean): Promise<GLTFData>;
    /**
     * Creates a binary buffer for glTF
     * @returns array buffer for binary data
     */
    private _generateBinaryAsync;
    /**
     * Pads the number to a multiple of 4
     * @param num number to pad
     * @returns padded number
     */
    private _getPadding;
    /**
     * @param glTFPrefix
     * @param dispose
     * @hidden
     */
    _generateGLBAsync(glTFPrefix: string, dispose?: boolean): Promise<GLTFData>;
    /**
     * Sets the TRS for each node
     * @param node glTF Node for storing the transformation data
     * @param babylonTransformNode Babylon mesh used as the source for the transformation data
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    private _setNodeTransformation;
    private _setCameraTransformation;
    private _getVertexBufferFromMesh;
    /**
     * Creates a bufferview based on the vertices type for the Babylon mesh
     * @param kind Indicates the type of vertices data
     * @param attributeComponentKind Indicates the numerical type used to store the data
     * @param babylonTransformNode The Babylon mesh to get the vertices data from
     * @param binaryWriter The buffer to write the bufferview data to
     * @param byteStride
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    private _createBufferViewKind;
    /**
     * Creates a bufferview based on the vertices type for the Babylon mesh
     * @param babylonSubMesh The Babylon submesh that the morph target is applied to
     * @param meshPrimitive
     * @param babylonMorphTarget the morph target to be exported
     * @param binaryWriter The buffer to write the bufferview data to
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    private _setMorphTargetAttributes;
    /**
     * The primitive mode of the Babylon mesh
     * @param babylonMesh The BabylonJS mesh
     */
    private _getMeshPrimitiveMode;
    /**
     * Sets the primitive mode of the glTF mesh primitive
     * @param meshPrimitive glTF mesh primitive
     * @param primitiveMode The primitive mode
     */
    private _setPrimitiveMode;
    /**
     * Sets the vertex attribute accessor based of the glTF mesh primitive
     * @param meshPrimitive glTF mesh primitive
     * @param attributeKind vertex attribute
     * @returns boolean specifying if uv coordinates are present
     */
    private _setAttributeKind;
    /**
     * Sets data for the primitive attributes of each submesh
     * @param mesh glTF Mesh object to store the primitive attribute information
     * @param babylonTransformNode Babylon mesh to get the primitive attribute data from
     * @param binaryWriter Buffer to write the attribute data to
     * @param convertToRightHandedSystem Converts the values to right-handed
     */
    private _setPrimitiveAttributesAsync;
    /**
     * Check if the node is used to convert its descendants from a right handed coordinate system to the Babylon scene's coordinate system.
     * @param node The node to check
     * @returns True if the node is used to convert its descendants from right-handed to left-handed. False otherwise
     */
    private _isBabylonCoordinateSystemConvertingNode;
    /**
     * Creates a glTF scene based on the array of meshes
     * Returns the the total byte offset
     * @param babylonScene Babylon scene to get the mesh data from
     * @param binaryWriter Buffer to write binary data to
     */
    private _createSceneAsync;
    /**
     * Getting the nodes and materials that would be exported.
     * @param nodes Babylon transform nodes
     * @returns Array of nodes which would be exported.
     * @returns Set of materials which would be exported.
     */
    private _getExportNodes;
    /**
     * Creates a mapping of Node unique id to node index and handles animations
     * @param babylonScene Babylon Scene
     * @param nodes Babylon transform nodes
     * @param binaryWriter Buffer to write binary data to
     * @returns Node mapping of unique id to index
     */
    private _createNodeMapAndAnimationsAsync;
    /**
     * Creates a glTF node from a Babylon mesh
     * @param babylonNode Source Babylon mesh
     * @param binaryWriter Buffer for storing geometry data
     * @param convertToRightHandedSystem Converts the values to right-handed
     * @returns glTF node
     */
    private _createNodeAsync;
    /**
     * Creates a glTF skin from a Babylon skeleton
     * @param babylonScene Babylon Scene
     * @param nodeMap Babylon transform nodes
     * @param binaryWriter Buffer to write binary data to
     * @returns Node mapping of unique id to index
     */
    private _createSkinsAsync;
}
/**
 * @hidden
 *
 * Stores glTF binary data.  If the array buffer byte length is exceeded, it doubles in size dynamically
 */
export class _BinaryWriter {
    /**
     * Array buffer which stores all binary data
     */
    private _arrayBuffer;
    /**
     * View of the array buffer
     */
    private _dataView;
    /**
     * byte offset of data in array buffer
     */
    private _byteOffset;
    /**
     * Initialize binary writer with an initial byte length
     * @param byteLength Initial byte length of the array buffer
     */
    constructor(byteLength: number);
    /**
     * Resize the array buffer to the specified byte length
     * @param byteLength
     */
    private _resizeBuffer;
    /**
     * Get an array buffer with the length of the byte offset
     * @returns ArrayBuffer resized to the byte offset
     */
    getArrayBuffer(): ArrayBuffer;
    /**
     * Get the byte offset of the array buffer
     * @returns byte offset
     */
    getByteOffset(): number;
    /**
     * Stores an UInt8 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    setUInt8(entry: number, byteOffset?: number): void;
    /**
     * Stores an UInt16 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    setUInt16(entry: number, byteOffset?: number): void;
    /**
     * Gets an UInt32 in the array buffer
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    getUInt32(byteOffset: number): number;
    getVector3Float32FromRef(vector3: Vector3, byteOffset: number): void;
    setVector3Float32FromRef(vector3: Vector3, byteOffset: number): void;
    getVector4Float32FromRef(vector4: Vector4, byteOffset: number): void;
    setVector4Float32FromRef(vector4: Vector4, byteOffset: number): void;
    /**
     * Stores a Float32 in the array buffer
     * @param entry
     * @param byteOffset
     */
    setFloat32(entry: number, byteOffset?: number): void;
    /**
     * Stores an UInt32 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    setUInt32(entry: number, byteOffset?: number): void;
    /**
     * Stores an Int16 in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    setInt16(entry: number, byteOffset?: number): void;
    /**
     * Stores a byte in the array buffer
     * @param entry
     * @param byteOffset If defined, specifies where to set the value as an offset.
     */
    setByte(entry: number, byteOffset?: number): void;
}

}
declare module "babylonjs-serializers/glTF/2.0/glTFExporterExtension" {
import { ImageMimeType, IMeshPrimitive, INode, IMaterial, ITextureInfo } from "babylonjs-gltf2interface";
import { Node } from "babylonjs/node";
import { Nullable } from "babylonjs/types";
import { Texture } from "babylonjs/Materials/Textures/texture";
import { SubMesh } from "babylonjs/Meshes/subMesh";
import { IDisposable } from "babylonjs/scene";
import { _BinaryWriter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
import { IGLTFExporterExtension } from "babylonjs-serializers/glTF/glTFFileExporter";
import { Material } from "babylonjs/Materials/material";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
/** @hidden */
export var __IGLTFExporterExtensionV2: number;
/**
 * Interface for a glTF exporter extension
 * @hidden
 */
export interface IGLTFExporterExtensionV2 extends IGLTFExporterExtension, IDisposable {
    /**
     * Define this method to modify the default behavior before exporting a texture
     * @param context The context when loading the asset
     * @param babylonTexture The Babylon.js texture
     * @param mimeType The mime-type of the generated image
     * @returns A promise that resolves with the exported texture
     */
    preExportTextureAsync?(context: string, babylonTexture: Nullable<Texture>, mimeType: ImageMimeType): Promise<Texture>;
    /**
     * Define this method to get notified when a texture info is created
     * @param context The context when loading the asset
     * @param textureInfo The glTF texture info
     * @param babylonTexture The Babylon.js texture
     */
    postExportTexture?(context: string, textureInfo: ITextureInfo, babylonTexture: BaseTexture): void;
    /**
     * Define this method to modify the default behavior when exporting texture info
     * @param context The context when loading the asset
     * @param meshPrimitive glTF mesh primitive
     * @param babylonSubMesh Babylon submesh
     * @param binaryWriter glTF serializer binary writer instance
     * @returns nullable IMeshPrimitive promise
     */
    postExportMeshPrimitiveAsync?(context: string, meshPrimitive: Nullable<IMeshPrimitive>, babylonSubMesh: SubMesh, binaryWriter: _BinaryWriter): Promise<IMeshPrimitive>;
    /**
     * Define this method to modify the default behavior when exporting a node
     * @param context The context when exporting the node
     * @param node glTF node
     * @param babylonNode BabylonJS node
     * @returns nullable INode promise
     */
    postExportNodeAsync?(context: string, node: Nullable<INode>, babylonNode: Node, nodeMap?: {
        [key: number]: number;
    }, binaryWriter?: _BinaryWriter): Promise<Nullable<INode>>;
    /**
     * Define this method to modify the default behavior when exporting a material
     * @param material glTF material
     * @param babylonMaterial BabylonJS material
     * @returns nullable IMaterial promise
     */
    postExportMaterialAsync?(context: string, node: Nullable<IMaterial>, babylonMaterial: Material): Promise<IMaterial>;
    /**
     * Define this method to return additional textures to export from a material
     * @param material glTF material
     * @param babylonMaterial BabylonJS material
     * @returns List of textures
     */
    postExportMaterialAdditionalTextures?(context: string, node: IMaterial, babylonMaterial: Material): BaseTexture[];
    /** Gets a boolean indicating that this extension was used */
    wasUsed: boolean;
    /** Gets a boolean indicating that this extension is required for the file to work */
    required: boolean;
    /**
     * Called after the exporter state changes to EXPORTING
     */
    onExporting?(): void;
}

}
declare module "babylonjs-serializers/glTF/2.0/glTFMaterialExporter" {
import { ITextureInfo, IMaterial, IMaterialPbrMetallicRoughness } from "babylonjs-gltf2interface";
import { ImageMimeType } from "babylonjs-gltf2interface";
import { Nullable } from "babylonjs/types";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
import { _Exporter } from "babylonjs-serializers/glTF/2.0/glTFExporter";
import { Material } from "babylonjs/Materials/material";
import { StandardMaterial } from "babylonjs/Materials/standardMaterial";
import { PBRBaseMaterial } from "babylonjs/Materials/PBR/pbrBaseMaterial";
/**
 * Utility methods for working with glTF material conversion properties.  This class should only be used internally
 * @hidden
 */
export class _GLTFMaterialExporter {
    /**
     * Represents the dielectric specular values for R, G and B
     */
    private static readonly _DielectricSpecular;
    /**
     * Allows the maximum specular power to be defined for material calculations
     */
    private static readonly _MaxSpecularPower;
    /**
     * Mapping to store textures
     */
    private _textureMap;
    /**
     * Numeric tolerance value
     */
    private static readonly _Epsilon;
    /**
     * Reference to the glTF Exporter
     */
    private _exporter;
    constructor(exporter: _Exporter);
    /**
     * Specifies if two colors are approximately equal in value
     * @param color1 first color to compare to
     * @param color2 second color to compare to
     * @param epsilon threshold value
     */
    private static _FuzzyEquals;
    /**
     * Gets the materials from a Babylon scene and converts them to glTF materials
     * @param exportMaterials
     * @param mimeType texture mime type
     * @param hasTextureCoords specifies if texture coordinates are present on the material
     */
    _convertMaterialsToGLTFAsync(exportMaterials: Set<Material>, mimeType: ImageMimeType, hasTextureCoords: boolean): Promise<void>;
    /**
     * Makes a copy of the glTF material without the texture parameters
     * @param originalMaterial original glTF material
     * @returns glTF material without texture parameters
     */
    _stripTexturesFromMaterial(originalMaterial: IMaterial): IMaterial;
    /**
     * Specifies if the material has any texture parameters present
     * @param material glTF Material
     * @returns boolean specifying if texture parameters are present
     */
    _hasTexturesPresent(material: IMaterial): boolean;
    _getTextureInfo(babylonTexture: Nullable<BaseTexture>): Nullable<ITextureInfo>;
    /**
     * Converts a Babylon StandardMaterial to a glTF Metallic Roughness Material
     * @param babylonStandardMaterial
     * @returns glTF Metallic Roughness Material representation
     */
    _convertToGLTFPBRMetallicRoughness(babylonStandardMaterial: StandardMaterial): IMaterialPbrMetallicRoughness;
    /**
     * Computes the metallic factor
     * @param diffuse diffused value
     * @param specular specular value
     * @param oneMinusSpecularStrength one minus the specular strength
     * @returns metallic value
     */
    static _SolveMetallic(diffuse: number, specular: number, oneMinusSpecularStrength: number): number;
    /**
     * Sets the glTF alpha mode to a glTF material from the Babylon Material
     * @param glTFMaterial glTF material
     * @param babylonMaterial Babylon material
     */
    private static _SetAlphaMode;
    /**
     * Converts a Babylon Standard Material to a glTF Material
     * @param babylonStandardMaterial BJS Standard Material
     * @param mimeType mime type to use for the textures
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     */
    _convertStandardMaterialAsync(babylonStandardMaterial: StandardMaterial, mimeType: ImageMimeType, hasTextureCoords: boolean): Promise<IMaterial>;
    private _finishMaterial;
    /**
     * Converts an image typed array buffer to a base64 image
     * @param buffer typed array buffer
     * @param width width of the image
     * @param height height of the image
     * @param mimeType mimetype of the image
     * @returns base64 image string
     */
    private _createBase64FromCanvasAsync;
    /**
     * Generates a white texture based on the specified width and height
     * @param width width of the texture in pixels
     * @param height height of the texture in pixels
     * @param scene babylonjs scene
     * @returns white texture
     */
    private _createWhiteTexture;
    /**
     * Resizes the two source textures to the same dimensions.  If a texture is null, a default white texture is generated.  If both textures are null, returns null
     * @param texture1 first texture to resize
     * @param texture2 second texture to resize
     * @param scene babylonjs scene
     * @returns resized textures or null
     */
    private _resizeTexturesToSameDimensions;
    /**
     * Converts an array of pixels to a Float32Array
     * Throws an error if the pixel format is not supported
     * @param pixels - array buffer containing pixel values
     * @returns Float32 of pixels
     */
    private _convertPixelArrayToFloat32;
    /**
     * Convert Specular Glossiness Textures to Metallic Roughness
     * See link below for info on the material conversions from PBR Metallic/Roughness and Specular/Glossiness
     * @link https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness/examples/convert-between-workflows-bjs/js/babylon.pbrUtilities.js
     * @param diffuseTexture texture used to store diffuse information
     * @param specularGlossinessTexture texture used to store specular and glossiness information
     * @param factors specular glossiness material factors
     * @param mimeType the mime type to use for the texture
     * @returns pbr metallic roughness interface or null
     */
    private _convertSpecularGlossinessTexturesToMetallicRoughnessAsync;
    /**
     * Converts specular glossiness material properties to metallic roughness
     * @param specularGlossiness interface with specular glossiness material properties
     * @returns interface with metallic roughness material properties
     */
    private _convertSpecularGlossinessToMetallicRoughness;
    /**
     * Calculates the surface reflectance, independent of lighting conditions
     * @param color Color source to calculate brightness from
     * @returns number representing the perceived brightness, or zero if color is undefined
     */
    private _getPerceivedBrightness;
    /**
     * Returns the maximum color component value
     * @param color
     * @returns maximum color component value, or zero if color is null or undefined
     */
    private _getMaxComponent;
    /**
     * Convert a PBRMaterial (Metallic/Roughness) to Metallic Roughness factors
     * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
     * @param mimeType mime type to use for the textures
     * @param glTFPbrMetallicRoughness glTF PBR Metallic Roughness interface
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    private _convertMetalRoughFactorsToMetallicRoughnessAsync;
    private _getGLTFTextureSampler;
    private _getGLTFTextureWrapMode;
    private _getGLTFTextureWrapModesSampler;
    /**
     * Convert a PBRMaterial (Specular/Glossiness) to Metallic Roughness factors
     * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
     * @param mimeType mime type to use for the textures
     * @param glTFPbrMetallicRoughness glTF PBR Metallic Roughness interface
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    private _convertSpecGlossFactorsToMetallicRoughnessAsync;
    /**
     * Converts a Babylon PBR Base Material to a glTF Material
     * @param babylonPBRMaterial BJS PBR Base Material
     * @param mimeType mime type to use for the textures
     * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
     */
    _convertPBRMaterialAsync(babylonPBRMaterial: PBRBaseMaterial, mimeType: ImageMimeType, hasTextureCoords: boolean): Promise<IMaterial>;
    private _setMetallicRoughnessPbrMaterial;
    private _getPixelsFromTexture;
    /**
     * Extracts a texture from a Babylon texture into file data and glTF data
     * @param babylonTexture Babylon texture to extract
     * @param mimeType Mime Type of the babylonTexture
     * @return glTF texture info, or null if the texture format is not supported
     */
    _exportTextureAsync(babylonTexture: BaseTexture, mimeType: ImageMimeType): Promise<Nullable<ITextureInfo>>;
    _exportTextureInfoAsync(babylonTexture: BaseTexture, mimeType: ImageMimeType): Promise<Nullable<ITextureInfo>>;
    /**
     * Builds a texture from base64 string
     * @param base64Texture base64 texture string
     * @param baseTextureName Name to use for the texture
     * @param mimeType image mime type for the texture
     * @param texCoordIndex
     * @param samplerIndex
     * @returns glTF texture info, or null if the texture format is not supported
     */
    private _getTextureInfoFromBase64;
}
export {};

}
declare module "babylonjs-serializers/glTF/2.0/glTFSerializer" {
import { Node } from "babylonjs/node";
import { Scene } from "babylonjs/scene";
import { GLTFData } from "babylonjs-serializers/glTF/2.0/glTFData";
/**
 * Holds a collection of exporter options and parameters
 */
export interface IExportOptions {
    /**
     * Function which indicates whether a babylon node should be exported or not
     * @param node source Babylon node. It is used to check whether it should be exported to glTF or not
     * @returns boolean, which indicates whether the node should be exported (true) or not (false)
     */
    shouldExportNode?(node: Node): boolean;
    /**
     * Function used to extract the part of node's metadata that will be exported into glTF node extras
     * @param metadata source metadata to read from
     * @returns the data to store to glTF node extras
     */
    metadataSelector?(metadata: any): any;
    /**
     * The sample rate to bake animation curves
     */
    animationSampleRate?: number;
    /**
     * Begin serialization without waiting for the scene to be ready
     */
    exportWithoutWaitingForScene?: boolean;
    /**
     * Indicates if unused vertex uv attributes should be included in export
     */
    exportUnusedUVs?: boolean;
    /**
     * Indicates if coordinate system swapping root nodes should be included in export
     */
    includeCoordinateSystemConversionNodes?: boolean;
}
/**
 * Class for generating glTF data from a Babylon scene.
 */
export class GLTF2Export {
    /**
     * Exports the geometry of the scene to .gltf file format asynchronously
     * @param scene Babylon scene with scene hierarchy information
     * @param filePrefix File prefix to use when generating the glTF file
     * @param options Exporter options
     * @returns Returns an object with a .gltf file and associates texture names
     * as keys and their data and paths as values
     */
    static GLTFAsync(scene: Scene, filePrefix: string, options?: IExportOptions): Promise<GLTFData>;
    private static _PreExportAsync;
    private static _PostExportAsync;
    /**
     * Exports the geometry of the scene to .glb file format asychronously
     * @param scene Babylon scene with scene hierarchy information
     * @param filePrefix File prefix to use when generating glb file
     * @param options Exporter options
     * @returns Returns an object with a .glb filename as key and data as value
     */
    static GLBAsync(scene: Scene, filePrefix: string, options?: IExportOptions): Promise<GLTFData>;
}

}
declare module "babylonjs-serializers/glTF/2.0/glTFUtilities" {
import { IBufferView, AccessorComponentType, IAccessor } from "babylonjs-gltf2interface";
import { AccessorType } from "babylonjs-gltf2interface";
import { FloatArray, Nullable } from "babylonjs/types";
import { Vector4, Quaternion } from "babylonjs/Maths/math.vector";
import { Vector3 } from "babylonjs/Maths/math.vector";
/**
 * @hidden
 */
export class _GLTFUtilities {
    /**
     * Creates a buffer view based on the supplied arguments
     * @param bufferIndex index value of the specified buffer
     * @param byteOffset byte offset value
     * @param byteLength byte length of the bufferView
     * @param byteStride byte distance between conequential elements
     * @param name name of the buffer view
     * @returns bufferView for glTF
     */
    static _CreateBufferView(bufferIndex: number, byteOffset: number, byteLength: number, byteStride?: number, name?: string): IBufferView;
    /**
     * Creates an accessor based on the supplied arguments
     * @param bufferviewIndex The index of the bufferview referenced by this accessor
     * @param name The name of the accessor
     * @param type The type of the accessor
     * @param componentType The datatype of components in the attribute
     * @param count The number of attributes referenced by this accessor
     * @param byteOffset The offset relative to the start of the bufferView in bytes
     * @param min Minimum value of each component in this attribute
     * @param max Maximum value of each component in this attribute
     * @returns accessor for glTF
     */
    static _CreateAccessor(bufferviewIndex: number, name: string, type: AccessorType, componentType: AccessorComponentType, count: number, byteOffset: Nullable<number>, min: Nullable<number[]>, max: Nullable<number[]>): IAccessor;
    /**
     * Calculates the minimum and maximum values of an array of position floats
     * @param positions Positions array of a mesh
     * @param vertexStart Starting vertex offset to calculate min and max values
     * @param vertexCount Number of vertices to check for min and max values
     * @param convertToRightHandedSystem
     * @returns min number array and max number array
     */
    static _CalculateMinMaxPositions(positions: FloatArray, vertexStart: number, vertexCount: number, convertToRightHandedSystem: boolean): {
        min: number[];
        max: number[];
    };
    /**
     * Converts a new right-handed Vector3
     * @param vector vector3 array
     * @returns right-handed Vector3
     */
    static _GetRightHandedPositionVector3(vector: Vector3): Vector3;
    /**
     * Converts a Vector3 to right-handed
     * @param vector Vector3 to convert to right-handed
     */
    static _GetRightHandedPositionVector3FromRef(vector: Vector3): void;
    /**
     * Converts a three element number array to right-handed
     * @param vector number array to convert to right-handed
     */
    static _GetRightHandedPositionArray3FromRef(vector: number[]): void;
    /**
     * Converts a new right-handed Vector3
     * @param vector vector3 array
     * @returns right-handed Vector3
     */
    static _GetRightHandedNormalVector3(vector: Vector3): Vector3;
    /**
     * Converts a Vector3 to right-handed
     * @param vector Vector3 to convert to right-handed
     */
    static _GetRightHandedNormalVector3FromRef(vector: Vector3): void;
    /**
     * Converts a three element number array to right-handed
     * @param vector number array to convert to right-handed
     */
    static _GetRightHandedNormalArray3FromRef(vector: number[]): void;
    /**
     * Converts a Vector4 to right-handed
     * @param vector Vector4 to convert to right-handed
     */
    static _GetRightHandedVector4FromRef(vector: Vector4): void;
    /**
     * Converts a Vector4 to right-handed
     * @param vector Vector4 to convert to right-handed
     */
    static _GetRightHandedArray4FromRef(vector: number[]): void;
    /**
     * Converts a Quaternion to right-handed
     * @param quaternion Source quaternion to convert to right-handed
     */
    static _GetRightHandedQuaternionFromRef(quaternion: Quaternion): void;
    /**
     * Converts a Quaternion to right-handed
     * @param quaternion Source quaternion to convert to right-handed
     */
    static _GetRightHandedQuaternionArrayFromRef(quaternion: number[]): void;
    static _NormalizeTangentFromRef(tangent: Vector4): void;
    static _GetDataAccessorElementCount(accessorType: AccessorType): 1 | 3 | 2 | 4 | 9 | 16;
}

}
declare module "babylonjs-serializers/glTF/2.0/index" {
export * from "babylonjs-serializers/glTF/2.0/glTFAnimation";
export * from "babylonjs-serializers/glTF/2.0/glTFData";
export * from "babylonjs-serializers/glTF/2.0/glTFExporter";
export * from "babylonjs-serializers/glTF/2.0/glTFExporterExtension";
export * from "babylonjs-serializers/glTF/2.0/glTFMaterialExporter";
export * from "babylonjs-serializers/glTF/2.0/glTFSerializer";
export * from "babylonjs-serializers/glTF/2.0/glTFUtilities";
export * from "babylonjs-serializers/glTF/2.0/Extensions/index";

}
declare module "babylonjs-serializers/glTF/2.0/shaders/textureTransform.fragment" {
/** @hidden */
export const textureTransformPixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-serializers/glTF/glTFFileExporter" {
/** @hidden */
export var __IGLTFExporterExtension: number;
/**
 * Interface for extending the exporter
 * @hidden
 */
export interface IGLTFExporterExtension {
    /**
     * The name of this extension
     */
    readonly name: string;
    /**
     * Defines whether this extension is enabled
     */
    enabled: boolean;
    /**
     * Defines whether this extension is required
     */
    required: boolean;
}

}
declare module "babylonjs-serializers/glTF/index" {
export * from "babylonjs-serializers/glTF/glTFFileExporter";
export * from "babylonjs-serializers/glTF/2.0/index";

}
declare module "babylonjs-serializers/index" {
export * from "babylonjs-serializers/OBJ/index";
export * from "babylonjs-serializers/glTF/index";
export * from "babylonjs-serializers/stl/index";

}
declare module "babylonjs-serializers/legacy/legacy-glTF2Serializer" {
export * from "babylonjs-serializers/glTF/glTFFileExporter";
export * from "babylonjs-serializers/glTF/2.0/index";

}
declare module "babylonjs-serializers/legacy/legacy-objSerializer" {
export * from "babylonjs-serializers/OBJ/index";

}
declare module "babylonjs-serializers/legacy/legacy-stlSerializer" {
export * from "babylonjs-serializers/stl/index";

}
declare module "babylonjs-serializers/legacy/legacy" {
import "babylonjs-serializers/index";
export * from "babylonjs-serializers/legacy/legacy-glTF2Serializer";
export * from "babylonjs-serializers/legacy/legacy-objSerializer";
export * from "babylonjs-serializers/legacy/legacy-stlSerializer";

}
declare module "babylonjs-serializers/OBJ/index" {
export * from "babylonjs-serializers/OBJ/objSerializer";

}
declare module "babylonjs-serializers/OBJ/objSerializer" {
import { Mesh } from "babylonjs/Meshes/mesh";
/**
 * Class for generating OBJ data from a Babylon scene.
 */
export class OBJExport {
    /**
     * Exports the geometry of a Mesh array in .OBJ file format (text)
     * @param mesh defines the list of meshes to serialize
     * @param materials defines if materials should be exported
     * @param matlibname defines the name of the associated mtl file
     * @param globalposition defines if the exported positions are globals or local to the exported mesh
     * @returns the OBJ content
     */
    static OBJ(mesh: Mesh[], materials?: boolean, matlibname?: string, globalposition?: boolean): string;
    /**
     * Exports the material(s) of a mesh in .MTL file format (text)
     * @param mesh defines the mesh to extract the material from
     * @returns the mtl content
     */
    static MTL(mesh: Mesh): string;
}

}
declare module "babylonjs-serializers/stl/index" {
export * from "babylonjs-serializers/stl/stlSerializer";

}
declare module "babylonjs-serializers/stl/stlSerializer" {
import { Mesh } from "babylonjs/Meshes/mesh";
/**
 * Class for generating STL data from a Babylon scene.
 */
export class STLExport {
    /**
     * Exports the geometry of a Mesh array in .STL file format (ASCII)
     * @param meshes list defines the mesh to serialize
     * @param download triggers the automatic download of the file.
     * @param fileName changes the downloads fileName.
     * @param binary changes the STL to a binary type.
     * @param isLittleEndian toggle for binary type exporter.
     * @param doNotBakeTransform toggle if meshes transforms should be baked or not.
     * @returns the STL as UTF8 string
     */
    static CreateSTL(meshes: Mesh[], download?: boolean, fileName?: string, binary?: boolean, isLittleEndian?: boolean, doNotBakeTransform?: boolean): any;
}

}

declare module "babylonjs-serializers" {
    export * from "babylonjs-serializers/legacy/legacy";
}


declare module BABYLON {
    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_mesh_gpu_instancing/README.md)
     */
    export class EXT_mesh_gpu_instancing implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "EXT_mesh_gpu_instancing";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @hidden */
        get wasUsed(): boolean;
        postExportNodeAsync?(context: string, node: Nullable<BABYLON.GLTF2.INode>, babylonNode: Node, nodeMap?: {
            [key: number]: number;
        }, binaryWriter?: _BinaryWriter): Promise<Nullable<BABYLON.GLTF2.INode>>;
        private _buildAccessor;
    }




    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_lights_punctual/README.md)
     */
    export class KHR_lights_punctual implements IGLTFExporterExtensionV2 {
        /** The name of this extension. */
        readonly name = "KHR_lights_punctual";
        /** Defines whether this extension is enabled. */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        /** Reference to the glTF exporter */
        private _exporter;
        private _lights;
        /**
         * @param exporter
         * @hidden
         */
        constructor(exporter: _Exporter);
        /** @hidden */
        dispose(): void;
        /** @hidden */
        get wasUsed(): boolean;
        /** @hidden */
        onExporting(): void;
        /**
         * Define this method to modify the default behavior when exporting a node
         * @param context The context when exporting the node
         * @param node glTF node
         * @param babylonNode BabylonJS node
         * @param nodeMap Node mapping of unique id to glTF node index
         * @returns nullable BABYLON.GLTF2.INode promise
         */
        postExportNodeAsync(context: string, node: Nullable<BABYLON.GLTF2.INode>, babylonNode: Node, nodeMap?: {
            [key: number]: number;
        }): Promise<Nullable<BABYLON.GLTF2.INode>>;
    }


    /**
     * @hidden
     */
    export class KHR_materials_clearcoat implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_clearcoat";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @hidden */
        get wasUsed(): boolean;
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_ior/README.md)
     */
    export class KHR_materials_ior implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_ior";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _wasUsed;
        constructor();
        dispose(): void;
        /** @hidden */
        get wasUsed(): boolean;
        private _isExtensionEnabled;
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * @hidden
     */
    export class KHR_materials_iridescence implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_iridescence";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @hidden */
        get wasUsed(): boolean;
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * @hidden
     */
    export class KHR_materials_sheen implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_sheen";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _wasUsed;
        private _exporter;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @hidden */
        get wasUsed(): boolean;
        postExportMaterialAdditionalTextures(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        postExportMaterialAsync(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_specular/README.md)
     */
    export class KHR_materials_specular implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_specular";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @hidden */
        get wasUsed(): boolean;
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        private _isExtensionEnabled;
        private _hasTexturesExtension;
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_transmission/README.md)
     */
    export class KHR_materials_transmission implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_transmission";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @hidden */
        get wasUsed(): boolean;
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        private _isExtensionEnabled;
        private _hasTexturesExtension;
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * @hidden
     */
    export class KHR_materials_unlit implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_unlit";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _wasUsed;
        constructor();
        /** @hidden */
        get wasUsed(): boolean;
        dispose(): void;
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md)
     */
    export class KHR_materials_volume implements IGLTFExporterExtensionV2 {
        /** Name of this extension */
        readonly name = "KHR_materials_volume";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        private _exporter;
        private _wasUsed;
        constructor(exporter: _Exporter);
        dispose(): void;
        /** @hidden */
        get wasUsed(): boolean;
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        private _isExtensionEnabled;
        private _hasTexturesExtension;
        postExportMaterialAsync?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
    }


    /**
     * @hidden
     */
    export class KHR_texture_transform implements IGLTFExporterExtensionV2 {
        private _recordedTextures;
        /** Name of this extension */
        readonly name = "KHR_texture_transform";
        /** Defines whether this extension is enabled */
        enabled: boolean;
        /** Defines whether this extension is required */
        required: boolean;
        /** Reference to the glTF exporter */
        private _wasUsed;
        constructor();
        dispose(): void;
        /** @hidden */
        get wasUsed(): boolean;
        postExportTexture?(context: string, textureInfo: BABYLON.GLTF2.ITextureInfo, babylonTexture: Texture): void;
        preExportTextureAsync(context: string, babylonTexture: Texture): Promise<Texture>;
        /**
         * Transform the babylon texture by the offset, rotation and scale parameters using a procedural texture
         * @param babylonTexture
         * @param scene
         */
        private _textureTransformTextureAsync;
    }


    /**
     * @hidden
     * Interface to store animation data.
     */
    export interface _IAnimationData {
        /**
         * Keyframe data.
         */
        inputs: number[];
        /**
         * Value data.
         */
        outputs: number[][];
        /**
         * Animation interpolation data.
         */
        samplerInterpolation: BABYLON.GLTF2.AnimationSamplerInterpolation;
        /**
         * Minimum keyframe value.
         */
        inputsMin: number;
        /**
         * Maximum keyframe value.
         */
        inputsMax: number;
    }
    /**
     * @hidden
     */
    export interface _IAnimationInfo {
        /**
         * The target channel for the animation
         */
        animationChannelTargetPath: BABYLON.GLTF2.AnimationChannelTargetPath;
        /**
         * The glTF accessor type for the data.
         */
        dataAccessorType: BABYLON.GLTF2.AccessorType.VEC3 | BABYLON.GLTF2.AccessorType.VEC4 | BABYLON.GLTF2.AccessorType.SCALAR;
        /**
         * Specifies if quaternions should be used.
         */
        useQuaternion: boolean;
    }
    /**
     * @hidden
     * Utility class for generating glTF animation data from BabylonJS.
     */
    export class _GLTFAnimation {
        /**
         * Determine if a node is transformable - ie has properties it should be part of animation of transformation.
         * @param babylonNode the node to test
         * @returns true if can be animated, false otherwise. False if the parameter is null or undefined.
         */
        private static _IsTransformable;
        /**
         * @ignore
         *
         * Creates glTF channel animation from BabylonJS animation.
         * @param babylonTransformNode - BabylonJS mesh.
         * @param animation - animation.
         * @param animationChannelTargetPath - The target animation channel.
         * @param convertToRightHandedSystem - Specifies if the values should be converted to right-handed.
         * @param useQuaternion - Specifies if quaternions are used.
         * @returns nullable IAnimationData
         */
        static _CreateNodeAnimation(babylonTransformNode: Node, animation: Animation, animationChannelTargetPath: BABYLON.GLTF2.AnimationChannelTargetPath, convertToRightHandedSystem: boolean, useQuaternion: boolean, animationSampleRate: number): Nullable<_IAnimationData>;
        private static _DeduceAnimationInfo;
        /**
         * @ignore
         * Create node animations from the transform node animations
         * @param babylonNode
         * @param runtimeGLTFAnimation
         * @param idleGLTFAnimations
         * @param nodeMap
         * @param nodes
         * @param binaryWriter
         * @param bufferViews
         * @param accessors
         * @param convertToRightHandedSystem
         * @param animationSampleRate
         */
        static _CreateNodeAnimationFromNodeAnimations(babylonNode: Node, runtimeGLTFAnimation: BABYLON.GLTF2.IAnimation, idleGLTFAnimations: BABYLON.GLTF2.IAnimation[], nodeMap: {
            [key: number]: number;
        }, nodes: BABYLON.GLTF2.INode[], binaryWriter: _BinaryWriter, bufferViews: BABYLON.GLTF2.IBufferView[], accessors: BABYLON.GLTF2.IAccessor[], convertToRightHandedSystem: boolean, animationSampleRate: number): void;
        /**
         * @ignore
         * Create individual morph animations from the mesh's morph target animation tracks
         * @param babylonNode
         * @param runtimeGLTFAnimation
         * @param idleGLTFAnimations
         * @param nodeMap
         * @param nodes
         * @param binaryWriter
         * @param bufferViews
         * @param accessors
         * @param convertToRightHandedSystem
         * @param animationSampleRate
         */
        static _CreateMorphTargetAnimationFromMorphTargetAnimations(babylonNode: Node, runtimeGLTFAnimation: BABYLON.GLTF2.IAnimation, idleGLTFAnimations: BABYLON.GLTF2.IAnimation[], nodeMap: {
            [key: number]: number;
        }, nodes: BABYLON.GLTF2.INode[], binaryWriter: _BinaryWriter, bufferViews: BABYLON.GLTF2.IBufferView[], accessors: BABYLON.GLTF2.IAccessor[], convertToRightHandedSystem: boolean, animationSampleRate: number): void;
        /**
         * @ignore
         * Create node and morph animations from the animation groups
         * @param babylonScene
         * @param glTFAnimations
         * @param nodeMap
         * @param nodes
         * @param binaryWriter
         * @param bufferViews
         * @param accessors
         * @param convertToRightHandedSystemMap
         * @param animationSampleRate
         */
        static _CreateNodeAndMorphAnimationFromAnimationGroups(babylonScene: Scene, glTFAnimations: BABYLON.GLTF2.IAnimation[], nodeMap: {
            [key: number]: number;
        }, nodes: BABYLON.GLTF2.INode[], binaryWriter: _BinaryWriter, bufferViews: BABYLON.GLTF2.IBufferView[], accessors: BABYLON.GLTF2.IAccessor[], convertToRightHandedSystemMap: {
            [nodeId: number]: boolean;
        }, animationSampleRate: number): void;
        private static _AddAnimation;
        /**
         * Create a baked animation
         * @param babylonTransformNode BabylonJS mesh
         * @param animation BabylonJS animation corresponding to the BabylonJS mesh
         * @param animationChannelTargetPath animation target channel
         * @param minFrame minimum animation frame
         * @param maxFrame maximum animation frame
         * @param fps frames per second of the animation
         * @param sampleRate
         * @param inputs input key frames of the animation
         * @param outputs output key frame data of the animation
         * @param minMaxFrames
         * @param minMaxFrames.min
         * @param minMaxFrames.max
         * @param convertToRightHandedSystem converts the values to right-handed
         * @param useQuaternion specifies if quaternions should be used
         */
        private static _CreateBakedAnimation;
        private static _ConvertFactorToVector3OrQuaternion;
        private static _SetInterpolatedValue;
        /**
         * Creates linear animation from the animation key frames
         * @param babylonTransformNode BabylonJS mesh
         * @param animation BabylonJS animation
         * @param animationChannelTargetPath The target animation channel
         * @param frameDelta The difference between the last and first frame of the animation
         * @param inputs Array to store the key frame times
         * @param outputs Array to store the key frame data
         * @param convertToRightHandedSystem Specifies if the position data should be converted to right handed
         * @param useQuaternion Specifies if quaternions are used in the animation
         */
        private static _CreateLinearOrStepAnimation;
        /**
         * Creates cubic spline animation from the animation key frames
         * @param babylonTransformNode BabylonJS mesh
         * @param animation BabylonJS animation
         * @param animationChannelTargetPath The target animation channel
         * @param frameDelta The difference between the last and first frame of the animation
         * @param inputs Array to store the key frame times
         * @param outputs Array to store the key frame data
         * @param convertToRightHandedSystem Specifies if the position data should be converted to right handed
         * @param useQuaternion Specifies if quaternions are used in the animation
         */
        private static _CreateCubicSplineAnimation;
        private static _GetBasePositionRotationOrScale;
        /**
         * Adds a key frame value
         * @param keyFrame
         * @param animation
         * @param outputs
         * @param animationChannelTargetPath
         * @param babylonTransformNode
         * @param convertToRightHandedSystem
         * @param useQuaternion
         */
        private static _AddKeyframeValue;
        /**
         * Determine the interpolation based on the key frames
         * @param keyFrames
         * @param animationChannelTargetPath
         * @param useQuaternion
         */
        private static _DeduceInterpolation;
        /**
         * Adds an input tangent or output tangent to the output data
         * If an input tangent or output tangent is missing, it uses the zero vector or zero quaternion
         * @param babylonTransformNode
         * @param tangentType Specifies which type of tangent to handle (inTangent or outTangent)
         * @param outputs The animation data by keyframe
         * @param animationChannelTargetPath The target animation channel
         * @param interpolation The interpolation type
         * @param keyFrame The key frame with the animation data
         * @param frameDelta Time difference between two frames used to scale the tangent by the frame delta
         * @param useQuaternion Specifies if quaternions are used
         * @param convertToRightHandedSystem Specifies if the values should be converted to right-handed
         */
        private static _AddSplineTangent;
        /**
         * Get the minimum and maximum key frames' frame values
         * @param keyFrames animation key frames
         * @returns the minimum and maximum key frame value
         */
        private static _CalculateMinMaxKeyFrames;
    }


    /**
     * Class for holding and downloading glTF file data
     */
    export class GLTFData {
        /**
         * Object which contains the file name as the key and its data as the value
         */
        glTFFiles: {
            [fileName: string]: string | Blob;
        };
        /**
         * Initializes the glTF file object
         */
        constructor();
        /**
         * Downloads the glTF data as files based on their names and data
         */
        downloadFiles(): void;
    }


    /**
     * Converts Babylon Scene into glTF 2.0.
     * @hidden
     */
    export class _Exporter {
        /**
         * Stores the glTF to export
         */
        _glTF: BABYLON.GLTF2.IGLTF;
        /**
         * Stores all generated buffer views, which represents views into the main glTF buffer data
         */
        _bufferViews: BABYLON.GLTF2.IBufferView[];
        /**
         * Stores all the generated accessors, which is used for accessing the data within the buffer views in glTF
         */
        _accessors: BABYLON.GLTF2.IAccessor[];
        /**
         * Stores all the generated nodes, which contains transform and/or mesh information per node
         */
        _nodes: BABYLON.GLTF2.INode[];
        /**
         * Stores all the generated glTF scenes, which stores multiple node hierarchies
         */
        private _scenes;
        /**
         * Stores all the generated glTF cameras
         */
        private _cameras;
        /**
         * Stores all the generated mesh information, each containing a set of primitives to render in glTF
         */
        private _meshes;
        /**
         * Stores all the generated material information, which represents the appearance of each primitive
         */
        _materials: BABYLON.GLTF2.IMaterial[];
        _materialMap: {
            [materialID: number]: number;
        };
        /**
         * Stores all the generated texture information, which is referenced by glTF materials
         */
        _textures: BABYLON.GLTF2.ITexture[];
        /**
         * Stores all the generated image information, which is referenced by glTF textures
         */
        _images: BABYLON.GLTF2.IImage[];
        /**
         * Stores all the texture samplers
         */
        _samplers: BABYLON.GLTF2.ISampler[];
        /**
         * Stores all the generated glTF skins
         */
        _skins: BABYLON.GLTF2.ISkin[];
        /**
         * Stores all the generated animation samplers, which is referenced by glTF animations
         */
        /**
         * Stores the animations for glTF models
         */
        private _animations;
        /**
         * Stores the total amount of bytes stored in the glTF buffer
         */
        private _totalByteLength;
        /**
         * Stores a reference to the Babylon scene containing the source geometry and material information
         */
        _babylonScene: Scene;
        /**
         * Stores a map of the image data, where the key is the file name and the value
         * is the image data
         */
        _imageData: {
            [fileName: string]: {
                data: Uint8Array;
                mimeType: BABYLON.GLTF2.ImageMimeType;
            };
        };
        protected _orderedImageData: Array<{
            data: Uint8Array;
            mimeType: BABYLON.GLTF2.ImageMimeType;
        }>;
        /**
         * Stores a map of the unique id of a node to its index in the node array
         */
        _nodeMap: {
            [key: number]: number;
        };
        /**
         * Specifies if the source Babylon scene was left handed, and needed conversion.
         */
        _convertToRightHandedSystem: boolean;
        /**
         * Specifies if a Babylon node should be converted to right-handed on export
         */
        _convertToRightHandedSystemMap: {
            [nodeId: number]: boolean;
        };
        _includeCoordinateSystemConversionNodes: boolean;
        /**
         * Baked animation sample rate
         */
        private _animationSampleRate;
        private _options;
        private _localEngine;
        _glTFMaterialExporter: _GLTFMaterialExporter;
        private _extensions;
        private static _ExtensionNames;
        private static _ExtensionFactories;
        private _applyExtension;
        private _applyExtensions;
        _extensionsPreExportTextureAsync(context: string, babylonTexture: Nullable<Texture>, mimeType: BABYLON.GLTF2.ImageMimeType): Promise<Nullable<BaseTexture>>;
        _extensionsPostExportMeshPrimitiveAsync(context: string, meshPrimitive: BABYLON.GLTF2.IMeshPrimitive, babylonSubMesh: SubMesh, binaryWriter: _BinaryWriter): Promise<Nullable<BABYLON.GLTF2.IMeshPrimitive>>;
        _extensionsPostExportNodeAsync(context: string, node: Nullable<BABYLON.GLTF2.INode>, babylonNode: Node, nodeMap?: {
            [key: number]: number;
        }, binaryWriter?: _BinaryWriter): Promise<Nullable<BABYLON.GLTF2.INode>>;
        _extensionsPostExportMaterialAsync(context: string, material: Nullable<BABYLON.GLTF2.IMaterial>, babylonMaterial: Material): Promise<Nullable<BABYLON.GLTF2.IMaterial>>;
        _extensionsPostExportMaterialAdditionalTextures(context: string, material: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        _extensionsPostExportTextures(context: string, textureInfo: BABYLON.GLTF2.ITextureInfo, babylonTexture: BaseTexture): void;
        private _forEachExtensions;
        private _extensionsOnExporting;
        /**
         * Load glTF serializer extensions
         */
        private _loadExtensions;
        /**
         * Creates a glTF Exporter instance, which can accept optional exporter options
         * @param babylonScene Babylon scene object
         * @param options Options to modify the behavior of the exporter
         */
        constructor(babylonScene?: Nullable<Scene>, options?: IExportOptions);
        dispose(): void;
        get options(): IExportOptions;
        /**
         * Registers a glTF exporter extension
         * @param name Name of the extension to export
         * @param factory The factory function that creates the exporter extension
         */
        static RegisterExtension(name: string, factory: (exporter: _Exporter) => IGLTFExporterExtensionV2): void;
        /**
         * Un-registers an exporter extension
         * @param name The name fo the exporter extension
         * @returns A boolean indicating whether the extension has been un-registered
         */
        static UnregisterExtension(name: string): boolean;
        private _reorderIndicesBasedOnPrimitiveMode;
        /**
         * Reorders the vertex attribute data based on the primitive mode.  This is necessary when indices are not available and the winding order is
         * clock-wise during export to glTF
         * @param submesh BabylonJS submesh
         * @param primitiveMode Primitive mode of the mesh
         * @param sideOrientation the winding order of the submesh
         * @param vertexBufferKind The type of vertex attribute
         * @param meshAttributeArray The vertex attribute data
         * @param byteOffset The offset to the binary data
         * @param binaryWriter The binary data for the glTF file
         * @param convertToRightHandedSystem Converts the values to right-handed
         */
        private _reorderVertexAttributeDataBasedOnPrimitiveMode;
        /**
         * Reorders the vertex attributes in the correct triangle mode order .  This is necessary when indices are not available and the winding order is
         * clock-wise during export to glTF
         * @param submesh BabylonJS submesh
         * @param primitiveMode Primitive mode of the mesh
         * @param sideOrientation the winding order of the submesh
         * @param vertexBufferKind The type of vertex attribute
         * @param meshAttributeArray The vertex attribute data
         * @param byteOffset The offset to the binary data
         * @param binaryWriter The binary data for the glTF file
         * @param convertToRightHandedSystem Converts the values to right-handed
         */
        private _reorderTriangleFillMode;
        /**
         * Reorders the vertex attributes in the correct triangle strip order.  This is necessary when indices are not available and the winding order is
         * clock-wise during export to glTF
         * @param submesh BabylonJS submesh
         * @param primitiveMode Primitive mode of the mesh
         * @param sideOrientation the winding order of the submesh
         * @param vertexBufferKind The type of vertex attribute
         * @param meshAttributeArray The vertex attribute data
         * @param byteOffset The offset to the binary data
         * @param binaryWriter The binary data for the glTF file
         * @param convertToRightHandedSystem Converts the values to right-handed
         */
        private _reorderTriangleStripDrawMode;
        /**
         * Reorders the vertex attributes in the correct triangle fan order.  This is necessary when indices are not available and the winding order is
         * clock-wise during export to glTF
         * @param submesh BabylonJS submesh
         * @param primitiveMode Primitive mode of the mesh
         * @param sideOrientation the winding order of the submesh
         * @param vertexBufferKind The type of vertex attribute
         * @param meshAttributeArray The vertex attribute data
         * @param byteOffset The offset to the binary data
         * @param binaryWriter The binary data for the glTF file
         * @param convertToRightHandedSystem Converts the values to right-handed
         */
        private _reorderTriangleFanMode;
        /**
         * Writes the vertex attribute data to binary
         * @param vertices The vertices to write to the binary writer
         * @param byteOffset The offset into the binary writer to overwrite binary data
         * @param vertexAttributeKind The vertex attribute type
         * @param meshAttributeArray The vertex attribute data
         * @param binaryWriter The writer containing the binary data
         * @param convertToRightHandedSystem Converts the values to right-handed
         */
        private _writeVertexAttributeData;
        /**
         * Writes mesh attribute data to a data buffer
         * Returns the bytelength of the data
         * @param vertexBufferKind Indicates what kind of vertex data is being passed in
         * @param attributeComponentKind
         * @param meshAttributeArray Array containing the attribute data
         * @param stride Specifies the space between data
         * @param binaryWriter The buffer to write the binary data to
         * @param convertToRightHandedSystem Converts the values to right-handed
         * @param babylonTransformNode
         */
        _writeAttributeData(vertexBufferKind: string, attributeComponentKind: BABYLON.GLTF2.AccessorComponentType, meshAttributeArray: FloatArray, stride: number, binaryWriter: _BinaryWriter, convertToRightHandedSystem: boolean, babylonTransformNode: TransformNode): void;
        /**
         * Writes mesh attribute data to a data buffer
         * Returns the bytelength of the data
         * @param vertexBufferKind Indicates what kind of vertex data is being passed in
         * @param attributeComponentKind
         * @param meshPrimitive
         * @param morphTarget
         * @param meshAttributeArray Array containing the attribute data
         * @param morphTargetAttributeArray
         * @param stride Specifies the space between data
         * @param binaryWriter The buffer to write the binary data to
         * @param convertToRightHandedSystem Converts the values to right-handed
         * @param minMax
         */
        writeMorphTargetAttributeData(vertexBufferKind: string, attributeComponentKind: BABYLON.GLTF2.AccessorComponentType, meshPrimitive: SubMesh, morphTarget: MorphTarget, meshAttributeArray: FloatArray, morphTargetAttributeArray: FloatArray, stride: number, binaryWriter: _BinaryWriter, convertToRightHandedSystem: boolean, minMax?: any): void;
        /**
         * Generates glTF json data
         * @param shouldUseGlb Indicates whether the json should be written for a glb file
         * @param glTFPrefix Text to use when prefixing a glTF file
         * @param prettyPrint Indicates whether the json file should be pretty printed (true) or not (false)
         * @returns json data as string
         */
        private _generateJSON;
        /**
         * Generates data for .gltf and .bin files based on the glTF prefix string
         * @param glTFPrefix Text to use when prefixing a glTF file
         * @param dispose Dispose the exporter
         * @returns GLTFData with glTF file data
         */
        _generateGLTFAsync(glTFPrefix: string, dispose?: boolean): Promise<GLTFData>;
        /**
         * Creates a binary buffer for glTF
         * @returns array buffer for binary data
         */
        private _generateBinaryAsync;
        /**
         * Pads the number to a multiple of 4
         * @param num number to pad
         * @returns padded number
         */
        private _getPadding;
        /**
         * @param glTFPrefix
         * @param dispose
         * @hidden
         */
        _generateGLBAsync(glTFPrefix: string, dispose?: boolean): Promise<GLTFData>;
        /**
         * Sets the TRS for each node
         * @param node glTF Node for storing the transformation data
         * @param babylonTransformNode Babylon mesh used as the source for the transformation data
         * @param convertToRightHandedSystem Converts the values to right-handed
         */
        private _setNodeTransformation;
        private _setCameraTransformation;
        private _getVertexBufferFromMesh;
        /**
         * Creates a bufferview based on the vertices type for the Babylon mesh
         * @param kind Indicates the type of vertices data
         * @param attributeComponentKind Indicates the numerical type used to store the data
         * @param babylonTransformNode The Babylon mesh to get the vertices data from
         * @param binaryWriter The buffer to write the bufferview data to
         * @param byteStride
         * @param convertToRightHandedSystem Converts the values to right-handed
         */
        private _createBufferViewKind;
        /**
         * Creates a bufferview based on the vertices type for the Babylon mesh
         * @param babylonSubMesh The Babylon submesh that the morph target is applied to
         * @param meshPrimitive
         * @param babylonMorphTarget the morph target to be exported
         * @param binaryWriter The buffer to write the bufferview data to
         * @param convertToRightHandedSystem Converts the values to right-handed
         */
        private _setMorphTargetAttributes;
        /**
         * The primitive mode of the Babylon mesh
         * @param babylonMesh The BabylonJS mesh
         */
        private _getMeshPrimitiveMode;
        /**
         * Sets the primitive mode of the glTF mesh primitive
         * @param meshPrimitive glTF mesh primitive
         * @param primitiveMode The primitive mode
         */
        private _setPrimitiveMode;
        /**
         * Sets the vertex attribute accessor based of the glTF mesh primitive
         * @param meshPrimitive glTF mesh primitive
         * @param attributeKind vertex attribute
         * @returns boolean specifying if uv coordinates are present
         */
        private _setAttributeKind;
        /**
         * Sets data for the primitive attributes of each submesh
         * @param mesh glTF Mesh object to store the primitive attribute information
         * @param babylonTransformNode Babylon mesh to get the primitive attribute data from
         * @param binaryWriter Buffer to write the attribute data to
         * @param convertToRightHandedSystem Converts the values to right-handed
         */
        private _setPrimitiveAttributesAsync;
        /**
         * Check if the node is used to convert its descendants from a right handed coordinate system to the Babylon scene's coordinate system.
         * @param node The node to check
         * @returns True if the node is used to convert its descendants from right-handed to left-handed. False otherwise
         */
        private _isBabylonCoordinateSystemConvertingNode;
        /**
         * Creates a glTF scene based on the array of meshes
         * Returns the the total byte offset
         * @param babylonScene Babylon scene to get the mesh data from
         * @param binaryWriter Buffer to write binary data to
         */
        private _createSceneAsync;
        /**
         * Getting the nodes and materials that would be exported.
         * @param nodes Babylon transform nodes
         * @returns Array of nodes which would be exported.
         * @returns Set of materials which would be exported.
         */
        private _getExportNodes;
        /**
         * Creates a mapping of Node unique id to node index and handles animations
         * @param babylonScene Babylon Scene
         * @param nodes Babylon transform nodes
         * @param binaryWriter Buffer to write binary data to
         * @returns Node mapping of unique id to index
         */
        private _createNodeMapAndAnimationsAsync;
        /**
         * Creates a glTF node from a Babylon mesh
         * @param babylonNode Source Babylon mesh
         * @param binaryWriter Buffer for storing geometry data
         * @param convertToRightHandedSystem Converts the values to right-handed
         * @returns glTF node
         */
        private _createNodeAsync;
        /**
         * Creates a glTF skin from a Babylon skeleton
         * @param babylonScene Babylon Scene
         * @param nodeMap Babylon transform nodes
         * @param binaryWriter Buffer to write binary data to
         * @returns Node mapping of unique id to index
         */
        private _createSkinsAsync;
    }
    /**
     * @hidden
     *
     * Stores glTF binary data.  If the array buffer byte length is exceeded, it doubles in size dynamically
     */
    export class _BinaryWriter {
        /**
         * Array buffer which stores all binary data
         */
        private _arrayBuffer;
        /**
         * View of the array buffer
         */
        private _dataView;
        /**
         * byte offset of data in array buffer
         */
        private _byteOffset;
        /**
         * Initialize binary writer with an initial byte length
         * @param byteLength Initial byte length of the array buffer
         */
        constructor(byteLength: number);
        /**
         * Resize the array buffer to the specified byte length
         * @param byteLength
         */
        private _resizeBuffer;
        /**
         * Get an array buffer with the length of the byte offset
         * @returns ArrayBuffer resized to the byte offset
         */
        getArrayBuffer(): ArrayBuffer;
        /**
         * Get the byte offset of the array buffer
         * @returns byte offset
         */
        getByteOffset(): number;
        /**
         * Stores an UInt8 in the array buffer
         * @param entry
         * @param byteOffset If defined, specifies where to set the value as an offset.
         */
        setUInt8(entry: number, byteOffset?: number): void;
        /**
         * Stores an UInt16 in the array buffer
         * @param entry
         * @param byteOffset If defined, specifies where to set the value as an offset.
         */
        setUInt16(entry: number, byteOffset?: number): void;
        /**
         * Gets an UInt32 in the array buffer
         * @param byteOffset If defined, specifies where to set the value as an offset.
         */
        getUInt32(byteOffset: number): number;
        getVector3Float32FromRef(vector3: Vector3, byteOffset: number): void;
        setVector3Float32FromRef(vector3: Vector3, byteOffset: number): void;
        getVector4Float32FromRef(vector4: Vector4, byteOffset: number): void;
        setVector4Float32FromRef(vector4: Vector4, byteOffset: number): void;
        /**
         * Stores a Float32 in the array buffer
         * @param entry
         * @param byteOffset
         */
        setFloat32(entry: number, byteOffset?: number): void;
        /**
         * Stores an UInt32 in the array buffer
         * @param entry
         * @param byteOffset If defined, specifies where to set the value as an offset.
         */
        setUInt32(entry: number, byteOffset?: number): void;
        /**
         * Stores an Int16 in the array buffer
         * @param entry
         * @param byteOffset If defined, specifies where to set the value as an offset.
         */
        setInt16(entry: number, byteOffset?: number): void;
        /**
         * Stores a byte in the array buffer
         * @param entry
         * @param byteOffset If defined, specifies where to set the value as an offset.
         */
        setByte(entry: number, byteOffset?: number): void;
    }


    /** @hidden */
    export var __IGLTFExporterExtensionV2: number;
    /**
     * Interface for a glTF exporter extension
     * @hidden
     */
    export interface IGLTFExporterExtensionV2 extends IGLTFExporterExtension, IDisposable {
        /**
         * Define this method to modify the default behavior before exporting a texture
         * @param context The context when loading the asset
         * @param babylonTexture The Babylon.js texture
         * @param mimeType The mime-type of the generated image
         * @returns A promise that resolves with the exported texture
         */
        preExportTextureAsync?(context: string, babylonTexture: Nullable<Texture>, mimeType: BABYLON.GLTF2.ImageMimeType): Promise<Texture>;
        /**
         * Define this method to get notified when a texture info is created
         * @param context The context when loading the asset
         * @param textureInfo The glTF texture info
         * @param babylonTexture The Babylon.js texture
         */
        postExportTexture?(context: string, textureInfo: BABYLON.GLTF2.ITextureInfo, babylonTexture: BaseTexture): void;
        /**
         * Define this method to modify the default behavior when exporting texture info
         * @param context The context when loading the asset
         * @param meshPrimitive glTF mesh primitive
         * @param babylonSubMesh Babylon submesh
         * @param binaryWriter glTF serializer binary writer instance
         * @returns nullable BABYLON.GLTF2.IMeshPrimitive promise
         */
        postExportMeshPrimitiveAsync?(context: string, meshPrimitive: Nullable<BABYLON.GLTF2.IMeshPrimitive>, babylonSubMesh: SubMesh, binaryWriter: _BinaryWriter): Promise<BABYLON.GLTF2.IMeshPrimitive>;
        /**
         * Define this method to modify the default behavior when exporting a node
         * @param context The context when exporting the node
         * @param node glTF node
         * @param babylonNode BabylonJS node
         * @returns nullable BABYLON.GLTF2.INode promise
         */
        postExportNodeAsync?(context: string, node: Nullable<BABYLON.GLTF2.INode>, babylonNode: Node, nodeMap?: {
            [key: number]: number;
        }, binaryWriter?: _BinaryWriter): Promise<Nullable<BABYLON.GLTF2.INode>>;
        /**
         * Define this method to modify the default behavior when exporting a material
         * @param material glTF material
         * @param babylonMaterial BabylonJS material
         * @returns nullable BABYLON.GLTF2.IMaterial promise
         */
        postExportMaterialAsync?(context: string, node: Nullable<BABYLON.GLTF2.IMaterial>, babylonMaterial: Material): Promise<BABYLON.GLTF2.IMaterial>;
        /**
         * Define this method to return additional textures to export from a material
         * @param material glTF material
         * @param babylonMaterial BabylonJS material
         * @returns List of textures
         */
        postExportMaterialAdditionalTextures?(context: string, node: BABYLON.GLTF2.IMaterial, babylonMaterial: Material): BaseTexture[];
        /** Gets a boolean indicating that this extension was used */
        wasUsed: boolean;
        /** Gets a boolean indicating that this extension is required for the file to work */
        required: boolean;
        /**
         * Called after the exporter state changes to EXPORTING
         */
        onExporting?(): void;
    }


    /**
     * Utility methods for working with glTF material conversion properties.  This class should only be used internally
     * @hidden
     */
    export class _GLTFMaterialExporter {
        /**
         * Represents the dielectric specular values for R, G and B
         */
        private static readonly _DielectricSpecular;
        /**
         * Allows the maximum specular power to be defined for material calculations
         */
        private static readonly _MaxSpecularPower;
        /**
         * Mapping to store textures
         */
        private _textureMap;
        /**
         * Numeric tolerance value
         */
        private static readonly _Epsilon;
        /**
         * Reference to the glTF Exporter
         */
        private _exporter;
        constructor(exporter: _Exporter);
        /**
         * Specifies if two colors are approximately equal in value
         * @param color1 first color to compare to
         * @param color2 second color to compare to
         * @param epsilon threshold value
         */
        private static _FuzzyEquals;
        /**
         * Gets the materials from a Babylon scene and converts them to glTF materials
         * @param exportMaterials
         * @param mimeType texture mime type
         * @param hasTextureCoords specifies if texture coordinates are present on the material
         */
        _convertMaterialsToGLTFAsync(exportMaterials: Set<Material>, mimeType: BABYLON.GLTF2.ImageMimeType, hasTextureCoords: boolean): Promise<void>;
        /**
         * Makes a copy of the glTF material without the texture parameters
         * @param originalMaterial original glTF material
         * @returns glTF material without texture parameters
         */
        _stripTexturesFromMaterial(originalMaterial: BABYLON.GLTF2.IMaterial): BABYLON.GLTF2.IMaterial;
        /**
         * Specifies if the material has any texture parameters present
         * @param material glTF Material
         * @returns boolean specifying if texture parameters are present
         */
        _hasTexturesPresent(material: BABYLON.GLTF2.IMaterial): boolean;
        _getTextureInfo(babylonTexture: Nullable<BaseTexture>): Nullable<BABYLON.GLTF2.ITextureInfo>;
        /**
         * Converts a Babylon StandardMaterial to a glTF Metallic Roughness Material
         * @param babylonStandardMaterial
         * @returns glTF Metallic Roughness Material representation
         */
        _convertToGLTFPBRMetallicRoughness(babylonStandardMaterial: StandardMaterial): BABYLON.GLTF2.IMaterialPbrMetallicRoughness;
        /**
         * Computes the metallic factor
         * @param diffuse diffused value
         * @param specular specular value
         * @param oneMinusSpecularStrength one minus the specular strength
         * @returns metallic value
         */
        static _SolveMetallic(diffuse: number, specular: number, oneMinusSpecularStrength: number): number;
        /**
         * Sets the glTF alpha mode to a glTF material from the Babylon Material
         * @param glTFMaterial glTF material
         * @param babylonMaterial Babylon material
         */
        private static _SetAlphaMode;
        /**
         * Converts a Babylon Standard Material to a glTF Material
         * @param babylonStandardMaterial BJS Standard Material
         * @param mimeType mime type to use for the textures
         * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
         */
        _convertStandardMaterialAsync(babylonStandardMaterial: StandardMaterial, mimeType: BABYLON.GLTF2.ImageMimeType, hasTextureCoords: boolean): Promise<BABYLON.GLTF2.IMaterial>;
        private _finishMaterial;
        /**
         * Converts an image typed array buffer to a base64 image
         * @param buffer typed array buffer
         * @param width width of the image
         * @param height height of the image
         * @param mimeType mimetype of the image
         * @returns base64 image string
         */
        private _createBase64FromCanvasAsync;
        /**
         * Generates a white texture based on the specified width and height
         * @param width width of the texture in pixels
         * @param height height of the texture in pixels
         * @param scene babylonjs scene
         * @returns white texture
         */
        private _createWhiteTexture;
        /**
         * Resizes the two source textures to the same dimensions.  If a texture is null, a default white texture is generated.  If both textures are null, returns null
         * @param texture1 first texture to resize
         * @param texture2 second texture to resize
         * @param scene babylonjs scene
         * @returns resized textures or null
         */
        private _resizeTexturesToSameDimensions;
        /**
         * Converts an array of pixels to a Float32Array
         * Throws an error if the pixel format is not supported
         * @param pixels - array buffer containing pixel values
         * @returns Float32 of pixels
         */
        private _convertPixelArrayToFloat32;
        /**
         * Convert Specular Glossiness Textures to Metallic Roughness
         * See link below for info on the material conversions from PBR Metallic/Roughness and Specular/Glossiness
         * @link https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness/examples/convert-between-workflows-bjs/js/babylon.pbrUtilities.js
         * @param diffuseTexture texture used to store diffuse information
         * @param specularGlossinessTexture texture used to store specular and glossiness information
         * @param factors specular glossiness material factors
         * @param mimeType the mime type to use for the texture
         * @returns pbr metallic roughness interface or null
         */
        private _convertSpecularGlossinessTexturesToMetallicRoughnessAsync;
        /**
         * Converts specular glossiness material properties to metallic roughness
         * @param specularGlossiness interface with specular glossiness material properties
         * @returns interface with metallic roughness material properties
         */
        private _convertSpecularGlossinessToMetallicRoughness;
        /**
         * Calculates the surface reflectance, independent of lighting conditions
         * @param color Color source to calculate brightness from
         * @returns number representing the perceived brightness, or zero if color is undefined
         */
        private _getPerceivedBrightness;
        /**
         * Returns the maximum color component value
         * @param color
         * @returns maximum color component value, or zero if color is null or undefined
         */
        private _getMaxComponent;
        /**
         * Convert a PBRMaterial (Metallic/Roughness) to Metallic Roughness factors
         * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
         * @param mimeType mime type to use for the textures
         * @param glTFPbrMetallicRoughness glTF PBR Metallic Roughness interface
         * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
         * @returns glTF PBR Metallic Roughness factors
         */
        private _convertMetalRoughFactorsToMetallicRoughnessAsync;
        private _getGLTFTextureSampler;
        private _getGLTFTextureWrapMode;
        private _getGLTFTextureWrapModesSampler;
        /**
         * Convert a PBRMaterial (Specular/Glossiness) to Metallic Roughness factors
         * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
         * @param mimeType mime type to use for the textures
         * @param glTFPbrMetallicRoughness glTF PBR Metallic Roughness interface
         * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
         * @returns glTF PBR Metallic Roughness factors
         */
        private _convertSpecGlossFactorsToMetallicRoughnessAsync;
        /**
         * Converts a Babylon PBR Base Material to a glTF Material
         * @param babylonPBRMaterial BJS PBR Base Material
         * @param mimeType mime type to use for the textures
         * @param hasTextureCoords specifies if texture coordinates are present on the submesh to determine if textures should be applied
         */
        _convertPBRMaterialAsync(babylonPBRMaterial: PBRBaseMaterial, mimeType: BABYLON.GLTF2.ImageMimeType, hasTextureCoords: boolean): Promise<BABYLON.GLTF2.IMaterial>;
        private _setMetallicRoughnessPbrMaterial;
        private _getPixelsFromTexture;
        /**
         * Extracts a texture from a Babylon texture into file data and glTF data
         * @param babylonTexture Babylon texture to extract
         * @param mimeType Mime Type of the babylonTexture
         * @return glTF texture info, or null if the texture format is not supported
         */
        _exportTextureAsync(babylonTexture: BaseTexture, mimeType: BABYLON.GLTF2.ImageMimeType): Promise<Nullable<BABYLON.GLTF2.ITextureInfo>>;
        _exportTextureInfoAsync(babylonTexture: BaseTexture, mimeType: BABYLON.GLTF2.ImageMimeType): Promise<Nullable<BABYLON.GLTF2.ITextureInfo>>;
        /**
         * Builds a texture from base64 string
         * @param base64Texture base64 texture string
         * @param baseTextureName Name to use for the texture
         * @param mimeType image mime type for the texture
         * @param texCoordIndex
         * @param samplerIndex
         * @returns glTF texture info, or null if the texture format is not supported
         */
        private _getTextureInfoFromBase64;
    }


    /**
     * Holds a collection of exporter options and parameters
     */
    export interface IExportOptions {
        /**
         * Function which indicates whether a babylon node should be exported or not
         * @param node source Babylon node. It is used to check whether it should be exported to glTF or not
         * @returns boolean, which indicates whether the node should be exported (true) or not (false)
         */
        shouldExportNode?(node: Node): boolean;
        /**
         * Function used to extract the part of node's metadata that will be exported into glTF node extras
         * @param metadata source metadata to read from
         * @returns the data to store to glTF node extras
         */
        metadataSelector?(metadata: any): any;
        /**
         * The sample rate to bake animation curves
         */
        animationSampleRate?: number;
        /**
         * Begin serialization without waiting for the scene to be ready
         */
        exportWithoutWaitingForScene?: boolean;
        /**
         * Indicates if unused vertex uv attributes should be included in export
         */
        exportUnusedUVs?: boolean;
        /**
         * Indicates if coordinate system swapping root nodes should be included in export
         */
        includeCoordinateSystemConversionNodes?: boolean;
    }
    /**
     * Class for generating glTF data from a Babylon scene.
     */
    export class GLTF2Export {
        /**
         * Exports the geometry of the scene to .gltf file format asynchronously
         * @param scene Babylon scene with scene hierarchy information
         * @param filePrefix File prefix to use when generating the glTF file
         * @param options Exporter options
         * @returns Returns an object with a .gltf file and associates texture names
         * as keys and their data and paths as values
         */
        static GLTFAsync(scene: Scene, filePrefix: string, options?: IExportOptions): Promise<GLTFData>;
        private static _PreExportAsync;
        private static _PostExportAsync;
        /**
         * Exports the geometry of the scene to .glb file format asychronously
         * @param scene Babylon scene with scene hierarchy information
         * @param filePrefix File prefix to use when generating glb file
         * @param options Exporter options
         * @returns Returns an object with a .glb filename as key and data as value
         */
        static GLBAsync(scene: Scene, filePrefix: string, options?: IExportOptions): Promise<GLTFData>;
    }


    /**
     * @hidden
     */
    export class _GLTFUtilities {
        /**
         * Creates a buffer view based on the supplied arguments
         * @param bufferIndex index value of the specified buffer
         * @param byteOffset byte offset value
         * @param byteLength byte length of the bufferView
         * @param byteStride byte distance between conequential elements
         * @param name name of the buffer view
         * @returns bufferView for glTF
         */
        static _CreateBufferView(bufferIndex: number, byteOffset: number, byteLength: number, byteStride?: number, name?: string): BABYLON.GLTF2.IBufferView;
        /**
         * Creates an accessor based on the supplied arguments
         * @param bufferviewIndex The index of the bufferview referenced by this accessor
         * @param name The name of the accessor
         * @param type The type of the accessor
         * @param componentType The datatype of components in the attribute
         * @param count The number of attributes referenced by this accessor
         * @param byteOffset The offset relative to the start of the bufferView in bytes
         * @param min Minimum value of each component in this attribute
         * @param max Maximum value of each component in this attribute
         * @returns accessor for glTF
         */
        static _CreateAccessor(bufferviewIndex: number, name: string, type: BABYLON.GLTF2.AccessorType, componentType: BABYLON.GLTF2.AccessorComponentType, count: number, byteOffset: Nullable<number>, min: Nullable<number[]>, max: Nullable<number[]>): BABYLON.GLTF2.IAccessor;
        /**
         * Calculates the minimum and maximum values of an array of position floats
         * @param positions Positions array of a mesh
         * @param vertexStart Starting vertex offset to calculate min and max values
         * @param vertexCount Number of vertices to check for min and max values
         * @param convertToRightHandedSystem
         * @returns min number array and max number array
         */
        static _CalculateMinMaxPositions(positions: FloatArray, vertexStart: number, vertexCount: number, convertToRightHandedSystem: boolean): {
            min: number[];
            max: number[];
        };
        /**
         * Converts a new right-handed Vector3
         * @param vector vector3 array
         * @returns right-handed Vector3
         */
        static _GetRightHandedPositionVector3(vector: Vector3): Vector3;
        /**
         * Converts a Vector3 to right-handed
         * @param vector Vector3 to convert to right-handed
         */
        static _GetRightHandedPositionVector3FromRef(vector: Vector3): void;
        /**
         * Converts a three element number array to right-handed
         * @param vector number array to convert to right-handed
         */
        static _GetRightHandedPositionArray3FromRef(vector: number[]): void;
        /**
         * Converts a new right-handed Vector3
         * @param vector vector3 array
         * @returns right-handed Vector3
         */
        static _GetRightHandedNormalVector3(vector: Vector3): Vector3;
        /**
         * Converts a Vector3 to right-handed
         * @param vector Vector3 to convert to right-handed
         */
        static _GetRightHandedNormalVector3FromRef(vector: Vector3): void;
        /**
         * Converts a three element number array to right-handed
         * @param vector number array to convert to right-handed
         */
        static _GetRightHandedNormalArray3FromRef(vector: number[]): void;
        /**
         * Converts a Vector4 to right-handed
         * @param vector Vector4 to convert to right-handed
         */
        static _GetRightHandedVector4FromRef(vector: Vector4): void;
        /**
         * Converts a Vector4 to right-handed
         * @param vector Vector4 to convert to right-handed
         */
        static _GetRightHandedArray4FromRef(vector: number[]): void;
        /**
         * Converts a Quaternion to right-handed
         * @param quaternion Source quaternion to convert to right-handed
         */
        static _GetRightHandedQuaternionFromRef(quaternion: Quaternion): void;
        /**
         * Converts a Quaternion to right-handed
         * @param quaternion Source quaternion to convert to right-handed
         */
        static _GetRightHandedQuaternionArrayFromRef(quaternion: number[]): void;
        static _NormalizeTangentFromRef(tangent: Vector4): void;
        static _GetDataAccessorElementCount(accessorType: BABYLON.GLTF2.AccessorType): 1 | 3 | 2 | 4 | 9 | 16;
    }




    /** @hidden */
    export var textureTransformPixelShader: {
        name: string;
        shader: string;
    };


    /** @hidden */
    export var __IGLTFExporterExtension: number;
    /**
     * Interface for extending the exporter
     * @hidden
     */
    export interface IGLTFExporterExtension {
        /**
         * The name of this extension
         */
        readonly name: string;
        /**
         * Defines whether this extension is enabled
         */
        enabled: boolean;
        /**
         * Defines whether this extension is required
         */
        required: boolean;
    }














    /**
     * Class for generating OBJ data from a Babylon scene.
     */
    export class OBJExport {
        /**
         * Exports the geometry of a Mesh array in .OBJ file format (text)
         * @param mesh defines the list of meshes to serialize
         * @param materials defines if materials should be exported
         * @param matlibname defines the name of the associated mtl file
         * @param globalposition defines if the exported positions are globals or local to the exported mesh
         * @returns the OBJ content
         */
        static OBJ(mesh: Mesh[], materials?: boolean, matlibname?: string, globalposition?: boolean): string;
        /**
         * Exports the material(s) of a mesh in .MTL file format (text)
         * @param mesh defines the mesh to extract the material from
         * @returns the mtl content
         */
        static MTL(mesh: Mesh): string;
    }




    /**
     * Class for generating STL data from a Babylon scene.
     */
    export class STLExport {
        /**
         * Exports the geometry of a Mesh array in .STL file format (ASCII)
         * @param meshes list defines the mesh to serialize
         * @param download triggers the automatic download of the file.
         * @param fileName changes the downloads fileName.
         * @param binary changes the STL to a binary type.
         * @param isLittleEndian toggle for binary type exporter.
         * @param doNotBakeTransform toggle if meshes transforms should be baked or not.
         * @returns the STL as UTF8 string
         */
        static CreateSTL(meshes: Mesh[], download?: boolean, fileName?: string, binary?: boolean, isLittleEndian?: boolean, doNotBakeTransform?: boolean): any;
    }



}


