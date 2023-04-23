<script lang="ts">
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * align content left/center/right
		 * @default center
		 */
		align?: string;
		/**
		 * base url for children components
		 */
		"base url"?: string;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
		/**
		 * activate the hamburger navigation on mobile if the value is hamburger
		 */
		hamburger?: string;
		/**
		 * hamburger icon alignment, left/center/right (hamburger mode required)
		 * @default center
		 */
		"ico-align"?: string;
		/**
		 * char code for a custom close icon (hamburger mode required)
		 * @default 8855
		 */
		"ico-close"?: string;
		/**
		 * hamburger icon color (hamburger mode required)
		 * @default #000000
		 */
		"ico-color"?: string;
		/**
		 * hamburger icon font (only on hamburger mode)
		 * @default Ubuntu, Helvetica, Arial, sans-serif
		 */
		"ico-font-family"?: string;
		/**
		 * hamburger icon size (hamburger mode required)
		 * @default 30px
		 */
		"ico-font-size"?: string;
		/**
		 * hamburger icon line height (hamburger mode required)
		 * @default 30px
		 */
		"ico-line-height"?: string;
		/**
		 * char code for a custom open icon (hamburger mode required)
		 * @default 9776
		 */
		"ico-open"?: string;
		/**
		 * hamburger icon padding, supports up to 4 parameters (hamburger mode required)
		 * @default 10px
		 */
		"ico-padding"?: string;
		/**
		 * hamburger icon bottom offset (hamburger mode required)
		 * @default 10px
		 */
		"ico-padding-bottom"?: string;
		/**
		 * hamburger icon left offset (hamburger mode required)
		 * @default 10px
		 */
		"ico-padding-left"?: string;
		/**
		 * hamburger icon right offset (hamburger mode required)
		 * @default 10px
		 */
		"ico-padding-right"?: string;
		/**
		 * hamburger icon top offset (hamburger mode required)
		 * @default 10px
		 */
		"ico-padding-top"?: string;
		/**
		 * hamburger icon text decoration none/underline/overline/line-through (hamburger mode required)
		 * @default none
		 */
		"ico-text-decoration"?: string;
		/**
		 * hamburger icon text transformation none/capitalize/uppercase/lowercase (hamburger mode required)
		 * @default none
		 */
		"ico-text-transform"?: string;
	};
</script>

<mj-navbar {...$$props}>
	<slot />
</mj-navbar>
