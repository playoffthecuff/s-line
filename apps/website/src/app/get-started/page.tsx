import Link from "next/link";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { defaultThemeConfig } from "./default-theme-config";

export default function Page() {
	return (
		<div className="max-w-200 mx-auto p-16d flex flex-col gap-16d">
			<h1 className="text-8d font-11d">Get Started</h1>
			<div className="relative">
				<p>Add regular dependencies:</p>
				<HighlightedCode
					code="bun add @base-ui-components/react class-variance-authority	clsx"
					language="yaml"
					lineNumbers={false}
				/>
			</div>

			<div className="relative">
				<p>Add dev dependencies:</p>
				<HighlightedCode
					code="bun add -D unocss @unocss/postcss @unocss/preset-wind4"
					language="yaml"
					lineNumbers={false}
				/>
				<p>
					Follow the Uno CSS integration{" "}
					<a
						href="https://unocss.dev/integrations/"
						target="_blank"
						rel="noopener noreferrer"
						className="underline text-primary"
					>
						instructions
					</a>
				</p>
			</div>
			<div className="relative">
				<p>
					Configure <code className="bg-neutral-2 px-8d">tsconfig.json</code>:
				</p>
				<HighlightedCode
					code={`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
					language="json"
				/>
			</div>
			<div>
				<p>
					<Link href="theme-editor" className="underline text-primary">
						Customize the theme
					</Link>{" "}
					and use the generated configuration in the{" "}
					<code className="bg-neutral-2 px-8d">uno.config.ts</code>
				</p>
			</div>
			<div className="relative">
				<p>or use the default configuration:</p>
				<div className="max-h-80 overflow-y-scroll">
					<HighlightedCode code={defaultThemeConfig} language="js" />
				</div>
			</div>
		</div>
	);
}
