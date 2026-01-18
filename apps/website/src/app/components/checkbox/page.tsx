import Checkbox from "@/components/ui/checkbox/checkbox";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { Title } from "@/components/ui/typography/title";

export default function CheckboxPage() {
	return (
		<div
			className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d grow [&&]-pb-20"
			style={{
				width: "clamp(320px, 100%, 800px)",
			}}
		>
			<div>
				<Title>Checkbox</Title>
				<p>Control to accept boolean data from the user.</p>
			</div>
			<div>
				<Title size={2}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/smoothed@latest add checkbox"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<hr className="mt-16d mb-12d" />
			<Title size={2}>Variants:</Title>
			<div className="flex flex-col gap-16d items-start">
				<div className="flex flex-col gap-12d">
					<Title size={3}>Size</Title>
					<div className="grid grid-cols-[repeat(2,max-content)] items-center gap-x-12d">
						<Checkbox size="xs" className="justify-self-center" />
						Extra Small - XS
						<Checkbox size="s" className="justify-self-center" />
						Small - S
						<Checkbox size="m" className="justify-self-center" />
						Default - M
						<Checkbox size="l" />
						Large - L
						<Checkbox size="xl" />
						Extra Large - XL
					</div>
				</div>
				<div className="flex flex-col gap-12d">
					<Title size={3}>Shape</Title>
					<div className="flex items-center gap-12d ms-8d">
						<Checkbox shape="square" />
						Square
					</div>
					<div className="flex items-center gap-12d ms-8d">
						<Checkbox shape="rounded" />
						Rounded
					</div>
					<div className="flex items-center gap-12d ms-8d">
						<Checkbox shape="circular" />
						Circular
					</div>
				</div>
				<div className="flex flex-col gap-12d">
					<Title size={3}>Appearance</Title>
					<div className="grid grid-cols-[repeat(2,max-content)] gap-x-12d">
						<div className="flex items-center gap-12d ms-8d">
							<Checkbox defaultChecked />
							Outline
						</div>
						<div className="flex items-center gap-12d ms-8d">
							<Checkbox filled defaultChecked />
							Filled
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-12d">
					<Title size={3}>Status</Title>
					<div className="flex flex-col gap-12d">
						<div className="flex items-center gap-12d ms-8d">
							<Checkbox status={"valid"} />
							Success
						</div>
						<div className="flex items-center gap-12d ms-8d">
							<Checkbox status={"warning"} />
							Warning
						</div>
						<div className="flex items-center gap-12d ms-8d">
							<Checkbox status={"invalid"} />
							Error
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-12d">
					<Title size={3}>State</Title>
					<div className="flex items-center gap-12d ms-8d">
						<Checkbox disabled defaultChecked />
						Disabled
					</div>
					<div className="flex items-center gap-12d ms-8d">
						<Checkbox loading />
						Loading
					</div>
					<div className="flex items-center gap-12d ms-8d">
						<Checkbox disabled loading />
						Disabled & Loading
					</div>
				</div>
			</div>
		</div>
	);
}
