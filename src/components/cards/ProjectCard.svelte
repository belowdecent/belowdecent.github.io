<script lang="ts">
  import { slide } from "svelte/transition";

  export let linkTo = "https://github.com/belowdecent/petrock-app";
  export let title = "title";
  let visible = false;
</script>

<div class="card">
  <div class="head">
    <h4>Pet Rock app</h4>
    <a href={linkTo}>{linkTo}</a>
    <button on:click={() => (visible = !visible)}>
      {#if visible}
        Collapse
      {:else}
        Show more
      {/if}
    </button>
  </div>
  {#if visible}
    <p transition:slide>
      <slot />
    </p>
  {/if}
</div>

<style lang="scss">
  .card {
    border-radius: 1.2rem;
    margin-block: 0.5rem;
    padding: 1.2rem;
    background: rgb($white);
    color: rgb($black);
    box-shadow: 0.1rem 0.1rem 0.3rem 0 rgb(rgb($white), 0.5);
  }

  .head {
    position: relative;
    width: 100%;
    border-bottom: 1px rgb(rgb($black), 0.3) solid;
    padding-bottom: 0.5rem;
  }

  p,
  a {
    font-size: 0.8rem;
  }

  a,
  a:any-link {
    text-decoration: none;
    color: rgb($accent-blue);
  }

  p {
    margin-top: 0.5rem;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
  }

  hr {
    color: rgb(rgb($accent-blue), 0.2);
  }

  h4 {
    line-height: 1;
  }
</style>
