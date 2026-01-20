import { NumberField } from "@/components/ui/fields/number";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { Title } from "@/components/ui/typography/title";

export default function NumberFieldPage() {
	return (
		<div
			className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d grow [&&]-pb-20"
			style={{
				width: "clamp(320px, 100%, 800px)",
			}}
		>
			<div>
				<Title>Number Field</Title>
				<p>
					Labeled control, with an optional message and hint. Accepts number
					data from the user.
				</p>
			</div>
			<div>
				<Title size={5}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/smoothed@latest add number-field"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<hr className="mt-16d mb-12d" />
			<Title size={5}>Variants:</Title>
			<div className="flex flex-col gap-16d items-start">
				<div>
					<Title size={4}>Options</Title>
					<div className="flex flex-col gap-16d">
						<NumberField label="Only Label" defaultValue={100} id="ol" />
						<NumberField
							label="Hint"
							defaultValue={100}
							hint="Hint"
							id="hint"
						/>
						<NumberField label="Required" required id="required" />
						<NumberField
							label="With message"
							message="message"
							defaultValue={100}
							id="wm"
						/>
						<NumberField
							label="Popover message"
							popoverMessage="Popover message"
							defaultValue={100}
							id="pm"
						/>
					</div>
				</div>
				<div>
					<Title size={4}>Size</Title>
					<div className="flex flex-col gap-16d">
						<NumberField
							label="Small"
							message="S - Small"
							size="s"
							defaultValue={100}
							hint="Small"
							id="small"
						/>
						<NumberField
							label="Medium"
							message="M - Medium"
							size="m"
							defaultValue={100}
							hint="Medium"
							id="medium"
						/>
						<NumberField
							label="Large"
							message="L - large"
							size="l"
							defaultValue={100}
							hint="Large"
							id="large"
						/>
					</div>
				</div>
				<div className="w-full">
					<Title size={4}>Width</Title>
					<div className="flex flex-col gap-16d">
						<NumberField
							label="Narrow"
							message="narrow"
							defaultValue={100}
							width="narrow"
							hint="Small"
							id="small"
						/>
						<NumberField
							label="Normal"
							message="normal"
							defaultValue={100}
							width="normal"
							hint="Small"
							id="small"
						/>
						<NumberField
							label="Wide"
							message="wide"
							defaultValue={100}
							width="wide"
							hint="Small"
							id="small"
						/>
						<NumberField
							label="Fill"
							message="fill"
							defaultValue={100}
							width="fill"
							hint="Small"
							id="small"
						/>
					</div>
				</div>
				<div>
					<Title size={4}>Intent</Title>
					<div className="flex flex-col gap-16d">
						<NumberField
							label="Neutral"
							message="neutral"
							defaultValue={100}
							intent={"neutral"}
							hint="neutral"
							id="neutral"
						/>
						<NumberField
							label="Secondary"
							message="secondary"
							intent="secondary"
							defaultValue={100}
							hint="Secondary"
							id="secondary"
						/>
					</div>
				</div>
				<div>
					<Title size={4}>Appearance</Title>
					<div className="flex flex-col gap-16d">
						<NumberField
							label="Solid"
							message="solid"
							defaultValue={100}
							appearance={"solid"}
							hint="Small"
							id="solid"
						/>
						<NumberField
							label="Outline"
							message="outline"
							defaultValue={100}
							appearance={"outline"}
							hint="Outline"
							id="outline"
						/>
					</div>
				</div>
				<div>
					<Title size={4}>Status</Title>
					<div className="flex flex-col gap-16d">
						<NumberField
							label="Valid"
							message="valid"
							defaultValue={100}
							hint="Valid"
							status={"valid"}
							id="valid"
						/>
						<NumberField
							label="Warning"
							message="warning"
							defaultValue={100}
							hint="Warning"
							status={"warning"}
							id="warning"
						/>
						<NumberField
							label="Invalid"
							message="invalid"
							defaultValue={100}
							hint="Invalid"
							status={"invalid"}
							id="invalid"
						/>
					</div>
				</div>
				<div>
					<Title size={4}>Shape</Title>
					<div className="flex flex-col gap-16d">
						<NumberField
							label="Square"
							message="square"
							defaultValue={100}
							hint="Square"
							shape={"square"}
							id="square"
						/>
						<NumberField
							label="Rounded"
							message="rounded"
							defaultValue={100}
							hint="Rounded"
							shape={"rounded"}
							id="rounded"
						/>
						<NumberField
							label="Circular"
							message="circular"
							defaultValue={100}
							hint="Circular"
							shape={"circular"}
							id="circular"
						/>
					</div>
				</div>
				<div>
					<Title size={4}>State</Title>
					<div className="flex flex-col gap-16d">
						<NumberField
							label="Label"
							message="Disabled"
							defaultValue={100}
							disabled
							hint="Disabled"
							id="disabled"
						/>
						<NumberField
							label="Label"
							message="Loading"
							defaultValue={100}
							loading
							hint="Loading"
							id="loading"
						/>
						<NumberField
							label="Label"
							message="Disable & Loading"
							defaultValue={100}
							disabled
							loading
							hint="Disabled & Loading"
							id="dnl"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
