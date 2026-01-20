import { HighlightedCode } from "@/components/ui/highlighted-code";
import { Title } from "@/components/ui/typography/title";

export default function ToggleGroupPage() {
	return (
		<div className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d [&&]-pb-20">
			<div>
				<Title>Toggle Group</Title>
				<p>A user-activated, toggleable group of interactive components.</p>
			</div>
			<div>
				<Title size={5}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/smoothed@latest add toggle-group"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
		</div>
	);
}
