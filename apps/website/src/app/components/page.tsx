import { Link } from "@/components/ui/link/link";
import { Title } from "@/components/ui/typography/title";

export default function ComponentsPage() {
	return (
		<div
			className="max-w-200 min-h-full bg-1 mx-auto p-18d flex gap-10d self-start flex-col w-full overflow-x-auto grow"
			style={{ width: "clamp(320px, 100%, 800px)" }}
		>
			<Title>Components</Title>
			<Link href={"/components/button"}>Button</Link>
			<Link href={"/components/toggle"}>Toggle</Link>
			<Link href={"/components/text-input"}>Text Input</Link>
			<Link href={"/components/number-input"}>Number Input</Link>
			<Link href={"/components/intent-message"}>Intent Message</Link>
			<Link href={"/components/label"}>Label</Link>
			<Link href={"/components/select"}>Select</Link>
			<Link href={"/components/checkbox"}>Checkbox</Link>
			<Link href={"/components/slider"}>Slider</Link>
			<Link href={"/components/text-field"}>Text Field</Link>
			<Link href={"/components/number-field"}>Number Field</Link>
			<Link href={"/components/checkbox-field"}>Checkbox Field</Link>
			<Link href={"/components/select-field"}>Select Field</Link>
			<Link href={"/components/slider-field"}>Slider Field</Link>
			<Link href={"/components/icons"}>Icons</Link>
		</div>
	);
}
