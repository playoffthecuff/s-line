import { cva } from "class-variance-authority";
import { Button, type ButtonProps } from "../button/button";
import { InfoIcon } from "../icons/info";
import {
	Popover,
	PopoverPortal,
	type PopoverPortalProps,
	PopoverTrigger,
} from "../popover/popover";

const hintButtonVariants = cva("[&&]-cursor-help", {
	variants: {
		size: {
			xs: "text-3d p-6d",
			s: "text-3d p-6d",
			m: "text-4d p-7d",
			l: "text-5d p-8d",
			xl: "text-6d p-9d",
		},
	},
	defaultVariants: {
		size: "m",
	},
});

export type HintButtonProps = PopoverPortalProps & ButtonProps;

export function HintButton({ size, children, ...props }: HintButtonProps) {
	return (
		<Popover {...props}>
			<PopoverTrigger>
				<Button
					shape={"circular"}
					size={size}
					width={"narrow"}
					animated={false}
					intent={"primary"}
					appearance={"ghost"}
					className={hintButtonVariants({ size })}
				>
					<InfoIcon
						fill={"currentColor"}
						size="1em"
						className="fill-primary-d"
					/>
				</Button>
			</PopoverTrigger>
			<PopoverPortal size={size} {...props}>
				{children}
			</PopoverPortal>
		</Popover>
	);
}
