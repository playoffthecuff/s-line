import Link from "next/link";

export default function ComponentsPage() {
	return (
		<main className="flex gap-16d">
			{/* <div
				className="flex flex-col gap-8d min-w-100 sticky top-12 overflow-x-hidden overflow-y-auto bg-neutral-2"
				style={{
					height: "calc(100dvh - 3rem)",
				}}
			></div> */}
			<div className="p-16d flex gap-16d self-start flex-col w-full max-w-200 mx-auto overflow-x-auto">
				<h1 className="text-8d font-11d">
					Components
				</h1>
				<Link href={"/components/button"} className="underline text-primary">
					Button
				</Link>
			</div>
		</main>
	);
}
