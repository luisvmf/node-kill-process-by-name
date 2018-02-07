# node kill process by name
NodeJS module to kill process by name on Linux without calling any external binary.

Example usage (if NodeJS interpreter is on the same folder as the source file (main.js)):
      var kill=require("./kill.js");
			kill.killallthreads(current_path+"/node-v4.4.2"+"\u0000"+current_path+"/main.js"+"\u0000","SIGTERM");
			kill.killallthreads(current_path+"/node-v4.4.2"+"\u0000"+"main.js"+"\u0000","SIGTERM");
			kill.killallthreads(current_path+"/node-v4.4.2"+"\u0000"+"main.js"+"\u0000","SIGKILL");
			kill.killallthreads(current_path+"/node-v4.4.2"+"\u0000"+current_path+"/main.js"+"\u0000","SIGKILL");
      //This module doesn't kill the current process.
      process.exit();
