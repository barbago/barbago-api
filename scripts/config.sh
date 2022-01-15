firebase functions:config:set config="$(cat env/config.json)"
firebase functions:config:get > .runtimeconfig.json
