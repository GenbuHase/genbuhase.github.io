/*/
 *#######################################################
 *WorldEdit Beta 1.20
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
 *#######################################################
/*/
var GUIHelper = function (ModName) {
	this.Ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	this.ModName = ModName;
	
	R = {
		this: this,
		
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
			CenterHorizontalWide: android.widget.ImageView.ScaleType.CENTER_CROP,
			CenterVerticalWide: android.widget.ImageView.ScaleType.FIT_CENTER,
			LeftVerticalWide: android.widget.ImageView.ScaleType.FIT_START,
			RightVerticalWide: android.widget.ImageView.ScaleType.FIT_END
		},
		
		Size: {
			Wrap: android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
			Match: android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
			Fill: android.widget.LinearLayout.LayoutParams.FILL_PARENT
		}
	}
	
	Object.freeze(R);
	
	this.GUIHelperInit = function (GUIFuc) {
		this.Ctx.runOnUiThread(
			new java.lang.Runnable({
				run: function () {
					try {
						GUIFuc();
					} catch (Error) {
						clientMessage(Error);
						R.THIS.Util.Message("<" + R.THIS.ModName + "> GUI処理の実行中に不明なエラーが発生しました", android.widget.Toast.LENGTH_LONG);
					}
				}
			})
		);
	}
	
	this.CreatePopupWindow = function (Content, Width, Height, XAlign, YAlign, XPosition, YPosition) {
		try {
			var View = new android.widget.PopupWindow(Content, Width, Height);
				//View.setFocusable(true);
				View.update();
				
				View.showAtLocation(this.Ctx.getWindow().getDecorView(), XAlign | YAlign, XPosition, YPosition);
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreatePopupWindow");
		}
	}
	
	this.CreateDialog = function (Title, Content) {
		try {
			var View = new android.app.Dialog(this.Ctx);
				View.setTitle(Title);
				View.setContentView(Content);
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateDialog");
		}
	}
	
	this.CreateButton = function (Text, TextSize, TextColor, OnClick, OnLongClick) {
		try {
			var View = new android.widget.Button(this.Ctx);
				View.setText(Text);
				View.setTextSize(TextSize);
				View.setTextColor(TextColor);
				
				View.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (Button) {
						OnClick(Button);
					}
				});
				
				View.setOnLongClickListener(new android.view.View.OnLongClickListener() {
					onLongClick: function (Button) {
						OnLongClick(Button);
						return true;
					}
				});
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateButton");
		}
	}
	
	this.CreateCheckBox = function (Value, OnChange) {
		try {
			var View = new android.widget.CheckBox(this.Ctx);
				View.setChecked(Value);
				
				View.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (CheckBox) {
						OnChange(CheckBox);
					}
				});
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateCheckBox");
		}
	}
	
	this.CreateEditText = function (Text, TextColor, BackGroundColor) {
		try {
			var View = new android.widget.EditText(this.Ctx);
				View.setText(Text);
				View.setTextColor(TextColor);
				View.setBackgroundColor(BackGroundColor);
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateTextView");
		}
	}
	
	this.CreateImageButton = function (Mode, Obj, OnClick, OnLongClick) {
		try {
			var View = new android.widget.ImageButton(this.Ctx);
			
			switch(Mode.toLowerCase().toString()) {
				case "base64":
					try {
						View.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(Obj, android.util.Base64.DEFAULT), 0, android.util.Base64.decode(Obj, android.util.Base64.DEFAULT).length));
					} catch (Error) {
						clientMessage(Error);
						R.THIS.Util.Message("Base64形式ではない可能性があります");
					}
					
					break;
					
				case "bitmap":
					try {
						View.setImageBitmap(Obj);
					} catch(Error) {
						clientMessage(Error);
						R.THIS.Util.Message("不正なBitmapです");
					}
					
					break;
					
				case "local":
					try {
						View.setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(Obj))));
					} catch(Error) {
						clientMessage(Error);
						R.THIS.Util.Message("ファイルが存在しません");
					}
					
					break;
					
				case "network":
					new java.lang.Thread(
						new java.lang.Runnable({
							run: function () {
								try {
									View.setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.net.URL(Obj).openConnection().getInputStream()));
								} catch(Error) {
									clientMessage(Error);
									R.THIS.Util.Message("インターネットに接続されていません");
								}
							}
						})
					).start();
					
					break;
					
				case "texture":
					try {
						View.setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack(Obj)));
					} catch(Error) {
						clientMessage(Error);
						R.THIS.Util.Message("ファイルが存在しません");
					}
					
					break;
					
				default:
					break;
			}
			
			View.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function (ImageButton) {
					OnClick(ImageButton);
				}
			});
			
			View.setOnLongClickListener(new android.view.View.OnLongClickListener() {
				onLongClick: function (ImageButton) {
					OnLongClick(ImageButton);
					return true;
				}
			});
			
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateImageButton");
		}
	}
	
	this.CreateImageView = function (Mode, Obj) {
		try {
			var View = new android.widget.ImageView(this.Ctx);
			
			switch(Mode.toLowerCase().toString()) {
				case "base64":
					try {
						View.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(Obj, android.util.Base64.DEFAULT), 0, android.util.Base64.decode(Obj, android.util.Base64.DEFAULT).length));
					} catch (Error) {
						clientMessage(Error);
						R.THIS.Util.Message("Base64形式ではない可能性があります");
					}
					
					break;
					
				case "bitmap":
					try {
						View.setImageBitmap(Obj);
					} catch(Error) {
						clientMessage(Error);
						R.THIS.Util.Message("不正なBitmapです");
					}
					
					break;
					
				case "local":
					try {
						View.setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(Obj))));
					} catch(Error) {
						clientMessage(Error);
						R.THIS.Util.Message("ファイルが存在しません");
					}
					
					break;
					
				case "network":
					new java.lang.Thread(
						new java.lang.Runnable({
							run: function () {
								try {
									View.setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.net.URL(Obj).openConnection().getInputStream()));
								} catch(Error) {
									clientMessage(Error);
									R.THIS.Util.Message("インターネットに接続されていません");
								}
							}
						})
					).start();
					
					break;
					
				case "texture":
					try {
						View.setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack(Obj)));
					} catch(Error) {
						clientMessage(Error);
						R.THIS.Util.Message("ファイルが存在しません");
					}
					
					break;
					
				default:
					break;
			}
			
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateImageView");
		}
	}
	
	this.CreateNumberPicker = function (Value, MinValue, MaxValue, OnChange) {
		try {
			var View = new android.widget.NumberPicker(this.Ctx);
				View.setValue(Value);
				View.setMinValue(MinValue);
				View.setMaxValue(MaxValue);
				
				View.setOnValueChangedListener(new android.widget.NumberPicker.OnValueChangeListener () {
					onValueChange: function (NumberPicker, OldValue, NewValue) {
						OnChange(NumberPicker, OldValue, NewValue);
					}
				});
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateNumberPicker");
		}
	}
	
	this.CreateProgressBar = function (Type, Value, MaxValue, Color) {
		try {
			var View;
			
			switch(Size.toLowerCase().toString()) {
				case "small":
					View = new android.widget.ProgressBar(this.Ctx, null, android.R.attr.progressBarStyleSmall);
					break;
					
				case "normal":
					View = new android.widget.ProgressBar(this.Ctx, null, android.R.attr.progressBarStyle);
					break;
					
				case "large":
					View = new android.widget.ProgressBar(this.Ctx, null, android.R.attr.progressBarStyleLarge);
					break;
					
				case "horizontal":
					View = new android.widget.ProgressBar(this.Ctx, null, android.R.attr.progressBarStyleHorizontal);
					break;
			}
			
			View.setProgress(Value);
			View.setMax(MaxValue);
			
			if (Color != null) {
				View.getProgressDrawable().setColorFilter(Color, android.graphics.PorterDuff.Mode.SRC_IN);
			}
			
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateProgressBar");
		}
	}
	
	this.CreateRadioButton = function (Text, Value) {
		try {
			var View = new android.widget.RadioButton(this.Ctx);
				View.setText(Text);
				View.setChecked(Value);
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateRadioButton");
		}
	}
	
	this.CreateRadioGroup = function (Type, RadioButtons) {
		try {
			var View = new android.widget.RadioGroup(this.Ctx);
			
			switch(Type.toLowerCase().toString()) {
				case "vertical":
					View.setOrientation(android.widget.LinearLayout.VERTICAL);
					break;
					
				case "horizontal":
					View.setOrientation(android.widget.LinearLayout.HORIZONTAL);
					break;
					
				case "normal":
					break;
					
				default:
					break;
			}
			
			for (var i = 0; i < RadioButtons.length; i++) {
				View.addView(RadioButtons[i]);
			}
			
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateRadioGroup");
		}
	}
	
	this.CreateSeekBar = function (Value, MaxValue, OnDrag, OnTouch, OnRelease) {
		try {
			var View = new android.widget.SeekBar(this.Ctx);
				View.setProgress(Value);
				View.setMax(MaxValue);
				
				View.setOnSeekBarChangeListener(new android.view.View.OnSeekBarChangeListener() {
					onProgressChanged: function (SeekBar, Progress, FromUser) {
						OnDrag(SeekBar, Progress, FromUser);
					},
					
					onStartTrackingTouch: function (SeekBar) {
						OnTouch(SeekBar);
					},
					
					onStopTrackingTouch: function (SeekBar) {
						OnRelease(SeekBar);
					}
				});
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateSeekBar");
		}
	}
	
	this.CreateSpinner = function (Values, OnSelect) {
		try {
			var Adapter = new android.widget.ArrayAdapter(this.Ctx, android.R.layout.simple_spinner_item, Values);
				Adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
				
			var View = new android.widget.Spinner(this.Ctx);
				View.setAdapter(Adapter);
				View.setSelection(0);
				View.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
					onItemSelected: function (Parent, View, Position, IDs) {
						OnSelect(Parent, View, Position, IDs);
					},
					
					onNothingSelected: function (Parent) {
						
					}
				}));
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateSpinner");
		}
	}
	
	this.CreateTextView = function (Text, TextSize, TextColor) {
		try {
			var View = new android.widget.TextView(this.Ctx);
				View.setText(Text);
				View.setTextSize(TextSize);
				View.setTextColor(TextColor);
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateTextView");
		}
	}
	
	this.CreateToggle = function (Texts, TextSizes, Colors, OnClicks, OnLongClick) {
		try {
			var View = new android.widget.Button(this.Ctx);
				View.setText(Texts[0]);
				View.setTextSize(TextSizes[0]);
				View.setTextColor(Colors[0]);
				
				View.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function () {
						if (View.getText() == Texts[1]) {
							View.setText(Texts[0]);
							View.setTextSize(TextSizes[0]);
							View.setTextColor(Colors[0]);
							
							OnClicks[0]();
						} else if (View.getText() == Texts[0]) {
							View.setText(Texts[1]);
							View.setTextSize(TextSizes[1]);
							View.setTextColor(Colors[1]);
							
							OnClicks[1]();
						}
					}
				});
				
				View.setOnLongClickListener(new android.view.View.OnLongClickListener() {
					onLongClick: function (Toggle) {
						OnLongClick(Toggle);
						return true;
					}
				});
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateToggle");
		}
	}
	
	this.CreateTouch = function (Text, TextSize, TextColor, OnTouch, OnRelease) {
		try {
			var View = new android.widget.Button(this.Ctx);
				View.setText(Text);
				View.setTextSize(TextSize);
				View.setTextColor(TextColor);
				
				View.setOnTouchListener(new android.view.View.OnTouchListener() {
					onTouch: function(Touch, Event) {
						switch(Event.getAction()) {
							case android.view.MotionEvent.ACTION_DOWN:
								OnTouch(Touch, Event);
								break;
								
							case android.view.MotionEvent.ACTION_UP:
								OnRelease(Touch, Event);
								break;
						}
						
						return true;
					}
				});
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateTouch");
		}
	}
	
	this.CreateLinearLayout = function (Type, Contents) {
		try {
			var View = new android.widget.LinearLayout(this.Ctx);
			
			switch(Type.toLowerCase().toString()) {
				case "vertical":
					View.setOrientation(android.widget.LinearLayout.VERTICAL);
					break;
					
				case "horizontal":
					View.setOrientation(android.widget.LinearLayout.HORIZONTAL);
					break;
					
				case "normal":
					break;
					
				default:
					break;
			}
			
			for (var i = 0; i < Contents.length; i++) {
				View.addView(Contents[i]);
			}
			
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateLinearLayout");
		}
	}
	
	this.CreateScrollView = function (Content) {
		try {
			var View = new android.widget.ScrollView(this.Ctx);
				View.addView(Content);
				
			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateScrollView");
		}
	}
	
	this.Property = {
		BackgroundColor: function (View, Color) {
			try {
				View.setBackgroundColor(Color);
				return View;
			} catch (Error) {
				clientMessage(Error);
				R.THIS.System.ErrorLog(Error, "Property.BackgroundColor");
			}
		},
		
		ScaleType: function (View, ScaleType) {
			try {
				View.setScaleType(ScaleType);
				return View;
			} catch (Error) {
				clientMessage(Error);
				R.THIS.System.ErrorLog(Error, "Property.ScaleType");
			}
		},
		
		TextColor: function (View, Color) {
			try {
				View.setTextColor(Color);
				return View;
			} catch (Error) {
				clientMessage(Error);
				R.THIS.System.ErrorLog(Error, "Property.TextColor");
			}
		},
		
		TextSize: function (View, Size) {
			try {
				View.setTextSize(Size);
				return View;
			} catch (Error) {
				clientMessage(Error);
				R.THIS.System.ErrorLog(Error, "Property.TextSize");
			}
		}
	}
	
	this.Util = {
		Message: function (Obj, Length) {
			new android.widget.Toast(R.THIS.Ctx).makeText(R.THIS.Ctx, Obj, Length == undefined ? android.widget.Toast.LENGTH_SHORT : Length).show();
		}
	}
	
	//Do not use this method.
	this.System = {
		ErrorLog: function (Error, MethodName) {
			clientMessage(Error);
			R.THIS.Util.Message("<" + R.THIS.ModName + " / GUI Helper> " + MethodName + "でエラーが発生しました", android.widget.Toast.LENGTH_LONG);
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

with (new DataHelper()) {
	var WorldEdit = {
		Ctx: com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
		ModName: "WorldEdit Release 1.20",
		Schematics: [],
	
		Pos: [[null, null, null], [null, null, null]],

		XMax: null,
		XMin: null,
		YMax: null,
		YMin: null,
		ZMax: null,
		ZMin: null,

		Flag: {
			MenuArg: null,

			HoldingSTool1: false,
			HoldingSTool2: false,
			HoldingIDChecker: false
		},
	
		System: {
			Option: {
				ItemID: {
					SelectTool1: 501,
					SelectTool2: 502,
				
					IDChecker: 503
				},
			
				FileDir: File.SpecialFolder.MCPE + "minecraftpe/WorldEdit/"
			},
		
			AddItem: function () {
				ModPE.setItem(WorldEdit.System.Option.ItemID.SelectTool1, "axe", 0, "選択ツール(始点) / Selecting Area Tool(For StartPos)", 1);
					Item.setCategory(WorldEdit.System.Option.ItemID.SelectTool1, ItemCategory.TOOL);
					Player.addItemCreativeInv(WorldEdit.System.Option.ItemID.SelectTool1, 1, 0);
					
				ModPE.setItem(WorldEdit.System.Option.ItemID.SelectTool2, "axe", 0, "選択ツール(終点) / Selecting Area Tool(For EndPos)", 1);
					Item.setCategory(WorldEdit.System.Option.ItemID.SelectTool2, ItemCategory.TOOL);
					Player.addItemCreativeInv(WorldEdit.System.Option.ItemID.SelectTool2, 1, 0);
					
				ModPE.setItem(WorldEdit.System.Option.ItemID.IDChecker, "blaze_rod", 0, "IDチェッカー / ID Checker", 1);
					Item.setCategory(WorldEdit.System.Option.ItemID.IDChecker, ItemCategory.TOOL);
					Player.addItemCreativeInv(WorldEdit.System.Option.ItemID.IDChecker, 1, 0);
			},
		
			LoadConfig: function () {
				with (new DataHelper()) {
					if (!File.IsVaild(File.SpecialFolder.MCPE + "minecraftpe/WorldEdit - Option.cfg")) {
						File.CreateFile(File.SpecialFolder.MCPE + "minecraftpe/WorldEdit - Option.cfg");
						Json.SaveJSON(File.SpecialFolder.MCPE + "minecraftpe/WorldEdit - Option.cfg", WorldEdit.System.Option);
					} else {
						WorldEdit.System.Option = Json.LoadJSON(File.ReadFile(File.SpecialFolder.MCPE + "minecraftpe/WorldEdit - Option.cfg"));
					}
				
					File.CreateFolder(WorldEdit.System.Option.FileDir + "Schematics/");
					WorldEdit.Schematics = File.GetFileNames(WorldEdit.System.Option.FileDir + "Schematics/");
				}
			},
		
			ShowMenu: function () {
				with (new GUIHelper(WorldEdit.ModName)) {
					GUIHelperInit(function () {
						WorldEdit.Flag.MenuArg = CreatePopupWindow(
							CreateButton("WorldEdit", R.Size.Wrap, R.Color.Magenta, function () {
								CreateDialog("WorldEdit == メニュー", 
									CreateScrollView(
										CreateLinearLayout("Vertical", [
											CreateButton("Set", R.Size.Wrap, R.Color.Magenta, function () {
												var Data1 = CreateNumberPicker(0, 0, 255, function () {});
												var Data2 = CreateNumberPicker(0, 0, 15, function () {});

												CreateDialog("WorldEdit == Setメニュー", 
													CreateScrollView(
														CreateLinearLayout("Vertical", [
															CreateTextView("ブロックID：", 10.5, R.Color.Yellow),
															Data1,

															CreateTextView("ダメージ値：", 10.5, R.Color.Yellow),
															Data2,

															CreateButton("確定", R.Size.Wrap, R.Color.Magenta, function () {
																WorldEdit.Set(Data1.getValue(), Data2.getValue());
															}, function () {})
														])
													)
												).show();
											}, function () {}),

											CreateButton("Box", R.Size.Wrap, R.Color.Magenta, function () {
												var Data1 = CreateNumberPicker(0, 0, 255, function () {});
												var Data2 = CreateNumberPicker(0, 0, 15, function () {});

												CreateDialog("WorldEdit == Boxメニュー", 
													CreateScrollView(
														CreateLinearLayout("Vertical", [
															CreateTextView("ブロックID：", 10.5, R.Color.Yellow),
															Data1,

															CreateTextView("ダメージ値：", 10.5, R.Color.Yellow),
															Data2,

															CreateButton("確定", R.Size.Wrap, R.Color.Magenta, function () {
																WorldEdit.Box(Data1.getValue(), Data2.getValue());
															}, function () {})
														])
													)
												).show();
											}, function () {})
										])
									)
								).show();
							}, function () {
								
							}), R.Size.Wrap, R.Size.Wrap, R.Align.Right, R.Align.Bottom, 0, 0
						);
					});
				}
			},

			HideMenu: function () {
				with (new GUIHelper(WorldEdit.ModName)) {
					GUIHelperInit(function () {
						WorldEdit.Flag.MenuArg.dismiss();
						WorldEdit.Flag.MenuArg = null;
					});
				}
			},
		
			IsSelecting: function () {
				if (WorldEdit.Pos[0][0] != null && WorldEdit.Pos[0][1] != null && WorldEdit.Pos[0][2] != null && WorldEdit.Pos[1][0] != null && WorldEdit.Pos[1][1] != null && WorldEdit.Pos[1][2] != null) {
					WorldEdit.XMax = Math.max(WorldEdit.Pos[0][0], WorldEdit.Pos[1][0]), WorldEdit.XMin = Math.min(WorldEdit.Pos[0][0], WorldEdit.Pos[1][0]),
					WorldEdit.YMax = Math.max(WorldEdit.Pos[0][1], WorldEdit.Pos[1][1]), WorldEdit.YMin = Math.min(WorldEdit.Pos[0][1], WorldEdit.Pos[1][1]),
					WorldEdit.ZMax = Math.max(WorldEdit.Pos[0][2], WorldEdit.Pos[1][2]), WorldEdit.ZMin = Math.min(WorldEdit.Pos[0][2], WorldEdit.Pos[1][2]);
				
					return true;
				} else {
					WorldEdit.System.ShowMsg("<" + WorldEdit.ModName + "> 範囲が選択されていません");
					return false;
				}
			},
		
			ShowMsg: function (Obj) {
				new android.widget.Toast(WorldEdit.Ctx).makeText(WorldEdit.Ctx, Obj, android.widget.Toast.LENGTH_SHORT).show();
			}
		},
	
		Set: function (ID, Damage) {
			if (WorldEdit.System.IsSelecting()) {
				for (var X = 0; X <= WorldEdit.XMax - WorldEdit.XMin; X++) {
					for (var Y = 0; Y <= WorldEdit.YMax - WorldEdit.YMin; Y++) {
						for (var Z = 0; Z <= WorldEdit.ZMax - WorldEdit.ZMin; Z++) {
							Level.setTile(WorldEdit.XMin + X, WorldEdit.YMin + Y, WorldEdit.ZMin + Z, ID, Damage);
						}
					}
				}
			
				WorldEdit.System.ShowMsg("<" + WorldEdit.ModName + "> Setの実行に成功しました。");
			}
		},
	
		Box: function (ID, Damage) {
			if (WorldEdit.System.IsSelecting()) {
				for (var Z = 0; Z <= WorldEdit.ZMax - WorldEdit.ZMin; Z++) {
					Level.setTile(WorldEdit.XMin, WorldEdit.YMin, WorldEdit.ZMin + Z, ID, Damage);
					Level.setTile(WorldEdit.XMax, WorldEdit.YMin, WorldEdit.ZMin + Z, ID, Damage);
				
					Level.setTile(WorldEdit.XMin, WorldEdit.YMax, WorldEdit.ZMin + Z, ID, Damage);
					Level.setTile(WorldEdit.XMax, WorldEdit.YMax, WorldEdit.ZMin + Z, ID, Damage);
				}
			
				for (var X = 0; X <= WorldEdit.XMax - WorldEdit.XMin; X++) {
					Level.setTile(WorldEdit.XMin + X, WorldEdit.YMin, WorldEdit.ZMin, ID, Damage);
					Level.setTile(WorldEdit.XMin + X, WorldEdit.YMin, WorldEdit.ZMax, ID, Damage);
				
					Level.setTile(WorldEdit.XMin + X, WorldEdit.YMax, WorldEdit.ZMin, ID, Damage);
					Level.setTile(WorldEdit.XMin + X, WorldEdit.YMax, WorldEdit.ZMax, ID, Damage);
				}
			
				for (var Y = 0; Y <= WorldEdit.YMax - WorldEdit.YMin; Y++) {
					Level.setTile(WorldEdit.XMin, WorldEdit.YMin + Y, WorldEdit.ZMin, ID, Damage);
					Level.setTile(WorldEdit.XMax, WorldEdit.YMin + Y, WorldEdit.ZMin, ID, Damage);
					Level.setTile(WorldEdit.XMin, WorldEdit.YMin + Y, WorldEdit.ZMax, ID, Damage);
					Level.setTile(WorldEdit.XMax, WorldEdit.YMin + Y, WorldEdit.ZMax, ID, Damage);
				}
			
				WorldEdit.System.ShowMsg("<" + WorldEdit.ModName + "> Boxの実行に成功しました。");
			}
		}
	}

	function newLevel() {
		WorldEdit.System.AddItem();
		WorldEdit.System.ShowMenu();
	}

	function leaveGame() {
		WorldEdit.System.HideMenu();
	}

	WorldEdit.System.LoadConfig();
}