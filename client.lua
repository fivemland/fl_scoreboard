Board = {
  visible = false,

  setVisible = function(self, state)
    self.visible = state

    SendNUIMessage({
      visible = state
    })
    SetNuiFocus(state, false)

    if ESX?.UI?.HUD then
      ESX.UI.HUD.SetDisplay(state and 0 or 1)
    end
    DisplayRadar(not state)

    if state then
      self:update()

      CreateThread(function()
        while self.visible do
          self:update()
          Wait(1000 * 5)
        end
      end)
    end
  end,

  init = function(_, cb)
    local sendFunc = cb or SendNUIMessage

    ESX.TriggerServerCallback("getScoreboardConfig", function(slots, Factions)
      CONFIG.slots = slots
      CONFIG.toggleKey = TOGGLE_KEY

      sendFunc({
        CONFIG = CONFIG,
        Factions = Factions,
      })
    end)
  end,

  update = function(self)
    ESX.TriggerServerCallback("getScorePlayers", function(players, myData)
      SendNUIMessage({
        players = players,
        myData = myData,
      })
    end)
  end
}
Board.__index = Board

RegisterNUICallback("getConfig", function(_, cb)
  Board:init(cb)
end)

RegisterNUICallback("close", function(_, cb)
  Board:setVisible(false)
  cb('ok')
end)

RegisterNetEvent("esx:playerLoaded", function()
  Board:init()
end)

RegisterCommand("scoreboard", function()
  Board:setVisible(not Board.visible)
end)

RegisterKeyMapping("scoreboard", "Toggle Scoreboard", "keyboard", TOGGLE_KEY)
