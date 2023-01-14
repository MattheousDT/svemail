<script lang="ts">
	import type { Matrix, Percentage, Pixel } from "$lib/utils/types";
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

<mj-accordion-title {...$$props}>
	<slot />
</mj-accordion-title>
