<script lang="ts">
	import GlobalStyle from "../components/GlobalStyle.svelte";
	import { onMount } from "svelte";
	import dark from "smelte/src/dark";

	const darkMode = dark();

	onMount(async () => {
		import("@magica11y/prefers-color-scheme").then((prefersColorScheme) => {
			const preferredColorScheme = prefersColorScheme.default.default();
			darkMode.set(
				preferredColorScheme !== prefersColorScheme.colorSchemes.LIGHT
			);
		});
	});
</script>

<main>
	<GlobalStyle />
	<slot />
</main>
