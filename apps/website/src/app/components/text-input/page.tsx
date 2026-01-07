import { HighlightedCode } from "@/components/ui/highlighted-code";
import { TextInput } from "@/components/ui/input/text";
import { Title } from "@/components/ui/typography/title";

export default function InputPage() {
	return (
		<div
			className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d grow [&&]-pb-20"
			style={{
				width: "clamp(320px, 100%, 800px)",
			}}
		>
			<div>
				<Title>Text Input</Title>
				<p>Control that accepts string data from the user.</p>
			</div>
			<div>
				<Title size={2}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/s3-line@latest add text-input"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<hr className="mt-16d mb-12d" />
			<Title size={2}>Variants:</Title>
			<div>
				<Title size={3}>Size</Title>
				<div className="flex flex-col gap-16d w-60">
					<TextInput placeholder="S" size={"s"} name="s" />
					<TextInput placeholder="M" size={"m"} name="m" />
					<TextInput placeholder="L" size={"l"} name="l" />
				</div>
			</div>
			<div>
				<Title size={3}>Shape</Title>
				<div className="flex flex-col gap-16d w-60">
					<TextInput placeholder="Square" shape={"square"} name="square" />
					<TextInput placeholder="Rounded" shape={"rounded"} name="rounded" />
					<TextInput
						placeholder="Circular"
						shape={"circular"}
						name="circular"
					/>
				</div>
			</div>
			<div>
				<Title size={3}>Password Type</Title>
				<div className="flex flex-col gap-16d w-60">
					<TextInput defaultValue="secret" type="password" name="password" />
				</div>
			</div>
			<div>
				<Title size={3}>Status</Title>
				<div className="flex flex-col gap-16d w-60">
					<TextInput
						defaultValue="Valid"
						type="text"
						status={"valid"}
						name="valid"
					/>
					<TextInput
						defaultValue="Warning"
						type="text"
						status={"warning"}
						name="warning"
					/>
					<TextInput
						defaultValue="Error"
						type="text"
						status={"invalid"}
						minLength={99999999}
						required
						data-invalid
						name="invalid"
					/>
				</div>
			</div>
			<div>
				<Title size={3}>State</Title>
				<div className="flex flex-col gap-16d w-60">
					<TextInput placeholder="Disabled" disabled />
					<label htmlFor="">
						Loading
						<TextInput placeholder="Loading" loading />
					</label>
					<label htmlFor="">
						Disabled & Loading
						<TextInput placeholder="Loading" loading disabled />
					</label>
				</div>
			</div>
		</div>
	);
}
