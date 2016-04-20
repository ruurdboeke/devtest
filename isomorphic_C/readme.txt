// get some globals, probably also need node, babel, typescript as global, etc
npm install typings --global
npm install rimraf --global   // very handy for removing folders that can not be removed due to long folder name restrictions

// install listed dependencies
npm install

// install our typings
typings install react , react-dom , node --ambient

// compile and pack
// note that VS Code users have a task.json that relates to gulp pack, they can press ctrl-shift-b to trigger
gulp pack

// start server and watch changes
// note that you have to manually pack again to resync, I did that because just save is somewhat implicit
gulp start