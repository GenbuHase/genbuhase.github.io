/*/
 *#######################################################
 *GUI Helper Release 1.00
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/
var GUI = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Window;

/*/
 *------------------------------
 *These are args you use.
 *------------------------------
/*/
var Align = {
	LEFT: android.view.Gravity.LEFT,
	RIGHT: android.view.Gravity.RIGHT,
	CENTER: android.view.Gravity.CENTER
}

function CreateGUI(Content) {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				Content();
			} catch(Error) {
				clientMessage(Error);
			}
		}
	}))
}

function DeleteGUI() {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				Window.dismiss();
			} catch (Error) {
				clientMessage(Error);
			}
		}
	}))
}

function AddButton(Text, TextSize, Fuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	var Button = new android.widget.Button(GUI);
	Button.setText(Text);
	Button.setTextSize(TextSize);
	
	var Content = new android.view.View.OnClickListener() {
		onClick: function() {
			Fuc();
		}
	}
	
	Button.setOnClickListener(Content);
	Window = new android.widget.PopupWindow(Button, Width, Height);
	Window.showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window.addView(Button);
}