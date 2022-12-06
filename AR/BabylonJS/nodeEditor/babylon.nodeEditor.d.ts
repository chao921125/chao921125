
declare module BABYLON.NodeEditor {
    export class BlockTools {
        static GetBlockFromString(data: string, scene: BABYLON.Scene, nodeMaterial: BABYLON.NodeMaterial): BABYLON.HeightToNormalBlock | BABYLON.ElbowBlock | BABYLON.TwirlBlock | BABYLON.VoronoiNoiseBlock | BABYLON.ScreenSpaceBlock | BABYLON.CloudBlock | BABYLON.MatrixBuilderBlock | BABYLON.DesaturateBlock | BABYLON.RefractBlock | BABYLON.ReflectBlock | BABYLON.DerivativeBlock | BABYLON.Rotate2dBlock | BABYLON.NormalBlendBlock | BABYLON.WorleyNoise3DBlock | BABYLON.SimplexPerlin3DBlock | BABYLON.BonesBlock | BABYLON.InstancesBlock | BABYLON.MorphTargetsBlock | BABYLON.DiscardBlock | BABYLON.ImageProcessingBlock | BABYLON.ColorMergerBlock | BABYLON.VectorMergerBlock | BABYLON.ColorSplitterBlock | BABYLON.VectorSplitterBlock | BABYLON.TextureBlock | BABYLON.ReflectionTextureBlock | BABYLON.LightBlock | BABYLON.FogBlock | BABYLON.VertexOutputBlock | BABYLON.FragmentOutputBlock | BABYLON.AddBlock | BABYLON.ClampBlock | BABYLON.ScaleBlock | BABYLON.CrossBlock | BABYLON.DotBlock | BABYLON.PowBlock | BABYLON.MultiplyBlock | BABYLON.TransformBlock | BABYLON.TrigonometryBlock | BABYLON.RemapBlock | BABYLON.NormalizeBlock | BABYLON.FresnelBlock | BABYLON.LerpBlock | BABYLON.NLerpBlock | BABYLON.DivideBlock | BABYLON.SubtractBlock | BABYLON.ModBlock | BABYLON.StepBlock | BABYLON.SmoothStepBlock | BABYLON.OneMinusBlock | BABYLON.ReciprocalBlock | BABYLON.ViewDirectionBlock | BABYLON.LightInformationBlock | BABYLON.MaxBlock | BABYLON.MinBlock | BABYLON.LengthBlock | BABYLON.DistanceBlock | BABYLON.NegateBlock | BABYLON.PerturbNormalBlock | BABYLON.TBNBlock | BABYLON.RandomNumberBlock | BABYLON.ReplaceColorBlock | BABYLON.PosterizeBlock | BABYLON.ArcTan2Block | BABYLON.GradientBlock | BABYLON.FrontFacingBlock | BABYLON.WaveBlock | BABYLON.InputBlock | BABYLON.PBRMetallicRoughnessBlock | BABYLON.SheenBlock | BABYLON.AnisotropyBlock | BABYLON.ReflectionBlock | BABYLON.ClearCoatBlock | BABYLON.RefractionBlock | BABYLON.SubSurfaceBlock | BABYLON.CurrentScreenBlock | BABYLON.ParticleTextureBlock | BABYLON.ParticleRampGradientBlock | BABYLON.ParticleBlendMultiplyBlock | BABYLON.FragCoordBlock | BABYLON.ScreenSizeBlock | BABYLON.SceneDepthBlock | BABYLON.ConditionalBlock | BABYLON.ImageSourceBlock | BABYLON.ClipPlanesBlock | BABYLON.FragDepthBlock | BABYLON.ShadowMapBlock | BABYLON.TriPlanarBlock | null;
        static GetColorFromConnectionNodeType(type: BABYLON.NodeMaterialBlockConnectionPointTypes): string;
        static GetConnectionNodeTypeFromString(type: string): BABYLON.NodeMaterialBlockConnectionPointTypes.Float | BABYLON.NodeMaterialBlockConnectionPointTypes.Vector2 | BABYLON.NodeMaterialBlockConnectionPointTypes.Vector3 | BABYLON.NodeMaterialBlockConnectionPointTypes.Vector4 | BABYLON.NodeMaterialBlockConnectionPointTypes.Color3 | BABYLON.NodeMaterialBlockConnectionPointTypes.Color4 | BABYLON.NodeMaterialBlockConnectionPointTypes.Matrix | BABYLON.NodeMaterialBlockConnectionPointTypes.AutoDetect;
        static GetStringFromConnectionNodeType(type: BABYLON.NodeMaterialBlockConnectionPointTypes): "" | "Float" | "Vector2" | "Vector3" | "Vector4" | "Matrix" | "Color3" | "Color4";
    }


    interface ILogComponentProps {
        globalState: GlobalState;
    }
    export class LogEntry {
        message: string;
        isError: boolean;
        time: Date;
        constructor(message: string, isError: boolean);
    }
    export class LogComponent extends React.Component<ILogComponentProps, {
        logs: LogEntry[];
    }> {
        constructor(props: ILogComponentProps);
        componentDidMount(): void;
        componentDidUpdate(): void;
        render(): JSX.Element;
    }


    interface INodeListComponentProps {
        globalState: GlobalState;
    }
    export class NodeListComponent extends React.Component<INodeListComponentProps, {
        filter: string;
    }> {
        private _onResetRequiredObserver;
        private static _Tooltips;
        private _customFrameList;
        private _customBlockList;
        constructor(props: INodeListComponentProps);
        componentWillUnmount(): void;
        filterContent(filter: string): void;
        loadCustomFrame(file: File): void;
        removeItem(value: string): void;
        loadCustomBlock(file: File): void;
        removeCustomBlock(value: string): void;
        render(): JSX.Element;
    }


    interface IPreviewAreaComponentProps {
        globalState: GlobalState;
        width: number;
    }
    export class PreviewAreaComponent extends React.Component<IPreviewAreaComponentProps, {
        isLoading: boolean;
    }> {
        private _onIsLoadingChangedObserver;
        private _onResetRequiredObserver;
        constructor(props: IPreviewAreaComponentProps);
        componentWillUnmount(): void;
        changeBackFaceCulling(value: boolean): void;
        changeDepthPrePass(value: boolean): void;
        _onPointerOverCanvas: () => void;
        _onPointerOutCanvas: () => void;
        changeParticleSystemBlendMode(newOne: number): void;
        render(): JSX.Element;
    }


    export class PreviewManager {
        private _nodeMaterial;
        private _onBuildObserver;
        private _onPreviewCommandActivatedObserver;
        private _onAnimationCommandActivatedObserver;
        private _onUpdateRequiredObserver;
        private _onPreviewBackgroundChangedObserver;
        private _onBackFaceCullingChangedObserver;
        private _onDepthPrePassChangedObserver;
        private _onLightUpdatedObserver;
        private _engine;
        private _scene;
        private _meshes;
        private _camera;
        private _material;
        private _globalState;
        private _currentType;
        private _lightParent;
        private _postprocess;
        private _proceduralTexture;
        private _particleSystem;
        private _layer;
        constructor(targetCanvas: HTMLCanvasElement, globalState: GlobalState);
        private _handleAnimations;
        private _prepareLights;
        private _prepareScene;
        private _refreshPreviewMesh;
        private _loadParticleSystem;
        private _forceCompilationAsync;
        private _updatePreview;
        dispose(): void;
    }


    interface IPreviewMeshControlComponent {
        globalState: GlobalState;
        togglePreviewAreaComponent: () => void;
    }
    export class PreviewMeshControlComponent extends React.Component<IPreviewMeshControlComponent> {
        private _colorInputRef;
        private _filePickerRef;
        private _onResetRequiredObserver;
        constructor(props: IPreviewMeshControlComponent);
        componentWillUnmount(): void;
        changeMeshType(newOne: PreviewType): void;
        useCustomMesh(evt: any): void;
        onPopUp(): void;
        changeAnimation(): void;
        changeBackground(value: string): void;
        changeBackgroundClick(): void;
        render(): JSX.Element;
    }


    export enum PreviewType {
        Sphere = 0,
        Box = 1,
        Torus = 2,
        Cylinder = 3,
        Plane = 4,
        ShaderBall = 5,
        DefaultParticleSystem = 6,
        Bubbles = 7,
        Smoke = 8,
        Rain = 9,
        Explosion = 10,
        Fire = 11,
        Custom = 12
    }


    interface IInputsPropertyTabComponentProps {
        globalState: GlobalState;
        inputs: BABYLON.InputBlock[];
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
    }
    export class InputsPropertyTabComponent extends React.Component<IInputsPropertyTabComponentProps> {
        constructor(props: IInputsPropertyTabComponentProps);
        processInputBlockUpdate(ib: BABYLON.InputBlock): void;
        renderInputBlock(block: BABYLON.InputBlock): JSX.Element | null;
        render(): JSX.Element;
    }


    interface IColor3PropertyTabComponentProps {
        globalState: GlobalState;
        inputBlock: BABYLON.InputBlock;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
    }
    export class Color3PropertyTabComponent extends React.Component<IColor3PropertyTabComponentProps> {
        render(): JSX.Element;
    }


    interface IColor4PropertyTabComponentProps {
        globalState: GlobalState;
        inputBlock: BABYLON.InputBlock;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
    }
    export class Color4PropertyTabComponent extends React.Component<IColor4PropertyTabComponentProps> {
        render(): JSX.Element;
    }


    interface IFloatPropertyTabComponentProps {
        globalState: GlobalState;
        inputBlock: BABYLON.InputBlock;
    }
    export class FloatPropertyTabComponent extends React.Component<IFloatPropertyTabComponentProps> {
        render(): JSX.Element;
    }


    interface IMatrixPropertyTabComponentProps {
        globalState: GlobalState;
        inputBlock: BABYLON.InputBlock;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
    }
    export class MatrixPropertyTabComponent extends React.Component<IMatrixPropertyTabComponentProps> {
        render(): JSX.Element;
    }


