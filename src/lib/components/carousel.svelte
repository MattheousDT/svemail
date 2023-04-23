<script lang="ts">
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * horizontal alignment
		 * @default center
		 */
		align?: string;
		/**
		 * column background color
		 * @default none
		 */
		"container-background-color"?: string;
		/**
		 * border radius
		 */
		"border-radius"?: Property.BorderRadius;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
		/**
		 * width of the icons on left and right of the main image
		 * @default 44px
		 */
		"icon-width"?: string;
		/**
		 * icon on the left of the main image
		 * @default https://i.imgur.com/xTh3hln.png
		 */
		"left-icon"?: string;
		/**
		 * icon on the right of the main image
		 * @default https://i.imgur.com/os7o9kz.png
		 */
		"right-icon"?: string;
		/**
		 * border of the thumbnails
		 * @default none
		 */
		"tb-border"?: string;
		/**
		 * border-radius of the thumbnails
		 * @default none
		 */
		"tb-border-radius"?: string;
		/**
		 * css border color of the hovered thumbnail
		 * @default none
		 */
		"tb-hover-border-color"?: string;
		/**
		 * css border color of the selected thumbnail
		 * @default none
		 */
		"tb-selected-border-color"?: string;
		/**
		 * thumbnail width
		 */
		"tb-width"?: string;
		/**
		 * display or not the thumbnails
		 * @default visible
		 */
		thumbnails?: "visible" | "hidden";
	};
</script>

<mj-carousel {...$$props}>
	<slot />
</mj-carousel>
