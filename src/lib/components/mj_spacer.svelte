<script lang="ts">
	import type { Matrix, Percentage, Pixel } from "$lib/utils/types";

	type $$Props = {
		[x: string]: any;
		/**
		 * inner element background color
		 */
		"container-background-color"?: string;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
		/**
		 * spacer height
		 * @default 20px
		 */
		height?: string;
		/**
		 * supports up to 4 parameters
		 * @default none
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
	};
</script>

<mj-spacer {...$$props}>
	<slot />
</mj-spacer>
