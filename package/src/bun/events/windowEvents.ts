import ElectrobunEvent from "./event";

type IdData = { id: number };
type ResizeData = {
	id: number;
	x: number;
	y: number;
	width: number;
	height: number;
};
type MoveData = { id: number; x: number; y: number };
type KeyData = { id: number; keyCode: number; modifiers: number; isRepeat: boolean };
type MouseButtonData = { id: number; x: number; y: number; button: number };
type MouseMoveData = { id: number; x: number; y: number; buttonState: number };
type ScrollData = { id: number; dx: number; dy: number; x: number; y: number };

export default {
	closeRequested: (data: IdData) =>
		new ElectrobunEvent<IdData, {}>("close-requested", data),
	close: (data: IdData) => new ElectrobunEvent<IdData, {}>("close", data),
	resize: (data: ResizeData) =>
		new ElectrobunEvent<ResizeData, {}>("resize", data),
	move: (data: MoveData) => new ElectrobunEvent<MoveData, {}>("move", data),
	focus: (data: IdData) => new ElectrobunEvent<IdData, {}>("focus", data),
	blur: (data: IdData) => new ElectrobunEvent<IdData, {}>("blur", data),
	keyDown: (data: KeyData) => new ElectrobunEvent<KeyData, {}>("keyDown", data),
	keyUp: (data: KeyData) => new ElectrobunEvent<KeyData, {}>("keyUp", data),
	mouseDown: (data: MouseButtonData) => new ElectrobunEvent<MouseButtonData, {}>("mouseDown", data),
	mouseUp: (data: MouseButtonData) => new ElectrobunEvent<MouseButtonData, {}>("mouseUp", data),
	mouseMove: (data: MouseMoveData) => new ElectrobunEvent<MouseMoveData, {}>("mouseMove", data),
	scroll: (data: ScrollData) => new ElectrobunEvent<ScrollData, {}>("scroll", data),
};
