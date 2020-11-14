<script lang="ts">
    import Button, { Label } from "@smui/button";
    import Card, { Content, Actions, ActionButtons } from "@smui/card";
    import type Evidence from "../models/Evidence";
    import type GhostType from "../models/GhostType";
    import typography from "../routes/typography.scss";
    import type EvidenceCollection from "../models/EvidenceCollection";

    export let ghost: GhostType;
    export let confirmed: EvidenceCollection;
    export let eliminated: EvidenceCollection;
    export let toggleEvidence: (evidence: Evidence) => void = () => {};
    $: hasRejectedEvidence = ghost.evidence.some((evidence) =>
        eliminated.has(evidence)
    );
    $: hasAllConfirmedEvidence = confirmed.isSubsetOf(ghost.evidence);
    $: show = !hasRejectedEvidence && hasAllConfirmedEvidence;
</script>

<style lang="scss">
    h6 {
        margin: 0;
    }

    .actions {
        flex-wrap: wrap;
    }
</style>

{#if show}
    <Card padded="true">
        <h6>{ghost.name}</h6>
        <Content class="mdc-typography--body2">
            <p>{ghost.description}</p>
            <big>Strength</big>
            <p>{ghost.strength}</p>
            <big>Weakness</big>
            <p>{ghost.weakness}</p>
        </Content>
        <Actions>
            <div class="actions">
                {#each ghost.evidence as evidence (evidence)}
                    <Button
                        on:click={() => {
                            toggleEvidence(evidence);
                        }}
                        disabled={confirmed.has(evidence)}>
                        <Label>{evidence}</Label>
                    </Button>
                {/each}
            </div>
        </Actions>
    </Card>
{/if}
