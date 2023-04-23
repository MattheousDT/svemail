<script lang="ts">
	type $$Props = {
		[x: string]: any;
		/**
		 * image description
		 */
		alt?: string;
		/**
		 * class name, added to the root HTML element created
		 */
		"css-class"?: string;
		/**
		 * link to redirect to on click
		 */
		href?: string;
		/**
		 * specify the rel attribute
		 */
		rel?: string;
		/**
		 * image source
		 */
		src: string;
		/**
		 * link target on click
		 * @default _blank
		 */
		target?: string;
		/**
		 * image source to have a thumbnail different than the image it's linked to
		 * @default null
		 */
		"thumbnails-src"?: string;
		/**
		 * tooltip & accessibility
		 */
		title?: string;
	};
</script>

<mj-carousel-image {...$$props}>
	<slot />
</mj-carousel-image>
