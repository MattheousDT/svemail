<script lang="ts">
	import type { Ephemeral, Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * background color
		 */
		"background-color"?: Property.BackgroundColor;
		/**
		 * text color
		 */
		color?: string;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
		/**
		 * font family
		 * @default Ubuntu, Helvetica, Arial, sans-serif
		 */
		"font-family"?: string;
		/**
		 * font size
		 * @default 13px
		 */
		"font-size"?: Pixel;
		/**
		 * text thickness
		 */
		"font-weight"?: number;
		/**
		 * letter spacing
		 * @default none
		 */
		"letter-spacing"?: Pixel | Ephemeral;
		/**
		 * space between the lines
		 * @default 1
		 */
		"line-height"?: Pixel | Percentage | number;
		/**
		 * padding
		 * @default 16px
		 */
		padding?: Matrix<Pixel | Percentage>;
		/**
		 * padding bottom
		 */
		"padding-bottom"?: Pixel | Percentage;
		/**
		 * padding left
		 */
		"padding-left"?: Pixel | Percentage;
		/**
		 * padding right
		 */
		"padding-right"?: Pixel | Percentage;
		/**
		 * padding top
		 */
		"padding-top"?: Pixel | Percentage;
	};
</script>

<mj-accordion-text {...$$props}>
	<slot />
</mj-accordion-text>
