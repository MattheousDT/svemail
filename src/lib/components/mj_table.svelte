<script lang="ts">
	import type { Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * self horizontal alignment
		 * @default left
		 */
		align?: string;
		/**
		 * table external border
		 * @default none
		 */
		border?: Property.Border;
		/**
		 * space between cells
		 */
		cellpadding?: Matrix<Pixel | Percentage>;
		/**
		 * space between cell and border
		 */
		cellspacing?: string;
		/**
		 * text header & footer color
		 * @default #000000
		 */
		color?: string;
		/**
		 * inner element background color
		 */
		"container-background-color"?: string;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
		/**
		 * font name
		 * @default Ubuntu, Helvetica, Arial, sans-serif
		 */
		"font-family"?: string;
		/**
		 * font size
		 * @default 13px
		 */
		"font-size"?: Pixel;
		/**
		 * space between lines
		 * @default 22px
		 */
		"line-height"?: Pixel | Percentage | number;
		/**
		 * supports up to 4 parameters
		 * @default 10px 25px
		 */
		padding?: Matrix<Pixel | Percentage>;
		/**
		 * bottom offset
		 */
		"padding-bottom"?: Pixel | Percentage;
		/**
		 * left offset
		 */
		"padding-left"?: Pixel | Percentage;
		/**
		 * right offset
		 */
		"padding-right"?: Pixel | Percentage;
		/**
		 * top offset
		 */
		"padding-top"?: Pixel | Percentage;
		/**
		 * specify the role attribute
		 */
		role?: string;
		/**
		 * sets the table layout.
		 * @default auto
		 */
		"table-layout"?: string;
		/**
		 * table width
		 * @default 100%
		 */
		width?: string;
	};
</script>

<mj-table {...$$props}>
	<slot />
</mj-table>
