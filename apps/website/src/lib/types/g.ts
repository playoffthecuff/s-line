export type RequiredField<T extends Record<string, any>, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type SwapField<T extends Record<string, any>, K extends keyof T, S> = {[P in keyof T]: P extends K ? S : T[P]};
export type SwapToRequiredField<T extends Record<string, any>, K extends keyof T, S> = Omit<T, K> & Required<{[P in K]: S}>;

interface Test {
	a?: number;
	b: string;
}