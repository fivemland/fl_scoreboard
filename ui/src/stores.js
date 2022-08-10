import { writable, get, derived } from 'svelte/store';

export const visible = writable(false);

export const CONFIG = writable({
  serverName: 'serverName',
  slots: 0,
});

export const Factions = writable({});

export function getFactionLabel(name) {
  const faction = get(Factions)[name];
  if (!faction) return '';

  return `<span class="mr-1">${faction.icon || ''}</span> ${faction.label}`;
}

export function getFactionColor(name) {
  const faction = get(Factions)[name];
  if (!faction) return '';

  return faction.color;
}

export const players = writable([]);
export const myData = writable({});

export const playersByFaction = derived([players, Factions], ([$players, $Factions]) => {
  const result = {};

  Object.keys($Factions).forEach((job) => {
    result[job] = $players.filter((player) => player?.job === job);
  });

  return result;
});

window.addEventListener('message', ({ data }) => {
  if (data.visible !== undefined) visible.set(data.visible);
  if (data.CONFIG !== undefined) CONFIG.set(data.CONFIG);
  if (data.Factions !== undefined) Factions.set(data.Factions);

  if (data.players !== undefined) players.set(data.players);
  if (data.myData !== undefined) myData.set(data.myData);
});
