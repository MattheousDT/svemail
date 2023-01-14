<script lang="ts">
	import type { Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * background color for a column
		 */
		"background-color"?: Property.BackgroundColor;
		/**
		 * requires: a padding, inner background color for column
		 */
		"inner-background-color"?: string;
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
		 * css border format
		 */
		"border-right"?: Property.BorderRight;
		/**
		 * css border format
		 */
		"border-top"?: Property.BorderTop;
		/**
		 * border radius
		 */
		"border-radius"?: Property.BorderRadius;
		/**
		 * css border format
		 */
		"inner-border"?: string;
		/**
		 * css border format ; requires a padding
		 */
		"inner-border-bottom"?: string;
		/**
		 * css border format ; requires a padding
		 */
		"inner-border-left"?: string;
		/**
		 * css border format ; requires a padding
		 */
		"inner-border-right"?: string;
		/**
		 * css border format ; requires a padding
		 */
		"inner-border-top"?: string;
		/**
		 * border radius ; requires a padding
		 */
		"inner-border-radius"?: string;
		/**
		 * column width
		 * @default (100 / number of non-raw elements in section)%
		 */
		width?: string;
		/**
		 * middle/top/bottom (note: middle works only when adjacent mj-column is also set to middle)
		 * @default top
		 */
		"vertical-align"?: string;
		/**
		 * supports up to 4 parameters
		 */
		padding?: Matrix<Pixel | Percentage>;
		/**
		 * section top offset
		 */
		"padding-top"?: Pixel | Percentage;
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
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
	};
</script>

<mj-column {...$$props}>
	<slot />
</mj-column>
