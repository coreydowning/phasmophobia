<script lang="ts">
	import GhostCard from "../components/GhostCard.svelte";
	import EvidenceCollection from "../models/EvidenceCollection";
	import ghosts from "../models/ghosts";
	import Fab, { Icon as FabIcon } from "@smui/fab";
	import EvidenceSelector from "../components/EvidenceSelector.svelte";

	let confirmed = new EvidenceCollection();
	let eliminated = new EvidenceCollection();

	const confirm = (event) => {
		const evidence = event.detail.evidence;
		window.sa_event(`click_button_confirm_${evidence}`);
		confirmed = confirmed.toggle(evidence);
		eliminated = eliminated.remove(evidence);
	};
	const eliminate = (event) => {
		const evidence = event.detail.evidence;
		window.sa_event(`click_button_eliminate_${evidence}`);
		eliminated = eliminated.toggle(evidence);
		confirmed = confirmed.remove(evidence);
	};

	const handleSelection = (evidence) => {
		window.sa_event(`click_card_chip_${evidence}`);
		confirmed = confirmed.toggle(evidence);
		eliminated = eliminated.remove(evidence);
	};
</script>

<style lang="scss">
	.fab {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
	}

	main {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 1fr;
	}
	@media (min-width: 600px) {
		section {
			padding: 0.5rem;
		}
		main {
			padding: 1.5rem;
		}
	}
	@media (min-width: 1000px) {
		main {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 1500px) {
		main {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 2000px) {
		main {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>

<svelte:head>
	<title>Phasmophobia Ghost Tracker</title>
</svelte:head>

<section>
	<h4>Evidence</h4>
	<EvidenceSelector
		on:confirm={confirm}
		on:eliminate={eliminate}
		{confirmed}
		{eliminated} />
</section>

<main>
	{#each ghosts as ghost}
		<GhostCard
			{ghost}
			{confirmed}
			{eliminated}
			toggleEvidence={handleSelection} />
	{/each}
</main>

<div class="fab">
	<Fab
		on:click={() => {
			window.sa_event(`click_fab_reset`);
			confirmed = confirmed.reset();
			eliminated = eliminated.reset();
		}}>
		<FabIcon class="material-icons">restore</FabIcon>
	</Fab>
</div>
