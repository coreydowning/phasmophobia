<script lang="ts">
    import Chip, { Set, Text, Checkmark } from "@smui/chips";
    import Card, { Content, Actions } from "@smui/card";
    import type Evidence from "../models/Evidence";
    import type GhostType from "../models/GhostType";
    import typography from "../routes/typography.scss";

    export let ghost: GhostType;
    export let confirmed: Evidence[] = [];
    export let eliminated: Evidence[] = [];
    $: hasRejectedEvidence = ghost.evidence.some((evidence) =>
        eliminated.includes(evidence)
    );
    $: hasAllConfirmedEvidence = confirmed.every((evidence) =>
        ghost.evidence.includes(evidence)
    );
    $: show = !hasRejectedEvidence && hasAllConfirmedEvidence;
</script>

<style>
    h6 {
        margin: 0;
    }
</style>

{#if show}
    <Card padded="true">
        <h6>{ghost.name}</h6>
        <Content class="mdc-typography--body2">
            <strong>Description</strong>
            <p>{ghost.description}</p>
            <strong>Strength</strong>
            <p>{ghost.strength}</p>
            <strong>Weakness</strong>
            <p>{ghost.weakness}</p>
        </Content>
        <Actions>
            <Set
                chips={ghost.evidence}
                let:chip
                filter
                bind:selected={confirmed}>
                <Chip on:MDCChip:selection id={chip}>
                    <Checkmark />
                    <Text>{chip}</Text>
                </Chip>
            </Set>
        </Actions>
    </Card>
{/if}
