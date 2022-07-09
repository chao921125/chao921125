
declare module "babylonjs-inspector/components/actionTabs/actionTabsComponent" {
import * as React from "react";
import { Scene } from "babylonjs/scene";
import { DebugLayerTab } from "babylonjs/Debug/debugLayer";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import "babylonjs-inspector/components/actionTabs/actionTabs.scss";
interface IActionTabsComponentProps {
    scene?: Scene;
    noCommands?: boolean;
    noHeader?: boolean;
    noExpand?: boolean;
    noClose?: boolean;
    popupMode?: boolean;
    onPopup?: () => void;
    onClose?: () => void;
    globalState?: GlobalState;
    initialTab?: DebugLayerTab;
}
export class ActionTabsComponent extends React.Component<IActionTabsComponentProps, {
    selectedEntity: any;
    selectedIndex: number;
}> {
    private _onSelectionChangeObserver;
    private _onTabChangedObserver;
    private _once;
    constructor(props: IActionTabsComponentProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    changeSelectedTab(index: number): void;
    renderContent(): JSX.Element | null;
    onClose(): void;
    onPopup(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/lines/meshPickerComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { Scene } from "babylonjs/scene";
interface IMeshPickerComponentProps {
    globalState: GlobalState;
    target: any;
    property: string;
    scene: Scene;
    label: string;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class MeshPickerComponent extends React.Component<IMeshPickerComponentProps> {
    constructor(props: IMeshPickerComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/lines/quaternionLineComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { Quaternion, Vector3 } from "babylonjs/Maths/math.vector";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IQuaternionLineComponentProps {
    label: string;
    target: any;
    useEuler?: boolean;
    propertyName: string;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    lockObject: LockObject;
}
export class QuaternionLineComponent extends React.Component<IQuaternionLineComponentProps, {
    isExpanded: boolean;
    value: Quaternion;
    eulerValue: Vector3;
}> {
    private _localChange;
    constructor(props: IQuaternionLineComponentProps);
    _checkRoundCircle(a: number, b: number): boolean;
    shouldComponentUpdate(nextProps: IQuaternionLineComponentProps, nextState: {
        isExpanded: boolean;
        value: Quaternion;
        eulerValue: Vector3;
    }): boolean;
    switchExpandState(): void;
    raiseOnPropertyChanged(currentValue: Quaternion, previousValue: Quaternion): void;
    updateQuaternion(): void;
    updateStateX(value: number): void;
    updateStateY(value: number): void;
    updateStateZ(value: number): void;
    updateStateW(value: number): void;
    updateQuaternionFromEuler(): void;
    updateStateEulerX(value: number): void;
    updateStateEulerY(value: number): void;
    updateStateEulerZ(value: number): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/lines/textureLineComponent" {
import * as React from "react";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { TextureChannelsToDisplay } from "babylonjs-inspector/textureHelper";
interface ITextureLineComponentProps {
    texture: BaseTexture;
    width: number;
    height: number;
    globalState?: GlobalState;
    hideChannelSelect?: boolean;
}
export class TextureLineComponent extends React.Component<ITextureLineComponentProps, {
    channels: TextureChannelsToDisplay;
    face: number;
}> {
    private _canvasRef;
    private static _TextureChannelStates;
    constructor(props: ITextureLineComponentProps);
    shouldComponentUpdate(nextProps: ITextureLineComponentProps, nextState: {
        channels: TextureChannelsToDisplay;
        face: number;
    }): boolean;
    componentDidMount(): void;
    componentDidUpdate(): void;
    updatePreview(): Promise<void>;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/lines/textureLinkLineComponent" {
import * as React from "react";
import { Nullable } from "babylonjs/types";
import { Observable } from "babylonjs/Misc/observable";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
import { Material } from "babylonjs/Materials/material";
export interface ITextureLinkLineComponentProps {
    label: string;
    texture: Nullable<BaseTexture>;
    material?: Material;
    onSelectionChangedObservable?: Observable<any>;
    onDebugSelectionChangeObservable?: Observable<TextureLinkLineComponent>;
    propertyName?: string;
    onTextureCreated?: (texture: BaseTexture) => void;
    customDebugAction?: (state: boolean) => void;
    onTextureRemoved?: () => void;
}
export class TextureLinkLineComponent extends React.Component<ITextureLinkLineComponentProps, {
    isDebugSelected: boolean;
}> {
    private _onDebugSelectionChangeObserver;
    constructor(props: ITextureLinkLineComponentProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    debugTexture(): void;
    onLink(): void;
    updateTexture(file: File): void;
    removeTexture(): void;
    render(): JSX.Element | null;
}

}
declare module "babylonjs-inspector/components/actionTabs/paneComponent" {
import * as React from "react";

import { Observable } from "babylonjs/Misc/observable";
import { Scene } from "babylonjs/scene";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { GlobalState } from "babylonjs-inspector/components/globalState";
export interface IPaneComponentProps {
    title: string;
    icon: any;
    scene: Scene;
    selectedEntity?: any;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    globalState: GlobalState;
}
export class PaneComponent extends React.Component<IPaneComponentProps, {
    tag: any;
}> {
    constructor(props: IPaneComponentProps);
    render(): JSX.Element | null;
}

}
declare module "babylonjs-inspector/components/actionTabs/tabs/debugTabComponent" {
/// <reference types="react" />
import { IPaneComponentProps } from "babylonjs-inspector/components/actionTabs/paneComponent";
import { PaneComponent } from "babylonjs-inspector/components/actionTabs/paneComponent";
import "babylonjs/Physics/physicsEngineComponent";
export class DebugTabComponent extends PaneComponent {
    private _physicsViewersEnabled;
    constructor(props: IPaneComponentProps);
    switchPhysicsViewers(): void;
    render(): JSX.Element | null;
}

}
declare module "babylonjs-inspector/components/actionTabs/tabs/gradientNodePropertyComponent" {
import * as React from "react";
import { GradientBlockColorStep } from "babylonjs/Materials/Node/Blocks/gradientBlock";
import { IPropertyComponentProps } from "babylonjs-inspector/components/actionTabs/tabs/propertyComponentProps";
export class GradientPropertyTabComponent extends React.Component<IPropertyComponentProps> {
    private _gradientBlock;
    constructor(props: IPropertyComponentProps);
    forceRebuild(): void;
    deleteStep(step: GradientBlockColorStep): void;
    copyStep(step: GradientBlockColorStep): void;
    addNewStep(): void;
    checkForReOrder(): void;
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/components/actionTabs/tabs/gradientStepComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { GradientBlockColorStep } from "babylonjs/Materials/Node/Blocks/gradientBlock";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IGradientStepComponentProps {
    globalState: GlobalState;
    step: GradientBlockColorStep;
    lineIndex: number;
    lockObject?: LockObject;
    onDelete: () => void;
    onUpdateStep: () => void;
    onCheckForReOrder: () => void;
    onCopy?: () => void;
}
export class GradientStepComponent extends React.Component<IGradientStepComponentProps, {
    gradient: number;
}> {
    constructor(props: IGradientStepComponentProps);
    updateColor(color: string): void;
    updateStep(gradient: number): void;
    onPointerUp(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/performanceViewer/performancePlayheadButtonComponent" {
import { Observable } from "babylonjs/Misc/observable";
import * as React from "react";
interface IPerformancePlayheadButtonProps {
    returnToPlayhead: Observable<void>;
}
export const PerformancePlayheadButtonComponent: React.FC<IPerformancePlayheadButtonProps>;
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/performanceViewer/performanceViewerComponent" {
import { Scene } from "babylonjs/scene";
import * as React from "react";
import "babylonjs/Misc/PerformanceViewer/performanceViewerSceneExtension";
import "babylonjs-inspector/components/actionTabs/tabs/performanceViewer/scss/performanceViewer.scss";
interface IPerformanceViewerComponentProps {
    scene: Scene;
}
export enum IPerfMetadataCategory {
    Count = "Count",
    FrameSteps = "Frame Steps Duration"
}
export const PerformanceViewerComponent: React.FC<IPerformanceViewerComponentProps>;
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/performanceViewer/performanceViewerPopupComponent" {
import * as React from "react";
import { Scene } from "babylonjs/scene";
import { Observable } from "babylonjs/Misc/observable";
import { PerformanceViewerCollector } from "babylonjs/Misc/PerformanceViewer/performanceViewerCollector";
import { IPerfLayoutSize } from "babylonjs-inspector/components/graph/graphSupportingTypes";
interface IPerformanceViewerPopupComponentProps {
    scene: Scene;
    layoutObservable: Observable<IPerfLayoutSize>;
    returnToLiveObservable: Observable<void>;
    performanceCollector: PerformanceViewerCollector;
    initialGraphSize?: {
        width: number;
        height: number;
    };
}
export const PerformanceViewerPopupComponent: React.FC<IPerformanceViewerPopupComponentProps>;
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/performanceViewer/performanceViewerSidebarComponent" {
/// <reference types="react" />
import { PerformanceViewerCollector } from "babylonjs/Misc/PerformanceViewer/performanceViewerCollector";
import { Observable } from "babylonjs/Misc/observable";
import { IVisibleRangeChangedObservableProps } from "babylonjs-inspector/components/graph/graphSupportingTypes";
interface IPerformanceViewerSidebarComponentProps {
    collector: PerformanceViewerCollector;
    onVisibleRangeChangedObservable?: Observable<IVisibleRangeChangedObservableProps>;
}
export const PerformanceViewerSidebarComponent: (props: IPerformanceViewerSidebarComponentProps) => JSX.Element;
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyComponentProps" {
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { NodeMaterialBlock } from "babylonjs/Materials/Node/nodeMaterialBlock";
export interface IPropertyComponentProps {
    globalState: GlobalState;
    block: NodeMaterialBlock;
}

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/animationGroupPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { AnimationGroup } from "babylonjs/Animations/animationGroup";
import { Scene } from "babylonjs/scene";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IAnimationGroupGridComponentProps {
    globalState: GlobalState;
    animationGroup: AnimationGroup;
    scene: Scene;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class AnimationGroupGridComponent extends React.Component<IAnimationGroupGridComponentProps, {
    playButtonText: string;
    currentFrame: number;
}> {
    private _onAnimationGroupPlayObserver;
    private _onAnimationGroupPauseObserver;
    private _onBeforeRenderObserver;
    private _timelineRef;
    private _animationCurveEditorContext;
    constructor(props: IAnimationGroupGridComponentProps);
    disconnect(animationGroup: AnimationGroup): void;
    connect(animationGroup: AnimationGroup): void;
    updateCurrentFrame(animationGroup: AnimationGroup): void;
    shouldComponentUpdate(nextProps: IAnimationGroupGridComponentProps): boolean;
    componentWillUnmount(): void;
    playOrPause(): void;
    onCurrentFrameChange(value: number): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/animationPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { Scene } from "babylonjs/scene";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { IAnimatable } from "babylonjs/Animations/animatable.interface";
interface IAnimationGridComponentProps {
    globalState: GlobalState;
    animatable: IAnimatable;
    scene: Scene;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class AnimationGridComponent extends React.Component<IAnimationGridComponentProps, {
    currentFrame: number;
}> {
    private _animations;
    private _ranges;
    private _mainAnimatable;
    private _onBeforeRenderObserver;
    private _isPlaying;
    private _timelineRef;
    private _animationCurveEditorContext;
    private _animationControl;
    constructor(props: IAnimationGridComponentProps);
    playOrPause(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onCurrentFrameChange(value: number): void;
    onChangeFromOrTo(): void;
    componentDidUpdate(prevProps: IAnimationGridComponentProps): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/animationCurveEditorComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
import "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/scss/curveEditor.scss";
interface IAnimationCurveEditorComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface IAnimationCurveEditorComponentState {
    isOpen: boolean;
}
export class AnimationCurveEditorComponent extends React.Component<IAnimationCurveEditorComponentProps, IAnimationCurveEditorComponentState> {
    constructor(props: IAnimationCurveEditorComponentProps);
    onCloseAnimationCurveEditor(window: Window | null): void;
    shouldComponentUpdate(newProps: IAnimationCurveEditorComponentProps, newState: IAnimationCurveEditorComponentState): boolean;
    private _onKeyDown;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/bottomBar/bottomBarComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
import "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/scss/bottomBar.scss";
interface IBottomBarComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface IBottomBarComponentState {
    clipLength: string;
}
export class BottomBarComponent extends React.Component<IBottomBarComponentProps, IBottomBarComponentState> {
    private _onAnimationsLoadedObserver;
    private _onActiveAnimationChangedObserver;
    private _onClipLengthIncreasedObserver;
    private _onClipLengthDecreasedObserver;
    constructor(props: IBottomBarComponentProps);
    private _changeClipLength;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/bottomBar/mediaPlayerComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface IMediaPlayerComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface IMediaPlayerComponentState {
}
export class MediaPlayerComponent extends React.Component<IMediaPlayerComponentProps, IMediaPlayerComponentState> {
    private _isMounted;
    constructor(props: IMediaPlayerComponentProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private _onFirstKey;
    private _onPrevKey;
    private _onRewind;
    private _onForward;
    private _onPrevFrame;
    private _onNextFrame;
    private _onNextKey;
    private _onEndKey;
    private _onStop;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/bottomBar/rangeSelectorComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface IRangeSelectorComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface IRangeSelectorComponentState {
}
export class RangeSelectorComponent extends React.Component<IRangeSelectorComponentProps, IRangeSelectorComponentState> {
    private _rangeHost;
    private _rangeScrollbarHost;
    private _viewWidth;
    private _pointerIsDown;
    private _minFrame;
    private _maxFrame;
    private _leftHandleIsActive;
    private _bothHandleIsActive;
    private _currentOffset;
    private _currentFrom;
    private _currentTo;
    constructor(props: IRangeSelectorComponentProps);
    private _computeSizes;
    private _onPointerDown;
    private _onPointerMove;
    private _updateLimits;
    private _onPointerUp;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context" {
import { Nullable } from "babylonjs/types";
import { Animation } from "babylonjs/Animations/animation";
import { Observable } from "babylonjs/Misc/observable";
import { KeyPointComponent } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/graph/keyPoint";
import { Scene } from "babylonjs/scene";
import { IAnimatable } from "babylonjs/Animations/animatable.interface";
import { AnimationGroup, TargetedAnimation } from "babylonjs/Animations/animationGroup";
import { AnimationKeyInterpolation } from "babylonjs/Animations/animationKey";
export interface IActiveAnimationChangedOptions {
    evaluateKeys?: boolean;
    frame?: boolean;
    range?: boolean;
}
export class Context {
    title: string;
    animations: Nullable<Animation[] | TargetedAnimation[]>;
    scene: Scene;
    target: Nullable<IAnimatable>;
    rootAnimationGroup: Nullable<AnimationGroup>;
    activeAnimations: Animation[];
    activeChannels: {
        [key: number]: string;
    };
    activeKeyPoints: Nullable<KeyPointComponent[]>;
    mainKeyPoint: Nullable<KeyPointComponent>;
    snippetId: string;
    useTargetAnimations: boolean;
    activeFrame: number;
    fromKey: number;
    toKey: number;
    useExistingPlayRange: boolean;
    forwardAnimation: boolean;
    isPlaying: boolean;
    clipLength: number;
    referenceMinFrame: number;
    referenceMaxFrame: number;
    focusedInput: boolean;
    onActiveAnimationChanged: Observable<IActiveAnimationChangedOptions>;
    onActiveKeyPointChanged: Observable<void>;
    onHostWindowResized: Observable<void>;
    onSelectAllKeys: Observable<void>;
    onActiveKeyFrameChanged: Observable<number>;
    onFrameSet: Observable<number>;
    onFrameManuallyEntered: Observable<number>;
    onMainKeyPointSet: Observable<void>;
    onMainKeyPointMoved: Observable<void>;
    onValueSet: Observable<number>;
    onValueManuallyEntered: Observable<number>;
    onFrameRequired: Observable<void>;
    onCreateOrUpdateKeyPointRequired: Observable<void>;
    onFlattenTangentRequired: Observable<void>;
    onLinearTangentRequired: Observable<void>;
    onBreakTangentRequired: Observable<void>;
    onUnifyTangentRequired: Observable<void>;
    onStepTangentRequired: Observable<void>;
    onDeleteAnimation: Observable<Animation>;
    onGraphMoved: Observable<number>;
    onGraphScaled: Observable<number>;
    onRangeUpdated: Observable<void>;
    onMoveToFrameRequired: Observable<number>;
    onAnimationStateChanged: Observable<void>;
    onDeleteKeyActiveKeyPoints: Observable<void>;
    onSelectionRectangleMoved: Observable<DOMRect>;
    onAnimationsLoaded: Observable<void>;
    onEditAnimationRequired: Observable<Animation>;
    onEditAnimationUIClosed: Observable<void>;
    onClipLengthIncreased: Observable<number>;
    onClipLengthDecreased: Observable<number>;
    onInterpolationModeSet: Observable<{
        keyId: number;
        value: AnimationKeyInterpolation;
    }>;
    onSelectToActivated: Observable<{
        from: number;
        to: number;
    }>;
    onRangeFrameBarResized: Observable<number>;
    onPlayheadMoved: Observable<number>;
    lockLastFrameValue: boolean;
    lockLastFrameFrame: boolean;
    onActiveKeyDataChanged: Observable<number>;
    prepare(): void;
    play(forward: boolean): void;
    stop(): void;
    moveToFrame(frame: number): void;
    refreshTarget(): void;
    clearSelection(): void;
    enableChannel(animation: Animation, color: string): void;
    disableChannel(animation: Animation): void;
    isChannelEnabled(animation: Animation, color: string): boolean;
    getActiveChannel(animation: Animation): string;
    resetAllActiveChannels(): void;
    getAnimationSortIndex(animation: Animation): number;
    getPrevKey(): Nullable<number>;
    getNextKey(): Nullable<number>;
    /**
     * If any current active animation has a key at the received frameNumber,
     * return the index of the animation in the active animation array, and
     * the index of the frame on the animation.
     * @param frameNumber
     */
    getKeyAtAnyFrameIndex(frameNumber: number): {
        animationIndex: number;
        keyIndex: number;
    } | null;
    hasActiveQuaternionAnimationKeyPoints(): boolean;
}

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/controls/actionButtonComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface IActionButtonComponentProps {
    globalState: GlobalState;
    context: Context;
    icon: string;
    id?: string;
    className?: string;
    isActive?: boolean;
    onClick: () => void;
    tooltip?: string;
}
interface IActionButtonComponentState {
}
export class ActionButtonComponent extends React.Component<IActionButtonComponentProps, IActionButtonComponentState> {
    constructor(props: IActionButtonComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/controls/controlButtonComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface IControlButtonComponentProps {
    globalState: GlobalState;
    context: Context;
    icon: string;
    hoverIcon: string;
    id?: string;
    className?: string;
    onClick: () => void;
    tooltip?: string;
}
interface IControlButtonComponentState {
}
export class ControlButtonComponent extends React.Component<IControlButtonComponentProps, IControlButtonComponentState> {
    constructor(props: IControlButtonComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/controls/pushButtonComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface IPushButtonComponentProps {
    globalState: GlobalState;
    context: Context;
    icon: string;
    id?: string;
    className?: string;
    isPushed?: boolean;
    onClick: (state: boolean) => void;
    tooltip?: string;
}
interface IPushButtonComponentState {
    isPushed: boolean;
}
export class PushButtonComponent extends React.Component<IPushButtonComponentProps, IPushButtonComponentState> {
    constructor(props: IPushButtonComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/controls/textInputComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface ITextInputComponentProps {
    globalState: GlobalState;
    context: Context;
    id?: string;
    className?: string;
    tooltip?: string;
    value: string;
    isNumber?: boolean;
    complement?: string;
    onValueAsNumberChanged?: (value: number, isFocused: boolean) => void;
    disabled?: boolean;
}
interface ITextInputComponentState {
    value: string;
    isFocused: boolean;
}
export class TextInputComponent extends React.Component<ITextInputComponentProps, ITextInputComponentState> {
    private _lastKnownGoodValue;
    constructor(props: ITextInputComponentProps);
    private _onChange;
    private _onBlur;
    private _onFocus;
    shouldComponentUpdate(newProps: ITextInputComponentProps, newState: ITextInputComponentState): boolean;
    private _onKeyPress;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/graph/canvasComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
import "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/scss/canvas.scss";
interface ICanvasComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface ICanvasComponentState {
}
export class CanvasComponent extends React.Component<ICanvasComponentProps, ICanvasComponentState> {
    private _onActiveAnimationChangedObserver;
    constructor(props: ICanvasComponentProps);
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/graph/curve" {
import { Animation } from "babylonjs/Animations/animation";
import { AnimationKeyInterpolation } from "babylonjs/Animations/animationKey";
import { Observable } from "babylonjs/Misc/observable";
export interface KeyEntry {
    frame: number;
    value: number;
    inTangent?: number;
    outTangent?: number;
    lockedTangent: boolean;
    interpolation?: AnimationKeyInterpolation;
}
export class Curve {
    static readonly SampleRate: number;
    keys: KeyEntry[];
    animation: Animation;
    color: string;
    onDataUpdatedObservable: Observable<void>;
    property?: string;
    tangentBuilder?: () => any;
    setDefaultInTangent?: (keyId: number) => any;
    setDefaultOutTangent?: (keyId: number) => any;
    static readonly TangentLength: number;
    constructor(color: string, animation: Animation, property?: string, tangentBuilder?: () => any, setDefaultInTangent?: (keyId: number) => any, setDefaultOutTangent?: (keyId: number) => any);
    getPathData(convertX: (x: number) => number, convertY: (y: number) => number): string;
    updateLockedTangentMode(keyIndex: number, enabled: boolean): void;
    updateInterpolationMode(keyIndex: number, interpolationMode: AnimationKeyInterpolation): void;
    getInControlPoint(keyIndex: number): number | undefined;
    getOutControlPoint(keyIndex: number): number | undefined;
    hasDefinedOutTangent(keyIndex: number): boolean;
    evaluateOutTangent(keyIndex: number): number;
    hasDefinedInTangent(keyIndex: number): boolean;
    evaluateInTangent(keyIndex: number): number;
    storeDefaultInTangent(keyIndex: number): void;
    storeDefaultOutTangent(keyIndex: number): void;
    updateInTangentFromControlPoint(keyId: number, slope: number): void;
    updateOutTangentFromControlPoint(keyId: number, slope: number): void;
    updateKeyFrame(keyId: number, frame: number): void;
    updateKeyValue(keyId: number, value: number): void;
}

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/graph/curveComponent" {
import * as React from "react";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
import { Curve } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/graph/curve";
interface ICurveComponentProps {
    curve: Curve;
    convertX: (x: number) => number;
    convertY: (x: number) => number;
    context: Context;
}
interface ICurveComponentState {
    isSelected: boolean;
}
export class CurveComponent extends React.Component<ICurveComponentProps, ICurveComponentState> {
    private _onDataUpdatedObserver;
    private _onActiveAnimationChangedObserver;
    private _onInterpolationModeSetObserver;
    constructor(props: ICurveComponentProps);
    componentWillUnmount(): void;
    componentDidUpdate(): boolean;
    render(): JSX.Element | null;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/graph/frameBarComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface IFrameBarComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface IFrameBarComponentState {
}
export class FrameBarComponent extends React.Component<IFrameBarComponentProps, IFrameBarComponentState> {
    private readonly _graphAbsoluteWidth;
    private _svgHost;
    private _viewWidth;
    private _viewScale;
    private _offsetX;
    private _onActiveAnimationChangedObserver;
    constructor(props: IFrameBarComponentProps);
    componentWillUnmount(): void;
    private _computeSizes;
    private _buildFrames;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/graph/graphComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface IGraphComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface IGraphComponentState {
}
export class GraphComponent extends React.Component<IGraphComponentProps, IGraphComponentState> {
    private readonly _minScale;
    private readonly _maxScale;
    private readonly _graphAbsoluteWidth;
    private readonly _graphAbsoluteHeight;
    private _viewWidth;
    private _viewCurveWidth;
    private _viewHeight;
    private _viewScale;
    private _offsetX;
    private _offsetY;
    private _inSelectionMode;
    private _graphOffsetX;
    private _minValue;
    private _maxValue;
    private _minFrame;
    private _maxFrame;
    private _svgHost;
    private _svgHost2;
    private _selectionRectangle;
    private _curves;
    private _pointerIsDown;
    private _sourcePointerX;
    private _sourcePointerY;
    private _selectionMade;
    private _selectionStartX;
    private _selectionStartY;
    private _onActiveAnimationChangedObserver;
    constructor(props: IGraphComponentProps);
    componentWillUnmount(): void;
    private _computeSizes;
    private _setDefaultInTangent;
    private _setDefaultOutTangent;
    private _evaluateKeys;
    private _extractValuesFromKeys;
    private _convertX;
    private _invertX;
    private _convertY;
    private _invertY;
    private _buildFrameIntervalAxis;
    private _buildYAxis;
    private _frameFromActiveKeys;
    private _dropKeyFrames;
    private _onPointerDown;
    private _onPointerMove;
    private _onPointerUp;
    private _onWheel;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/graph/keyPoint" {
import { Nullable } from "babylonjs/types";
import * as React from "react";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
import { Curve } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/graph/curve";
interface IKeyPointComponentProps {
    x: number;
    y: number;
    getPreviousX: () => Nullable<number>;
    getNextX: () => Nullable<number>;
    invertX: (x: number) => number;
    invertY: (y: number) => number;
    convertX: (x: number) => number;
    convertY: (y: number) => number;
    nextX?: number;
    scale: number;
    keyId: number;
    curve: Curve;
    context: Context;
    channel: string;
    onFrameValueChanged: (value: number) => void;
    onKeyValueChanged: (value: number) => void;
}
interface IKeyPointComponentState {
    selectedState: SelectionState;
    tangentSelectedIndex: number;
    x: number;
    y: number;
}
export enum SelectionState {
    None = 0,
    Selected = 1,
    Siblings = 2
}
export class KeyPointComponent extends React.Component<IKeyPointComponentProps, IKeyPointComponentState> {
    private _onActiveKeyPointChangedObserver;
    private _onActiveKeyFrameChangedObserver;
    private _onFrameManuallyEnteredObserver;
    private _onValueManuallyEnteredObserver;
    private _onMainKeyPointSetObserver;
    private _onMainKeyPointMovedObserver;
    private _onSelectionRectangleMovedObserver;
    private _onFlattenTangentRequiredObserver;
    private _onLinearTangentRequiredObserver;
    private _onBreakTangentRequiredObserver;
    private _onUnifyTangentRequiredObserver;
    private _onStepTangentRequiredObserver;
    private _onSelectAllKeysObserver;
    private _pointerIsDown;
    private _sourcePointerX;
    private _sourcePointerY;
    private _offsetXToMain;
    private _offsetYToMain;
    private _svgHost;
    private _keyPointSVG;
    private _controlMode;
    private _storedLengthIn;
    private _storedLengthOut;
    private _inVec;
    private _outVec;
    private _lockX;
    private _lockY;
    private _accumulatedX;
    private _accumulatedY;
    constructor(props: IKeyPointComponentProps);
    componentWillUnmount(): void;
    shouldComponentUpdate(newProps: IKeyPointComponentProps, newState: IKeyPointComponentState): boolean;
    private _breakTangent;
    private _unifyTangent;
    private _flattenTangent;
    private _linearTangent;
    private _stepTangent;
    private _select;
    private _onPointerDown;
    private _extractSlope;
    private _processTangentMove;
    private _onPointerMove;
    private _onPointerUp;
    render(): JSX.Element | null;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/graph/playHeadComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface IPlayHeadComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface IPlayHeadComponentState {
}
export class PlayHeadComponent extends React.Component<IPlayHeadComponentProps, IPlayHeadComponentState> {
    private readonly _graphAbsoluteWidth;
    private _playHead;
    private _playHeadCircle;
    private _onBeforeRenderObserver;
    private _onActiveAnimationChangedObserver;
    private _onRangeFrameBarResizedObserver;
    private _onMoveToFrameRequiredObserver;
    private _onGraphMovedObserver;
    private _onGraphScaledObserver;
    private _viewScale;
    private _offsetX;
    private _offsetRange;
    private _viewWidth;
    private readonly _rangeWidthToPlayheadWidth;
    private _pointerIsDown;
    constructor(props: IPlayHeadComponentProps);
    private _moveHead;
    private _frameToPixel;
    private _pixelToFrame;
    componentWillUnmount(): void;
    private _getPixelValues;
    private _onPointerDown;
    private _onPointerMove;
    private _onPointerUp;
    render(): JSX.Element | null;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/graph/rangeFrameBarComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface IRangeFrameBarComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface IRangeFrameBarComponentState {
}
export class RangeFrameBarComponent extends React.Component<IRangeFrameBarComponentProps, IRangeFrameBarComponentState> {
    private _svgHost;
    private _viewWidth;
    private _offsetX;
    private _isMounted;
    private _onActiveAnimationChangedObserver;
    private _onPlayheadMovedObserver;
    private _onFrameManuallyEnteredObserver;
    constructor(props: IRangeFrameBarComponentProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private _computeSizes;
    private _dropKeyFrames;
    private _buildActiveFrame;
    private _buildFrames;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/sideBar/addAnimationComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface IAddAnimationComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface IAddAnimationComponentState {
    customPropertyMode: boolean;
}
export class AddAnimationComponent extends React.Component<IAddAnimationComponentProps, IAddAnimationComponentState> {
    private _root;
    private _displayName;
    private _property;
    private _typeElement;
    private _propertylement;
    private _loopModeElement;
    constructor(props: IAddAnimationComponentProps);
    createNew(): void;
    getInferredType(activeProperty?: string): any;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/sideBar/animationEntryComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
import { Animation } from "babylonjs/Animations/animation";
interface IAnimationEntryComponentProps {
    globalState: GlobalState;
    context: Context;
    animation: Animation;
}
interface IAnimationEntryComponentState {
    isExpanded: boolean;
    isSelected: boolean;
}
export class AnimationEntryComponent extends React.Component<IAnimationEntryComponentProps, IAnimationEntryComponentState> {
    private _onActiveAnimationChangedObserver;
    private _onActiveKeyPointChangedObserver;
    private _onSelectToActivatedObserver;
    private _unmount;
    constructor(props: IAnimationEntryComponentProps);
    private _onGear;
    private _onDelete;
    componentWillUnmount(): void;
    private _activate;
    private _expandOrCollapse;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/sideBar/animationListComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface IAnimationListComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface IAnimationListComponentState {
    isVisible: boolean;
}
export class AnimationListComponent extends React.Component<IAnimationListComponentProps, IAnimationListComponentState> {
    private _onEditAnimationRequiredObserver;
    private _onEditAnimationUIClosedObserver;
    private _onDeleteAnimationObserver;
    constructor(props: IAnimationListComponentProps);
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/sideBar/animationSubEntryComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
import { Animation } from "babylonjs/Animations/animation";
interface IAnimationSubEntryComponentProps {
    globalState: GlobalState;
    context: Context;
    animation: Animation;
    color: string;
    subName: string;
}
interface IAnimationSubEntryComponentState {
    isSelected: boolean;
}
export class AnimationSubEntryComponent extends React.Component<IAnimationSubEntryComponentProps, IAnimationSubEntryComponentState> {
    private _onActiveAnimationChangedObserver;
    private _onActiveKeyPointChangedObserver;
    constructor(props: IAnimationSubEntryComponentProps);
    componentWillUnmount(): void;
    private _activate;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/sideBar/editAnimationComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
import { Animation } from "babylonjs/Animations/animation";
import { Nullable } from "babylonjs/types";
interface IEditAnimationComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface IEditAnimationComponentState {
    isVisible: boolean;
    animation: Nullable<Animation>;
}
export class EditAnimationComponent extends React.Component<IEditAnimationComponentProps, IEditAnimationComponentState> {
    private _root;
    private _displayName;
    private _property;
    private _loopModeElement;
    private _onEditAnimationRequiredObserver;
    constructor(props: IEditAnimationComponentProps);
    componentWillUnmount(): void;
    close(): void;
    validate(): void;
    render(): JSX.Element | null;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/sideBar/loadAnimationComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface ILoadAnimationComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface ILoadAnimationComponentState {
}
export class LoadAnimationComponent extends React.Component<ILoadAnimationComponentProps, ILoadAnimationComponentState> {
    private _root;
    private _textInput;
    constructor(props: ILoadAnimationComponentProps);
    loadFromFile(evt: React.ChangeEvent<HTMLInputElement>): void;
    loadFromSnippetServer(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/sideBar/saveAnimationComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
interface ISaveAnimationComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface ISaveAnimationComponentState {
}
export class SaveAnimationComponent extends React.Component<ISaveAnimationComponentProps, ISaveAnimationComponentState> {
    private _selectedAnimations;
    private _root;
    constructor(props: ISaveAnimationComponentProps);
    private _getJson;
    saveToSnippetServer(): void;
    saveToFile(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/sideBar/sideBarComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
import "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/scss/sideBar.scss";
interface ISideBarComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface ISideBarComponentState {
    mode: Mode;
}
enum Mode {
    Edit = 0,
    Add = 1,
    Load = 2,
    Save = 3
}
export class SideBarComponent extends React.Component<ISideBarComponentProps, ISideBarComponentState> {
    constructor(props: ISideBarComponentProps);
    private _onAddAnimation;
    private _onLoadAnimation;
    private _onSaveAnimation;
    private _onEditAnimation;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/topBarComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Context } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/context";
import "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/curveEditor/scss/topBar.scss";
interface ITopBarComponentProps {
    globalState: GlobalState;
    context: Context;
}
interface ITopBarComponentState {
    keyFrameValue: string;
    keyValue: string;
    frameControlEnabled: boolean;
    valueControlEnabled: boolean;
}
export class TopBarComponent extends React.Component<ITopBarComponentProps, ITopBarComponentState> {
    private _onFrameSetObserver;
    private _onValueSetObserver;
    private _onActiveAnimationChangedObserver;
    private _onActiveKeyPointChanged;
    constructor(props: ITopBarComponentProps);
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/animations/targetedAnimationPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { TargetedAnimation } from "babylonjs/Animations/animationGroup";
import { Scene } from "babylonjs/scene";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ITargetedAnimationGridComponentProps {
    globalState: GlobalState;
    targetedAnimation: TargetedAnimation;
    scene: Scene;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class TargetedAnimationGridComponent extends React.Component<ITargetedAnimationGridComponentProps> {
    private _animationGroup;
    private _animationCurveEditorContext;
    constructor(props: ITargetedAnimationGridComponentProps);
    playOrPause: () => void;
    deleteAnimation: () => void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/cameras/arcRotateCameraPropertyGridComponent" {
import * as React from "react";
import { ArcRotateCamera } from "babylonjs/Cameras/arcRotateCamera";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IArcRotateCameraPropertyGridComponentProps {
    globalState: GlobalState;
    camera: ArcRotateCamera;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class ArcRotateCameraPropertyGridComponent extends React.Component<IArcRotateCameraPropertyGridComponentProps> {
    constructor(props: IArcRotateCameraPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/cameras/commonCameraPropertyGridComponent" {
import * as React from "react";
import { Camera } from "babylonjs/Cameras/camera";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ICommonCameraPropertyGridComponentProps {
    globalState: GlobalState;
    camera: Camera;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class CommonCameraPropertyGridComponent extends React.Component<ICommonCameraPropertyGridComponentProps, {
    mode: number;
}> {
    constructor(props: ICommonCameraPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/cameras/followCameraPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { FollowCamera } from "babylonjs/Cameras/followCamera";
interface IFollowCameraPropertyGridComponentProps {
    globalState: GlobalState;
    camera: FollowCamera;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class FollowCameraPropertyGridComponent extends React.Component<IFollowCameraPropertyGridComponentProps> {
    constructor(props: IFollowCameraPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/cameras/freeCameraPropertyGridComponent" {
import * as React from "react";
import { FreeCamera } from "babylonjs/Cameras/freeCamera";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IFreeCameraPropertyGridComponentProps {
    globalState: GlobalState;
    camera: FreeCamera;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class FreeCameraPropertyGridComponent extends React.Component<IFreeCameraPropertyGridComponentProps> {
    constructor(props: IFreeCameraPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/commonPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ICommonPropertyGridComponentProps {
    globalState: GlobalState;
    host: {
        metadata: any;
    };
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class CommonPropertyGridComponent extends React.Component<ICommonPropertyGridComponentProps> {
    constructor(props: ICommonPropertyGridComponentProps);
    renderLevel(jsonObject: any): JSX.Element[];
    render(): JSX.Element | null;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/customPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { IInspectable } from "babylonjs/Misc/iInspectable";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface ICustomPropertyGridComponentProps {
    globalState: GlobalState;
    target: any;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class CustomPropertyGridComponent extends React.Component<ICustomPropertyGridComponentProps, {
    mode: number;
}> {
    constructor(props: ICustomPropertyGridComponentProps);
    renderInspectable(inspectable: IInspectable): JSX.Element | null;
    render(): JSX.Element | null;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/fogPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { Scene } from "babylonjs/scene";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IFogPropertyGridComponentProps {
    globalState: GlobalState;
    scene: Scene;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class FogPropertyGridComponent extends React.Component<IFogPropertyGridComponentProps, {
    mode: number;
}> {
    constructor(props: IFogPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/layers/layerPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { EffectLayer } from "babylonjs/Layers/effectLayer";
interface ILayerPropertyGridComponentProps {
    globalState: GlobalState;
    layer: EffectLayer;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class LayerPropertyGridComponent extends React.Component<ILayerPropertyGridComponentProps> {
    constructor(props: ILayerPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/lights/commonLightPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { Light } from "babylonjs/Lights/light";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ICommonLightPropertyGridComponentProps {
    globalState: GlobalState;
    light: Light;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class CommonLightPropertyGridComponent extends React.Component<ICommonLightPropertyGridComponentProps> {
    constructor(props: ICommonLightPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/lights/commonShadowLightPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { IShadowLight } from "babylonjs/Lights/shadowLight";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ICommonShadowLightPropertyGridComponentProps {
    globalState: GlobalState;
    light: IShadowLight;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class CommonShadowLightPropertyGridComponent extends React.Component<ICommonShadowLightPropertyGridComponentProps> {
    private _internals;
    constructor(props: ICommonShadowLightPropertyGridComponentProps);
    createShadowGenerator(): void;
    disposeShadowGenerator(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/lights/directionalLightPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { DirectionalLight } from "babylonjs/Lights/directionalLight";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IDirectionalLightPropertyGridComponentProps {
    globalState: GlobalState;
    light: DirectionalLight;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class DirectionalLightPropertyGridComponent extends React.Component<IDirectionalLightPropertyGridComponentProps> {
    constructor(props: IDirectionalLightPropertyGridComponentProps);
    displayFrustum(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/lights/hemisphericLightPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { HemisphericLight } from "babylonjs/Lights/hemisphericLight";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IHemisphericLightPropertyGridComponentProps {
    globalState: GlobalState;
    light: HemisphericLight;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class HemisphericLightPropertyGridComponent extends React.Component<IHemisphericLightPropertyGridComponentProps> {
    constructor(props: IHemisphericLightPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/lights/pointLightPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PointLight } from "babylonjs/Lights/pointLight";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IPointLightPropertyGridComponentProps {
    globalState: GlobalState;
    light: PointLight;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class PointLightPropertyGridComponent extends React.Component<IPointLightPropertyGridComponentProps> {
    constructor(props: IPointLightPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/lights/spotLightPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { SpotLight } from "babylonjs/Lights/spotLight";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ISpotLightPropertyGridComponentProps {
    globalState: GlobalState;
    light: SpotLight;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class SpotLightPropertyGridComponent extends React.Component<ISpotLightPropertyGridComponentProps> {
    constructor(props: ISpotLightPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/backgroundMaterialPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { BackgroundMaterial } from "babylonjs/Materials/Background/backgroundMaterial";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IBackgroundMaterialPropertyGridComponentProps {
    globalState: GlobalState;
    material: BackgroundMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class BackgroundMaterialPropertyGridComponent extends React.Component<IBackgroundMaterialPropertyGridComponentProps> {
    private _onDebugSelectionChangeObservable;
    constructor(props: IBackgroundMaterialPropertyGridComponentProps);
    renderTextures(): JSX.Element;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/commonMaterialPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { Material } from "babylonjs/Materials/material";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ICommonMaterialPropertyGridComponentProps {
    globalState: GlobalState;
    material: Material;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class CommonMaterialPropertyGridComponent extends React.Component<ICommonMaterialPropertyGridComponentProps> {
    constructor(props: ICommonMaterialPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/materialPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { Material } from "babylonjs/Materials/material";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IMaterialPropertyGridComponentProps {
    globalState: GlobalState;
    material: Material;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class MaterialPropertyGridComponent extends React.Component<IMaterialPropertyGridComponentProps> {
    constructor(props: IMaterialPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/multiMaterialPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Material } from "babylonjs/Materials/material";
import { MultiMaterial } from "babylonjs/Materials/multiMaterial";
interface IMultiMaterialPropertyGridComponentProps {
    globalState: GlobalState;
    material: MultiMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class MultiMaterialPropertyGridComponent extends React.Component<IMultiMaterialPropertyGridComponentProps> {
    constructor(props: IMultiMaterialPropertyGridComponentProps);
    onMaterialLink(mat: Material): void;
    renderChildMaterial(): JSX.Element;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/nodeMaterialPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { NodeMaterial } from "babylonjs/Materials/Node/nodeMaterial";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { InputBlock } from "babylonjs/Materials/Node/Blocks/Input/inputBlock";
interface INodeMaterialPropertyGridComponentProps {
    globalState: GlobalState;
    material: NodeMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class NodeMaterialPropertyGridComponent extends React.Component<INodeMaterialPropertyGridComponentProps> {
    private _onDebugSelectionChangeObservable;
    constructor(props: INodeMaterialPropertyGridComponentProps);
    edit(): void;
    renderTextures(): JSX.Element | null;
    renderInputBlock(block: InputBlock): JSX.Element | null;
    renderInputValues(): JSX.Element;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/pbrMaterialPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PBRMaterial } from "babylonjs/Materials/PBR/pbrMaterial";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { TextureLinkLineComponent } from "babylonjs-inspector/components/actionTabs/lines/textureLinkLineComponent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import "babylonjs/Rendering/prePassRendererSceneComponent";
import "babylonjs/Rendering/subSurfaceSceneComponent";
interface IPBRMaterialPropertyGridComponentProps {
    globalState: GlobalState;
    material: PBRMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class PBRMaterialPropertyGridComponent extends React.Component<IPBRMaterialPropertyGridComponentProps> {
    private _onDebugSelectionChangeObservable;
    constructor(props: IPBRMaterialPropertyGridComponentProps);
    switchAmbientMode(state: boolean): void;
    renderTextures(onDebugSelectionChangeObservable: Observable<TextureLinkLineComponent>): JSX.Element;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/pbrMetallicRoughnessMaterialPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PBRMetallicRoughnessMaterial } from "babylonjs/Materials/PBR/pbrMetallicRoughnessMaterial";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IPBRMetallicRoughnessMaterialPropertyGridComponentProps {
    globalState: GlobalState;
    material: PBRMetallicRoughnessMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class PBRMetallicRoughnessMaterialPropertyGridComponent extends React.Component<IPBRMetallicRoughnessMaterialPropertyGridComponentProps> {
    private _onDebugSelectionChangeObservable;
    constructor(props: IPBRMetallicRoughnessMaterialPropertyGridComponentProps);
    renderTextures(): JSX.Element;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/pbrSpecularGlossinessMaterialPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PBRSpecularGlossinessMaterial } from "babylonjs/Materials/PBR/pbrSpecularGlossinessMaterial";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IPBRSpecularGlossinessMaterialPropertyGridComponentProps {
    globalState: GlobalState;
    material: PBRSpecularGlossinessMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class PBRSpecularGlossinessMaterialPropertyGridComponent extends React.Component<IPBRSpecularGlossinessMaterialPropertyGridComponentProps> {
    private _onDebugSelectionChangeObservable;
    constructor(props: IPBRSpecularGlossinessMaterialPropertyGridComponentProps);
    renderTextures(): JSX.Element;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/standardMaterialPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { StandardMaterial } from "babylonjs/Materials/standardMaterial";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IStandardMaterialPropertyGridComponentProps {
    globalState: GlobalState;
    material: StandardMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class StandardMaterialPropertyGridComponent extends React.Component<IStandardMaterialPropertyGridComponentProps> {
    private _onDebugSelectionChangeObservable;
    constructor(props: IStandardMaterialPropertyGridComponentProps);
    renderTextures(): JSX.Element;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/texturePropertyGridComponent" {
import * as React from "react";
import { Nullable } from "babylonjs/types";
import { Observable } from "babylonjs/Misc/observable";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ITexturePropertyGridComponentProps {
    texture: BaseTexture;
    lockObject: LockObject;
    globalState: GlobalState;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
interface ITexturePropertyGridComponentState {
    isTextureEditorOpen: boolean;
    textureEditing: Nullable<BaseTexture>;
}
export class TexturePropertyGridComponent extends React.Component<ITexturePropertyGridComponentProps, ITexturePropertyGridComponentState> {
    private _adtInstrumentation;
    private _popoutWindowRef;
    private _textureLineRef;
    private _textureInspectorSize;
    constructor(props: ITexturePropertyGridComponentProps);
    componentWillUnmount(): void;
    updateTexture(file: File): void;
    openTextureEditor(): void;
    onOpenTextureEditor(): void;
    onCloseTextureEditor(callback?: {
        (): void;
    }): void;
    forceRefresh(): void;
    findTextureFormat(format: number): {
        label: string;
        normalizable: number;
        value: number;
        hideType?: undefined;
        compressed?: undefined;
    } | {
        label: string;
        normalizable: number;
        hideType: boolean;
        value: number;
        compressed?: undefined;
    } | {
        label: string;
        normalizable: number;
        compressed: boolean;
        value: number;
        hideType?: undefined;
    } | null;
    findTextureType(type: number): {
        label: string;
        normalizable: number;
        value: number;
    } | null;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/bottomBar" {
import * as React from "react";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
interface IBottomBarProps {
    texture: BaseTexture;
    mipLevel: number;
}
export class BottomBar extends React.PureComponent<IBottomBarProps> {
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/canvasShader" {
export const canvasShader: {
    path: {
        vertexSource: string;
        fragmentSource: string;
    };
    options: {
        attributes: string[];
        uniforms: string[];
    };
};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/channelsBar" {
import * as React from "react";
export interface IChannel {
    visible: boolean;
    editable: boolean;
    name: string;
    id: "R" | "G" | "B" | "A";
    icon: any;
}
interface IChannelsBarProps {
    channels: IChannel[];
    setChannels(channelState: IChannel[]): void;
}
export class ChannelsBar extends React.PureComponent<IChannelsBarProps> {
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/defaultTools/contrast" {
import { IToolData } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureEditorComponent";
export const Contrast: IToolData;

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/defaultTools/defaultTools" {
const _default: import("babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureEditorComponent").IToolData[];
export default _default;

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/defaultTools/eyedropper" {
import { IToolData } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureEditorComponent";
export const Eyedropper: IToolData;

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/defaultTools/floodfill" {
import { IToolData } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureEditorComponent";
export const Floodfill: IToolData;

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/defaultTools/paintbrush" {
import { IToolData } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureEditorComponent";
export const Paintbrush: IToolData;

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/defaultTools/rectangleSelect" {
import { IToolData } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureEditorComponent";
export const RectangleSelect: IToolData;

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/propertiesBar" {
import * as React from "react";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
import { IPixelData } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureCanvasManager";
import { ISize } from "babylonjs/Maths/math.size";
interface IPropertiesBarProps {
    texture: BaseTexture;
    size: ISize;
    saveTexture(): void;
    pixelData: IPixelData;
    face: number;
    setFace(face: number): void;
    resetTexture(): void;
    resizeTexture(width: number, height: number): void;
    uploadTexture(file: File): void;
    mipLevel: number;
    setMipLevel: (mipLevel: number) => void;
}
interface IPropertiesBarState {
    width: number;
    height: number;
}
export class PropertiesBar extends React.PureComponent<IPropertiesBarProps, IPropertiesBarState> {
    private _faces;
    constructor(props: IPropertiesBarProps);
    private _pixelData;
    private _getNewDimension;
    componentWillUpdate(nextProps: IPropertiesBarProps): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureCanvasComponent" {
import * as React from "react";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
interface ITextureCanvasComponentProps {
    canvasUI: React.RefObject<HTMLCanvasElement>;
    canvas2D: React.RefObject<HTMLCanvasElement>;
    canvas3D: React.RefObject<HTMLCanvasElement>;
    texture: BaseTexture;
}
export class TextureCanvasComponent extends React.Component<ITextureCanvasComponentProps> {
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureCanvasManager" {
import { Scene } from "babylonjs/scene";
import { Vector2 } from "babylonjs/Maths/math.vector";
import { Nullable } from "babylonjs/types";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
import { ISize } from "babylonjs/Maths/math.size";
import { PointerInfo } from "babylonjs/Events/pointerEvents";
import { ITool } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/toolBar";
import { IChannel } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/channelsBar";
import { IMetadata } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureEditorComponent";
export interface IPixelData {
    x?: number;
    y?: number;
    r?: number;
    g?: number;
    b?: number;
    a?: number;
}
export class TextureCanvasManager {
    private _engine;
    private _scene;
    private _camera;
    private _cameraPos;
    private _scale;
    private _isPanning;
    private _mouseX;
    private _mouseY;
    private _uiCanvas;
    private _size;
    /** The canvas we paint onto using the canvas API */
    private _2DCanvas;
    /** The canvas we apply post processes to */
    private _3DCanvas;
    /** The canvas which handles channel filtering */
    private _channelsTexture;
    private _3DEngine;
    private _3DPlane;
    private _3DCanvasTexture;
    private _3DScene;
    private _channels;
    private _face;
    private _mipLevel;
    /** The texture from the original engine that we invoked the editor on */
    private _originalTexture;
    /** This is a hidden texture which is only responsible for holding the actual texture memory in the original engine */
    private _target;
    private _originalTextureProperties;
    /** Keeps track of whether we have modified the texture */
    private _didEdit;
    private _plane;
    private _planeMaterial;
    /** Tracks which keys are currently pressed */
    private _keyMap;
    /** Tracks which mouse buttons are currently pressed */
    private _buttonsPressed;
    private readonly ZOOM_MOUSE_SPEED;
    private readonly ZOOM_KEYBOARD_SPEED;
    private readonly ZOOM_IN_KEY;
    private readonly ZOOM_OUT_KEY;
    private readonly PAN_SPEED;
    private readonly PAN_KEY;
    private readonly MIN_SCALE;
    private readonly GRID_SCALE;
    private readonly MAX_SCALE;
    private readonly SELECT_ALL_KEY;
    private readonly SAVE_KEY;
    private readonly RESET_KEY;
    private readonly DESELECT_KEY;
    /** The number of milliseconds between texture updates */
    private readonly PUSH_FREQUENCY;
    private _tool;
    private _setPixelData;
    private _setMipLevel;
    private _window;
    private _metadata;
    private _editing3D;
    private _onUpdate;
    private _setMetadata;
    private _imageData;
    private _canPush;
    private _shouldPush;
    private _paintCanvas;
    constructor(texture: BaseTexture, window: Window, canvasUI: HTMLCanvasElement, canvas2D: HTMLCanvasElement, canvas3D: HTMLCanvasElement, setPixelData: (pixelData: IPixelData) => void, metadata: IMetadata, onUpdate: () => void, setMetadata: (metadata: any) => void, setMipLevel: (level: number) => void);
    updateTexture(): Promise<void>;
    private pushTexture;
    startPainting(): Promise<CanvasRenderingContext2D>;
    updatePainting(): void;
    stopPainting(): void;
    private updateDisplay;
    set channels(channels: IChannel[]);
    paintPixelsOnCanvas(pixelData: Uint8Array, canvas: HTMLCanvasElement): void;
    grabOriginalTexture(): Promise<Uint8Array>;
    getMouseCoordinates(pointerInfo: PointerInfo): Vector2;
    get scene(): Scene;
    get canvas2D(): HTMLCanvasElement;
    get size(): ISize;
    set tool(tool: Nullable<ITool>);
    get tool(): Nullable<ITool>;
    set face(face: number);
    set mipLevel(mipLevel: number);
    /** Returns the 3D scene used for postprocesses */
    get scene3D(): Scene;
    set metadata(metadata: IMetadata);
    private makePlane;
    reset(): void;
    resize(newSize: ISize): Promise<void>;
    setSize(size: ISize): void;
    upload(file: File): void;
    saveTexture(): void;
    toolInteractionEnabled(): boolean;
    dispose(): void;
}

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureEditorComponent" {
import * as React from "react";
import { IPixelData } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureCanvasManager";
import { ITool } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/toolBar";
import { IChannel } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/channelsBar";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
import { Scene } from "babylonjs/scene";
import { ISize } from "babylonjs/Maths/math.size";
import { Vector2 } from "babylonjs/Maths/math.vector";
import { PointerInfo } from "babylonjs/Events/pointerEvents";
import { PopupComponent } from "babylonjs-inspector/components/popupComponent";
import "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureEditor.scss";
global {
    var _TOOL_DATA_: IToolData;
}
interface ITextureEditorComponentProps {
    texture: BaseTexture;
    url: string;
    window: React.RefObject<PopupComponent>;
    onUpdate: () => void;
}
interface ITextureEditorComponentState {
    tools: ITool[];
    activeToolIndex: number;
    metadata: IMetadata;
    channels: IChannel[];
    pixelData: IPixelData;
    face: number;
    mipLevel: number;
    pickerOpen: boolean;
}
export interface IToolParameters {
    /** The visible scene in the editor. Useful for adding pointer and keyboard events. */
    scene: Scene;
    /** The 2D canvas which you can sample pixel data from. Tools should not paint directly on this canvas. */
    canvas2D: HTMLCanvasElement;
    /** The 3D scene which tools can add post processes to. */
    scene3D: Scene;
    /** The size of the texture. */
    size: ISize;
    /** Pushes the editor texture back to the original scene. This should be called every time a tool makes any modification to a texture. */
    updateTexture: () => void;
    /** The metadata object which is shared between all tools. Feel free to store any information here. Do not set this directly: instead call setMetadata. */
    metadata: IMetadata;
    /** Call this when you want to mutate the metadata. */
    setMetadata: (data: any) => void;
    /** Returns the texture coordinates under the cursor */
    getMouseCoordinates: (pointerInfo: PointerInfo) => Vector2;
    /** Provides a canvas that you can use the canvas API to paint on. */
    startPainting: () => Promise<CanvasRenderingContext2D>;
    /** After you have painted on your canvas, call this method to push the updates back to the texture. */
    updatePainting: () => void;
    /** Call this when you are finished painting. */
    stopPainting: () => void;
    /** Returns whether the tool should be allowed to interact */
    interactionEnabled: () => boolean;
}
export interface IToolGUIProps {
    instance: IToolType;
}
/** An interface representing the definition of a tool */
export interface IToolData {
    /** Name to display on the toolbar */
    name: string;
    /** A class definition for the tool including setup and cleanup methods */
    type: IToolConstructable;
    /**  An SVG icon encoded in Base64 */
    icon: string;
    /** Whether the tool uses postprocesses */
    is3D?: boolean;
    cursor?: string;
    settingsComponent?: React.ComponentType<IToolGUIProps>;
}
export interface IToolType {
    /** Called when the tool is selected. */
    setup: () => void;
    /** Called when the tool is deselected. */
    cleanup: () => void;
    /** Optional. Called when the user resets the texture or uploads a new texture. Tools may want to reset their state when this happens. */
    onReset?: () => void;
}
/** For constructable types, TS requires that you define a separate interface which constructs your actual interface */
interface IToolConstructable {
    new (getParameters: () => IToolParameters): IToolType;
}
export interface IMetadata {
    color: string;
    alpha: number;
    select: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
    [key: string]: any;
}
export class TextureEditorComponent extends React.Component<ITextureEditorComponentProps, ITextureEditorComponentState> {
    private _textureCanvasManager;
    private _uiCanvas;
    private _2DCanvas;
    private _3DCanvas;
    private _pickerRef;
    private _timer;
    private static _PREVIEW_UPDATE_DELAY_MS;
    constructor(props: ITextureEditorComponentProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    textureDidUpdate(): void;
    loadToolFromURL(url: string): void;
    addTools(tools: IToolData[]): void;
    getToolParameters(): IToolParameters;
    changeTool(index: number): void;
    setMetadata(newMetadata: any): void;
    setPickerOpen(open: boolean): void;
    onPointerDown(evt: React.PointerEvent): void;
    saveTexture(): void;
    resetTexture(): void;
    resizeTexture(width: number, height: number): void;
    uploadTexture(file: File): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/toolBar" {
import * as React from "react";
import { IToolData, IToolType, IMetadata } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/textureEditorComponent";
import { Color4 } from "babylonjs/Maths/math.color";
export interface ITool extends IToolData {
    instance: IToolType;
}
interface IToolBarProps {
    tools: ITool[];
    addTool(url: string): void;
    changeTool(toolIndex: number): void;
    activeToolIndex: number;
    metadata: IMetadata;
    setMetadata(data: any): void;
    pickerOpen: boolean;
    setPickerOpen(open: boolean): void;
    pickerRef: React.RefObject<HTMLDivElement>;
    hasAlpha: boolean;
}
interface IToolBarState {
    toolURL: string;
    addOpen: boolean;
}
export class ToolBar extends React.Component<IToolBarProps, IToolBarState> {
    private _lockObject;
    constructor(props: IToolBarProps);
    computeRGBAColor(): Color4;
    shouldComponentUpdate(nextProps: IToolBarProps): boolean;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/toolSettings" {
import * as React from "react";
import { ITool } from "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/materials/textures/toolBar";
interface IToolSettingsProps {
    tool: ITool | undefined;
}
export class ToolSettings extends React.Component<IToolSettingsProps> {
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/meshes/bonePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Bone } from "babylonjs/Bones/bone";
interface IBonePropertyGridComponentProps {
    globalState: GlobalState;
    bone: Bone;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class BonePropertyGridComponent extends React.Component<IBonePropertyGridComponentProps> {
    constructor(props: IBonePropertyGridComponentProps);
    onTransformNodeLink(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/meshes/meshPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { Mesh } from "babylonjs/Meshes/mesh";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import "babylonjs/Physics/physicsEngineComponent";
interface IMeshPropertyGridComponentProps {
    globalState: GlobalState;
    mesh: Mesh;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class MeshPropertyGridComponent extends React.Component<IMeshPropertyGridComponentProps, {
    displayNormals: boolean;
    displayVertexColors: boolean;
    displayBoneWeights: boolean;
    displayBoneIndex: number;
    displaySkeletonMap: boolean;
}> {
    constructor(props: IMeshPropertyGridComponentProps);
    renderWireframeOver(): void;
    renderNormalVectors(): void;
    displayNormals(): void;
    displayVertexColors(): void;
    displayBoneWeights(): void;
    displaySkeletonMap(): void;
    onBoneDisplayIndexChange(value: number): void;
    onMaterialLink(): void;
    onSourceMeshLink(): void;
    onSkeletonLink(): void;
    convertPhysicsTypeToString(): string;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/meshes/skeletonPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Skeleton } from "babylonjs/Bones/skeleton";
interface ISkeletonPropertyGridComponentProps {
    globalState: GlobalState;
    skeleton: Skeleton;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class SkeletonPropertyGridComponent extends React.Component<ISkeletonPropertyGridComponentProps> {
    private _skeletonViewersEnabled;
    private _skeletonViewerDisplayOptions;
    private _skeletonViewers;
    constructor(props: ISkeletonPropertyGridComponentProps);
    switchSkeletonViewers(): void;
    checkSkeletonViewerState(props: ISkeletonPropertyGridComponentProps): void;
    changeDisplayMode(): void;
    changeDisplayOptions(option: string, value: number): void;
    shouldComponentUpdate(nextProps: ISkeletonPropertyGridComponentProps): boolean;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/meshes/transformNodePropertyGridComponent" {
import * as React from "react";
import { TransformNode } from "babylonjs/Meshes/transformNode";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ITransformNodePropertyGridComponentProps {
    globalState: GlobalState;
    transformNode: TransformNode;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class TransformNodePropertyGridComponent extends React.Component<ITransformNodePropertyGridComponentProps> {
    constructor(props: ITransformNodePropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/parentPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Node } from "babylonjs/node";
interface IParentPropertyGridComponentProps {
    globalState: GlobalState;
    lockObject: LockObject;
    node: Node;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class ParentPropertyGridComponent extends React.Component<IParentPropertyGridComponentProps> {
    constructor(props: IParentPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/particleSystems/boxEmitterGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { BoxParticleEmitter } from "babylonjs/Particles/EmitterTypes/boxParticleEmitter";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IBoxEmitterGridComponentProps {
    globalState: GlobalState;
    emitter: BoxParticleEmitter;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    lockObject: LockObject;
}
export class BoxEmitterGridComponent extends React.Component<IBoxEmitterGridComponentProps> {
    constructor(props: IBoxEmitterGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/particleSystems/colorGradientStepGridComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { ColorGradient, Color3Gradient } from "babylonjs/Misc/gradients";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { IParticleSystem } from "babylonjs/Particles/IParticleSystem";
interface IColorGradientStepGridComponent {
    globalState: GlobalState;
    gradient: ColorGradient | Color3Gradient;
    lockObject: LockObject;
    lineIndex: number;
    isColor3: boolean;
    onDelete: () => void;
    onUpdateGradient: () => void;
    onCheckForReOrder: () => void;
    host: IParticleSystem;
    codeRecorderPropertyName: string;
}
export class ColorGradientStepGridComponent extends React.Component<IColorGradientStepGridComponent, {
    gradient: number;
}> {
    constructor(props: IColorGradientStepGridComponent);
    updateColor1(color: string): void;
    updateColor2(color: string): void;
    updateGradient(gradient: number): void;
    onPointerUp(): void;
    lock(): void;
    unlock(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/particleSystems/coneEmitterGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { ConeParticleEmitter } from "babylonjs/Particles/EmitterTypes/coneParticleEmitter";
interface IConeEmitterGridComponentProps {
    globalState: GlobalState;
    emitter: ConeParticleEmitter;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class ConeEmitterGridComponent extends React.Component<IConeEmitterGridComponentProps> {
    constructor(props: IConeEmitterGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/particleSystems/cylinderEmitterGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { CylinderParticleEmitter } from "babylonjs/Particles/EmitterTypes/cylinderParticleEmitter";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface ICylinderEmitterGridComponentProps {
    globalState: GlobalState;
    emitter: CylinderParticleEmitter;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class CylinderEmitterGridComponent extends React.Component<ICylinderEmitterGridComponentProps> {
    constructor(props: ICylinderEmitterGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/particleSystems/factorGradientStepGridComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { FactorGradient } from "babylonjs/Misc/gradients";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { IParticleSystem } from "babylonjs/Particles/IParticleSystem";
interface IFactorGradientStepGridComponent {
    globalState: GlobalState;
    gradient: FactorGradient;
    lockObject: LockObject;
    lineIndex: number;
    onDelete: () => void;
    onUpdateGradient: () => void;
    onCheckForReOrder: () => void;
    host: IParticleSystem;
    codeRecorderPropertyName: string;
}
export class FactorGradientStepGridComponent extends React.Component<IFactorGradientStepGridComponent, {
    gradient: number;
    factor1: string;
    factor2?: string;
}> {
    constructor(props: IFactorGradientStepGridComponent);
    shouldComponentUpdate(nextProps: IFactorGradientStepGridComponent, nextState: {
        gradient: number;
        factor1: string;
        factor2?: string;
    }): boolean;
    updateFactor1(valueString: string): void;
    updateFactor2(valueString: string): void;
    updateGradient(gradient: number): void;
    onPointerUp(): void;
    lock(): void;
    unlock(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/particleSystems/hemisphericEmitterGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { HemisphericParticleEmitter } from "babylonjs/Particles/EmitterTypes/hemisphericParticleEmitter";
interface IHemisphericEmitterGridComponentProps {
    globalState: GlobalState;
    emitter: HemisphericParticleEmitter;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class HemisphericEmitterGridComponent extends React.Component<IHemisphericEmitterGridComponentProps> {
    constructor(props: IHemisphericEmitterGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/particleSystems/meshEmitterGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { MeshParticleEmitter } from "babylonjs/Particles/EmitterTypes/meshParticleEmitter";
import { Scene } from "babylonjs/scene";
interface IMeshEmitterGridComponentProps {
    globalState: GlobalState;
    emitter: MeshParticleEmitter;
    scene: Scene;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class MeshEmitterGridComponent extends React.Component<IMeshEmitterGridComponentProps> {
    constructor(props: IMeshEmitterGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/particleSystems/particleSystemPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { IParticleSystem } from "babylonjs/Particles/IParticleSystem";
interface IParticleSystemPropertyGridComponentProps {
    globalState: GlobalState;
    system: IParticleSystem;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class ParticleSystemPropertyGridComponent extends React.Component<IParticleSystemPropertyGridComponentProps> {
    private _snippetUrl;
    constructor(props: IParticleSystemPropertyGridComponentProps);
    renderEmitter(): JSX.Element | null;
    raiseOnPropertyChanged(property: string, newValue: any, previousValue: any): void;
    renderControls(): JSX.Element;
    saveToFile(): void;
    loadFromFile(file: File): void;
    loadFromSnippet(): void;
    saveToSnippet(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/particleSystems/pointEmitterGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { PointParticleEmitter } from "babylonjs/Particles/EmitterTypes/pointParticleEmitter";
interface IPointEmitterGridComponentProps {
    globalState: GlobalState;
    emitter: PointParticleEmitter;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class PointEmitterGridComponent extends React.Component<IPointEmitterGridComponentProps> {
    constructor(props: IPointEmitterGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/particleSystems/sphereEmitterGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { SphereParticleEmitter } from "babylonjs/Particles/EmitterTypes/sphereParticleEmitter";
interface ISphereEmitterGridComponentProps {
    globalState: GlobalState;
    emitter: SphereParticleEmitter;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class SphereEmitterGridComponent extends React.Component<ISphereEmitterGridComponentProps> {
    constructor(props: ISphereEmitterGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/particleSystems/valueGradientGridComponent" {
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { IValueGradient } from "babylonjs/Misc/gradients";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { Nullable } from "babylonjs/types";
import { IParticleSystem } from "babylonjs/Particles/IParticleSystem";
export enum GradientGridMode {
    Factor = 0,
    Color3 = 1,
    Color4 = 2
}
interface IValueGradientGridComponent {
    globalState: GlobalState;
    label: string;
    gradients: Nullable<Array<IValueGradient>>;
    lockObject: LockObject;
    docLink?: string;
    mode: GradientGridMode;
    host: IParticleSystem;
    codeRecorderPropertyName: string;
    onCreateRequired: () => void;
}
export class ValueGradientGridComponent extends React.Component<IValueGradientGridComponent> {
    constructor(props: IValueGradientGridComponent);
    deleteStep(step: IValueGradient): void;
    addNewStep(): void;
    checkForReOrder(): void;
    updateAndSync(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/postProcesses/commonPostProcessPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { PostProcess } from "babylonjs/PostProcesses/postProcess";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ICommonPostProcessPropertyGridComponentProps {
    globalState: GlobalState;
    postProcess: PostProcess;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class CommonPostProcessPropertyGridComponent extends React.Component<ICommonPostProcessPropertyGridComponentProps> {
    constructor(props: ICommonPostProcessPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/postProcesses/commonRenderingPipelinePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { PostProcessRenderPipeline } from "babylonjs/PostProcesses/RenderPipeline/postProcessRenderPipeline";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ICommonRenderingPipelinePropertyGridComponentProps {
    globalState: GlobalState;
    renderPipeline: PostProcessRenderPipeline;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class CommonRenderingPipelinePropertyGridComponent extends React.Component<ICommonRenderingPipelinePropertyGridComponentProps> {
    constructor(props: ICommonRenderingPipelinePropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/postProcesses/defaultRenderingPipelinePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { DefaultRenderingPipeline } from "babylonjs/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IDefaultRenderingPipelinePropertyGridComponentProps {
    globalState: GlobalState;
    renderPipeline: DefaultRenderingPipeline;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class DefaultRenderingPipelinePropertyGridComponent extends React.Component<IDefaultRenderingPipelinePropertyGridComponentProps> {
    constructor(props: IDefaultRenderingPipelinePropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/postProcesses/lensRenderingPipelinePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { LensRenderingPipeline } from "babylonjs/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ILenstRenderingPipelinePropertyGridComponentProps {
    globalState: GlobalState;
    renderPipeline: LensRenderingPipeline;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class LensRenderingPipelinePropertyGridComponent extends React.Component<ILenstRenderingPipelinePropertyGridComponentProps> {
    constructor(props: ILenstRenderingPipelinePropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/postProcesses/postProcessPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PostProcess } from "babylonjs/PostProcesses/postProcess";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IPostProcessPropertyGridComponentProps {
    globalState: GlobalState;
    postProcess: PostProcess;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class PostProcessPropertyGridComponent extends React.Component<IPostProcessPropertyGridComponentProps> {
    constructor(props: IPostProcessPropertyGridComponentProps);
    edit(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/postProcesses/renderingPipelinePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PostProcessRenderPipeline } from "babylonjs/PostProcesses/RenderPipeline/postProcessRenderPipeline";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IRenderingPipelinePropertyGridComponentProps {
    globalState: GlobalState;
    renderPipeline: PostProcessRenderPipeline;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class RenderingPipelinePropertyGridComponent extends React.Component<IRenderingPipelinePropertyGridComponentProps> {
    constructor(props: IRenderingPipelinePropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/postProcesses/ssao2RenderingPipelinePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { SSAO2RenderingPipeline } from "babylonjs/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ISSAO2RenderingPipelinePropertyGridComponentProps {
    globalState: GlobalState;
    renderPipeline: SSAO2RenderingPipeline;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class SSAO2RenderingPipelinePropertyGridComponent extends React.Component<ISSAO2RenderingPipelinePropertyGridComponentProps> {
    constructor(props: ISSAO2RenderingPipelinePropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/postProcesses/ssaoRenderingPipelinePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { SSAORenderingPipeline } from "babylonjs/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ISSAORenderingPipelinePropertyGridComponentProps {
    globalState: GlobalState;
    renderPipeline: SSAORenderingPipeline;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class SSAORenderingPipelinePropertyGridComponent extends React.Component<ISSAORenderingPipelinePropertyGridComponentProps> {
    constructor(props: ISSAORenderingPipelinePropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/renderGridPropertyGridComponent" {
import * as React from "react";
import { Scene } from "babylonjs/scene";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IRenderGridPropertyGridComponentProps {
    globalState: GlobalState;
    scene: Scene;
}
export class RenderGridPropertyGridComponent extends React.Component<IRenderGridPropertyGridComponentProps, {
    isEnabled: boolean;
}> {
    private _gridMesh;
    constructor(props: IRenderGridPropertyGridComponentProps);
    componentDidMount(): void;
    addOrRemoveGrid(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/scenePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { Vector3 } from "babylonjs/Maths/math.vector";
import { Scene } from "babylonjs/scene";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import "babylonjs/Physics/physicsEngineComponent";
interface IScenePropertyGridComponentProps {
    globalState: GlobalState;
    scene: Scene;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    onSelectionChangedObservable?: Observable<any>;
}
export class ScenePropertyGridComponent extends React.Component<IScenePropertyGridComponentProps> {
    private _storedEnvironmentTexture;
    private _renderingModeGroupObservable;
    constructor(props: IScenePropertyGridComponentProps);
    setRenderingModes(point: boolean, wireframe: boolean): void;
    switchIBL(): void;
    updateEnvironmentTexture(file: File): void;
    updateGravity(newValue: Vector3): void;
    updateTimeStep(newValue: number): void;
    normalizeScene(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/sounds/soundPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Sound } from "babylonjs/Audio/sound";
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
interface ISoundPropertyGridComponentProps {
    globalState: GlobalState;
    sound: Sound;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class SoundPropertyGridComponent extends React.Component<ISoundPropertyGridComponentProps> {
    constructor(props: ISoundPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/sprites/spriteManagerPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { SpriteManager } from "babylonjs/Sprites/spriteManager";
interface ISpriteManagerPropertyGridComponentProps {
    globalState: GlobalState;
    spriteManager: SpriteManager;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class SpriteManagerPropertyGridComponent extends React.Component<ISpriteManagerPropertyGridComponentProps> {
    private _snippetUrl;
    constructor(props: ISpriteManagerPropertyGridComponentProps);
    addNewSprite(): void;
    disposeManager(): void;
    saveToFile(): void;
    loadFromFile(file: File): void;
    loadFromSnippet(): void;
    saveToSnippet(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/sprites/spritePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { Sprite } from "babylonjs/Sprites/sprite";
interface ISpritePropertyGridComponentProps {
    globalState: GlobalState;
    sprite: Sprite;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    onSelectionChangedObservable?: Observable<any>;
}
export class SpritePropertyGridComponent extends React.Component<ISpritePropertyGridComponentProps> {
    private _canvasRef;
    private _imageData;
    private _cachedCellIndex;
    constructor(props: ISpritePropertyGridComponentProps);
    onManagerLink(): void;
    switchPlayStopState(): void;
    disposeSprite(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    shouldComponentUpdate(nextProps: ISpritePropertyGridComponentProps): boolean;
    updatePreview(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGrids/variantsPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IVariantsPropertyGridComponentProps {
    globalState: GlobalState;
    host: any;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class VariantsPropertyGridComponent extends React.Component<IVariantsPropertyGridComponentProps> {
    constructor(props: IVariantsPropertyGridComponentProps);
    private _getVariantsExtension;
    render(): JSX.Element | null;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/propertyGridTabComponent" {
/// <reference types="react" />
import { IPaneComponentProps } from "babylonjs-inspector/components/actionTabs/paneComponent";
import { PaneComponent } from "babylonjs-inspector/components/actionTabs/paneComponent";
export class PropertyGridTabComponent extends PaneComponent {
    private _timerIntervalId;
    private _lockObject;
    constructor(props: IPaneComponentProps);
    timerRefresh(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}

}
declare module "babylonjs-inspector/components/actionTabs/tabs/settingsTabComponent" {
/// <reference types="react" />
import { IPaneComponentProps } from "babylonjs-inspector/components/actionTabs/paneComponent";
import { PaneComponent } from "babylonjs-inspector/components/actionTabs/paneComponent";
export class SettingsTabComponent extends PaneComponent {
    constructor(props: IPaneComponentProps);
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/components/actionTabs/tabs/statisticsTabComponent" {
/// <reference types="react" />
import { IPaneComponentProps } from "babylonjs-inspector/components/actionTabs/paneComponent";
import { PaneComponent } from "babylonjs-inspector/components/actionTabs/paneComponent";
export class StatisticsTabComponent extends PaneComponent {
    private _sceneInstrumentation;
    private _engineInstrumentation;
    private _timerIntervalId;
    constructor(props: IPaneComponentProps);
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}

}
declare module "babylonjs-inspector/components/actionTabs/tabs/tools/gltfComponent" {
import * as React from "react";
import { Scene } from "babylonjs/scene";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface IGLTFComponentProps {
    scene: Scene;
    globalState: GlobalState;
}
export class GLTFComponent extends React.Component<IGLTFComponentProps> {
    private _onValidationResultsUpdatedObserver;
    openValidationDetails(): void;
    prepareText(singularForm: string, count: number): string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    renderValidation(): JSX.Element | null;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/actionTabs/tabs/toolsTabComponent" {
/// <reference types="react" />
import { IPaneComponentProps } from "babylonjs-inspector/components/actionTabs/paneComponent";
import { PaneComponent } from "babylonjs-inspector/components/actionTabs/paneComponent";
export class ToolsTabComponent extends PaneComponent {
    private _lockObject;
    private _videoRecorder;
    private _screenShotSize;
    private _gifOptions;
    private _useWidthHeight;
    private _isExportingGltf;
    private _gltfExportOptions;
    private _gifWorkerBlob;
    private _gifRecorder;
    private _previousRenderingScale;
    private _crunchingGIF;
    private _reflectorHostname;
    private _reflectorPort;
    private _reflector;
    private _envOptions;
    constructor(props: IPaneComponentProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    captureScreenshot(): void;
    captureRender(): void;
    recordVideo(): void;
    recordGIFInternal(): void;
    recordGIF(): void;
    importAnimations(event: any): void;
    exportGLTF(): void;
    exportBabylon(): void;
    createEnvTexture(): void;
    exportReplay(): void;
    startRecording(): void;
    applyDelta(file: File): void;
    connectReflector(): void;
    render(): JSX.Element | null;
}

}
declare module "babylonjs-inspector/components/actionTabs/tabsComponent" {
import * as React from "react";
import { PaneComponent } from "babylonjs-inspector/components/actionTabs/paneComponent";
interface ITabsComponentProps {
    children: any[];
    selectedIndex: number;
    onSelectedIndexChange: (value: number) => void;
}
export class TabsComponent extends React.Component<ITabsComponentProps> {
    constructor(props: ITabsComponentProps);
    onSelect(index: number): void;
    renderLabel(child: PaneComponent, index: number): JSX.Element;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/embedHost/embedHostComponent" {
import * as React from "react";
import { Scene } from "babylonjs/scene";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { IExplorerExtensibilityGroup, DebugLayerTab } from "babylonjs/Debug/debugLayer";
import "babylonjs-inspector/components/embedHost/embedHost.scss";
interface IEmbedHostComponentProps {
    scene: Scene;
    globalState: GlobalState;
    popupMode: boolean;
    noClose?: boolean;
    noExpand?: boolean;
    onClose: () => void;
    onPopup: () => void;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    initialTab?: DebugLayerTab;
}
export class EmbedHostComponent extends React.Component<IEmbedHostComponentProps> {
    private _once;
    private _splitRef;
    private _topPartRef;
    private _bottomPartRef;
    constructor(props: IEmbedHostComponentProps);
    componentDidMount(): void;
    renderContent(): JSX.Element;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/globalState" {
import { IGLTFValidationResults } from "babylonjs-gltf2interface";
import { Nullable } from "babylonjs/types";
import { Observer } from "babylonjs/Misc/observable";
import { Observable } from "babylonjs/Misc/observable";
import { ISceneLoaderPlugin, ISceneLoaderPluginAsync } from "babylonjs/Loading/sceneLoader";
import { Scene } from "babylonjs/scene";
import { Light } from "babylonjs/Lights/light";
import { Camera } from "babylonjs/Cameras/camera";
import { LightGizmo } from "babylonjs/Gizmos/lightGizmo";
import { CameraGizmo } from "babylonjs/Gizmos/cameraGizmo";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { ReplayRecorder } from "babylonjs-inspector/components/replayRecorder";
import { IGLTFLoaderExtension, GLTFFileLoader } from "babylonjs-loaders/glTF/index";
export class GlobalState {
    onSelectionChangedObservable: Observable<any>;
    onPropertyChangedObservable: Observable<PropertyChangedEvent>;
    onInspectorClosedObservable: Observable<Scene>;
    onTabChangedObservable: Observable<number>;
    onSelectionRenamedObservable: Observable<void>;
    onPluginActivatedObserver: Nullable<Observer<ISceneLoaderPlugin | ISceneLoaderPluginAsync>>;
    onNewSceneObservable: Observable<Scene>;
    sceneImportDefaults: {
        [key: string]: any;
    };
    validationResults: Nullable<IGLTFValidationResults>;
    onValidationResultsUpdatedObservable: Observable<Nullable<IGLTFValidationResults>>;
    onExtensionLoadedObservable: Observable<IGLTFLoaderExtension>;
    glTFLoaderExtensionDefaults: {
        [name: string]: {
            [key: string]: any;
        };
    };
    glTFLoaderDefaults: {
        [key: string]: any;
    };
    glTFLoaderExtensions: {
        [key: string]: IGLTFLoaderExtension;
    };
    blockMutationUpdates: boolean;
    selectedLineContainerTitles: Array<string>;
    selectedLineContainerTitlesNoFocus: Array<string>;
    recorder: ReplayRecorder;
    private _onlyUseEulers;
    get onlyUseEulers(): boolean;
    set onlyUseEulers(value: boolean);
    private _ignoreBackfacesForPicking;
    get ignoreBackfacesForPicking(): boolean;
    set ignoreBackfacesForPicking(value: boolean);
    init(propertyChangedObservable: Observable<PropertyChangedEvent>): void;
    prepareGLTFPlugin(loader: GLTFFileLoader): void;
    resetGLTFValidationResults(): void;
    lightGizmos: Array<LightGizmo>;
    enableLightGizmo(light: Light, enable?: boolean): void;
    cameraGizmos: Array<CameraGizmo>;
    enableCameraGizmo(camera: Camera, enable?: boolean): void;
    onSceneExplorerClosedObservable: Observable<void>;
    onActionTabsClosedObservable: Observable<void>;
}

}
declare module "babylonjs-inspector/components/graph/canvasGraphComponent" {
import { PerformanceViewerCollector } from "babylonjs/Misc/PerformanceViewer/performanceViewerCollector";
import { Observable } from "babylonjs/Misc/observable";
import * as React from "react";
import { IPerfLayoutSize, IVisibleRangeChangedObservableProps } from "babylonjs-inspector/components/graph/graphSupportingTypes";
import { Scene } from "babylonjs/scene";
interface ICanvasGraphComponentProps {
    id: string;
    scene: Scene;
    collector: PerformanceViewerCollector;
    layoutObservable?: Observable<IPerfLayoutSize>;
    returnToPlayheadObservable?: Observable<void>;
    onVisibleRangeChangedObservable?: Observable<IVisibleRangeChangedObservableProps>;
    initialGraphSize?: {
        width: number;
        height: number;
    };
}
export const CanvasGraphComponent: React.FC<ICanvasGraphComponentProps>;
export {};

}
declare module "babylonjs-inspector/components/graph/canvasGraphService" {
import { ICanvasGraphServiceSettings, IPerfLayoutSize } from "babylonjs-inspector/components/graph/graphSupportingTypes";
import { IPerfDatasets, IPerfMetadata } from "babylonjs/Misc/interfaces/iPerfViewer";
export class CanvasGraphService {
    private _ctx;
    private _width;
    private _height;
    private _sizeOfWindow;
    private _ticks;
    private _panPosition;
    private _position;
    private _datasetBounds;
    private _globalTimeMinMax;
    private _hoverPosition;
    private _drawableArea;
    private _axisHeight;
    private _tooltipItems;
    private _tooltipTextCache;
    private _tickerTextCache;
    private _tickerItems;
    private _preprocessedTooltipInfo;
    private _numberOfTickers;
    private _onVisibleRangeChangedObservable?;
    private readonly _addonFontLineHeight;
    private readonly _defaultLineHeight;
    readonly datasets: IPerfDatasets;
    metadata: Map<string, IPerfMetadata>;
    /**
     * Creates an instance of CanvasGraphService.
     *
     * @param canvas a pointer to the canvas dom element we would like to write to.
     * @param settings settings for our service.
     */
    constructor(canvas: HTMLCanvasElement, settings: ICanvasGraphServiceSettings);
    /**
     * This method lets the service know it should get ready to update what it is displaying.
     */
    update: (...args: any[]) => void;
    /**
     * Update the canvas graph service with the new height and width of the canvas.
     * @param size The new size of the canvas.
     */
    resize(size: IPerfLayoutSize): void;
    /**
     * Force resets the position in the data, effectively returning to the most current data.
     */
    resetDataPosition(): void;
    private _prevPointById;
    private _prevValueById;
    /**
     * This method draws the data and sets up the appropriate scales.
     */
    private _draw;
    private _drawTickers;
    /**
     * Returns the index of the closest time for the datasets.
     * Uses a modified binary search to get value.
     *
     * @param targetTime the time we want to get close to.
     * @returns index of the item with the closest time to the targetTime
     */
    private _getClosestPointToTimestamp;
    /**
     * This is a convenience method to get the number of collected slices.
     * @returns the total number of collected slices.
     */
    private _getNumberOfSlices;
    /**
     * Draws the time axis, adjusts the drawable area for the graph.
     *
     * @param timeMinMax the minimum and maximum for the time axis.
     * @param drawableArea the current allocated drawable area.
     */
    private _drawTimeAxis;
    /**
     * Given a timestamp (should be the maximum timestamp in view), this function returns the maximum unit the timestamp contains.
     * This information can be used for formatting purposes.
     * @param timestamp the maximum timestamp to find the maximum timestamp unit for.
     * @returns The maximum unit the timestamp has.
     */
    private _getTimestampUnit;
    /**
     * Given a timestamp and the interval unit, this function will parse the timestamp to the appropriate format.
     * @param timestamp The timestamp to parse
     * @param intervalUnit The maximum unit of the maximum timestamp in an interval.
     * @returns a string representing the parsed timestamp.
     */
    private _parseTimestamp;
    /**
     * Generates a list of ticks given the min and max of the axis, and the space available in the axis.
     *
     * @param minMax the minimum and maximum values of the axis
     * @param spaceAvailable the total amount of space we have allocated to our axis
     */
    private _generateTicks;
    /**
     * Nice number algorithm based on psueudo code defined in "Graphics Gems" by Andrew S. Glassner.
     * This will find a "nice" number approximately equal to num.
     *
     * @param num The number we want to get close to.
     * @param shouldRound if true we will round the number, otherwise we will get the ceiling.
     * @returns a "nice" number approximately equal to num.
     */
    private _niceNumber;
    /**
     * Gets the min and max as a single object from an array of numbers.
     * @param bounds
     * @param offset
     * @returns the min and max of the array.
     */
    private _getMinMax;
    /**
     * Converts a single number to a pixel coordinate in a single axis by normalizing the data to a [0, 1] scale using the minimum and maximum values.
     *
     * @param num the number we want to get the pixel coordinate for
     * @param minMax the min and max of the dataset in the axis we want the pixel coordinate for.
     * @param startingPixel the starting pixel coordinate (this means it takes account for any offset).
     * @param spaceAvailable the total space available in this axis.
     * @param shouldFlipValue if we should use a [1, 0] scale instead of a [0, 1] scale.
     * @returns the pixel coordinate of the value in a single axis.
     */
    private _getPixelForNumber;
    /**
     * Add in any necessary event listeners.
     *
     * @param canvas The canvas we want to attach listeners to.
     */
    private _attachEventListeners;
    /**
     * We remove all event listeners we added.
     *
     * @param canvas The canvas we want to remove listeners from.
     */
    private _removeEventListeners;
    /**
     * Handles what to do when we are hovering over the canvas and not panning.
     *
     * @param event A reference to the event to be handled.
     */
    private _handleDataHover;
    /**
     * Debounced processing and drawing of tooltip.
     */
    private _debouncedTooltip;
    /**
     * Handles what to do when we stop hovering over the canvas.
     */
    private _handleStopHover;
    /**
     * Given a line defined by P1: (x1, y1) and P2: (x2, y2) get the distance of P0 (x0, y0) from the line.
     * https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line#Line_defined_by_two_points
     * @param x1 x position of point P1
     * @param y1 y position of point P1
     * @param x2 x position of point P2
     * @param y2 y position of point P2
     * @param x0 x position of point P0
     * @param y0 y position of point P0
     * @returns distance of P0 from the line defined by P1 and P2
     */
    private _getDistanceFromLine;
    /**
     * This method does preprocessing calculations for the tooltip.
     * @param pos the position of our mouse.
     * @param drawableArea the remaining drawable area.
     */
    private _preprocessTooltip;
    /**
     * Draws the tooltip given the area it is allowed to draw in and the current pixel position.
     *
     * @param pos the position of the mouse cursor in pixels (x, y).
     * @param drawableArea  the available area we can draw in.
     */
    private _drawTooltip;
    /**
     * Gets the number from a pixel position given the minimum and maximum value in range, and the starting pixel and the ending pixel.
     *
     * @param pixel current pixel position we want to get the number for.
     * @param minMax the minimum and maximum number in the range.
     * @param startingPixel position of the starting pixel in range.
     * @param endingPixel position of ending pixel in range.
     * @param shouldFlip if we should use a [1, 0] scale instead of a [0, 1] scale.
     * @returns number corresponding to pixel position
     */
    private _getNumberFromPixel;
    /**
     * The handler for when we want to zoom in and out of the graph.
     *
     * @param event a mouse wheel event.
     */
    private _handleZoom;
    /**
     * Initializes the panning object and attaches appropriate listener.
     *
     * @param event the mouse event containing positional information.
     */
    private _handlePanStart;
    /**
     * While panning this event will keep track of the delta and update the "positions".
     *
     * @param event The mouse event that contains positional information.
     */
    private _handlePan;
    /**
     * Clears the panning object and removes the appropriate listener.
     */
    private _handlePanStop;
    /**
     * Method which returns true if the data should become realtime, false otherwise.
     *
     * @returns if the data should become realtime or not.
     */
    private _shouldBecomeRealtime;
    /**
     * Will generate a playhead with a futurebox that takes up (1-scalefactor)*100% of the canvas.
     *
     * @param drawableArea The remaining drawable area.
     * @param scaleFactor The Percentage between 0.0 and 1.0 of the canvas the data gets drawn on.
     */
    private _drawPlayheadRegion;
    /**
     *  Method to do cleanup when the object is done being used.
     *
     */
    destroy(): void;
    /**
     * This method clears the canvas
     */
    clear(): void;
}

}
declare module "babylonjs-inspector/components/graph/graphSupportingTypes" {
import { IPerfDatasets } from "babylonjs/Misc/interfaces/iPerfViewer";
import { Observable } from "babylonjs/Misc/observable";
/**
 * Defines a structure to hold max, min and a optional current.
 */
export interface IPerfMinMax {
    min: number;
    max: number;
    current?: number;
}
/**
 * Defines structure of the object which contains information related to panning.
 */
export interface IPerfMousePanningPosition {
    xPos: number;
    delta: number;
}
/**
 * Defines structure of the object which contains information regarding the bounds of each dataset we want to consider.
 */
export interface IPerfIndexBounds {
    start: number;
    end: number;
}
export interface IPerfLayoutSize {
    width: number;
    height: number;
}
/**
 * Defines the structure of the meta object for the tooltip that appears when hovering over a performance graph!
 */
export interface IPerfTooltip {
    text: string;
    color: string;
}
/**
 * Defines the structure of a cache object used to store the result of measureText().
 */
export interface IPerfTextMeasureCache {
    text: string;
    width: number;
}
/**
 * Defines a structure defining the available space in a drawable area.
 */
export interface IGraphDrawableArea {
    top: number;
    left: number;
    bottom: number;
    right: number;
}
/**
 * Defines the structure representing necessary ticker information.
 */
export interface IPerfTicker extends IPerfMinMax {
    id: string;
    text: string;
}
export interface IVisibleRangeChangedObservableProps {
    valueMap: Map<string, IPerfMinMax>;
}
/**
 * Defines what settings our canvas graphing service accepts
 */
export interface ICanvasGraphServiceSettings {
    datasets: IPerfDatasets;
    onVisibleRangeChangedObservable?: Observable<IVisibleRangeChangedObservableProps>;
}
/**
 * Defines the structure representing the preprocessable tooltip information.
 */
export interface ITooltipPreprocessedInformation {
    xForActualTimestamp: number;
    numberOfTooltipItems: number;
    longestText: string;
    focusedId: string;
}
export interface IPerfTooltipHoverPosition {
    xPos: number;
    yPos: number;
}
/**
 * Defines the supported timestamp units.
 */
export enum TimestampUnit {
    Milliseconds = 0,
    Seconds = 1,
    Minutes = 2,
    Hours = 3
}

}
declare module "babylonjs-inspector/components/headerComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
export interface IHeaderComponentProps {
    title: string;
    handleBack?: boolean;
    noExpand?: boolean;
    noClose?: boolean;
    noCommands?: boolean;
    onPopup: () => void;
    onClose: () => void;
    onSelectionChangedObservable?: Observable<any>;
}
export class HeaderComponent extends React.Component<IHeaderComponentProps, {
    isBackVisible: boolean;
}> {
    private _backStack;
    private _onSelectionChangeObserver;
    constructor(props: IHeaderComponentProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    goBack(): void;
    renderLogo(): JSX.Element | null;
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/components/popupComponent" {
import * as React from "react";
export interface IPopupComponentProps {
    id: string;
    title: string;
    size: {
        width: number;
        height: number;
    };
    onOpen?: (window: Window) => void;
    onClose: (window: Window) => void;
    onResize?: (window: Window) => void;
    onKeyUp?: (evt: KeyboardEvent) => void;
    onKeyDown?: (evt: KeyboardEvent) => void;
}
export class PopupComponent extends React.Component<IPopupComponentProps, {
    isComponentMounted: boolean;
    blockedByBrowser: boolean;
}> {
    private _container;
    private _window;
    private _host;
    constructor(props: IPopupComponentProps);
    componentDidMount(): void;
    onBeforeUnloadListener: () => void;
    openPopup(): void;
    componentWillUnmount(): void;
    getWindow(): Window | null;
    render(): React.ReactPortal | null;
}

}
declare module "babylonjs-inspector/components/propertyChangedEvent" {
export class PropertyChangedEvent {
    object: any;
    property: string;
    value: any;
    initialValue: any;
    allowNullValue?: boolean;
}

}
declare module "babylonjs-inspector/components/replayRecorder" {
import { Scene } from "babylonjs/scene";
export class ReplayRecorder {
    private _sceneRecorder;
    private _isRecording;
    get isRecording(): boolean;
    cancel(): void;
    trackScene(scene: Scene): void;
    applyDelta(json: any, scene: Scene): void;
    export(): void;
}

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/animationGroupTreeItemComponent" {
import { AnimationGroup } from "babylonjs/Animations/animationGroup";
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import * as React from "react";
interface IAnimationGroupItemComponentProps {
    animationGroup: AnimationGroup;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class AnimationGroupItemComponent extends React.Component<IAnimationGroupItemComponentProps> {
    constructor(props: IAnimationGroupItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/boneTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import * as React from "react";
import { Bone } from "babylonjs/Bones/bone";
interface IBoneTreeItemComponentProps {
    bone: Bone;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class BoneTreeItemComponent extends React.Component<IBoneTreeItemComponentProps> {
    constructor(props: IBoneTreeItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/cameraTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { Camera } from "babylonjs/Cameras/camera";
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ICameraTreeItemComponentProps {
    camera: Camera;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
    globalState: GlobalState;
}
export class CameraTreeItemComponent extends React.Component<ICameraTreeItemComponentProps, {
    isActive: boolean;
    isGizmoEnabled: boolean;
}> {
    private _onBeforeRenderObserver;
    constructor(props: ICameraTreeItemComponentProps);
    setActive(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    toggleGizmo(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/effectLayerPipelineTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import * as React from "react";
import { EffectLayer } from "babylonjs/Layers/effectLayer";
interface IEffectLayerItemComponenttProps {
    layer: EffectLayer;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class EffectLayerItemComponent extends React.Component<IEffectLayerItemComponenttProps> {
    constructor(props: IEffectLayerItemComponenttProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/gui/advancedDynamicTextureTreeItemComponent" {
import { Observable } from "babylonjs/Misc/observable";
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { AdvancedDynamicTexture } from "babylonjs-gui/2D/advancedDynamicTexture";
import * as React from "react";
interface IAdvancedDynamicTextureTreeItemComponentProps {
    texture: AdvancedDynamicTexture;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onSelectionChangedObservable?: Observable<any>;
    onClick: () => void;
}
export class AdvancedDynamicTextureTreeItemComponent extends React.Component<IAdvancedDynamicTextureTreeItemComponentProps, {
    isInPickingMode: boolean;
}> {
    private _onControlPickedObserver;
    constructor(props: IAdvancedDynamicTextureTreeItemComponentProps);
    componentWillUnmount(): void;
    onPickingMode(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/gui/controlTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { Control } from "babylonjs-gui/2D/controls/control";
import * as React from "react";
interface IControlTreeItemComponentProps {
    control: Control;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class ControlTreeItemComponent extends React.Component<IControlTreeItemComponentProps, {
    isActive: boolean;
    isVisible: boolean;
}> {
    constructor(props: IControlTreeItemComponentProps);
    highlight(): void;
    switchVisibility(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/gui/guiTools" {
import { AdvancedDynamicTexture } from "babylonjs-gui/2D/advancedDynamicTexture";
/**
 * Used to pass in the gui-editor package.
 * @param guiEditorPackage
 */
export function InjectGUIEditor(guiEditorPackage: any): void;
/**
 * Change the URL that the GUI editor loads from
 * @param guiEditorURL
 */
export function SetGUIEditorURL(guiEditorURL: string): void;
/**
 * Opens an ADT in the GUI editor
 * if you are in an ES6 environment, you must first call InjectGUIEditor to provide the gui-editor package
 * If you are in a UMD environment, it will load the package from a URL
 * @param adt
 */
export function EditAdvancedDynamicTexture(adt: AdvancedDynamicTexture): Promise<void>;

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/lightTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { Light } from "babylonjs/Lights/light";
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ILightTreeItemComponentProps {
    light: Light;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
    globalState: GlobalState;
}
export class LightTreeItemComponent extends React.Component<ILightTreeItemComponentProps, {
    isEnabled: boolean;
    isGizmoEnabled: boolean;
}> {
    constructor(props: ILightTreeItemComponentProps);
    switchIsEnabled(): void;
    toggleGizmo(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/materialTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { Material } from "babylonjs/Materials/material";
import * as React from "react";
import { NodeMaterial } from "babylonjs/Materials/Node/nodeMaterial";
interface IMaterialTreeItemComponentProps {
    material: Material | NodeMaterial;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class MaterialTreeItemComponent extends React.Component<IMaterialTreeItemComponentProps> {
    constructor(props: IMaterialTreeItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/meshTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { AbstractMesh } from "babylonjs/Meshes/abstractMesh";
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import "babylonjs/Rendering/boundingBoxRenderer";
interface IMeshTreeItemComponentProps {
    mesh: AbstractMesh;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
    globalState: GlobalState;
}
export class MeshTreeItemComponent extends React.Component<IMeshTreeItemComponentProps, {
    isBoundingBoxEnabled: boolean;
    isVisible: boolean;
}> {
    constructor(props: IMeshTreeItemComponentProps);
    showBoundingBox(): void;
    switchVisibility(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/particleSystemTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import * as React from "react";
import { IParticleSystem } from "babylonjs/Particles/IParticleSystem";
interface IParticleSystemTreeItemComponentProps {
    system: IParticleSystem;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class ParticleSystemTreeItemComponent extends React.Component<IParticleSystemTreeItemComponentProps> {
    constructor(props: IParticleSystemTreeItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/postProcessTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { PostProcess } from "babylonjs/PostProcesses/postProcess";
import * as React from "react";
interface IPostProcessItemComponentProps {
    postProcess: PostProcess;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class PostProcessItemComponent extends React.Component<IPostProcessItemComponentProps> {
    constructor(props: IPostProcessItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/renderingPipelineTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { PostProcessRenderPipeline } from "babylonjs/PostProcesses/RenderPipeline/postProcessRenderPipeline";
import * as React from "react";
interface IRenderPipelineItemComponenttProps {
    renderPipeline: PostProcessRenderPipeline;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class RenderingPipelineItemComponent extends React.Component<IRenderPipelineItemComponenttProps> {
    constructor(props: IRenderPipelineItemComponenttProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/sceneTreeItemComponent" {
import { Observable } from "babylonjs/Misc/observable";
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { Scene } from "babylonjs/scene";
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ISceneTreeItemComponentProps {
    scene: Scene;
    onRefresh: () => void;
    selectedEntity?: any;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onSelectionChangedObservable?: Observable<any>;
    globalState: GlobalState;
}
export class SceneTreeItemComponent extends React.Component<ISceneTreeItemComponentProps, {
    isSelected: boolean;
    isInPickingMode: boolean;
    gizmoMode: number;
}> {
    private _gizmoLayerOnPointerObserver;
    private _onPointerObserver;
    private _onSelectionChangeObserver;
    private _selectedEntity;
    private _posDragEnd;
    private _scaleDragEnd;
    private _rotateDragEnd;
    constructor(props: ISceneTreeItemComponentProps);
    shouldComponentUpdate(nextProps: ISceneTreeItemComponentProps, nextState: {
        isSelected: boolean;
        isInPickingMode: boolean;
    }): boolean;
    updateGizmoAutoPicking(isInPickingMode: boolean): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onSelect(): void;
    onPickingMode(): void;
    setGizmoMode(mode: number): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/skeletonTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import * as React from "react";
import { Skeleton } from "babylonjs/Bones/skeleton";
interface ISkeletonTreeItemComponentProps {
    skeleton: Skeleton;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class SkeletonTreeItemComponent extends React.Component<ISkeletonTreeItemComponentProps> {
    constructor(props: ISkeletonTreeItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/soundTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import * as React from "react";
import { Sound } from "babylonjs/Audio/sound";
interface ISoundTreeItemComponentProps {
    sound: Sound;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class SoundTreeItemComponent extends React.Component<ISoundTreeItemComponentProps> {
    constructor(props: ISoundTreeItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/spriteManagerTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import * as React from "react";
import { SpriteManager } from "babylonjs/Sprites/spriteManager";
interface ISpriteManagerTreeItemComponentProps {
    spriteManager: SpriteManager;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class SpriteManagerTreeItemComponent extends React.Component<ISpriteManagerTreeItemComponentProps> {
    constructor(props: ISpriteManagerTreeItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/spriteTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import * as React from "react";
import { Sprite } from "babylonjs/Sprites/sprite";
interface ISpriteTreeItemComponentProps {
    sprite: Sprite;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class SpriteTreeItemComponent extends React.Component<ISpriteTreeItemComponentProps> {
    constructor(props: ISpriteTreeItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/targetedAnimationTreeItemComponent" {
import { TargetedAnimation } from "babylonjs/Animations/animationGroup";
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import * as React from "react";
interface ITargetedAnimationItemComponentProps {
    targetedAnimation: TargetedAnimation;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class TargetedAnimationItemComponent extends React.Component<ITargetedAnimationItemComponentProps> {
    constructor(props: ITargetedAnimationItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/textureTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { Texture } from "babylonjs/Materials/Textures/texture";
import * as React from "react";
interface ITextureTreeItemComponentProps {
    texture: Texture;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class TextureTreeItemComponent extends React.Component<ITextureTreeItemComponentProps> {
    constructor(props: ITextureTreeItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/entities/transformNodeTreeItemComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { TransformNode } from "babylonjs/Meshes/transformNode";
import * as React from "react";
interface ITransformNodeItemComponentProps {
    transformNode: TransformNode;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export class TransformNodeItemComponent extends React.Component<ITransformNodeItemComponentProps> {
    constructor(props: ITransformNodeItemComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/extensionsComponent" {
import * as React from "react";
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
interface IExtensionsComponentProps {
    target: any;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
}
export class ExtensionsComponent extends React.Component<IExtensionsComponentProps, {
    popupVisible: boolean;
}> {
    private _popup;
    private _extensionRef;
    constructor(props: IExtensionsComponentProps);
    showPopup(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element | null;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/sceneExplorerComponent" {
import * as React from "react";
import { Nullable } from "babylonjs/types";
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { Scene } from "babylonjs/scene";
import { GlobalState } from "babylonjs-inspector/components/globalState";
import "babylonjs/Sprites/spriteSceneComponent";
import "babylonjs/Audio/audioSceneComponent";
import "babylonjs/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent";
import "babylonjs-inspector/components/sceneExplorer/sceneExplorer.scss";
interface ISceneExplorerFilterComponentProps {
    onFilter: (filter: string) => void;
}
export class SceneExplorerFilterComponent extends React.Component<ISceneExplorerFilterComponentProps> {
    constructor(props: ISceneExplorerFilterComponentProps);
    render(): JSX.Element;
}
interface ISceneExplorerComponentProps {
    scene: Scene;
    noCommands?: boolean;
    noHeader?: boolean;
    noExpand?: boolean;
    noClose?: boolean;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    globalState: GlobalState;
    popupMode?: boolean;
    onPopup?: () => void;
    onClose?: () => void;
}
export class SceneExplorerComponent extends React.Component<ISceneExplorerComponentProps, {
    filter: Nullable<string>;
    selectedEntity: any;
    scene: Scene;
}> {
    private _onSelectionChangeObserver;
    private _onSelectionRenamedObserver;
    private _onNewSceneAddedObserver;
    private _onNewSceneObserver;
    private _sceneExplorerRef;
    private _mutationTimeout;
    private _once;
    private _hooked;
    private _sceneMutationFunc;
    constructor(props: ISceneExplorerComponentProps);
    processMutation(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    filterContent(filter: string): void;
    findSiblings(parent: any, items: any[], target: any, goNext: boolean, data: {
        previousOne?: any;
        found?: boolean;
    }): boolean;
    processKeys(keyEvent: React.KeyboardEvent<HTMLDivElement>): void;
    renderContent(): JSX.Element | null;
    onClose(): void;
    onPopup(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/treeItemComponent" {
import * as React from "react";
import { Nullable } from "babylonjs/types";
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import { GlobalState } from "babylonjs-inspector/components/globalState";
export interface ITreeItemComponentProps {
    items?: Nullable<any[]>;
    label: string;
    offset: number;
    filter: Nullable<string>;
    forceSubitems?: boolean;
    globalState: GlobalState;
    entity?: any;
    selectedEntity: any;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    contextMenuItems?: {
        label: string;
        action: () => void;
    }[];
}
export class TreeItemComponent extends React.Component<ITreeItemComponentProps, {
    isExpanded: boolean;
    mustExpand: boolean;
}> {
    static _ContextMenuUniqueIdGenerator: number;
    constructor(props: ITreeItemComponentProps);
    switchExpandedState(): void;
    shouldComponentUpdate(nextProps: ITreeItemComponentProps, nextState: {
        isExpanded: boolean;
    }): boolean;
    expandAll(expand: boolean): void;
    renderContextMenu(): JSX.Element | null;
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/components/sceneExplorer/treeItemLabelComponent" {
import * as React from "react";

interface ITreeItemLabelComponentProps {
    label: string;
    onClick?: () => void;
    icon: any;
    color: string;
}
export class TreeItemLabelComponent extends React.Component<ITreeItemLabelComponentProps> {
    constructor(props: ITreeItemLabelComponentProps);
    onClick(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/components/sceneExplorer/treeItemSelectableComponent" {
import { Nullable } from "babylonjs/types";
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
export interface ITreeItemSelectableComponentProps {
    entity: any;
    selectedEntity?: any;
    mustExpand?: boolean;
    offset: number;
    globalState: GlobalState;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    filter: Nullable<string>;
}
export class TreeItemSelectableComponent extends React.Component<ITreeItemSelectableComponentProps, {
    isExpanded: boolean;
    isSelected: boolean;
}> {
    private _wasSelected;
    constructor(props: ITreeItemSelectableComponentProps);
    switchExpandedState(): void;
    shouldComponentUpdate(nextProps: ITreeItemSelectableComponentProps, nextState: {
        isExpanded: boolean;
        isSelected: boolean;
    }): boolean;
    scrollIntoView(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    onSelect(): void;
    renderChildren(): JSX.Element[] | null;
    render(): JSX.Element | null;
}

}
declare module "babylonjs-inspector/components/sceneExplorer/treeItemSpecializedComponent" {
import { IExplorerExtensibilityGroup } from "babylonjs/Debug/debugLayer";
import * as React from "react";
import { GlobalState } from "babylonjs-inspector/components/globalState";
interface ITreeItemSpecializedComponentProps {
    label: string;
    entity?: any;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    globalState: GlobalState;
    onClick?: () => void;
}
export class TreeItemSpecializedComponent extends React.Component<ITreeItemSpecializedComponentProps> {
    constructor(props: ITreeItemSpecializedComponentProps);
    onClick(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/index" {
export * from "babylonjs-inspector/inspector";
export * from "babylonjs-inspector/components/sceneExplorer/entities/gui/guiTools";

}
declare module "babylonjs-inspector/inspector" {
import * as React from "react";
import { IInspectorOptions } from "babylonjs/Debug/debugLayer";
import { Observable } from "babylonjs/Misc/observable";
import { Scene } from "babylonjs/scene";
import { PropertyChangedEvent } from "babylonjs-inspector/components/propertyChangedEvent";
import { IPopupComponentProps } from "babylonjs-inspector/components/popupComponent";
export interface IPersistentPopupConfiguration {
    props: IPopupComponentProps;
    children: React.ReactNode;
    closeWhenSceneExplorerCloses?: boolean;
    closeWhenActionTabsCloses?: boolean;
}
export class Inspector {
    private static _SceneExplorerHost;
    private static _ActionTabsHost;
    private static _EmbedHost;
    private static _NewCanvasContainer;
    private static _PersistentPopupHost;
    private static _SceneExplorerWindow;
    private static _ActionTabsWindow;
    private static _EmbedHostWindow;
    private static _Scene;
    private static _OpenedPane;
    private static _OnBeforeRenderObserver;
    private static _OnSceneExplorerClosedObserver;
    private static _OnActionTabsClosedObserver;
    static OnSelectionChangeObservable: Observable<any>;
    static OnPropertyChangedObservable: Observable<PropertyChangedEvent>;
    private static _GlobalState;
    static MarkLineContainerTitleForHighlighting(title: string): void;
    static MarkMultipleLineContainerTitlesForHighlighting(titles: string[]): void;
    private static _CopyStyles;
    private static _CreateSceneExplorer;
    private static _CreateActionTabs;
    private static _CreateEmbedHost;
    static _CreatePopup(title: string, windowVariableName: string, width?: number, height?: number, lateBinding?: boolean): HTMLDivElement | null;
    static get IsVisible(): boolean;
    static EarlyAttachToLoader(): void;
    static Show(scene: Scene, userOptions: Partial<IInspectorOptions>): void;
    static _SetNewScene(scene: Scene): void;
    static _CreateCanvasContainer(parentControl: HTMLElement): void;
    private static _DestroyCanvasContainer;
    private static _Cleanup;
    private static _RemoveElementFromDOM;
    static Hide(): void;
    static _CreatePersistentPopup(config: IPersistentPopupConfiguration, hostElement: HTMLElement): void;
    static _ClosePersistentPopup(): void;
}

}
declare module "babylonjs-inspector/legacy/legacy" {
export * from "babylonjs-inspector/index";

}
declare module "babylonjs-inspector/lod" {
/** @hidden */
export var lodPixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-inspector/lodCube" {
/** @hidden */
export var lodCubePixelShader: {
    name: string;
    shader: string;
};

}
declare module "babylonjs-inspector/textureHelper" {
import { GlobalState } from "babylonjs-inspector/components/globalState";
import { BaseTexture } from "babylonjs/Materials/Textures/baseTexture";
import "babylonjs-inspector/lod";
import "babylonjs-inspector/lodCube";
export interface TextureChannelsToDisplay {
    R: boolean;
    G: boolean;
    B: boolean;
    A: boolean;
}
export class TextureHelper {
    private static _ProcessAsync;
    static GetTextureDataAsync(texture: BaseTexture, width: number, height: number, face: number, channels: TextureChannelsToDisplay, globalState?: GlobalState, lod?: number): Promise<Uint8Array>;
}

}
declare module "babylonjs-inspector/tools" {
export class Tools {
    static LookForItem(item: any, selectedEntity: any): boolean;
    private static _RecursiveRemoveHiddenMeshesAndHoistChildren;
    static SortAndFilter(parent: any, items: any[]): any[];
}

}
declare module "babylonjs-inspector/colorPicker/colorComponentEntry" {
import * as React from "react";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
export interface IColorComponentEntryProps {
    value: number;
    label: string;
    max?: number;
    min?: number;
    onChange: (value: number) => void;
    disabled?: boolean;
    lockObject: LockObject;
}
export class ColorComponentEntry extends React.Component<IColorComponentEntryProps> {
    constructor(props: IColorComponentEntryProps);
    updateValue(valueString: string): void;
    lock(): void;
    unlock(): void;
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/colorPicker/colorPicker" {
import * as React from "react";
import { Color3, Color4 } from "babylonjs/Maths/math.color";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import "babylonjs-inspector/colorPicker/colorPicker.scss";
/**
 * Interface used to specify creation options for color picker
 */
export interface IColorPickerProps {
    color: Color3 | Color4;
    linearhint?: boolean;
    debugMode?: boolean;
    onColorChanged?: (color: Color3 | Color4) => void;
    lockObject: LockObject;
}
/**
 * Interface used to specify creation options for color picker
 */
export interface IColorPickerState {
    color: Color3;
    alpha: number;
}
/**
 * Class used to create a color picker
 */
export class ColorPicker extends React.Component<IColorPickerProps, IColorPickerState> {
    private _saturationRef;
    private _hueRef;
    private _isSaturationPointerDown;
    private _isHuePointerDown;
    constructor(props: IColorPickerProps);
    shouldComponentUpdate(nextProps: IColorPickerProps, nextState: IColorPickerState): boolean;
    onSaturationPointerDown(evt: React.PointerEvent<HTMLDivElement>): void;
    onSaturationPointerUp(evt: React.PointerEvent<HTMLDivElement>): void;
    onSaturationPointerMove(evt: React.PointerEvent<HTMLDivElement>): void;
    onHuePointerDown(evt: React.PointerEvent<HTMLDivElement>): void;
    onHuePointerUp(evt: React.PointerEvent<HTMLDivElement>): void;
    onHuePointerMove(evt: React.PointerEvent<HTMLDivElement>): void;
    private _evaluateSaturation;
    private _evaluateHue;
    componentDidUpdate(): void;
    raiseOnColorChanged(): void;
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/colorPicker/hexColor" {
import * as React from "react";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
export interface IHexColorProps {
    value: string;
    expectedLength: number;
    onChange: (value: string) => void;
    lockObject: LockObject;
}
export class HexColor extends React.Component<IHexColorProps, {
    hex: string;
}> {
    constructor(props: IHexColorProps);
    shouldComponentUpdate(nextProps: IHexColorProps, nextState: {
        hex: string;
    }): boolean;
    lock(): void;
    unlock(): void;
    updateHexValue(valueString: string): void;
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/components/Button" {
/// <reference types="react" />
export type ButtonProps = {
    disabled?: boolean;
    active?: boolean;
    onClick?: () => void;
    color: "light" | "dark";
    size: "default" | "small" | "wide";
    title?: string;
};
export const Button: React.FC<ButtonProps>;

}
declare module "babylonjs-inspector/components/classNames" {
export function ClassNames(names: any, styleObject: any): string;

}
declare module "babylonjs-inspector/components/Icon" {
/// <reference types="react" />
export type IconProps = {
    color?: "dark" | "light";
    icon: string;
};
export const Icon: React.FC<IconProps>;

}
declare module "babylonjs-inspector/components/Label" {
import { ReactChild } from "react";
export type LabelProps = {
    text: string;
    children?: ReactChild;
    color?: "dark" | "light";
};
export const Label: React.FC<LabelProps>;

}
declare module "babylonjs-inspector/components/Toggle" {
/// <reference types="react" />
export type ToggleProps = {
    toggled: "on" | "mixed" | "off";
    onToggle?: () => void;
    padded?: boolean;
    color?: "dark" | "light";
};
export const Toggle: React.FC<ToggleProps>;

}
declare module "babylonjs-inspector/lines/booleanLineComponent" {
import * as React from "react";
export interface IBooleanLineComponentProps {
    label: string;
    value: boolean;
    icon?: string;
    iconLabel?: string;
}
export class BooleanLineComponent extends React.Component<IBooleanLineComponentProps> {
    constructor(props: IBooleanLineComponentProps);
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/lines/buttonLineComponent" {
import * as React from "react";
export interface IButtonLineComponentProps {
    label: string;
    onClick: () => void;
    icon?: string;
    iconLabel?: string;
    isDisabled?: boolean;
}
export class ButtonLineComponent extends React.Component<IButtonLineComponentProps> {
    constructor(props: IButtonLineComponentProps);
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/lines/checkBoxLineComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";

export interface ICheckBoxLineComponentProps {
    label?: string;
    target?: any;
    propertyName?: string;
    isSelected?: () => boolean;
    onSelect?: (value: boolean) => void;
    onValueChanged?: () => void;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    disabled?: boolean;
    icon?: string;
    iconLabel?: string;
    faIcons?: {
        enabled: any;
        disabled: any;
    };
    large?: boolean;
}
export class CheckBoxLineComponent extends React.Component<ICheckBoxLineComponentProps, {
    isSelected: boolean;
    isDisabled?: boolean;
    isConflict: boolean;
}> {
    private _localChange;
    constructor(props: ICheckBoxLineComponentProps);
    shouldComponentUpdate(nextProps: ICheckBoxLineComponentProps, nextState: {
        isSelected: boolean;
        isDisabled: boolean;
        isConflict: boolean;
    }): boolean;
    onChange(): void;
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/lines/color3LineComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
export interface IColor3LineComponentProps {
    label: string;
    target: any;
    propertyName: string;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    isLinear?: boolean;
    icon?: string;
    lockObject: LockObject;
    iconLabel?: string;
    onChange?: () => void;
}
export class Color3LineComponent extends React.Component<IColor3LineComponentProps> {
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/lines/color4LineComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
export interface IColor4LineComponentProps {
    label: string;
    target?: any;
    propertyName: string;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    onChange?: () => void;
    isLinear?: boolean;
    icon?: string;
    iconLabel?: string;
    lockObject: LockObject;
}
export class Color4LineComponent extends React.Component<IColor4LineComponentProps> {
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/lines/colorLineComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { Color4 } from "babylonjs/Maths/math.color";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
export interface IColorLineComponentProps {
    label: string;
    target?: any;
    propertyName: string;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    onChange?: () => void;
    isLinear?: boolean;
    icon?: string;
    iconLabel?: string;
    disableAlpha?: boolean;
    lockObject: LockObject;
}
interface IColorLineComponentState {
    isExpanded: boolean;
    color: Color4;
}
export class ColorLineComponent extends React.Component<IColorLineComponentProps, IColorLineComponentState> {
    constructor(props: IColorLineComponentProps);
    shouldComponentUpdate(nextProps: IColorLineComponentProps, nextState: IColorLineComponentState): boolean;
    getValue(props?: Readonly<IColorLineComponentProps> & Readonly<{
        children?: React.ReactNode;
    }>): Color4;
    setColorFromString(colorString: string): void;
    setColor(newColor: Color4): void;
    switchExpandState(): void;
    updateStateR(value: number): void;
    updateStateG(value: number): void;
    updateStateB(value: number): void;
    updateStateA(value: number): void;
    copyToClipboard(): void;
    private _convertToColor;
    private _toColor3;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/colorPickerComponent" {
import * as React from "react";
import { Color4, Color3 } from "babylonjs/Maths/math.color";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
export interface IColorPickerComponentProps {
    value: Color4 | Color3;
    linearHint?: boolean;
    onColorChanged: (newOne: string) => void;
    icon?: string;
    iconLabel?: string;
    shouldPopRight?: boolean;
    lockObject?: LockObject;
}
interface IColorPickerComponentState {
    pickerEnabled: boolean;
    color: Color3 | Color4;
    hex: string;
}
export class ColorPickerLineComponent extends React.Component<IColorPickerComponentProps, IColorPickerComponentState> {
    private _floatRef;
    private _floatHostRef;
    constructor(props: IColorPickerComponentProps);
    syncPositions(): void;
    shouldComponentUpdate(nextProps: IColorPickerComponentProps, nextState: IColorPickerComponentState): boolean;
    getHexString(props?: Readonly<IColorPickerComponentProps> & Readonly<{
        children?: React.ReactNode;
    }>): string;
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/draggableLineComponent" {
import * as React from "react";
export interface IButtonLineComponentProps {
    data: string;
    tooltip: string;
}
export class DraggableLineComponent extends React.Component<IButtonLineComponentProps> {
    constructor(props: IButtonLineComponentProps);
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/lines/fileButtonLineComponent" {
import * as React from "react";
interface IFileButtonLineComponentProps {
    label: string;
    onClick: (file: File) => void;
    accept: string;
    icon?: string;
    iconLabel?: string;
}
export class FileButtonLineComponent extends React.Component<IFileButtonLineComponentProps> {
    private static _IDGenerator;
    private _id;
    private _uploadInputRef;
    constructor(props: IFileButtonLineComponentProps);
    onChange(evt: any): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/fileMultipleButtonLineComponent" {
import * as React from "react";
interface IFileMultipleButtonLineComponentProps {
    label: string;
    onClick: (event: any) => void;
    accept: string;
    icon?: string;
    iconLabel?: string;
}
export class FileMultipleButtonLineComponent extends React.Component<IFileMultipleButtonLineComponentProps> {
    private static _IDGenerator;
    private _id;
    private _uploadInputRef;
    constructor(props: IFileMultipleButtonLineComponentProps);
    onChange(evt: any): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/floatLineComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IFloatLineComponentProps {
    label: string;
    target: any;
    propertyName: string;
    lockObject?: LockObject;
    onChange?: (newValue: number) => void;
    isInteger?: boolean;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    additionalClass?: string;
    step?: string;
    digits?: number;
    useEuler?: boolean;
    min?: number;
    max?: number;
    smallUI?: boolean;
    onEnter?: (newValue: number) => void;
    icon?: string;
    iconLabel?: string;
    defaultValue?: number;
    arrows?: boolean;
    unit?: React.ReactNode;
    onDragStart?: (newValue: number) => void;
    onDragStop?: (newValue: number) => void;
}
export class FloatLineComponent extends React.Component<IFloatLineComponentProps, {
    value: string;
    dragging: boolean;
}> {
    private _localChange;
    private _store;
    constructor(props: IFloatLineComponentProps);
    componentWillUnmount(): void;
    getValueString(value: any): string;
    shouldComponentUpdate(nextProps: IFloatLineComponentProps, nextState: {
        value: string;
        dragging: boolean;
    }): boolean;
    raiseOnPropertyChanged(newValue: number, previousValue: number): void;
    updateValue(valueString: string): void;
    lock(): void;
    unlock(): void;
    incrementValue(amount: number): void;
    onKeyDown(event: React.KeyboardEvent): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/hexLineComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IHexLineComponentProps {
    label: string;
    target: any;
    propertyName: string;
    lockObject?: LockObject;
    onChange?: (newValue: number) => void;
    isInteger?: boolean;
    replaySourceReplacement?: string;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    additionalClass?: string;
    step?: string;
    digits?: number;
    useEuler?: boolean;
    min?: number;
    icon?: string;
    iconLabel?: string;
}
export class HexLineComponent extends React.Component<IHexLineComponentProps, {
    value: string;
}> {
    private _localChange;
    private _store;
    private _propertyChange;
    constructor(props: IHexLineComponentProps);
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: IHexLineComponentProps, nextState: {
        value: string;
    }): boolean;
    raiseOnPropertyChanged(newValue: number, previousValue: number): void;
    convertToHexString(valueString: string): string;
    updateValue(valueString: string, raisePropertyChanged: boolean): void;
    lock(): void;
    unlock(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/iconButtonLineComponent" {
import * as React from "react";
export interface IIconButtonLineComponentProps {
    icon: string;
    onClick: () => void;
    tooltip: string;
    active?: boolean;
}
export class IconButtonLineComponent extends React.Component<IIconButtonLineComponentProps> {
    constructor(props: IIconButtonLineComponentProps);
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/lines/iconComponent" {
import * as React from "react";
interface IIconComponentProps {
    icon: string;
    label?: string;
}
export class IconComponent extends React.Component<IIconComponentProps> {
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/indentedTextLineComponent" {
import * as React from "react";
interface IIndentedTextLineComponentProps {
    value?: string;
    color?: string;
    underline?: boolean;
    onLink?: () => void;
    url?: string;
    additionalClass?: string;
}
export class IndentedTextLineComponent extends React.Component<IIndentedTextLineComponentProps> {
    constructor(props: IIndentedTextLineComponentProps);
    onLink(): void;
    renderContent(): JSX.Element;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/inputArrowsComponent" {
import * as React from "react";
interface IInputArrowsComponentProps {
    incrementValue: (amount: number) => void;
    setDragging: (dragging: boolean) => void;
}
export class InputArrowsComponent extends React.Component<IInputArrowsComponentProps> {
    private _arrowsRef;
    private _drag;
    private _releaseListener;
    private _lockChangeListener;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/iSelectedLineContainer" {
export interface ISelectedLineContainer {
    selectedLineContainerTitles: Array<string>;
    selectedLineContainerTitlesNoFocus: Array<string>;
}

}
declare module "babylonjs-inspector/lines/lineContainerComponent" {
import * as React from "react";
import { ISelectedLineContainer } from "babylonjs-inspector/lines/iSelectedLineContainer";
interface ILineContainerComponentProps {
    selection?: ISelectedLineContainer;
    title: string;
    children: any[] | any;
    closed?: boolean;
}
export class LineContainerComponent extends React.Component<ILineContainerComponentProps, {
    isExpanded: boolean;
    isHighlighted: boolean;
}> {
    constructor(props: ILineContainerComponentProps);
    switchExpandedState(): void;
    renderHeader(): JSX.Element;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/linkButtonComponent" {
import * as React from "react";

interface ILinkButtonComponentProps {
    label: string;
    buttonLabel: string;
    url?: string;
    onClick: () => void;
    icon?: any;
    onIconClick?: () => void;
}
export class LinkButtonComponent extends React.Component<ILinkButtonComponentProps> {
    constructor(props: ILinkButtonComponentProps);
    onLink(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/matrixLineComponent" {
import * as React from "react";
import { Vector3, Vector4 } from "babylonjs/Maths/math.vector";
import { Matrix } from "babylonjs/Maths/math.vector";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IMatrixLineComponentProps {
    label: string;
    target: any;
    propertyName: string;
    step?: number;
    onChange?: (newValue: Matrix) => void;
    onModeChange?: (mode: number) => void;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    mode?: number;
    lockObject: LockObject;
}
export class MatrixLineComponent extends React.Component<IMatrixLineComponentProps, {
    value: Matrix;
    mode: number;
    angle: number;
}> {
    private _localChange;
    constructor(props: IMatrixLineComponentProps);
    shouldComponentUpdate(nextProps: IMatrixLineComponentProps, nextState: {
        value: Matrix;
        mode: number;
        angle: number;
    }): boolean;
    raiseOnPropertyChanged(previousValue: Vector3): void;
    updateMatrix(): void;
    updateRow(value: Vector4, row: number): void;
    updateBasedOnMode(value: number): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/messageLineComponent" {
import * as React from "react";

interface IMessageLineComponentProps {
    text: string;
    color?: string;
    icon?: any;
}
export class MessageLineComponent extends React.Component<IMessageLineComponentProps> {
    constructor(props: IMessageLineComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/numericInputComponent" {
import * as React from "react";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface INumericInputComponentProps {
    label: string;
    value: number;
    step?: number;
    onChange: (value: number) => void;
    precision?: number;
    icon?: string;
    iconLabel?: string;
    lockObject: LockObject;
}
export class NumericInputComponent extends React.Component<INumericInputComponentProps, {
    value: string;
}> {
    static defaultProps: {
        step: number;
    };
    private _localChange;
    constructor(props: INumericInputComponentProps);
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: INumericInputComponentProps, nextState: {
        value: string;
    }): boolean;
    updateValue(evt: any): void;
    onBlur(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/optionsLineComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { IInspectableOptions } from "babylonjs/Misc/iInspectable";
export const Null_Value: number;
export interface IOptionsLineComponentProps {
    label: string;
    target: any;
    propertyName: string;
    options: IInspectableOptions[];
    noDirectUpdate?: boolean;
    onSelect?: (value: number | string) => void;
    extractValue?: (target: any) => number | string;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    allowNullValue?: boolean;
    icon?: string;
    iconLabel?: string;
    className?: string;
    valuesAreStrings?: boolean;
    defaultIfNull?: number;
}
export class OptionsLineComponent extends React.Component<IOptionsLineComponentProps, {
    value: number | string;
}> {
    private _localChange;
    private _remapValueIn;
    private _remapValueOut;
    private _getValue;
    constructor(props: IOptionsLineComponentProps);
    shouldComponentUpdate(nextProps: IOptionsLineComponentProps, nextState: {
        value: number;
    }): boolean;
    raiseOnPropertyChanged(newValue: number, previousValue: number): void;
    setValue(value: string | number): void;
    updateValue(valueString: string): void;
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/lines/popup" {
export class Popup {
    static CreatePopup(title: string, windowVariableName: string, width?: number, height?: number): HTMLDivElement | null;
    private static _CopyStyles;
}

}
declare module "babylonjs-inspector/lines/radioLineComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
interface IRadioButtonLineComponentProps {
    onSelectionChangedObservable: Observable<RadioButtonLineComponent>;
    label: string;
    isSelected: () => boolean;
    onSelect: () => void;
    icon?: string;
    iconLabel?: string;
}
export class RadioButtonLineComponent extends React.Component<IRadioButtonLineComponentProps, {
    isSelected: boolean;
}> {
    private _onSelectionChangedObserver;
    constructor(props: IRadioButtonLineComponentProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onChange(): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/sliderLineComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface ISliderLineComponentProps {
    label: string;
    target?: any;
    propertyName?: string;
    minimum: number;
    maximum: number;
    step: number;
    directValue?: number;
    useEuler?: boolean;
    onChange?: (value: number) => void;
    onInput?: (value: number) => void;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    decimalCount?: number;
    margin?: boolean;
    icon?: string;
    iconLabel?: string;
    lockObject?: LockObject;
    unit?: React.ReactNode;
}
export class SliderLineComponent extends React.Component<ISliderLineComponentProps, {
    value: number;
}> {
    private _localChange;
    constructor(props: ISliderLineComponentProps);
    shouldComponentUpdate(nextProps: ISliderLineComponentProps, nextState: {
        value: number;
    }): boolean;
    onChange(newValueString: any): void;
    onInput(newValueString: any): void;
    prepareDataToRead(value: number): number;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/targetsProxy" {
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { Observable } from "babylonjs/Misc/observable";
export const conflictingValuesPlaceholder = "\u2014";
/**
 *
 * @param targets a list of selected targets
 * @param onPropertyChangedObservable
 * @param getProperty
 * @returns a proxy object that can be passed as a target into the input
 */
export function makeTargetsProxy<Type>(targets: Type[], onPropertyChangedObservable?: Observable<PropertyChangedEvent>, getProperty?: (target: Type, property: keyof Type) => any): any;

}
declare module "babylonjs-inspector/lines/textInputLineComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
export interface ITextInputLineComponentProps {
    label?: string;
    lockObject?: LockObject;
    target?: any;
    propertyName?: string;
    value?: string;
    onChange?: (value: string) => void;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    icon?: string;
    iconLabel?: string;
    noUnderline?: boolean;
    numbersOnly?: boolean;
    delayInput?: boolean;
    arrows?: boolean;
    arrowsIncrement?: (amount: number) => void;
    step?: number;
    numeric?: boolean;
    roundValues?: boolean;
    min?: number;
    max?: number;
    placeholder?: string;
    unit?: React.ReactNode;
    validator?: (value: string) => boolean;
    multilines?: boolean;
}
export class TextInputLineComponent extends React.Component<ITextInputLineComponentProps, {
    value: string;
    dragging: boolean;
}> {
    private _localChange;
    constructor(props: ITextInputLineComponentProps);
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: ITextInputLineComponentProps, nextState: {
        value: string;
        dragging: boolean;
    }): boolean;
    raiseOnPropertyChanged(newValue: string, previousValue: string): void;
    getCurrentNumericValue(value: string): number;
    updateValue(value: string, valueToValidate?: string): void;
    incrementValue(amount: number): void;
    onKeyDown(event: React.KeyboardEvent): void;
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/lines/textLineComponent" {
import * as React from "react";
interface ITextLineComponentProps {
    label?: string;
    value?: string;
    color?: string;
    underline?: boolean;
    onLink?: () => void;
    url?: string;
    ignoreValue?: boolean;
    additionalClass?: string;
    icon?: string;
    iconLabel?: string;
    tooltip?: string;
}
export class TextLineComponent extends React.Component<ITextLineComponentProps> {
    constructor(props: ITextLineComponentProps);
    onLink(): void;
    renderContent(): JSX.Element | null;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/unitButton" {
/// <reference types="react" />
interface IUnitButtonProps {
    unit: string;
    locked?: boolean;
    onClick?: (unit: string) => void;
}
export function UnitButton(props: IUnitButtonProps): JSX.Element;
export {};

}
declare module "babylonjs-inspector/lines/valueLineComponent" {
import * as React from "react";
interface IValueLineComponentProps {
    label: string;
    value: number;
    color?: string;
    fractionDigits?: number;
    units?: string;
    icon?: string;
    iconLabel?: string;
}
export class ValueLineComponent extends React.Component<IValueLineComponentProps> {
    constructor(props: IValueLineComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/vector2LineComponent" {
import * as React from "react";
import { Vector2 } from "babylonjs/Maths/math.vector";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IVector2LineComponentProps {
    label: string;
    target: any;
    propertyName: string;
    step?: number;
    onChange?: (newvalue: Vector2) => void;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    icon?: string;
    iconLabel?: string;
    lockObject: LockObject;
}
export class Vector2LineComponent extends React.Component<IVector2LineComponentProps, {
    isExpanded: boolean;
    value: Vector2;
}> {
    static defaultProps: {
        step: number;
    };
    private _localChange;
    constructor(props: IVector2LineComponentProps);
    shouldComponentUpdate(nextProps: IVector2LineComponentProps, nextState: {
        isExpanded: boolean;
        value: Vector2;
    }): boolean;
    switchExpandState(): void;
    raiseOnPropertyChanged(previousValue: Vector2): void;
    updateStateX(value: number): void;
    updateStateY(value: number): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/vector3LineComponent" {
import * as React from "react";
import { Vector3 } from "babylonjs/Maths/math.vector";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IVector3LineComponentProps {
    label: string;
    target: any;
    propertyName: string;
    step?: number;
    onChange?: (newvalue: Vector3) => void;
    useEuler?: boolean;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    noSlider?: boolean;
    icon?: string;
    iconLabel?: string;
    lockObject: LockObject;
}
export class Vector3LineComponent extends React.Component<IVector3LineComponentProps, {
    isExpanded: boolean;
    value: Vector3;
}> {
    static defaultProps: {
        step: number;
    };
    private _localChange;
    constructor(props: IVector3LineComponentProps);
    getCurrentValue(): any;
    shouldComponentUpdate(nextProps: IVector3LineComponentProps, nextState: {
        isExpanded: boolean;
        value: Vector3;
    }): boolean;
    switchExpandState(): void;
    raiseOnPropertyChanged(previousValue: Vector3): void;
    updateVector3(): void;
    updateStateX(value: number): void;
    updateStateY(value: number): void;
    updateStateZ(value: number): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/lines/vector4LineComponent" {
import * as React from "react";
import { Vector4 } from "babylonjs/Maths/math.vector";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IVector4LineComponentProps {
    label: string;
    target?: any;
    propertyName?: string;
    step?: number;
    onChange?: (newvalue: Vector4) => void;
    useEuler?: boolean;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    icon?: string;
    iconLabel?: string;
    value?: Vector4;
    lockObject: LockObject;
}
export class Vector4LineComponent extends React.Component<IVector4LineComponentProps, {
    isExpanded: boolean;
    value: Vector4;
}> {
    static defaultProps: {
        step: number;
    };
    private _localChange;
    constructor(props: IVector4LineComponentProps);
    getCurrentValue(): any;
    shouldComponentUpdate(nextProps: IVector4LineComponentProps, nextState: {
        isExpanded: boolean;
        value: Vector4;
    }): boolean;
    switchExpandState(): void;
    raiseOnPropertyChanged(previousValue: Vector4): void;
    updateVector4(): void;
    updateStateX(value: number): void;
    updateStateY(value: number): void;
    updateStateZ(value: number): void;
    updateStateW(value: number): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/nodeGraphSystem/displayLedger" {
export class DisplayLedger {
    static RegisteredControls: {
        [key: string]: any;
    };
}

}
declare module "babylonjs-inspector/nodeGraphSystem/frameNodePort" {
import { IDisplayManager } from "babylonjs-inspector/nodeGraphSystem/interfaces/displayManager";
import { Observable } from "babylonjs/Misc/observable";
import { Nullable } from "babylonjs/types";
import { IPortData } from "babylonjs-inspector/nodeGraphSystem/interfaces/portData";
import { NodePort } from "babylonjs-inspector/nodeGraphSystem/nodePort";
import { GraphNode } from "babylonjs-inspector/nodeGraphSystem/graphNode";
import { FramePortPosition } from "babylonjs-inspector/nodeGraphSystem/graphFrame";
import { StateManager } from "babylonjs-inspector/nodeGraphSystem/stateManager";
export class FrameNodePort extends NodePort {
    portData: IPortData;
    node: GraphNode;
    private _parentFrameId;
    private _isInput;
    private _framePortPosition;
    private _framePortId;
    private _onFramePortPositionChangedObservable;
    get parentFrameId(): number;
    get onFramePortPositionChangedObservable(): Observable<FrameNodePort>;
    get isInput(): boolean;
    get framePortId(): number;
    get framePortPosition(): FramePortPosition;
    set framePortPosition(position: FramePortPosition);
    constructor(portContainer: HTMLElement, portData: IPortData, node: GraphNode, stateManager: StateManager, isInput: boolean, framePortId: number, parentFrameId: number);
    static CreateFrameNodePortElement(portData: IPortData, node: GraphNode, root: HTMLElement, displayManager: Nullable<IDisplayManager>, stateManager: StateManager, isInput: boolean, framePortId: number, parentFrameId: number): FrameNodePort;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/graphCanvas" {
import * as React from "react";
import { GraphNode } from "babylonjs-inspector/nodeGraphSystem/graphNode";
import { Nullable } from "babylonjs/types";
import { NodeLink } from "babylonjs-inspector/nodeGraphSystem/nodeLink";
import { NodePort } from "babylonjs-inspector/nodeGraphSystem/nodePort";
import { GraphFrame } from "babylonjs-inspector/nodeGraphSystem/graphFrame";
import { IEditorData, IFrameData } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeLocationInfo";
import { StateManager } from "babylonjs-inspector/nodeGraphSystem/stateManager";
import { INodeData } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeData";
import { IPortData } from "babylonjs-inspector/nodeGraphSystem/interfaces/portData";
import { INodeContainer } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeContainer";
import "babylonjs-inspector/nodeGraphSystem/scss/graphCanvas.scss";
export interface IGraphCanvasComponentProps {
    stateManager: StateManager;
    onEmitNewNode: (nodeData: INodeData) => GraphNode;
}
export class GraphCanvasComponent extends React.Component<IGraphCanvasComponentProps> implements INodeContainer {
    static readonly NodeWidth: number;
    private readonly _minZoom;
    private readonly _maxZoom;
    private _hostCanvas;
    private _graphCanvas;
    private _selectionContainer;
    private _frameContainer;
    private _svgCanvas;
    private _rootContainer;
    private _nodes;
    private _links;
    private _mouseStartPointX;
    private _mouseStartPointY;
    private _dropPointX;
    private _dropPointY;
    private _selectionStartX;
    private _selectionStartY;
    private _candidateLinkedHasMoved;
    private _x;
    private _y;
    private _zoom;
    private _selectedNodes;
    private _selectedLink;
    private _selectedPort;
    private _candidateLink;
    private _candidatePort;
    private _gridSize;
    private _selectionBox;
    private _selectedFrames;
    private _frameCandidate;
    private _frames;
    private _nodeDataContentList;
    private _altKeyIsPressed;
    private _multiKeyIsPressed;
    private _oldY;
    _frameIsMoving: boolean;
    _isLoading: boolean;
    private _copiedNodes;
    private _copiedFrames;
    get gridSize(): number;
    set gridSize(value: number);
    get stateManager(): StateManager;
    get nodes(): GraphNode[];
    get links(): NodeLink[];
    get frames(): GraphFrame[];
    get zoom(): number;
    set zoom(value: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get selectedNodes(): GraphNode[];
    get selectedLink(): Nullable<NodeLink>;
    get selectedFrames(): GraphFrame[];
    get selectedPort(): Nullable<NodePort>;
    get canvasContainer(): HTMLDivElement;
    get hostCanvas(): HTMLDivElement;
    get svgCanvas(): HTMLElement;
    get selectionContainer(): HTMLDivElement;
    get frameContainer(): HTMLDivElement;
    private _selectedFrameAndNodesConflict;
    constructor(props: IGraphCanvasComponentProps);
    handleKeyDown(evt: KeyboardEvent, onRemove: (nodeData: INodeData) => void, mouseLocationX: number, mouseLocationY: number, dataGenerator: (nodeData: INodeData) => any, rootElement: HTMLDivElement): void;
    pasteSelection(copiedNodes: GraphNode[], currentX: number, currentY: number, dataGenerator: (nodeData: INodeData) => any, selectNew?: boolean): GraphNode[];
    reconnectNewNodes(nodeIndex: number, newNodes: GraphNode[], sourceNodes: GraphNode[], done: boolean[]): void;
    getCachedData(): any[];
    removeDataFromCache(data: any): void;
    createNodeFromObject(nodeData: INodeData, onNodeCreated: (data: any) => void, recursion?: boolean): GraphNode;
    getGridPosition(position: number, useCeil?: boolean): number;
    getGridPositionCeil(position: number): number;
    updateTransform(): void;
    onKeyUp(): void;
    findNodeFromData(data: any): GraphNode;
    reset(): void;
    connectPorts(pointA: IPortData, pointB: IPortData): void;
    removeLink(link: NodeLink): void;
    appendNode(nodeData: INodeData): GraphNode;
    distributeGraph(): void;
    componentDidMount(): void;
    onMove(evt: React.PointerEvent): void;
    onDown(evt: React.PointerEvent<HTMLElement>): void;
    onUp(evt: React.PointerEvent): void;
    onWheel(evt: React.WheelEvent): void;
    zoomToFit(): void;
    processCandidatePort(): void;
    connectNodes(nodeA: GraphNode, pointA: IPortData, nodeB: GraphNode, pointB: IPortData): void;
    drop(newNode: GraphNode, targetX: number, targetY: number, offsetX: number, offsetY: number): void;
    processEditorData(editorData: IEditorData): void;
    reOrganize(editorData?: Nullable<IEditorData>, isImportingAFrame?: boolean): void;
    addFrame(frameData: IFrameData): void;
    render(): JSX.Element;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/graphFrame" {
import { GraphNode } from "babylonjs-inspector/nodeGraphSystem/graphNode";
import { GraphCanvasComponent } from "babylonjs-inspector/nodeGraphSystem/graphCanvas";
import { Nullable } from "babylonjs/types";
import { Observable } from "babylonjs/Misc/observable";
import { Color3 } from "babylonjs/Maths/math.color";
import { FrameNodePort } from "babylonjs-inspector/nodeGraphSystem/frameNodePort";
import { IFrameData } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeLocationInfo";
export enum FramePortPosition {
    Top = 0,
    Middle = 1,
    Bottom = 2
}
export class GraphFrame {
    private readonly _collapsedWidth;
    private static _FrameCounter;
    private static _FramePortCounter;
    private _name;
    private _color;
    private _x;
    private _y;
    private _gridAlignedX;
    private _gridAlignedY;
    private _width;
    private _height;
    element: HTMLDivElement;
    private _borderElement;
    private _headerElement;
    private _headerTextElement;
    private _headerCollapseElement;
    private _headerCloseElement;
    private _commentsElement;
    private _portContainer;
    private _outputPortContainer;
    private _inputPortContainer;
    private _nodes;
    private _ownerCanvas;
    private _mouseStartPointX;
    private _mouseStartPointY;
    private _onSelectionChangedObserver;
    private _onGraphNodeRemovalObserver;
    private _onExposePortOnFrameObserver;
    private _onNodeLinkDisposedObservers;
    private _isCollapsed;
    private _frameInPorts;
    private _frameOutPorts;
    private _controlledPorts;
    private _exposedInPorts;
    private _exposedOutPorts;
    private _id;
    private _comments;
    private _frameIsResizing;
    private _resizingDirection;
    private _minFrameHeight;
    private _minFrameWidth;
    private _mouseXLimit;
    onExpandStateChanged: Observable<GraphFrame>;
    private readonly _closeSVG;
    private readonly _expandSVG;
    private readonly _collapseSVG;
    get id(): number;
    get isCollapsed(): boolean;
    private _createInputPort;
    private _markFramePortPositions;
    private _createFramePorts;
    private _removePortFromExposedWithNode;
    private _removePortFromExposedWithLink;
    private _createInputPorts;
    private _createOutputPorts;
    redrawFramePorts(): void;
    set isCollapsed(value: boolean);
    get nodes(): GraphNode[];
    get ports(): FrameNodePort[];
    get name(): string;
    set name(value: string);
    get color(): Color3;
    set color(value: Color3);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    get comments(): string;
    set comments(comments: string);
    constructor(candidate: Nullable<HTMLDivElement>, canvas: GraphCanvasComponent, doNotCaptureNodes?: boolean);
    refresh(): void;
    addNode(node: GraphNode): void;
    removeNode(node: GraphNode): void;
    syncNode(node: GraphNode): void;
    cleanAccumulation(): void;
    private _onDown;
    move(newX: number, newY: number, align?: boolean): void;
    private _onUp;
    _moveFrame(offsetX: number, offsetY: number): void;
    private _onMove;
    moveFramePortUp(nodePort: FrameNodePort): void;
    private _movePortUp;
    moveFramePortDown(nodePort: FrameNodePort): void;
    private _movePortDown;
    private _initResizing;
    private _cleanUpResizing;
    private _updateMinHeightWithComments;
    private _isResizingTop;
    private _isResizingRight;
    private _isResizingBottom;
    private _isResizingLeft;
    private _onRightHandlePointerDown;
    private _onRightHandlePointerMove;
    private _moveRightHandle;
    private _onRightHandlePointerUp;
    private _onBottomHandlePointerDown;
    private _onBottomHandlePointerMove;
    private _moveBottomHandle;
    private _onBottomHandlePointerUp;
    private _onLeftHandlePointerDown;
    private _onLeftHandlePointerMove;
    private _moveLeftHandle;
    private _onLeftHandlePointerUp;
    private _onTopHandlePointerDown;
    private _onTopHandlePointerMove;
    private _moveTopHandle;
    private _onTopHandlePointerUp;
    private _onTopRightHandlePointerDown;
    private _onTopRightHandlePointerMove;
    private _moveTopRightHandle;
    private _onTopRightHandlePointerUp;
    private _onBottomRightHandlePointerDown;
    private _onBottomRightHandlePointerMove;
    private _moveBottomRightHandle;
    private _onBottomRightHandlePointerUp;
    private _onBottomLeftHandlePointerDown;
    private _onBottomLeftHandlePointerMove;
    private _moveBottomLeftHandle;
    private _onBottomLeftHandlePointerUp;
    private _onTopLeftHandlePointerDown;
    private _onTopLeftHandlePointerMove;
    private _moveTopLeftHandle;
    private _onTopLeftHandlePointerUp;
    private _expandLeft;
    private _expandTop;
    private _expandRight;
    private _expandBottom;
    dispose(): void;
    private _serializePortData;
    serialize(saveCollapsedState: boolean): IFrameData;
    export(): void;
    adjustPorts(): void;
    static Parse(serializationData: IFrameData, canvas: GraphCanvasComponent, map?: {
        [key: number]: number;
    }): GraphFrame;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/graphNode" {
/// <reference types="react" />
import { Nullable } from "babylonjs/types";
import { GraphCanvasComponent } from "babylonjs-inspector/nodeGraphSystem/graphCanvas";
import { NodePort } from "babylonjs-inspector/nodeGraphSystem/nodePort";
import { GraphFrame } from "babylonjs-inspector/nodeGraphSystem/graphFrame";
import { NodeLink } from "babylonjs-inspector/nodeGraphSystem/nodeLink";
import { StateManager } from "babylonjs-inspector/nodeGraphSystem/stateManager";
import { INodeData } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeData";
import { IPortData } from "babylonjs-inspector/nodeGraphSystem/interfaces/portData";
export class GraphNode {
    content: INodeData;
    private _visual;
    private _headerContainer;
    private _warning;
    private _header;
    private _connections;
    private _inputsContainer;
    private _outputsContainer;
    private _content;
    private _comments;
    private _inputPorts;
    private _outputPorts;
    private _links;
    private _x;
    private _y;
    private _gridAlignedX;
    private _gridAlignedY;
    private _mouseStartPointX;
    private _mouseStartPointY;
    private _stateManager;
    private _onSelectionChangedObserver;
    private _onSelectionBoxMovedObserver;
    private _onFrameCreatedObserver;
    private _onUpdateRequiredObserver;
    private _ownerCanvas;
    private _isSelected;
    private _displayManager;
    private _isVisible;
    private _enclosingFrameId;
    get isVisible(): boolean;
    set isVisible(value: boolean);
    private _upateNodePortNames;
    get outputPorts(): NodePort[];
    get inputPorts(): NodePort[];
    get links(): NodeLink[];
    get gridAlignedX(): number;
    get gridAlignedY(): number;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get width(): number;
    get height(): number;
    get id(): number;
    get name(): string;
    get isSelected(): boolean;
    get enclosingFrameId(): number;
    set enclosingFrameId(value: number);
    set isSelected(value: boolean);
    setIsSelected(value: boolean, marqueeSelection: boolean): void;
    constructor(content: INodeData, stateManager: StateManager);
    isOverlappingFrame(frame: GraphFrame): boolean;
    getPortForPortData(portData: IPortData): NodePort | null;
    getPortDataForPortDataContent(data: any): IPortData | null;
    getLinksForPortDataContent(data: any): NodeLink[];
    getLinksForPortData(portData: IPortData): NodeLink[];
    private _refreshFrames;
    _refreshLinks(): void;
    refresh(): void;
    private _onDown;
    cleanAccumulation(useCeil?: boolean): void;
    private _onUp;
    private _onMove;
    renderProperties(): Nullable<JSX.Element>;
    appendVisual(root: HTMLDivElement, owner: GraphCanvasComponent): void;
    dispose(): void;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/interfaces/displayManager" {
import { INodeData } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeData";
import { IPortData } from "babylonjs-inspector/nodeGraphSystem/interfaces/portData";
export interface IDisplayManager {
    getHeaderClass(data: INodeData): string;
    shouldDisplayPortLabels(data: IPortData): boolean;
    updatePreviewContent(data: INodeData, contentArea: HTMLDivElement): void;
    getBackgroundColor(data: INodeData): string;
    getHeaderText(data: INodeData): string;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/interfaces/nodeContainer" {
import { GraphNode } from "babylonjs-inspector/nodeGraphSystem/graphNode";
import { INodeData } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeData";
export interface INodeContainer {
    nodes: GraphNode[];
    appendNode(data: INodeData): GraphNode;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/interfaces/nodeData" {
import { Nullable } from "babylonjs/types";
import { IPortData } from "babylonjs-inspector/nodeGraphSystem/interfaces/portData";
export interface INodeData {
    data: any;
    name: string;
    uniqueId: number;
    isInput: boolean;
    comments: string;
    getWarningMessage: () => string;
    getClassName: () => string;
    dispose: () => void;
    getPortByName: (name: string) => Nullable<IPortData>;
    inputs: IPortData[];
    outputs: IPortData[];
}

}
declare module "babylonjs-inspector/nodeGraphSystem/interfaces/nodeLocationInfo" {
export interface INodeLocationInfo {
    blockId: number;
    x: number;
    y: number;
}
export interface IFrameData {
    x: number;
    y: number;
    width: number;
    height: number;
    color: number[];
    name: string;
    isCollapsed: boolean;
    blocks: number[];
    comments: string;
}
export interface IEditorData {
    locations: INodeLocationInfo[];
    x: number;
    y: number;
    zoom: number;
    frames?: IFrameData[];
    map?: {
        [key: number]: number;
    };
}

}
declare module "babylonjs-inspector/nodeGraphSystem/interfaces/portData" {
import { Nullable } from "babylonjs/types";
import { GraphNode } from "babylonjs-inspector/nodeGraphSystem/graphNode";
export enum PortDataDirection {
    /** Input */
    Input = 0,
    /** Output */
    Output = 1
}
export interface IPortData {
    data: any;
    name: string;
    internalName: string;
    isExposedOnFrame: boolean;
    exposedPortPosition: number;
    isConnected: boolean;
    direction: PortDataDirection;
    ownerData: any;
    connectedPort: Nullable<IPortData>;
    needDualDirectionValidation: boolean;
    hasEndpoints: boolean;
    endpoints: Nullable<IPortData[]>;
    updateDisplayName: (newName: string) => void;
    connectTo: (port: IPortData) => void;
    disconnectFrom: (port: IPortData) => void;
    checkCompatibilityState(port: IPortData): number;
    getCompatibilityIssueMessage(issue: number, targetNode: GraphNode, targetPort: IPortData): string;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/interfaces/propertyComponentProps" {
import { StateManager } from "babylonjs-inspector/nodeGraphSystem/stateManager";
import { INodeData } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeData";
export interface IPropertyComponentProps {
    stateManager: StateManager;
    nodeData: INodeData;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/interfaces/selectionChangedOptions" {
import { Nullable } from "babylonjs/types";
import { GraphFrame } from "babylonjs-inspector/nodeGraphSystem/graphFrame";
import { GraphNode } from "babylonjs-inspector/nodeGraphSystem/graphNode";
import { NodeLink } from "babylonjs-inspector/nodeGraphSystem/nodeLink";
import { NodePort } from "babylonjs-inspector/nodeGraphSystem/nodePort";
import { FramePortData } from "babylonjs-inspector/nodeGraphSystem/types/framePortData";
export interface ISelectionChangedOptions {
    selection: Nullable<GraphNode | NodeLink | GraphFrame | NodePort | FramePortData>;
    forceKeepSelection?: boolean;
    marqueeSelection?: boolean;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/nodeLink" {
import { Observable } from "babylonjs/Misc/observable";
import { FrameNodePort } from "babylonjs-inspector/nodeGraphSystem/frameNodePort";
import { NodePort } from "babylonjs-inspector/nodeGraphSystem/nodePort";
import { GraphNode } from "babylonjs-inspector/nodeGraphSystem/graphNode";
import { GraphCanvasComponent } from "babylonjs-inspector/nodeGraphSystem/graphCanvas";
export class NodeLink {
    private _graphCanvas;
    private _portA;
    private _portB?;
    private _nodeA;
    private _nodeB?;
    private _path;
    private _selectionPath;
    private _onSelectionChangedObserver;
    private _isVisible;
    onDisposedObservable: Observable<NodeLink>;
    get isVisible(): boolean;
    set isVisible(value: boolean);
    get portA(): FrameNodePort | NodePort;
    get portB(): FrameNodePort | NodePort | undefined;
    get nodeA(): GraphNode;
    get nodeB(): GraphNode | undefined;
    update(endX?: number, endY?: number, straight?: boolean): void;
    constructor(graphCanvas: GraphCanvasComponent, portA: NodePort, nodeA: GraphNode, portB?: NodePort, nodeB?: GraphNode);
    onClick(evt: MouseEvent): void;
    dispose(notify?: boolean): void;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/nodePort" {
import { Nullable } from "babylonjs/types";
import { Observer } from "babylonjs/Misc/observable";
import { Vector2 } from "babylonjs/Maths/math.vector";
import { GraphNode } from "babylonjs-inspector/nodeGraphSystem/graphNode";
import { StateManager } from "babylonjs-inspector/nodeGraphSystem/stateManager";
import { ISelectionChangedOptions } from "babylonjs-inspector/nodeGraphSystem/interfaces/selectionChangedOptions";
import { FrameNodePort } from "babylonjs-inspector/nodeGraphSystem/frameNodePort";
import { IDisplayManager } from "babylonjs-inspector/nodeGraphSystem/interfaces/displayManager";
import { IPortData } from "babylonjs-inspector/nodeGraphSystem/interfaces/portData";
export class NodePort {
    portData: IPortData;
    node: GraphNode;
    protected _element: HTMLDivElement;
    protected _img: HTMLImageElement;
    protected _stateManager: StateManager;
    protected _portLabelElement: Element;
    protected _onCandidateLinkMovedObserver: Nullable<Observer<Nullable<Vector2>>>;
    protected _onSelectionChangedObserver: Nullable<Observer<Nullable<ISelectionChangedOptions>>>;
    protected _exposedOnFrame: boolean;
    delegatedPort: Nullable<FrameNodePort>;
    get element(): HTMLDivElement;
    get portName(): string;
    set portName(newName: string);
    get disabled(): boolean;
    hasLabel(): boolean;
    get exposedOnFrame(): boolean;
    set exposedOnFrame(value: boolean);
    get exposedPortPosition(): number;
    set exposedPortPosition(value: number);
    private _isConnectedToNodeOutsideOfFrame;
    refresh(): void;
    constructor(portContainer: HTMLElement, portData: IPortData, node: GraphNode, stateManager: StateManager);
    dispose(): void;
    static CreatePortElement(portData: IPortData, node: GraphNode, root: HTMLElement, displayManager: Nullable<IDisplayManager>, stateManager: StateManager): NodePort;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/propertyLedger" {
import { ComponentClass } from "react";
import { IPropertyComponentProps } from "babylonjs-inspector/nodeGraphSystem/interfaces/propertyComponentProps";
export class PropertyLedger {
    static DefaultControl: ComponentClass<IPropertyComponentProps>;
    static RegisteredControls: {
        [key: string]: ComponentClass<IPropertyComponentProps>;
    };
}

}
declare module "babylonjs-inspector/nodeGraphSystem/stateManager" {
import { Vector2 } from "babylonjs/Maths/math.vector";
import { Observable } from "babylonjs/Misc/observable";
import { Nullable } from "babylonjs/types";
import { FrameNodePort } from "babylonjs-inspector/nodeGraphSystem/frameNodePort";
import { GraphFrame } from "babylonjs-inspector/nodeGraphSystem/graphFrame";
import { GraphNode } from "babylonjs-inspector/nodeGraphSystem/graphNode";
import { INodeContainer } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeContainer";
import { INodeData } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeData";
import { IPortData } from "babylonjs-inspector/nodeGraphSystem/interfaces/portData";
import { ISelectionChangedOptions } from "babylonjs-inspector/nodeGraphSystem/interfaces/selectionChangedOptions";
import { NodePort } from "babylonjs-inspector/nodeGraphSystem/nodePort";
export class StateManager {
    data: any;
    hostDocument: Document;
    lockObject: any;
    onSelectionChangedObservable: Observable<Nullable<ISelectionChangedOptions>>;
    onFrameCreatedObservable: Observable<GraphFrame>;
    onUpdateRequiredObservable: Observable<any>;
    onGraphNodeRemovalObservable: Observable<GraphNode>;
    onSelectionBoxMoved: Observable<ClientRect | DOMRect>;
    onCandidateLinkMoved: Observable<Nullable<Vector2>>;
    onCandidatePortSelectedObservable: Observable<Nullable<FrameNodePort | NodePort>>;
    onNewNodeCreatedObservable: Observable<GraphNode>;
    onRebuildRequiredObservable: Observable<boolean>;
    onErrorMessageDialogRequiredObservable: Observable<string>;
    onExposePortOnFrameObservable: Observable<GraphNode>;
    onGridSizeChanged: Observable<void>;
    onNewBlockRequiredObservable: Observable<{
        type: string;
        targetX: number;
        targetY: number;
        needRepositioning?: boolean | undefined;
    }>;
    exportData: (data: any) => string;
    isElbowConnectionAllowed: (nodeA: FrameNodePort | NodePort, nodeB: FrameNodePort | NodePort) => boolean;
    applyNodePortDesign: (data: IPortData, element: HTMLElement, img: HTMLImageElement) => void;
    storeEditorData: (serializationObject: any, frame?: Nullable<GraphFrame>) => void;
    getEditorDataMap: () => {
        [key: number]: number;
    };
    createDefaultInputData: (rootData: any, portData: IPortData, nodeContainer: INodeContainer) => {
        data: INodeData;
        name: string;
    };
}

}
declare module "babylonjs-inspector/nodeGraphSystem/tools" {
import { GraphNode } from "babylonjs-inspector/nodeGraphSystem/graphNode";
import { NodeLink } from "babylonjs-inspector/nodeGraphSystem/nodeLink";
import { FramePortData } from "babylonjs-inspector/nodeGraphSystem/types/framePortData";
export const IsFramePortData: (variableToCheck: any) => variableToCheck is FramePortData;
export const RefreshNode: (node: GraphNode, visitedNodes?: Set<GraphNode> | undefined, visitedLinks?: Set<NodeLink> | undefined) => void;

}
declare module "babylonjs-inspector/nodeGraphSystem/typeLedger" {
import { INodeContainer } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeContainer";
import { INodeData } from "babylonjs-inspector/nodeGraphSystem/interfaces/nodeData";
import { IPortData } from "babylonjs-inspector/nodeGraphSystem/interfaces/portData";
import { NodePort } from "babylonjs-inspector/nodeGraphSystem/nodePort";
export class TypeLedger {
    static PortDataBuilder: (port: NodePort, nodeContainer: INodeContainer) => IPortData;
    static NodeDataBuilder: (data: any, nodeContainer: INodeContainer) => INodeData;
}

}
declare module "babylonjs-inspector/nodeGraphSystem/types/framePortData" {
import { GraphFrame } from "babylonjs-inspector/nodeGraphSystem/graphFrame";
import { FrameNodePort } from "babylonjs-inspector/nodeGraphSystem/frameNodePort";
export type FramePortData = {
    frame: GraphFrame;
    port: FrameNodePort;
};
export {};

}
declare module "babylonjs-inspector/propertyChangedEvent" {
export class PropertyChangedEvent {
    object: any;
    property: string;
    value: any;
    initialValue: any;
    allowNullValue?: boolean;
}

}
declare module "babylonjs-inspector/stories/Button.stories" {
/// <reference types="react" />
import { ButtonProps } from "babylonjs-inspector/components/Button";
const _default: {
    title: string;
    component: import("react").FC<ButtonProps>;
};
export default _default;
export const Default: any;
export const Wide: any;
export const Small: any;

}
declare module "babylonjs-inspector/stories/Icon.stories" {
/// <reference types="react" />
import { IconProps } from "babylonjs-inspector/components/Icon";
const _default: {
    title: string;
    component: import("react").FC<IconProps>;
};
export default _default;
export const Light: any;
export const Dark: any;

}
declare module "babylonjs-inspector/stories/Label.stories" {
/// <reference types="react" />
import { LabelProps } from "babylonjs-inspector/components/Label";
const _default: {
    title: string;
    component: import("react").FC<LabelProps>;
};
export default _default;
export const Default: any;

}
declare module "babylonjs-inspector/stories/Toggle.stories" {
/// <reference types="react" />
import { ToggleProps } from "babylonjs-inspector/components/Toggle";
const _default: {
    title: string;
    component: import("react").FC<ToggleProps>;
};
export default _default;
export const Default: any;
export const Padded: any;

}
declare module "babylonjs-inspector/stringTools" {
export class StringTools {
    private static _SaveAs;
    private static _Click;
    /**
     * Download a string into a file that will be saved locally by the browser
     * @param document
     * @param content defines the string to download locally as a file
     * @param filename
     */
    static DownloadAsFile(document: HTMLDocument, content: string, filename: string): void;
}

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/checkboxPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { Checkbox } from "babylonjs-gui/2D/controls/checkbox";
interface ICheckboxPropertyGridComponentProps {
    checkbox: Checkbox;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class CheckboxPropertyGridComponent extends React.Component<ICheckboxPropertyGridComponentProps> {
    constructor(props: ICheckboxPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/colorPickerPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { ColorPicker } from "babylonjs-gui/2D/controls/colorpicker";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IColorPickerPropertyGridComponentProps {
    colorPicker: ColorPicker;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class ColorPickerPropertyGridComponent extends React.Component<IColorPickerPropertyGridComponentProps> {
    constructor(props: IColorPickerPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/commonControlPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { Control } from "babylonjs-gui/2D/controls/control";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface ICommonControlPropertyGridComponentProps {
    controls?: Control[];
    control?: Control;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class CommonControlPropertyGridComponent extends React.Component<ICommonControlPropertyGridComponentProps> {
    constructor(props: ICommonControlPropertyGridComponentProps);
    renderGridInformation(control: Control): JSX.Element | null;
    render(): JSX.Element | undefined;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/controlPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { Control } from "babylonjs-gui/2D/controls/control";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IControlPropertyGridComponentProps {
    control: Control;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class ControlPropertyGridComponent extends React.Component<IControlPropertyGridComponentProps> {
    constructor(props: IControlPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/ellipsePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { Ellipse } from "babylonjs-gui/2D/controls/ellipse";
interface IEllipsePropertyGridComponentProps {
    ellipse: Ellipse;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class EllipsePropertyGridComponent extends React.Component<IEllipsePropertyGridComponentProps> {
    constructor(props: IEllipsePropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/gridPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { Grid } from "babylonjs-gui/2D/controls/grid";
interface IGridPropertyGridComponentProps {
    grid: Grid;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class GridPropertyGridComponent extends React.Component<IGridPropertyGridComponentProps> {
    constructor(props: IGridPropertyGridComponentProps);
    renderRows(): JSX.Element[];
    renderColumns(): JSX.Element[];
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/imageBasedSliderPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { ImageBasedSlider } from "babylonjs-gui/2D/controls/sliders/imageBasedSlider";
interface IImageBasedSliderPropertyGridComponentProps {
    imageBasedSlider: ImageBasedSlider;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class ImageBasedSliderPropertyGridComponent extends React.Component<IImageBasedSliderPropertyGridComponentProps> {
    constructor(props: IImageBasedSliderPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/imagePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { Image } from "babylonjs-gui/2D/controls/image";
interface IImagePropertyGridComponentProps {
    image: Image;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class ImagePropertyGridComponent extends React.Component<IImagePropertyGridComponentProps> {
    constructor(props: IImagePropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/inputTextPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { InputText } from "babylonjs-gui/2D/controls/inputText";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface IInputTextPropertyGridComponentProps {
    inputText: InputText;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class InputTextPropertyGridComponent extends React.Component<IInputTextPropertyGridComponentProps> {
    constructor(props: IInputTextPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/linePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { Line } from "babylonjs-gui/2D/controls/line";
interface ILinePropertyGridComponentProps {
    line: Line;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class LinePropertyGridComponent extends React.Component<ILinePropertyGridComponentProps> {
    constructor(props: ILinePropertyGridComponentProps);
    onDashChange(value: string): void;
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/radioButtonPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { RadioButton } from "babylonjs-gui/2D/controls/radioButton";
interface IRadioButtonPropertyGridComponentProps {
    radioButtons: RadioButton[];
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class RadioButtonPropertyGridComponent extends React.Component<IRadioButtonPropertyGridComponentProps> {
    constructor(props: IRadioButtonPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/rectanglePropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { Rectangle } from "babylonjs-gui/2D/controls/rectangle";
interface IRectanglePropertyGridComponentProps {
    rectangle: Rectangle;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class RectanglePropertyGridComponent extends React.Component<IRectanglePropertyGridComponentProps> {
    constructor(props: IRectanglePropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/scrollViewerPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { ScrollViewer } from "babylonjs-gui/2D/controls/scrollViewers/scrollViewer";
interface IScrollViewerPropertyGridComponentProps {
    scrollViewer: ScrollViewer;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class ScrollViewerPropertyGridComponent extends React.Component<IScrollViewerPropertyGridComponentProps> {
    constructor(props: IScrollViewerPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/sliderPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { Slider } from "babylonjs-gui/2D/controls/sliders/slider";
interface ISliderPropertyGridComponentProps {
    slider: Slider;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class SliderPropertyGridComponent extends React.Component<ISliderPropertyGridComponentProps> {
    constructor(props: ISliderPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/stackPanelPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
import { StackPanel } from "babylonjs-gui/2D/controls/stackPanel";
interface IStackPanelPropertyGridComponentProps {
    stackPanel: StackPanel;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class StackPanelPropertyGridComponent extends React.Component<IStackPanelPropertyGridComponentProps> {
    constructor(props: IStackPanelPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/gui/textBlockPropertyGridComponent" {
import * as React from "react";
import { Observable } from "babylonjs/Misc/observable";
import { PropertyChangedEvent } from "babylonjs-inspector/propertyChangedEvent";
import { TextBlock } from "babylonjs-gui/2D/controls/textBlock";
import { LockObject } from "babylonjs-inspector/tabs/propertyGrids/lockObject";
interface ITextBlockPropertyGridComponentProps {
    textBlock: TextBlock;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export class TextBlockPropertyGridComponent extends React.Component<ITextBlockPropertyGridComponentProps> {
    constructor(props: ITextBlockPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};

}
declare module "babylonjs-inspector/tabs/propertyGrids/lockObject" {
/**
 * Class used to provide lock mechanism
 */
export class LockObject {
    /**
     * Gets or set if the lock is engaged
     */
    lock: boolean;
}

}

declare module "babylonjs-inspector" {
    export * from "babylonjs-inspector/legacy/legacy";
}


declare module INSPECTOR {
    interface IActionTabsComponentProps {
        scene?: BABYLON.Scene;
        noCommands?: boolean;
        noHeader?: boolean;
        noExpand?: boolean;
        noClose?: boolean;
        popupMode?: boolean;
        onPopup?: () => void;
        onClose?: () => void;
        globalState?: GlobalState;
        initialTab?: BABYLON.DebugLayerTab;
    }
    export class ActionTabsComponent extends React.Component<IActionTabsComponentProps, {
        selectedEntity: any;
        selectedIndex: number;
    }> {
        private _onSelectionChangeObserver;
        private _onTabChangedObserver;
        private _once;
        constructor(props: IActionTabsComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        changeSelectedTab(index: number): void;
        renderContent(): JSX.Element | null;
        onClose(): void;
        onPopup(): void;
        render(): JSX.Element;
    }


    interface IMeshPickerComponentProps {
        globalState: GlobalState;
        target: any;
        property: string;
        scene: BABYLON.Scene;
        label: string;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class MeshPickerComponent extends React.Component<IMeshPickerComponentProps> {
        constructor(props: IMeshPickerComponentProps);
        render(): JSX.Element;
    }


    interface IQuaternionLineComponentProps {
        label: string;
        target: any;
        useEuler?: boolean;
        propertyName: string;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    export class QuaternionLineComponent extends React.Component<IQuaternionLineComponentProps, {
        isExpanded: boolean;
        value: BABYLON.Quaternion;
        eulerValue: BABYLON.Vector3;
    }> {
        private _localChange;
        constructor(props: IQuaternionLineComponentProps);
        _checkRoundCircle(a: number, b: number): boolean;
        shouldComponentUpdate(nextProps: IQuaternionLineComponentProps, nextState: {
            isExpanded: boolean;
            value: BABYLON.Quaternion;
            eulerValue: BABYLON.Vector3;
        }): boolean;
        switchExpandState(): void;
        raiseOnPropertyChanged(currentValue: BABYLON.Quaternion, previousValue: BABYLON.Quaternion): void;
        updateQuaternion(): void;
        updateStateX(value: number): void;
        updateStateY(value: number): void;
        updateStateZ(value: number): void;
        updateStateW(value: number): void;
        updateQuaternionFromEuler(): void;
        updateStateEulerX(value: number): void;
        updateStateEulerY(value: number): void;
        updateStateEulerZ(value: number): void;
        render(): JSX.Element;
    }


    interface ITextureLineComponentProps {
        texture: BABYLON.BaseTexture;
        width: number;
        height: number;
        globalState?: GlobalState;
        hideChannelSelect?: boolean;
    }
    export class TextureLineComponent extends React.Component<ITextureLineComponentProps, {
        channels: TextureChannelsToDisplay;
        face: number;
    }> {
        private _canvasRef;
        private static _TextureChannelStates;
        constructor(props: ITextureLineComponentProps);
        shouldComponentUpdate(nextProps: ITextureLineComponentProps, nextState: {
            channels: TextureChannelsToDisplay;
            face: number;
        }): boolean;
        componentDidMount(): void;
        componentDidUpdate(): void;
        updatePreview(): Promise<void>;
        render(): JSX.Element;
    }


    export interface ITextureLinkLineComponentProps {
        label: string;
        texture: BABYLON.Nullable<BABYLON.BaseTexture>;
        material?: BABYLON.Material;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onDebugSelectionChangeObservable?: BABYLON.Observable<TextureLinkLineComponent>;
        propertyName?: string;
        onTextureCreated?: (texture: BABYLON.BaseTexture) => void;
        customDebugAction?: (state: boolean) => void;
        onTextureRemoved?: () => void;
    }
    export class TextureLinkLineComponent extends React.Component<ITextureLinkLineComponentProps, {
        isDebugSelected: boolean;
    }> {
        private _onDebugSelectionChangeObserver;
        constructor(props: ITextureLinkLineComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        debugTexture(): void;
        onLink(): void;
        updateTexture(file: File): void;
        removeTexture(): void;
        render(): JSX.Element | null;
    }


    export interface IPaneComponentProps {
        title: string;
        icon: any;
        scene: BABYLON.Scene;
        selectedEntity?: any;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        globalState: GlobalState;
    }
    export class PaneComponent extends React.Component<IPaneComponentProps, {
        tag: any;
    }> {
        constructor(props: IPaneComponentProps);
        render(): JSX.Element | null;
    }


    /// <reference types="react" />
    export class DebugTabComponent extends PaneComponent {
        private _physicsViewersEnabled;
        constructor(props: IPaneComponentProps);
        switchPhysicsViewers(): void;
        render(): JSX.Element | null;
    }


    export class GradientPropertyTabComponent extends React.Component<IPropertyComponentProps> {
        private _gradientBlock;
        constructor(props: IPropertyComponentProps);
        forceRebuild(): void;
        deleteStep(step: BABYLON.GradientBlockColorStep): void;
        copyStep(step: BABYLON.GradientBlockColorStep): void;
        addNewStep(): void;
        checkForReOrder(): void;
        render(): JSX.Element;
    }


    interface IGradientStepComponentProps {
        globalState: GlobalState;
        step: BABYLON.GradientBlockColorStep;
        lineIndex: number;
        lockObject?: INSPECTOR.SharedUIComponents.LockObject;
        onDelete: () => void;
        onUpdateStep: () => void;
        onCheckForReOrder: () => void;
        onCopy?: () => void;
    }
    export class GradientStepComponent extends React.Component<IGradientStepComponentProps, {
        gradient: number;
    }> {
        constructor(props: IGradientStepComponentProps);
        updateColor(color: string): void;
        updateStep(gradient: number): void;
        onPointerUp(): void;
        render(): JSX.Element;
    }


    interface IPerformancePlayheadButtonProps {
        returnToPlayhead: BABYLON.Observable<void>;
    }
    export var PerformancePlayheadButtonComponent: React.FC<IPerformancePlayheadButtonProps>;


    interface IPerformanceViewerComponentProps {
        scene: BABYLON.Scene;
    }
    export enum IPerfMetadataCategory {
        Count = "Count",
        FrameSteps = "Frame Steps Duration"
    }
    export var PerformanceViewerComponent: React.FC<IPerformanceViewerComponentProps>;


    interface IPerformanceViewerPopupComponentProps {
        scene: BABYLON.Scene;
        layoutObservable: BABYLON.Observable<IPerfLayoutSize>;
        returnToLiveObservable: BABYLON.Observable<void>;
        performanceCollector: BABYLON.PerformanceViewerCollector;
        initialGraphSize?: {
            width: number;
            height: number;
        };
    }
    export var PerformanceViewerPopupComponent: React.FC<IPerformanceViewerPopupComponentProps>;


    /// <reference types="react" />
    interface IPerformanceViewerSidebarComponentProps {
        collector: BABYLON.PerformanceViewerCollector;
        onVisibleRangeChangedObservable?: BABYLON.Observable<IVisibleRangeChangedObservableProps>;
    }
    export const PerformanceViewerSidebarComponent: (props: IPerformanceViewerSidebarComponentProps) => JSX.Element;


    export interface IPropertyComponentProps {
        globalState: GlobalState;
        block: BABYLON.NodeMaterialBlock;
    }


    interface IAnimationGroupGridComponentProps {
        globalState: GlobalState;
        animationGroup: BABYLON.AnimationGroup;
        scene: BABYLON.Scene;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class AnimationGroupGridComponent extends React.Component<IAnimationGroupGridComponentProps, {
        playButtonText: string;
        currentFrame: number;
    }> {
        private _onAnimationGroupPlayObserver;
        private _onAnimationGroupPauseObserver;
        private _onBeforeRenderObserver;
        private _timelineRef;
        private _animationCurveEditorContext;
        constructor(props: IAnimationGroupGridComponentProps);
        disconnect(animationGroup: BABYLON.AnimationGroup): void;
        connect(animationGroup: BABYLON.AnimationGroup): void;
        updateCurrentFrame(animationGroup: BABYLON.AnimationGroup): void;
        shouldComponentUpdate(nextProps: IAnimationGroupGridComponentProps): boolean;
        componentWillUnmount(): void;
        playOrPause(): void;
        onCurrentFrameChange(value: number): void;
        render(): JSX.Element;
    }


    interface IAnimationGridComponentProps {
        globalState: GlobalState;
        animatable: BABYLON.IAnimatable;
        scene: BABYLON.Scene;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class AnimationGridComponent extends React.Component<IAnimationGridComponentProps, {
        currentFrame: number;
    }> {
        private _animations;
        private _ranges;
        private _mainAnimatable;
        private _onBeforeRenderObserver;
        private _isPlaying;
        private _timelineRef;
        private _animationCurveEditorContext;
        private _animationControl;
        constructor(props: IAnimationGridComponentProps);
        playOrPause(): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        onCurrentFrameChange(value: number): void;
        onChangeFromOrTo(): void;
        componentDidUpdate(prevProps: IAnimationGridComponentProps): void;
        render(): JSX.Element;
    }


    interface IAnimationCurveEditorComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface IAnimationCurveEditorComponentState {
        isOpen: boolean;
    }
    export class AnimationCurveEditorComponent extends React.Component<IAnimationCurveEditorComponentProps, IAnimationCurveEditorComponentState> {
        constructor(props: IAnimationCurveEditorComponentProps);
        onCloseAnimationCurveEditor(window: Window | null): void;
        shouldComponentUpdate(newProps: IAnimationCurveEditorComponentProps, newState: IAnimationCurveEditorComponentState): boolean;
        private _onKeyDown;
        render(): JSX.Element;
    }


    interface IBottomBarComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface IBottomBarComponentState {
        clipLength: string;
    }
    export class BottomBarComponent extends React.Component<IBottomBarComponentProps, IBottomBarComponentState> {
        private _onAnimationsLoadedObserver;
        private _onActiveAnimationChangedObserver;
        private _onClipLengthIncreasedObserver;
        private _onClipLengthDecreasedObserver;
        constructor(props: IBottomBarComponentProps);
        private _changeClipLength;
        componentWillUnmount(): void;
        render(): JSX.Element;
    }


    interface IMediaPlayerComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface IMediaPlayerComponentState {
    }
    export class MediaPlayerComponent extends React.Component<IMediaPlayerComponentProps, IMediaPlayerComponentState> {
        private _isMounted;
        constructor(props: IMediaPlayerComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        private _onFirstKey;
        private _onPrevKey;
        private _onRewind;
        private _onForward;
        private _onPrevFrame;
        private _onNextFrame;
        private _onNextKey;
        private _onEndKey;
        private _onStop;
        render(): JSX.Element;
    }


    interface IRangeSelectorComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface IRangeSelectorComponentState {
    }
    export class RangeSelectorComponent extends React.Component<IRangeSelectorComponentProps, IRangeSelectorComponentState> {
        private _rangeHost;
        private _rangeScrollbarHost;
        private _viewWidth;
        private _pointerIsDown;
        private _minFrame;
        private _maxFrame;
        private _leftHandleIsActive;
        private _bothHandleIsActive;
        private _currentOffset;
        private _currentFrom;
        private _currentTo;
        constructor(props: IRangeSelectorComponentProps);
        private _computeSizes;
        private _onPointerDown;
        private _onPointerMove;
        private _updateLimits;
        private _onPointerUp;
        render(): JSX.Element;
    }


    export interface IActiveAnimationChangedOptions {
        evaluateKeys?: boolean;
        frame?: boolean;
        range?: boolean;
    }
    export class Context {
        title: string;
        animations: BABYLON.Nullable<BABYLON.Animation[] | BABYLON.TargetedAnimation[]>;
        scene: BABYLON.Scene;
        target: BABYLON.Nullable<BABYLON.IAnimatable>;
        rootAnimationGroup: BABYLON.Nullable<BABYLON.AnimationGroup>;
        activeAnimations: BABYLON.Animation[];
        activeChannels: {
            [key: number]: string;
        };
        activeKeyPoints: BABYLON.Nullable<KeyPointComponent[]>;
        mainKeyPoint: BABYLON.Nullable<KeyPointComponent>;
        snippetId: string;
        useTargetAnimations: boolean;
        activeFrame: number;
        fromKey: number;
        toKey: number;
        useExistingPlayRange: boolean;
        forwardAnimation: boolean;
        isPlaying: boolean;
        clipLength: number;
        referenceMinFrame: number;
        referenceMaxFrame: number;
        focusedInput: boolean;
        onActiveAnimationChanged: BABYLON.Observable<IActiveAnimationChangedOptions>;
        onActiveKeyPointChanged: BABYLON.Observable<void>;
        onHostWindowResized: BABYLON.Observable<void>;
        onSelectAllKeys: BABYLON.Observable<void>;
        onActiveKeyFrameChanged: BABYLON.Observable<number>;
        onFrameSet: BABYLON.Observable<number>;
        onFrameManuallyEntered: BABYLON.Observable<number>;
        onMainKeyPointSet: BABYLON.Observable<void>;
        onMainKeyPointMoved: BABYLON.Observable<void>;
        onValueSet: BABYLON.Observable<number>;
        onValueManuallyEntered: BABYLON.Observable<number>;
        onFrameRequired: BABYLON.Observable<void>;
        onCreateOrUpdateKeyPointRequired: BABYLON.Observable<void>;
        onFlattenTangentRequired: BABYLON.Observable<void>;
        onLinearTangentRequired: BABYLON.Observable<void>;
        onBreakTangentRequired: BABYLON.Observable<void>;
        onUnifyTangentRequired: BABYLON.Observable<void>;
        onStepTangentRequired: BABYLON.Observable<void>;
        onDeleteAnimation: BABYLON.Observable<BABYLON.Animation>;
        onGraphMoved: BABYLON.Observable<number>;
        onGraphScaled: BABYLON.Observable<number>;
        onRangeUpdated: BABYLON.Observable<void>;
        onMoveToFrameRequired: BABYLON.Observable<number>;
        onAnimationStateChanged: BABYLON.Observable<void>;
        onDeleteKeyActiveKeyPoints: BABYLON.Observable<void>;
        onSelectionRectangleMoved: BABYLON.Observable<DOMRect>;
        onAnimationsLoaded: BABYLON.Observable<void>;
        onEditAnimationRequired: BABYLON.Observable<BABYLON.Animation>;
        onEditAnimationUIClosed: BABYLON.Observable<void>;
        onClipLengthIncreased: BABYLON.Observable<number>;
        onClipLengthDecreased: BABYLON.Observable<number>;
        onInterpolationModeSet: BABYLON.Observable<{
            keyId: number;
            value: BABYLON.AnimationKeyInterpolation;
        }>;
        onSelectToActivated: BABYLON.Observable<{
            from: number;
            to: number;
        }>;
        onRangeFrameBarResized: BABYLON.Observable<number>;
        onPlayheadMoved: BABYLON.Observable<number>;
        lockLastFrameValue: boolean;
        lockLastFrameFrame: boolean;
        onActiveKeyDataChanged: BABYLON.Observable<number>;
        prepare(): void;
        play(forward: boolean): void;
        stop(): void;
        moveToFrame(frame: number): void;
        refreshTarget(): void;
        clearSelection(): void;
        enableChannel(animation: BABYLON.Animation, color: string): void;
        disableChannel(animation: BABYLON.Animation): void;
        isChannelEnabled(animation: BABYLON.Animation, color: string): boolean;
        getActiveChannel(animation: BABYLON.Animation): string;
        resetAllActiveChannels(): void;
        getAnimationSortIndex(animation: BABYLON.Animation): number;
        getPrevKey(): BABYLON.Nullable<number>;
        getNextKey(): BABYLON.Nullable<number>;
        /**
         * If any current active animation has a key at the received frameNumber,
         * return the index of the animation in the active animation array, and
         * the index of the frame on the animation.
         * @param frameNumber
         */
        getKeyAtAnyFrameIndex(frameNumber: number): {
            animationIndex: number;
            keyIndex: number;
        } | null;
        hasActiveQuaternionAnimationKeyPoints(): boolean;
    }


    interface IActionButtonComponentProps {
        globalState: GlobalState;
        context: Context;
        icon: string;
        id?: string;
        className?: string;
        isActive?: boolean;
        onClick: () => void;
        tooltip?: string;
    }
    interface IActionButtonComponentState {
    }
    export class ActionButtonComponent extends React.Component<IActionButtonComponentProps, IActionButtonComponentState> {
        constructor(props: IActionButtonComponentProps);
        render(): JSX.Element;
    }


    interface IControlButtonComponentProps {
        globalState: GlobalState;
        context: Context;
        icon: string;
        hoverIcon: string;
        id?: string;
        className?: string;
        onClick: () => void;
        tooltip?: string;
    }
    interface IControlButtonComponentState {
    }
    export class ControlButtonComponent extends React.Component<IControlButtonComponentProps, IControlButtonComponentState> {
        constructor(props: IControlButtonComponentProps);
        render(): JSX.Element;
    }


    interface IPushButtonComponentProps {
        globalState: GlobalState;
        context: Context;
        icon: string;
        id?: string;
        className?: string;
        isPushed?: boolean;
        onClick: (state: boolean) => void;
        tooltip?: string;
    }
    interface IPushButtonComponentState {
        isPushed: boolean;
    }
    export class PushButtonComponent extends React.Component<IPushButtonComponentProps, IPushButtonComponentState> {
        constructor(props: IPushButtonComponentProps);
        render(): JSX.Element;
    }


    interface ITextInputComponentProps {
        globalState: GlobalState;
        context: Context;
        id?: string;
        className?: string;
        tooltip?: string;
        value: string;
        isNumber?: boolean;
        complement?: string;
        onValueAsNumberChanged?: (value: number, isFocused: boolean) => void;
        disabled?: boolean;
    }
    interface ITextInputComponentState {
        value: string;
        isFocused: boolean;
    }
    export class TextInputComponent extends React.Component<ITextInputComponentProps, ITextInputComponentState> {
        private _lastKnownGoodValue;
        constructor(props: ITextInputComponentProps);
        private _onChange;
        private _onBlur;
        private _onFocus;
        shouldComponentUpdate(newProps: ITextInputComponentProps, newState: ITextInputComponentState): boolean;
        private _onKeyPress;
        render(): JSX.Element;
    }


    interface ICanvasComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface ICanvasComponentState {
    }
    export class CanvasComponent extends React.Component<ICanvasComponentProps, ICanvasComponentState> {
        private _onActiveAnimationChangedObserver;
        constructor(props: ICanvasComponentProps);
        componentWillUnmount(): void;
        render(): JSX.Element;
    }


    export interface KeyEntry {
        frame: number;
        value: number;
        inTangent?: number;
        outTangent?: number;
        lockedTangent: boolean;
        interpolation?: BABYLON.AnimationKeyInterpolation;
    }
    export class Curve {
        static readonly SampleRate = 50;
        keys: KeyEntry[];
        animation: BABYLON.Animation;
        color: string;
        onDataUpdatedObservable: BABYLON.Observable<void>;
        property?: string;
        tangentBuilder?: () => any;
        setDefaultInTangent?: (keyId: number) => any;
        setDefaultOutTangent?: (keyId: number) => any;
        static readonly TangentLength = 50;
        constructor(color: string, animation: BABYLON.Animation, property?: string, tangentBuilder?: () => any, setDefaultInTangent?: (keyId: number) => any, setDefaultOutTangent?: (keyId: number) => any);
        getPathData(convertX: (x: number) => number, convertY: (y: number) => number): string;
        updateLockedTangentMode(keyIndex: number, enabled: boolean): void;
        updateInterpolationMode(keyIndex: number, interpolationMode: BABYLON.AnimationKeyInterpolation): void;
        getInControlPoint(keyIndex: number): number | undefined;
        getOutControlPoint(keyIndex: number): number | undefined;
        hasDefinedOutTangent(keyIndex: number): boolean;
        evaluateOutTangent(keyIndex: number): number;
        hasDefinedInTangent(keyIndex: number): boolean;
        evaluateInTangent(keyIndex: number): number;
        storeDefaultInTangent(keyIndex: number): void;
        storeDefaultOutTangent(keyIndex: number): void;
        updateInTangentFromControlPoint(keyId: number, slope: number): void;
        updateOutTangentFromControlPoint(keyId: number, slope: number): void;
        updateKeyFrame(keyId: number, frame: number): void;
        updateKeyValue(keyId: number, value: number): void;
    }


    interface ICurveComponentProps {
        curve: Curve;
        convertX: (x: number) => number;
        convertY: (x: number) => number;
        context: Context;
    }
    interface ICurveComponentState {
        isSelected: boolean;
    }
    export class CurveComponent extends React.Component<ICurveComponentProps, ICurveComponentState> {
        private _onDataUpdatedObserver;
        private _onActiveAnimationChangedObserver;
        private _onInterpolationModeSetObserver;
        constructor(props: ICurveComponentProps);
        componentWillUnmount(): void;
        componentDidUpdate(): boolean;
        render(): JSX.Element | null;
    }


    interface IFrameBarComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface IFrameBarComponentState {
    }
    export class FrameBarComponent extends React.Component<IFrameBarComponentProps, IFrameBarComponentState> {
        private readonly _graphAbsoluteWidth;
        private _svgHost;
        private _viewWidth;
        private _viewScale;
        private _offsetX;
        private _onActiveAnimationChangedObserver;
        constructor(props: IFrameBarComponentProps);
        componentWillUnmount(): void;
        private _computeSizes;
        private _buildFrames;
        render(): JSX.Element;
    }


    interface IGraphComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface IGraphComponentState {
    }
    export class GraphComponent extends React.Component<IGraphComponentProps, IGraphComponentState> {
        private readonly _minScale;
        private readonly _maxScale;
        private readonly _graphAbsoluteWidth;
        private readonly _graphAbsoluteHeight;
        private _viewWidth;
        private _viewCurveWidth;
        private _viewHeight;
        private _viewScale;
        private _offsetX;
        private _offsetY;
        private _inSelectionMode;
        private _graphOffsetX;
        private _minValue;
        private _maxValue;
        private _minFrame;
        private _maxFrame;
        private _svgHost;
        private _svgHost2;
        private _selectionRectangle;
        private _curves;
        private _pointerIsDown;
        private _sourcePointerX;
        private _sourcePointerY;
        private _selectionMade;
        private _selectionStartX;
        private _selectionStartY;
        private _onActiveAnimationChangedObserver;
        constructor(props: IGraphComponentProps);
        componentWillUnmount(): void;
        private _computeSizes;
        private _setDefaultInTangent;
        private _setDefaultOutTangent;
        private _evaluateKeys;
        private _extractValuesFromKeys;
        private _convertX;
        private _invertX;
        private _convertY;
        private _invertY;
        private _buildFrameIntervalAxis;
        private _buildYAxis;
        private _frameFromActiveKeys;
        private _dropKeyFrames;
        private _onPointerDown;
        private _onPointerMove;
        private _onPointerUp;
        private _onWheel;
        render(): JSX.Element;
    }


    interface IKeyPointComponentProps {
        x: number;
        y: number;
        getPreviousX: () => BABYLON.Nullable<number>;
        getNextX: () => BABYLON.Nullable<number>;
        invertX: (x: number) => number;
        invertY: (y: number) => number;
        convertX: (x: number) => number;
        convertY: (y: number) => number;
        nextX?: number;
        scale: number;
        keyId: number;
        curve: Curve;
        context: Context;
        channel: string;
        onFrameValueChanged: (value: number) => void;
        onKeyValueChanged: (value: number) => void;
    }
    interface IKeyPointComponentState {
        selectedState: SelectionState;
        tangentSelectedIndex: number;
        x: number;
        y: number;
    }
    export enum SelectionState {
        None = 0,
        Selected = 1,
        Siblings = 2
    }
    export class KeyPointComponent extends React.Component<IKeyPointComponentProps, IKeyPointComponentState> {
        private _onActiveKeyPointChangedObserver;
        private _onActiveKeyFrameChangedObserver;
        private _onFrameManuallyEnteredObserver;
        private _onValueManuallyEnteredObserver;
        private _onMainKeyPointSetObserver;
        private _onMainKeyPointMovedObserver;
        private _onSelectionRectangleMovedObserver;
        private _onFlattenTangentRequiredObserver;
        private _onLinearTangentRequiredObserver;
        private _onBreakTangentRequiredObserver;
        private _onUnifyTangentRequiredObserver;
        private _onStepTangentRequiredObserver;
        private _onSelectAllKeysObserver;
        private _pointerIsDown;
        private _sourcePointerX;
        private _sourcePointerY;
        private _offsetXToMain;
        private _offsetYToMain;
        private _svgHost;
        private _keyPointSVG;
        private _controlMode;
        private _storedLengthIn;
        private _storedLengthOut;
        private _inVec;
        private _outVec;
        private _lockX;
        private _lockY;
        private _accumulatedX;
        private _accumulatedY;
        constructor(props: IKeyPointComponentProps);
        componentWillUnmount(): void;
        shouldComponentUpdate(newProps: IKeyPointComponentProps, newState: IKeyPointComponentState): boolean;
        private _breakTangent;
        private _unifyTangent;
        private _flattenTangent;
        private _linearTangent;
        private _stepTangent;
        private _select;
        private _onPointerDown;
        private _extractSlope;
        private _processTangentMove;
        private _onPointerMove;
        private _onPointerUp;
        render(): JSX.Element | null;
    }


    interface IPlayHeadComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface IPlayHeadComponentState {
    }
    export class PlayHeadComponent extends React.Component<IPlayHeadComponentProps, IPlayHeadComponentState> {
        private readonly _graphAbsoluteWidth;
        private _playHead;
        private _playHeadCircle;
        private _onBeforeRenderObserver;
        private _onActiveAnimationChangedObserver;
        private _onRangeFrameBarResizedObserver;
        private _onMoveToFrameRequiredObserver;
        private _onGraphMovedObserver;
        private _onGraphScaledObserver;
        private _viewScale;
        private _offsetX;
        private _offsetRange;
        private _viewWidth;
        private readonly _rangeWidthToPlayheadWidth;
        private _pointerIsDown;
        constructor(props: IPlayHeadComponentProps);
        private _moveHead;
        private _frameToPixel;
        private _pixelToFrame;
        componentWillUnmount(): void;
        private _getPixelValues;
        private _onPointerDown;
        private _onPointerMove;
        private _onPointerUp;
        render(): JSX.Element | null;
    }


    interface IRangeFrameBarComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface IRangeFrameBarComponentState {
    }
    export class RangeFrameBarComponent extends React.Component<IRangeFrameBarComponentProps, IRangeFrameBarComponentState> {
        private _svgHost;
        private _viewWidth;
        private _offsetX;
        private _isMounted;
        private _onActiveAnimationChangedObserver;
        private _onPlayheadMovedObserver;
        private _onFrameManuallyEnteredObserver;
        constructor(props: IRangeFrameBarComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        private _computeSizes;
        private _dropKeyFrames;
        private _buildActiveFrame;
        private _buildFrames;
        render(): JSX.Element;
    }


    interface IAddAnimationComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface IAddAnimationComponentState {
        customPropertyMode: boolean;
    }
    export class AddAnimationComponent extends React.Component<IAddAnimationComponentProps, IAddAnimationComponentState> {
        private _root;
        private _displayName;
        private _property;
        private _typeElement;
        private _propertylement;
        private _loopModeElement;
        constructor(props: IAddAnimationComponentProps);
        createNew(): void;
        getInferredType(activeProperty?: string): any;
        render(): JSX.Element;
    }


    interface IAnimationEntryComponentProps {
        globalState: GlobalState;
        context: Context;
        animation: BABYLON.Animation;
    }
    interface IAnimationEntryComponentState {
        isExpanded: boolean;
        isSelected: boolean;
    }
    export class AnimationEntryComponent extends React.Component<IAnimationEntryComponentProps, IAnimationEntryComponentState> {
        private _onActiveAnimationChangedObserver;
        private _onActiveKeyPointChangedObserver;
        private _onSelectToActivatedObserver;
        private _unmount;
        constructor(props: IAnimationEntryComponentProps);
        private _onGear;
        private _onDelete;
        componentWillUnmount(): void;
        private _activate;
        private _expandOrCollapse;
        render(): JSX.Element;
    }


    interface IAnimationListComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface IAnimationListComponentState {
        isVisible: boolean;
    }
    export class AnimationListComponent extends React.Component<IAnimationListComponentProps, IAnimationListComponentState> {
        private _onEditAnimationRequiredObserver;
        private _onEditAnimationUIClosedObserver;
        private _onDeleteAnimationObserver;
        constructor(props: IAnimationListComponentProps);
        componentWillUnmount(): void;
        render(): JSX.Element | null;
    }


    interface IAnimationSubEntryComponentProps {
        globalState: GlobalState;
        context: Context;
        animation: BABYLON.Animation;
        color: string;
        subName: string;
    }
    interface IAnimationSubEntryComponentState {
        isSelected: boolean;
    }
    export class AnimationSubEntryComponent extends React.Component<IAnimationSubEntryComponentProps, IAnimationSubEntryComponentState> {
        private _onActiveAnimationChangedObserver;
        private _onActiveKeyPointChangedObserver;
        constructor(props: IAnimationSubEntryComponentProps);
        componentWillUnmount(): void;
        private _activate;
        render(): JSX.Element;
    }


    interface IEditAnimationComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface IEditAnimationComponentState {
        isVisible: boolean;
        animation: BABYLON.Nullable<BABYLON.Animation>;
    }
    export class EditAnimationComponent extends React.Component<IEditAnimationComponentProps, IEditAnimationComponentState> {
        private _root;
        private _displayName;
        private _property;
        private _loopModeElement;
        private _onEditAnimationRequiredObserver;
        constructor(props: IEditAnimationComponentProps);
        componentWillUnmount(): void;
        close(): void;
        validate(): void;
        render(): JSX.Element | null;
    }


    interface ILoadAnimationComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface ILoadAnimationComponentState {
    }
    export class LoadAnimationComponent extends React.Component<ILoadAnimationComponentProps, ILoadAnimationComponentState> {
        private _root;
        private _textInput;
        constructor(props: ILoadAnimationComponentProps);
        loadFromFile(evt: React.ChangeEvent<HTMLInputElement>): void;
        loadFromSnippetServer(): void;
        render(): JSX.Element;
    }


    interface ISaveAnimationComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface ISaveAnimationComponentState {
    }
    export class SaveAnimationComponent extends React.Component<ISaveAnimationComponentProps, ISaveAnimationComponentState> {
        private _selectedAnimations;
        private _root;
        constructor(props: ISaveAnimationComponentProps);
        private _getJson;
        saveToSnippetServer(): void;
        saveToFile(): void;
        render(): JSX.Element;
    }


    interface ISideBarComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface ISideBarComponentState {
        mode: Mode;
    }
    enum Mode {
        Edit = 0,
        Add = 1,
        Load = 2,
        Save = 3
    }
    export class SideBarComponent extends React.Component<ISideBarComponentProps, ISideBarComponentState> {
        constructor(props: ISideBarComponentProps);
        private _onAddAnimation;
        private _onLoadAnimation;
        private _onSaveAnimation;
        private _onEditAnimation;
        render(): JSX.Element;
    }


    interface ITopBarComponentProps {
        globalState: GlobalState;
        context: Context;
    }
    interface ITopBarComponentState {
        keyFrameValue: string;
        keyValue: string;
        frameControlEnabled: boolean;
        valueControlEnabled: boolean;
    }
    export class TopBarComponent extends React.Component<ITopBarComponentProps, ITopBarComponentState> {
        private _onFrameSetObserver;
        private _onValueSetObserver;
        private _onActiveAnimationChangedObserver;
        private _onActiveKeyPointChanged;
        constructor(props: ITopBarComponentProps);
        componentWillUnmount(): void;
        render(): JSX.Element;
    }


    interface ITargetedAnimationGridComponentProps {
        globalState: GlobalState;
        targetedAnimation: BABYLON.TargetedAnimation;
        scene: BABYLON.Scene;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class TargetedAnimationGridComponent extends React.Component<ITargetedAnimationGridComponentProps> {
        private _animationGroup;
        private _animationCurveEditorContext;
        constructor(props: ITargetedAnimationGridComponentProps);
        playOrPause: () => void;
        deleteAnimation: () => void;
        render(): JSX.Element;
    }


    interface IArcRotateCameraPropertyGridComponentProps {
        globalState: GlobalState;
        camera: BABYLON.ArcRotateCamera;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ArcRotateCameraPropertyGridComponent extends React.Component<IArcRotateCameraPropertyGridComponentProps> {
        constructor(props: IArcRotateCameraPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface ICommonCameraPropertyGridComponentProps {
        globalState: GlobalState;
        camera: BABYLON.Camera;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CommonCameraPropertyGridComponent extends React.Component<ICommonCameraPropertyGridComponentProps, {
        mode: number;
    }> {
        constructor(props: ICommonCameraPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface IFollowCameraPropertyGridComponentProps {
        globalState: GlobalState;
        camera: BABYLON.FollowCamera;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class FollowCameraPropertyGridComponent extends React.Component<IFollowCameraPropertyGridComponentProps> {
        constructor(props: IFollowCameraPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface IFreeCameraPropertyGridComponentProps {
        globalState: GlobalState;
        camera: BABYLON.FreeCamera;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class FreeCameraPropertyGridComponent extends React.Component<IFreeCameraPropertyGridComponentProps> {
        constructor(props: IFreeCameraPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface ICommonPropertyGridComponentProps {
        globalState: GlobalState;
        host: {
            metadata: any;
        };
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CommonPropertyGridComponent extends React.Component<ICommonPropertyGridComponentProps> {
        constructor(props: ICommonPropertyGridComponentProps);
        renderLevel(jsonObject: any): JSX.Element[];
        render(): JSX.Element | null;
    }


    interface ICustomPropertyGridComponentProps {
        globalState: GlobalState;
        target: any;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CustomPropertyGridComponent extends React.Component<ICustomPropertyGridComponentProps, {
        mode: number;
    }> {
        constructor(props: ICustomPropertyGridComponentProps);
        renderInspectable(inspectable: BABYLON.IInspectable): JSX.Element | null;
        render(): JSX.Element | null;
    }


    interface IFogPropertyGridComponentProps {
        globalState: GlobalState;
        scene: BABYLON.Scene;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class FogPropertyGridComponent extends React.Component<IFogPropertyGridComponentProps, {
        mode: number;
    }> {
        constructor(props: IFogPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface ILayerPropertyGridComponentProps {
        globalState: GlobalState;
        layer: BABYLON.EffectLayer;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class LayerPropertyGridComponent extends React.Component<ILayerPropertyGridComponentProps> {
        constructor(props: ILayerPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface ICommonLightPropertyGridComponentProps {
        globalState: GlobalState;
        light: BABYLON.Light;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CommonLightPropertyGridComponent extends React.Component<ICommonLightPropertyGridComponentProps> {
        constructor(props: ICommonLightPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface ICommonShadowLightPropertyGridComponentProps {
        globalState: GlobalState;
        light: BABYLON.IShadowLight;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CommonShadowLightPropertyGridComponent extends React.Component<ICommonShadowLightPropertyGridComponentProps> {
        private _internals;
        constructor(props: ICommonShadowLightPropertyGridComponentProps);
        createShadowGenerator(): void;
        disposeShadowGenerator(): void;
        render(): JSX.Element;
    }


    interface IDirectionalLightPropertyGridComponentProps {
        globalState: GlobalState;
        light: BABYLON.DirectionalLight;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class DirectionalLightPropertyGridComponent extends React.Component<IDirectionalLightPropertyGridComponentProps> {
        constructor(props: IDirectionalLightPropertyGridComponentProps);
        displayFrustum(): void;
        render(): JSX.Element;
    }


    interface IHemisphericLightPropertyGridComponentProps {
        globalState: GlobalState;
        light: BABYLON.HemisphericLight;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class HemisphericLightPropertyGridComponent extends React.Component<IHemisphericLightPropertyGridComponentProps> {
        constructor(props: IHemisphericLightPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface IPointLightPropertyGridComponentProps {
        globalState: GlobalState;
        light: BABYLON.PointLight;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class PointLightPropertyGridComponent extends React.Component<IPointLightPropertyGridComponentProps> {
        constructor(props: IPointLightPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface ISpotLightPropertyGridComponentProps {
        globalState: GlobalState;
        light: BABYLON.SpotLight;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class SpotLightPropertyGridComponent extends React.Component<ISpotLightPropertyGridComponentProps> {
        constructor(props: ISpotLightPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface IBackgroundMaterialPropertyGridComponentProps {
        globalState: GlobalState;
        material: BABYLON.BackgroundMaterial;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class BackgroundMaterialPropertyGridComponent extends React.Component<IBackgroundMaterialPropertyGridComponentProps> {
        private _onDebugSelectionChangeObservable;
        constructor(props: IBackgroundMaterialPropertyGridComponentProps);
        renderTextures(): JSX.Element;
        render(): JSX.Element;
    }


    interface ICommonMaterialPropertyGridComponentProps {
        globalState: GlobalState;
        material: BABYLON.Material;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CommonMaterialPropertyGridComponent extends React.Component<ICommonMaterialPropertyGridComponentProps> {
        constructor(props: ICommonMaterialPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface IMaterialPropertyGridComponentProps {
        globalState: GlobalState;
        material: BABYLON.Material;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class MaterialPropertyGridComponent extends React.Component<IMaterialPropertyGridComponentProps> {
        constructor(props: IMaterialPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface IMultiMaterialPropertyGridComponentProps {
        globalState: GlobalState;
        material: BABYLON.MultiMaterial;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class MultiMaterialPropertyGridComponent extends React.Component<IMultiMaterialPropertyGridComponentProps> {
        constructor(props: IMultiMaterialPropertyGridComponentProps);
        onMaterialLink(mat: BABYLON.Material): void;
        renderChildMaterial(): JSX.Element;
        render(): JSX.Element;
    }


    interface INodeMaterialPropertyGridComponentProps {
        globalState: GlobalState;
        material: BABYLON.NodeMaterial;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class NodeMaterialPropertyGridComponent extends React.Component<INodeMaterialPropertyGridComponentProps> {
        private _onDebugSelectionChangeObservable;
        constructor(props: INodeMaterialPropertyGridComponentProps);
        edit(): void;
        renderTextures(): JSX.Element | null;
        renderInputBlock(block: BABYLON.InputBlock): JSX.Element | null;
        renderInputValues(): JSX.Element;
        render(): JSX.Element;
    }


    interface IPBRMaterialPropertyGridComponentProps {
        globalState: GlobalState;
        material: BABYLON.PBRMaterial;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class PBRMaterialPropertyGridComponent extends React.Component<IPBRMaterialPropertyGridComponentProps> {
        private _onDebugSelectionChangeObservable;
        constructor(props: IPBRMaterialPropertyGridComponentProps);
        switchAmbientMode(state: boolean): void;
        renderTextures(onDebugSelectionChangeObservable: BABYLON.Observable<TextureLinkLineComponent>): JSX.Element;
        render(): JSX.Element;
    }


    interface IPBRMetallicRoughnessMaterialPropertyGridComponentProps {
        globalState: GlobalState;
        material: BABYLON.PBRMetallicRoughnessMaterial;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class PBRMetallicRoughnessMaterialPropertyGridComponent extends React.Component<IPBRMetallicRoughnessMaterialPropertyGridComponentProps> {
        private _onDebugSelectionChangeObservable;
        constructor(props: IPBRMetallicRoughnessMaterialPropertyGridComponentProps);
        renderTextures(): JSX.Element;
        render(): JSX.Element;
    }


    interface IPBRSpecularGlossinessMaterialPropertyGridComponentProps {
        globalState: GlobalState;
        material: BABYLON.PBRSpecularGlossinessMaterial;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class PBRSpecularGlossinessMaterialPropertyGridComponent extends React.Component<IPBRSpecularGlossinessMaterialPropertyGridComponentProps> {
        private _onDebugSelectionChangeObservable;
        constructor(props: IPBRSpecularGlossinessMaterialPropertyGridComponentProps);
        renderTextures(): JSX.Element;
        render(): JSX.Element;
    }


    interface IStandardMaterialPropertyGridComponentProps {
        globalState: GlobalState;
        material: BABYLON.StandardMaterial;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class StandardMaterialPropertyGridComponent extends React.Component<IStandardMaterialPropertyGridComponentProps> {
        private _onDebugSelectionChangeObservable;
        constructor(props: IStandardMaterialPropertyGridComponentProps);
        renderTextures(): JSX.Element;
        render(): JSX.Element;
    }


    interface ITexturePropertyGridComponentProps {
        texture: BABYLON.BaseTexture;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        globalState: GlobalState;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    interface ITexturePropertyGridComponentState {
        isTextureEditorOpen: boolean;
        textureEditing: BABYLON.Nullable<BABYLON.BaseTexture>;
    }
    export class TexturePropertyGridComponent extends React.Component<ITexturePropertyGridComponentProps, ITexturePropertyGridComponentState> {
        private _adtInstrumentation;
        private _popoutWindowRef;
        private _textureLineRef;
        private _textureInspectorSize;
        constructor(props: ITexturePropertyGridComponentProps);
        componentWillUnmount(): void;
        updateTexture(file: File): void;
        openTextureEditor(): void;
        onOpenTextureEditor(): void;
        onCloseTextureEditor(callback?: {
            (): void;
        }): void;
        forceRefresh(): void;
        findTextureFormat(format: number): {
            label: string;
            normalizable: number;
            value: number;
            hideType?: undefined;
            compressed?: undefined;
        } | {
            label: string;
            normalizable: number;
            hideType: boolean;
            value: number;
            compressed?: undefined;
        } | {
            label: string;
            normalizable: number;
            compressed: boolean;
            value: number;
            hideType?: undefined;
        } | null;
        findTextureType(type: number): {
            label: string;
            normalizable: number;
            value: number;
        } | null;
        render(): JSX.Element;
    }


    interface IBottomBarProps {
        texture: BABYLON.BaseTexture;
        mipLevel: number;
    }
    export class BottomBar extends React.PureComponent<IBottomBarProps> {
        render(): JSX.Element;
    }


    export var canvasShader: {
        path: {
            vertexSource: string;
            fragmentSource: string;
        };
        options: {
            attributes: string[];
            uniforms: string[];
        };
    };


    export interface IChannel {
        visible: boolean;
        editable: boolean;
        name: string;
        id: "R" | "G" | "B" | "A";
        icon: any;
    }
    interface IChannelsBarProps {
        channels: IChannel[];
        setChannels(channelState: IChannel[]): void;
    }
    export class ChannelsBar extends React.PureComponent<IChannelsBarProps> {
        render(): JSX.Element;
    }


    export var Contrast: IToolData;


    var _default: IToolData[];


    export var Eyedropper: IToolData;


    export var Floodfill: IToolData;


    export var Paintbrush: IToolData;


    export var RectangleSelect: IToolData;


    interface IPropertiesBarProps {
        texture: BABYLON.BaseTexture;
        size: BABYLON.ISize;
        saveTexture(): void;
        pixelData: IPixelData;
        face: number;
        setFace(face: number): void;
        resetTexture(): void;
        resizeTexture(width: number, height: number): void;
        uploadTexture(file: File): void;
        mipLevel: number;
        setMipLevel: (mipLevel: number) => void;
    }
    interface IPropertiesBarState {
        width: number;
        height: number;
    }
    export class PropertiesBar extends React.PureComponent<IPropertiesBarProps, IPropertiesBarState> {
        private _faces;
        constructor(props: IPropertiesBarProps);
        private _pixelData;
        private _getNewDimension;
        componentWillUpdate(nextProps: IPropertiesBarProps): void;
        render(): JSX.Element;
    }


    interface ITextureCanvasComponentProps {
        canvasUI: React.RefObject<HTMLCanvasElement>;
        canvas2D: React.RefObject<HTMLCanvasElement>;
        canvas3D: React.RefObject<HTMLCanvasElement>;
        texture: BABYLON.BaseTexture;
    }
    export class TextureCanvasComponent extends React.Component<ITextureCanvasComponentProps> {
        render(): JSX.Element;
    }


    export interface IPixelData {
        x?: number;
        y?: number;
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    }
    export class TextureCanvasManager {
        private _engine;
        private _scene;
        private _camera;
        private _cameraPos;
        private _scale;
        private _isPanning;
        private _mouseX;
        private _mouseY;
        private _uiCanvas;
        private _size;
        /** The canvas we paint onto using the canvas API */
        private _2DCanvas;
        /** The canvas we apply post processes to */
        private _3DCanvas;
        /** The canvas which handles channel filtering */
        private _channelsTexture;
        private _3DEngine;
        private _3DPlane;
        private _3DCanvasTexture;
        private _3DScene;
        private _channels;
        private _face;
        private _mipLevel;
        /** The texture from the original engine that we invoked the editor on */
        private _originalTexture;
        /** This is a hidden texture which is only responsible for holding the actual texture memory in the original engine */
        private _target;
        private _originalTextureProperties;
        /** Keeps track of whether we have modified the texture */
        private _didEdit;
        private _plane;
        private _planeMaterial;
        /** Tracks which keys are currently pressed */
        private _keyMap;
        /** Tracks which mouse buttons are currently pressed */
        private _buttonsPressed;
        private readonly ZOOM_MOUSE_SPEED;
        private readonly ZOOM_KEYBOARD_SPEED;
        private readonly ZOOM_IN_KEY;
        private readonly ZOOM_OUT_KEY;
        private readonly PAN_SPEED;
        private readonly PAN_KEY;
        private readonly MIN_SCALE;
        private readonly GRID_SCALE;
        private readonly MAX_SCALE;
        private readonly SELECT_ALL_KEY;
        private readonly SAVE_KEY;
        private readonly RESET_KEY;
        private readonly DESELECT_KEY;
        /** The number of milliseconds between texture updates */
        private readonly PUSH_FREQUENCY;
        private _tool;
        private _setPixelData;
        private _setMipLevel;
        private _window;
        private _metadata;
        private _editing3D;
        private _onUpdate;
        private _setMetadata;
        private _imageData;
        private _canPush;
        private _shouldPush;
        private _paintCanvas;
        constructor(texture: BABYLON.BaseTexture, window: Window, canvasUI: HTMLCanvasElement, canvas2D: HTMLCanvasElement, canvas3D: HTMLCanvasElement, setPixelData: (pixelData: IPixelData) => void, metadata: IMetadata, onUpdate: () => void, setMetadata: (metadata: any) => void, setMipLevel: (level: number) => void);
        updateTexture(): Promise<void>;
        private pushTexture;
        startPainting(): Promise<CanvasRenderingContext2D>;
        updatePainting(): void;
        stopPainting(): void;
        private updateDisplay;
        set channels(channels: IChannel[]);
        paintPixelsOnCanvas(pixelData: Uint8Array, canvas: HTMLCanvasElement): void;
        grabOriginalTexture(): Promise<Uint8Array>;
        getMouseCoordinates(pointerInfo: BABYLON.PointerInfo): BABYLON.Vector2;
        get scene(): BABYLON.Scene;
        get canvas2D(): HTMLCanvasElement;
        get size(): BABYLON.ISize;
        set tool(tool: BABYLON.Nullable<ITool>);
        get tool(): BABYLON.Nullable<ITool>;
        set face(face: number);
        set mipLevel(mipLevel: number);
        /** Returns the 3D scene used for postprocesses */
        get scene3D(): BABYLON.Scene;
        set metadata(metadata: IMetadata);
        private makePlane;
        reset(): void;
        resize(newSize: BABYLON.ISize): Promise<void>;
        setSize(size: BABYLON.ISize): void;
        upload(file: File): void;
        saveTexture(): void;
        toolInteractionEnabled(): boolean;
        dispose(): void;
    }


   
}

        var _TOOL_DATA_: IToolData;
    
declare module INSPECTOR {
    
    interface ITextureEditorComponentProps {
        texture: BABYLON.BaseTexture;
        url: string;
        window: React.RefObject<PopupComponent>;
        onUpdate: () => void;
    }
    interface ITextureEditorComponentState {
        tools: ITool[];
        activeToolIndex: number;
        metadata: IMetadata;
        channels: IChannel[];
        pixelData: IPixelData;
        face: number;
        mipLevel: number;
        pickerOpen: boolean;
    }
    export interface IToolParameters {
        /** The visible scene in the editor. Useful for adding pointer and keyboard events. */
        scene: BABYLON.Scene;
        /** The 2D canvas which you can sample pixel data from. Tools should not paint directly on this canvas. */
        canvas2D: HTMLCanvasElement;
        /** The 3D scene which tools can add post processes to. */
        scene3D: BABYLON.Scene;
        /** The size of the texture. */
        size: BABYLON.ISize;
        /** Pushes the editor texture back to the original scene. This should be called every time a tool makes any modification to a texture. */
        updateTexture: () => void;
        /** The metadata object which is shared between all tools. Feel free to store any information here. Do not set this directly: instead call setMetadata. */
        metadata: IMetadata;
        /** Call this when you want to mutate the metadata. */
        setMetadata: (data: any) => void;
        /** Returns the texture coordinates under the cursor */
        getMouseCoordinates: (pointerInfo: BABYLON.PointerInfo) => BABYLON.Vector2;
        /** Provides a canvas that you can use the canvas API to paint on. */
        startPainting: () => Promise<CanvasRenderingContext2D>;
        /** After you have painted on your canvas, call this method to push the updates back to the texture. */
        updatePainting: () => void;
        /** Call this when you are finished painting. */
        stopPainting: () => void;
        /** Returns whether the tool should be allowed to interact */
        interactionEnabled: () => boolean;
    }
    export interface IToolGUIProps {
        instance: IToolType;
    }
    /** An interface representing the definition of a tool */
    export interface IToolData {
        /** Name to display on the toolbar */
        name: string;
        /** A class definition for the tool including setup and cleanup methods */
        type: IToolConstructable;
        /**  An SVG icon encoded in Base64 */
        icon: string;
        /** Whether the tool uses postprocesses */
        is3D?: boolean;
        cursor?: string;
        settingsComponent?: React.ComponentType<IToolGUIProps>;
    }
    export interface IToolType {
        /** Called when the tool is selected. */
        setup: () => void;
        /** Called when the tool is deselected. */
        cleanup: () => void;
        /** Optional. Called when the user resets the texture or uploads a new texture. Tools may want to reset their state when this happens. */
        onReset?: () => void;
    }
    /** For constructable types, TS requires that you define a separate interface which constructs your actual interface */
    interface IToolConstructable {
        new (getParameters: () => IToolParameters): IToolType;
    }
    export interface IMetadata {
        color: string;
        alpha: number;
        select: {
            x1: number;
            y1: number;
            x2: number;
            y2: number;
        };
        [key: string]: any;
    }
    export class TextureEditorComponent extends React.Component<ITextureEditorComponentProps, ITextureEditorComponentState> {
        private _textureCanvasManager;
        private _uiCanvas;
        private _2DCanvas;
        private _3DCanvas;
        private _pickerRef;
        private _timer;
        private static _PREVIEW_UPDATE_DELAY_MS;
        constructor(props: ITextureEditorComponentProps);
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        textureDidUpdate(): void;
        loadToolFromURL(url: string): void;
        addTools(tools: IToolData[]): void;
        getToolParameters(): IToolParameters;
        changeTool(index: number): void;
        setMetadata(newMetadata: any): void;
        setPickerOpen(open: boolean): void;
        onPointerDown(evt: React.PointerEvent): void;
        saveTexture(): void;
        resetTexture(): void;
        resizeTexture(width: number, height: number): void;
        uploadTexture(file: File): void;
        render(): JSX.Element;
    }


    export interface ITool extends IToolData {
        instance: IToolType;
    }
    interface IToolBarProps {
        tools: ITool[];
        addTool(url: string): void;
        changeTool(toolIndex: number): void;
        activeToolIndex: number;
        metadata: IMetadata;
        setMetadata(data: any): void;
        pickerOpen: boolean;
        setPickerOpen(open: boolean): void;
        pickerRef: React.RefObject<HTMLDivElement>;
        hasAlpha: boolean;
    }
    interface IToolBarState {
        toolURL: string;
        addOpen: boolean;
    }
    export class ToolBar extends React.Component<IToolBarProps, IToolBarState> {
        private _lockObject;
        constructor(props: IToolBarProps);
        computeRGBAColor(): BABYLON.Color4;
        shouldComponentUpdate(nextProps: IToolBarProps): boolean;
        render(): JSX.Element;
    }


    interface IToolSettingsProps {
        tool: ITool | undefined;
    }
    export class ToolSettings extends React.Component<IToolSettingsProps> {
        render(): JSX.Element;
    }


    interface IBonePropertyGridComponentProps {
        globalState: GlobalState;
        bone: BABYLON.Bone;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class BonePropertyGridComponent extends React.Component<IBonePropertyGridComponentProps> {
        constructor(props: IBonePropertyGridComponentProps);
        onTransformNodeLink(): void;
        render(): JSX.Element;
    }


    interface IMeshPropertyGridComponentProps {
        globalState: GlobalState;
        mesh: BABYLON.Mesh;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class MeshPropertyGridComponent extends React.Component<IMeshPropertyGridComponentProps, {
        displayNormals: boolean;
        displayVertexColors: boolean;
        displayBoneWeights: boolean;
        displayBoneIndex: number;
        displaySkeletonMap: boolean;
    }> {
        constructor(props: IMeshPropertyGridComponentProps);
        renderWireframeOver(): void;
        renderNormalVectors(): void;
        displayNormals(): void;
        displayVertexColors(): void;
        displayBoneWeights(): void;
        displaySkeletonMap(): void;
        onBoneDisplayIndexChange(value: number): void;
        onMaterialLink(): void;
        onSourceMeshLink(): void;
        onSkeletonLink(): void;
        convertPhysicsTypeToString(): string;
        render(): JSX.Element;
    }


    interface ISkeletonPropertyGridComponentProps {
        globalState: GlobalState;
        skeleton: BABYLON.Skeleton;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class SkeletonPropertyGridComponent extends React.Component<ISkeletonPropertyGridComponentProps> {
        private _skeletonViewersEnabled;
        private _skeletonViewerDisplayOptions;
        private _skeletonViewers;
        constructor(props: ISkeletonPropertyGridComponentProps);
        switchSkeletonViewers(): void;
        checkSkeletonViewerState(props: ISkeletonPropertyGridComponentProps): void;
        changeDisplayMode(): void;
        changeDisplayOptions(option: string, value: number): void;
        shouldComponentUpdate(nextProps: ISkeletonPropertyGridComponentProps): boolean;
        render(): JSX.Element;
    }


    interface ITransformNodePropertyGridComponentProps {
        globalState: GlobalState;
        transformNode: BABYLON.TransformNode;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class TransformNodePropertyGridComponent extends React.Component<ITransformNodePropertyGridComponentProps> {
        constructor(props: ITransformNodePropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface IParentPropertyGridComponentProps {
        globalState: GlobalState;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        node: BABYLON.Node;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ParentPropertyGridComponent extends React.Component<IParentPropertyGridComponentProps> {
        constructor(props: IParentPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface IBoxEmitterGridComponentProps {
        globalState: GlobalState;
        emitter: BABYLON.BoxParticleEmitter;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    export class BoxEmitterGridComponent extends React.Component<IBoxEmitterGridComponentProps> {
        constructor(props: IBoxEmitterGridComponentProps);
        render(): JSX.Element;
    }


    interface IColorGradientStepGridComponent {
        globalState: GlobalState;
        gradient: BABYLON.ColorGradient | BABYLON.Color3Gradient;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        lineIndex: number;
        isColor3: boolean;
        onDelete: () => void;
        onUpdateGradient: () => void;
        onCheckForReOrder: () => void;
        host: BABYLON.IParticleSystem;
        codeRecorderPropertyName: string;
    }
    export class ColorGradientStepGridComponent extends React.Component<IColorGradientStepGridComponent, {
        gradient: number;
    }> {
        constructor(props: IColorGradientStepGridComponent);
        updateColor1(color: string): void;
        updateColor2(color: string): void;
        updateGradient(gradient: number): void;
        onPointerUp(): void;
        lock(): void;
        unlock(): void;
        render(): JSX.Element;
    }


    interface IConeEmitterGridComponentProps {
        globalState: GlobalState;
        emitter: BABYLON.ConeParticleEmitter;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ConeEmitterGridComponent extends React.Component<IConeEmitterGridComponentProps> {
        constructor(props: IConeEmitterGridComponentProps);
        render(): JSX.Element;
    }


    interface ICylinderEmitterGridComponentProps {
        globalState: GlobalState;
        emitter: BABYLON.CylinderParticleEmitter;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CylinderEmitterGridComponent extends React.Component<ICylinderEmitterGridComponentProps> {
        constructor(props: ICylinderEmitterGridComponentProps);
        render(): JSX.Element;
    }


    interface IFactorGradientStepGridComponent {
        globalState: GlobalState;
        gradient: BABYLON.FactorGradient;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        lineIndex: number;
        onDelete: () => void;
        onUpdateGradient: () => void;
        onCheckForReOrder: () => void;
        host: BABYLON.IParticleSystem;
        codeRecorderPropertyName: string;
    }
    export class FactorGradientStepGridComponent extends React.Component<IFactorGradientStepGridComponent, {
        gradient: number;
        factor1: string;
        factor2?: string;
    }> {
        constructor(props: IFactorGradientStepGridComponent);
        shouldComponentUpdate(nextProps: IFactorGradientStepGridComponent, nextState: {
            gradient: number;
            factor1: string;
            factor2?: string;
        }): boolean;
        updateFactor1(valueString: string): void;
        updateFactor2(valueString: string): void;
        updateGradient(gradient: number): void;
        onPointerUp(): void;
        lock(): void;
        unlock(): void;
        render(): JSX.Element;
    }


    interface IHemisphericEmitterGridComponentProps {
        globalState: GlobalState;
        emitter: BABYLON.HemisphericParticleEmitter;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class HemisphericEmitterGridComponent extends React.Component<IHemisphericEmitterGridComponentProps> {
        constructor(props: IHemisphericEmitterGridComponentProps);
        render(): JSX.Element;
    }


    interface IMeshEmitterGridComponentProps {
        globalState: GlobalState;
        emitter: BABYLON.MeshParticleEmitter;
        scene: BABYLON.Scene;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class MeshEmitterGridComponent extends React.Component<IMeshEmitterGridComponentProps> {
        constructor(props: IMeshEmitterGridComponentProps);
        render(): JSX.Element;
    }


    interface IParticleSystemPropertyGridComponentProps {
        globalState: GlobalState;
        system: BABYLON.IParticleSystem;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ParticleSystemPropertyGridComponent extends React.Component<IParticleSystemPropertyGridComponentProps> {
        private _snippetUrl;
        constructor(props: IParticleSystemPropertyGridComponentProps);
        renderEmitter(): JSX.Element | null;
        raiseOnPropertyChanged(property: string, newValue: any, previousValue: any): void;
        renderControls(): JSX.Element;
        saveToFile(): void;
        loadFromFile(file: File): void;
        loadFromSnippet(): void;
        saveToSnippet(): void;
        render(): JSX.Element;
    }


    interface IPointEmitterGridComponentProps {
        globalState: GlobalState;
        emitter: BABYLON.PointParticleEmitter;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class PointEmitterGridComponent extends React.Component<IPointEmitterGridComponentProps> {
        constructor(props: IPointEmitterGridComponentProps);
        render(): JSX.Element;
    }


    interface ISphereEmitterGridComponentProps {
        globalState: GlobalState;
        emitter: BABYLON.SphereParticleEmitter;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class SphereEmitterGridComponent extends React.Component<ISphereEmitterGridComponentProps> {
        constructor(props: ISphereEmitterGridComponentProps);
        render(): JSX.Element;
    }


    export enum GradientGridMode {
        Factor = 0,
        Color3 = 1,
        Color4 = 2
    }
    interface IValueGradientGridComponent {
        globalState: GlobalState;
        label: string;
        gradients: BABYLON.Nullable<Array<BABYLON.IValueGradient>>;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        docLink?: string;
        mode: GradientGridMode;
        host: BABYLON.IParticleSystem;
        codeRecorderPropertyName: string;
        onCreateRequired: () => void;
    }
    export class ValueGradientGridComponent extends React.Component<IValueGradientGridComponent> {
        constructor(props: IValueGradientGridComponent);
        deleteStep(step: BABYLON.IValueGradient): void;
        addNewStep(): void;
        checkForReOrder(): void;
        updateAndSync(): void;
        render(): JSX.Element;
    }


    interface ICommonPostProcessPropertyGridComponentProps {
        globalState: GlobalState;
        postProcess: BABYLON.PostProcess;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CommonPostProcessPropertyGridComponent extends React.Component<ICommonPostProcessPropertyGridComponentProps> {
        constructor(props: ICommonPostProcessPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface ICommonRenderingPipelinePropertyGridComponentProps {
        globalState: GlobalState;
        renderPipeline: BABYLON.PostProcessRenderPipeline;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CommonRenderingPipelinePropertyGridComponent extends React.Component<ICommonRenderingPipelinePropertyGridComponentProps> {
        constructor(props: ICommonRenderingPipelinePropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface IDefaultRenderingPipelinePropertyGridComponentProps {
        globalState: GlobalState;
        renderPipeline: BABYLON.DefaultRenderingPipeline;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class DefaultRenderingPipelinePropertyGridComponent extends React.Component<IDefaultRenderingPipelinePropertyGridComponentProps> {
        constructor(props: IDefaultRenderingPipelinePropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface ILenstRenderingPipelinePropertyGridComponentProps {
        globalState: GlobalState;
        renderPipeline: BABYLON.LensRenderingPipeline;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class LensRenderingPipelinePropertyGridComponent extends React.Component<ILenstRenderingPipelinePropertyGridComponentProps> {
        constructor(props: ILenstRenderingPipelinePropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface IPostProcessPropertyGridComponentProps {
        globalState: GlobalState;
        postProcess: BABYLON.PostProcess;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class PostProcessPropertyGridComponent extends React.Component<IPostProcessPropertyGridComponentProps> {
        constructor(props: IPostProcessPropertyGridComponentProps);
        edit(): void;
        render(): JSX.Element;
    }


    interface IRenderingPipelinePropertyGridComponentProps {
        globalState: GlobalState;
        renderPipeline: BABYLON.PostProcessRenderPipeline;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class RenderingPipelinePropertyGridComponent extends React.Component<IRenderingPipelinePropertyGridComponentProps> {
        constructor(props: IRenderingPipelinePropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface ISSAO2RenderingPipelinePropertyGridComponentProps {
        globalState: GlobalState;
        renderPipeline: BABYLON.SSAO2RenderingPipeline;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class SSAO2RenderingPipelinePropertyGridComponent extends React.Component<ISSAO2RenderingPipelinePropertyGridComponentProps> {
        constructor(props: ISSAO2RenderingPipelinePropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface ISSAORenderingPipelinePropertyGridComponentProps {
        globalState: GlobalState;
        renderPipeline: BABYLON.SSAORenderingPipeline;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class SSAORenderingPipelinePropertyGridComponent extends React.Component<ISSAORenderingPipelinePropertyGridComponentProps> {
        constructor(props: ISSAORenderingPipelinePropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface IRenderGridPropertyGridComponentProps {
        globalState: GlobalState;
        scene: BABYLON.Scene;
    }
    export class RenderGridPropertyGridComponent extends React.Component<IRenderGridPropertyGridComponentProps, {
        isEnabled: boolean;
    }> {
        private _gridMesh;
        constructor(props: IRenderGridPropertyGridComponentProps);
        componentDidMount(): void;
        addOrRemoveGrid(): void;
        render(): JSX.Element;
    }


    interface IScenePropertyGridComponentProps {
        globalState: GlobalState;
        scene: BABYLON.Scene;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
    }
    export class ScenePropertyGridComponent extends React.Component<IScenePropertyGridComponentProps> {
        private _storedEnvironmentTexture;
        private _renderingModeGroupObservable;
        constructor(props: IScenePropertyGridComponentProps);
        setRenderingModes(point: boolean, wireframe: boolean): void;
        switchIBL(): void;
        updateEnvironmentTexture(file: File): void;
        updateGravity(newValue: BABYLON.Vector3): void;
        updateTimeStep(newValue: number): void;
        normalizeScene(): void;
        render(): JSX.Element;
    }


    interface ISoundPropertyGridComponentProps {
        globalState: GlobalState;
        sound: BABYLON.Sound;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class SoundPropertyGridComponent extends React.Component<ISoundPropertyGridComponentProps> {
        constructor(props: ISoundPropertyGridComponentProps);
        render(): JSX.Element;
    }


    interface ISpriteManagerPropertyGridComponentProps {
        globalState: GlobalState;
        spriteManager: BABYLON.SpriteManager;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class SpriteManagerPropertyGridComponent extends React.Component<ISpriteManagerPropertyGridComponentProps> {
        private _snippetUrl;
        constructor(props: ISpriteManagerPropertyGridComponentProps);
        addNewSprite(): void;
        disposeManager(): void;
        saveToFile(): void;
        loadFromFile(file: File): void;
        loadFromSnippet(): void;
        saveToSnippet(): void;
        render(): JSX.Element;
    }


    interface ISpritePropertyGridComponentProps {
        globalState: GlobalState;
        sprite: BABYLON.Sprite;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
    }
    export class SpritePropertyGridComponent extends React.Component<ISpritePropertyGridComponentProps> {
        private _canvasRef;
        private _imageData;
        private _cachedCellIndex;
        constructor(props: ISpritePropertyGridComponentProps);
        onManagerLink(): void;
        switchPlayStopState(): void;
        disposeSprite(): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        shouldComponentUpdate(nextProps: ISpritePropertyGridComponentProps): boolean;
        updatePreview(): void;
        render(): JSX.Element;
    }


    interface IVariantsPropertyGridComponentProps {
        globalState: GlobalState;
        host: any;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class VariantsPropertyGridComponent extends React.Component<IVariantsPropertyGridComponentProps> {
        constructor(props: IVariantsPropertyGridComponentProps);
        private _getVariantsExtension;
        render(): JSX.Element | null;
    }


    /// <reference types="react" />
    export class PropertyGridTabComponent extends PaneComponent {
        private _timerIntervalId;
        private _lockObject;
        constructor(props: IPaneComponentProps);
        timerRefresh(): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element | null;
    }


    /// <reference types="react" />
    export class SettingsTabComponent extends PaneComponent {
        constructor(props: IPaneComponentProps);
        render(): JSX.Element;
    }


    /// <reference types="react" />
    export class StatisticsTabComponent extends PaneComponent {
        private _sceneInstrumentation;
        private _engineInstrumentation;
        private _timerIntervalId;
        constructor(props: IPaneComponentProps);
        componentWillUnmount(): void;
        render(): JSX.Element | null;
    }


    interface IGLTFComponentProps {
        scene: BABYLON.Scene;
        globalState: GlobalState;
    }
    export class GLTFComponent extends React.Component<IGLTFComponentProps> {
        private _onValidationResultsUpdatedObserver;
        openValidationDetails(): void;
        prepareText(singularForm: string, count: number): string;
        componentDidMount(): void;
        componentWillUnmount(): void;
        renderValidation(): JSX.Element | null;
        render(): JSX.Element;
    }


    /// <reference types="react" />
    export class ToolsTabComponent extends PaneComponent {
        private _lockObject;
        private _videoRecorder;
        private _screenShotSize;
        private _gifOptions;
        private _useWidthHeight;
        private _isExportingGltf;
        private _gltfExportOptions;
        private _gifWorkerBlob;
        private _gifRecorder;
        private _previousRenderingScale;
        private _crunchingGIF;
        private _reflectorHostname;
        private _reflectorPort;
        private _reflector;
        private _envOptions;
        constructor(props: IPaneComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        captureScreenshot(): void;
        captureRender(): void;
        recordVideo(): void;
        recordGIFInternal(): void;
        recordGIF(): void;
        importAnimations(event: any): void;
        exportGLTF(): void;
        exportBabylon(): void;
        createEnvTexture(): void;
        exportReplay(): void;
        startRecording(): void;
        applyDelta(file: File): void;
        connectReflector(): void;
        render(): JSX.Element | null;
    }


    interface ITabsComponentProps {
        children: any[];
        selectedIndex: number;
        onSelectedIndexChange: (value: number) => void;
    }
    export class TabsComponent extends React.Component<ITabsComponentProps> {
        constructor(props: ITabsComponentProps);
        onSelect(index: number): void;
        renderLabel(child: PaneComponent, index: number): JSX.Element;
        render(): JSX.Element;
    }


    interface IEmbedHostComponentProps {
        scene: BABYLON.Scene;
        globalState: GlobalState;
        popupMode: boolean;
        noClose?: boolean;
        noExpand?: boolean;
        onClose: () => void;
        onPopup: () => void;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        initialTab?: BABYLON.DebugLayerTab;
    }
    export class EmbedHostComponent extends React.Component<IEmbedHostComponentProps> {
        private _once;
        private _splitRef;
        private _topPartRef;
        private _bottomPartRef;
        constructor(props: IEmbedHostComponentProps);
        componentDidMount(): void;
        renderContent(): JSX.Element;
        render(): JSX.Element;
    }


    export class GlobalState {
        onSelectionChangedObservable: BABYLON.Observable<any>;
        onPropertyChangedObservable: BABYLON.Observable<PropertyChangedEvent>;
        onInspectorClosedObservable: BABYLON.Observable<BABYLON.Scene>;
        onTabChangedObservable: BABYLON.Observable<number>;
        onSelectionRenamedObservable: BABYLON.Observable<void>;
        onPluginActivatedObserver: BABYLON.Nullable<BABYLON.Observer<BABYLON.ISceneLoaderPlugin | BABYLON.ISceneLoaderPluginAsync>>;
        onNewSceneObservable: BABYLON.Observable<BABYLON.Scene>;
        sceneImportDefaults: {
            [key: string]: any;
        };
        validationResults: BABYLON.Nullable<BABYLON.GLTF2.IGLTFValidationResults>;
        onValidationResultsUpdatedObservable: BABYLON.Observable<BABYLON.Nullable<BABYLON.GLTF2.IGLTFValidationResults>>;
        onExtensionLoadedObservable: BABYLON.Observable<BABYLON.IGLTFLoaderExtension>;
        glTFLoaderExtensionDefaults: {
            [name: string]: {
                [key: string]: any;
            };
        };
        glTFLoaderDefaults: {
            [key: string]: any;
        };
        glTFLoaderExtensions: {
            [key: string]: BABYLON.IGLTFLoaderExtension;
        };
        blockMutationUpdates: boolean;
        selectedLineContainerTitles: Array<string>;
        selectedLineContainerTitlesNoFocus: Array<string>;
        recorder: ReplayRecorder;
        private _onlyUseEulers;
        get onlyUseEulers(): boolean;
        set onlyUseEulers(value: boolean);
        private _ignoreBackfacesForPicking;
        get ignoreBackfacesForPicking(): boolean;
        set ignoreBackfacesForPicking(value: boolean);
        init(propertyChangedObservable: BABYLON.Observable<PropertyChangedEvent>): void;
        prepareGLTFPlugin(loader: BABYLON.GLTFFileLoader): void;
        resetGLTFValidationResults(): void;
        lightGizmos: Array<BABYLON.LightGizmo>;
        enableLightGizmo(light: BABYLON.Light, enable?: boolean): void;
        cameraGizmos: Array<BABYLON.CameraGizmo>;
        enableCameraGizmo(camera: BABYLON.Camera, enable?: boolean): void;
        onSceneExplorerClosedObservable: BABYLON.Observable<void>;
        onActionTabsClosedObservable: BABYLON.Observable<void>;
    }


    interface ICanvasGraphComponentProps {
        id: string;
        scene: BABYLON.Scene;
        collector: BABYLON.PerformanceViewerCollector;
        layoutObservable?: BABYLON.Observable<IPerfLayoutSize>;
        returnToPlayheadObservable?: BABYLON.Observable<void>;
        onVisibleRangeChangedObservable?: BABYLON.Observable<IVisibleRangeChangedObservableProps>;
        initialGraphSize?: {
            width: number;
            height: number;
        };
    }
    export var CanvasGraphComponent: React.FC<ICanvasGraphComponentProps>;


    export class CanvasGraphService {
        private _ctx;
        private _width;
        private _height;
        private _sizeOfWindow;
        private _ticks;
        private _panPosition;
        private _position;
        private _datasetBounds;
        private _globalTimeMinMax;
        private _hoverPosition;
        private _drawableArea;
        private _axisHeight;
        private _tooltipItems;
        private _tooltipTextCache;
        private _tickerTextCache;
        private _tickerItems;
        private _preprocessedTooltipInfo;
        private _numberOfTickers;
        private _onVisibleRangeChangedObservable?;
        private readonly _addonFontLineHeight;
        private readonly _defaultLineHeight;
        readonly datasets: BABYLON.IPerfDatasets;
        metadata: Map<string, BABYLON.IPerfMetadata>;
        /**
         * Creates an instance of CanvasGraphService.
         *
         * @param canvas a pointer to the canvas dom element we would like to write to.
         * @param settings settings for our service.
         */
        constructor(canvas: HTMLCanvasElement, settings: ICanvasGraphServiceSettings);
        /**
         * This method lets the service know it should get ready to update what it is displaying.
         */
        update: (...args: any[]) => void;
        /**
         * Update the canvas graph service with the new height and width of the canvas.
         * @param size The new size of the canvas.
         */
        resize(size: IPerfLayoutSize): void;
        /**
         * Force resets the position in the data, effectively returning to the most current data.
         */
        resetDataPosition(): void;
        private _prevPointById;
        private _prevValueById;
        /**
         * This method draws the data and sets up the appropriate scales.
         */
        private _draw;
        private _drawTickers;
        /**
         * Returns the index of the closest time for the datasets.
         * Uses a modified binary search to get value.
         *
         * @param targetTime the time we want to get close to.
         * @returns index of the item with the closest time to the targetTime
         */
        private _getClosestPointToTimestamp;
        /**
         * This is a convenience method to get the number of collected slices.
         * @returns the total number of collected slices.
         */
        private _getNumberOfSlices;
        /**
         * Draws the time axis, adjusts the drawable area for the graph.
         *
         * @param timeMinMax the minimum and maximum for the time axis.
         * @param drawableArea the current allocated drawable area.
         */
        private _drawTimeAxis;
        /**
         * Given a timestamp (should be the maximum timestamp in view), this function returns the maximum unit the timestamp contains.
         * This information can be used for formatting purposes.
         * @param timestamp the maximum timestamp to find the maximum timestamp unit for.
         * @returns The maximum unit the timestamp has.
         */
        private _getTimestampUnit;
        /**
         * Given a timestamp and the interval unit, this function will parse the timestamp to the appropriate format.
         * @param timestamp The timestamp to parse
         * @param intervalUnit The maximum unit of the maximum timestamp in an interval.
         * @returns a string representing the parsed timestamp.
         */
        private _parseTimestamp;
        /**
         * Generates a list of ticks given the min and max of the axis, and the space available in the axis.
         *
         * @param minMax the minimum and maximum values of the axis
         * @param spaceAvailable the total amount of space we have allocated to our axis
         */
        private _generateTicks;
        /**
         * Nice number algorithm based on psueudo code defined in "Graphics Gems" by Andrew S. Glassner.
         * This will find a "nice" number approximately equal to num.
         *
         * @param num The number we want to get close to.
         * @param shouldRound if true we will round the number, otherwise we will get the ceiling.
         * @returns a "nice" number approximately equal to num.
         */
        private _niceNumber;
        /**
         * Gets the min and max as a single object from an array of numbers.
         * @param bounds
         * @param offset
         * @returns the min and max of the array.
         */
        private _getMinMax;
        /**
         * Converts a single number to a pixel coordinate in a single axis by normalizing the data to a [0, 1] scale using the minimum and maximum values.
         *
         * @param num the number we want to get the pixel coordinate for
         * @param minMax the min and max of the dataset in the axis we want the pixel coordinate for.
         * @param startingPixel the starting pixel coordinate (this means it takes account for any offset).
         * @param spaceAvailable the total space available in this axis.
         * @param shouldFlipValue if we should use a [1, 0] scale instead of a [0, 1] scale.
         * @returns the pixel coordinate of the value in a single axis.
         */
        private _getPixelForNumber;
        /**
         * Add in any necessary event listeners.
         *
         * @param canvas The canvas we want to attach listeners to.
         */
        private _attachEventListeners;
        /**
         * We remove all event listeners we added.
         *
         * @param canvas The canvas we want to remove listeners from.
         */
        private _removeEventListeners;
        /**
         * Handles what to do when we are hovering over the canvas and not panning.
         *
         * @param event A reference to the event to be handled.
         */
        private _handleDataHover;
        /**
         * Debounced processing and drawing of tooltip.
         */
        private _debouncedTooltip;
        /**
         * Handles what to do when we stop hovering over the canvas.
         */
        private _handleStopHover;
        /**
         * Given a line defined by P1: (x1, y1) and P2: (x2, y2) get the distance of P0 (x0, y0) from the line.
         * https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line#Line_defined_by_two_points
         * @param x1 x position of point P1
         * @param y1 y position of point P1
         * @param x2 x position of point P2
         * @param y2 y position of point P2
         * @param x0 x position of point P0
         * @param y0 y position of point P0
         * @returns distance of P0 from the line defined by P1 and P2
         */
        private _getDistanceFromLine;
        /**
         * This method does preprocessing calculations for the tooltip.
         * @param pos the position of our mouse.
         * @param drawableArea the remaining drawable area.
         */
        private _preprocessTooltip;
        /**
         * Draws the tooltip given the area it is allowed to draw in and the current pixel position.
         *
         * @param pos the position of the mouse cursor in pixels (x, y).
         * @param drawableArea  the available area we can draw in.
         */
        private _drawTooltip;
        /**
         * Gets the number from a pixel position given the minimum and maximum value in range, and the starting pixel and the ending pixel.
         *
         * @param pixel current pixel position we want to get the number for.
         * @param minMax the minimum and maximum number in the range.
         * @param startingPixel position of the starting pixel in range.
         * @param endingPixel position of ending pixel in range.
         * @param shouldFlip if we should use a [1, 0] scale instead of a [0, 1] scale.
         * @returns number corresponding to pixel position
         */
        private _getNumberFromPixel;
        /**
         * The handler for when we want to zoom in and out of the graph.
         *
         * @param event a mouse wheel event.
         */
        private _handleZoom;
        /**
         * Initializes the panning object and attaches appropriate listener.
         *
         * @param event the mouse event containing positional information.
         */
        private _handlePanStart;
        /**
         * While panning this event will keep track of the delta and update the "positions".
         *
         * @param event The mouse event that contains positional information.
         */
        private _handlePan;
        /**
         * Clears the panning object and removes the appropriate listener.
         */
        private _handlePanStop;
        /**
         * Method which returns true if the data should become realtime, false otherwise.
         *
         * @returns if the data should become realtime or not.
         */
        private _shouldBecomeRealtime;
        /**
         * Will generate a playhead with a futurebox that takes up (1-scalefactor)*100% of the canvas.
         *
         * @param drawableArea The remaining drawable area.
         * @param scaleFactor The Percentage between 0.0 and 1.0 of the canvas the data gets drawn on.
         */
        private _drawPlayheadRegion;
        /**
         *  Method to do cleanup when the object is done being used.
         *
         */
        destroy(): void;
        /**
         * This method clears the canvas
         */
        clear(): void;
    }


    /**
     * Defines a structure to hold max, min and a optional current.
     */
    export interface IPerfMinMax {
        min: number;
        max: number;
        current?: number;
    }
    /**
     * Defines structure of the object which contains information related to panning.
     */
    export interface IPerfMousePanningPosition {
        xPos: number;
        delta: number;
    }
    /**
     * Defines structure of the object which contains information regarding the bounds of each dataset we want to consider.
     */
    export interface IPerfIndexBounds {
        start: number;
        end: number;
    }
    export interface IPerfLayoutSize {
        width: number;
        height: number;
    }
    /**
     * Defines the structure of the meta object for the tooltip that appears when hovering over a performance graph!
     */
    export interface IPerfTooltip {
        text: string;
        color: string;
    }
    /**
     * Defines the structure of a cache object used to store the result of measureText().
     */
    export interface IPerfTextMeasureCache {
        text: string;
        width: number;
    }
    /**
     * Defines a structure defining the available space in a drawable area.
     */
    export interface IGraphDrawableArea {
        top: number;
        left: number;
        bottom: number;
        right: number;
    }
    /**
     * Defines the structure representing necessary ticker information.
     */
    export interface IPerfTicker extends IPerfMinMax {
        id: string;
        text: string;
    }
    export interface IVisibleRangeChangedObservableProps {
        valueMap: Map<string, IPerfMinMax>;
    }
    /**
     * Defines what settings our canvas graphing service accepts
     */
    export interface ICanvasGraphServiceSettings {
        datasets: BABYLON.IPerfDatasets;
        onVisibleRangeChangedObservable?: BABYLON.Observable<IVisibleRangeChangedObservableProps>;
    }
    /**
     * Defines the structure representing the preprocessable tooltip information.
     */
    export interface ITooltipPreprocessedInformation {
        xForActualTimestamp: number;
        numberOfTooltipItems: number;
        longestText: string;
        focusedId: string;
    }
    export interface IPerfTooltipHoverPosition {
        xPos: number;
        yPos: number;
    }
    /**
     * Defines the supported timestamp units.
     */
    export enum TimestampUnit {
        Milliseconds = 0,
        Seconds = 1,
        Minutes = 2,
        Hours = 3
    }


    export interface IHeaderComponentProps {
        title: string;
        handleBack?: boolean;
        noExpand?: boolean;
        noClose?: boolean;
        noCommands?: boolean;
        onPopup: () => void;
        onClose: () => void;
        onSelectionChangedObservable?: BABYLON.Observable<any>;
    }
    export class HeaderComponent extends React.Component<IHeaderComponentProps, {
        isBackVisible: boolean;
    }> {
        private _backStack;
        private _onSelectionChangeObserver;
        constructor(props: IHeaderComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        goBack(): void;
        renderLogo(): JSX.Element | null;
        render(): JSX.Element;
    }


    export interface IPopupComponentProps {
        id: string;
        title: string;
        size: {
            width: number;
            height: number;
        };
        onOpen?: (window: Window) => void;
        onClose: (window: Window) => void;
        onResize?: (window: Window) => void;
        onKeyUp?: (evt: KeyboardEvent) => void;
        onKeyDown?: (evt: KeyboardEvent) => void;
    }
    export class PopupComponent extends React.Component<IPopupComponentProps, {
        isComponentMounted: boolean;
        blockedByBrowser: boolean;
    }> {
        private _container;
        private _window;
        private _host;
        constructor(props: IPopupComponentProps);
        componentDidMount(): void;
        onBeforeUnloadListener: () => void;
        openPopup(): void;
        componentWillUnmount(): void;
        getWindow(): Window | null;
        render(): React.ReactPortal | null;
    }


    export class PropertyChangedEvent {
        object: any;
        property: string;
        value: any;
        initialValue: any;
        allowNullValue?: boolean;
    }


    export class ReplayRecorder {
        private _sceneRecorder;
        private _isRecording;
        get isRecording(): boolean;
        cancel(): void;
        trackScene(scene: BABYLON.Scene): void;
        applyDelta(json: any, scene: BABYLON.Scene): void;
        export(): void;
    }


    interface IAnimationGroupItemComponentProps {
        animationGroup: BABYLON.AnimationGroup;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class AnimationGroupItemComponent extends React.Component<IAnimationGroupItemComponentProps> {
        constructor(props: IAnimationGroupItemComponentProps);
        render(): JSX.Element;
    }


    interface IBoneTreeItemComponentProps {
        bone: BABYLON.Bone;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class BoneTreeItemComponent extends React.Component<IBoneTreeItemComponentProps> {
        constructor(props: IBoneTreeItemComponentProps);
        render(): JSX.Element;
    }


    interface ICameraTreeItemComponentProps {
        camera: BABYLON.Camera;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
        globalState: GlobalState;
    }
    export class CameraTreeItemComponent extends React.Component<ICameraTreeItemComponentProps, {
        isActive: boolean;
        isGizmoEnabled: boolean;
    }> {
        private _onBeforeRenderObserver;
        constructor(props: ICameraTreeItemComponentProps);
        setActive(): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        toggleGizmo(): void;
        render(): JSX.Element;
    }


    interface IEffectLayerItemComponenttProps {
        layer: BABYLON.EffectLayer;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class EffectLayerItemComponent extends React.Component<IEffectLayerItemComponenttProps> {
        constructor(props: IEffectLayerItemComponenttProps);
        render(): JSX.Element;
    }


    interface IAdvancedDynamicTextureTreeItemComponentProps {
        texture: BABYLON.GUI.AdvancedDynamicTexture;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        onClick: () => void;
    }
    export class AdvancedDynamicTextureTreeItemComponent extends React.Component<IAdvancedDynamicTextureTreeItemComponentProps, {
        isInPickingMode: boolean;
    }> {
        private _onControlPickedObserver;
        constructor(props: IAdvancedDynamicTextureTreeItemComponentProps);
        componentWillUnmount(): void;
        onPickingMode(): void;
        render(): JSX.Element;
    }


    interface IControlTreeItemComponentProps {
        control: BABYLON.GUI.Control;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class ControlTreeItemComponent extends React.Component<IControlTreeItemComponentProps, {
        isActive: boolean;
        isVisible: boolean;
    }> {
        constructor(props: IControlTreeItemComponentProps);
        highlight(): void;
        switchVisibility(): void;
        render(): JSX.Element;
    }


    /**
     * Used to pass in the gui-editor package.
     * @param guiEditorPackage
     */
    export function InjectGUIEditor(guiEditorPackage: any): void;
    /**
     * Change the URL that the GUI editor loads from
     * @param guiEditorURL
     */
    export function SetGUIEditorURL(guiEditorURL: string): void;
    /**
     * Opens an ADT in the GUI editor
     * if you are in an ES6 environment, you must first call InjectGUIEditor to provide the gui-editor package
     * If you are in a UMD environment, it will load the package from a URL
     * @param adt
     */
    export function EditAdvancedDynamicTexture(adt: BABYLON.GUI.AdvancedDynamicTexture): Promise<void>;


    interface ILightTreeItemComponentProps {
        light: BABYLON.Light;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
        globalState: GlobalState;
    }
    export class LightTreeItemComponent extends React.Component<ILightTreeItemComponentProps, {
        isEnabled: boolean;
        isGizmoEnabled: boolean;
    }> {
        constructor(props: ILightTreeItemComponentProps);
        switchIsEnabled(): void;
        toggleGizmo(): void;
        render(): JSX.Element;
    }


    interface IMaterialTreeItemComponentProps {
        material: BABYLON.Material | BABYLON.NodeMaterial;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class MaterialTreeItemComponent extends React.Component<IMaterialTreeItemComponentProps> {
        constructor(props: IMaterialTreeItemComponentProps);
        render(): JSX.Element;
    }


    interface IMeshTreeItemComponentProps {
        mesh: BABYLON.AbstractMesh;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
        globalState: GlobalState;
    }
    export class MeshTreeItemComponent extends React.Component<IMeshTreeItemComponentProps, {
        isBoundingBoxEnabled: boolean;
        isVisible: boolean;
    }> {
        constructor(props: IMeshTreeItemComponentProps);
        showBoundingBox(): void;
        switchVisibility(): void;
        render(): JSX.Element;
    }


    interface IParticleSystemTreeItemComponentProps {
        system: BABYLON.IParticleSystem;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class ParticleSystemTreeItemComponent extends React.Component<IParticleSystemTreeItemComponentProps> {
        constructor(props: IParticleSystemTreeItemComponentProps);
        render(): JSX.Element;
    }


    interface IPostProcessItemComponentProps {
        postProcess: BABYLON.PostProcess;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class PostProcessItemComponent extends React.Component<IPostProcessItemComponentProps> {
        constructor(props: IPostProcessItemComponentProps);
        render(): JSX.Element;
    }


    interface IRenderPipelineItemComponenttProps {
        renderPipeline: BABYLON.PostProcessRenderPipeline;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class RenderingPipelineItemComponent extends React.Component<IRenderPipelineItemComponenttProps> {
        constructor(props: IRenderPipelineItemComponenttProps);
        render(): JSX.Element;
    }


    interface ISceneTreeItemComponentProps {
        scene: BABYLON.Scene;
        onRefresh: () => void;
        selectedEntity?: any;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onSelectionChangedObservable?: BABYLON.Observable<any>;
        globalState: GlobalState;
    }
    export class SceneTreeItemComponent extends React.Component<ISceneTreeItemComponentProps, {
        isSelected: boolean;
        isInPickingMode: boolean;
        gizmoMode: number;
    }> {
        private _gizmoLayerOnPointerObserver;
        private _onPointerObserver;
        private _onSelectionChangeObserver;
        private _selectedEntity;
        private _posDragEnd;
        private _scaleDragEnd;
        private _rotateDragEnd;
        constructor(props: ISceneTreeItemComponentProps);
        shouldComponentUpdate(nextProps: ISceneTreeItemComponentProps, nextState: {
            isSelected: boolean;
            isInPickingMode: boolean;
        }): boolean;
        updateGizmoAutoPicking(isInPickingMode: boolean): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        onSelect(): void;
        onPickingMode(): void;
        setGizmoMode(mode: number): void;
        render(): JSX.Element;
    }


    interface ISkeletonTreeItemComponentProps {
        skeleton: BABYLON.Skeleton;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class SkeletonTreeItemComponent extends React.Component<ISkeletonTreeItemComponentProps> {
        constructor(props: ISkeletonTreeItemComponentProps);
        render(): JSX.Element;
    }


    interface ISoundTreeItemComponentProps {
        sound: BABYLON.Sound;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class SoundTreeItemComponent extends React.Component<ISoundTreeItemComponentProps> {
        constructor(props: ISoundTreeItemComponentProps);
        render(): JSX.Element;
    }


    interface ISpriteManagerTreeItemComponentProps {
        spriteManager: BABYLON.SpriteManager;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class SpriteManagerTreeItemComponent extends React.Component<ISpriteManagerTreeItemComponentProps> {
        constructor(props: ISpriteManagerTreeItemComponentProps);
        render(): JSX.Element;
    }


    interface ISpriteTreeItemComponentProps {
        sprite: BABYLON.Sprite;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class SpriteTreeItemComponent extends React.Component<ISpriteTreeItemComponentProps> {
        constructor(props: ISpriteTreeItemComponentProps);
        render(): JSX.Element;
    }


    interface ITargetedAnimationItemComponentProps {
        targetedAnimation: BABYLON.TargetedAnimation;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class TargetedAnimationItemComponent extends React.Component<ITargetedAnimationItemComponentProps> {
        constructor(props: ITargetedAnimationItemComponentProps);
        render(): JSX.Element;
    }


    interface ITextureTreeItemComponentProps {
        texture: BABYLON.Texture;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class TextureTreeItemComponent extends React.Component<ITextureTreeItemComponentProps> {
        constructor(props: ITextureTreeItemComponentProps);
        render(): JSX.Element;
    }


    interface ITransformNodeItemComponentProps {
        transformNode: BABYLON.TransformNode;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
    }
    export class TransformNodeItemComponent extends React.Component<ITransformNodeItemComponentProps> {
        constructor(props: ITransformNodeItemComponentProps);
        render(): JSX.Element;
    }


    interface IExtensionsComponentProps {
        target: any;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
    }
    export class ExtensionsComponent extends React.Component<IExtensionsComponentProps, {
        popupVisible: boolean;
    }> {
        private _popup;
        private _extensionRef;
        constructor(props: IExtensionsComponentProps);
        showPopup(): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        render(): JSX.Element | null;
    }


    interface ISceneExplorerFilterComponentProps {
        onFilter: (filter: string) => void;
    }
    export class SceneExplorerFilterComponent extends React.Component<ISceneExplorerFilterComponentProps> {
        constructor(props: ISceneExplorerFilterComponentProps);
        render(): JSX.Element;
    }
    interface ISceneExplorerComponentProps {
        scene: BABYLON.Scene;
        noCommands?: boolean;
        noHeader?: boolean;
        noExpand?: boolean;
        noClose?: boolean;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        globalState: GlobalState;
        popupMode?: boolean;
        onPopup?: () => void;
        onClose?: () => void;
    }
    export class SceneExplorerComponent extends React.Component<ISceneExplorerComponentProps, {
        filter: BABYLON.Nullable<string>;
        selectedEntity: any;
        scene: BABYLON.Scene;
    }> {
        private _onSelectionChangeObserver;
        private _onSelectionRenamedObserver;
        private _onNewSceneAddedObserver;
        private _onNewSceneObserver;
        private _sceneExplorerRef;
        private _mutationTimeout;
        private _once;
        private _hooked;
        private _sceneMutationFunc;
        constructor(props: ISceneExplorerComponentProps);
        processMutation(): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        filterContent(filter: string): void;
        findSiblings(parent: any, items: any[], target: any, goNext: boolean, data: {
            previousOne?: any;
            found?: boolean;
        }): boolean;
        processKeys(keyEvent: React.KeyboardEvent<HTMLDivElement>): void;
        renderContent(): JSX.Element | null;
        onClose(): void;
        onPopup(): void;
        render(): JSX.Element;
    }


    export interface ITreeItemComponentProps {
        items?: BABYLON.Nullable<any[]>;
        label: string;
        offset: number;
        filter: BABYLON.Nullable<string>;
        forceSubitems?: boolean;
        globalState: GlobalState;
        entity?: any;
        selectedEntity: any;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        contextMenuItems?: {
            label: string;
            action: () => void;
        }[];
    }
    export class TreeItemComponent extends React.Component<ITreeItemComponentProps, {
        isExpanded: boolean;
        mustExpand: boolean;
    }> {
        static _ContextMenuUniqueIdGenerator: number;
        constructor(props: ITreeItemComponentProps);
        switchExpandedState(): void;
        shouldComponentUpdate(nextProps: ITreeItemComponentProps, nextState: {
            isExpanded: boolean;
        }): boolean;
        expandAll(expand: boolean): void;
        renderContextMenu(): JSX.Element | null;
        render(): JSX.Element;
    }


    interface ITreeItemLabelComponentProps {
        label: string;
        onClick?: () => void;
        icon: any;
        color: string;
    }
    export class TreeItemLabelComponent extends React.Component<ITreeItemLabelComponentProps> {
        constructor(props: ITreeItemLabelComponentProps);
        onClick(): void;
        render(): JSX.Element;
    }


    export interface ITreeItemSelectableComponentProps {
        entity: any;
        selectedEntity?: any;
        mustExpand?: boolean;
        offset: number;
        globalState: GlobalState;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        filter: BABYLON.Nullable<string>;
    }
    export class TreeItemSelectableComponent extends React.Component<ITreeItemSelectableComponentProps, {
        isExpanded: boolean;
        isSelected: boolean;
    }> {
        private _wasSelected;
        constructor(props: ITreeItemSelectableComponentProps);
        switchExpandedState(): void;
        shouldComponentUpdate(nextProps: ITreeItemSelectableComponentProps, nextState: {
            isExpanded: boolean;
            isSelected: boolean;
        }): boolean;
        scrollIntoView(): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        onSelect(): void;
        renderChildren(): JSX.Element[] | null;
        render(): JSX.Element | null;
    }


    interface ITreeItemSpecializedComponentProps {
        label: string;
        entity?: any;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        globalState: GlobalState;
        onClick?: () => void;
    }
    export class TreeItemSpecializedComponent extends React.Component<ITreeItemSpecializedComponentProps> {
        constructor(props: ITreeItemSpecializedComponentProps);
        onClick(): void;
        render(): JSX.Element;
    }




    export interface IPersistentPopupConfiguration {
        props: IPopupComponentProps;
        children: React.ReactNode;
        closeWhenSceneExplorerCloses?: boolean;
        closeWhenActionTabsCloses?: boolean;
    }
    export class Inspector {
        private static _SceneExplorerHost;
        private static _ActionTabsHost;
        private static _EmbedHost;
        private static _NewCanvasContainer;
        private static _PersistentPopupHost;
        private static _SceneExplorerWindow;
        private static _ActionTabsWindow;
        private static _EmbedHostWindow;
        private static _Scene;
        private static _OpenedPane;
        private static _OnBeforeRenderObserver;
        private static _OnSceneExplorerClosedObserver;
        private static _OnActionTabsClosedObserver;
        static OnSelectionChangeObservable: BABYLON.Observable<any>;
        static OnPropertyChangedObservable: BABYLON.Observable<PropertyChangedEvent>;
        private static _GlobalState;
        static MarkLineContainerTitleForHighlighting(title: string): void;
        static MarkMultipleLineContainerTitlesForHighlighting(titles: string[]): void;
        private static _CopyStyles;
        private static _CreateSceneExplorer;
        private static _CreateActionTabs;
        private static _CreateEmbedHost;
        static _CreatePopup(title: string, windowVariableName: string, width?: number, height?: number, lateBinding?: boolean): HTMLDivElement | null;
        static get IsVisible(): boolean;
        static EarlyAttachToLoader(): void;
        static Show(scene: BABYLON.Scene, userOptions: Partial<BABYLON.IInspectorOptions>): void;
        static _SetNewScene(scene: BABYLON.Scene): void;
        static _CreateCanvasContainer(parentControl: HTMLElement): void;
        private static _DestroyCanvasContainer;
        private static _Cleanup;
        private static _RemoveElementFromDOM;
        static Hide(): void;
        static _CreatePersistentPopup(config: IPersistentPopupConfiguration, hostElement: HTMLElement): void;
        static _ClosePersistentPopup(): void;
    }


    /** @hidden */
    export var lodPixelShader: {
        name: string;
        shader: string;
    };


    /** @hidden */
    export var lodCubePixelShader: {
        name: string;
        shader: string;
    };


    export interface TextureChannelsToDisplay {
        R: boolean;
        G: boolean;
        B: boolean;
        A: boolean;
    }
    export class TextureHelper {
        private static _ProcessAsync;
        static GetTextureDataAsync(texture: BABYLON.BaseTexture, width: number, height: number, face: number, channels: TextureChannelsToDisplay, globalState?: GlobalState, lod?: number): Promise<Uint8Array>;
    }


    export class Tools {
        static LookForItem(item: any, selectedEntity: any): boolean;
        private static _RecursiveRemoveHiddenMeshesAndHoistChildren;
        static SortAndFilter(parent: any, items: any[]): any[];
    }



}
declare module INSPECTOR.SharedUIComponents {
        export interface IColorComponentEntryProps {
        value: number;
        label: string;
        max?: number;
        min?: number;
        onChange: (value: number) => void;
        disabled?: boolean;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    export class ColorComponentEntry extends React.Component<IColorComponentEntryProps> {
        constructor(props: IColorComponentEntryProps);
        updateValue(valueString: string): void;
        lock(): void;
        unlock(): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        /**
     * Interface used to specify creation options for color picker
     */
    export interface IColorPickerProps {
        color: BABYLON.Color3 | BABYLON.Color4;
        linearhint?: boolean;
        debugMode?: boolean;
        onColorChanged?: (color: BABYLON.Color3 | BABYLON.Color4) => void;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    /**
     * Interface used to specify creation options for color picker
     */
    export interface IColorPickerState {
        color: BABYLON.Color3;
        alpha: number;
    }
    /**
     * Class used to create a color picker
     */
    export class ColorPicker extends React.Component<IColorPickerProps, IColorPickerState> {
        private _saturationRef;
        private _hueRef;
        private _isSaturationPointerDown;
        private _isHuePointerDown;
        constructor(props: IColorPickerProps);
        shouldComponentUpdate(nextProps: IColorPickerProps, nextState: IColorPickerState): boolean;
        onSaturationPointerDown(evt: React.PointerEvent<HTMLDivElement>): void;
        onSaturationPointerUp(evt: React.PointerEvent<HTMLDivElement>): void;
        onSaturationPointerMove(evt: React.PointerEvent<HTMLDivElement>): void;
        onHuePointerDown(evt: React.PointerEvent<HTMLDivElement>): void;
        onHuePointerUp(evt: React.PointerEvent<HTMLDivElement>): void;
        onHuePointerMove(evt: React.PointerEvent<HTMLDivElement>): void;
        private _evaluateSaturation;
        private _evaluateHue;
        componentDidUpdate(): void;
        raiseOnColorChanged(): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IHexColorProps {
        value: string;
        expectedLength: number;
        onChange: (value: string) => void;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    export class HexColor extends React.Component<IHexColorProps, {
        hex: string;
    }> {
        constructor(props: IHexColorProps);
        shouldComponentUpdate(nextProps: IHexColorProps, nextState: {
            hex: string;
        }): boolean;
        lock(): void;
        unlock(): void;
        updateHexValue(valueString: string): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        /// <reference types="react" />
    export type ButtonProps = {
        disabled?: boolean;
        active?: boolean;
        onClick?: () => void;
        color: "light" | "dark";
        size: "default" | "small" | "wide";
        title?: string;
    };
    export var Button: React.FC<ButtonProps>;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export function ClassNames(names: any, styleObject: any): string;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        /// <reference types="react" />
    export type IconProps = {
        color?: "dark" | "light";
        icon: string;
    };
    export var Icon: React.FC<IconProps>;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export type LabelProps = {
        text: string;
        children?: React.ReactChild;
        color?: "dark" | "light";
    };
    export var Label: React.FC<LabelProps>;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        /// <reference types="react" />
    export type ToggleProps = {
        toggled: "on" | "mixed" | "off";
        onToggle?: () => void;
        padded?: boolean;
        color?: "dark" | "light";
    };
    export var Toggle: React.FC<ToggleProps>;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IBooleanLineComponentProps {
        label: string;
        value: boolean;
        icon?: string;
        iconLabel?: string;
    }
    export class BooleanLineComponent extends React.Component<IBooleanLineComponentProps> {
        constructor(props: IBooleanLineComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IButtonLineComponentProps {
        label: string;
        onClick: () => void;
        icon?: string;
        iconLabel?: string;
        isDisabled?: boolean;
    }
    export class ButtonLineComponent extends React.Component<IButtonLineComponentProps> {
        constructor(props: IButtonLineComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface ICheckBoxLineComponentProps {
        label?: string;
        target?: any;
        propertyName?: string;
        isSelected?: () => boolean;
        onSelect?: (value: boolean) => void;
        onValueChanged?: () => void;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        disabled?: boolean;
        icon?: string;
        iconLabel?: string;
        faIcons?: {
            enabled: any;
            disabled: any;
        };
        large?: boolean;
    }
    export class CheckBoxLineComponent extends React.Component<ICheckBoxLineComponentProps, {
        isSelected: boolean;
        isDisabled?: boolean;
        isConflict: boolean;
    }> {
        private _localChange;
        constructor(props: ICheckBoxLineComponentProps);
        shouldComponentUpdate(nextProps: ICheckBoxLineComponentProps, nextState: {
            isSelected: boolean;
            isDisabled: boolean;
            isConflict: boolean;
        }): boolean;
        onChange(): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IColor3LineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        isLinear?: boolean;
        icon?: string;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        iconLabel?: string;
        onChange?: () => void;
    }
    export class Color3LineComponent extends React.Component<IColor3LineComponentProps> {
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IColor4LineComponentProps {
        label: string;
        target?: any;
        propertyName: string;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        onChange?: () => void;
        isLinear?: boolean;
        icon?: string;
        iconLabel?: string;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    export class Color4LineComponent extends React.Component<IColor4LineComponentProps> {
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IColorLineComponentProps {
        label: string;
        target?: any;
        propertyName: string;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        onChange?: () => void;
        isLinear?: boolean;
        icon?: string;
        iconLabel?: string;
        disableAlpha?: boolean;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    interface IColorLineComponentState {
        isExpanded: boolean;
        color: BABYLON.Color4;
    }
    export class ColorLineComponent extends React.Component<IColorLineComponentProps, IColorLineComponentState> {
        constructor(props: IColorLineComponentProps);
        shouldComponentUpdate(nextProps: IColorLineComponentProps, nextState: IColorLineComponentState): boolean;
        getValue(props?: Readonly<IColorLineComponentProps> & Readonly<{
            children?: React.ReactNode;
        }>): BABYLON.Color4;
        setColorFromString(colorString: string): void;
        setColor(newColor: BABYLON.Color4): void;
        switchExpandState(): void;
        updateStateR(value: number): void;
        updateStateG(value: number): void;
        updateStateB(value: number): void;
        updateStateA(value: number): void;
        copyToClipboard(): void;
        private _convertToColor;
        private _toColor3;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IColorPickerComponentProps {
        value: BABYLON.Color4 | BABYLON.Color3;
        linearHint?: boolean;
        onColorChanged: (newOne: string) => void;
        icon?: string;
        iconLabel?: string;
        shouldPopRight?: boolean;
        lockObject?: INSPECTOR.SharedUIComponents.LockObject;
    }
    interface IColorPickerComponentState {
        pickerEnabled: boolean;
        color: BABYLON.Color3 | BABYLON.Color4;
        hex: string;
    }
    export class ColorPickerLineComponent extends React.Component<IColorPickerComponentProps, IColorPickerComponentState> {
        private _floatRef;
        private _floatHostRef;
        constructor(props: IColorPickerComponentProps);
        syncPositions(): void;
        shouldComponentUpdate(nextProps: IColorPickerComponentProps, nextState: IColorPickerComponentState): boolean;
        getHexString(props?: Readonly<IColorPickerComponentProps> & Readonly<{
            children?: React.ReactNode;
        }>): string;
        componentDidUpdate(): void;
        componentDidMount(): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IButtonLineComponentProps {
        data: string;
        tooltip: string;
    }
    export class DraggableLineComponent extends React.Component<IButtonLineComponentProps> {
        constructor(props: IButtonLineComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IFileButtonLineComponentProps {
        label: string;
        onClick: (file: File) => void;
        accept: string;
        icon?: string;
        iconLabel?: string;
    }
    export class FileButtonLineComponent extends React.Component<IFileButtonLineComponentProps> {
        private static _IDGenerator;
        private _id;
        private _uploadInputRef;
        constructor(props: IFileButtonLineComponentProps);
        onChange(evt: any): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IFileMultipleButtonLineComponentProps {
        label: string;
        onClick: (event: any) => void;
        accept: string;
        icon?: string;
        iconLabel?: string;
    }
    export class FileMultipleButtonLineComponent extends React.Component<IFileMultipleButtonLineComponentProps> {
        private static _IDGenerator;
        private _id;
        private _uploadInputRef;
        constructor(props: IFileMultipleButtonLineComponentProps);
        onChange(evt: any): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IFloatLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        lockObject?: INSPECTOR.SharedUIComponents.LockObject;
        onChange?: (newValue: number) => void;
        isInteger?: boolean;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        additionalClass?: string;
        step?: string;
        digits?: number;
        useEuler?: boolean;
        min?: number;
        max?: number;
        smallUI?: boolean;
        onEnter?: (newValue: number) => void;
        icon?: string;
        iconLabel?: string;
        defaultValue?: number;
        arrows?: boolean;
        unit?: React.ReactNode;
        onDragStart?: (newValue: number) => void;
        onDragStop?: (newValue: number) => void;
    }
    export class FloatLineComponent extends React.Component<IFloatLineComponentProps, {
        value: string;
        dragging: boolean;
    }> {
        private _localChange;
        private _store;
        constructor(props: IFloatLineComponentProps);
        componentWillUnmount(): void;
        getValueString(value: any): string;
        shouldComponentUpdate(nextProps: IFloatLineComponentProps, nextState: {
            value: string;
            dragging: boolean;
        }): boolean;
        raiseOnPropertyChanged(newValue: number, previousValue: number): void;
        updateValue(valueString: string): void;
        lock(): void;
        unlock(): void;
        incrementValue(amount: number): void;
        onKeyDown(event: React.KeyboardEvent): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IHexLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        lockObject?: INSPECTOR.SharedUIComponents.LockObject;
        onChange?: (newValue: number) => void;
        isInteger?: boolean;
        replaySourceReplacement?: string;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        additionalClass?: string;
        step?: string;
        digits?: number;
        useEuler?: boolean;
        min?: number;
        icon?: string;
        iconLabel?: string;
    }
    export class HexLineComponent extends React.Component<IHexLineComponentProps, {
        value: string;
    }> {
        private _localChange;
        private _store;
        private _propertyChange;
        constructor(props: IHexLineComponentProps);
        componentWillUnmount(): void;
        shouldComponentUpdate(nextProps: IHexLineComponentProps, nextState: {
            value: string;
        }): boolean;
        raiseOnPropertyChanged(newValue: number, previousValue: number): void;
        convertToHexString(valueString: string): string;
        updateValue(valueString: string, raisePropertyChanged: boolean): void;
        lock(): void;
        unlock(): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IIconButtonLineComponentProps {
        icon: string;
        onClick: () => void;
        tooltip: string;
        active?: boolean;
    }
    export class IconButtonLineComponent extends React.Component<IIconButtonLineComponentProps> {
        constructor(props: IIconButtonLineComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IIconComponentProps {
        icon: string;
        label?: string;
    }
    export class IconComponent extends React.Component<IIconComponentProps> {
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IIndentedTextLineComponentProps {
        value?: string;
        color?: string;
        underline?: boolean;
        onLink?: () => void;
        url?: string;
        additionalClass?: string;
    }
    export class IndentedTextLineComponent extends React.Component<IIndentedTextLineComponentProps> {
        constructor(props: IIndentedTextLineComponentProps);
        onLink(): void;
        renderContent(): JSX.Element;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IInputArrowsComponentProps {
        incrementValue: (amount: number) => void;
        setDragging: (dragging: boolean) => void;
    }
    export class InputArrowsComponent extends React.Component<IInputArrowsComponentProps> {
        private _arrowsRef;
        private _drag;
        private _releaseListener;
        private _lockChangeListener;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface ISelectedLineContainer {
        selectedLineContainerTitles: Array<string>;
        selectedLineContainerTitlesNoFocus: Array<string>;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface ILineContainerComponentProps {
        selection?: INSPECTOR.SharedUIComponents.ISelectedLineContainer;
        title: string;
        children: any[] | any;
        closed?: boolean;
    }
    export class LineContainerComponent extends React.Component<ILineContainerComponentProps, {
        isExpanded: boolean;
        isHighlighted: boolean;
    }> {
        constructor(props: ILineContainerComponentProps);
        switchExpandedState(): void;
        renderHeader(): JSX.Element;
        componentDidMount(): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface ILinkButtonComponentProps {
        label: string;
        buttonLabel: string;
        url?: string;
        onClick: () => void;
        icon?: any;
        onIconClick?: () => void;
    }
    export class LinkButtonComponent extends React.Component<ILinkButtonComponentProps> {
        constructor(props: ILinkButtonComponentProps);
        onLink(): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IMatrixLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        step?: number;
        onChange?: (newValue: BABYLON.Matrix) => void;
        onModeChange?: (mode: number) => void;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        mode?: number;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    export class MatrixLineComponent extends React.Component<IMatrixLineComponentProps, {
        value: BABYLON.Matrix;
        mode: number;
        angle: number;
    }> {
        private _localChange;
        constructor(props: IMatrixLineComponentProps);
        shouldComponentUpdate(nextProps: IMatrixLineComponentProps, nextState: {
            value: BABYLON.Matrix;
            mode: number;
            angle: number;
        }): boolean;
        raiseOnPropertyChanged(previousValue: BABYLON.Vector3): void;
        updateMatrix(): void;
        updateRow(value: BABYLON.Vector4, row: number): void;
        updateBasedOnMode(value: number): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IMessageLineComponentProps {
        text: string;
        color?: string;
        icon?: any;
    }
    export class MessageLineComponent extends React.Component<IMessageLineComponentProps> {
        constructor(props: IMessageLineComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface INumericInputComponentProps {
        label: string;
        value: number;
        step?: number;
        onChange: (value: number) => void;
        precision?: number;
        icon?: string;
        iconLabel?: string;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    export class NumericInputComponent extends React.Component<INumericInputComponentProps, {
        value: string;
    }> {
        static defaultProps: {
            step: number;
        };
        private _localChange;
        constructor(props: INumericInputComponentProps);
        componentWillUnmount(): void;
        shouldComponentUpdate(nextProps: INumericInputComponentProps, nextState: {
            value: string;
        }): boolean;
        updateValue(evt: any): void;
        onBlur(): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export var Null_Value: number;
    export interface IOptionsLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        options: BABYLON.IInspectableOptions[];
        noDirectUpdate?: boolean;
        onSelect?: (value: number | string) => void;
        extractValue?: (target: any) => number | string;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        allowNullValue?: boolean;
        icon?: string;
        iconLabel?: string;
        className?: string;
        valuesAreStrings?: boolean;
        defaultIfNull?: number;
    }
    export class OptionsLineComponent extends React.Component<IOptionsLineComponentProps, {
        value: number | string;
    }> {
        private _localChange;
        private _remapValueIn;
        private _remapValueOut;
        private _getValue;
        constructor(props: IOptionsLineComponentProps);
        shouldComponentUpdate(nextProps: IOptionsLineComponentProps, nextState: {
            value: number;
        }): boolean;
        raiseOnPropertyChanged(newValue: number, previousValue: number): void;
        setValue(value: string | number): void;
        updateValue(valueString: string): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export class Popup {
        static CreatePopup(title: string, windowVariableName: string, width?: number, height?: number): HTMLDivElement | null;
        private static _CopyStyles;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IRadioButtonLineComponentProps {
        onSelectionChangedObservable: BABYLON.Observable<RadioButtonLineComponent>;
        label: string;
        isSelected: () => boolean;
        onSelect: () => void;
        icon?: string;
        iconLabel?: string;
    }
    export class RadioButtonLineComponent extends React.Component<IRadioButtonLineComponentProps, {
        isSelected: boolean;
    }> {
        private _onSelectionChangedObserver;
        constructor(props: IRadioButtonLineComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        onChange(): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface ISliderLineComponentProps {
        label: string;
        target?: any;
        propertyName?: string;
        minimum: number;
        maximum: number;
        step: number;
        directValue?: number;
        useEuler?: boolean;
        onChange?: (value: number) => void;
        onInput?: (value: number) => void;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        decimalCount?: number;
        margin?: boolean;
        icon?: string;
        iconLabel?: string;
        lockObject?: INSPECTOR.SharedUIComponents.LockObject;
        unit?: React.ReactNode;
    }
    export class SliderLineComponent extends React.Component<ISliderLineComponentProps, {
        value: number;
    }> {
        private _localChange;
        constructor(props: ISliderLineComponentProps);
        shouldComponentUpdate(nextProps: ISliderLineComponentProps, nextState: {
            value: number;
        }): boolean;
        onChange(newValueString: any): void;
        onInput(newValueString: any): void;
        prepareDataToRead(value: number): number;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export const conflictingValuesPlaceholder = "\u2014";
    /**
     *
     * @param targets a list of selected targets
     * @param onPropertyChangedObservable
     * @param getProperty
     * @returns a proxy object that can be passed as a target into the input
     */
    export function makeTargetsProxy<Type>(targets: Type[], onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>, getProperty?: (target: Type, property: keyof Type) => any): any;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface ITextInputLineComponentProps {
        label?: string;
        lockObject?: INSPECTOR.SharedUIComponents.LockObject;
        target?: any;
        propertyName?: string;
        value?: string;
        onChange?: (value: string) => void;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        icon?: string;
        iconLabel?: string;
        noUnderline?: boolean;
        numbersOnly?: boolean;
        delayInput?: boolean;
        arrows?: boolean;
        arrowsIncrement?: (amount: number) => void;
        step?: number;
        numeric?: boolean;
        roundValues?: boolean;
        min?: number;
        max?: number;
        placeholder?: string;
        unit?: React.ReactNode;
        validator?: (value: string) => boolean;
        multilines?: boolean;
    }
    export class TextInputLineComponent extends React.Component<ITextInputLineComponentProps, {
        value: string;
        dragging: boolean;
    }> {
        private _localChange;
        constructor(props: ITextInputLineComponentProps);
        componentWillUnmount(): void;
        shouldComponentUpdate(nextProps: ITextInputLineComponentProps, nextState: {
            value: string;
            dragging: boolean;
        }): boolean;
        raiseOnPropertyChanged(newValue: string, previousValue: string): void;
        getCurrentNumericValue(value: string): number;
        updateValue(value: string, valueToValidate?: string): void;
        incrementValue(amount: number): void;
        onKeyDown(event: React.KeyboardEvent): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface ITextLineComponentProps {
        label?: string;
        value?: string;
        color?: string;
        underline?: boolean;
        onLink?: () => void;
        url?: string;
        ignoreValue?: boolean;
        additionalClass?: string;
        icon?: string;
        iconLabel?: string;
        tooltip?: string;
    }
    export class TextLineComponent extends React.Component<ITextLineComponentProps> {
        constructor(props: ITextLineComponentProps);
        onLink(): void;
        renderContent(): JSX.Element | null;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        /// <reference types="react" />
    interface IUnitButtonProps {
        unit: string;
        locked?: boolean;
        onClick?: (unit: string) => void;
    }
    export function UnitButton(props: IUnitButtonProps): JSX.Element;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IValueLineComponentProps {
        label: string;
        value: number;
        color?: string;
        fractionDigits?: number;
        units?: string;
        icon?: string;
        iconLabel?: string;
    }
    export class ValueLineComponent extends React.Component<IValueLineComponentProps> {
        constructor(props: IValueLineComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IVector2LineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        step?: number;
        onChange?: (newvalue: BABYLON.Vector2) => void;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        icon?: string;
        iconLabel?: string;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    export class Vector2LineComponent extends React.Component<IVector2LineComponentProps, {
        isExpanded: boolean;
        value: BABYLON.Vector2;
    }> {
        static defaultProps: {
            step: number;
        };
        private _localChange;
        constructor(props: IVector2LineComponentProps);
        shouldComponentUpdate(nextProps: IVector2LineComponentProps, nextState: {
            isExpanded: boolean;
            value: BABYLON.Vector2;
        }): boolean;
        switchExpandState(): void;
        raiseOnPropertyChanged(previousValue: BABYLON.Vector2): void;
        updateStateX(value: number): void;
        updateStateY(value: number): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IVector3LineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        step?: number;
        onChange?: (newvalue: BABYLON.Vector3) => void;
        useEuler?: boolean;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        noSlider?: boolean;
        icon?: string;
        iconLabel?: string;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    export class Vector3LineComponent extends React.Component<IVector3LineComponentProps, {
        isExpanded: boolean;
        value: BABYLON.Vector3;
    }> {
        static defaultProps: {
            step: number;
        };
        private _localChange;
        constructor(props: IVector3LineComponentProps);
        getCurrentValue(): any;
        shouldComponentUpdate(nextProps: IVector3LineComponentProps, nextState: {
            isExpanded: boolean;
            value: BABYLON.Vector3;
        }): boolean;
        switchExpandState(): void;
        raiseOnPropertyChanged(previousValue: BABYLON.Vector3): void;
        updateVector3(): void;
        updateStateX(value: number): void;
        updateStateY(value: number): void;
        updateStateZ(value: number): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IVector4LineComponentProps {
        label: string;
        target?: any;
        propertyName?: string;
        step?: number;
        onChange?: (newvalue: BABYLON.Vector4) => void;
        useEuler?: boolean;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
        icon?: string;
        iconLabel?: string;
        value?: BABYLON.Vector4;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
    }
    export class Vector4LineComponent extends React.Component<IVector4LineComponentProps, {
        isExpanded: boolean;
        value: BABYLON.Vector4;
    }> {
        static defaultProps: {
            step: number;
        };
        private _localChange;
        constructor(props: IVector4LineComponentProps);
        getCurrentValue(): any;
        shouldComponentUpdate(nextProps: IVector4LineComponentProps, nextState: {
            isExpanded: boolean;
            value: BABYLON.Vector4;
        }): boolean;
        switchExpandState(): void;
        raiseOnPropertyChanged(previousValue: BABYLON.Vector4): void;
        updateVector4(): void;
        updateStateX(value: number): void;
        updateStateY(value: number): void;
        updateStateZ(value: number): void;
        updateStateW(value: number): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export class DisplayLedger {
        static RegisteredControls: {
            [key: string]: any;
        };
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export class FrameNodePort extends INSPECTOR.SharedUIComponents.NodePort {
        portData: INSPECTOR.SharedUIComponents.IPortData;
        node: INSPECTOR.SharedUIComponents.GraphNode;
        private _parentFrameId;
        private _isInput;
        private _framePortPosition;
        private _framePortId;
        private _onFramePortPositionChangedObservable;
        get parentFrameId(): number;
        get onFramePortPositionChangedObservable(): BABYLON.Observable<FrameNodePort>;
        get isInput(): boolean;
        get framePortId(): number;
        get framePortPosition(): INSPECTOR.SharedUIComponents.FramePortPosition;
        set framePortPosition(position: INSPECTOR.SharedUIComponents.FramePortPosition);
        constructor(portContainer: HTMLElement, portData: INSPECTOR.SharedUIComponents.IPortData, node: INSPECTOR.SharedUIComponents.GraphNode, stateManager: INSPECTOR.SharedUIComponents.StateManager, isInput: boolean, framePortId: number, parentFrameId: number);
        static CreateFrameNodePortElement(portData: INSPECTOR.SharedUIComponents.IPortData, node: INSPECTOR.SharedUIComponents.GraphNode, root: HTMLElement, displayManager: BABYLON.Nullable<INSPECTOR.SharedUIComponents.IDisplayManager>, stateManager: INSPECTOR.SharedUIComponents.StateManager, isInput: boolean, framePortId: number, parentFrameId: number): FrameNodePort;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IGraphCanvasComponentProps {
        stateManager: INSPECTOR.SharedUIComponents.StateManager;
        onEmitNewNode: (nodeData: INSPECTOR.SharedUIComponents.INodeData) => INSPECTOR.SharedUIComponents.GraphNode;
    }
    export class GraphCanvasComponent extends React.Component<IGraphCanvasComponentProps> implements INSPECTOR.SharedUIComponents.INodeContainer {
        static readonly NodeWidth = 100;
        private readonly _minZoom;
        private readonly _maxZoom;
        private _hostCanvas;
        private _graphCanvas;
        private _selectionContainer;
        private _frameContainer;
        private _svgCanvas;
        private _rootContainer;
        private _nodes;
        private _links;
        private _mouseStartPointX;
        private _mouseStartPointY;
        private _dropPointX;
        private _dropPointY;
        private _selectionStartX;
        private _selectionStartY;
        private _candidateLinkedHasMoved;
        private _x;
        private _y;
        private _zoom;
        private _selectedNodes;
        private _selectedLink;
        private _selectedPort;
        private _candidateLink;
        private _candidatePort;
        private _gridSize;
        private _selectionBox;
        private _selectedFrames;
        private _frameCandidate;
        private _frames;
        private _nodeDataContentList;
        private _altKeyIsPressed;
        private _multiKeyIsPressed;
        private _oldY;
        _frameIsMoving: boolean;
        _isLoading: boolean;
        private _copiedNodes;
        private _copiedFrames;
        get gridSize(): number;
        set gridSize(value: number);
        get stateManager(): INSPECTOR.SharedUIComponents.StateManager;
        get nodes(): INSPECTOR.SharedUIComponents.GraphNode[];
        get links(): INSPECTOR.SharedUIComponents.NodeLink[];
        get frames(): INSPECTOR.SharedUIComponents.GraphFrame[];
        get zoom(): number;
        set zoom(value: number);
        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        get selectedNodes(): INSPECTOR.SharedUIComponents.GraphNode[];
        get selectedLink(): BABYLON.Nullable<INSPECTOR.SharedUIComponents.NodeLink>;
        get selectedFrames(): INSPECTOR.SharedUIComponents.GraphFrame[];
        get selectedPort(): BABYLON.Nullable<INSPECTOR.SharedUIComponents.NodePort>;
        get canvasContainer(): HTMLDivElement;
        get hostCanvas(): HTMLDivElement;
        get svgCanvas(): HTMLElement;
        get selectionContainer(): HTMLDivElement;
        get frameContainer(): HTMLDivElement;
        private _selectedFrameAndNodesConflict;
        constructor(props: IGraphCanvasComponentProps);
        handleKeyDown(evt: KeyboardEvent, onRemove: (nodeData: INSPECTOR.SharedUIComponents.INodeData) => void, mouseLocationX: number, mouseLocationY: number, dataGenerator: (nodeData: INSPECTOR.SharedUIComponents.INodeData) => any, rootElement: HTMLDivElement): void;
        pasteSelection(copiedNodes: INSPECTOR.SharedUIComponents.GraphNode[], currentX: number, currentY: number, dataGenerator: (nodeData: INSPECTOR.SharedUIComponents.INodeData) => any, selectNew?: boolean): INSPECTOR.SharedUIComponents.GraphNode[];
        reconnectNewNodes(nodeIndex: number, newNodes: INSPECTOR.SharedUIComponents.GraphNode[], sourceNodes: INSPECTOR.SharedUIComponents.GraphNode[], done: boolean[]): void;
        getCachedData(): any[];
        removeDataFromCache(data: any): void;
        createNodeFromObject(nodeData: INSPECTOR.SharedUIComponents.INodeData, onNodeCreated: (data: any) => void, recursion?: boolean): INSPECTOR.SharedUIComponents.GraphNode;
        getGridPosition(position: number, useCeil?: boolean): number;
        getGridPositionCeil(position: number): number;
        updateTransform(): void;
        onKeyUp(): void;
        findNodeFromData(data: any): INSPECTOR.SharedUIComponents.GraphNode;
        reset(): void;
        connectPorts(pointA: INSPECTOR.SharedUIComponents.IPortData, pointB: INSPECTOR.SharedUIComponents.IPortData): void;
        removeLink(link: INSPECTOR.SharedUIComponents.NodeLink): void;
        appendNode(nodeData: INSPECTOR.SharedUIComponents.INodeData): INSPECTOR.SharedUIComponents.GraphNode;
        distributeGraph(): void;
        componentDidMount(): void;
        onMove(evt: React.PointerEvent): void;
        onDown(evt: React.PointerEvent<HTMLElement>): void;
        onUp(evt: React.PointerEvent): void;
        onWheel(evt: React.WheelEvent): void;
        zoomToFit(): void;
        processCandidatePort(): void;
        connectNodes(nodeA: INSPECTOR.SharedUIComponents.GraphNode, pointA: INSPECTOR.SharedUIComponents.IPortData, nodeB: INSPECTOR.SharedUIComponents.GraphNode, pointB: INSPECTOR.SharedUIComponents.IPortData): void;
        drop(newNode: INSPECTOR.SharedUIComponents.GraphNode, targetX: number, targetY: number, offsetX: number, offsetY: number): void;
        processEditorData(editorData: INSPECTOR.SharedUIComponents.IEditorData): void;
        reOrganize(editorData?: BABYLON.Nullable<INSPECTOR.SharedUIComponents.IEditorData>, isImportingAFrame?: boolean): void;
        addFrame(frameData: INSPECTOR.SharedUIComponents.IFrameData): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export enum FramePortPosition {
        Top = 0,
        Middle = 1,
        Bottom = 2
    }
    export class GraphFrame {
        private readonly _collapsedWidth;
        private static _FrameCounter;
        private static _FramePortCounter;
        private _name;
        private _color;
        private _x;
        private _y;
        private _gridAlignedX;
        private _gridAlignedY;
        private _width;
        private _height;
        element: HTMLDivElement;
        private _borderElement;
        private _headerElement;
        private _headerTextElement;
        private _headerCollapseElement;
        private _headerCloseElement;
        private _commentsElement;
        private _portContainer;
        private _outputPortContainer;
        private _inputPortContainer;
        private _nodes;
        private _ownerCanvas;
        private _mouseStartPointX;
        private _mouseStartPointY;
        private _onSelectionChangedObserver;
        private _onGraphNodeRemovalObserver;
        private _onExposePortOnFrameObserver;
        private _onNodeLinkDisposedObservers;
        private _isCollapsed;
        private _frameInPorts;
        private _frameOutPorts;
        private _controlledPorts;
        private _exposedInPorts;
        private _exposedOutPorts;
        private _id;
        private _comments;
        private _frameIsResizing;
        private _resizingDirection;
        private _minFrameHeight;
        private _minFrameWidth;
        private _mouseXLimit;
        onExpandStateChanged: BABYLON.Observable<GraphFrame>;
        private readonly _closeSVG;
        private readonly _expandSVG;
        private readonly _collapseSVG;
        get id(): number;
        get isCollapsed(): boolean;
        private _createInputPort;
        private _markFramePortPositions;
        private _createFramePorts;
        private _removePortFromExposedWithNode;
        private _removePortFromExposedWithLink;
        private _createInputPorts;
        private _createOutputPorts;
        redrawFramePorts(): void;
        set isCollapsed(value: boolean);
        get nodes(): INSPECTOR.SharedUIComponents.GraphNode[];
        get ports(): INSPECTOR.SharedUIComponents.FrameNodePort[];
        get name(): string;
        set name(value: string);
        get color(): BABYLON.Color3;
        set color(value: BABYLON.Color3);
        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        get width(): number;
        set width(value: number);
        get height(): number;
        set height(value: number);
        get comments(): string;
        set comments(comments: string);
        constructor(candidate: BABYLON.Nullable<HTMLDivElement>, canvas: INSPECTOR.SharedUIComponents.GraphCanvasComponent, doNotCaptureNodes?: boolean);
        refresh(): void;
        addNode(node: INSPECTOR.SharedUIComponents.GraphNode): void;
        removeNode(node: INSPECTOR.SharedUIComponents.GraphNode): void;
        syncNode(node: INSPECTOR.SharedUIComponents.GraphNode): void;
        cleanAccumulation(): void;
        private _onDown;
        move(newX: number, newY: number, align?: boolean): void;
        private _onUp;
        _moveFrame(offsetX: number, offsetY: number): void;
        private _onMove;
        moveFramePortUp(nodePort: INSPECTOR.SharedUIComponents.FrameNodePort): void;
        private _movePortUp;
        moveFramePortDown(nodePort: INSPECTOR.SharedUIComponents.FrameNodePort): void;
        private _movePortDown;
        private _initResizing;
        private _cleanUpResizing;
        private _updateMinHeightWithComments;
        private _isResizingTop;
        private _isResizingRight;
        private _isResizingBottom;
        private _isResizingLeft;
        private _onRightHandlePointerDown;
        private _onRightHandlePointerMove;
        private _moveRightHandle;
        private _onRightHandlePointerUp;
        private _onBottomHandlePointerDown;
        private _onBottomHandlePointerMove;
        private _moveBottomHandle;
        private _onBottomHandlePointerUp;
        private _onLeftHandlePointerDown;
        private _onLeftHandlePointerMove;
        private _moveLeftHandle;
        private _onLeftHandlePointerUp;
        private _onTopHandlePointerDown;
        private _onTopHandlePointerMove;
        private _moveTopHandle;
        private _onTopHandlePointerUp;
        private _onTopRightHandlePointerDown;
        private _onTopRightHandlePointerMove;
        private _moveTopRightHandle;
        private _onTopRightHandlePointerUp;
        private _onBottomRightHandlePointerDown;
        private _onBottomRightHandlePointerMove;
        private _moveBottomRightHandle;
        private _onBottomRightHandlePointerUp;
        private _onBottomLeftHandlePointerDown;
        private _onBottomLeftHandlePointerMove;
        private _moveBottomLeftHandle;
        private _onBottomLeftHandlePointerUp;
        private _onTopLeftHandlePointerDown;
        private _onTopLeftHandlePointerMove;
        private _moveTopLeftHandle;
        private _onTopLeftHandlePointerUp;
        private _expandLeft;
        private _expandTop;
        private _expandRight;
        private _expandBottom;
        dispose(): void;
        private _serializePortData;
        serialize(saveCollapsedState: boolean): INSPECTOR.SharedUIComponents.IFrameData;
        export(): void;
        adjustPorts(): void;
        static Parse(serializationData: INSPECTOR.SharedUIComponents.IFrameData, canvas: INSPECTOR.SharedUIComponents.GraphCanvasComponent, map?: {
            [key: number]: number;
        }): GraphFrame;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        /// <reference types="react" />
    export class GraphNode {
        content: INSPECTOR.SharedUIComponents.INodeData;
        private _visual;
        private _headerContainer;
        private _warning;
        private _header;
        private _connections;
        private _inputsContainer;
        private _outputsContainer;
        private _content;
        private _comments;
        private _inputPorts;
        private _outputPorts;
        private _links;
        private _x;
        private _y;
        private _gridAlignedX;
        private _gridAlignedY;
        private _mouseStartPointX;
        private _mouseStartPointY;
        private _stateManager;
        private _onSelectionChangedObserver;
        private _onSelectionBoxMovedObserver;
        private _onFrameCreatedObserver;
        private _onUpdateRequiredObserver;
        private _ownerCanvas;
        private _isSelected;
        private _displayManager;
        private _isVisible;
        private _enclosingFrameId;
        get isVisible(): boolean;
        set isVisible(value: boolean);
        private _upateNodePortNames;
        get outputPorts(): INSPECTOR.SharedUIComponents.NodePort[];
        get inputPorts(): INSPECTOR.SharedUIComponents.NodePort[];
        get links(): INSPECTOR.SharedUIComponents.NodeLink[];
        get gridAlignedX(): number;
        get gridAlignedY(): number;
        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        get width(): number;
        get height(): number;
        get id(): number;
        get name(): string;
        get isSelected(): boolean;
        get enclosingFrameId(): number;
        set enclosingFrameId(value: number);
        set isSelected(value: boolean);
        setIsSelected(value: boolean, marqueeSelection: boolean): void;
        constructor(content: INSPECTOR.SharedUIComponents.INodeData, stateManager: INSPECTOR.SharedUIComponents.StateManager);
        isOverlappingFrame(frame: INSPECTOR.SharedUIComponents.GraphFrame): boolean;
        getPortForPortData(portData: INSPECTOR.SharedUIComponents.IPortData): INSPECTOR.SharedUIComponents.NodePort | null;
        getPortDataForPortDataContent(data: any): INSPECTOR.SharedUIComponents.IPortData | null;
        getLinksForPortDataContent(data: any): INSPECTOR.SharedUIComponents.NodeLink[];
        getLinksForPortData(portData: INSPECTOR.SharedUIComponents.IPortData): INSPECTOR.SharedUIComponents.NodeLink[];
        private _refreshFrames;
        _refreshLinks(): void;
        refresh(): void;
        private _onDown;
        cleanAccumulation(useCeil?: boolean): void;
        private _onUp;
        private _onMove;
        renderProperties(): BABYLON.Nullable<JSX.Element>;
        appendVisual(root: HTMLDivElement, owner: INSPECTOR.SharedUIComponents.GraphCanvasComponent): void;
        dispose(): void;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IDisplayManager {
        getHeaderClass(data: INSPECTOR.SharedUIComponents.INodeData): string;
        shouldDisplayPortLabels(data: INSPECTOR.SharedUIComponents.IPortData): boolean;
        updatePreviewContent(data: INSPECTOR.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
        getBackgroundColor(data: INSPECTOR.SharedUIComponents.INodeData): string;
        getHeaderText(data: INSPECTOR.SharedUIComponents.INodeData): string;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface INodeContainer {
        nodes: INSPECTOR.SharedUIComponents.GraphNode[];
        appendNode(data: INSPECTOR.SharedUIComponents.INodeData): INSPECTOR.SharedUIComponents.GraphNode;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface INodeData {
        data: any;
        name: string;
        uniqueId: number;
        isInput: boolean;
        comments: string;
        getWarningMessage: () => string;
        getClassName: () => string;
        dispose: () => void;
        getPortByName: (name: string) => BABYLON.Nullable<INSPECTOR.SharedUIComponents.IPortData>;
        inputs: INSPECTOR.SharedUIComponents.IPortData[];
        outputs: INSPECTOR.SharedUIComponents.IPortData[];
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface INodeLocationInfo {
        blockId: number;
        x: number;
        y: number;
    }
    export interface IFrameData {
        x: number;
        y: number;
        width: number;
        height: number;
        color: number[];
        name: string;
        isCollapsed: boolean;
        blocks: number[];
        comments: string;
    }
    export interface IEditorData {
        locations: INodeLocationInfo[];
        x: number;
        y: number;
        zoom: number;
        frames?: IFrameData[];
        map?: {
            [key: number]: number;
        };
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export enum PortDataDirection {
        /** Input */
        Input = 0,
        /** Output */
        Output = 1
    }
    export interface IPortData {
        data: any;
        name: string;
        internalName: string;
        isExposedOnFrame: boolean;
        exposedPortPosition: number;
        isConnected: boolean;
        direction: PortDataDirection;
        ownerData: any;
        connectedPort: BABYLON.Nullable<IPortData>;
        needDualDirectionValidation: boolean;
        hasEndpoints: boolean;
        endpoints: BABYLON.Nullable<IPortData[]>;
        updateDisplayName: (newName: string) => void;
        connectTo: (port: IPortData) => void;
        disconnectFrom: (port: IPortData) => void;
        checkCompatibilityState(port: IPortData): number;
        getCompatibilityIssueMessage(issue: number, targetNode: INSPECTOR.SharedUIComponents.GraphNode, targetPort: IPortData): string;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface IPropertyComponentProps {
        stateManager: INSPECTOR.SharedUIComponents.StateManager;
        nodeData: INSPECTOR.SharedUIComponents.INodeData;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export interface ISelectionChangedOptions {
        selection: BABYLON.Nullable<INSPECTOR.SharedUIComponents.GraphNode | INSPECTOR.SharedUIComponents.NodeLink | INSPECTOR.SharedUIComponents.GraphFrame | INSPECTOR.SharedUIComponents.NodePort | INSPECTOR.SharedUIComponents.FramePortData>;
        forceKeepSelection?: boolean;
        marqueeSelection?: boolean;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export class NodeLink {
        private _graphCanvas;
        private _portA;
        private _portB?;
        private _nodeA;
        private _nodeB?;
        private _path;
        private _selectionPath;
        private _onSelectionChangedObserver;
        private _isVisible;
        onDisposedObservable: BABYLON.Observable<NodeLink>;
        get isVisible(): boolean;
        set isVisible(value: boolean);
        get portA(): INSPECTOR.SharedUIComponents.FrameNodePort | INSPECTOR.SharedUIComponents.NodePort;
        get portB(): INSPECTOR.SharedUIComponents.FrameNodePort | INSPECTOR.SharedUIComponents.NodePort | undefined;
        get nodeA(): INSPECTOR.SharedUIComponents.GraphNode;
        get nodeB(): INSPECTOR.SharedUIComponents.GraphNode | undefined;
        update(endX?: number, endY?: number, straight?: boolean): void;
        constructor(graphCanvas: INSPECTOR.SharedUIComponents.GraphCanvasComponent, portA: INSPECTOR.SharedUIComponents.NodePort, nodeA: INSPECTOR.SharedUIComponents.GraphNode, portB?: INSPECTOR.SharedUIComponents.NodePort, nodeB?: INSPECTOR.SharedUIComponents.GraphNode);
        onClick(evt: MouseEvent): void;
        dispose(notify?: boolean): void;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export class NodePort {
        portData: INSPECTOR.SharedUIComponents.IPortData;
        node: INSPECTOR.SharedUIComponents.GraphNode;
        protected _element: HTMLDivElement;
        protected _img: HTMLImageElement;
        protected _stateManager: INSPECTOR.SharedUIComponents.StateManager;
        protected _portLabelElement: Element;
        protected _onCandidateLinkMovedObserver: BABYLON.Nullable<BABYLON.Observer<BABYLON.Nullable<BABYLON.Vector2>>>;
        protected _onSelectionChangedObserver: BABYLON.Nullable<BABYLON.Observer<BABYLON.Nullable<INSPECTOR.SharedUIComponents.ISelectionChangedOptions>>>;
        protected _exposedOnFrame: boolean;
        delegatedPort: BABYLON.Nullable<INSPECTOR.SharedUIComponents.FrameNodePort>;
        get element(): HTMLDivElement;
        get portName(): string;
        set portName(newName: string);
        get disabled(): boolean;
        hasLabel(): boolean;
        get exposedOnFrame(): boolean;
        set exposedOnFrame(value: boolean);
        get exposedPortPosition(): number;
        set exposedPortPosition(value: number);
        private _isConnectedToNodeOutsideOfFrame;
        refresh(): void;
        constructor(portContainer: HTMLElement, portData: INSPECTOR.SharedUIComponents.IPortData, node: INSPECTOR.SharedUIComponents.GraphNode, stateManager: INSPECTOR.SharedUIComponents.StateManager);
        dispose(): void;
        static CreatePortElement(portData: INSPECTOR.SharedUIComponents.IPortData, node: INSPECTOR.SharedUIComponents.GraphNode, root: HTMLElement, displayManager: BABYLON.Nullable<INSPECTOR.SharedUIComponents.IDisplayManager>, stateManager: INSPECTOR.SharedUIComponents.StateManager): NodePort;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export class PropertyLedger {
        static DefaultControl: React.ComponentClass<INSPECTOR.SharedUIComponents.IPropertyComponentProps>;
        static RegisteredControls: {
            [key: string]: React.ComponentClass<INSPECTOR.SharedUIComponents.IPropertyComponentProps>;
        };
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export class StateManager {
        data: any;
        hostDocument: Document;
        lockObject: any;
        onSelectionChangedObservable: BABYLON.Observable<BABYLON.Nullable<INSPECTOR.SharedUIComponents.ISelectionChangedOptions>>;
        onFrameCreatedObservable: BABYLON.Observable<INSPECTOR.SharedUIComponents.GraphFrame>;
        onUpdateRequiredObservable: BABYLON.Observable<any>;
        onGraphNodeRemovalObservable: BABYLON.Observable<INSPECTOR.SharedUIComponents.GraphNode>;
        onSelectionBoxMoved: BABYLON.Observable<ClientRect | DOMRect>;
        onCandidateLinkMoved: BABYLON.Observable<BABYLON.Nullable<BABYLON.Vector2>>;
        onCandidatePortSelectedObservable: BABYLON.Observable<BABYLON.Nullable<INSPECTOR.SharedUIComponents.FrameNodePort | INSPECTOR.SharedUIComponents.NodePort>>;
        onNewNodeCreatedObservable: BABYLON.Observable<INSPECTOR.SharedUIComponents.GraphNode>;
        onRebuildRequiredObservable: BABYLON.Observable<boolean>;
        onErrorMessageDialogRequiredObservable: BABYLON.Observable<string>;
        onExposePortOnFrameObservable: BABYLON.Observable<INSPECTOR.SharedUIComponents.GraphNode>;
        onGridSizeChanged: BABYLON.Observable<void>;
        onNewBlockRequiredObservable: BABYLON.Observable<{
            type: string;
            targetX: number;
            targetY: number;
            needRepositioning?: boolean | undefined;
        }>;
        exportData: (data: any) => string;
        isElbowConnectionAllowed: (nodeA: INSPECTOR.SharedUIComponents.FrameNodePort | INSPECTOR.SharedUIComponents.NodePort, nodeB: INSPECTOR.SharedUIComponents.FrameNodePort | INSPECTOR.SharedUIComponents.NodePort) => boolean;
        applyNodePortDesign: (data: INSPECTOR.SharedUIComponents.IPortData, element: HTMLElement, img: HTMLImageElement) => void;
        storeEditorData: (serializationObject: any, frame?: BABYLON.Nullable<INSPECTOR.SharedUIComponents.GraphFrame>) => void;
        getEditorDataMap: () => {
            [key: number]: number;
        };
        createDefaultInputData: (rootData: any, portData: INSPECTOR.SharedUIComponents.IPortData, nodeContainer: INSPECTOR.SharedUIComponents.INodeContainer) => {
            data: INSPECTOR.SharedUIComponents.INodeData;
            name: string;
        };
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export const IsFramePortData: (variableToCheck: any) => variableToCheck is INSPECTOR.SharedUIComponents.FramePortData;
    export const RefreshNode: (node: INSPECTOR.SharedUIComponents.GraphNode, visitedNodes?: Set<INSPECTOR.SharedUIComponents.GraphNode> | undefined, visitedLinks?: Set<INSPECTOR.SharedUIComponents.NodeLink> | undefined) => void;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export class TypeLedger {
        static PortDataBuilder: (port: INSPECTOR.SharedUIComponents.NodePort, nodeContainer: INSPECTOR.SharedUIComponents.INodeContainer) => INSPECTOR.SharedUIComponents.IPortData;
        static NodeDataBuilder: (data: any, nodeContainer: INSPECTOR.SharedUIComponents.INodeContainer) => INSPECTOR.SharedUIComponents.INodeData;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export type FramePortData = {
        frame: INSPECTOR.SharedUIComponents.GraphFrame;
        port: FrameNodePort;
    };



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export class PropertyChangedEvent {
        object: any;
        property: string;
        value: any;
        initialValue: any;
        allowNullValue?: boolean;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        /// <reference types="react" />
    var _default: {
        title: string;
        component: import("react").FC<INSPECTOR.SharedUIComponents.ButtonProps>;
    };
    export var Default: any;
    export var Wide: any;
    export var Small: any;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        /// <reference types="react" />
    var _default: {
        title: string;
        component: import("react").FC<INSPECTOR.SharedUIComponents.IconProps>;
    };
    export var Light: any;
    export var Dark: any;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        /// <reference types="react" />
    var _default: {
        title: string;
        component: import("react").FC<INSPECTOR.SharedUIComponents.LabelProps>;
    };
    export var Default: any;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        /// <reference types="react" />
    var _default: {
        title: string;
        component: import("react").FC<INSPECTOR.SharedUIComponents.ToggleProps>;
    };
    export var Default: any;
    export var Padded: any;



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        export class StringTools {
        private static _SaveAs;
        private static _Click;
        /**
         * Download a string into a file that will be saved locally by the browser
         * @param document
         * @param content defines the string to download locally as a file
         * @param filename
         */
        static DownloadAsFile(document: HTMLDocument, content: string, filename: string): void;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface ICheckboxPropertyGridComponentProps {
        checkbox: BABYLON.GUI.Checkbox;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class CheckboxPropertyGridComponent extends React.Component<ICheckboxPropertyGridComponentProps> {
        constructor(props: ICheckboxPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IColorPickerPropertyGridComponentProps {
        colorPicker: BABYLON.GUI.ColorPicker;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class ColorPickerPropertyGridComponent extends React.Component<IColorPickerPropertyGridComponentProps> {
        constructor(props: IColorPickerPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface ICommonControlPropertyGridComponentProps {
        controls?: BABYLON.GUI.Control[];
        control?: BABYLON.GUI.Control;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class CommonControlPropertyGridComponent extends React.Component<ICommonControlPropertyGridComponentProps> {
        constructor(props: ICommonControlPropertyGridComponentProps);
        renderGridInformation(control: BABYLON.GUI.Control): JSX.Element | null;
        render(): JSX.Element | undefined;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IControlPropertyGridComponentProps {
        control: BABYLON.GUI.Control;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class ControlPropertyGridComponent extends React.Component<IControlPropertyGridComponentProps> {
        constructor(props: IControlPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IEllipsePropertyGridComponentProps {
        ellipse: BABYLON.GUI.Ellipse;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class EllipsePropertyGridComponent extends React.Component<IEllipsePropertyGridComponentProps> {
        constructor(props: IEllipsePropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IGridPropertyGridComponentProps {
        grid: BABYLON.GUI.Grid;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class GridPropertyGridComponent extends React.Component<IGridPropertyGridComponentProps> {
        constructor(props: IGridPropertyGridComponentProps);
        renderRows(): JSX.Element[];
        renderColumns(): JSX.Element[];
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IImageBasedSliderPropertyGridComponentProps {
        imageBasedSlider: BABYLON.GUI.ImageBasedSlider;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class ImageBasedSliderPropertyGridComponent extends React.Component<IImageBasedSliderPropertyGridComponentProps> {
        constructor(props: IImageBasedSliderPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IImagePropertyGridComponentProps {
        image: BABYLON.GUI.Image;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class ImagePropertyGridComponent extends React.Component<IImagePropertyGridComponentProps> {
        constructor(props: IImagePropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IInputTextPropertyGridComponentProps {
        inputText: BABYLON.GUI.InputText;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class InputTextPropertyGridComponent extends React.Component<IInputTextPropertyGridComponentProps> {
        constructor(props: IInputTextPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface ILinePropertyGridComponentProps {
        line: BABYLON.GUI.Line;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class LinePropertyGridComponent extends React.Component<ILinePropertyGridComponentProps> {
        constructor(props: ILinePropertyGridComponentProps);
        onDashChange(value: string): void;
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IRadioButtonPropertyGridComponentProps {
        radioButtons: BABYLON.GUI.RadioButton[];
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class RadioButtonPropertyGridComponent extends React.Component<IRadioButtonPropertyGridComponentProps> {
        constructor(props: IRadioButtonPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IRectanglePropertyGridComponentProps {
        rectangle: BABYLON.GUI.Rectangle;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class RectanglePropertyGridComponent extends React.Component<IRectanglePropertyGridComponentProps> {
        constructor(props: IRectanglePropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IScrollViewerPropertyGridComponentProps {
        scrollViewer: BABYLON.GUI.ScrollViewer;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class ScrollViewerPropertyGridComponent extends React.Component<IScrollViewerPropertyGridComponentProps> {
        constructor(props: IScrollViewerPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface ISliderPropertyGridComponentProps {
        slider: BABYLON.GUI.Slider;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class SliderPropertyGridComponent extends React.Component<ISliderPropertyGridComponentProps> {
        constructor(props: ISliderPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface IStackPanelPropertyGridComponentProps {
        stackPanel: BABYLON.GUI.StackPanel;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class StackPanelPropertyGridComponent extends React.Component<IStackPanelPropertyGridComponentProps> {
        constructor(props: IStackPanelPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        interface ITextBlockPropertyGridComponentProps {
        textBlock: BABYLON.GUI.TextBlock;
        lockObject: INSPECTOR.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<INSPECTOR.SharedUIComponents.PropertyChangedEvent>;
    }
    export class TextBlockPropertyGridComponent extends React.Component<ITextBlockPropertyGridComponentProps> {
        constructor(props: ITextBlockPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module INSPECTOR {

}
declare module INSPECTOR.SharedUIComponents {
        /**
     * Class used to provide lock mechanism
     */
    export class LockObject {
        /**
         * Gets or set if the lock is engaged
         */
        lock: boolean;
    }



}
declare module INSPECTOR {

}


