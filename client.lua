Board = {
  loaded = false,
  visible = false,

  setVisible = function(self, state)
    if not self.loaded then 
      self:init()
    end

    self.visible = state

    SendNUIMessage({
      visible = state
    })
    SetNuiFocus(state, false)

    ESX.UI.HUD.SetDisplay(state and 0 or 1)
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

  init = function(self)
    ESX.TriggerServerCallback("getScoreboardConfig", function(slots, Factions)
      CONFIG.slots = slots

      SendNUIMessage({
        CONFIG = CONFIG,
        Factions = Factions,
      })

      self.loaded = true
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

CreateThread(function()
  if not ESX.IsPlayerLoaded() then 
    return
  end

  Wait(1000)
  Board:init()
end)

AddEventHandler("esx:playerLoaded", function()
  Board:init()
end)

RegisterCommand("scoreboard", function()
  Board:setVisible(not Board.visible)
end)

RegisterKeyMapping("scoreboard", "Toggle Scoreboard", "keyboard", TOGGLE_KEY)
