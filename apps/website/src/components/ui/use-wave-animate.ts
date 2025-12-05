import {
	type KeyboardEventHandler,
	type MouseEventHandler,
	type RefObject,
	useRef,
} from "react";

interface Props {
	onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
	onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;
	onMouseDown?: MouseEventHandler<HTMLButtonElement>;
	onMouseUp?: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	animateClassName: string;
}

export const useWaveAnimate = ({
	onKeyDown,
	onKeyUp,
	onMouseDown,
	onMouseUp,
	disabled,
	animateClassName,
}: Props) => {
	const ref = useRef<HTMLButtonElement>(null);
	const animate = () => {
		const el = ref.current;
		if (el) {
			requestAnimationFrame(() => el.classList.add(animateClassName));
		}
	};
	const clear = () => {
		const el = ref.current;
		if (el) {
			el.classList.remove(animateClassName);
		}
	};
	const r: {
		ref?: RefObject<HTMLButtonElement | null>;
		onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
		onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;
		onMouseDown?: MouseEventHandler<HTMLButtonElement>;
		onMouseUp?: MouseEventHandler<HTMLButtonElement>;
	} = {};
	if (!disabled) {
		r.ref = ref;
		r.onKeyDown = (e) => {
			onKeyDown?.(e);
			e.code === "Space" && clear();
		};
		r.onKeyUp = (e) => {
			onKeyUp?.(e);
			e.code === "Space" && animate();
		};
		r.onMouseDown = (e) => {
			onMouseDown?.(e);
			!e.button && clear();
		};
		r.onMouseUp = (e) => {
			onMouseUp?.(e);
			!e.button && animate();
		};
	} else {
		r.onKeyDown = onKeyDown;
		r.onKeyUp = onKeyUp;
		r.onMouseDown = onMouseDown;
		r.onMouseUp = onMouseUp;
	}
	return r;
};
