/*/
 *#######################################################
 *Zero Gravity Release 1.00
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/
var Gravity = 0;

function procCmd(cmd) {
	var Command = cmd.toLowerCase().split(" ");
	
	switch(Command[0]) {
		case "gravity":
			switch(Command[1]) {
				case "true":
					Gravity = 0.0784;
					print("Zero Gravity");
					break;
					
				case "false":
					Gravity = 0.0;
					print("Normal Gravity");
					break;
			}
			
			break;
	}
}

function modTick() {
	var All = Entity.getAll();
	
	for(var i = 0; i < All.length; i++) {
		setVelY(All[i], Entity.getVelY(All[i]) + Gravity);
	}
}
