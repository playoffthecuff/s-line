import Link from "next/link";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { defaultThemeConfig } from "./default-theme-config";
import { Title } from "@/components/ui/typography/title";

export default function Page() {
	return (
		<div
			className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d grow pb-20"
			style={{
				width: "clamp(320px, 100%, 800px)",
			}}
		>
			<Title>Get Started</Title>
			<div>
				<p>Add regular dependencies:</p>
				<HighlightedCode
					code="bun add @base-ui-components/react class-variance-authority clsx"
					language="yaml"
					lineNumbers={false}
				/>
			</div>

			<div>
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
			<div>
				<p>
					Configure <code className="bg-2 px-8d">tsconfig.json</code>:
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
					<code className="bg-2 px-8d">uno.config.ts</code>
				</p>
			</div>
			<div>
				<p>or use the default configuration:</p>

				<HighlightedCode code={defaultThemeConfig} language="js" />
			</div>
		</div>
	);
}
