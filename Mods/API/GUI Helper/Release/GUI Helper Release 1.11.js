/*/
 *#######################################################
 *GUI Helper Release 1.11
 *Copyright (C) 2015-2020 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

/*/
 *------------------------------
 *         System Args
 *------------------------------
/*/
var GUIHelper = function () {
	this.GUI = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	this.PopUpWindows = [];
	this.Dialogs = [];
	this.AlertDialogs = [];
	
	this.TextViews = [];
	this.Buttons = [];
	this.Touches = [];
	this.Toggles = [];
	this.Switches = [];
	this.EditTexts = [];
	this.CheckBoxes = [];
	this.SeekBars = [];
	this.ProgressBars = [];
	this.ImageViews = [];
	this.ImageButtons = [];
	
	this.LinearLayouts = [];
	this.ScrollViews = [];
	
	this.ModName = "";
	
	this.Version = {
		This: 1.10,
		Remote: null
	}
	
	/*/
	 *------------------------------
	 *<<Style Args>>
	 *------------------------------
	/*/
	this.Style = {
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
	}
	
	/*/
	 *------------------------------
	 *<<Setting Functions>>
	 *------------------------------
	/*/
	this.Set = {
		CreateGUI: function (Content) {
			new GUIHelper().GUI.runOnUiThread(
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
			new GUIHelper().GUI.runOnUiThread(
				new java.lang.Runnable({
					run: function() {
						try {
							new GUIHelper().PopUpWindows[ID].dismiss();
						} catch (Error) {
							print("エラーが発生しました");
							clientMessage(Error);
						}
					}
				})
			);
		},
		
		DeleteAllGUI: function () {
			new GUIHelper().GUI.runOnUiThread(
				new java.lang.Runnable({
					run: function() {
						try {
							for (var i = 0; i < new GUIHelper().PopUpWindows.length; i++) {
								new GUIHelper().PopUpWindows[i].dismiss();
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
			new GUIHelper().PopUpWindows[ID] = new android.widget.PopupWindow(Content, Width, Height);
			new GUIHelper().PopUpWindows[ID].showAtLocation(new GUIHelper().GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
			
			new GUIHelper().PopUpWindows[ID].setContentView(Content);
		},
		
		ShowDialog: function (ID, Title, Content) {
			new GUIHelper().Dialogs[ID] = new android.app.Dialog(new GUIHelper().GUI);
			new GUIHelper().Dialogs[ID].setTitle(Title);
			
			new GUIHelper().Dialogs[ID].setContentView(Content);
			new GUIHelper().Dialogs[ID].show();
		},
		
		ShowAlertDialog: function (ID, Title, Message, YesText, CancelText, NoText, YesFuc, CancelFuc, NoFuc, IsCancelable) {
			new GUIHelper().AlertDialogs[ID] = new android.app.AlertDialog.Builder(new GUIHelper().GUI);
			new GUIHelper().AlertDialogs[ID].setTitle(Title);
			new GUIHelper().AlertDialogs[ID].setMessage(Message);
			
			new GUIHelper().AlertDialogs[ID].setPositiveButton(YesText,
				new android.content.DialogInterface.OnClickListener() {
					onClick: function () {
						YesFuc();
					}
				}
			);
			new GUIHelper().AlertDialogs[ID].setNeutralButton(CancelText,
				new android.content.DialogInterface.OnClickListener() {
					onClick: function () {
						CancelFuc();
					}
				}
			);
			new GUIHelper().AlertDialogs[ID].setNegativeButton(NoText,
				new android.content.DialogInterface.OnClickListener() {
					onClick: function () {
						NoFuc();
					}
				}
			);
			
			new GUIHelper().AlertDialogs[ID].setCancelable(IsCancelable);
			new GUIHelper().AlertDialogs[ID].create().show();
		}
	}
	
	/*/
	 *------------------------------
	 *<<Property Functions>>
	 *------------------------------
	/*/
	this.Property = {
		AddTextView: function (ID, Text, TextSize, Color, XTextAlign, YTextAlign, Fuc, LongFuc) {
			new GUIHelper().TextViews[ID] = new android.widget.TextView(new GUIHelper().GUI);
			new GUIHelper().TextViews[ID].setText(Text);
			new GUIHelper().TextViews[ID].setTextSize(TextSize);
			new GUIHelper().TextViews[ID].setTextColor(Color);
			new GUIHelper().TextViews[ID].setGravity(YTextAlign|XTextAlign);
			
			new GUIHelper().TextViews[ID].setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					Fuc();
				}
			});
			new GUIHelper().TextViews[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
				onLongClick: function() {
					LongFuc();
					return true;
				}
			});
			
			return new GUIHelper().TextViews[ID];
		},
		
		AddButton: function (ID, Text, TextSize, Color, Fuc, LongFuc) {
			new GUIHelper().Buttons[ID] = new android.widget.Button(new GUIHelper().GUI);
			new GUIHelper().Buttons[ID].setText(Text);
			new GUIHelper().Buttons[ID].setTextSize(TextSize);
			new GUIHelper().Buttons[ID].setTextColor(Color);
			
			new GUIHelper().Buttons[ID].setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					Fuc();
				}
			});
			new GUIHelper().Buttons[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
				onLongClick: function() {
					LongFuc();
					return true;
				}
			});
			
			return new GUIHelper().Buttons[ID];
		},
		
		AddTouch: function (ID, Text, TextSize, Color, TouchFuc, ReleaseFuc) {
			new GUIHelper().Touches[ID] = new android.widget.Button(new GUIHelper().GUI);
			new GUIHelper().Touches[ID].setText(Text);
			new GUIHelper().Touches[ID].setTextSize(TextSize);
			new GUIHelper().Touches[ID].setTextColor(Color);
			
			new GUIHelper().Touches[ID].setOnTouchListener(new android.view.View.OnTouchListener() {
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
			
			return new GUIHelper().Touches[ID];
		},
		
		AddToggle: function (ID, Text1, Text2, TextSize1, TextSize2, Color1, Color2, Fuc1, Fuc2, LongFuc) {
			new GUIHelper().Toggles[ID] = new android.widget.Button(new GUIHelper().GUI);
			new GUIHelper().Toggles[ID].setText(Text1);
			new GUIHelper().Toggles[ID].setTextSize(TextSize1);
			new GUIHelper().Toggles[ID].setTextColor(Color1);
			
			new GUIHelper().Toggles[ID].setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					if (new GUIHelper().Toggles[ID].getText() == Text2) {
						new GUIHelper().Toggles[ID].setText(Text1);
						new GUIHelper().Toggles[ID].setTextSize(TextSize1);
						new GUIHelper().Toggles[ID].setTextColor(Color1);
						
						Fuc1();
					} else if (new GUIHelper().Toggles[ID].getText() == Text1) {
						new GUIHelper().Toggles[ID].setText(Text2);
						new GUIHelper().Toggles[ID].setTextSize(TextSize2);
						new GUIHelper().Toggles[ID].setTextColor(Color2);
						
						Fuc2();
					}
				}
			});
			new GUIHelper().Toggles[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
				onLongClick: function() {
					LongFuc();
					return true;
				}
			});
			
			return new GUIHelper().Toggles[ID];
		},
		
		AddEditText: function (ID, Text, Color, BackGroundColor) {
			new GUIHelper().EditTexts[ID] = new android.widget.EditText(new GUIHelper().GUI);
			new GUIHelper().EditTexts[ID].setText(Text);
			new GUIHelper().EditTexts[ID].setTextColor(Color);
			new GUIHelper().EditTexts[ID].setBackgroundColor(BackGroundColor);
			
			return new GUIHelper().EditTexts[ID];
		},
		
		AddCheckBox: function (ID, Value, ChangeFuc) {
			new GUIHelper().CheckBoxes[ID] = new android.widget.CheckBox(new GUIHelper().GUI);
			new GUIHelper().CheckBoxes[ID].setChecked(Value);
			
			new GUIHelper().CheckBoxes[ID].setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					ChangeFuc();
				}
			});
			
			return new GUIHelper().CheckBoxes[ID];
		},
		
		AddSeekBar: function (ID, Value, MaxValue, DragFuc, TouchFuc, ReleaseFuc) {
			new GUIHelper().SeekBars[ID] = new android.widget.SeekBar(new GUIHelper().GUI);
			new GUIHelper().SeekBars[ID].setProgress(Value);
			new GUIHelper().SeekBars[ID].setMax(MaxValue);
			
			new GUIHelper().SeekBars[ID].setOnSeekBarChangeListener(new android.view.View.OnSeekBarChangeListener() {
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
			
			return new GUIHelper().SeekBars[ID];
		},
		
		AddProgressBar: function (ID, Value, MaxValue, Size, Color) {
			switch(Size.toLowerCase().toString()) {
				case "small":
					new GUIHelper().ProgressBars[ID] = new android.widget.ProgressBar(new GUIHelper().GUI, null, android.R.attr.progressBarStyleSmall);
					break;
					
				case "normal":
					new GUIHelper().ProgressBars[ID] = new android.widget.ProgressBar(new GUIHelper().GUI, null, android.R.attr.progressBarStyle);
					break;
					
				case "large":
					new GUIHelper().ProgressBars[ID] = new android.widget.ProgressBar(new GUIHelper().GUI, null, android.R.attr.progressBarStyleLarge);
					break;
					
				case "horizontal":
					new GUIHelper().ProgressBars[ID] = new android.widget.ProgressBar(new GUIHelper().GUI, null, android.R.attr.progressBarStyleHorizontal);
					break;
			}
			
			new GUIHelper().ProgressBars[ID].setProgress(Value);
			new GUIHelper().ProgressBars[ID].setMax(MaxValue);
			new GUIHelper().ProgressBars[ID].getProgressDrawable().setColorFilter(Color, android.graphics.PorterDuff.Mode.SRC_IN);
			
			return new GUIHelper().ProgressBars[ID];
		},
		
		AddImageButton: function (ID, Mode, URL, ScaleType, Fuc, LongFuc) {
			new GUIHelper().ImageButtons[ID] = new android.widget.ImageButton(new GUIHelper().GUI);
			
			switch(Mode.toLowerCase().toString()) {
				case "local":
					try {
						new GUIHelper().ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(URL))));
					} catch(Error) {
						clientMessage(Error);
						print("ファイルが存在しません");
					}
					
					break;
					
				case "texture":
					try {
						new GUIHelper().ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack(URL)));
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
									new GUIHelper().ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.net.URL(URL).openConnection().getInputStream()));
								} catch(Error) {
									clientMessage(Error);
									print("インターネットに接続されていません");
								}
							}
						})
					).start();
					
					break;
			}
			
			new GUIHelper().ImageButtons[ID].setScaleType(ScaleType);
			
			new GUIHelper().ImageButtons[ID].setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					Fuc();
				}
			});
			new GUIHelper().ImageButtons[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
				onLongClick: function() {
					LongFuc();
					return true;
				}
			});
			
			return new GUIHelper().ImageButtons[ID];
		},
		
		AddImageView: function (ID, Mode, URL) {
			new GUIHelper().ImageViews[ID] = new android.widget.ImageView(new GUIHelper().GUI);
			
			switch(Mode.toLowerCase().toString()) {
				case "local":
					try {
						new GUIHelper().ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(URL))));
					} catch(Error) {
						clientMessage(Error);
						print("ファイルが存在しません");
					}
					
					break;
					
				case "texture":
					try {
						new GUIHelper().ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack(URL)));
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
									new GUIHelper().ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.net.URL(URL).openConnection().getInputStream()));
								} catch(Error) {
									clientMessage(Error);
									print("インターネットに接続されていません");
								}
							}
						})
					).start();
					
					break;
			}
			
			return new GUIHelper().ImageViews[ID];
		},
		
		AddLinearLayout: function (ID, Type, Content) {
			new GUIHelper().LinearLayouts[ID] = new android.widget.LinearLayout(new GUIHelper().GUI);
			
			switch(Type.toLowerCase().toString()) {
				case "vertical":
					new GUIHelper().LinearLayouts[ID].setOrientation(android.widget.LinearLayout.VERTICAL);
					break;
					
				case "horizontal":
					new GUIHelper().LinearLayouts[ID].setOrientation(android.widget.LinearLayout.HORIZONTAL);
					break;
					
				case "normal":
					break;
			}
			
			for(var i = 0; i < Content.length; i++) {
				new GUIHelper().LinearLayouts[ID].addView(Content[i]);
			}
			
			return new GUIHelper().LinearLayouts[ID];
		},
		
		AddScrollView: function (ID, Content) {
			new GUIHelper().ScrollViews[ID] = new android.widget.ScrollView(new GUIHelper().GUI);
			new GUIHelper().ScrollViews[ID].addView(Content);
			
			return new GUIHelper().ScrollViews[ID];
		}
	}
	
	/*/
	 *------------------------------
	 *<<System Functions>>
	 *------------------------------
	/*/
	this.System = {
		UpdateCheck: function () {
			new java.lang.Thread(
				new java.lang.Runnable({
					run: function () {
						try {
							var VersionConnecter = new java.net.URL("https://raw.githubusercontent.com/GenbuHase/GUI-Helper-Official-Repository/master/VERSION").openConnection();
							var VersionReader = new java.io.BufferedReader(new java.io.InputStreamReader(VersionConnecter.getInputStream()));
							
							new GUIHelper().Version.Remote = VersionReader.readLine();
							
							if (new GUIHelper().Version.This != new GUIHelper().Version.Remote && new GUIHelper().Version.This < new GUIHelper().Version.Remote) {
								new GUIHelper().System.Update();
							}
						} catch (Error) {
							clientMessage(Error);
							print("ネットワークに接続されていません");
						}
					}
				})
			).start();
		},
		
		Update: function () {
			new GUIHelper().SetFunctions.CreateGUI(function() {
				new GUIHelper().SetFunctions.ShowAlertDialog(0, "アップデート確認()", "最新バージョンが確認されました。\nアップデートしますか？", "Yes", "Cancel", "No", function() {
					new java.lang.Thread(
						new java.lang.Runnable({
							run: function () {
								try {
									var Connecter = {
										This: new java.io.File(new GUIHelper().GUI.getDir("modscripts", 0) + new GUIHelper().ModName),
										Remote: new java.net.URL("https://raw.githubusercontent.com/GenbuHase/GUI-Helper-Official-Repository/master/Release/GUI%20Helper%20Release%20" + Version.Remote + ".js").openConnection()
									}
									
									var Reader = {
										This: new java.io.BufferedReader(new java.io.FileReader(Connecter.This)),
										Remote: new java.io.BufferedReader(new java.io.InputStreamReader(Connecter.Remote.getInputStream()))
									}
									
									var Data = {
										This: "",
										Remote: ""
									}
									
									var Flag = {
										This: false,
										Remote: false
									}

									var ModContent = "";
									
									for (var Lines = Reader.Remote.readLine(); Lines != null; Lines = Reader.Remote.readLine()) {
										Data.Remote += Lines + "\n";
									}
	
									for (var Lines = Reader.This.readLine(); Lines != null; Lines = Reader.This.readLine()) {
										ModContent += Lines + "\n";

										if (Lines == "/*/") {
											Flag.This = true;
										} else if (Lines == "//Thank you for using this template, GUI Helper.") {
											Data.This += Lines + "\n";
											Flag.This = false;
										}
		
										if (Flag.This) {
											Data.This += Lines + "\n";
										} else if (!Flag.This) {
			
										}
									}
	
									with (JavaImporter(java, java.io)) {
										var ModWriter = new java.io.BufferedWriter(new java.io.FileWriter(new java.io.File(new GUIHelper().GUI.getDir("modscripts", 0) + new GUIHelper().ModName + "_Update.js")));

										ModWriter.write(ModContent.replace(Data.This, Data.Remote));
										ModWriter.close();
									}
								} catch (Error) {
									clientMessage(Error);
								}
							}
						})
					).start();
				}, function() {
					
				}, function() {
					
				}, true);
			});
		}
	}
}

//Thank you for using this template, GUI Helper.