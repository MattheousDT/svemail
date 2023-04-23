<script lang="ts">
	import type { Property } from "csstype";

	type $$Props = {
		[x: string]: any;
		/**
		 * background color
		 */
		"background-color"?: Property.BackgroundColor;
		/**
		 * border
		 * @default affects each horizontal border in the accordion except the top one
		 */
		border?: Property.Border;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
		/**
		 * font
		 * @default Ubuntu, Helvetica, Arial, sans-serif
		 */
		"font-family"?: string;
		/**
		 * icon alignment
		 * @default middle
		 */
		"icon-align"?: string;
		/**
		 * icon width
		 * @default 32px
		 */
		"icon-height"?: string;
		/**
		 * display icon left or right
		 * @default right
		 */
		"icon-position"?: string;
		/**
		 * alt text when accordion is unwrapped
		 * @default -
		 */
		"icon-unwrapped-alt"?: string;
		/**
		 * icon when accordion is unwrapped
		 * @default https://i.imgur.com/w4uTygT.png
		 */
		"icon-unwrapped-url"?: string;
		/**
		 * icon height
		 * @default 32px
		 */
		"icon-width"?: string;
		/**
		 * alt text when accordion is wrapped
		 * @default +
		 */
		"icon-wrapped-alt"?: string;
		/**
		 * icon when accordion is wrapped
		 * @default https://i.imgur.com/bIXv1bk.png
		 */
		"icon-wrapped-url"?: string;
	};
</script>

<mj-accordion-element {...$$props}>
	<slot />
</mj-accordion-element>
