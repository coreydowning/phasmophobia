<script lang="ts">
	import GhostCard from "../components/GhostCard.svelte";
	import Evidence from "../models/Evidence";
	import ghosts from "../models/ghosts";
	import Button, { Group, Label, Icon } from "@smui/button";
	import Fab, { Icon as FabIcon } from "@smui/fab";

	let confirmed = [];
	let eliminated = [];

	const handleSelection = (event) => {
		const evidence = event.detail.chipId;
		if (confirmed.includes(evidence)) {
			confirmed = confirmed.filter((val) => val !== evidence);
		} else {
			confirmed = [...confirmed, evidence];
		}
		eliminated = eliminated.filter((val) => val !== evidence);
	};
</script>

<style lang="postcss">
	section {
		padding: 0.5rem;
	}
	.button {
		padding: 0.5rem;
		display: inline-block;
	}
	.fab {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
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
	<h4>Evidence</h4>
	{#each Object.values(Evidence) as evidence (evidence)}
		<div class="button">
			<Group>
				<Button
					on:click={() => {
						if (confirmed.includes(evidence)) {
							confirmed = confirmed.filter((val) => val !== evidence);
						} else {
							confirmed = [...confirmed, evidence];
						}
						eliminated = eliminated.filter((val) => val !== evidence);
					}}
					color="primary"
					variant={confirmed.includes(evidence) ? 'unelevated' : 'outlined'}>
					<Label>{evidence}</Label>
				</Button>
				<Button
					on:click={() => {
						if (eliminated.includes(evidence)) {
							eliminated = eliminated.filter((val) => val !== evidence);
						} else {
							eliminated = [...eliminated, evidence];
						}
						confirmed = confirmed.filter((val) => val !== evidence);
					}}
					color="primary"
					variant={eliminated.includes(evidence) ? 'unelevated' : 'outlined'}>
					<Icon class="material-icons">highlight_off</Icon>
				</Button>
			</Group>
		</div>
	{/each}
</section>

<main>
	{#each ghosts as ghost}
		<GhostCard
			{ghost}
			{confirmed}
			{eliminated}
			on:MDCChip:selection={handleSelection} />
	{/each}
</main>

<div class="fab">
	<Fab
		on:click={() => {
			confirmed = [];
			eliminated = [];
		}}>
		<FabIcon class="material-icons">restore</FabIcon>
	</Fab>
</div>
