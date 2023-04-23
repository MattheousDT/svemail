<script lang="ts">
	import type { Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * left/right/center
		 * @default center
		 */
		align?: "left" | "right" | "center";
		/**
		 * border radius
		 * @default 3px
		 */
		"border-radius"?: Property.BorderRadius;
		/**
		 * text color
		 * @default #333333
		 */
		color?: string;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
		/**
		 * inner element background color
		 */
		"container-background-color"?: string;
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
		 * font style
		 * @default normal
		 */
		"font-style"?: string;
		/**
		 * font weight
		 * @default normal
		 */
		"font-weight"?: string;
		/**
		 * icon height, overrides icon-size
		 * @default icon-size
		 */
		"icon-height"?: string;
		/**
		 * icon size (width and height)
		 * @default 20px
		 */
		"icon-size"?: string;
		/**
		 * social network surrounding padding
		 * @default 4px
		 */
		"inner-padding"?: string;
		/**
		 * space between lines
		 * @default 22px
		 */
		"line-height"?: Pixel | Percentage | number;
		/**
		 * vertical/horizontal
		 * @default horizontal
		 */
		mode?: "vertical" | "horizontal";
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
		 * padding around the icons
		 * @default 0px
		 */
		"icon-padding"?: string;
		/**
		 * padding around the texts
		 * @default 4px 4px 4px 0
		 */
		"text-padding"?: string;
		/**
		 * underline/overline/none
		 * @default none
		 */
		"text-decoration"?: Property.TextDecoration;
	};
</script>

<mj-social {...$$props}>
	<slot />
</mj-social>
