import { HighlightedCode } from "@/components/ui/highlighted-code";
import { Select } from "@/components/ui/select/select";
import { Title } from "@/components/ui/typography/title";

const items = [
	{ label: "Choose", value: null },
	{ label: "One", value: 1 },
	{ label: "Two", value: 2 },
	{ label: "Three", value: 3 },
	{ label: "Four", value: 4 },
	{ label: "Five", value: 5 },
];

export default function SelectPage() {
	return (
		<div
			className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d grow [&&]-pb-20"
			style={{
				width: "clamp(320px, 100%, 800px)",
			}}
		>
			<div>
				<Title>Select</Title>
				<p>Control that provides a menu with options to choose from.</p>
			</div>
			<div>
				<Title size={2}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/s3-line@latest add select"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<hr className="mt-16d mb-12d" />
			<Title size={2}>Variants:</Title>
			<div className="flex flex-col gap-16d items-start">
				<div className="flex flex-col gap-12d">
					<Title size={3}>Size</Title>
					<Select items={items} size={"s"} />
					<Select items={items} size={"m"} />
					<Select items={items} size={"l"} />
				</div>
				<div className="flex flex-col gap-12d">
					<Title size={3}>Shape</Title>
					<Select items={items} shape={"square"} />
					<Select items={items} shape={"rounded"} />
					<Select items={items} shape={"circular"} />
				</div>
				<div className="flex flex-col gap-12d">
					<Title size={3}>Status</Title>
					<div>
						Valid
						<Select items={items} status={"valid"} />
					</div>
					<div>
						Warning
						<Select items={items} status={"warning"} />
					</div>
					<div>
						Invalid
						<Select items={items} status={"invalid"} />
					</div>
				</div>
				<div className="flex flex-col gap-12d">
					<Title size={3}>State</Title>
					<div>
						Disabled
						<Select items={items} disabled />
					</div>
					<div>
						Loading
						<Select items={items} loading />
					</div>
					<div>
						Disabled & Loading
						<Select items={items} disabled loading />
					</div>
				</div>
			</div>
		</div>
	);
}
