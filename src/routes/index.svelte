<script lang="ts">
	import { Card, Chip } from "smelte";

	// import Chip from "../components/Chip.svelte";
	import GhostCard from "../components/GhostCard.svelte";
	import GlobalStyle from "../components/GlobalStyle.svelte";
	import Evidence from "../models/Evidence";
	import ghosts from "../models/ghosts";
	import Layout from "./_layout.svelte";

	let confirmed = [];
	let eliminated = [];
</script>

<style lang="postcss">
	section {
		padding: 1.5rem;
	}

	div[slot="actions"] {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}
	main {
		display: grid;
		gap: 1.5rem;
		padding: 1.5rem;
		grid-template-columns: 1fr;
	}
	@screen md {
		main {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@screen lg {
		main {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>

<svelte:head>
	<title>Phasmophobia Ghost Tracker</title>
</svelte:head>

<section>
	<Card.Card>
		<div slot="title">
			<Card.Title title="Evidence" />
		</div>
		<div slot="actions">
			{#each Object.values(Evidence) as evidence}
				<Chip
					class="evidence-chip"
					color={eliminated.includes(evidence) ? 'error' : 'primary'}
					selectable={false}
					removable={true}
					on:close={() => {
						eliminated = [...eliminated, evidence];
						confirmed = confirmed.filter((val) => val !== evidence);
					}}
					selected={confirmed.includes(evidence) || eliminated.includes(evidence)}
					on:click={() => {
						if (confirmed.includes(evidence)) {
							confirmed = confirmed.filter((val) => val !== evidence);
						} else {
							confirmed = [...confirmed, evidence];
						}
					}}>
					{evidence}
				</Chip>
			{/each}
		</div>
	</Card.Card>
</section>

<main>
	{#each ghosts as ghost}
		<GhostCard {ghost} {confirmed} {eliminated} />
	{/each}
</main>
