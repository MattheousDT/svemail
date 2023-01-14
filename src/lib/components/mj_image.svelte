<script lang="ts">
	import type { Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * image alignment
		 * @default center
		 */
		align?: string;
		/**
		 * image description
		 */
		alt?: string;
		/**
		 * css border definition
		 * @default none
		 */
		border?: Property.Border;
		/**
		 * css border definition
		 * @default none
		 */
		"border-top"?: Property.BorderTop;
		/**
		 * css border definition
		 * @default none
		 */
		"border-bottom"?: Property.BorderBottom;
		/**
		 * css border definition
		 * @default none
		 */
		"border-left"?: Property.BorderLeft;
		/**
		 * css border definition
		 * @default none
		 */
		"border-right"?: Property.BorderRight;
		/**
		 * border radius
		 */
		"border-radius"?: Property.BorderRadius;
		/**
		 * inner element background color
		 */
		"container-background-color"?: string;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
		/**
		 * if "true", will be full width on mobile even if width is set
		 */
		"fluid-on-mobile"?: string;
		/**
		 * image height
		 * @default auto
		 */
		height?: string;
		/**
		 * link to redirect to on click
		 */
		href?: string;
		/**
		 * specify the link name attribute
		 */
		name?: string;
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
		 * specify the rel attribute
		 */
		rel?: string;
		/**
		 * set width based on query
		 */
		sizes?: string;
		/**
		 * image source
		 */
		src: string;
		/**
		 * enables to set a different image source based on the viewport
		 */
		srcset?: string;
		/**
		 * link target on click
		 * @default _blank
		 */
		target?: string;
		/**
		 * tooltip & accessibility
		 */
		title?: string;
		/**
		 * reference to image map, be careful, it isn't supported everywhere
		 */
		usemap?: string;
		/**
		 * image width
		 * @default parent width
		 */
		width?: string;
	};
</script>

<mj-image {...$$props}>
	<slot />
</mj-image>
