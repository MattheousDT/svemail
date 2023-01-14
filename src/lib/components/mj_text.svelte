<script lang="ts">
	import type { Ephemeral, Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/** @default left */
		align?: "left" | "right" | "center" | "justify";

		/** @default #000000 */
		color?: Property.Color;

		/** @default Ubuntu, Helvetica, Arial, sans-serif */
		"font-family"?: Property.FontFamily;

		/** @default 13px */
		"font-size"?: Pixel;

		/** @default 1 */
		"line-height"?: Pixel | Percentage | number;

		/** @default none */
		"letter-spacing"?: Pixel | Ephemeral;

		/** @default 10px 25px */
		padding?: Matrix<Pixel | Percentage>;

		"container-background-color"?: Property.BackgroundColor;
		"css-class"?: string;
		"font-style"?: Property.FontStyle;
		"font-weight"?: number | string;
		height?: Pixel | Percentage;
		"padding-bottom"?: Pixel | Percentage;
		"padding-left"?: Pixel | Percentage;
		"padding-right"?: Pixel | Percentage;
		"padding-top"?: Pixel | Percentage;
		"text-decoration"?: Property.TextDecoration;
		"text-transform"?: Property.TextTransform;
	};
</script>

<mj-text {...$$props}>
	<slot />
</mj-text>
