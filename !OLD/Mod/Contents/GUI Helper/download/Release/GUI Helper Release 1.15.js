/*/
 *#######################################################
 *GUI Helper Release 1.15
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
 *#######################################################
/*/
var GUIHelper = {
	GUI: com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
	PopUpWindows: [],
	Dialogs: [],
	
	Buttons: [],
	CheckBoxes: [],
	EditTexts: [],
	ImageButtons: [],
	ImageViews: [],
	NumberPickers: [],
	ProgressBars: [],
	RadioButtons: [],
	RadioGroups: [],
	SeekBars: [],
	Spinners: [],
	TextViews: [],
	Toggles: [],
	Touches: [],
	
	LinearLayouts: [],
	ScrollViews: [],
	
	ModName: "",
	
	Version: {
		This: 1.10,
		Remote: null
	},
	
	/*/
	 *------------------------------
	 *<<Style Args>>
	 *------------------------------
	/*/
	Style: {
		Align: {
			Left: android.view.Gravity.LEFT, //左
			Right: android.view.Gravity.RIGHT, //右
			Top: android.view.Gravity.TOP, //上
			Bottom: android.view.Gravity.BOTTOM, //下
			Center: android.view.Gravity.CENTER //中央
		},
		
		Color: {
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
			ARGB: function(A, R, G, B) {return android.graphics.Color.argb(A, R, G, B)}
		},
		
		ScaleType: {
			Normal: android.widget.ImageView.ScaleType.CENTER,
			AllFit: android.widget.ImageView.ScaleType.FIT_XY,
			Fit_Center_HorizontalWide: android.widget.ImageView.ScaleType.CENTER_CROP,
			Fit_Center_VerticalWide: android.widget.ImageView.ScaleType.FIT_CENTER,
			Fit_Left_VerticalWide: android.widget.ImageView.ScaleType.FIT_START,
			Fit_Right_VerticalWide: android.widget.ImageView.ScaleType.FIT_END
		},
		
		Size: {
			Wrap: android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
			Match: android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
			Fill: android.widget.LinearLayout.LayoutParams.FILL_PARENT
		}
	},
	
	/*/
	 *------------------------------
	 *<<Setting Functions>>
	 *------------------------------
	/*/
	Set: {
		CreateGUI: function (Content) {
			GUIHelper.GUI.runOnUiThread(
				new java.lang.Runnable({
					run: function() {
						try {
							Content();
						} catch(Error) {
							print("エラーが発生しました");
							clientMessage(Error);
						}
					}
				})
			);
		},
		
		DeleteGUI: function (ID) {
			GUIHelper.GUI.runOnUiThread(
				new java.lang.Runnable({
					run: function() {
						try {
							GUIHelper.PopUpWindows[ID].dismiss();
						} catch (Error) {
							
						}
					}
				})
			);
		},
		
		DeleteAllGUI: function () {
			GUIHelper.GUI.runOnUiThread(
				new java.lang.Runnable({
					run: function() {
						try {
							for (var i = 0; i < GUIHelper.PopUpWindows.length; i++) {
								GUIHelper.PopUpWindows[i].dismiss();
							}
						} catch (Error) {
							print("エラーが発生しました");
							clientMessage(Error);
						}
					}
				})
			);
		},
		
		SetOnPopUpWindow: function (ID, Content, Width, Height, XAlign, YAlign, XPosition, YPosition) {
			GUIHelper.PopUpWindows[ID] = new android.widget.PopupWindow(Content, Width, Height);
			GUIHelper.PopUpWindows[ID].showAtLocation(GUIHelper.GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
			
			GUIHelper.PopUpWindows[ID].setContentView(Content);
		},
		
		ShowDialog: function (ID, Title, Content) {
			GUIHelper.Dialogs[ID] = new android.app.Dialog(GUIHelper.GUI);
			GUIHelper.Dialogs[ID].setTitle(Title);
			
			GUIHelper.Dialogs[ID].setContentView(Content);
			GUIHelper.Dialogs[ID].show();
		}
	},
	
	/*/
	 *------------------------------
	 *<<Property Functions>>
	 *------------------------------
	/*/
	Property: {
		AddButton: function (ID, Text, TextSize, Color, Fuc, LongFuc) {
			GUIHelper.Buttons[ID] = new android.widget.Button(GUIHelper.GUI);
			GUIHelper.Buttons[ID].setText(Text);
			GUIHelper.Buttons[ID].setTextSize(TextSize);
			GUIHelper.Buttons[ID].setTextColor(Color);
			
			GUIHelper.Buttons[ID].setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					Fuc();
				}
			});
			GUIHelper.Buttons[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
				onLongClick: function() {
					LongFuc();
					return true;
				}
			});
			
			return GUIHelper.Buttons[ID];
		},
		
		AddCheckBox: function (ID, Value, ChangeFuc) {
			GUIHelper.CheckBoxes[ID] = new android.widget.CheckBox(GUIHelper.GUI);
			GUIHelper.CheckBoxes[ID].setChecked(Value);
			
			GUIHelper.CheckBoxes[ID].setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					ChangeFuc();
				}
			});
			
			return GUIHelper.CheckBoxes[ID];
		},
		
		AddEditText: function (ID, Text, Color, BackGroundColor) {
			GUIHelper.EditTexts[ID] = new android.widget.EditText(GUIHelper.GUI);
			GUIHelper.EditTexts[ID].setText(Text);
			GUIHelper.EditTexts[ID].setTextColor(Color);
			GUIHelper.EditTexts[ID].setBackgroundColor(BackGroundColor);
			
			return GUIHelper.EditTexts[ID];
		},
		
		AddImageButton: function (ID, Mode, URL, ScaleType, Fuc, LongFuc) {
			GUIHelper.ImageButtons[ID] = new android.widget.ImageButton(GUIHelper.GUI);
			
			switch(Mode.toLowerCase().toString()) {
				case "base64":
					try {
						var EncodedByte = android.util.Base64.decode(URL, android.util.Base64.DEFAULT);
						GUIHelper.ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(EncodedByte, 0, EncodedByte.length));
					} catch (Error) {
						clientMessage(Error);
						print("Base64形式ではない可能性があります");
					}
					
					break;

				case "bitmap":
					try {
						GUIHelper.ImageButtons[ID].setImageBitmap(URL);
					} catch(Error) {
						clientMessage(Error);
						print("不正なBitmapです");
					}

					break;

				case "local":
					try {
						GUIHelper.ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(URL))));
					} catch(Error) {
						clientMessage(Error);
						print("ファイルが存在しません");
					}
					
					break;

				case "network":
					new java.lang.Thread(
						new java.lang.Runnable({
							run: function () {
								try {
									GUIHelper.ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.net.URL(URL).openConnection().getInputStream()));
								} catch(Error) {
									clientMessage(Error);
									print("インターネットに接続されていません");
								}
							}
						})
					).start();
					
					break;
					
				case "texture":
					try {
						GUIHelper.ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack(URL)));
					} catch(Error) {
						clientMessage(Error);
						print("ファイルが存在しません");
					}
					
					break;
			}
			
			GUIHelper.ImageButtons[ID].setScaleType(ScaleType);
			GUIHelper.ImageButtons[ID].setBackgroundColor(android.graphics.Color.TRANSPARENT);
			
			GUIHelper.ImageButtons[ID].setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					Fuc();
				}
			});
			GUIHelper.ImageButtons[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
				onLongClick: function() {
					LongFuc();
					return true;
				}
			});
			
			return GUIHelper.ImageButtons[ID];
		},
		
		AddImageView: function (ID, Mode, URL, ScaleType) {
			GUIHelper.ImageViews[ID] = new android.widget.ImageView(GUIHelper.GUI);
			
			switch(Mode.toLowerCase().toString()) {
				case "base64":
					try {
						var EncodedByte = android.util.Base64.decode(URL, android.util.Base64.DEFAULT);
						GUIHelper.ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(EncodedByte, 0, EncodedByte.length));
					} catch (Error) {
						clientMessage(Error);
						print("Base64形式ではない可能性があります");
					}
					
					break;

				case "bitmap":
					try {
						GUIHelper.ImageViews[ID].setImageBitmap(URL);
					} catch(Error) {
						clientMessage(Error);
						print("不正なBitmapです");
					}

					break;

				case "local":
					try {
						GUIHelper.ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(URL))));
					} catch(Error) {
						clientMessage(Error);
						print("ファイルが存在しません");
					}
					
					break;

				case "network":
					new java.lang.Thread(
						new java.lang.Runnable({
							run: function () {
								try {
									GUIHelper.ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.net.URL(URL).openConnection().getInputStream()));
								} catch(Error) {
									clientMessage(Error);
									print("インターネットに接続されていません");
								}
							}
						})
					).start();
					
					break;
					
				case "texture":
					try {
						GUIHelper.ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack(URL)));
					} catch(Error) {
						clientMessage(Error);
						print("ファイルが存在しません");
					}
					
					break;
			}
			
			GUIHelper.ImageViews[ID].setScaleType(ScaleType);
			
			return GUIHelper.ImageViews[ID];
		},
		
		AddNumberPicker: function (ID, Value, MinValue, MaxValue, ChangeFuc) {
			GUIHelper.NumberPickers[ID] = new android.widget.NumberPicker(GUIHelper.GUI);
				GUIHelper.NumberPickers[ID].setValue(Value);
				GUIHelper.NumberPickers[ID].setMinValue(MinValue);
				GUIHelper.NumberPickers[ID].setMaxValue(MaxValue);
				
				GUIHelper.NumberPickers[ID].setOnValueChangedListener(new android.widget.NumberPicker.OnValueChangeListener () {
					onValueChange: function (Picker, OldValue, NewValue) {
						ChangeFuc(Picker, OldValue, NewValue);
					}
				});
				
			return GUIHelper.NumberPickers[ID];
		},
		
		AddProgressBar: function (ID, Value, MaxValue, Size, Color) {
			switch(Size.toLowerCase().toString()) {
				case "small":
					GUIHelper.ProgressBars[ID] = new android.widget.ProgressBar(GUIHelper.GUI, null, android.R.attr.progressBarStyleSmall);
					break;
					
				case "normal":
					GUIHelper.ProgressBars[ID] = new android.widget.ProgressBar(GUIHelper.GUI, null, android.R.attr.progressBarStyle);
					break;
					
				case "large":
					GUIHelper.ProgressBars[ID] = new android.widget.ProgressBar(GUIHelper.GUI, null, android.R.attr.progressBarStyleLarge);
					break;
					
				case "horizontal":
					GUIHelper.ProgressBars[ID] = new android.widget.ProgressBar(GUIHelper.GUI, null, android.R.attr.progressBarStyleHorizontal);
					break;
			}
			
			GUIHelper.ProgressBars[ID].setProgress(Value);
			GUIHelper.ProgressBars[ID].setMax(MaxValue);
			GUIHelper.ProgressBars[ID].getProgressDrawable().setColorFilter(Color, android.graphics.PorterDuff.Mode.SRC_IN);
			
			return GUIHelper.ProgressBars[ID];
		},
		
		AddRadioButton: function (ID, Text, Value) {
			GUIHelper.RadioButtons[ID] = new android.widget.RadioButton(GUIHelper.GUI);
				GUIHelper.RadioButtons[ID].setText(Text);
				GUIHelper.RadioButtons[ID].setChecked(Value);
				
			return GUIHelper.RadioButtons[ID];
		},
		
		AddRadioGroup: function (ID, Type, Content) {
			GUIHelper.RadioGroups[ID] = new android.widget.RadioGroup(GUIHelper.GUI);
			
			switch(Type.toLowerCase().toString()) {
				case "vertical":
					GUIHelper.RadioGroups[ID].setOrientation(android.widget.LinearLayout.VERTICAL);
					break;
					
				case "horizontal":
					GUIHelper.RadioGroups[ID].setOrientation(android.widget.LinearLayout.HORIZONTAL);
					break;
					
				case "normal":
					break;
			}
			
			for (var i = 0; i < Content.length; i++) {
				GUIHelper.RadioGroups[ID].addView(Content[i]);
			}
			
			return GUIHelper.RadioGroups[ID];
		},
		
		AddSeekBar: function (ID, Value, MaxValue, DragFuc, TouchFuc, ReleaseFuc) {
			GUIHelper.SeekBars[ID] = new android.widget.SeekBar(GUIHelper.GUI);
			GUIHelper.SeekBars[ID].setProgress(Value);
			GUIHelper.SeekBars[ID].setMax(MaxValue);
			
			GUIHelper.SeekBars[ID].setOnSeekBarChangeListener(new android.view.View.OnSeekBarChangeListener() {
				onProgressChanged: function() {
					DragFuc();
				},
				
				onStartTrackingTouch: function() {
					TouchFuc();
				},
				
				onStopTrackingTouch: function() {
					ReleaseFuc();
				}
			});
			
			return GUIHelper.SeekBars[ID];
		},
		
		AddSpinner: function (ID, Values, SelectFuc) {
			var Adapter = new android.widget.ArrayAdapter(GUIHelper.GUI, android.R.layout.simple_spinner_item, Values);
				Adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
				
			GUIHelper.Spinners[ID] = new android.widget.Spinner(GUIHelper.GUI);
				GUIHelper.Spinners[ID].setAdapter(Adapter);
				GUIHelper.Spinners[ID].setSelection(0);
				GUIHelper.Spinners[ID].setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
					onItemSelected: function (Parent, View, Position, IDs) {
						SelectFuc(Parent, View, Position, IDs);
					},
					
					onNothingSelected: function (Parent) {
						
					}
				}));
				
			return GUIHelper.Spinners[ID];
		},
		
		AddTextView: function (ID, Text, TextSize, Color, XTextAlign, YTextAlign, Fuc, LongFuc) {
			GUIHelper.TextViews[ID] = new android.widget.TextView(GUIHelper.GUI);
			GUIHelper.TextViews[ID].setText(Text);
			GUIHelper.TextViews[ID].setTextSize(TextSize);
			GUIHelper.TextViews[ID].setTextColor(Color);
			GUIHelper.TextViews[ID].setGravity(YTextAlign|XTextAlign);
			
			GUIHelper.TextViews[ID].setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					Fuc();
				}
			});
			GUIHelper.TextViews[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
				onLongClick: function() {
					LongFuc();
					return true;
				}
			});
			
			return GUIHelper.TextViews[ID];
		},
		
		AddToggle: function (ID, Text1, Text2, TextSize1, TextSize2, Color1, Color2, Fuc1, Fuc2, LongFuc) {
			GUIHelper.Toggles[ID] = new android.widget.Button(GUIHelper.GUI);
			GUIHelper.Toggles[ID].setText(Text1);
			GUIHelper.Toggles[ID].setTextSize(TextSize1);
			GUIHelper.Toggles[ID].setTextColor(Color1);
			
			GUIHelper.Toggles[ID].setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					if (GUIHelper.Toggles[ID].getText() == Text2) {
						GUIHelper.Toggles[ID].setText(Text1);
						GUIHelper.Toggles[ID].setTextSize(TextSize1);
						GUIHelper.Toggles[ID].setTextColor(Color1);
						
						Fuc1();
					} else if (GUIHelper.Toggles[ID].getText() == Text1) {
						GUIHelper.Toggles[ID].setText(Text2);
						GUIHelper.Toggles[ID].setTextSize(TextSize2);
						GUIHelper.Toggles[ID].setTextColor(Color2);
						
						Fuc2();
					}
				}
			});
			
			GUIHelper.Toggles[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
				onLongClick: function() {
					LongFuc();
					return true;
				}
			});
			
			return GUIHelper.Toggles[ID];
		},
		
		AddTouch: function (ID, Text, TextSize, Color, TouchFuc, ReleaseFuc) {
			GUIHelper.Touches[ID] = new android.widget.Button(GUIHelper.GUI);
			GUIHelper.Touches[ID].setText(Text);
			GUIHelper.Touches[ID].setTextSize(TextSize);
			GUIHelper.Touches[ID].setTextColor(Color);
			
			GUIHelper.Touches[ID].setOnTouchListener(new android.view.View.OnTouchListener() {
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
			});
			
			return GUIHelper.Touches[ID];
		},
		
		
		AddLinearLayout: function (ID, Type, Content) {
			GUIHelper.LinearLayouts[ID] = new android.widget.LinearLayout(GUIHelper.GUI);
			
			switch(Type.toLowerCase().toString()) {
				case "vertical":
					GUIHelper.LinearLayouts[ID].setOrientation(android.widget.LinearLayout.VERTICAL);
					break;
					
				case "horizontal":
					GUIHelper.LinearLayouts[ID].setOrientation(android.widget.LinearLayout.HORIZONTAL);
					break;
					
				case "normal":
					break;
			}
			
			for (var i = 0; i < Content.length; i++) {
				GUIHelper.LinearLayouts[ID].addView(Content[i]);
			}
			
			return GUIHelper.LinearLayouts[ID];
		},
		
		AddScrollView: function (ID, Content) {
			GUIHelper.ScrollViews[ID] = new android.widget.ScrollView(GUIHelper.GUI);
			GUIHelper.ScrollViews[ID].addView(Content);
			
			return GUIHelper.ScrollViews[ID];
		}
	}
}