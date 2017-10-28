/*/
 *#######################################################
 *#【Vehicle Rider Alpha 1.0 - Build 1】
 *#Copyright (C) 2016 Genbu Hase All Rights Reversed.
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

var DataHelper = function () {
	this.File = {
		SpecialFolder: {
			SDCard: android.os.Environment.getExternalStorageDirectory(),
			Alarms: android.os.Environment.DIRECTORY_ALARMS,
			DCIM: android.os.Environment.DIRECTORY_DCIM,
			//Document: android.os.Environment.DIRECTORY_DOCUMENTS,
			Downloads: android.os.Environment.DIRECTORY_DOWNLOADS,
			Movies: android.os.Environment.DIRECTORY_MOVIES,
			Music: android.os.Environment.DIRECTORY_MUSIC,
			Notifications: android.os.Environment.DIRECTORY_NOTIFICATIONS,
			Pictures: android.os.Environment.DIRECTORY_PICTURES,
			Podcasts: android.os.Environment.DIRECTORY_PODCASTS,
			Ringtones: android.os.Environment.DIRECTORY_RINGTONES,
			
			MCPE: android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/"
		},

		CreateFile: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					if (!new File(Path).getParentFile().exists()) {
						new File(Path).getParentFile().mkdirs();
					} else {

					}

					new File(Path).createNewFile();
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},

		CreateFolder: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					new File(Path).mkdirs();
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},

		ReadFile: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					var Reader = new BufferedReader(new FileReader(new File(Path)));
					var Data = "";

					for (var Text = Reader.readLine() ; Text != null; Text = Reader.readLine()) {
						Data += Text + "\n";
					}

					Reader.close();
					return Data;
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},

		ReadFileLine: function (Path, Line) {
			with (JavaImporter(java.io)) {
				try {
					var Reader = new BufferedReader(new FileReader(new File(Path)));
					var Data = "";

					for (var Text = Reader.readLine(), LineNumber = 1; Text != null; Text = Reader.readLine(), LineNumber++) {
						if (LineNumber == Line) {
							Data = Text;
						}
					}

					Reader.close();
					return Data;
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},

		ReadFileFromTexturePack: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					var Reader = new BufferedReader(new InputStreamReader(ModPE.openInputStreamFromTexturePack(Path)));
					var Data = "";

					for (var Text = Reader.readLine() ; Text != null; Text = Reader.readLine()) {
						Data += Text + "\n";
					}

					Reader.close();
					return Data;
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},

		WriteFile: function (Path, Data) {
			with (JavaImporter(java.io)) {
				try {
					var Writer = new BufferedWriter(new FileWriter(new File(Path)));
					Writer.write(Data);

					Writer.close();
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},

		GetFileLine: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					var Reader = new BufferedReader(new FileReader(new File(Path)));
					var Line = 0;

					for (var Text = Reader.readLine() ; Text != null; Text = Reader.readLine()) {
						Line++;
					}

					Reader.close();
					return Line;
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},

		GetFileNames: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					return new File(Path).listFiles();
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},

		IsVaild: function (Path) {
			with (JavaImporter(java.io)) {
				return new File(Path).exists();
			}
		}
	}

	this.DB = {
		SaveDB: function (Path, Data, SplitWord) {
			with (JavaImporter(java.io)) {
				try {
					var Writer = new BufferedWriter(new FileWriter(new File(Path)));
					var Lines = 0;

					for (var i = 0; i < Data.length; i++) {
						Lines++;
						Writer.write(Data[i][0] + SplitWord + Data[i][1]);

						if (Lines != Data.length) {
							Writer.newLine();
						}
					}

					Writer.close();
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},

		LoadDB: function (Path, Line, SplitWord) {
			with (JavaImporter(java.io)) {
				try {
					var Reader = new BufferedReader(new FileReader(new File(Path)));
					var Data = "";

					for (var Text = Reader.readLine(), LineNumber = 1; Text != null; Text = Reader.readLine(), LineNumber++) {
						if (LineNumber == Line) {
							Data = Text.split(SplitWord);
						}
					}

					Reader.close();
					return Data;
				} catch (Error) {
					clientMessage(Error);
				}
			}
		}
	}

	this.Json = {
		SaveJSON: function (Path, Data) {
			with (new DataHelper()) {
				try {
					File.CreateFile(Path);
					File.WriteFile(Path, JSON.stringify(Data, null, "\t"));
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},

		LoadJSON: function (Data) {
			with (new DataHelper()) {
				try {
					return JSON.parse(Data.replace("\n", ""));
				} catch (Error) {
					clientMessage(Error);
				}
			}
		}
	}

	this.Network = {
		GetFileText: function (URI) {
			new java.lang.Thread(
				new java.lang.Runnable({
					run: function () {
						with (JavaImporter(java.io, java.net)) {
							try {
								var Reader = new BufferedReader(new ImputStreamReader(new URL(URI).getInputStream()));
								var Data = "";

								for (var Text = Reader.readLine() ; Text != null; Text = Reader.readLine()) {
									Data += Text + "\n";
								}

								Reader.close();
								return Data;
							} catch (Error) {
								clientMessage(Error);
							}
						}
					}
				})
			).start();
		},

		Import: function (URI) {
			var Th = new java.lang.Thread(
				new java.lang.Runnable({
					run: function () {
						var Code = new java.io.BufferedReader(new java.io.InputStreamReader(new java.net.URL(URI).openStream()));
						var CodeDatas = "";
						var AddCodes = "";

						while (CodeDatas != null) {
							AddCodes += CodeDatas + "\n";
							CodeDatas = Code.readLine();
						}

						eval(AddCodes);
					}
				})
			);

			Th.start();

			while (Th.getState() != java.lang.Thread.State.TERMINATED) {

			}
		}
	}

	this.Utility = {
		Base64ToBitmap: function (Base64) {
			try {
				var EncodedByte = android.util.Base64.decode(Base64, android.util.Base64.DEFAULT);
				return android.graphics.BitmapFactory.decodeByteArray(EncodedByte, 0, EncodedByte.length);
			} catch (Error) {
				clientMessage(Error);
			}
		},

		BitmapToBase64: function (Bitmap) {
			try {
				var ByteStream = new java.io.ByteArrayOutputStream();
				Bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, ByteStream);

				return android.util.Base64.encodeToString(ByteStream, android.util.Base64.DEFAULT);
			} catch (Error) {
				clientMessage(Error);
			}
		},

		GetBitmapPartFromImage: function (Path, X1, Y1, X2, Y2) {
			var Image = android.graphics.BitmapFactory.decodeFile(Path);
			return android.graphics.Bitmap.createBitmap(Image, X1, Y1, X2 - X1, Y2 - Y1);
		},

		ImportJsFromTexturePack: function (Path) {
			try {
				eval(new java.lang.String(ModPE.getBytesFromTexturePack(Path), "UTF-8"));
			} catch (Error) {
				print("インポートが失敗しました");
			}
		}
	}
}

var NativeClassExtender = function () {
	this.Enable = function () {
		Player.GetItemAmount = function (ID, Damage) {
			var Count = 0;

			for (var i = 9; i < 36; i++) {
				if (Player.getInventorySlot(i) == ID && Player.getInventorySlotData(i) == Damage) {
					Count += Player.getInventorySlotCount(i);
				}
			}

			return Count;
		}

		Entity.GetYawDirection = function (Ent) {
			var Yaws = ((Entity.getYaw(Ent) % 360) + 360) % 360;

			var Result = 
				Yaws == 0 ? "南" : 
				0 < Yaws && Yaws < 45 ? "南南西" : 
				Yaws == 45 ? "南西" : 
				45 < Yaws && Yaws < 90 ? "西南西" : 
				Yaws == 90 ? "西" : 
				90 < Yaws && Yaws < 135 ? "西北西" : 
				Yaws == 135 ? "北西" : 
				135 < Yaws && Yaws < 180 ? "北北西" : 
				Yaws == 180 ? "北" : 
				180 < Yaws && Yaws < 225 ? "北北東" : 
				Yaws == 225 ? "北東" : 
				225 < Yaws && Yaws < 270 ? "東北東" : 
				Yaws == 270 ? "東" : 
				270 < Yaws && Yaws < 315 ? "東南東" : 
				Yaws == 315 ? "南東" : 
				315 < Yaws && Yaws < 360 ? "南南東" : null;

			return Result;
		}
	}

	this.Disable = function () {
		Player.GetItemAmount = undefined;
		Entity.GetYawDirection = undefined;
	}
}

with (new DataHelper()) {
	new NativeClassExtender().Enable();

	var Vehicles = [
		
	]
	
	var Renders = {
		Block: function () {
			var Block = Renderer.createHumanoidRenderer();
			var Model = Block.getModel();
			var Head = Model.getPart("head").clear();
			var Body = Model.getPart("body").clear();
			var LeftArm = Model.getPart("leftArm").clear();
			var RightArm = Model.getPart("rightArm").clear();
			var LeftLeg = Model.getPart("leftLeg").clear();
			var RightLeg = Model.getPart("rightLeg").clear();
				
			LeftLeg.addBox(-2, -2, -2, 4, 4, 4);
			RightLeg.addBox(-2, -2, -2, 4, 4, 4);
			
			return Block;
		}
	}
	
	var IsShowing = false;
	
	function newLevel() {
		if (!File.IsVaild(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Vehicle Rider/WorldData.Json")) {
			File.CreateFile(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Vehicle Rider/WorldData.Json");

			var Ents = Entity.getAll();

			for (var i = 0; i < Ents.length; i++) {
				if (Entity.getExtraData(Ents[i], "GenbuHase.VehicleRider.VehicleType") != null) {
					switch (Entity.getExtraData(Ents[i], "GenbuHase.VehicleRider.VehicleType")) {
						case "Block":
							Vehicles.push({
								UUID: Ents[i],
								Type: "Block",
						
								Position: [
									Entity.getX(Ents[i]),
									Entity.getY(Ents[i]),
									Entity.getZ(Ents[i])
								]
							});

							break;

						default:
							break;
					}
				}
			}

			Json.SaveJSON(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Vehicle Rider/WorldData.Json", Vehicles);
		} else if (File.IsVaild(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Vehicle Rider/WorldData.Json")) {
			Vehicles = Json.LoadJSON(File.ReadFile(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Vehicle Rider/WorldData.Json"));

			for (var i = 0; i < Vehicles.length; i++) {
				switch (Vehicles[i]["Type"]) {
					case "Block":
						Entity.setRenderType(Vehicles[i]["UUID"], Renders.Block().renderType);
						break;
				}
			}
		}
		
		ModPE.setItem(501, "blaze_rod", 0, "Summon Rod", 1);
	}
	
	function entityAddedHook(Ent) {
		if (Entity.getExtraData(Ent, "GenbuHase.VehicleRider.VehicleType") != null) {
			switch (Entity.getExtraData(Ent, "GenbuHase.VehicleRider.VehicleType")) {
				case "Block":
					Vehicles.push({
						UUID: Ent,
						Type: "Block",
						
						Position: [
							Entity.getX(Ent),
							Entity.getY(Ent),
							Entity.getZ(Ent)
						]
					});
					
					Json.SaveJSON(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Vehicle Rider/WorldData.Json", Vehicles);
					break;
					
				default:
					break;
			}
		}
	}
	
	function entityRemovedHook(Ent) {
		if (Entity.getExtraData(Ent, "GenbuHase.VehicleRider.VehicleType") != null) {
			for (var i = 0; i < Vehicles.length; i++) {
				if (Vehicles[i]["UUID"] == Ent) {
					Vehicles.splice(i, 1);
					Json.SaveJSON(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Vehicle Rider/WorldData.Json", Vehicles);
				}
			}
		}
	}
	
	function useItem(X, Y, Z, ItemID, BlockID, Side, ItemData, BlockData) {
		switch (ItemID) {
			case 501:
				var Ent = Level.spawnMob(X, Y + 1, Z, 11);
				Entity.setRenderType(Ent, Renders.Block().renderType);
				Entity.setExtraData(Ent, "GenbuHase.VehicleRider.VehicleType", "Block");
					
				break;
		}
	}
	
	function modTick() {
		if (Player.getPointedEntity() != -1) {
			if (!IsShowing && Entity.getExtraData(Player.getPointedEntity(), "GenbuHase.VehicleRider.VehicleType") != null) {
				with (GUIHelper) {
					with (GUIHelper.Style) {
						with (GUIHelper.Set) {
							with (GUIHelper.Property) {
								CreateGUI(function () {
									IsShowing = true;
									
									SetOnPopUpWindow(0, 
										AddButton(0, "Ride", 10, Color.Magenta, function () {
											Entity.rideAnimal(Player.getEntity(), Player.getPointedEntity());
										}, function () {
											
										})
									, Size.Wrap, Size.Wrap, Align.Center, Align.Bottom, 0, -50);
								});
							}
						}
					}
				}
			}
		} else if (Player.getPointedEntity() == -1 || Entity.getExtraData(Player.getPointedEntity(), "GenbuHase.VehicleRider.VehicleType") == null) {
			if (IsShowing) {
				with (GUIHelper) {
					with (GUIHelper.Style) {
						with (GUIHelper.Set) {
							with (GUIHelper.Property) {
								IsShowing = false;
								DeleteGUI(0);
							}
						}
					}
				}
			}
		}

		for (var i = 0; i < Vehicles.length; i++) {
			if (Entity.getRider(Entity.getUniqueId(Vehicles[i]["UUID"])) == 1) {
				var Vel = 
					Entity.GetYawDirection(Player.getEntity()) == "南" ? [0, 0, 0.2] : 
					Entity.GetYawDirection(Player.getEntity()) == "南南西" ? [-0.1, 0, 0.2] : 
					Entity.GetYawDirection(Player.getEntity()) == "南西" ? [-0.2, 0, 0.2] : 
					Entity.GetYawDirection(Player.getEntity()) == "西南西" ? [-0.2, 0, 0.1] : 
					Entity.GetYawDirection(Player.getEntity()) == "西" ? [-0.2, 0, 0] : 
					Entity.GetYawDirection(Player.getEntity()) == "西北西" ? [-0.2, 0, -0.1] : 
					Entity.GetYawDirection(Player.getEntity()) == "北西" ? [-0.2, 0, -0.2] : 
					Entity.GetYawDirection(Player.getEntity()) == "北北西" ? [-0.1, 0, -0.2] : 
					Entity.GetYawDirection(Player.getEntity()) == "北" ? [0, 0, -0.2] : 
					Entity.GetYawDirection(Player.getEntity()) == "北北東" ? [0.1, 0, -0.2] : 
					Entity.GetYawDirection(Player.getEntity()) == "北東" ? [0.2, 0, -0.2] : 
					Entity.GetYawDirection(Player.getEntity()) == "東北東" ? [0.2, 0, -0.1] : 
					Entity.GetYawDirection(Player.getEntity()) == "東" ? [0.2, 0, 0] : 
					Entity.GetYawDirection(Player.getEntity()) == "東南東" ? [0.2, 0, 0.1] : 
					Entity.GetYawDirection(Player.getEntity()) == "南東" ? [0.2, 0, 0.2] : 
					Entity.GetYawDirection(Player.getEntity()) == "南南東" ? [0.1, 0, 0.2] : [0, 0, 0];

				Entity.setVelX(Entity.getUniqueId(Vehicles[i]["UUID"]), Vel[0]);
				Entity.setVelY(Entity.getUniqueId(Vehicles[i]["UUID"]), Vel[1]);
				Entity.setVelZ(Entity.getUniqueId(Vehicles[i]["UUID"]), Vel[2]);
			}
		}
	}
}