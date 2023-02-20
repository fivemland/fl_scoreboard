ESX.RegisterServerCallback("getScoreboardConfig", function(_, cb)
  local Jobs <const> = ESX.GetJobs()

  for name, value in pairs(Factions) do
    value.label = Jobs[name]?.label or "Ismeretlen"
  end

  cb(GetConvarInt('sv_maxclients', 32), Factions)
end)

ESX.RegisterServerCallback("getScorePlayers", function(source, cb)
  local players = {}
  local myData = {}

  for _, player in pairs(GetPlayers()) do 
    local xPlayer = ESX.GetPlayerFromId(player)
    if xPlayer then 
      local job <const> = xPlayer.getJob().name

      local playerData <const> = {
        serverId = player,
        name = xPlayer.getName(),
        job = Factions[job] and job or nil,
        ping = GetPlayerPing(player)
      }

      table.insert(players, playerData)

      if (tonumber(player) == tonumber(source)) then 
        myData = playerData
      end
    end
  end

  cb(players, myData)
end)