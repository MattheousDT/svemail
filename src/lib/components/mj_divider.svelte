<script lang="ts">
	import type { Ephemeral, Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * left/right/center
		 * @default center
		 */
		align?: string;
		/**
		 * divider color
		 * @default #000000
		 */
		"border-color"?: string;
		/**
		 * dashed/dotted/solid
		 * @default solid
		 */
		"border-style"?: string;
		/**
		 * divider's border width
		 * @default 4px
		 */
		"border-width"?: string;
		/**
		 * inner element background color
		 */
		"container-background-color"?: string;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
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
		 * divider width
		 * @default 100%
		 */
		width?: string;
	};
</script>

<mj-divider {...$$props}>
	<slot />
</mj-divider>
