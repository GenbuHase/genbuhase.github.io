/*/
 *#######################################################
 *Data Helper Release 1.11
 *Copyright (C) 2016 Genbu Hase All Rights Reserved.
 *#######################################################
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
		
		DeleteFile: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					if (new File(Path).exists()) {
						new File(Path).delete();
					}
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},
		
		DeleteFolder: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					if (new File(Path).exists()) {
						new File(Path).delete();
					}
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