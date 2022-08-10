<script>
  import PlayerLine from './PlayerLine.svelte';
  import { CONFIG, Factions, getFactionLabel, players, myData, playersByFaction } from '../stores';

  $: FactionsArray = Object.keys($Factions).map((key) => {
    return { ...$Factions[key], name: key };
  });
</script>

<div class="bg-base-300/90 p-2 flex justify-center md:justify-between items-center flex-wrap rounded-t-lg">
  <div class="flex items-center mx-10 lg:mx-0">
    <img src={$CONFIG.icon} alt="" class="rounded-full w-12 h-12" />
    <div class="ml-2">
      <h4 class="text-xl font-bold">{$CONFIG.serverName}</h4>
      {$players.length}/{$CONFIG.slots} players
    </div>
  </div>

  <div class="my-2 lg:m-0 flex gap-2">
    {#each FactionsArray as faction}
      <div class={`badge rounded-md badge-${faction.color}`}>
        <span class="font-bold mr-1">
          {$playersByFaction[faction.name]?.length}
        </span>{@html getFactionLabel(faction.name)}
      </div>
    {/each}
  </div>

  <PlayerLine {...$myData} />
</div>
