const fs = require('fs');
const path = require('path');
function killallthreads(programcmdline,signal){
	var killed=true;
	while(killed==true){
		killed=false;
		if(signal==undefined){
			signal="SIGTERM";
		}
		var currentpid=process.pid;
		function getDirectories(path){
			return fs.readdirSync(path).filter(function (file) {
				return fs.statSync(path+'/'+file).isDirectory();
			});
		}
		var listdirs=getDirectories("/proc");
		var listpids=[];
		var j=0;
		for (i=0; i<listdirs.length; i++){
			if(Number(listdirs[i])+""==""+listdirs[i]){
				listpids[j]=listdirs[i];
				j=j+1;
			}
		}
		for (i=0; i<listpids.length; i++){
			var cmdline=fs.readFileSync("/proc/"+listpids[i]+"/cmdline", "utf8");
			if(cmdline+""==""+programcmdline){
				if(listpids[i]+""!=""+currentpid){
					killed=true;
					process.kill(listpids[i],signal);
				}
			}

		}
	}
}
module.exports={killallthreads};
