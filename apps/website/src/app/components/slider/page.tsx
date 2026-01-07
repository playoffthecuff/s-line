import { HighlightedCode } from "@/components/ui/highlighted-code";
import { Slider } from "@/components/ui/slider/slider";
import { Title } from "@/components/ui/typography/title";

export default function SliderPage() {
	return (
		<div
			className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d grow [&&]-pb-20"
			style={{
				width: "clamp(320px, 100%, 800px)",
			}}
		>
			<div>
				<Title>Slider</Title>
				<p>
					An interactive control that accepts range's number(s) from the user.
				</p>
			</div>
			<div>
				<Title size={2}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/s3-line@latest add slider"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<hr className="mt-16d mb-12d" />
			<Title size={2}>Variants:</Title>
			<div className="flex flex-col gap-16d items-start">
				<div className="flex flex-col gap-12d">
					<Title size={3}>Type</Title>
					<div className="grid grid-cols-[repeat(2,max-content)] gap-16d items-center">
						<Slider defaultValue={50} /> Single
						<Slider defaultValue={[25, 75]} /> Range
					</div>
				</div>
				<div className="flex flex-col gap-12d">
					<Title size={3}>Size</Title>
					<div className="grid grid-cols-[repeat(2,max-content)] gap-16d items-center">
						<Slider defaultValue={50} size={"s"}/> S - Small
						<Slider defaultValue={50} size={"m"}/> M - Medium
						<Slider defaultValue={50} size={"l"}/> L - Large
					</div>
				</div>
				<div className="flex flex-col gap-12d">
					<Title size={3}>Shape</Title>
					<div className="grid grid-cols-[repeat(2,max-content)] gap-16d items-center">
						<Slider defaultValue={50} shape={"square"} /> Square
						<Slider defaultValue={50} shape={"rounded"} /> Rounded
						<Slider defaultValue={50} shape={"circular"} /> L - Large
					</div>
				</div>
				<div className="flex flex-col gap-12d">
					<Title size={3}>Status</Title>
					<div className="grid grid-cols-[repeat(2,max-content)] gap-16d items-center">
						<Slider defaultValue={50} status={"valid"}/> Valid
						<Slider defaultValue={50} status={"warning"}/> Warning
						<Slider defaultValue={50} status={"invalid"}/> Invalid
					</div>
				</div>
				<div className="flex flex-col gap-12d">
					<Title size={3}>State</Title>
					<div className="grid grid-cols-[repeat(2,max-content)] gap-16d items-center">
						<Slider defaultValue={50} disabled/> Disabled
						<Slider defaultValue={50} loading /> Loading
						<Slider defaultValue={50} disabled loading/> Disabled & Loading
					</div>
				</div>
			</div>
		</div>
	);
}
