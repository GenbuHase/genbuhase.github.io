/*/
 *#######################################################
 *GUI Helper Release 1.08
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
 *#######################################################
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
var Touches = [];
var SeekBars = [];
var ProgressBars = [];
var ImageViews = [];

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

var Touch = {
	Press: android.view.MotionEvent.ACTION_DOWN,
	Release: android.view.MotionEvent.ACTION_UP
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

function DeleteGUI(ID) {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				Window[ID].dismiss();
			} catch (Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

function DeleteAllGUI() {
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
function AddTextView(ID, Text, TextSize, Color, XTextAlign, YTextAlign, Fuc, LongFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
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
	
	var LongContent = new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	}
	
	TextViews[ID].setOnClickListener(Content);
	TextViews[ID].setOnLongClickListener(LongContent);
	
	Window[ID] = new android.widget.PopupWindow(TextViews[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(TextViews[ID]);
}

function AddButton(ID, Text, TextSize, Color, Fuc, LongFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	Buttons[ID] = new android.widget.Button(GUI);
	Buttons[ID].setText(Text);
	Buttons[ID].setTextSize(TextSize);
	Buttons[ID].setTextColor(Color);
	
	var Content = new android.view.View.OnClickListener() {
		onClick: function() {
			Fuc();
		}
	}
	
	var LongContent = new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	}
	
	Buttons[ID].setOnClickListener(Content);
	Buttons[ID].setOnLongClickListener(LongContent);
	
	Window[ID] = new android.widget.PopupWindow(Buttons[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(Buttons[ID]);
}

function AddToggle(ID, Text1, Text2, TextSize1, TextSize2, Color1, Color2, Fuc, LongFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
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
	
	var LongContent = new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	}
	
	Toggles[ID].setOnClickListener(Content);
	Toggles[ID].setOnLongClickListener(LongContent);
	
	Window[ID] = new android.widget.PopupWindow(Toggles[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(Toggles[ID]);
}

function AddTouch(ID, Text, TextSize, Color, TouchFuc, ReleaseFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	Touches[ID] = new android.widget.Button(GUI);
	Touches[ID].setText(Text);
	Touches[ID].setTextSize(TextSize);
	Touches[ID].setTextColor(Color);
	
	var TouchContent = new android.view.View.OnTouchListener() {
		onTouch: function(View, Event) {
			switch(Event.getAction()) {
				case android.view.MotionEvent.ACTION_DOWN:
					TouchFuc();
					break;
					
				case android.view.MotionEvent.ACTION_UP:
					ReleaseFuc();
					break;
			}
			
			return true;
		}
	}
	
	Touches[ID].setOnTouchListener(TouchContent);
	
	Window[ID] = new android.widget.PopupWindow(Touches[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(Touches[ID]);
}

function AddSeekBar(ID, Value, MaxValue, DragFuc, TouchFuc, ReleaseFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	SeekBars[ID] = new android.widget.SeekBar(GUI);
	SeekBars[ID].setProgress(Value);
	SeekBars[ID].setMax(MaxValue);
	
	var SeekContent = new android.view.View.OnSeekBarChangeListener() {
		onProgressChanged: function() {
			DragFuc();
		},
		
		onStartTrackingTouch: function() {
			TouchFuc();
		},
		
		onStopTrackingTouch: function() {
			ReleaseFuc();
		}
	}
	
	SeekBars[ID].setOnSeekBarChangeListener(SeekContent);
	
	Window[ID] = new android.widget.PopupWindow(SeekBars[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(SeekBars[ID]);
}

function AddProgressBar(ID, Value, MaxValue, Size, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	switch(Size.toLowerCase().toString()) {
		case "small":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyleSmall);
			break;
			
		case "normal":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyle);
			break;
			
		case "large":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyleLarge);
			break;
			
		case "horizontal":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyleHorizontal);
			break;
	}
	
	ProgressBars[ID].setProgress(Value);
	ProgressBars[ID].setMax(MaxValue);
	
	Window[ID] = new android.widget.PopupWindow(ProgressBars[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(ProgressBars[ID]);
}

function AddImageView(ID, URL, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	ImageViews[ID] = new android.widget.ImageView(GUI);
	
	var Connecter = new java.net.URL(URL).openConnection();
		Connecter.setDoInput(true);
		Connecter.connect();
	
	ImageViews[ID].setImageBitmap(BitmapFactory.decodeStream(Connecter.getInputStream()));
	
	Window[ID] = new android.widget.PopupWindow(ImageViews[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(ImageViews[ID]);
}
