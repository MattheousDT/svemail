<script lang="ts">
	import type { Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * hero background color
		 * @default #ffffff
		 */
		"background-color"?: Property.BackgroundColor;
		/**
		 * height of the image used, mandatory
		 * @default none
		 */
		"background-height"?: string;
		/**
		 * background image position
		 * @default center center
		 */
		"background-position"?: Property.BackgroundPosition;
		/**
		 * absolute background url
		 */
		"background-url"?: string;
		/**
		 * width of the image used, mandatory
		 * @default parent element width
		 */
		"background-width"?: string;
		/**
		 * border radius
		 */
		"border-radius"?: Property.BorderRadius;
		/**
		 * hero section height (required for fixed-height mode)
		 * @default 0px
		 */
		height?: string;
		/**
		 * choose if the height is fixed based on the height attribute or fluid
		 * @default fluid-height
		 */
		mode?: string;
		/**
		 * supports up to 4 parameters
		 * @default 0px
		 */
		padding?: Matrix<Pixel | Percentage>;
		/**
		 * bottom offset
		 * @default 0px
		 */
		"padding-bottom"?: Pixel | Percentage;
		/**
		 * left offset
		 * @default 0px
		 */
		"padding-left"?: Pixel | Percentage;
		/**
		 * right offset
		 * @default 0px
		 */
		"padding-right"?: Pixel | Percentage;
		/**
		 * top offset
		 * @default 0px
		 */
		"padding-top"?: Pixel | Percentage;
		/**
		 * content vertical alignment
		 * @default top
		 */
		"vertical-align"?: string;
	};
</script>

<mj-hero {...$$props}>
	<slot />
</mj-hero>
