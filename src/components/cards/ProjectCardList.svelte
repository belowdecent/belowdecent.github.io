<script lang="ts">
  import { slide } from "svelte/transition";

  export let title: string;
  let visible: boolean = true;
</script>

<div>
  <div class="head">
    <h3>{title}</h3>
    <button on:click={() => (visible = !visible)}>
      {#if visible}
        Collapse
      {:else}
        Show more
      {/if}
    </button>
  </div>
  {#if visible}
    <div transition:slide class="columns">
      <div>
        <div class="stripe"></div>
      </div>
      <ul>
        <slot/>
      </ul>
    </div>
  {/if}
</div>

<style lang="scss">
  h3 {
    line-height: 1.2;
  }

  .head {
    position: relative;
    width: 100%;
    border-bottom: 1px rgb(rgb($black), 0.3) solid;
    padding-bottom: 0.5rem;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
  }

  .columns {
    display: grid;
    grid-template-columns: 2rem 1fr;
  }

  .stripe {
    margin-left: 1rem;
    width: 1px;
    height: 100%;
    background: rgb($white);
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
</style>
