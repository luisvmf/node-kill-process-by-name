# node kill process by name
![alt tag](https://img.shields.io/badge/build-pass-green.svg)

	git clone https://git.luisvmf.com/node-kill-process-by-name

NodeJS module to kill process by name on Linux without calling any external binary. Use \u0000 instead of spaces.

Example usage (if NodeJS interpreter is on the same folder as the source file (main.js):
```javascript
	var kill=require("./kill.js");
	kill.killallthreads(current_path+"/node-v4.4.2"+"\u0000"+current_path+"/main.js"+"\u0000","SIGTERM");
	kill.killallthreads(current_path+"/node-v4.4.2"+"\u0000"+"main.js"+"\u0000","SIGTERM");
	kill.killallthreads(current_path+"/node-v4.4.2"+"\u0000"+"main.js"+"\u0000","SIGKILL");
	kill.killallthreads(current_path+"/node-v4.4.2"+"\u0000"+current_path+"/main.js"+"\u0000","SIGKILL");
	//This module doesn't kill the current process, just threads and other processes.
	process.exit();
```
