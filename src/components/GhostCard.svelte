<script lang="ts">
    import { Card, Chip } from "smelte";
    import type Evidence from "../models/Evidence";
    import type GhostType from "../models/GhostType";

    export let ghost: GhostType;
    export let confirmed: Evidence[];
    export let eliminated: Evidence[];
    $: hasRejectedEvidence = ghost.evidence.some((evidence) =>
        eliminated.includes(evidence)
    );
    $: hasAllConfirmedEvidence = confirmed.every((evidence) =>
        ghost.evidence.includes(evidence)
    );
    $: show = !hasRejectedEvidence && hasAllConfirmedEvidence;
</script>

<style lang="postcss">
    div[slot="text"] {
        padding: 1rem;
    }

    div[slot="actions"] {
        padding: 1rem;
    }
</style>

{#if show}
    <Card.Card>
        <div slot="title">
            <Card.Title title={ghost.name} />
        </div>
        <div slot="text" class="card-body">
            <p class="subtitle">Description</p>
            <p class="body-2">{ghost.description}</p>
            <p class="subtitle">Strength</p>
            <p class="body-2">{ghost.strength}</p>
            <p class="subtitle">Weakness</p>
            <p class="body-2">{ghost.weakness}</p>
        </div>
        <div slot="actions">
            {#each ghost.evidence as evidence}
                <Chip
                    selectable={false}
                    selected={confirmed.includes(evidence)}>
                    {evidence}
                </Chip>
            {/each}
        </div>
    </Card.Card>
{/if}
