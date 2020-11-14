<script lang="ts">
    import Evidence from "../models/Evidence";
    import type EvidenceCollection from "../models/EvidenceCollection";
    import { createEventDispatcher } from "svelte";
    import ghosts from "../models/ghosts";
    import Button, { Group, Label, Icon } from "@smui/button";

    const dispatch = createEventDispatcher();

    export let confirmed: EvidenceCollection;
    export let eliminated: EvidenceCollection;

    const unique = (value, index, self) => {
        return self.indexOf(value) === index;
    };
    $: availableEvidence = ghosts
        .filter((ghost) => ghost.hasAllConfirmedEvidence(confirmed))
        .flatMap((ghost) => ghost.evidence)
        .filter(unique);
</script>

<style lang="scss">
    .button {
        padding: 0.5rem;
        display: inline-block;
    }
</style>

{#each Object.values(Evidence) as evidence (evidence)}
    <div class="button">
        <Group>
            <Button
                on:click={() => {
                    dispatch('confirm', { evidence });
                }}
                color="primary"
                disabled={!availableEvidence.includes(evidence)}
                variant={confirmed.has(evidence) ? 'unelevated' : 'outlined'}>
                <Label>{evidence}</Label>
            </Button>
            <Button
                on:click={() => {
                    dispatch('eliminate', { evidence });
                }}
                color="primary"
                disabled={!availableEvidence.includes(evidence)}
                variant={eliminated.has(evidence) && availableEvidence.includes(evidence) ? 'unelevated' : 'outlined'}>
                <Icon class="material-icons">highlight_off</Icon>
            </Button>
        </Group>
    </div>
{/each}
