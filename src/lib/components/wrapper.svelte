<script lang="ts">
	import type { Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * section color
		 */
		"background-color"?: Property.BackgroundColor;
		/**
		 * css background position (see outlook limitations in mj-section doc)
		 * @default top center
		 */
		"background-position"?: Property.BackgroundPosition;
		/**
		 * css background position x
		 * @default none
		 */
		"background-position-x"?: Property.BackgroundPositionX;
		/**
		 * css background position y
		 * @default none
		 */
		"background-position-y"?: Property.BackgroundPositionY;
		/**
		 * css background repeat
		 * @default repeat
		 */
		"background-repeat"?: Property.BackgroundRepeat;
		/**
		 * css background size
		 * @default auto
		 */
		"background-size"?: Property.BackgroundSize;
		/**
		 * background url
		 */
		"background-url"?: string;
		/**
		 * css border format
		 * @default none
		 */
		border?: Property.Border;
		/**
		 * css border format
		 */
		"border-bottom"?: Property.BorderBottom;
		/**
		 * css border format
		 */
		"border-left"?: Property.BorderLeft;
		/**
		 * border radius
		 */
		"border-radius"?: Property.BorderRadius;
		/**
		 * css border format
		 */
		"border-right"?: Property.BorderRight;
		/**
		 * css border format
		 */
		"border-top"?: Property.BorderTop;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
		/**
		 * make the wrapper full-width
		 */
		"full-width"?: boolean;
		/**
		 * supports up to 4 parameters
		 * @default 20px 0
		 */
		padding?: Matrix<Pixel | Percentage>;
		/**
		 * section bottom offset
		 */
		"padding-bottom"?: Pixel | Percentage;
		/**
		 * section left offset
		 */
		"padding-left"?: Pixel | Percentage;
		/**
		 * section right offset
		 */
		"padding-right"?: Pixel | Percentage;
		/**
		 * section top offset
		 */
		"padding-top"?: Pixel | Percentage;
		/**
		 * css text-align
		 * @default center
		 */
		"text-align"?: string;
	};
</script>

<mj-wrapper {...$$props}>
	<slot />
</mj-wrapper>