    interface IVector2PropertyTabComponentProps {
        globalState: GlobalState;
        inputBlock: BABYLON.InputBlock;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
    }
    export class Vector2PropertyTabComponent extends React.Component<IVector2PropertyTabComponentProps> {
        render(): JSX.Element;
    }


    interface IVector3PropertyTabComponentProps {
        globalState: GlobalState;
        inputBlock: BABYLON.InputBlock;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
    }
    export class Vector3PropertyTabComponent extends React.Component<IVector3PropertyTabComponentProps> {
        render(): JSX.Element;
    }


    interface IVector4PropertyTabComponentProps {
        globalState: GlobalState;
        inputBlock: BABYLON.InputBlock;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
    }
    export class Vector4PropertyTabComponent extends React.Component<IVector4PropertyTabComponentProps> {
        render(): JSX.Element;
    }


    interface IPropertyTabComponentProps {
        globalState: GlobalState;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
    }
    interface IPropertyTabComponentState {
        currentNode: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.GraphNode>;
        currentFrame: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.GraphFrame>;
        currentFrameNodePort: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.FrameNodePort>;
        currentNodePort: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.NodePort>;
        uploadInProgress: boolean;
    }
    export class PropertyTabComponent extends React.Component<IPropertyTabComponentProps, IPropertyTabComponentState> {
        private _onBuiltObserver;
        private _modeSelect;
        constructor(props: IPropertyTabComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        processInputBlockUpdate(ib: BABYLON.InputBlock): void;
        renderInputBlock(block: BABYLON.InputBlock): JSX.Element | null;
        load(file: File): void;
        loadFrame(file: File): void;
        save(): void;
        customSave(): void;
        saveToSnippetServer(): void;
        loadFromSnippet(): void;
        changeMode(value: any, force?: boolean, loadDefault?: boolean): boolean;
        render(): JSX.Element;
    }


    export class GlobalState {
        nodeMaterial: BABYLON.NodeMaterial;
        hostElement: HTMLElement;
        hostDocument: Document;
        hostWindow: Window;
        stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager;
        onBuiltObservable: BABYLON.Observable<void>;
        onResetRequiredObservable: BABYLON.Observable<boolean>;
        onZoomToFitRequiredObservable: BABYLON.Observable<void>;
        onReOrganizedRequiredObservable: BABYLON.Observable<void>;
        onLogRequiredObservable: BABYLON.Observable<LogEntry>;
        onIsLoadingChanged: BABYLON.Observable<boolean>;
        onPreviewCommandActivated: BABYLON.Observable<boolean>;
        onLightUpdated: BABYLON.Observable<void>;
        onPreviewBackgroundChanged: BABYLON.Observable<void>;
        onBackFaceCullingChanged: BABYLON.Observable<void>;
        onDepthPrePassChanged: BABYLON.Observable<void>;
        onAnimationCommandActivated: BABYLON.Observable<void>;
        onImportFrameObservable: BABYLON.Observable<any>;
        onPopupClosedObservable: BABYLON.Observable<void>;
        onGetNodeFromBlock: (block: BABYLON.NodeMaterialBlock) => BABYLON.NodeEditor.SharedUIComponents.GraphNode;
        previewType: PreviewType;
        previewFile: File;
        particleSystemBlendMode: number;
        listOfCustomPreviewFiles: File[];
        rotatePreview: boolean;
        backgroundColor: BABYLON.Color4;
        backFaceCulling: boolean;
        depthPrePass: boolean;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        hemisphericLight: boolean;
        directionalLight0: boolean;
        directionalLight1: boolean;
        controlCamera: boolean;
        _mode: BABYLON.NodeMaterialModes;
        pointerOverCanvas: boolean;
        /** Gets the mode */
        get mode(): BABYLON.NodeMaterialModes;
        /** Sets the mode */
        set mode(m: BABYLON.NodeMaterialModes);
        customSave?: {
            label: string;
            action: (data: string) => Promise<void>;
        };
        constructor();
        storeEditorData(serializationObject: any, frame?: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.GraphFrame>): void;
    }


    interface IGraphEditorProps {
        globalState: GlobalState;
    }
    interface IGraphEditorState {
        showPreviewPopUp: boolean;
        message: string;
        isError: boolean;
    }
    interface IInternalPreviewAreaOptions extends BABYLON.IInspectorOptions {
        popup: boolean;
        original: boolean;
        explorerWidth?: string;
        inspectorWidth?: string;
        embedHostWidth?: string;
    }
    export class GraphEditor extends React.Component<IGraphEditorProps, IGraphEditorState> {
        private _graphCanvasRef;
        private _diagramContainerRef;
        private _graphCanvas;
        private _diagramContainer;
        private _startX;
        private _moveInProgress;
        private _leftWidth;
        private _rightWidth;
        private _previewManager;
        private _mouseLocationX;
        private _mouseLocationY;
        private _onWidgetKeyUpPointer;
        private _previewHost;
        private _popUpWindow;
        appendBlock(dataToAppend: BABYLON.NodeMaterialBlock | BABYLON.NodeEditor.SharedUIComponents.INodeData, recursion?: boolean): BABYLON.NodeEditor.SharedUIComponents.GraphNode;
        addValueNode(type: string): BABYLON.NodeEditor.SharedUIComponents.GraphNode;
        componentDidMount(): void;
        componentWillUnmount(): void;
        constructor(props: IGraphEditorProps);
        zoomToFit(): void;
        buildMaterial(autoConfigure?: boolean): void;
        build(ignoreEditorData?: boolean): void;
        loadGraph(): void;
        showWaitScreen(): void;
        hideWaitScreen(): void;
        reOrganize(editorData?: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.IEditorData>, isImportingAFrame?: boolean): void;
        onPointerDown(evt: React.PointerEvent<HTMLDivElement>): void;
        onPointerUp(evt: React.PointerEvent<HTMLDivElement>): void;
        onWheel: (evt: WheelEvent) => void;
        resizeColumns(evt: React.PointerEvent<HTMLDivElement>, forLeft?: boolean): void;
        buildColumnLayout(): string;
        emitNewBlock(blockType: string, targetX: number, targetY: number): void;
        dropNewBlock(event: React.DragEvent<HTMLDivElement>): void;
        handlePopUp: () => void;
        handleClosingPopUp: () => void;
        initiatePreviewArea: (canvas?: HTMLCanvasElement) => void;
        createPopUp: () => void;
        createPopupWindow: (title: string, windowVariableName: string, width?: number, height?: number) => Window | null;
        createPreviewMeshControlHost: (options: IInternalPreviewAreaOptions, parentControl: BABYLON.Nullable<HTMLElement>) => void;
        createPreviewHost: (options: IInternalPreviewAreaOptions, parentControl: BABYLON.Nullable<HTMLElement>) => void;
        fixPopUpStyles: (document: Document) => void;
        render(): JSX.Element;
    }


    export class BlockNodeData implements BABYLON.NodeEditor.SharedUIComponents.INodeData {
        data: BABYLON.NodeMaterialBlock;
        private _inputs;
        private _outputs;
        get uniqueId(): number;
        get name(): string;
        getClassName(): string;
        get isInput(): boolean;
        get inputs(): BABYLON.NodeEditor.SharedUIComponents.IPortData[];
        get outputs(): BABYLON.NodeEditor.SharedUIComponents.IPortData[];
        get comments(): string;
        set comments(value: string);
        getPortByName(name: string): BABYLON.NodeEditor.SharedUIComponents.IPortData | null;
        dispose(): void;
        prepareHeaderIcon(iconDiv: HTMLDivElement, img: HTMLImageElement): void;
        constructor(data: BABYLON.NodeMaterialBlock, nodeContainer: BABYLON.NodeEditor.SharedUIComponents.INodeContainer);
    }


    export class ConnectionPointPortData implements BABYLON.NodeEditor.SharedUIComponents.IPortData {
        private _connectedPort;
        private _nodeContainer;
        data: BABYLON.NodeMaterialConnectionPoint;
        get name(): string;
        get internalName(): string;
        get isExposedOnFrame(): boolean;
        set isExposedOnFrame(value: boolean);
        get exposedPortPosition(): number;
        set exposedPortPosition(value: number);
        get isConnected(): boolean;
        get connectedPort(): BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.IPortData>;
        set connectedPort(value: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.IPortData>);
        get direction(): BABYLON.NodeEditor.SharedUIComponents.PortDataDirection;
        get ownerData(): BABYLON.NodeMaterialBlock;
        get needDualDirectionValidation(): boolean;
        get hasEndpoints(): boolean;
        get endpoints(): BABYLON.NodeEditor.SharedUIComponents.IPortData[];
        constructor(connectionPoint: BABYLON.NodeMaterialConnectionPoint, nodeContainer: BABYLON.NodeEditor.SharedUIComponents.INodeContainer);
        updateDisplayName(newName: string): void;
        connectTo(port: BABYLON.NodeEditor.SharedUIComponents.IPortData): void;
        canConnectTo(port: BABYLON.NodeEditor.SharedUIComponents.IPortData): boolean;
        disconnectFrom(port: BABYLON.NodeEditor.SharedUIComponents.IPortData): void;
        checkCompatibilityState(port: BABYLON.NodeEditor.SharedUIComponents.IPortData): 0 | BABYLON.NodeMaterialConnectionPointCompatibilityStates.TypeIncompatible | BABYLON.NodeMaterialConnectionPointCompatibilityStates.TargetIncompatible | BABYLON.NodeMaterialConnectionPointCompatibilityStates.HierarchyIssue;
        getCompatibilityIssueMessage(issue: number, targetNode: BABYLON.NodeEditor.SharedUIComponents.GraphNode, targetPort: BABYLON.NodeEditor.SharedUIComponents.IPortData): "" | "Cannot connect two different connection types" | "Source block can only work in fragment shader whereas destination block is currently aimed for the vertex shader" | "Source block cannot be connected with one of its ancestors";
    }


