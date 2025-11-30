export function debounce<T extends (...args: any[]) => any>(fn: T, delayMs: number) {
	let timerId: NodeJS.Timeout | undefined;
	const r =  (...args: Parameters<T>) => {
		if (timerId !== undefined) clearTimeout(timerId);
		timerId = setTimeout(() => fn(...args), delayMs); 
	};
	r.cancel = () => clearTimeout(timerId);
	return r;
}