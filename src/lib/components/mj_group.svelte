<script lang="ts">
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * group width
		 * @default (100 / number of non-raw elements in section)%
		 */
		width?: string;
		/**
		 * middle/top/bottom
		 * @default top
		 */
		"vertical-align"?: string;
		/**
		 * background color for a group
		 */
		"background-color"?: Property.BackgroundColor;
		/**
		 * set the display order of direct children
		 * @default ltr
		 */
		direction?: string;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
	};
</script>

<mj-group {...$$props}>
	<slot />
</mj-group>
