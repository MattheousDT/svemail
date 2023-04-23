# 🧡📧 svemail

Create and render email templates using the power of Svelte.

This library is effectively a wrapper around [MJML](https://mjml.io/) but with type-safety and svelte as a renderer in order to leverage props, js-in-html, shared components, etc.

When paired with SvelteKit, you very quickly have your very own email-on-demand service that you can deploy anywhere

## 🚧 Work in progress

This library is very much a work-in-progress and may be subject to API changes.

## Getting started

### Installing

```bash
npm install -D svemail
```

or alternatively use pnpm or yarn.

### Example

Svemail can be used as simple as:

> my_component.svelte

```svelte
<script>
	// We import from svemail/components in order to leverage more effective code splitting
	import Svemail from "svemail/components";

	export let name = "World";
</script>

<Svemail.Section>
	<Svemail.Column>
		<!-- These props are type checked 😱 -->
		<Svemail.Text font-style="bold" font-size="20px" color="#626262">
			Hello, {name}!
		</Svemail.Text>
	</Svemail.Column>
</Svemail.Section>
```

> index.js

```js
import { render } from "svemail";
import MyComponent from "./my_component.svelte";

const html = render(MyComponent, {
	// These props are also type checked 😎
	name: "World",
});

console.log(html);
```

You can pair this with SvelteKit in order to add api routes that dynamically render templates based on query strings or body params.
[You can view some more advanced examples here](src/routes/examples)

## Contributing

First off, thanks for taking the time to contribute! Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make will benefit everybody else and are **greatly appreciated**.

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.

Please adhere to this project's [code of conduct](CODE_OF_CONDUCT.md).

You can use [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) to check for common markdown style inconsistency.

## License

This project is licensed under the **MIT license**. Feel free to edit and distribute as you like.

See [LICENSE](LICENSE) for more information.

## Acknowledgements

Thanks for these awesome resources that were used during the development of the **svemail**:

- [Gautier Ben Aïm](https://escape.tech/blog/sveltemails) for the inspiration and initial rendering code for this project
- [MJML](https://mjml.io) for existing
- [SvelteKit](https://kit.svelte.dev)
