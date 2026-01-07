import { Select as BaseSelect } from "@base-ui-components/react/select"; // TODO Update to stable
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import { CheckIcon } from "../icons/check";
import { ChevronUpDownIcon } from "../icons/chevron-up-down";
import { SpinnerIcon } from "../icons/spinner";

const selectTriggerVariants = cva(
	"w-full h-[2em] disabled:pointer-events-none",
	{
		variants: {
			size: {
				s: "text-3d font-10d",
				m: "text-4d font-9d",
				l: "text-5d font-8d",
			},
			shape: {
				rounded: null,
				square: null,
				circular: "rounded-[1em]",
			},
			disabled: {
				true: "opacity-50 saturate-50 contrast-60 pointer-events-none",
			},
			loading: {
				true: "text-transparent cursor-wait pointer-events-none",
				false: "cursor-pointer",
			},
			status: {
				valid:
					"border-success text-success focus-visible:shadow-focus-success focus-visible:outline-success-d",
				warning:
					"border-warning text-warning focus-visible:shadow-focus-warning focus-visible:outline-warning-d",
				invalid:
					"border-error text-error focus-visible:shadow-focus-error focus-visible:outline-error-d",
			},
		},
		compoundVariants: [
			{
				status: undefined,
				className:
					"surface-secondary-outline focus-visible:shadow-focus-secondary",
			},
			{
				size: "s",
				shape: "rounded",
				className: "rounded-7d",
			},
			{
				size: "m",
				shape: "rounded",
				className: "rounded-8d",
			},
			{
				size: "l",
				shape: "rounded",
				className: "rounded-9d",
			},
		],
		defaultVariants: {
			size: "m",
			shape: "rounded",
			loading: false,
		},
	},
);
const popupVariants = cva(
	"group min-w-[var(--anchor-width)] origin-[var(--transform-origin)] bg-clip-padding shadow-2d surface-secondary-outline bg-3 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none outline-none",
	{
		variants: {
			shape: {
				square: null,
				rounded: null,
				circular: "rounded-[1em]",
			},
			size: {
				s: "text-3d font-10d",
				m: "text-4d font-9d",
				l: "text-5d font-8d",
			},
		},
		compoundVariants: [
			{
				size: "s",
				shape: "rounded",
				className: "rounded-7d",
			},
			{
				size: "m",
				shape: "rounded",
				className: "rounded-8d",
			},
			{
				size: "l",
				shape: "rounded",
				className: "rounded-9d",
			},
		],
		defaultVariants: {
			shape: "rounded",
			size: "m",
		},
	},
);
const triggerWrapperVariants = cva("flex items-center justify-center", {
	variants: {
		disabled: {
			true: "cursor-not-allowed",
		},
		loading: {
			true: "cursor-wait",
		},
	},
});

export type SelectProps = VariantProps<typeof selectTriggerVariants> & {
	items: { label: string; value: string | number | null }[];
} & {required?: boolean; id?: string};

export function Select({ items, size, shape, loading, disabled, status, required }: SelectProps) {
	return (
		<BaseSelect.Root items={items} disabled={disabled ?? undefined} required={required}>
			<span className={triggerWrapperVariants({ disabled, loading })}>
				{loading && (
					<SpinnerIcon className="animate-spin absolute pointer-events-none" />
				)}
				<BaseSelect.Trigger
					className={cn(
						"flex min-w-28d px-[1.2ch] items-center justify-between gap-3 border-1.6 bg-3 select-none hover:bg-2",
						selectTriggerVariants({ size, shape, disabled, loading, status }),
					)}
				>
					<BaseSelect.Value />
					<BaseSelect.Icon className="flex">
						<ChevronUpDownIcon size="1em" />
					</BaseSelect.Icon>
				</BaseSelect.Trigger>
			</span>
			<BaseSelect.Portal>
				<BaseSelect.Positioner
					className="outline-none select-none z-10"
					sideOffset={8}
				>
					<BaseSelect.Popup className={popupVariants({ shape, size })}>
						<BaseSelect.ScrollUpArrow className="top-0 left-0 z-[1] flex h-[2em] rounded-t-[1em] w-full items-center justify-center bg-[canvas] text-center before:absolute data-[side=none]:before:top-[-100%] before:left-0 before:h-full before:w-full before:content-['']" />
						<BaseSelect.List className="relative scroll-py-6 overflow-y-auto max-h-[var(--available-height)]">
							{items.map(({ label, value }) => (
								<BaseSelect.Item
									key={label}
									value={value}
									className={cn(
										"grid grid-cols-[1.75em_1fr] items-center select-none group-data-[side=none]:pr-12 group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:surface-foreground-solid data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:bg-primary-500d outline-none",
										selectTriggerVariants({ shape, size }),
									)}
								>
									<BaseSelect.ItemIndicator className="col-start-1 justify-self-center">
										<CheckIcon size="1.125em" />
									</BaseSelect.ItemIndicator>
									<BaseSelect.ItemText className="col-start-2">
										{label}
									</BaseSelect.ItemText>
								</BaseSelect.Item>
							))}
						</BaseSelect.List>
						<BaseSelect.ScrollDownArrow className="bottom-0 left-0 z-[1] flex h-[2em] w-full cursor-default items-center justify-center rounded-b-[1em] bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] bottom-0 data-[side=none]:before:bottom-[-100%]" />
					</BaseSelect.Popup>
				</BaseSelect.Positioner>
			</BaseSelect.Portal>
		</BaseSelect.Root>
	);
}
