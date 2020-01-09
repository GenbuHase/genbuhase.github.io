/*/
 *###########################################################################
 *#Earth Defence Force Beta 1.13
 *#Copyright © 2015-2016 Genbu Project and Genbu Hase All Rights Reserved.
 *###########################################################################
/*/

/*/
 *------------------------------
 *<<API Field>>
 *------------------------------
/*/
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
		}
	}
}

var GUIHelper = {
	GUI: com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
	PopUpWindows: [],
	Dialogs: [],
	AlertDialogs: [],
	
	TextViews: [],
	Buttons: [],
	Touches: [],
	Toggles: [],
	Switches: [],
	EditTexts: [],
	CheckBoxes: [],
	SeekBars: [],
	ProgressBars: [],
	ImageViews: [],
	ImageButtons: [],
	
	LinearLayouts: [],
	ScrollViews: [],

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
	},
	
	/*/
	 *------------------------------
	 *<<Property Functions>>
	 *------------------------------
	/*/
	Property: {
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
}

with (new DataHelper()) {
	/*/
	 *------------------------------
	 *<<System Classes>>
	 *------------------------------
	/*/
	var Flags = {
		IsHolding: false,
		IsShooting: false,
		IsReloading: false,

		Memory: {
			HoldMemory: 0,
			ReloadMemory: 0
		}
	}

	var Gun = function (Property) {
		this.ID = Property.ID;
		this.Name = Property.Name;
		this.LV = Property.LV;
		this.Ammo = Property.Ammo;
		this.Damage = Property.Damage;
		this.Accuracy = Property.Accuracy;
		this.FireRate = Property.FireRate;
		this.ReloadTime = Property.ReloadTime;

		ModPE.setItem(this.ID, this.Name, 0, this.Name, 1);
		Player.addItemCreativeInv(this.ID, 1, 0);
		Item.setCategory(this.ID, ItemCategory.TOOL);
		
		this.Actions = {
			ID: this.ID,
			Name: this.Name,
			LV: this.LV,
			Ammo: this.Ammo,
			Damage: this.Damage,
			Accuracy: this.Accuracy,
			FireRate: this.FireRate,
			ReloadTime: this.ReloadTime,

			Fire: function () {
				with (JavaImporter(java, java.util)) {
					var Speed = 1;

					R = Math.cos(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2;
					X = Math.sin(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
					Y = Math.sin(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2 + Entity.getY(getPlayerEnt());
					Z = Math.cos(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
					
					Bullet = Level.spawnMob(X, Y, Z, 81);
					Entity.setExtraData(Bullet, "Genbu Hase.Earth Defence Force For MCPE.BulletName", this.Name);

					Level.playSoundEnt(Player.getEntity(), "random.explode", 0.5, new Random().nextInt(2) + 1);

					R = Math.cos(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2);
					X = Math.sin(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
					Y = Math.sin(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2) + Entity.getY(getPlayerEnt());
					Z = Math.cos(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());

					setVelX(Bullet, X - Entity.getX(Bullet));
					setVelY(Bullet, Y - Entity.getY(Bullet));
					setVelZ(Bullet, Z - Entity.getZ(Bullet));
				}
			},

			Reload: function () {
				with (GUIHelper) {
					with (GUIHelper.Set) {
						with (GUIHelper.Property) {
							with (GUIHelper.Style) {
								if (Flags.IsReloading) {
									Flags.Memory.ReloadMemory++;
									ProgressBars[10].setValue(Flags.Memory.ReloadMemory / (ReloadTime * 20));

									if (ProgressBars[10].getValue() == 100) {
										Flags.Memory.ReloadMemory = 0;
										DeleteGUI(10);
										Flags.IsReloading = false;
									}
								}
							}
						}
					}
				}
			},

			ShowButtons: function () {
				with (GUIHelper) {
					with (GUIHelper.Set) {
						with (GUIHelper.Property) {
							with (GUIHelper.Style) {
								CreateGUI(function () {
									if (Flags.IsHolding) {
										SetOnPopUpWindow(0,
											AddTouch(0, "射撃", 10, Color.Red, function () {
												Flags.IsShooting = true;
											}, function () {
												Flags.IsShooting = false;
											})
										, Size.Wrap, Size.Wrap, Align.Right, Align.Center, 0, -50);

										SetOnPopUpWindow(1,
											AddButton(1, "リロード", 10, Color.Magenta, function () {
												if (!Flags.IsReloading) {
													Flags.IsReloading = true;

													CreateGUI(function () {
														SetOnPopUpWindow(10,
															AddProgressBar(10, 0, 100, "Horizontal", Color.Red)
														, 100, 20, Align.Center, Align.Center, 0, 50);
													});
												}
											}, function () {
												
											})
										, Size.Wrap, Size.Wrap, Align.Right, Align.Center, 0, -50);
									}
								});
							}
						}
					}
				}
			},

			HideButtons: function () {
				with (GUIHelper) {
					with (GUIHelper.Set) {
						with (GUIHelper.Property) {
							with (GUIHelper.Style) {
								if (!Flags.IsHolding) {
									DeleteGUI(0);
									DeleteGUI(1);
								}
							}
						}
					}
				}
			}
		}
	}

	/*/
	 *------------------------------
	 *<<Guns>>
	 *------------------------------
	/*/
	var RangerWeaponDatas = {
		AR: Json.LoadJSON(File.ReadFileFromTexturePack("assets/resources/weapons/Ranger/AssaultRifle.Json"))
	}

	var RangerWeapons = {
		AR: []
	}
	
	/*/
	 *------------------------------
	 *<<Hook Functions>>
	 *------------------------------
	/*/
	function newLevel() {
		for (var i = 0; i < RangerWeaponDatas.AR.length; i++) {
			RangerWeapons.AR[i] = new Gun({
				ID: RangerWeaponDatas.AR[i]["ID"],
				Name: RangerWeaponDatas.AR[i]["Name"],
				LV: RangerWeaponDatas.AR[i]["LV"],
				Ammo: RangerWeaponDatas.AR[i]["Ammo"],
				Damage: RangerWeaponDatas.AR[i]["Damage"],
				Accuracy: RangerWeaponDatas.AR[i]["Accuracy"],
				FireRate: RangerWeaponDatas.AR[i]["FireRate"],
				ReloadTime: RangerWeaponDatas.AR[i]["ReloadTime"]
			});
		}
	}

	function leaveGame() {
		if (Flags.IsHolding) RangerWeapons.AR[0].Actions.HideButtons();
	}

	function modTick() {
		for (var i in RangerWeapons) {
			for (var j = 0; j < RangerWeapons[i].length; j++) {
				if (getCarriedItem() == parseInt(RangerWeapons[i][j].Actions.ID)) {
					Flags.Memory.HoldMemory = 1;
				}
			}
		}

		if (Flags.Memory.HoldMemory == 1 && !Flags.IsHolding) {
			Flags.IsHolding = true;
			RangerWeapons["AR"][getCarriedItem() - 500].Actions.ShowButtons();
			Flags.Memory.HoldMemory = 0;
		} else if (Flags.Memory.HoldMemory == 0 && Flags.IsHolding) {
			Flags.IsHolding = false;
			RangerWeapons["AR"][getCarriedItem() - 500].Actions.HideButtons();
			Flags.Memory.HoldMemory = 0;
		}
	}

	function projectileHitEntityHook(Bullet, Target) {
		for (var i in RangerWeapons) {
			for (var j = 0; i < RangerWeapons[i].length; j++) {
				if (RangerWeapons[i][j]["Name"] == Entity.getExtraData(Bullet, "Genbu Hase.Earth Defence Force For MCPE.BulletName")) {
					Entity.setHealth(Target, Entity.getHealth(Target) - RangerWeapons[i][j]["Damage"]);
				}
			}
		}
	}

	function chatHook(Char) {
		eval(Char);
	}
}