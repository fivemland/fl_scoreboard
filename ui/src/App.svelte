<script>
  import Header from './components/Header.svelte';
  import PlayerLine from './components/PlayerLine.svelte';

  import { visible, players } from './stores';
</script>

{#if $visible}
  <div class="p-10">
    <Header />

    <div class="bg-base-200/80 rounded-b-lg p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-h-[83vh] gap-3 overflow-y-auto">
      {#each $players as player}
        <PlayerLine {...player} />
      {/each}
    </div>
  </div>
{/if}

<!-- Dont touch this shit -->
<div class="absolute -top-10">
  <div class="badge badge-info">a</div>
  <div class="badge badge-success">b</div>
  <div class="badge badge-warning">c</div>
  <div class="badge badge-error">d</div>
</div>
