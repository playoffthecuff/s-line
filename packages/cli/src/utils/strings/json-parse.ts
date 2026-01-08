export const jsonParse = (s: string) => {
	try {
		const r = JSON.parse(s);
		return {right: r, left: null}
	} catch (e) {
		return {right: null, left: e}
	}
}