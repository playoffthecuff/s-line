import { CheckboxField } from "@/components/ui/fields/checkbox";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { Title } from "@/components/ui/typography/title";

export default function CheckboxFieldPage() {
	return (
		<div
			className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d grow [&&]-pb-20"
			style={{
				width: "clamp(320px, 100%, 800px)",
			}}
		>
			<div>
				<Title>Checkbox Field</Title>
				<p>
					Labeled control, with an optional message and hint. Accepts boolean
					data from the user.
				</p>
			</div>
			<div>
				<Title size={5}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/smoothed@latest add checkbox-field"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<hr className="mt-16d mb-12d" />
			<Title size={5}>Variants:</Title>
			<div className="flex flex-col gap-16d items-start w-60">
				<div>
					<Title size={4}>Options</Title>
					<div className="flex flex-col gap-16d">
						<CheckboxField label="Only Label" id="ol" defaultChecked />
						<CheckboxField label="Hint" hint="Hint" id="hint" defaultChecked />
						<CheckboxField label="Required" required id="required" />
						<CheckboxField
							label="With message"
							message="message"
							id="wm"
							defaultChecked
						/>
						<CheckboxField
							label="Popover message"
							popoverMessage="Popover message"
							id="pm"
							defaultChecked
						/>
					</div>
				</div>
				<div>
					<Title size={4}>Size</Title>
					<div className="flex flex-col gap-16d">
						<CheckboxField
							label="Extra Small"
							message="XS - Extra Small"
							size="xs"
							hint="Extra Small"
							id="x_small"
						/>
						<CheckboxField
							label="Small"
							message="S - Small"
							size="s"
							hint="Small"
							id="small"
						/>
						<CheckboxField
							label="Medium"
							message="M - Medium"
							size="m"
							hint="Medium"
							id="medium"
						/>
						<CheckboxField
							label="Large"
							message="L - Large"
							size="l"
							hint="Large"
							id="large"
						/>
						<CheckboxField
							label="Extra Large"
							message="XL - Extra Large"
							size="xl"
							hint="Extra Large"
							id="x_large"
						/>
					</div>
				</div>
				<div>
					<Title size={4}>Appearance</Title>
					<div className="flex flex-col gap-16d">
						<CheckboxField
							label="Outline"
							message="outline"
							hint="Outline"
							id="outline"
							defaultChecked
						/>
						<CheckboxField
							label="Filled"
							message="filled"
							hint="Small"
							id="filled"
							filled
							defaultChecked
						/>
					</div>
				</div>
				<div>
					<Title size={4}>Intent</Title>
					<div className="flex flex-col gap-16d">
						<CheckboxField
							label="Neutral"
							message="neutral"
							hint="Neutral"
							id="neutral"
							intent={"neutral"}
						/>
						<CheckboxField
							label="Secondary"
							message="secondary"
							hint="Secondary"
							id="secondary"
							intent={"secondary"}
						/>
					</div>
				</div>
				<div>
					<Title size={4}>Status</Title>
					<div className="flex flex-col gap-16d">
						<CheckboxField
							label="Valid"
							message="valid"
							hint="Valid"
							status={"valid"}
							id="valid"
						/>
						<CheckboxField
							label="Warning"
							message="warning"
							hint="Warning"
							status={"warning"}
							id="warning"
						/>
						<CheckboxField
							label="Invalid"
							message="invalid"
							hint="Invalid"
							status={"invalid"}
							id="invalid"
						/>
					</div>
				</div>
				<div>
					<Title size={4}>Shape</Title>
					<div className="flex flex-col gap-16d">
						<CheckboxField
							label="Square"
							message="square"
							hint="Square"
							shape={"square"}
							id="square"
						/>
						<CheckboxField
							label="Rounded"
							message="rounded"
							hint="Rounded"
							shape={"rounded"}
							id="rounded"
						/>
						<CheckboxField
							label="Circular"
							message="circular"
							hint="Circular"
							shape={"circular"}
							id="circular"
						/>
					</div>
				</div>
				<div>
					<Title size={4}>State</Title>
					<div className="flex flex-col gap-16d">
						<CheckboxField
							label="Label"
							message="Disabled"
							disabled
							hint="Disabled"
							id="disabled"
							defaultChecked
						/>
						<CheckboxField
							label="Label"
							message="Loading"
							loading
							hint="Loading"
							id="loading"
						/>
						<CheckboxField
							label="Label"
							message="Disable & Loading"
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
