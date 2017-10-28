/*/
 *#######################################################
 *GUI Helper Beta 1.20
 *Copyright (C) 2015-2020 Genbu Hase All Rights Reserved.
 *#######################################################
/*/
var GUIHelper = function (ModName) {
	this.Ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	this.ModName = ModName;
	
	R = {
		THIS: this,
		
		ALIGN: {
			Left: android.view.Gravity.LEFT, //左
			Right: android.view.Gravity.RIGHT, //右
			Top: android.view.Gravity.TOP, //上
			Bottom: android.view.Gravity.BOTTOM, //下
			Center: android.view.Gravity.CENTER //中央
		},
		
		COLOR: {
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
		
		SCALETYPE: {
			Normal: android.widget.ImageView.ScaleType.CENTER,
			AllFit: android.widget.ImageView.ScaleType.FIT_XY,
			CenterHorizontalWide: android.widget.ImageView.ScaleType.CENTER_CROP,
			CenterVerticalWide: android.widget.ImageView.ScaleType.FIT_CENTER,
			LeftVerticalWide: android.widget.ImageView.ScaleType.FIT_START,
			RightVerticalWide: android.widget.ImageView.ScaleType.FIT_END
		},
		
		SIZE: {
			Wrap: android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
			Match: android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
			Fill: android.widget.LinearLayout.LayoutParams.FILL_PARENT
		}
	}
	
	Object.freeze(R);
	
	this.Init = function (GUIFuc) {
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
		).start();
	}
	
	this.CreatePopupWindow = function (Width, Height, XAlign, YAlign, XPosition, YPosition) {
		try {
			var View = new android.widget.PopupWindow(null, Width, Height);
				View.setFocusable(true);
				View.update();
				
				View.showAtLocation(this.Ctx.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
				
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
	
	this.CreateButton = function (Text, OnClick, OnLongClick) {
		try {
			var View = new android.widget.Button(this.Ctx);
				View.setText(Text);
				
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
	
	this.CreateEditText = function (Text) {
		try {
			var View = new android.widget.EditText(this.Ctx);
				View.setText(Text);
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
	
	this.CreateTextView = function (Text) {
		try {
			var View = new android.widget.TextView(this.Ctx);
				View.setText(Text);
				
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
	
	this.CreateTouch = function (Text, OnTouch, OnRelease) {
		try {
			var View = new android.widget.Button(this.Ctx);
				View.setText(Text);
				
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