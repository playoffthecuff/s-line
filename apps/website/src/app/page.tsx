import Link from "next/link";

export default function Home() {
	return (
		<div className="p-4 flex flex-col gap-4 max-w-200 mx-auto">
			<h1 className="text-8d font-11d">S Line</h1>
			<p>Copy-paste react UI components</p>
			<div className="flex flex-col gap-12d">
				<Link href="/get-started" className="text-primary underline">
					Get Started
				</Link>
				<Link href="/theme-editor" className="underline text-primary">
					Theme Editor
				</Link>
				<Link href="/components" className="underline text-primary">
					Components
				</Link>	
			</div>
		</div>
	);
}
