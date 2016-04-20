// get some globals, if i missed any, fill in here
// typings: for intellisense and typescript
// rimraf:very handy for removing folders that can not be removed due to long folder name restrictions
npm install typings, rimraf, node, typings --global

// install listed dependencies
npm install

// install our typings
typings install react , react-dom , node --ambient

// compile and pack
// note: that VS Code users have a task.json that relates to gulp pack, they can press ctrl-shift-b to trigger
// note: i have excluded dist, public and server.js from vs code (see .vscode/settings.json) so you don't see them in your environment. let me know if this is not cool
gulp pack

// start server and watch changes
// note that you have to manually pack again to resync, I did that because just save is somewhat implicit
gulp start

// VS CODE users:
- recommend to change your keybinding to use the following as well   (ctrl-p, type 'key' to open global roaming user setting file)
    { "key": "f6",                    "command": "workbench.action.tasks.runTask",
                                     "when": "!inDebugMode" },
    { "key": "shift+f6",             "command": "workbench.action.tasks.terminate" }
    
    