    export class ClampDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        getHeaderClass(): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getBackgroundColor(): string;
        updatePreviewContent(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
    }


    export class ConditionalDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        getHeaderClass(): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getBackgroundColor(): string;
        updatePreviewContent(): void;
    }


    export class DiscardDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        getHeaderClass(): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getBackgroundColor(): string;
        updatePreviewContent(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
    }


    export class ElbowDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        getHeaderClass(): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getBackgroundColor(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        updatePreviewContent(_nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, _contentArea: HTMLDivElement): void;
        updateFullVisualContent(data: BABYLON.NodeEditor.SharedUIComponents.INodeData, visualContent: BABYLON.NodeEditor.SharedUIComponents.VisualContentDescription): void;
    }


    export class GradientDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        getHeaderClass(): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getBackgroundColor(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        updatePreviewContent(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
    }


    export class ImageSourceDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        private _previewCanvas;
        private _previewImage;
        getHeaderClass(): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getBackgroundColor(): string;
        updatePreviewContent(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
    }


    export class InputDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        getHeaderClass(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        static GetBaseType(type: BABYLON.NodeMaterialBlockConnectionPointTypes): string;
        getBackgroundColor(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        updatePreviewContent(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
    }


    export class OutputDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        getHeaderClass(): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getBackgroundColor(): string;
        updatePreviewContent(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
    }


    export class PBRDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        getHeaderClass(): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getBackgroundColor(): string;
        updatePreviewContent(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
    }


    export class RemapDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        getHeaderClass(): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getBackgroundColor(): string;
        private _extractInputValue;
        updatePreviewContent(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
    }


    export class TextureDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        private _previewCanvas;
        private _previewImage;
        getHeaderClass(): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getBackgroundColor(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        updatePreviewContent(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
    }


    export class TrigonometryDisplayManager implements BABYLON.NodeEditor.SharedUIComponents.IDisplayManager {
        getHeaderClass(): string;
        shouldDisplayPortLabels(): boolean;
        getHeaderText(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getBackgroundColor(): string;
        updatePreviewContent(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
    }


    export class ColorMergerPropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        render(): JSX.Element;
    }


    export class ConditionalPropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        render(): JSX.Element;
    }


    export interface IFrameNodePortPropertyTabComponentProps {
        stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager;
        globalState: GlobalState;
        frameNodePort: BABYLON.NodeEditor.SharedUIComponents.FrameNodePort;
        frame: BABYLON.NodeEditor.SharedUIComponents.GraphFrame;
    }
    export class FrameNodePortPropertyTabComponent extends React.Component<IFrameNodePortPropertyTabComponentProps, {
        port: BABYLON.NodeEditor.SharedUIComponents.FrameNodePort;
    }> {
        private _onFramePortPositionChangedObserver;
        private _onSelectionChangedObserver;
        constructor(props: IFrameNodePortPropertyTabComponentProps);
        componentWillUnmount(): void;
        render(): JSX.Element;
    }


    export interface IFramePropertyTabComponentProps {
        globalState: GlobalState;
        frame: BABYLON.NodeEditor.SharedUIComponents.GraphFrame;
    }
    export class FramePropertyTabComponent extends React.Component<IFramePropertyTabComponentProps> {
        private _onFrameExpandStateChangedObserver;
        constructor(props: IFramePropertyTabComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
    }


    export class GenericPropertyComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        render(): JSX.Element;
    }
    export class GeneralPropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        render(): JSX.Element;
    }
    export class GenericPropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        forceRebuild(propertyName: string, notifiers?: BABYLON.IEditablePropertyOption["notifiers"]): void;
        render(): JSX.Element;
    }


    export class GradientPropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        private _onValueChangedObserver;
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        forceRebuild(): void;
        deleteStep(step: BABYLON.GradientBlockColorStep): void;
        copyStep(step: BABYLON.GradientBlockColorStep): void;
        addNewStep(): void;
        checkForReOrder(): void;
        render(): JSX.Element;
    }


    interface IGradientStepComponentProps {
        stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager;
        step: BABYLON.GradientBlockColorStep;
        lineIndex: number;
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


    export class ImageSourcePropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps, {
        isEmbedded: boolean;
    }> {
        get imageSourceBlock(): BABYLON.ImageSourceBlock;
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        UNSAFE_componentWillUpdate(nextProps: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps, nextState: {
            isEmbedded: boolean;
            loadAsCubeTexture: boolean;
        }): void;
        private _generateRandomForCache;
        updateAfterTextureLoad(): void;
        removeTexture(): void;
        _prepareTexture(): void;
        /**
         * Replaces the texture of the node
         * @param file the file of the texture to use
         */
        replaceTexture(file: File): void;
        replaceTextureWithUrl(url: string): void;
        render(): JSX.Element;
    }


    export class InputPropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        private _onValueChangedObserver;
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        renderValue(globalState: GlobalState): JSX.Element | null;
        setDefaultValue(): void;
        render(): JSX.Element;
    }


    export class LightInformationPropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        render(): JSX.Element;
    }


