/*/
 *##################################################
 *#Earth Defence Force For MCPE Beta 1.00
 *#Copyright © 2015 Genbu Hase All Rights Reserved.
 *##################################################
/*/

/*/
 *------------------------------
 *             IDs
 *------------------------------
/*/
var Ranger = {
	//Assault Rifle
	AR: {
		AF14: 501
	},
}

/*/
 *------------------------------
 *         System Args
 *------------------------------
/*/
var Bullet = {
	Ranger: {
		//Assault Rifle
		AR: {
			AF14: 120,
		}
	}
}

var IsShowing = false;

function newLevel() {
	AddItem();
	AddMob();
	SetCategory();
}

function leaveGame() {
	
}

function modTick() {
	if(IsShowing == false) {
		switch(getCarriedItem()) {
			case Ranger.AR.AF14:
				ShowGun();
				IsShowing = true;
				break;
		}
	} else if(IsShowing == true) {
		switch(getCarriedItem()) {
			case Ranger.AR.AF14:
				break;
				
			default:
				DeleteGUI();
				IsShowing = false;
				break;
		}
	}
	
	ModPE.showTipMessage(Entity.getHealth(Player.getEntity()));
	Entity.setNameTag(Player.getPointedEntity(),"§5♡" + Entity.getHealth(Player.getPointedEntity()));
}

/*function entityRemovedHook(Ent) {
	if(Entity.getEntityTypeId(Ent) == 81 && Entity.getAnimalAge(Ent) == 10) {
		switch(getCarriedItem()) {
			case Ranger.AR.AF14:
				Entity.setHealth(Ent, Entity.getHealth(Ent) + 20);
				break;
		}
	} else {
		
	}
}*/

function attackHook(Attacker, Victim) {
	if(Entity.getEntityTypeId(Attacker) == 81 || Entity.getAnimalAge(Attacker) == 10) {
		switch(getCarriedItem()) {
			case Ranger.AR.AF14:
				Entity.setHealth(Victim, Entity.getHealth(Victim) - 10);
				break;
		}
	} else {
		
	}
}

/*/
 *------------------------------
 *      Defined Functions
 *------------------------------
/*/
function AddItem() {
	ModPE.setItem(Ranger.AR.AF14, "AF14", 0, "AF14", 1);
}

function AddMob() {
	
}

function SetCategory() {
	Item.setCategory(Ranger.AR.AF14, ItemCategory.TOOL);
	Player.addItemCreativeInv(Ranger.AR.AF14, 1, 0);
}

