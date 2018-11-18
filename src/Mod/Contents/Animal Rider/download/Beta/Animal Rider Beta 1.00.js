var Flag = {
	Showing: {
		RideButton: false,
		MoveButton: false
	}
}

var Fuc = {
	Ride: function() {
		CreateGUI(function() {
			SetOnPopUpWindow(0,
				AddButton(0, "騎乗", Size.Wrap, Color.White, function() {
					Entity.rideAnimal(Player.getEntity(), Player.getPointedEntity());
				}, function() {
					
				}),
			Size.Wrap, Size.Wrap, Align.Center, Align.Bottom, 0, 125);
		});
	}
}

function useItem(X, Y, Z, ItemID, BlockID, ItemData, BlockData) {
}

function modTick() {
	if(!Flag.Showing.RideButton) {
		switch(Entity.getEntityTypeId(Player.getPointedEntity())) {
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:

			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:

			case 63:
			case 65:
			case 66:

			case 77:
			case 80:
			case 81:
			case 82:
			case 83:
			case 85:
				Fuc.Ride();
				Flag.Showing.RideButton = true;

				break;

			default:
				break;
		}
	}
	
	if(Flag.Showing.RideButton) {
		switch(Entity.getEntityTypeId(Player.getPointedEntity())) {
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:

			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:

			case 63:
			case 65:
			case 66:

			case 77:
			case 80:
			case 81:
			case 82:
			case 83:
			case 85:
				break;

			default:
				DeleteGUI(0);
				Flag.Showing.RideButton = false;

				break;
		}
	}
}

/*/
 *###########################################################################
 *#GUI Helper Beta 1.10
 *#Copyright © 2015-2016 Genbu Hase All Rights Reserved.
 *###########################################################################
/*/

/*/
 *------------------------------
 *         System Args
 *------------------------------
/*/
var GUI = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var PopUpWindow = [];
var Dialogs = [];

var TextViews = [];
var Buttons = [];
var Toggles = [];
var Touches = [];
var EditTexts = [];
var CheckBoxes = [];
var SeekBars = [];
var ProgressBars = [];
var ImageViews = [];
var ImageButtons = [];

var LinearLayouts = [];
var ScrollViews = [];

/*/
 *------------------------------
 *         Style Args
 *------------------------------
/*/
var Align = {
	Left: android.view.Gravity.LEFT, //左
	Right: android.view.Gravity.RIGHT, //右
	Top: android.view.Gravity.TOP, //上
	Bottom: android.view.Gravity.BOTTOM, //下
	Center: android.view.Gravity.CENTER //中央
}

var Color = {
	Black: android.graphics.Color.BLACK,
	Blue: android.graphics.Color.BLUE,
	Cyan: android.graphics.Color.CYAN,
	DarkGray: android.graphics.Color.DKGRAY,
	Gray: android.graphics.Color.GRAY,
	Green: android.graphics.Color.GREEN,
	LightGray: android.graphics.Color.LTGRAY,
	Magenta: android.graphics.Color.MAGENTA,
	Red: android.graphics.Color.RED,
	White: android.graphics.Color.WHITE,
	Yellow: android.graphics.Color.YELLOW,
	Transparent: android.graphics.Color.TRANSPARENT,
	ARGB: function(A, R, G, B) {android.graphics.Color.argb(A, R, G, B)}
}

var Size = {
	Wrap: android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
	Match: android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
	Fill: android.widget.LinearLayout.LayoutParams.FILL_PARENT
}

var Touch = {
	Press: android.view.MotionEvent.ACTION_DOWN,
	Release: android.view.MotionEvent.ACTION_UP
}