    export class LightPropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        render(): JSX.Element;
    }


    export interface IFrameNodePortPropertyTabComponentProps {
        stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager;
        nodePort: BABYLON.NodeEditor.SharedUIComponents.NodePort;
    }
    export class NodePortPropertyTabComponent extends React.Component<IFrameNodePortPropertyTabComponentProps> {
        private _onSelectionChangedObserver;
        constructor(props: IFrameNodePortPropertyTabComponentProps);
        componentWillUnmount(): void;
        toggleExposeOnFrame(value: boolean): void;
        render(): JSX.Element;
    }


    type ReflectionTexture = BABYLON.ReflectionTextureBlock | BABYLON.ReflectionBlock | BABYLON.RefractionBlock;
    type AnyTexture = BABYLON.TextureBlock | ReflectionTexture | BABYLON.CurrentScreenBlock | BABYLON.ParticleTextureBlock | BABYLON.TriPlanarBlock;
    export class TexturePropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps, {
        isEmbedded: boolean;
        loadAsCubeTexture: boolean;
        textureIsPrefiltered: boolean;
    }> {
        get textureBlock(): AnyTexture;
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        UNSAFE_componentWillUpdate(nextProps: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps, nextState: {
            isEmbedded: boolean;
            loadAsCubeTexture: boolean;
        }): void;
        private _generateRandomForCache;
        updateAfterTextureLoad(): void;
        removeTexture(): void;
        _prepareTexture(): void;
        /**
         * Replaces the texture of the node
         * @param file the file of the texture to use
         */
        replaceTexture(file: File): void;
        replaceTextureWithUrl(url: string): void;
        render(): JSX.Element;
    }


    export class TransformPropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        render(): JSX.Element;
    }


    export class TrigonometryPropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        render(): JSX.Element;
    }


    export class VectorMergerPropertyTabComponent extends React.Component<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps> {
        constructor(props: BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps);
        render(): JSX.Element;
    }


    export const RegisterDefaultInput: (stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager) => void;


    export const RegisterElbowSupport: (stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager) => void;


    export const RegisterExportData: (stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager) => void;


    export const RegisterNodePortDesign: (stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager) => void;


    export const RegisterToDisplayManagers: () => void;


    export const RegisterToPropertyTabManagers: () => void;


    export const RegisterTypeLedger: () => void;




    /**
     * Interface used to specify creation options for the node editor
     */
    export interface INodeEditorOptions {
        nodeMaterial: BABYLON.NodeMaterial;
        hostElement?: HTMLElement;
        customSave?: {
            label: string;
            action: (data: string) => Promise<void>;
        };
        customLoadObservable?: BABYLON.Observable<any>;
    }
    /**
     * Class used to create a node editor
     */
    export class NodeEditor {
        private static _CurrentState;
        /**
         * Show the node editor
         * @param options defines the options to use to configure the node editor
         */
        static Show(options: INodeEditorOptions): void;
    }


    interface IPortalProps {
        globalState: GlobalState;
    }
    export class Portal extends React.Component<IPortalProps> {
        render(): React.ReactPortal;
    }


    export class SerializationTools {
        static UpdateLocations(material: BABYLON.NodeMaterial, globalState: GlobalState, frame?: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.GraphFrame>): void;
        static Serialize(material: BABYLON.NodeMaterial, globalState: GlobalState, frame?: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.GraphFrame>): string;
        static Deserialize(serializationObject: any, globalState: GlobalState): void;
        static AddFrameToMaterial(serializationObject: any, globalState: GlobalState, currentMaterial: BABYLON.NodeMaterial): void;
    }


    export interface ICheckBoxLineComponentProps {
        label: string;
        target?: any;
        propertyName?: string;
        isSelected?: () => boolean;
        onSelect?: (value: boolean) => void;
        onValueChanged?: () => void;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
        disabled?: boolean;
    }
    export class CheckBoxLineComponent extends React.Component<ICheckBoxLineComponentProps, {
        isSelected: boolean;
        isDisabled?: boolean;
    }> {
        private static _UniqueIdSeed;
        private _uniqueId;
        private _localChange;
        constructor(props: ICheckBoxLineComponentProps);
        shouldComponentUpdate(nextProps: ICheckBoxLineComponentProps, nextState: {
            isSelected: boolean;
            isDisabled: boolean;
        }): boolean;
        onChange(): void;
        render(): JSX.Element;
    }


    export interface IButtonLineComponentProps {
        data: string;
        tooltip: string;
    }
    export class DraggableLineComponent extends React.Component<IButtonLineComponentProps> {
        constructor(props: IButtonLineComponentProps);
        render(): JSX.Element;
    }


    export interface IDraggableLineWithButtonComponent {
        data: string;
        tooltip: string;
        iconImage: any;
        onIconClick: (value: string) => void;
        iconTitle: string;
        lenSuffixToRemove?: number;
    }
    export class DraggableLineWithButtonComponent extends React.Component<IDraggableLineWithButtonComponent> {
        constructor(props: IDraggableLineWithButtonComponent);
        render(): JSX.Element;
    }


    interface IFileButtonLineComponentProps {
        label: string;
        onClick: (file: File) => void;
        accept: string;
        uploadName?: string;
    }
    export class FileButtonLineComponent extends React.Component<IFileButtonLineComponentProps> {
        private _uploadRef;
        constructor(props: IFileButtonLineComponentProps);
        onChange(evt: any): void;
        render(): JSX.Element;
    }


    interface ILineContainerComponentProps {
        title: string;
        children: any[] | any;
        closed?: boolean;
    }
    export class LineContainerComponent extends React.Component<ILineContainerComponentProps, {
        isExpanded: boolean;
    }> {
        constructor(props: ILineContainerComponentProps);
        switchExpandedState(): void;
        renderHeader(): JSX.Element;
        render(): JSX.Element;
    }


    interface ILineWithFileButtonComponentProps {
        title: string;
        closed?: boolean;
        label: string;
        iconImage: any;
        onIconClick: (file: File) => void;
        accept: string;
        uploadName?: string;
    }
    export class LineWithFileButtonComponent extends React.Component<ILineWithFileButtonComponentProps, {
        isExpanded: boolean;
    }> {
        private _uploadRef;
        constructor(props: ILineWithFileButtonComponentProps);
        onChange(evt: any): void;
        switchExpandedState(): void;
        render(): JSX.Element;
    }


    export class Popup {
        static CreatePopup(title: string, windowVariableName: string, width?: number, height?: number): HTMLDivElement | null;
        static _CopyStyles(sourceDoc: HTMLDocument, targetDoc: HTMLDocument): void;
    }


    interface ITextureLineComponentProps {
        texture: BABYLON.BaseTexture;
        width: number;
        height: number;
        globalState?: any;
        hideChannelSelect?: boolean;
    }
    export interface ITextureLineComponentState {
        displayRed: boolean;
        displayGreen: boolean;
        displayBlue: boolean;
        displayAlpha: boolean;
        face: number;
    }
    export class TextureLineComponent extends React.Component<ITextureLineComponentProps, ITextureLineComponentState> {
        private _canvasRef;
        constructor(props: ITextureLineComponentProps);
        shouldComponentUpdate(): boolean;
        componentDidMount(): void;
        componentDidUpdate(): void;
        updatePreview(): void;
        static UpdatePreview(previewCanvas: HTMLCanvasElement, texture: BABYLON.BaseTexture, width: number, options: ITextureLineComponentState, onReady?: () => void, globalState?: any): Promise<void>;
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IColorComponentEntryProps {
        value: number;
        label: string;
        max?: number;
        min?: number;
        onChange: (value: number) => void;
        disabled?: boolean;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
    }
    export class ColorComponentEntry extends React.Component<IColorComponentEntryProps> {
        constructor(props: IColorComponentEntryProps);
        updateValue(valueString: string): void;
        lock(): void;
        unlock(): void;
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Interface used to specify creation options for color picker
     */
    export interface IColorPickerProps {
        color: BABYLON.Color3 | BABYLON.Color4;
        linearhint?: boolean;
        debugMode?: boolean;
        onColorChanged?: (color: BABYLON.Color3 | BABYLON.Color4) => void;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IHexColorProps {
        value: string;
        expectedLength: number;
        onChange: (value: string) => void;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface ICommandBarComponentProps {
        onSaveButtonClicked?: () => void;
        onSaveToSnippetButtonClicked?: () => void;
        onLoadFromSnippetButtonClicked?: () => void;
        onHelpButtonClicked?: () => void;
        onGiveFeedbackButtonClicked?: () => void;
        onSelectButtonClicked?: () => void;
        onPanButtonClicked?: () => void;
        onZoomButtonClicked?: () => void;
        onFitButtonClicked?: () => void;
        onArtboardColorChanged?: (newColor: string) => void;
        artboardColor?: string;
        artboardColorPickerColor?: string;
    }
    export var CommandBarComponent: React.FC<ICommandBarComponentProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface ICommandButtonComponentProps {
        tooltip: string;
        shortcut?: string;
        icon: string;
        iconLabel?: string;
        isActive: boolean;
        onClick: () => void;
        disabled?: boolean;
    }
    export var CommandButtonComponent: React.FC<ICommandButtonComponentProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface ICommandDropdownComponentProps {
        icon?: string;
        tooltip: string;
        defaultValue?: string;
        items: {
            label: string;
            icon?: string;
            fileButton?: boolean;
            onClick?: () => void;
            onCheck?: (value: boolean) => void;
            storeKey?: string;
            isActive?: boolean;
            defaultValue?: boolean | string;
            subItems?: string[];
        }[];
        toRight?: boolean;
    }
    export class CommandDropdownComponent extends React.Component<ICommandDropdownComponentProps, {
        isExpanded: boolean;
        activeState: string;
    }> {
        constructor(props: ICommandDropdownComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /// <reference types="react" />
    export type ButtonProps = {
        disabled?: boolean;
        active?: boolean;
        onClick?: () => void;
        color: "light" | "dark";
        size: "default" | "small" | "wide" | "smaller";
        title?: string;
        backgroundColor?: string;
    };
    export var Button: React.FC<ButtonProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export function ClassNames(names: any, styleObject: any): string;
    export function JoinClassNames(styleObject: any, ...names: string[]): string;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IColorComponentEntryProps {
        value: number;
        label: string;
        max?: number;
        min?: number;
        onChange: (value: number) => void;
        disabled?: boolean;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
    }
    export class ColorComponentEntry extends React.Component<IColorComponentEntryProps> {
        constructor(props: IColorComponentEntryProps);
        updateValue(valueString: string): void;
        lock(): void;
        unlock(): void;
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Interface used to specify creation options for color picker
     */
    export interface IColorPickerProps {
        color: BABYLON.Color3 | BABYLON.Color4;
        linearhint?: boolean;
        debugMode?: boolean;
        onColorChanged?: (color: BABYLON.Color3 | BABYLON.Color4) => void;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        backgroundColor?: string;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IHexColorProps {
        value: string;
        expectedLength: number;
        onChange: (value: string) => void;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /// <reference types="react" />
    export type IconProps = {
        color?: "dark" | "light";
        icon: string;
    };
    export var Icon: React.FC<IconProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export type LabelProps = {
        text: string;
        children?: React.ReactChild;
        color?: "dark" | "light";
    };
    export var Label: React.FC<LabelProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Arguments for the DraggableIcon component.
     */
    export interface IDraggableIconProps {
        /**
         * Icon source
         */
        src: string;
        /**
         * Object that will be passed to the drag event
         */
        item: BABYLON.NodeEditor.SharedUIComponents.TabDrag;
        /**
         * Type of drag event
         */
        type: BABYLON.NodeEditor.SharedUIComponents.ElementTypes;
    }
    /**
     * An icon that can be dragged by the user
     */
    export var DraggableIcon: React.FC<IDraggableIconProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Arguments for the Column component.
     */
    export interface IFlexibleColumnProps {
        /**
         * Width of column
         */
        width: string;
    }
    /**
     * This component represents a single column in the layout. It receives a width
     * that it occupies and the content to display
     * @param props
     * @returns
     */
    export var FlexibleColumn: React.FC<IFlexibleColumnProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Arguments for the DragHandler component.
     */
    export interface IFlexibleDragHandlerProps {
        /**
         * The size of the containing element. Used to calculate the percentage of
         * space occupied by the component
         */
        containerSize: {
            width: number;
            height: number;
        };
    }
    /**
     * This component receives the drop events and updates the layout accordingly
     */
    export var FlexibleDragHandler: React.FC<IFlexibleDragHandlerProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Arguments for the FlexibleDropZone component.
     */
    export interface IFlexibleDropZoneProps {
        /**
         * The row number of the component in the layout
         */
        rowNumber: number;
        /**
         * The column number of the component in the layout
         */
        columnNumber: number;
    }
    /**
     * This component contains the drag and drop zone for the resize bars that
     * allow redefining width and height of layout elements
     */
    export var FlexibleDropZone: React.FC<IFlexibleDropZoneProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Arguments for the GridContainer component.
     */
    export interface IFlexibleGridContainerProps {
    }
    /**
     * Component responsible for mapping the layout to the actual components
     */
    export var FlexibleGridContainer: React.FC<IFlexibleGridContainerProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Arguments for the BABYLON.NodeEditor.SharedUIComponents.Layout component.
     */
    export interface IFlexibleGridLayoutProps {
        /**
         * A definition of the layout which can be changed by the user
         */
        layoutDefinition: BABYLON.NodeEditor.SharedUIComponents.Layout;
    }
    /**
     * This component represents a grid layout that can be resized and rearranged
     * by the user.
     */
    export var FlexibleGridLayout: React.FC<IFlexibleGridLayoutProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Arguments for the ResizeBar component.
     */
    export interface IFlexibleRowResizerProps {
        /**
         * Row number of the component that is being resized
         */
        rowNumber: number;
        /**
         * Column number of the component being resized
         */
        columnNumber: number;
        /**
         * If the resizing happens in row or column direction
         */
        direction: BABYLON.NodeEditor.SharedUIComponents.ResizeDirections;
    }
    /**
     * The item that will be sent to the drag event
     */
    export type ResizeItem = {
        /**
         * If the resizing happens in row or column direction
         */
        direction: BABYLON.NodeEditor.SharedUIComponents.ResizeDirections;
        /**
         * The row number of the component that is being resized
         */
        rowNumber: number;
        /**
         * the column number of the component being resized
         */
        columnNumber: number;
    };
    /**
     * A component that renders a bar that the user can drag to resize.
     */
    export var FlexibleResizeBar: React.FC<IFlexibleRowResizerProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Arguments for the FlexibleTab component.
     */
    export interface IFlexibleTabProps {
        /**
         * The tab's title.
         */
        title: string;
        /**
         * If the tab is currently selected or not
         */
        selected: boolean;
        /**
         * What happens when the user clicks on the tab
         */
        onClick: () => void;
        /**
         * The object that will be sent to the drag event
         */
        item: BABYLON.NodeEditor.SharedUIComponents.TabDrag;
        /**
         * What happens when the user drops another tab after this one
         */
        onTabDroppedAction: (item: BABYLON.NodeEditor.SharedUIComponents.TabDrag) => void;
    }
    /**
     * A component that renders a tab that the user can click
     * to activate or drag to reorder. It also listens for
     * drop events if the user wants to drop another tab
     * after it.
     */
    export var FlexibleTab: React.FC<IFlexibleTabProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Arguments for the TabsContainer component.
     */
    export interface IFlexibleTabsContainerProps {
        /**
         * The tabs to display
         */
        tabs: BABYLON.NodeEditor.SharedUIComponents.LayoutTab[];
        /**
         * Row index of component in layout
         */
        rowIndex: number;
        /**
         * Column index of component in layout
         */
        columnIndex: number;
        /**
         * Which tab is selected in the layout
         */
        selectedTab?: string;
    }
    /**
     * This component contains a set of tabs of which only one is visible at a time.
     * The tabs can also be dragged from and to different containers.
     */
    export var FlexibleTabsContainer: React.FC<IFlexibleTabsContainerProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /// <reference types="react" />
    export var LayoutContext: import("react").Context<{
        /**
         * The layout object
         */
        layout: BABYLON.NodeEditor.SharedUIComponents.Layout;
        /**
         * Function to set the layout object in the context
         */
        setLayout: (layout: BABYLON.NodeEditor.SharedUIComponents.Layout) => void;
    }>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export type LayoutTab = {
        /**
         * Tab id
         */
        id: string;
        /**
         * React component rendered by tab
         */
        component: React.ReactElement;
        /**
         * Tab title
         */
        title: string;
    };
    export type LayoutTabsRow = {
        /**
         * row id
         */
        id: string;
        /**
         * row height in its containing column
         */
        height: string;
        /**
         * selected tab in row
         */
        selectedTab: string;
        /**
         * list of tabs contained in row
         */
        tabs: LayoutTab[];
    };
    export type LayoutColumn = {
        /**
         * column id
         */
        id: string;
        /**
         * column width in the grid
         */
        width: string;
        /**
         * column rows
         */
        rows: LayoutTabsRow[];
    };
    export type Layout = {
        /**
         * layout columns
         */
        columns?: LayoutColumn[];
    };
    export type TabDrag = {
        /**
         * row number of the tab being dragged
         */
        rowNumber: number;
        /**
         * column number of the tab being dragged
         */
        columnNumber: number;
        /**
         * the tabs being dragged
         */
        tabs: {
            /**
             * id of tab being dragged
             */
            id: string;
        }[];
    };
    export enum ElementTypes {
        RESIZE_BAR = "0",
        TAB = "1",
        TAB_GROUP = "2",
        NONE = "2"
    }
    export enum ResizeDirections {
        ROW = "row",
        COLUMN = "column"
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Given a column and row number in the layout, return the corresponding column/row
     * @param layout
     * @param column
     * @param row
     * @returns
     */
    export const getPosInLayout: (layout: BABYLON.NodeEditor.SharedUIComponents.Layout, column: number, row?: number | undefined) => BABYLON.NodeEditor.SharedUIComponents.LayoutColumn | BABYLON.NodeEditor.SharedUIComponents.LayoutTabsRow;
    /**
     * Remove a row in position row, column from the layout, and redistribute heights of remaining rows
     * @param layout
     * @param column
     * @param row
     */
    export const removeLayoutRowAndRedistributePercentages: (layout: BABYLON.NodeEditor.SharedUIComponents.Layout, column: number, row: number) => void;
    /**
     * Add a percentage string to a number
     */
    export const addPercentageStringToNumber: (p1: string, p2: number) => number;
    /**
     * Parses a percentage string into a number
     * @param p the percentage string
     */
    export const parsePercentage: (p: string) => number;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IColorLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        onPropertyChangedObservable: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
        onChange?: () => void;
        isLinear?: boolean;
        icon?: string;
        iconLabel?: string;
        disableAlpha?: boolean;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IColorPickerComponentProps {
        value: BABYLON.Color4 | BABYLON.Color3;
        linearHint?: boolean;
        onColorChanged: (newOne: string) => void;
        icon?: string;
        iconLabel?: string;
        shouldPopRight?: boolean;
        lockObject?: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        backgroundColor?: string;
    }
    interface IColorPickerComponentState {
        pickerEnabled: boolean;
        color: BABYLON.Color3 | BABYLON.Color4;
        hex: string;
    }
    export class ColorPickerLineComponent extends React.Component<IColorPickerComponentProps, IColorPickerComponentState> {
        private _floatRef;
        private _floatHostRef;
        private _coverRef;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IFileButtonLineComponentProps {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface INumericInputComponentProps {
        label: string;
        value: number;
        step?: number;
        onChange: (value: number) => void;
        precision?: number;
        icon?: string;
        iconLabel?: string;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
        updateValue(valueString: string): void;
        onBlur(): void;
        incrementValue(amount: number): void;
        onKeyDown(evt: React.KeyboardEvent<HTMLInputElement>): void;
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /// <reference types="react" />
    /**
     * This components represents an options menu with optional
     * customizable properties. Option IDs should be unique.
     */
    export interface IOption {
        label: string;
        value: string;
        id: string;
    }
    export interface IOptionsLineComponentProps {
        options: IOption[];
        addOptionPlaceholder?: string;
        onOptionAdded?: (newOption: IOption) => void;
        onOptionSelected: (selectedOptionValue: string) => void;
        selectedOptionValue: string;
        validateNewOptionValue?: (newOptionValue: string) => boolean;
        addOptionText?: string;
    }
    export const OptionsLineComponent: (props: IOptionsLineComponentProps) => JSX.Element;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface MessageDialogProps {
        message: string;
        isError: boolean;
        onClose?: () => void;
    }
    export var MessageDialog: React.FC<MessageDialogProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * Props for the connector
     */
    export interface IGraphConnectorHandlerProps {
        /**
         * id of the parent node
         */
        parentId: string;
        /**
         * x position of the parent node
         */
        parentX: number;
        /**
         * y position of the parent node
         */
        parentY: number;
        /**
         * x position of the connector relative to the parent node
         */
        offsetX?: number;
        /**
         * y position of the connector relative to the parent node
         */
        offsetY?: number;
        /**
         * width of the parent node
         */
        parentWidth: number;
        /**
         * height of the parent node
         */
        parentHeight: number;
        /**
         * id of the container where its parent node is
         */
        parentContainerId: string;
    }
    /**
     * This component is used to initiate a connection between two nodes. Simply
     * drag the handle in a node and drop it in another node to create a connection.
     */
    export var GraphConnectorHandler: React.FC<IGraphConnectorHandlerProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IGraphContainerProps {
    }
    /**
     * This component is just a simple container to keep the nodes and lines containers
     * together
     * @param props
     * @returns
     */
    export var GraphContainer: React.FC<IGraphContainerProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /// <reference types="react" />
    /**
     * this context is used to pass callbacks to the graph nodes and connections
     */
    export interface IGraphContext {
        onNodesConnected?: (sourceId: string, targetId: string) => void;
        onLineSelected?: (lineId: string) => void;
        onNodeSelected?: (nodeId: string) => void;
    }
    export var GraphContextManager: import("react").Context<IGraphContext>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * props for the GraphLine component
     */
    export interface IGraphLineProps {
        /**
         * id of the line. temporary lines can have no id
         */
        id?: string;
        /**
         * starting x pos of the line
         */
        x1: number;
        /**
         * ending x pos of the line
         */
        x2: number;
        /**
         * starting y pos of the line
         */
        y1: number;
        /**
         * ending y pos of the line
         */
        y2: number;
        /**
         * is the line selected
         */
        selected?: boolean;
        /**
         * does the line have a direction
         */
        directional?: boolean;
    }
    export const MarkerArrowId = "arrow";
    /**
     * This component draws a SVG line between two points, with an optional marker
     * indicating direction
     */
    export var GraphLine: React.FC<IGraphLineProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * props for the GraphLineContainer
     */
    export interface IGraphLinesContainerProps {
        /**
         * id of the container
         */
        id: string;
    }
    /**
     * this component handles the dragging of new connections
     * @param props
     * @returns
     */
    export var GraphLinesContainer: React.FC<IGraphLinesContainerProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IGraphNodeProps {
        id: string;
        name: string;
        x: number;
        y: number;
        selected?: boolean;
        width?: number;
        height?: number;
        highlighted?: boolean;
        parentContainerId: string;
    }
    export var GraphNode: React.FC<IGraphNodeProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IGraphContainerProps {
        onNodeMoved: (id: string, x: number, y: number) => void;
        id: string;
    }
    /**
     * This component contains all the nodes and handles their dragging
     */
    export var GraphNodesContainer: React.FC<IGraphContainerProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export type IVisualRecordsType = Record<string, {
        x: number;
        y: number;
    }>;
    export type IConnectionType = {
        id: string;
        sourceId: string;
        targetId: string;
    };
    export type ICustomDataType = {
        type: string;
        value: any;
    };
    export type INodeType = {
        id: string;
        label: string;
        customData?: ICustomDataType;
    };
    /**
     * props for the node renderer
     */
    export interface INodeRendererProps {
        /**
         * array of connections between nodes
         */
        connections: IConnectionType[];
        /**
         * function called when a new connection is created
         */
        updateConnections: (sourceId: string, targetId: string) => void;
        /**
         * function called when a connection is deleted
         */
        deleteLine: (lineId: string) => void;
        /**
         * function called when a node is deleted
         */
        deleteNode: (nodeId: string) => void;
        /**
         * array of all nodes
         */
        nodes: INodeType[];
        /**
         * id of the node to highlight
         */
        highlightedNode?: BABYLON.Nullable<string>;
        /**
         * function to be called if a node is selected
         */
        selectNode?: (nodeId: BABYLON.Nullable<string>) => void;
        /**
         * id of this renderer
         */
        id: string;
        /**
         * optional list of custom components to be rendered inside nodes of
         * a certain type
         */
        customComponents?: Record<string, React.ComponentType<any>>;
    }
    /**
     * This component is a bridge between the app logic related to the graph, and the actual rendering
     * of it. It manages the nodes' positions and selection states.
     * @param props
     * @returns
     */
    export const NodeRenderer: (props: INodeRendererProps) => JSX.Element;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /**
     * utility hook to assist using the graph context
     * @returns
     */
    export const useGraphContext: () => IGraphContext;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /// <reference types="react" />
    export interface ITextInputProps {
        label?: string;
        placeholder?: string;
        submitValue: (newValue: string) => void;
        validateValue?: (value: string) => boolean;
        cancelSubmit?: () => void;
    }
    /**
     * This component represents a text input that can be submitted or cancelled on buttons
     */
    export const TextInputWithSubmit: (props: ITextInputProps) => JSX.Element;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /// <reference types="react" />
    export type ToggleProps = {
        toggled: "on" | "mixed" | "off";
        onToggle?: () => void;
        padded?: boolean;
        color?: "dark" | "light";
    };
    export var Toggle: React.FC<ToggleProps>;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface ICheckBoxLineComponentProps {
        label?: string;
        target?: any;
        propertyName?: string;
        isSelected?: () => boolean;
        onSelect?: (value: boolean) => void;
        onValueChanged?: () => void;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IColor3LineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
        isLinear?: boolean;
        icon?: string;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        iconLabel?: string;
        onChange?: () => void;
    }
    export class Color3LineComponent extends React.Component<IColor3LineComponentProps> {
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IColor4LineComponentProps {
        label: string;
        target?: any;
        propertyName: string;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
        onChange?: () => void;
        isLinear?: boolean;
        icon?: string;
        iconLabel?: string;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
    }
    export class Color4LineComponent extends React.Component<IColor4LineComponentProps> {
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IColorLineComponentProps {
        label: string;
        target?: any;
        propertyName: string;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
        onChange?: () => void;
        isLinear?: boolean;
        icon?: string;
        iconLabel?: string;
        disableAlpha?: boolean;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IColorPickerComponentProps {
        value: BABYLON.Color4 | BABYLON.Color3;
        linearHint?: boolean;
        onColorChanged: (newOne: string) => void;
        icon?: string;
        iconLabel?: string;
        shouldPopRight?: boolean;
        lockObject?: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IButtonLineComponentProps {
        data: string;
        tooltip: string;
    }
    export class DraggableLineComponent extends React.Component<IButtonLineComponentProps> {
        constructor(props: IButtonLineComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IFloatLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onChange?: (newValue: number) => void;
        isInteger?: boolean;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
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
        incrementValue(amount: number, processStep?: boolean): void;
        onKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void;
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IHexLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        lockObject?: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onChange?: (newValue: number) => void;
        isInteger?: boolean;
        replaySourceReplacement?: string;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IIconComponentProps {
        icon: string;
        label?: string;
    }
    export class IconComponent extends React.Component<IIconComponentProps> {
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface ISelectedLineContainer {
        selectedLineContainerTitles: Array<string>;
        selectedLineContainerTitlesNoFocus: Array<string>;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface ILineContainerComponentProps {
        selection?: BABYLON.NodeEditor.SharedUIComponents.ISelectedLineContainer;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IMatrixLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        step?: number;
        onChange?: (newValue: BABYLON.Matrix) => void;
        onModeChange?: (mode: number) => void;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
        mode?: number;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface INumericInputComponentProps {
        label: string;
        value: number;
        step?: number;
        onChange: (value: number) => void;
        precision?: number;
        icon?: string;
        iconLabel?: string;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
        updateValue(valueString: string): void;
        onBlur(): void;
        incrementValue(amount: number): void;
        onKeyDown(evt: React.KeyboardEvent<HTMLInputElement>): void;
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export var Null_Value: number;
    export interface IOptionsLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        options: BABYLON.IInspectableOptions[];
        noDirectUpdate?: boolean;
        onSelect?: (value: number | string) => void;
        extractValue?: (target: any) => number | string;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export class Popup {
        static CreatePopup(title: string, windowVariableName: string, width?: number, height?: number): HTMLDivElement | null;
        private static _CopyStyles;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
        decimalCount?: number;
        margin?: boolean;
        icon?: string;
        iconLabel?: string;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export const conflictingValuesPlaceholder = "\u2014";
    /**
     *
     * @param targets a list of selected targets
     * @param onPropertyChangedObservable
     * @param getProperty
     * @returns a proxy object that can be passed as a target into the input
     */
    export function makeTargetsProxy<Type>(targets: Type[], onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>, getProperty?: (target: Type, property: keyof Type) => any): any;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface ITextInputLineComponentProps {
        label?: string;
        lockObject?: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        target?: any;
        propertyName?: string;
        value?: string;
        onChange?: (value: string) => void;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /// <reference types="react" />
    interface IUnitButtonProps {
        unit: string;
        locked?: boolean;
        onClick?: (unit: string) => void;
    }
    export function UnitButton(props: IUnitButtonProps): JSX.Element;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IVector2LineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        step?: number;
        onChange?: (newvalue: BABYLON.Vector2) => void;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
        icon?: string;
        iconLabel?: string;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IVector3LineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        step?: number;
        onChange?: (newvalue: BABYLON.Vector3) => void;
        useEuler?: boolean;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
        noSlider?: boolean;
        icon?: string;
        iconLabel?: string;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IVector4LineComponentProps {
        label: string;
        target?: any;
        propertyName?: string;
        step?: number;
        onChange?: (newvalue: BABYLON.Vector4) => void;
        useEuler?: boolean;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
        icon?: string;
        iconLabel?: string;
        value?: BABYLON.Vector4;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export class DisplayLedger {
        static RegisteredControls: {
            [key: string]: any;
        };
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export class FrameNodePort extends BABYLON.NodeEditor.SharedUIComponents.NodePort {
        portData: BABYLON.NodeEditor.SharedUIComponents.IPortData;
        node: BABYLON.NodeEditor.SharedUIComponents.GraphNode;
        private _parentFrameId;
        private _isInput;
        private _framePortPosition;
        private _framePortId;
        private _onFramePortPositionChangedObservable;
        get parentFrameId(): number;
        get onFramePortPositionChangedObservable(): BABYLON.Observable<FrameNodePort>;
        get isInput(): boolean;
        get framePortId(): number;
        get framePortPosition(): BABYLON.NodeEditor.SharedUIComponents.FramePortPosition;
        set framePortPosition(position: BABYLON.NodeEditor.SharedUIComponents.FramePortPosition);
        constructor(portContainer: HTMLElement, portData: BABYLON.NodeEditor.SharedUIComponents.IPortData, node: BABYLON.NodeEditor.SharedUIComponents.GraphNode, stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager, isInput: boolean, framePortId: number, parentFrameId: number);
        static CreateFrameNodePortElement(portData: BABYLON.NodeEditor.SharedUIComponents.IPortData, node: BABYLON.NodeEditor.SharedUIComponents.GraphNode, root: HTMLElement, displayManager: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.IDisplayManager>, stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager, isInput: boolean, framePortId: number, parentFrameId: number): FrameNodePort;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IGraphCanvasComponentProps {
        stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager;
        onEmitNewNode: (nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData) => BABYLON.NodeEditor.SharedUIComponents.GraphNode;
    }
    export class GraphCanvasComponent extends React.Component<IGraphCanvasComponentProps> implements BABYLON.NodeEditor.SharedUIComponents.INodeContainer {
        static readonly NodeWidth = 100;
        private readonly _minZoom;
        private readonly _maxZoom;
        private _hostCanvasRef;
        private _hostCanvas;
        private _graphCanvasRef;
        private _graphCanvas;
        private _selectionContainerRef;
        private _selectionContainer;
        private _frameContainerRef;
        private _frameContainer;
        private _svgCanvasRef;
        private _svgCanvas;
        private _rootContainerRef;
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
        _targetLinkCandidate: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.NodeLink>;
        private _copiedNodes;
        private _copiedFrames;
        get gridSize(): number;
        set gridSize(value: number);
        get stateManager(): BABYLON.NodeEditor.SharedUIComponents.StateManager;
        get nodes(): BABYLON.NodeEditor.SharedUIComponents.GraphNode[];
        get links(): BABYLON.NodeEditor.SharedUIComponents.NodeLink[];
        get frames(): BABYLON.NodeEditor.SharedUIComponents.GraphFrame[];
        get zoom(): number;
        set zoom(value: number);
        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        get selectedNodes(): BABYLON.NodeEditor.SharedUIComponents.GraphNode[];
        get selectedLink(): BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.NodeLink>;
        get selectedFrames(): BABYLON.NodeEditor.SharedUIComponents.GraphFrame[];
        get selectedPort(): BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.NodePort>;
        get canvasContainer(): HTMLDivElement;
        get hostCanvas(): HTMLDivElement;
        get svgCanvas(): HTMLElement;
        get selectionContainer(): HTMLDivElement;
        get frameContainer(): HTMLDivElement;
        private _selectedFrameAndNodesConflict;
        constructor(props: IGraphCanvasComponentProps);
        populateConnectedEntriesBeforeRemoval(item: BABYLON.NodeEditor.SharedUIComponents.GraphNode, items: BABYLON.NodeEditor.SharedUIComponents.GraphNode[], inputs: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.IPortData>[], outputs: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.IPortData>[]): void;
        automaticRewire(inputs: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.IPortData>[], outputs: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.IPortData>[], firstOnly?: boolean): void;
        handleKeyDown(evt: KeyboardEvent, onRemove: (nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData) => void, mouseLocationX: number, mouseLocationY: number, dataGenerator: (nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData) => any, rootElement: HTMLDivElement): void;
        pasteSelection(copiedNodes: BABYLON.NodeEditor.SharedUIComponents.GraphNode[], currentX: number, currentY: number, dataGenerator: (nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData) => any, selectNew?: boolean): BABYLON.NodeEditor.SharedUIComponents.GraphNode[];
        reconnectNewNodes(nodeIndex: number, newNodes: BABYLON.NodeEditor.SharedUIComponents.GraphNode[], sourceNodes: BABYLON.NodeEditor.SharedUIComponents.GraphNode[], done: boolean[]): void;
        getCachedData(): any[];
        removeDataFromCache(data: any): void;
        createNodeFromObject(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData, onNodeCreated: (data: any) => void, recursion?: boolean): BABYLON.NodeEditor.SharedUIComponents.GraphNode;
        getGridPosition(position: number, useCeil?: boolean): number;
        getGridPositionCeil(position: number): number;
        updateTransform(): void;
        onKeyUp(): void;
        findNodeFromData(data: any): BABYLON.NodeEditor.SharedUIComponents.GraphNode;
        reset(): void;
        connectPorts(pointA: BABYLON.NodeEditor.SharedUIComponents.IPortData, pointB: BABYLON.NodeEditor.SharedUIComponents.IPortData): void;
        removeLink(link: BABYLON.NodeEditor.SharedUIComponents.NodeLink): void;
        appendNode(nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData): BABYLON.NodeEditor.SharedUIComponents.GraphNode;
        distributeGraph(): void;
        componentDidMount(): void;
        onMove(evt: React.PointerEvent): void;
        onDown(evt: React.PointerEvent<HTMLElement>): void;
        onUp(evt: React.PointerEvent): void;
        onWheel(evt: React.WheelEvent): void;
        zoomToFit(): void;
        processCandidatePort(): void;
        connectNodes(nodeA: BABYLON.NodeEditor.SharedUIComponents.GraphNode, pointA: BABYLON.NodeEditor.SharedUIComponents.IPortData, nodeB: BABYLON.NodeEditor.SharedUIComponents.GraphNode, pointB: BABYLON.NodeEditor.SharedUIComponents.IPortData): void;
        drop(newNode: BABYLON.NodeEditor.SharedUIComponents.GraphNode, targetX: number, targetY: number, offsetX: number, offsetY: number): void;
        processEditorData(editorData: BABYLON.NodeEditor.SharedUIComponents.IEditorData): void;
        reOrganize(editorData?: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.IEditorData>, isImportingAFrame?: boolean): void;
        addFrame(frameData: BABYLON.NodeEditor.SharedUIComponents.IFrameData): void;
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
        get nodes(): BABYLON.NodeEditor.SharedUIComponents.GraphNode[];
        get ports(): BABYLON.NodeEditor.SharedUIComponents.FrameNodePort[];
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
        constructor(candidate: BABYLON.Nullable<HTMLDivElement>, canvas: BABYLON.NodeEditor.SharedUIComponents.GraphCanvasComponent, doNotCaptureNodes?: boolean);
        refresh(): void;
        addNode(node: BABYLON.NodeEditor.SharedUIComponents.GraphNode): void;
        removeNode(node: BABYLON.NodeEditor.SharedUIComponents.GraphNode): void;
        syncNode(node: BABYLON.NodeEditor.SharedUIComponents.GraphNode): void;
        cleanAccumulation(): void;
        private _onDown;
        move(newX: number, newY: number, align?: boolean): void;
        private _onUp;
        _moveFrame(offsetX: number, offsetY: number): void;
        private _onMove;
        moveFramePortUp(nodePort: BABYLON.NodeEditor.SharedUIComponents.FrameNodePort): void;
        private _movePortUp;
        moveFramePortDown(nodePort: BABYLON.NodeEditor.SharedUIComponents.FrameNodePort): void;
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
        serialize(saveCollapsedState: boolean): BABYLON.NodeEditor.SharedUIComponents.IFrameData;
        export(): void;
        adjustPorts(): void;
        static Parse(serializationData: BABYLON.NodeEditor.SharedUIComponents.IFrameData, canvas: BABYLON.NodeEditor.SharedUIComponents.GraphCanvasComponent, map?: {
            [key: number]: number;
        }): GraphFrame;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        /// <reference types="react" />
    export class GraphNode {
        content: BABYLON.NodeEditor.SharedUIComponents.INodeData;
        private _visual;
        private _headerContainer;
        private _headerIcon;
        private _headerIconImg;
        private _header;
        private _connections;
        private _inputsContainer;
        private _outputsContainer;
        private _content;
        private _comments;
        private _selectionBorder;
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
        addClassToVisual(className: string): void;
        removeClassFromVisual(className: string): void;
        get isVisible(): boolean;
        set isVisible(value: boolean);
        private _upateNodePortNames;
        get outputPorts(): BABYLON.NodeEditor.SharedUIComponents.NodePort[];
        get inputPorts(): BABYLON.NodeEditor.SharedUIComponents.NodePort[];
        get links(): BABYLON.NodeEditor.SharedUIComponents.NodeLink[];
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
        constructor(content: BABYLON.NodeEditor.SharedUIComponents.INodeData, stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager);
        isOverlappingFrame(frame: BABYLON.NodeEditor.SharedUIComponents.GraphFrame): boolean;
        getPortForPortData(portData: BABYLON.NodeEditor.SharedUIComponents.IPortData): BABYLON.NodeEditor.SharedUIComponents.NodePort | null;
        getPortDataForPortDataContent(data: any): BABYLON.NodeEditor.SharedUIComponents.IPortData | null;
        getLinksForPortDataContent(data: any): BABYLON.NodeEditor.SharedUIComponents.NodeLink[];
        getLinksForPortData(portData: BABYLON.NodeEditor.SharedUIComponents.IPortData): BABYLON.NodeEditor.SharedUIComponents.NodeLink[];
        private _refreshFrames;
        _refreshLinks(): void;
        refresh(): void;
        private _onDown;
        cleanAccumulation(useCeil?: boolean): void;
        private _onUp;
        private _onMove;
        renderProperties(): BABYLON.Nullable<JSX.Element>;
        appendVisual(root: HTMLDivElement, owner: BABYLON.NodeEditor.SharedUIComponents.GraphCanvasComponent): void;
        dispose(): void;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface VisualContentDescription {
        [key: string]: HTMLElement;
    }
    export interface IDisplayManager {
        getHeaderClass(data: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        shouldDisplayPortLabels(data: BABYLON.NodeEditor.SharedUIComponents.IPortData): boolean;
        updatePreviewContent(data: BABYLON.NodeEditor.SharedUIComponents.INodeData, contentArea: HTMLDivElement): void;
        updateFullVisualContent?(data: BABYLON.NodeEditor.SharedUIComponents.INodeData, visualContent: VisualContentDescription): void;
        getBackgroundColor(data: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
        getHeaderText(data: BABYLON.NodeEditor.SharedUIComponents.INodeData): string;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface INodeContainer {
        nodes: BABYLON.NodeEditor.SharedUIComponents.GraphNode[];
        appendNode(data: BABYLON.NodeEditor.SharedUIComponents.INodeData): BABYLON.NodeEditor.SharedUIComponents.GraphNode;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface INodeData {
        data: any;
        name: string;
        uniqueId: number;
        isInput: boolean;
        comments: string;
        prepareHeaderIcon: (iconDiv: HTMLDivElement, img: HTMLImageElement) => void;
        getClassName: () => string;
        dispose: () => void;
        getPortByName: (name: string) => BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.IPortData>;
        inputs: BABYLON.NodeEditor.SharedUIComponents.IPortData[];
        outputs: BABYLON.NodeEditor.SharedUIComponents.IPortData[];
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
        canConnectTo: (port: IPortData) => boolean;
        connectTo: (port: IPortData) => void;
        disconnectFrom: (port: IPortData) => void;
        checkCompatibilityState(port: IPortData): number;
        getCompatibilityIssueMessage(issue: number, targetNode: BABYLON.NodeEditor.SharedUIComponents.GraphNode, targetPort: IPortData): string;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface IPropertyComponentProps {
        stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager;
        nodeData: BABYLON.NodeEditor.SharedUIComponents.INodeData;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export interface ISelectionChangedOptions {
        selection: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.GraphNode | BABYLON.NodeEditor.SharedUIComponents.NodeLink | BABYLON.NodeEditor.SharedUIComponents.GraphFrame | BABYLON.NodeEditor.SharedUIComponents.NodePort | BABYLON.NodeEditor.SharedUIComponents.FramePortData>;
        forceKeepSelection?: boolean;
        marqueeSelection?: boolean;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
        private _isTargetCandidate;
        onDisposedObservable: BABYLON.Observable<NodeLink>;
        get isTargetCandidate(): boolean;
        set isTargetCandidate(value: boolean);
        get isVisible(): boolean;
        set isVisible(value: boolean);
        get portA(): BABYLON.NodeEditor.SharedUIComponents.FrameNodePort | BABYLON.NodeEditor.SharedUIComponents.NodePort;
        get portB(): BABYLON.NodeEditor.SharedUIComponents.FrameNodePort | BABYLON.NodeEditor.SharedUIComponents.NodePort | undefined;
        get nodeA(): BABYLON.NodeEditor.SharedUIComponents.GraphNode;
        get nodeB(): BABYLON.NodeEditor.SharedUIComponents.GraphNode | undefined;
        intersectsWith(rect: DOMRect): boolean;
        update(endX?: number, endY?: number, straight?: boolean): void;
        constructor(graphCanvas: BABYLON.NodeEditor.SharedUIComponents.GraphCanvasComponent, portA: BABYLON.NodeEditor.SharedUIComponents.NodePort, nodeA: BABYLON.NodeEditor.SharedUIComponents.GraphNode, portB?: BABYLON.NodeEditor.SharedUIComponents.NodePort, nodeB?: BABYLON.NodeEditor.SharedUIComponents.GraphNode);
        onClick(evt: MouseEvent): void;
        dispose(notify?: boolean): void;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export class NodePort {
        portData: BABYLON.NodeEditor.SharedUIComponents.IPortData;
        node: BABYLON.NodeEditor.SharedUIComponents.GraphNode;
        protected _element: HTMLDivElement;
        protected _img: HTMLImageElement;
        protected _stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager;
        protected _portLabelElement: Element;
        protected _onCandidateLinkMovedObserver: BABYLON.Nullable<BABYLON.Observer<BABYLON.Nullable<BABYLON.Vector2>>>;
        protected _onSelectionChangedObserver: BABYLON.Nullable<BABYLON.Observer<BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.ISelectionChangedOptions>>>;
        protected _exposedOnFrame: boolean;
        delegatedPort: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.FrameNodePort>;
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
        constructor(portContainer: HTMLElement, portData: BABYLON.NodeEditor.SharedUIComponents.IPortData, node: BABYLON.NodeEditor.SharedUIComponents.GraphNode, stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager);
        dispose(): void;
        static CreatePortElement(portData: BABYLON.NodeEditor.SharedUIComponents.IPortData, node: BABYLON.NodeEditor.SharedUIComponents.GraphNode, root: HTMLElement, displayManager: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.IDisplayManager>, stateManager: BABYLON.NodeEditor.SharedUIComponents.StateManager): NodePort;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export class PropertyLedger {
        static DefaultControl: React.ComponentClass<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps>;
        static RegisteredControls: {
            [key: string]: React.ComponentClass<BABYLON.NodeEditor.SharedUIComponents.IPropertyComponentProps>;
        };
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export class StateManager {
        data: any;
        hostDocument: Document;
        lockObject: any;
        onSelectionChangedObservable: BABYLON.Observable<BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.ISelectionChangedOptions>>;
        onFrameCreatedObservable: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.GraphFrame>;
        onUpdateRequiredObservable: BABYLON.Observable<any>;
        onGraphNodeRemovalObservable: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.GraphNode>;
        onSelectionBoxMoved: BABYLON.Observable<ClientRect | DOMRect>;
        onCandidateLinkMoved: BABYLON.Observable<BABYLON.Nullable<BABYLON.Vector2>>;
        onCandidatePortSelectedObservable: BABYLON.Observable<BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.FrameNodePort | BABYLON.NodeEditor.SharedUIComponents.NodePort>>;
        onNewNodeCreatedObservable: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.GraphNode>;
        onRebuildRequiredObservable: BABYLON.Observable<boolean>;
        onErrorMessageDialogRequiredObservable: BABYLON.Observable<string>;
        onExposePortOnFrameObservable: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.GraphNode>;
        onGridSizeChanged: BABYLON.Observable<void>;
        onNewBlockRequiredObservable: BABYLON.Observable<{
            type: string;
            targetX: number;
            targetY: number;
            needRepositioning?: boolean | undefined;
        }>;
        exportData: (data: any, frame?: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.GraphFrame>) => string;
        isElbowConnectionAllowed: (nodeA: BABYLON.NodeEditor.SharedUIComponents.FrameNodePort | BABYLON.NodeEditor.SharedUIComponents.NodePort, nodeB: BABYLON.NodeEditor.SharedUIComponents.FrameNodePort | BABYLON.NodeEditor.SharedUIComponents.NodePort) => boolean;
        applyNodePortDesign: (data: BABYLON.NodeEditor.SharedUIComponents.IPortData, element: HTMLElement, img: HTMLImageElement) => void;
        storeEditorData: (serializationObject: any, frame?: BABYLON.Nullable<BABYLON.NodeEditor.SharedUIComponents.GraphFrame>) => void;
        getEditorDataMap: () => {
            [key: number]: number;
        };
        createDefaultInputData: (rootData: any, portData: BABYLON.NodeEditor.SharedUIComponents.IPortData, nodeContainer: BABYLON.NodeEditor.SharedUIComponents.INodeContainer) => BABYLON.Nullable<{
            data: BABYLON.NodeEditor.SharedUIComponents.INodeData;
            name: string;
        }>;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export const IsFramePortData: (variableToCheck: any) => variableToCheck is BABYLON.NodeEditor.SharedUIComponents.FramePortData;
    export const RefreshNode: (node: BABYLON.NodeEditor.SharedUIComponents.GraphNode, visitedNodes?: Set<BABYLON.NodeEditor.SharedUIComponents.GraphNode> | undefined, visitedLinks?: Set<BABYLON.NodeEditor.SharedUIComponents.NodeLink> | undefined) => void;



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export class TypeLedger {
        static PortDataBuilder: (port: BABYLON.NodeEditor.SharedUIComponents.NodePort, nodeContainer: BABYLON.NodeEditor.SharedUIComponents.INodeContainer) => BABYLON.NodeEditor.SharedUIComponents.IPortData;
        static NodeDataBuilder: (data: any, nodeContainer: BABYLON.NodeEditor.SharedUIComponents.INodeContainer) => BABYLON.NodeEditor.SharedUIComponents.INodeData;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export type FramePortData = {
        frame: BABYLON.NodeEditor.SharedUIComponents.GraphFrame;
        port: FrameNodePort;
    };



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        export class PropertyChangedEvent {
        object: any;
        property: string;
        value: any;
        initialValue: any;
        allowNullValue?: boolean;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface ICheckboxPropertyGridComponentProps {
        checkbox: BABYLON.GUI.Checkbox;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class CheckboxPropertyGridComponent extends React.Component<ICheckboxPropertyGridComponentProps> {
        constructor(props: ICheckboxPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IColorPickerPropertyGridComponentProps {
        colorPicker: BABYLON.GUI.ColorPicker;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class ColorPickerPropertyGridComponent extends React.Component<IColorPickerPropertyGridComponentProps> {
        constructor(props: IColorPickerPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface ICommonControlPropertyGridComponentProps {
        controls?: BABYLON.GUI.Control[];
        control?: BABYLON.GUI.Control;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class CommonControlPropertyGridComponent extends React.Component<ICommonControlPropertyGridComponentProps> {
        constructor(props: ICommonControlPropertyGridComponentProps);
        renderGridInformation(control: BABYLON.GUI.Control): JSX.Element | null;
        render(): JSX.Element | undefined;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IControlPropertyGridComponentProps {
        control: BABYLON.GUI.Control;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class ControlPropertyGridComponent extends React.Component<IControlPropertyGridComponentProps> {
        constructor(props: IControlPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IEllipsePropertyGridComponentProps {
        ellipse: BABYLON.GUI.Ellipse;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class EllipsePropertyGridComponent extends React.Component<IEllipsePropertyGridComponentProps> {
        constructor(props: IEllipsePropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IGridPropertyGridComponentProps {
        grid: BABYLON.GUI.Grid;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class GridPropertyGridComponent extends React.Component<IGridPropertyGridComponentProps> {
        constructor(props: IGridPropertyGridComponentProps);
        renderRows(): JSX.Element[];
        renderColumns(): JSX.Element[];
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IImageBasedSliderPropertyGridComponentProps {
        imageBasedSlider: BABYLON.GUI.ImageBasedSlider;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class ImageBasedSliderPropertyGridComponent extends React.Component<IImageBasedSliderPropertyGridComponentProps> {
        constructor(props: IImageBasedSliderPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IImagePropertyGridComponentProps {
        image: BABYLON.GUI.Image;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class ImagePropertyGridComponent extends React.Component<IImagePropertyGridComponentProps> {
        constructor(props: IImagePropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IInputTextPropertyGridComponentProps {
        inputText: BABYLON.GUI.InputText;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class InputTextPropertyGridComponent extends React.Component<IInputTextPropertyGridComponentProps> {
        constructor(props: IInputTextPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface ILinePropertyGridComponentProps {
        line: BABYLON.GUI.Line;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class LinePropertyGridComponent extends React.Component<ILinePropertyGridComponentProps> {
        constructor(props: ILinePropertyGridComponentProps);
        onDashChange(value: string): void;
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IRadioButtonPropertyGridComponentProps {
        radioButtons: BABYLON.GUI.RadioButton[];
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class RadioButtonPropertyGridComponent extends React.Component<IRadioButtonPropertyGridComponentProps> {
        constructor(props: IRadioButtonPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IRectanglePropertyGridComponentProps {
        rectangle: BABYLON.GUI.Rectangle;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class RectanglePropertyGridComponent extends React.Component<IRectanglePropertyGridComponentProps> {
        constructor(props: IRectanglePropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IScrollViewerPropertyGridComponentProps {
        scrollViewer: BABYLON.GUI.ScrollViewer;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class ScrollViewerPropertyGridComponent extends React.Component<IScrollViewerPropertyGridComponentProps> {
        constructor(props: IScrollViewerPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface ISliderPropertyGridComponentProps {
        slider: BABYLON.GUI.Slider;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class SliderPropertyGridComponent extends React.Component<ISliderPropertyGridComponentProps> {
        constructor(props: ISliderPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface IStackPanelPropertyGridComponentProps {
        stackPanel: BABYLON.GUI.StackPanel;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class StackPanelPropertyGridComponent extends React.Component<IStackPanelPropertyGridComponentProps> {
        constructor(props: IStackPanelPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
        interface ITextBlockPropertyGridComponentProps {
        textBlock: BABYLON.GUI.TextBlock;
        lockObject: BABYLON.NodeEditor.SharedUIComponents.LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<BABYLON.NodeEditor.SharedUIComponents.PropertyChangedEvent>;
    }
    export class TextBlockPropertyGridComponent extends React.Component<ITextBlockPropertyGridComponentProps> {
        constructor(props: ITextBlockPropertyGridComponentProps);
        render(): JSX.Element;
    }



}
declare module BABYLON.NodeEditor {

}
declare module BABYLON.NodeEditor.SharedUIComponents {
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
declare module BABYLON.NodeEditor {

}


                