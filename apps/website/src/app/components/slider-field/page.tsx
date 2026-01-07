import { SliderField } from "@/components/ui/fields/slider";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { Title } from "@/components/ui/typography/title";

export default function SliderFieldPage() {
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
				<div className="w-full">
					<Title size={3}>Options</Title>
					<div className="flex flex-col gap-16d">
						<SliderField label="Only Label" id="ol" defaultValue={50}/>
						<SliderField label="Hint" hint="Hint" id="hint" defaultValue={50}/>
						<SliderField label="With message" message="message" id="wm" defaultValue={50}/>
					</div>
				</div>
				<div className="w-full">
					<Title size={3}>Size</Title>
					<div className="flex flex-col gap-16d">
						<SliderField
							label="Small"
							message="S - Small"
							size="s"
							hint="Small"
							id="small"
							defaultValue={50}
						/>
						<SliderField
							label="Medium"
							message="M - Medium"
							size="m"
							hint="Medium"
							id="medium"
							defaultValue={50}
						/>
						<SliderField
							label="Large"
							message="L - large"
							size="l"
							hint="Large"
							id="large"
							defaultValue={50}
						/>
					</div>
				</div>
				<div className="w-full">
					<Title size={3}>Status</Title>
					<div className="flex flex-col gap-16d">
						<SliderField
							label="Valid"
							message="valid"
							hint="Valid"
							status={"valid"}
							id="valid"
							defaultValue={50}
						/>
						<SliderField
							label="Warning"
							message="warning"
							hint="Warning"
							status={"warning"}
							id="warning"
							defaultValue={50}
						/>
						<SliderField
							label="Invalid"
							message="invalid"
							hint="Invalid"
							status={"invalid"}
							id="invalid"
							defaultValue={50}
						/>
					</div>
				</div>
				<div className="w-full">
					<Title size={3}>Shape</Title>
					<div className="flex flex-col gap-16d">
						<SliderField
							label="Square"
							message="square"
							hint="Square"
							shape={"square"}
							id="square"
							defaultValue={50}
						/>
						<SliderField
							label="Rounded"
							message="rounded"
							hint="Rounded"
							shape={"rounded"}
							id="rounded"
							defaultValue={50}
						/>
						<SliderField
							label="Circular"
							message="circular"
							hint="Circular"
							shape={"circular"}
							id="circular"
							defaultValue={50}
						/>
					</div>
				</div>
				<div className="w-full">
					<Title size={3}>State</Title>
					<div className="flex flex-col gap-16d">
						<SliderField
							label="Label"
							message="Disabled"
							disabled
							hint="Disabled"
							id="disabled"
							defaultValue={50}
						/>
						<SliderField
							label="Label"
							message="Loading"
							loading
							hint="Loading"
							id="loading"
						/>
						<SliderField
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