/*/
 *------------------------------
 *      Defined Functions
 *------------------------------
/*/
function CreateGUI(Content) {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
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
				PopUpWindow[ID].dismiss();
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
				for (var i = 0; i < PopUpWindow.length; i++) {
					PopUpWindow[i].dismiss();
				}
			} catch (Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

function SetOnPopUpWindow(ID, Content, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	PopUpWindow[ID] = new android.widget.PopupWindow(Content, Width, Height);
	PopUpWindow[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	PopUpWindow[ID].setContentView(Content);
}

function SetOnDialog(ID, Title, Content) {
	Dialogs[ID] = new android.app.Dialog(GUI);
	Dialogs[ID].setTitle(Title);
	
	Dialogs[ID].setContentView(Content);
	Dialogs[ID].show();
}

/*/
 *------------------------------
 *      Property Functions
 *------------------------------
/*/
function AddTextView(ID, Text, TextSize, Color, XTextAlign, YTextAlign, Fuc, LongFuc) {
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

	return TextViews[ID];
}

function AddButton(ID, Text, TextSize, Color, Fuc, LongFuc) {
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

	return Buttons[ID];
}

function AddToggle(ID, Text1, Text2, TextSize1, TextSize2, Color1, Color2, Fuc1, Fuc2, LongFuc) {
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
				
				Fuc1();
			} else if (Toggles[ID].getText() == Text1) {
				Toggles[ID].setText(Text2);
				Toggles[ID].setTextSize(TextSize2);
				Toggles[ID].setTextColor(Color2);
				
				Fuc2();
			}
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

	return Toggles[ID];
}

function AddTouch(ID, Text, TextSize, Color, TouchFuc, ReleaseFuc) {
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

	return Touches[ID];
}

function AddEditText(ID, Type, Text, Color, BackGroundColor) {
	EditTexts[ID] = new android.widget.EditText(GUI);
	EditTexts[ID].setText(Text);
	EditTexts[ID].setTextColor(Color);
	EditTexts[ID].setBackgroundColor(BackGroundColor);
	//EditTexts[ID].setInputType(Type);
	
	return EditTexts[ID];
}

function AddCheckBox(ID, Value, ChangeFuc) {
	CheckBoxes[ID] = new android.widget.CheckBox(GUI);
	CheckBoxes[ID].setChecked(Value);
	
	var ChangeContent = new android.view.View.OnClickListener() {
		onClick: function() {
			ChangeFuc();
		}
	}
	
	CheckBoxes[ID].setOnClickListener(ChangeContent);
	
	return CheckBoxes[ID];
}

function AddSeekBar(ID, Value, MaxValue, DragFuc, TouchFuc, ReleaseFuc) {
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

	return SeekBars[ID];
}

function AddProgressBar(ID, Value, MaxValue, Size, Color) {
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
	ProgressBars[ID].getProgressDrawable().setColorFilter(Color, android.graphics.PorterDuff.Mode.SRC_IN);

	return ProgressBars[ID];
}

function AddImageButton(ID, Mode, URL) {
	ImageButtons[ID] = new android.widget.ImageButtons(GUI);
	
	switch(Mode.toLowerCase().toString()) {
		case "local":
			try {
				ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(URL))));
			} catch(Error) {
				clientMessage(Error);
				print("ファイルが存在しません");
			}
			
			break;
			
		case "network":
			try {
				var Connecter = new java.net.URL(URL).openConnection();
					Connecter.setDoInput(true);
					Connecter.connect();
		
				ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(Connecter.getInputStream()));
			} catch(Error) {
				clientMessage(Error);
				print("インターネットに接続されていないかAndroid 4.0以上です");
			}
			
			break;
	}
}

function AddImageView(ID, Mode, URL) {
	ImageViews[ID] = new android.widget.ImageView(GUI);
	
	switch(Mode.toLowerCase().toString()) {
		case "local":
			try {
				ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(URL))));
			} catch(Error) {
				clientMessage(Error);
				print("ファイルが存在しません");
			}
			
			break;

		case "network":
			try {
				var Connecter = new java.net.URL(URL).openConnection();
					Connecter.setDoInput(true);
					Connecter.connect();
		
				ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(Connecter.getInputStream()));
			} catch(Error) {
				clientMessage(Error);
				print("インターネットに接続されていないかAndroid 4.0以上です");
			}

			break;
	}

	return ImageViews[ID];
}

function AddLinearLayout(ID, Type, Content) {
	LinearLayouts[ID] = new android.widget.LinearLayout(GUI);
	
	switch(Type.toLowerCase().toString()) {
		case "vertical":
			LinearLayouts[ID].setOrientation(android.widget.LinearLayout.VERTICAL);
			break;
			
		case "horizontal":
			LinearLayouts[ID].setOrientation(android.widget.LinearLayout.HORIZONTAL);
			break;
			
		case "normal":
			break;
	}
	
	for(var i = 0; i < Content.length; i++) {
		LinearLayouts[ID].addView(Content[i]);
	}

	return LinearLayouts[ID];
}

function AddScrollView(ID, Content) {
	ScrollViews[ID] = new android.widget.ScrollView(GUI);
	ScrollViews[ID].addView(Content);
	
	return ScrollViews[ID];
}
