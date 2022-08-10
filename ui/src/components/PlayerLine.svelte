<script>
  import { getFactionColor, getFactionLabel } from '../stores';

  export let serverId = 0;
  export let name = '';
  export let job = '';
  export let ping = 0;

  $: pingColor = ping < 40 ? 'text-success' : ping >= 40 && ping <= 120 ? 'text-warning' : ping > 120 ? 'text-error' : '';

  $: badgeColor = job ? getFactionColor(job) : '';
</script>

<div class="flex justify-between items-center flex-wrap gap-3 bg-base-300/80 p-2 rounded-lg">
  <div class="flex gap-2 items-center">
    <div class="border border-white rounded-full text-md w-7 h-7 flex items-center justify-center pb-0.5">{serverId}</div>
    <span class="font-bold">{name || 'unknown'}</span>
    {#if job}
      <div class={`badge rounded-md badge-${badgeColor}`}>{@html getFactionLabel(job)}</div>
    {/if}
  </div>
  <span class={`${pingColor} text-sm text-right`}><i class="fa-solid fa-tower-broadcast mr-1" />{ping}ms</span>
</div>
