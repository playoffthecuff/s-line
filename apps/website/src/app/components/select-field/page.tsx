import { SelectField } from "@/components/ui/fields/select";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { Title } from "@/components/ui/typography/title";

const items = [
	{ label: "Choose", value: null },
	{ label: "One", value: 1 },
	{ label: "Two", value: 2 },
	{ label: "Three", value: 3 },
	{ label: "Four", value: 4 },
	{ label: "Five", value: 5 },
];

export default function SelectFieldPage() {
	return (
		<div
			className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d grow [&&]-pb-20"
			style={{
				width: "clamp(320px, 100%, 800px)",
			}}
		>
			<div>
				<Title>Select Field</Title>
				<p>
					Labeled control that provides a menu with options to choose from with
					an optional message and hint.
				</p>
			</div>
			<div>
				<Title size={2}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/s3-line@latest add select-field"
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
						<SelectField label="Only Label" id="ol" items={items} />
						<SelectField label="Hint" items={items} hint="Hint" id="hint" />
						<SelectField
							label="Required"
							required
							id="required"
							items={items}
						/>
						<SelectField
							label="With message"
							message="message"
							items={items}
							id="wm"
						/>
					</div>
				</div>
				<div>
					<Title size={3}>Size</Title>
					<div className="flex flex-col gap-16d">
						<SelectField
							label="Small"
							message="S - Small"
							size="s"
							items={items}
							hint="Small"
							id="small"
						/>
						<SelectField
							label="Medium"
							message="M - Medium"
							size="m"
							items={items}
							hint="Medium"
							id="medium"
						/>
						<SelectField
							label="Large"
							message="L - large"
							size="l"
							items={items}
							hint="Large"
							id="large"
						/>
					</div>
				</div>
				<div>
					<Title size={3}>Status</Title>
					<div className="flex flex-col gap-16d">
						<SelectField
							label="Valid"
							message="valid"
							items={items}
							hint="Valid"
							status={"valid"}
							id="valid"
						/>
						<SelectField
							label="Warning"
							message="warning"
							items={items}
							hint="Warning"
							status={"warning"}
							id="warning"
						/>
						<SelectField
							label="Invalid"
							message="invalid"
							items={items}
							hint="Invalid"
							status={"invalid"}
							id="invalid"
						/>
					</div>
				</div>
				<div>
					<Title size={3}>Shape</Title>
					<div className="flex flex-col gap-16d">
						<SelectField
							label="Square"
							message="square"
							items={items}
							hint="Square"
							shape={"square"}
							id="square"
						/>
						<SelectField
							label="Rounded"
							message="rounded"
							items={items}
							hint="Rounded"
							shape={"rounded"}
							id="rounded"
						/>
						<SelectField
							label="Circular"
							message="circular"
							items={items}
							hint="Circular"
							shape={"circular"}
							id="circular"
						/>
					</div>
				</div>
				<div>
					<Title size={3}>State</Title>
					<div className="flex flex-col gap-16d">
						<SelectField
							label="Label"
							message="Disabled"
							items={items}
							disabled
							hint="Disabled"
							id="disabled"
						/>
						<SelectField
							label="Label"
							message="Loading"
							items={items}
							loading
							hint="Loading"
							id="loading"
						/>
						<SelectField
							label="Label"
							message="Disable & Loading"
							items={items}
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
