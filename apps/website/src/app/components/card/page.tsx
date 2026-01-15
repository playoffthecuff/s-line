import { Card } from "@/components/ui/card/card";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { Title } from "@/components/ui/typography/title";

export default function CardPage() {
	return (
		<div
			className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d grow [&&]-pb-20"
			style={{
				width: "clamp(320px, 100%, 800px)",
			}}
		>
			<div>
				<Title>Card</Title>
				<p>A visually distinct area with content</p>
			</div>
			<div>
				<Title size={2}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/smoothed@latest add card"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<hr className="mt-16d mb-12d" />
			<Title size={2}>Variants:</Title>
			<div className="max-w-60">
				<Card>
					<Card.Header className="p-16d">
						<Card.Title>Title</Card.Title>
						<Card.Description>Description</Card.Description>
					</Card.Header>
					<hr className="text-muted opacity-64 mb-12d" />
					<Card.Content>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
							officia cupiditate similique quam ipsa aliquid, commodi
							necessitatibus explicabo enim ipsam tempora adipisci facilis ad
							eligendi soluta repudiandae dolorum est fuga!
						</p>
					</Card.Content>
					<Card.Footer className="py-16d">Footer</Card.Footer>
				</Card>
			</div>
		</div>
	);
}
