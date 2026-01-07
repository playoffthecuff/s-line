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
				<Title size={2}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/s3-line@latest add checkbox-field"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<hr className="mt-16d mb-12d" />
			<Title size={2}>Variants:</Title>
			<div className="flex flex-col gap-16d items-start w-60">
				<div>
					<Title size={3}>Options</Title>
					<div className="flex flex-col gap-16d" >
						<CheckboxField label="Only Label" id="ol" defaultChecked />
						<CheckboxField label="Hint" hint="Hint" id="hint" defaultChecked />
						<CheckboxField label="Required" required id="required" />
						<CheckboxField label="With message" message="message" id="wm" defaultChecked />
					</div>
				</div>
				<div>
					<Title size={3}>Size</Title>
					<div className="flex flex-col gap-16d">
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
							message="L - large"
							size="l"
							hint="Large"
							id="large"
						/>
					</div>
				</div>
				<div>
					<Title size={3}>Appearance</Title>
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
					<Title size={3}>Status</Title>
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
					<Title size={3}>Shape</Title>
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
					<Title size={3}>State</Title>
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
