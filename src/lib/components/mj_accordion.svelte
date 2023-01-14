<script lang="ts">
	import type { Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * CSS border format
		 * @default 2px solid black
		 */
		border?: Property.Border;
		/**
		 * background-color of the cell
		 */
		"container-background-color"?: string;
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
		 * icon alignment
		 * @default middle
		 */
		"icon-align"?: string;
		/**
		 * icon width
		 * @default 32px
		 */
		"icon-height"?: string;
		/**
		 * display icon left or right
		 * @default right
		 */
		"icon-position"?: string;
		/**
		 * alt text when accordion is unwrapped
		 * @default -
		 */
		"icon-unwrapped-alt"?: string;
		/**
		 * icon when accordion is unwrapped
		 * @default https://i.imgur.com/w4uTygT.png
		 */
		"icon-unwrapped-url"?: string;
		/**
		 * icon height
		 * @default 32px
		 */
		"icon-width"?: string;
		/**
		 * alt text when accordion is wrapped
		 * @default +
		 */
		"icon-wrapped-alt"?: string;
		/**
		 * icon when accordion is wrapped
		 * @default https://i.imgur.com/bIXv1bk.png
		 */
		"icon-wrapped-url"?: string;
		/**
		 * padding
		 * @default 10px 25px
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

<mj-accordion {...$$props}>
	<slot />
</mj-accordion>
