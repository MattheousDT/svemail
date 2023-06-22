import mjml2html from "mjml";
import type { SvelteComponent } from "svelte";

/**
 * Removes classes added to elements by the Svelte compiler because MJML does
 * not support them.
 */
const stripSvelteClasses = (html: string) => html.replaceAll(/class="s-\w+"/g, "");

/** Renders a Svelte component as email-ready HTML. */
export const render = <Props extends Record<string, any>>(
	component: SvelteComponent<Props>,
	props: Props
) => {
	// Render the component to MJML
	const { html: body, css, head } = component.render(props);

	const mjml = `<mjml>
        <mj-head>
          ${stripSvelteClasses(head)}
          <mj-style>${css.code}</mj-style>
        </mj-head>
        <mj-body>${stripSvelteClasses(body)}</mj-body>
      </mjml>`;

	// Render MJML to HTML
	const { html, errors } = mjml2html(mjml);
	if (errors.length > 0) console.warn(errors);

	return html;
};

export { default as Accordion } from "./components/accordion.svelte";
export { default as AccordionElement } from "./components/accordion_element.svelte";
export { default as AccordionText } from "./components/accordion_text.svelte";
export { default as AccordionTitle } from "./components/accordion_title.svelte";
export { default as Attributes } from "./components/attributes.svelte";
export { default as Button } from "./components/button.svelte";
export { default as Carousel } from "./components/carousel.svelte";
export { default as CarouselImage } from "./components/carousel_image.svelte";
export { default as Column } from "./components/column.svelte";
export { default as Divider } from "./components/divider.svelte";
export { default as Group } from "./components/group.svelte";
export { default as Head } from "./components/head.svelte";
export { default as Hero } from "./components/hero.svelte";
export { default as Image } from "./components/image.svelte";
export { default as Navbar } from "./components/navbar.svelte";
export { default as NavbarLink } from "./components/navbar_link.svelte";
export { default as Raw } from "./components/raw.svelte";
export { default as Section } from "./components/section.svelte";
export { default as Social } from "./components/social.svelte";
export { default as SocialElement } from "./components/social_element.svelte";
export { default as Spacer } from "./components/spacer.svelte";
export { default as Table } from "./components/table.svelte";
export { default as Text } from "./components/text.svelte";
export { default as Wrapper } from "./components/wrapper.svelte";
