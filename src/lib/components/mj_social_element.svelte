<script lang="ts">
	import type { Matrix, Percentage, Pixel } from "$lib/utils/types";
	import type { Property } from "csstype";

	type NetworkShare =
		| "facebook"
		| "twitter"
		| "google"
		| "pinterest"
		| "linkedin"
		| "tumblr"
		| "xing";
	type NetworkNoShare =
		| "github"
		| "instagram"
		| "web"
		| "snapchat"
		| "youtube"
		| "vimeo"
		| "medium"
		| "soundcloud"
		| "dribbble"
		| `${NetworkShare}-noshare`;

	type $$Props = {
		[x: string]: any;
		/**
		 * left/right/center
		 * @default center
		 */
		align?: string;
		/**
		 * image alt attribute
		 * @default none
		 */
		alt?: string;
		/**
		 * icon color
		 * @default Each social name has its own default
		 */
		"background-color"?: Property.BackgroundColor;
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
		 * button redirection url
		 * @default none
		 */
		href?: string;
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
		 * space between lines
		 * @default 22px
		 */
		"line-height"?: Pixel | Percentage | number;
		/**
		 * social network name, see supported list below
		 * @default N/A
		 */
		name?: NetworkShare | NetworkNoShare;
		/**
		 * supports up to 4 parameters
		 * @default 4px
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
		 * padding around the icon
		 * @default 0px
		 */
		"icon-padding"?: string;
		/**
		 * padding around the text
		 * @default 4px 4px 4px 0
		 */
		"text-padding"?: string;
		/**
		 * set icon width based on query
		 */
		sizes?: string;
		/**
		 * image source
		 * @default Each social name has its own default
		 */
		src?: string;
		/**
		 * set a different image source based on the viewport
		 */
		srcset?: string;
		/**
		 * specify the rel attribute for the link
		 */
		rel?: string;
		/**
		 * link target
		 * @default _blank
		 */
		target?: string;
		/**
		 * img title attribute
		 * @default none
		 */
		title?: string;
		/**
		 * underline/overline/none
		 * @default none
		 */
		"text-decoration"?: Property.TextDecoration;
		/**
		 * top/middle/bottom
		 * @default middle
		 */
		"vertical-align"?: string;
	};
</script>

<mj-social-element {...$$props}>
	<slot />
</mj-social-element>
