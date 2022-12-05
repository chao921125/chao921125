
declare module BABYLON.Accessibility {
    /**
     * A abstract layer to store the html twin tree structure. It is constructed from the BabylonJS scene entities that need to be accessible. It informs the parent-children relationship of html twin tree, and informs how to render: description, isActionable, onclick/onrightclick/onfocus/onblur.
     */
    export class HTMLTwinGUIItem extends HTMLTwinItem {
        /**
         * The corresponding BabylonJS entity. Can be a Node or a BABYLON.GUI.Control.
         */
        entity: BABYLON.GUI.Control;
        /**
         * The children of this item in the html twin tree.
         */
        children: HTMLTwinGUIItem[];
        constructor(entity: BABYLON.GUI.Control, scene: BABYLON.Scene, children: HTMLTwinGUIItem[]);
        /**
         * The text content displayed in HTML element.
         */
        get description(): string;
        /**
         * If this entity is actionable (can be clicked).
         */
        get isActionable(): boolean;
        /**
         * If this entity is focusable (can be focused by tab key pressing).
         */
        get isFocusable(): boolean;
        /**
         * Callback when the HTML element is focused. Show visual indication on BabylonJS entity.
         */
        focus(): void;
        /**
         * Callback when the HTML element is blured. Dismiss visual indication on BabylonJS entity.
         */
        blur(): void;
        /**
         * Callback when an event (e.g. click/right click) happens on the HTML element.
         * Implemented by child classes
         * @param eventType - Which event is triggered. E.g. "click", "contextmenu"
         */
        triggerEvent(eventType: string): void;
    }


    interface IHTMLTwinHostComponentProps {
        scene: BABYLON.Scene;
    }
    interface IHTMLTwinHostComponentState {
        a11yTreeItems: HTMLTwinItem[];
    }
    export class HTMLTwinHostComponent extends React.Component<IHTMLTwinHostComponentProps, IHTMLTwinHostComponentState> {
        private _observersMap;
        constructor(props: IHTMLTwinHostComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
        private _updateHTMLTwinItems;
        private _getHTMLTwinItemsFromNodes;
        private _getHTMLTwinItemsFromGUI;
        private _isGUI;
    }


    export type AccessibilityEntity = BABYLON.Node | BABYLON.GUI.Control;
    /**
     * A abstract layer to store the html twin tree structure. It is constructed from the BabylonJS scene entities that need to be accessible. It informs the parent-children relationship of html twin tree, and informs how to render: description, isActionable, onclick/onrightclick/onfocus/onblur.
     */
    export class HTMLTwinItem {
        /**
         * The corresponding BabylonJS entity. Can be a BABYLON.Node or a BABYLON.GUI.Control.
         */
        entity: AccessibilityEntity;
        /**
         * The BabylonJS scene that the corresponding BabylonJS entity is in.
         */
        scene: BABYLON.Scene;
        /**
         * The children of this item in the html twin tree.
         */
        children: HTMLTwinItem[];
        constructor(entity: AccessibilityEntity, scene: BABYLON.Scene, children: HTMLTwinItem[]);
        /**
         * The text content displayed in HTML element.
         * Returns the description in accessibilityTag, if defined (returns "" by default).
         */
        get description(): string;
        /**
         * If this entity is actionable (can be clicked).
         * Implemented by child classes
         */
        get isActionable(): boolean;
        /**
         * If this entity is focusable (can be focused by tab key pressing).
         * Implemented by child classes
         */
        get isFocusable(): boolean;
        /**
         * Callback when the HTML element is focused. Show visual indication on BabylonJS entity.
         * Implemented by child classes
         */
        focus(): void;
        /**
         * Callback when the HTML element is blured. Dismiss visual indication on BabylonJS entity.
         * Implemented by child classes
         */
        blur(): void;
        /**
         * Callback when an event (e.g. click/right click) happens on the HTML element.
         * Implemented by child classes
         * @param _eventType - Which event is triggered. E.g. "click", "contextmenu"
         */
        triggerEvent(_eventType: string): void;
        protected _isActionable: boolean;
        protected _isFocusable: boolean;
    }


    /**
     * A abstract layer to store the html twin tree structure. It is constructed from the BabylonJS scene entities that need to be accessible. It informs the parent-children relationship of html twin tree, and informs how to render: description, isActionable, onclick/onrightclick/onfocus/onblur.
     */
    export class HTMLTwinNodeItem extends HTMLTwinItem {
        /**
         * The corresponding BabylonJS entity. Can be a BABYLON.Node or a Control.
         */
        entity: BABYLON.Node;
        /**
         * The children of this item in the html twin tree.
         */
        children: HTMLTwinItem[];
        constructor(entity: BABYLON.Node, scene: BABYLON.Scene, children: HTMLTwinItem[]);
        /**
         * If this entity is actionable (can be clicked).
         */
        get isActionable(): boolean;
        /**
         * If this entity is focusable (can be focused by tab key pressing).
         */
        get isFocusable(): boolean;
        /**
         * Callback when the HTML element is focused. Show visual indication on BabylonJS entity.
         */
        focus(): void;
        /**
         * Callback when the HTML element is blured. Dismiss visual indication on BabylonJS entity.
         */
        blur(): void;
        /**
         * Callback when an event (e.g. click/right click) happens on the HTML element.
         * Implemented by child classes
         * @param eventType - Which event is triggered. E.g. "click", "contextmenu"
         */
        triggerEvent(eventType: string): void;
        private _getTriggerActions;
    }


    export class HTMLTwinRenderer {
        static Render(scene: BABYLON.Scene): void;
    }


    interface IHTMLTwinItemComponentProps {
        a11yItem: HTMLTwinItem;
        level: number;
    }
    export class HTMLTwinItemComponent extends React.Component<IHTMLTwinItemComponentProps> {
        constructor(props: IHTMLTwinItemComponentProps);
        render(): JSX.Element;
        private _renderLeafNode;
        private _renderParentNode;
        private _renderChildren;
    }







}


                