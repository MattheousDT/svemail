<script lang="ts">
	import type { Ephemeral, Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * horizontal alignment
		 * @default center
		 */
		align?: string;
		/**
		 * button background-color
		 * @default #414141
		 */
		"background-color"?: Property.BackgroundColor;
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
		 * @default 3px
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
		 * text color
		 * @default #ffffff
		 */
		color?: string;
		/**
		 * button container background color
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
		 * @default normal
		 */
		"font-weight"?: number;
		/**
		 * button height
		 */
		height?: string;
		/**
		 * link to be triggered when the button is clicked
		 */
		href?: string;
		/**
		 * inner button padding
		 * @default 10px 25px
		 */
		"inner-padding"?: string;
		/**
		 * letter-spacing
		 */
		"letter-spacing"?: Pixel | Ephemeral;
		/**
		 * line-height on link
		 * @default 120%
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
		 * specify the rel attribute for the button link
		 */
		rel?: string;
		/**
		 * specify the target attribute for the button link
		 * @default _blank
		 */
		target?: string;
		/**
		 * text-align button content
		 * @default none
		 */
		"text-align"?: string;
		/**
		 * underline/overline/none
		 * @default none
		 */
		"text-decoration"?: Property.TextDecoration;
		/**
		 * capitalize/uppercase/lowercase
		 * @default none
		 */
		"text-transform"?: Property.TextTransform;
		/**
		 * tooltip & accessibility
		 */
		title?: string;
		/**
		 * vertical alignment
		 * @default middle
		 */
		"vertical-align"?: string;
		/**
		 * button width
		 */
		width?: string;
	};
</script>

<mj-button {...$$props}>
	<slot />
</mj-button>
