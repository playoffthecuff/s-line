import { NumberField } from "@/components/ui/fields/number";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { Title } from "@/components/ui/typography/title";

export default function TextFieldPage() {
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
					Labeled control, with an optional
					message and hint. Accepts number data from the user.
				</p>
			</div>
			<div>
				<Title size={2}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/s3-line@latest add number-field"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<hr className="mt-16d mb-12d" />
			<Title size={2}>Variants:</Title>
			<div className="flex flex-col gap-16d items-start w-60">
				<div>
					<Title size={3}>Options</Title>
					<div className="flex flex-col gap-16d">
						<NumberField label="Only Label" defaultValue={100} id="ol" />
						<NumberField
							label="Hint"
							defaultValue={100}
							hint="Hint"
							id="hint"
						/>
						<NumberField
							label="Required"
							required
							id="required"
						/>
						<NumberField
							label="With message"
							message="message"
							defaultValue={100}
							id="wm"
						/>
					</div>
				</div>
				<div>
					<Title size={3}>Size</Title>
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
				<div>
					<Title size={3}>Color</Title>
					<div className="flex flex-col gap-16d">
						<NumberField
							label="Neutral"
							message="neutral"
							defaultValue={100}
							color={"neutral"}
							hint="neutral"
							id="neutral"
						/>
						<NumberField
							label="Primary"
							message="primary"
							defaultValue={100}
							color="primary"
							hint="Primary"
							id="primary"
						/>
						<NumberField
							label="Secondary"
							message="secondary"
							color="secondary"
							defaultValue={100}
							hint="Secondary"
							id="secondary"
						/>
					</div>
				</div>
				<div>
					<Title size={3}>Appearance</Title>
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
					<Title size={3}>Status</Title>
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
					<Title size={3}>Shape</Title>
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
					<Title size={3}>State</Title>
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
