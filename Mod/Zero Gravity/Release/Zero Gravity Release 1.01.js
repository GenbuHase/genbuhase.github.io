/*/
 *#######################################################
 *Zero Gravity Release 1.01
 *Copyright (C) 2015-2020 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/
var Gravity = 0;

var GUI = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Button = new android.widget.Button(GUI);
var PopUp = new android.widget.PopupWindow(Button, 400, 125);

function newLevel() {
	ShowGUI();
}

function leaveGame() {
	HideGUI();
}

function modTick() {
	var All = Entity.getAll();
	
	for(var i = 0; i < All.length; i++) {
		setVelY(All[i], Entity.getVelY(All[i]) + Gravity);
	}
}

function procCmd(cmd) {
	var Command = cmd.toLowerCase().split(" ");
	
	switch(Command[0]) {
		case "gravity":
			switch(Command[1]) {
				case "true":
					Gravity = 0.0784;
					print("ゼロ・グラビティ");
					break;
					
				case "false":
					Gravity = 0.0;
					print("標準重力");
					break;
			}
			
			break;
	}
}

/*/
 *------------------------------
 *These are defined functions.
 *------------------------------
/*/
function ShowGUI(){
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				Button.setTextSize(10);
				Button.setText("標準重力");

				Content = new android.view.View.OnClickListener(){
					onClick: function() {
						if(Button.getText() == "ゼロ・グラビティ") {
							Gravity = 0.0;
							Button.setText("標準重力");
						}
						
						else if(Button.getText() == "標準重力") {
							Gravity = 0.0784;
							Button.setText("ゼロ・グラビティ");
						}
					}
				}
				Button.setOnClickListener(Content);

				PopUp.showAtLocation(GUI.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.CENTER, 0, 0);
			} catch(Error) {
				clientMessage(Error);
			}
		}
	}))
}

function HideGUI() {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				PopUp.dismiss();
			} catch (Error) {
				clientMessage(Error);
			}
		}
	}));
}
