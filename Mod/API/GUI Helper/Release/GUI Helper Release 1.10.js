/*/
 *#######################################################
 *GUI Helper Release 1.10
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
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
							print("エラーが発生しました");
							clientMessage(Error);
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
		},
		
		ShowAlertDialog: function (ID, Title, Message, YesText, CancelText, NoText, YesFuc, CancelFuc, NoFuc, IsCancelable) {
			GUIHelper.AlertDialogs[ID] = new android.app.AlertDialog.Builder(GUIHelper.GUI);
			GUIHelper.AlertDialogs[ID].setTitle(Title);
			GUIHelper.AlertDialogs[ID].setMessage(Message);
			
			GUIHelper.AlertDialogs[ID].setPositiveButton(YesText,
				new android.content.DialogInterface.OnClickListener() {
					onClick: function () {
						YesFuc();
					}
				}
			);
			GUIHelper.AlertDialogs[ID].setNeutralButton(CancelText,
				new android.content.DialogInterface.OnClickListener() {
					onClick: function () {
						CancelFuc();
					}
				}
			);
			GUIHelper.AlertDialogs[ID].setNegativeButton(NoText,
				new android.content.DialogInterface.OnClickListener() {
					onClick: function () {
						NoFuc();
					}
				}
			);
			
			GUIHelper.AlertDialogs[ID].setCancelable(IsCancelable);
			GUIHelper.AlertDialogs[ID].create().show();
		}
	}
	
	/*/
	 *------------------------------
	 *<<Property Functions>>
	 *------------------------------
	/*/
	this.Property = {
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
		
		AddEditText: function (ID, Text, Color, BackGroundColor) {
			GUIHelper.EditTexts[ID] = new android.widget.EditText(GUIHelper.GUI);
			GUIHelper.EditTexts[ID].setText(Text);
			GUIHelper.EditTexts[ID].setTextColor(Color);
			GUIHelper.EditTexts[ID].setBackgroundColor(BackGroundColor);
			
			return GUIHelper.EditTexts[ID];
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
		
		AddImageButton: function (ID, Mode, URL, ScaleType, Fuc, LongFuc) {
			GUIHelper.ImageButtons[ID] = new android.widget.ImageButton(GUIHelper.GUI);
			
			switch(Mode.toLowerCase().toString()) {
				case "local":
					try {
						GUIHelper.ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(URL))));
					} catch(Error) {
						clientMessage(Error);
						print("ファイルが存在しません");
					}
					
					break;
					
				case "texture":
					try {
						GUIHelper.ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack(URL)));
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
			}
			
			GUIHelper.ImageButtons[ID].setScaleType(ScaleType);
			
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
		
		AddImageView: function (ID, Mode, URL) {
			GUIHelper.ImageViews[ID] = new android.widget.ImageView(GUIHelper.GUI);
			
			switch(Mode.toLowerCase().toString()) {
				case "local":
					try {
						GUIHelper.ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(URL))));
					} catch(Error) {
						clientMessage(Error);
						print("ファイルが存在しません");
					}
					
					break;
					
				case "texture":
					try {
						GUIHelper.ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack(URL)));
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
			}
			
			return GUIHelper.ImageViews[ID];
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
			
			for(var i = 0; i < Content.length; i++) {
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
							
							GUIHelper.Version.Remote = VersionReader.readLine();
							
							if (GUIHelper.Version.This != GUIHelper.Version.Remote && GUIHelper.Version.This < GUIHelper.Version.Remote) {
								GUIHelper.System.Update();
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
			GUIHelper.SetFunctions.CreateGUI(function() {
				GUIHelper.SetFunctions.ShowAlertDialog(0, "アップデート確認()", "最新バージョンが確認されました。\nアップデートしますか？", "Yes", "Cancel", "No", function() {
					new java.lang.Thread(
						new java.lang.Runnable({
							run: function () {
								try {
									var Connecter = {
										This: new java.io.File(GUIHelper.GUI.getDir("modscripts", 0) + GUIHelper.ModName),
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
										var ModWriter = new java.io.BufferedWriter(new java.io.FileWriter(new java.io.File(GUIHelper.GUI.getDir("modscripts", 0) + GUIHelper.ModName + "_Update.js")));

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