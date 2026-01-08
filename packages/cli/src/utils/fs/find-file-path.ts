import { readdirSync, statSync } from "node:fs";
import path from "node:path";

export const findFilePath = (containDir: string, fileName: string): string | null => {
	const contents = readdirSync(containDir);
	for (const content of contents) {
		const filePath = path.join(containDir, content);
		const stat = statSync(filePath);
		if (stat.isDirectory()) {
			const r = findFilePath(filePath, fileName);
			if (r) return r;
		} else if (content === fileName) {
			return filePath;
		}
	}
	return null;
}