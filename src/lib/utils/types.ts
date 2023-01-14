export type Pixel = `${number}px`;
export type Percentage = `${number}%`;
export type Ephemeral = `${number}em`;

export type Matrix<T extends string | number> =
	| T
	| `${T} ${T}`
	| `${T} ${T} ${T}`
	| `${T} ${T} ${T} ${T}`;
