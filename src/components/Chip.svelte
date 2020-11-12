<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let color = "primary";
    export let selected = false;
    $: bgIntensity = selected ? 300 : 100;
    $: bgColor = `bg-${selected ? color : "gray"}-${bgIntensity}`;
    $: borderIntensity = bgIntensity + 100;

    const click = () => dispatch("click");
</script>

<style lang="postcss">
    .chip {
        @apply mx-1 inline-block;
        margin: 0.5rem;
    }

    .button {
        letter-spacing: 0;
        @apply relative overflow-hidden flex items-center rounded-full px-2 py-1 border-solid;
    }

    @hover {
        .button {
            @apply bg-gray-50;
        }
    }

    .inner-text {
        @apply px-2 text-sm;
    }
</style>

<span class="chip">
    <button on:click={click} class="button {bgColor} border-gray-800">
        <span class="inner-text"><slot /></span>
    </button>
</span>
