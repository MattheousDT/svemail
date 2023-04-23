<script lang="ts">
	import type { Ephemeral, Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * text color
		 * @default #000000
		 */
		color?: string;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
		/**
		 * font
		 * @default Ubuntu, Helvetica, Arial, sans-serif
		 */
		"font-family"?: string;
		/**
		 * text size
		 * @default 13px
		 */
		"font-size"?: Pixel;
		/**
		 * normal/italic/oblique
		 */
		"font-style"?: string;
		/**
		 * text thickness
		 */
		"font-weight"?: number;
		/**
		 * link to redirect to on click
		 */
		href?: string;
		/**
		 * letter-spacing
		 */
		"letter-spacing"?: Pixel | Ephemeral;
		/**
		 * space between the lines
		 * @default 22px
		 */
		"line-height"?: Pixel | Percentage | number;
		/**
		 * supports up to 4 parameters
		 * @default 15px 10px
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
		 * specify the rel attribute
		 */
		rel?: string;
		/**
		 * link target on click
		 */
		target?: string;
		/**
		 * underline/overline/none
		 */
		"text-decoration"?: Property.TextDecoration;
		/**
		 * capitalize/uppercase/lowercase/none
		 * @default uppercase
		 */
		"text-transform"?: Property.TextTransform;
	};
</script>

<mj-navbar-link {...$$props}>
	<slot />
</mj-navbar-link>
