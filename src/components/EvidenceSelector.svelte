<script lang="ts">
    import Evidence from "../models/Evidence";
    import type EvidenceCollection from "../models/EvidenceCollection";
    import { createEventDispatcher } from "svelte";
    import Button, { Group, Label, Icon } from "@smui/button";

    const dispatch = createEventDispatcher();

    export let confirmed: EvidenceCollection;
    export let eliminated: EvidenceCollection;
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
                variant={confirmed.has(evidence) ? 'unelevated' : 'outlined'}>
                <Label>{evidence}</Label>
            </Button>
            <Button
                on:click={() => {
                    dispatch('eliminate', { evidence });
                }}
                color="primary"
                variant={eliminated.has(evidence) ? 'unelevated' : 'outlined'}>
                <Icon class="material-icons">highlight_off</Icon>
            </Button>
        </Group>
    </div>
{/each}
