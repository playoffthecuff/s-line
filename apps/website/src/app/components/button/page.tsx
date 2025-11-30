import { SparkleIcon } from "@/components/ui/icons/sparkle";
import { Button } from "@/components/ui/buttons/button";
import { HighlightedCode } from "@/components/ui/highlighted-code";

export default function ButtonPage() {
	return (
		<div className="max-w-200 mx-auto p-16d flex flex-col gap-16d">
			<div>
				<h1 className="text-8d font-11d">Button</h1>
				<p>Interactive component activated by a user.</p>
			</div>
			<div className="relative">
				<h2 className="text-6d font-11d">Installation</h2>
				<HighlightedCode
					code="bunx @playoffthecuff/s-line add button"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<h2 className="text-7d font-11d -mb-2">Variants:</h2>
			<div>
				<h3 className="text-5d font-11d">Size</h3>
				<div className="flex flex-wrap gap-16d items-center">
					<Button size="s">Small - S</Button>
					<Button>Default - M</Button>
					<Button size="l">Large - L</Button>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">Aspect Ratio</h3>
				<div className="flex flex-wrap gap-16d items-center">
					<div className="flex gap-10d items-center">
						<Button aspect={"square"}>
							<SparkleIcon />
						</Button>
						<Button aspect={"square"}>Square</Button>
					</div>
					<div className="flex gap-10d items-center">
						<Button aspect={"normal"}>
							<SparkleIcon />
							<span>Normal</span>
						</Button>
					</div>
					<div className="flex gap-10d items-center">
						<Button aspect={"wide"}>
							<SparkleIcon />
							<span>Wide</span>
						</Button>
					</div>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">Intent</h3>
				<div className="flex flex-wrap gap-16d items-start">
					<Button intent={"primary"}>Primary</Button>
					<Button intent={"secondary"}>Secondary</Button>
					<Button intent={"visited"}>Visited</Button>
					<Button intent={"destructive"}>Destructive</Button>
					<Button intent={"warning"}>Warning</Button>
					<Button intent={"success"}>Success</Button>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">Appearance</h3>
				<div className="grid grid-cols-[repeat(5,max-content)] w-fit gap-16d">
					<Button appearance={"solid"}>Solid</Button>
					<Button appearance={"subtle"}>Subtle</Button>
					<Button appearance={"outline"}>Outline</Button>
					<Button appearance={"text"}>Text</Button>
					<Button appearance={"link"}>Link</Button>
					<Button appearance={"solid"} intent={"destructive"}>
						Solid
					</Button>
					<Button appearance={"subtle"} intent={"destructive"}>
						Subtle
					</Button>
					<Button appearance={"outline"} intent={"destructive"}>
						Outline
					</Button>
					<Button appearance={"text"} intent={"destructive"}>
						Text
					</Button>
					<Button appearance={"link"} intent={"destructive"}>
						Link
					</Button>
					<Button appearance={"solid"} intent={"secondary"}>
						Solid
					</Button>
					<Button appearance={"subtle"} intent={"secondary"}>
						Subtle
					</Button>
					<Button appearance={"outline"} intent={"secondary"}>
						Outline
					</Button>
					<Button appearance={"text"} intent={"secondary"}>
						Text
					</Button>
					<Button appearance={"link"} intent={"secondary"}>
						Link
					</Button>
					<Button appearance={"solid"} intent={"visited"}>
						Solid
					</Button>
					<Button appearance={"subtle"} intent={"visited"}>
						Subtle
					</Button>
					<Button appearance={"outline"} intent={"visited"}>
						Outline
					</Button>
					<Button appearance={"text"} intent={"visited"}>
						Text
					</Button>
					<Button appearance={"link"} intent={"visited"}>
						Link
					</Button>
					<Button appearance={"solid"} intent={"warning"}>
						Solid
					</Button>
					<Button appearance={"subtle"} intent={"warning"}>
						Subtle
					</Button>
					<Button appearance={"outline"} intent={"warning"}>
						Outline
					</Button>
					<Button appearance={"text"} intent={"warning"}>
						Text
					</Button>
					<Button appearance={"link"} intent={"warning"}>
						Link
					</Button>
					<Button appearance={"solid"} intent={"success"}>
						Solid
					</Button>
					<Button appearance={"subtle"} intent={"success"}>
						Subtle
					</Button>
					<Button appearance={"outline"} intent={"success"}>
						Outline
					</Button>
					<Button appearance={"text"} intent={"success"}>
						Text
					</Button>
					<Button appearance={"link"} intent={"success"}>
						Link
					</Button>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">Lifted</h3>
				<div className="flex flex-wrap gap-16d items-start">
					<Button appearance={"solid"} lifted>
						Solid
					</Button>
					<Button appearance={"subtle"} lifted>
						Subtle
					</Button>
					<Button appearance={"outline"} lifted>
						Outline
					</Button>
					<Button appearance={"text"} lifted>
						Text
					</Button>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">Shape</h3>
				<div className="flex flex-wrap gap-16d items-start">
					<Button shape={"square"}>Square</Button>
					<Button shape={"rounded"} className="before:font-11d">
						Rounded
					</Button>
					<Button shape={"circular"}>Circular</Button>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">State</h3>
				<div className="flex gap-16d mb-10 items-center">
					<div className="flex gap-8d items-center">
						<Button appearance={"solid"} className="w-fit" disabled>
							Disabled
						</Button>
					</div>
					<div className="flex gap-8d items-center">
						<Button appearance={"solid"} className="w-fit" loading>
							Disabled
						</Button>
						<Button appearance={"solid"} className="w-fit" loading />
						Loading
					</div>
				</div>
			</div>
			<div className="mb-20 flex gap-16d flex-wrap items-center"></div>
		</div>
	);
}
