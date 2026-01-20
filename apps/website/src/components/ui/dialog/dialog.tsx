import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Props = {
	children: ReactNode;
} & BaseDialog.Root.Props;
//TODO Add variants, refactor styles
export function Dialog({ children, ...props }: Props) {
	return <BaseDialog.Root {...props}>{children}</BaseDialog.Root>;
}

export const DialogTrigger = ({
	children,
	...props
}: BaseDialog.Trigger.Props) => (
	<BaseDialog.Trigger
		{...props}
		className="flex items-center justify-center surface-secondary-outline"
		nativeButton={false}
		render={
			<span className="data-[popup-open]:pointer-events-none" tabIndex={-1}>
				{children}
			</span>
		}
	/>
);
Dialog.Close = BaseDialog.Close;
Dialog.Description = BaseDialog.Description;
Dialog.Title = BaseDialog.Title;
export const DialogHeader = ({ children }: { children: ReactNode }) => (
	<div className="flex gap-16d justify-between">{children}</div>
);
export const DialogPortal = ({
	className,
	...props
}: BaseDialog.Popup.Props) => (
	<BaseDialog.Portal>
		<BaseDialog.Backdrop className="fixed inset-0 min-h-dvh bg-foreground-200d opacity-30 transition-all data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70 supports-[-webkit-touch-callout:none]:absolute" />
		<BaseDialog.Popup
			className={cn(
				"fixed top-1/2 left-1/2 -mt-12d max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-12d bg-1 shadow-lifted-4 transition-all data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-foreground-700d overflow-hidden",
				className,
			)}
			{...props}
		/>
	</BaseDialog.Portal>
);
