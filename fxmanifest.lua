fx_version "cerulean"
game "gta5"
lua54 "yes"

dependency 'oxmysql'

shared_scripts {
  "@es_extended/imports.lua",
  "config.lua"
} 

client_script "client.lua"
server_script "server.lua"

files {
  "ui/dist/**"
}

-- ui_page "http://localhost:3000/index.html" --dev mode
ui_page "ui/dist/index.html"