function Fire(Speed) {
	R = Math.cos(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2;
	X = Math.sin(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
	Y = Math.sin(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2 + Entity.getY(getPlayerEnt());
	Z = Math.cos(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
	
	Bullet = Level.spawnMob(X, Y, Z, 81);
	Entity.setAnimalAge(Bullet, 10);
	
	R = Math.cos(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2);
	X = Math.sin(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
	Y = Math.sin(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2) + Entity.getY(getPlayerEnt());
	Z = Math.cos(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
	
	setVelX(Bullet, X - Entity.getX(Bullet));
	setVelY(Bullet, Y - Entity.getY(Bullet));
	setVelZ(Bullet, Z - Entity.getZ(Bullet));
}

function ShowGun() {
	CreateGUI(function() {
		AddButton(0, "Fire", 10, Color.RED, function() {
			switch(getCarriedItem()) {
				case 501:
					Fire(1.0);
					break;
			}
		}, 200, 100, Align.RIGHT, Align.CENTER, 0, -50);
		
		AddButton(1, "Reload", 10, Color.WHITE, function() {
			switch(getCarriedItem()) {
				case 501:
					break;
			}
		}, 200, 100, Align.RIGHT, Align.CENTER, 0, 50);
	});
}



/*/
 *##################################################
 *#GUI Helper Release 1.04
 *#Copyright © 2015 Genbu Hase All Rights Reserved.
 *##################################################
/*/

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/
var GUI = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Window = [];

var TextViews = [];
var Buttons = [];
var Toggles = [];
var SeekBars = [];

/*/
 *------------------------------
 *These are args you can use.
 *------------------------------
/*/
var Align = {
	LEFT: android.view.Gravity.LEFT, //左
	RIGHT: android.view.Gravity.RIGHT, //右
	TOP: android.view.Gravity.TOP, //上
	BOTTOM: android.view.Gravity.BOTTOM, //下
	CENTER: android.view.Gravity.CENTER //中央
}

var Color = {
	BLACK: android.graphics.Color.BLACK,
	BLUE: android.graphics.Color.BLUE,
	CYAN: android.graphics.Color.CYAN,
	DARKGRAY: android.graphics.Color.DKGRAY,
	GRAY: android.graphics.Color.GRAY,
	GREEN: android.graphics.Color.GREEN,
	LIGHTGRAY: android.graphics.Color.LTGRAY,
	MAGENTA: android.graphics.Color.MAGENTA,
	RED: android.graphics.Color.RED,
	WHITE: android.graphics.Color.WHITE,
	YELLOW: android.graphics.Color.YELLOW,
	TRANSPARENT: android.graphics.Color.TRANSPARENT,
	ARGB: function(A, R, G, B) {android.graphics.Color.argb(A, R, G, B)}
}

var System = {
	SD: android.os.Environment.getExternalStorageDirectory().getPath(),
	Directory: android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/GUI Helper",
}

function CreateGUI(Content) {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				Content();
			} catch(Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

function DeleteGUI() {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				for (var i = 0; i < Window.length; i++) {
					Window[i].dismiss();
				}
			} catch (Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

/*/
 *------------------------------
 *These are property classes.
 *------------------------------
/*/
function AddTextView(ID, Text, TextSize, Color, XTextAlign, YTextAlign, Fuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	TextViews[ID] = new android.widget.TextView(GUI);
	TextViews[ID].setText(Text);
	TextViews[ID].setTextSize(TextSize);
	TextViews[ID].setTextColor(Color);
	TextViews[ID].setGravity(YTextAlign|XTextAlign);
	
	var Content = new android.view.View.OnClickListener() {
		onClick: function() {
			Fuc();
		}
	}
	
	TextViews[ID].setOnClickListener(Content);
	Window.push(new android.widget.PopupWindow(TextViews[ID], Width, Height));
	Window[Window.length - 1].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[Window.length - 1].setContentView(TextViews[ID]);
}

function AddButton(ID, Text, TextSize, Color, Fuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	Buttons[ID] = new android.widget.Button(GUI);
	Buttons[ID].setText(Text);
	Buttons[ID].setTextSize(TextSize);
	Buttons[ID].setTextColor(Color);
	
	var Content = new android.view.View.OnClickListener() {
		onClick: function() {
			Fuc();
		}
	}
	
	Buttons[ID].setOnClickListener(Content);
	Window.push(new android.widget.PopupWindow(Buttons[ID], Width, Height));
	Window[Window.length - 1].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[Window.length - 1].setContentView(Buttons[ID]);
}

function AddToggle(ID, Text1, Text2, TextSize1, TextSize2, Color1, Color2, Fuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	Toggles[ID] = new android.widget.Button(GUI);
	Toggles[ID].setText(Text1);
	Toggles[ID].setTextSize(TextSize1);
	Toggles[ID].setTextColor(Color1);
	
	var Content = new android.view.View.OnClickListener() {
		onClick: function() {
			if (Toggles[ID].getText() == Text2) {
				Toggles[ID].setText(Text1);
				Toggles[ID].setTextSize(TextSize1);
				Toggles[ID].setTextColor(Color1);
			} else if (Toggles[ID].getText() == Text1) {
				Toggles[ID].setText(Text2);
				Toggles[ID].setTextSize(TextSize2);
				Toggles[ID].setTextColor(Color2);
			}
			
			Fuc();
		}
	}
	
	Toggles[ID].setOnClickListener(Content);
	Window.push(new android.widget.PopupWindow(Toggles[ID], Width, Height));
	Window[Window.length - 1].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[Window.length - 1].setContentView(Toggles[ID]);
}

function AddSeekBar(ID, Value, MaxValue, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	SeekBars[ID] = new android.widget.SeekBar(GUI);
	SeekBars[ID].setProgress(Value);
	SeekBars[ID].setMax(MaxValue);
	
	Window.push(new android.widget.PopupWindow(SeekBars[ID], Width, Height));
	Window[Window.length - 1].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[Window.length - 1].setContentView(SeekBars[ID]);
}
