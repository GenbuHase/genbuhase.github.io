/*/
 *#######################################################
 *Villager's Inventory Release 1.0
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
						
						eval (AddCodes);
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
		}
	}
}

with (new DataHelper()) {
	Network.Import("https://gist.github.com/GenbuHase/15dcf2b4e8e74abb3e3c378f616274ca/raw/1ca89c05caaf26d90935dd4809044252ecc9090e/GUI%2520Helper%2520Custom%2520Edition.js");
	
	var Images = {
		Slot: "iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsQAAA7EAZUrDhsAADngaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNS0wNy0wOFQxODo1Nzo0NyswMjowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE1LTA3LTE2VDE1OjM4OjI0KzAyOjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNS0wNy0xNlQxNTozODoyNCswMjowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDoxMTQyY2NlYi04ZDU0LTNlNGUtYTg0Ni02OGRjY2FkY2I2YjY8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6MzAwYjI3ZmMtOGQwZS05NTQ4LTlhMTUtZjI4ZjdhMmEzOWQxPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6MzAwYjI3ZmMtOGQwZS05NTQ4LTlhMTUtZjI4ZjdhMmEzOWQxPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjMwMGIyN2ZjLThkMGUtOTU0OC05YTE1LWYyOGY3YTJhMzlkMTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNS0wNy0wOFQxODo1Nzo0NyswMjowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDoxMTQyY2NlYi04ZDU0LTNlNGUtYTg0Ni02OGRjY2FkY2I2YjY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMDctMTZUMTU6Mzg6MjQrMDI6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj45NTczMjYvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjk1NzMyNi8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjU2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI1NjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+8u9yAAAABEJJREFUeF7tnNtKHEEQhuc8uyZ4oXcSSCAPkZB38hV8CZ9OULwRb0QhiuvOaTfddgWr/llS2RReBOoLH6nEybr8aYrq6XHz8/Pzbeb8MwX97vwjHqARD9BIfnZ2Jnrg9fU1VYlpmqhKlGVJ1d+xXC6pSry8vFC1G+374Z/xeo3Dw0OqEo+Pj1Tt5uTkhKrE3d0dVQlfgUY8QCMeoJFZD7y8vKQq8fDwQFWiaakg+o6K/4SyooKYRiqIPKeC+PbtO1WJq6srqhK+Ao14gEY8QCOzHnhzc0NV4vb2lqrE5081VYl+hCbyzmy3cutew1yIX3/uNlQlFo1scoP8crYo5de/fP1BVeLi4oKqhK9AIx6gEQ/QyCzAYRiESOx53NhzuBr7Xo/kYVDjlmGw42bxJZmLOhciH5pSGHsmt+97IeIr0IgHaMQDNKIGGNsKF5n1JBDB6/cGelw39MIp/CU3i9+CC/TjJIxzIheJ9x+5vgKNeIBGPEAjswDjmQM33i/jzoCehHPUFPaaXKQMjYmrURS5cAa8n33R5lTMx1egEQ/QiAdoZBYgzjkqv+crEueo2Pa4yGxuU9iEvsQtwizJbepSqNFU4TomzqlFUQgRX4FGPEAjHqCRYhzHjIuENiCcwWeuHS2sDv9F3LZuhOt+K1ytpRrDtBXi3rYbt0LkcTUKkc1mI0R8BRrxAI14gEaKqqoyLlKEUYobz1G5OAdiT8O95XrohTg3HiykCL5+GZYAtwqzGretciHS1tJluxBq+Ao04gEa8QCNFM/PzxkXwfuBONch2NNwbxkaoRTAuQ17KL4+zqHa/UKcM/H9rdYvQg1fgUY8QCMeoJGibduMiyyWUo3ZnAhgz2nC7MnFua3KwzzHxJ63HuJs+WY3jEK836fNmfj+NHwFGvEAjXiARtS9cByFuBranIhoZzDrTehtTNx74/N/+GsT/g0X50zs2XiOrd0v9RVoxAM04gEaUffCcRTiIvs+24JMYX/L/fkkrXIpUob9Lvf1LTDH0Mi4B1Uh7LrQC5l4f3G1WgkRX4FGPEAjHqARNcDQloTI7NmWeA1Te2YazzgOP+ZCbW+KPXQG64dRfL8fl7kQiZ+xwEV8BRrxAI14gEaKo6OjjFvXtXAG9LgZ0HM02iYXdq/39N7E+4UInnEgeKaise/1vgKNeIBGPEAjRdd1YQ/4pvbzwqEtCTXWU5jvuDD3YcvE+3v488m49973jEPrcXi9PyP9zniARjxAI2qAoQ0I9z3zwOvrKhcioTOJXwjuZRE888BzYexxGv6M9DvjARrxAI3MPjvr/v6eqsTx8TFVCTwbxbPkpmmoSuA5Al6vvR72nV2zGAef74mz7Z/QXg+/P362mK9AIx6gEQ/QSH56eip64NPTE1UJ7Gn4OdD4PEv8HAEO3lPE/TVev+v5GI72/axgz9z1zCTHV6ARD9CIB2giy34BCv3TWEeL/moAAAAASUVORK5CYII=",
		Back: "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"
	}
	
	var Villagers = [];
	
	function newLevel() {
		if (!File.IsVaild(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Villager's Inventory.Json")) {
			var Ents = Entity.getAll();
			File.CreateFile(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Villager's Inventory.Json");

			for (var i = 0; i < Ents.length; i++) {
				if (Entity.getEntityTypeId(Ents[i]) == EntityType.VILLAGER) {
					Villagers.push({
						"UUID": Ents[i],
						"Inventory": [
							{
								"ID": 0,
								"Damage": 0,
								"Amount": 0
							},

							{
								"ID": 0,
								"Damage": 0,
								"Amount": 0
							},

							{
								"ID": 0,
								"Damage": 0,
								"Amount": 0
							},

							{
								"ID": 0,
								"Damage": 0,
								"Amount": 0
							},

							{
								"ID": 0,
								"Damage": 0,
								"Amount": 0
							}
						]
					});
				}
			}
		} else if (File.IsVaild(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Villager's Inventory.Json")) {
			Villagers = Json.LoadJSON(File.ReadFile(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Villager's Inventory.Json"));
		}
	}

	function leaveGame() {
		with (GUIHelper) {
			with (GUIHelper.Style) {
				with (GUIHelper.Set) {
					with (GUIHelper.Property) {
						Json.SaveJSON(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Villager's Inventory.Json", Villagers);

						DeleteGUI(0);
						DeleteGUI(1);
						DeleteGUI(2);
					}
				}
			}
		}
	}

	function entityAddedHook(Ent) {
		if (Entity.getEntityTypeId(Ent) == EntityType.VILLAGER) {
			Villagers.push({
				"UUID": Ent,
				"Inventory": [
					{
						"ID": 0,
						"Damage": 0,
						"Amount": 0
					},

					{
						"ID": 0,
						"Damage": 0,
						"Amount": 0
					},

					{
						"ID": 0,
						"Damage": 0,
						"Amount": 0
					},

					{
						"ID": 0,
						"Damage": 0,
						"Amount": 0
					},

					{
						"ID": 0,
						"Damage": 0,
						"Amount": 0
					}
				]
			});
		}

		Json.SaveJSON(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Villager's Inventory.Json", Villagers);
	}

	function deathHook(Attacker, Victim) {
		for (var i = 0; i < Villagers.length; i++) {
			if (Villagers[i]["UUID"] == Victim) {
				Villagers.splice(i, 1);
			}
		}
	}

	function attackHook(Attacker, Victim) {
		if (Attacker == Player.getEntity() && Entity.isSneaking(Attacker) && Entity.getEntityTypeId(Victim) == EntityType.VILLAGER) {
			with (GUIHelper) {
				with (GUIHelper.Style) {
					with (GUIHelper.Set) {
						with (GUIHelper.Property) {
							DeleteGUI(0);
							DeleteGUI(1);
							DeleteGUI(2);

							var PlayerItems = [], PlayerItemTexts = [];
							var VillagerItems = [], VillagerItemTexts = [];

							var MPIDSelect = 0, MPDamageSelect = 0, MPAmountSelect = 0;
							var MVIDSelect = 0, MVDamageSelect = 0, MVAmountSelect = 0;

							for (var i = 9; i < 36; i++) {
								PlayerItems[i - 9] = [Player.getInventorySlot(i), Player.getInventorySlotData(i), Player.getInventorySlotCount(i)];

								PlayerItemTexts[0] = "----------";

								if (Item.getName(PlayerItems[i - 9][0], PlayerItems[i - 9][1]) != null) {
									PlayerItemTexts[i + 1 - 9] = Item.getName(PlayerItems[i - 9][0], PlayerItems[i - 9][1], false) + " * " + PlayerItems[i - 9][2];
								} else {
									PlayerItemTexts[i + 1 - 9] = "----------";
								}
							}

							for (var i = 0; i < Villagers.length; i++) {
								if (Villagers[i]["UUID"] == Victim) {
									VillagerItems = [
										[
											Villagers[i]["Inventory"][0]["ID"],
											Villagers[i]["Inventory"][0]["Damage"],
											Villagers[i]["Inventory"][0]["Amount"]
										],

										[
											Villagers[i]["Inventory"][1]["ID"],
											Villagers[i]["Inventory"][1]["Damage"],
											Villagers[i]["Inventory"][1]["Amount"]
										],

										[
											Villagers[i]["Inventory"][2]["ID"],
											Villagers[i]["Inventory"][2]["Damage"],
											Villagers[i]["Inventory"][2]["Amount"]
										],

										[
											Villagers[i]["Inventory"][3]["ID"],
											Villagers[i]["Inventory"][3]["Damage"],
											Villagers[i]["Inventory"][3]["Amount"]
										],

										[
											Villagers[i]["Inventory"][4]["ID"],
											Villagers[i]["Inventory"][4]["Damage"],
											Villagers[i]["Inventory"][4]["Amount"]
										]
									];

									for (var i = 0; i < 5; i++) {
										VillagerItemTexts[0] = "----------";

										if (Item.getName(VillagerItems[i][0], VillagerItems[i][1]) != null) {
											VillagerItemTexts[i + 1] = Item.getName(VillagerItems[i][0], VillagerItems[i][1], false) + " * " + VillagerItems[i][2];
										} else {
											VillagerItemTexts[i + 1] = "----------";
										}
									}
								}
							}

							CreateGUI(function () {
								SetOnPopUpWindow(0,
									AddImageButton(0, "Base64", Images.Back, ScaleType.Normal, function () {
										DeleteGUI(0);
										DeleteGUI(1);
										DeleteGUI(2);
									}, function () {

									})
								, Size.Wrap, Size.Wrap, Align.Center, Align.Center, 0, -25);

								SetOnPopUpWindow(1,
									AddLinearLayout(0, "Horizontal", [
										AddImageView(0, "Base64", Images.Slot, ScaleType.Normal),
										AddImageView(1, "Base64", Images.Slot, ScaleType.Normal),
										AddImageView(2, "Base64", Images.Slot, ScaleType.Normal),
										AddImageView(3, "Base64", Images.Slot, ScaleType.Normal),
										AddImageView(4, "Base64", Images.Slot, ScaleType.Normal)
									])
								, Size.Wrap, Size.Wrap, Align.Center, Align.Center, 0, 0);

								SetOnPopUpWindow(2,
									AddLinearLayout(1, "Vertical", [
										AddButton(0, "アイテムメニュー(プレイヤー)", 10, Color.Magenta, function () {
											ShowDialog(0, "アイテムメニュー(プレイヤー)",
												AddLinearLayout(2, "Vertical", [
													AddTextView(0, "プレイヤーのアイテム", 10, Color.Magenta, Align.Left, Align.Bottom, function () {

													}, function () {

													}),

													AddSpinner(0, PlayerItemTexts, function (Parent, View, Position, IDs) {
														if (Position != 0) {
															MPIDSelect = PlayerItems[Position - 1][0];
															MPDamageSelect = PlayerItems[Position - 1][1];

															GUIHelper.NumberPickers[0].setMaxValue(PlayerItems[Position - 1][2]);
															GUIHelper.NumberPickers[0].setValue(1);

															MPAmountSelect = 1;
														} else {
															GUIHelper.NumberPickers[0].setMaxValue(0);
															GUIHelper.NumberPickers[0].setValue(0);
														}
													}),

													AddTextView(1, "渡す個数", 10, Color.Magenta, Align.Left, Align.Bottom, function () {

													}, function () {

													}),

													AddNumberPicker(0, 1, 1, 64, function (Picker, OldValue, NewValue) {
														MPAmountSelect = NewValue;
													}),

													AddButton(1, "村人に渡す", 10, Color.Magenta, function () {
														if (VillagerItems[0][0] == 0 && VillagerItems[0][1] == 0 && VillagerItems[0][2] == 0) {
															for (var i = 0; i < Villagers.length; i++) {
																if (Villagers[i]["UUID"] == Victim) {
																	Villagers[i]["Inventory"][0]["ID"] = MPIDSelect;
																	Villagers[i]["Inventory"][0]["Damage"] = MPDamageSelect;
																	Villagers[i]["Inventory"][0]["Amount"] = MPAmountSelect;

																	Player.addItemInventory(MPIDSelect, -(MPAmountSelect), MPDamageSelect);
																}
															}
														} else if (VillagerItems[1][0] == 0 && VillagerItems[1][1] == 0 && VillagerItems[1][2] == 0) {
															for (var i = 0; i < Villagers.length; i++) {
																if (Villagers[i]["UUID"] == Victim) {
																	Villagers[i]["Inventory"][1]["ID"] = MPIDSelect;
																	Villagers[i]["Inventory"][1]["Damage"] = MPDamageSelect;
																	Villagers[i]["Inventory"][1]["Amount"] = MPAmountSelect;

																	Player.addItemInventory(MPIDSelect, -(MPAmountSelect), MPDamageSelect);
																}
															}
														} else if (VillagerItems[2][0] == 0 && VillagerItems[2][1] == 0 && VillagerItems[2][2] == 0) {
															for (var i = 0; i < Villagers.length; i++) {
																if (Villagers[i]["UUID"] == Victim) {
																	Villagers[i]["Inventory"][2]["ID"] = MPIDSelect;
																	Villagers[i]["Inventory"][2]["Damage"] = MPDamageSelect;
																	Villagers[i]["Inventory"][2]["Amount"] = MPAmountSelect;

																	Player.addItemInventory(MPIDSelect, -(MPAmountSelect), MPDamageSelect);
																}
															}
														} else if (VillagerItems[3][0] == 0 && VillagerItems[3][1] == 0 && VillagerItems[3][2] == 0) {
															for (var i = 0; i < Villagers.length; i++) {
																if (Villagers[i]["UUID"] == Victim) {
																	Villagers[i]["Inventory"][3]["ID"] = MPIDSelect;
																	Villagers[i]["Inventory"][3]["Damage"] = MPDamageSelect;
																	Villagers[i]["Inventory"][3]["Amount"] = MPAmountSelect;

																	Player.addItemInventory(MPIDSelect, -(MPAmountSelect), MPDamageSelect);
																}
															}
														} else if (VillagerItems[4][0] == 0 && VillagerItems[4][1] == 0 && VillagerItems[4][2] == 0) {
															for (var i = 0; i < Villagers.length; i++) {
																if (Villagers[i]["UUID"] == Victim) {
																	Villagers[i]["Inventory"][4]["ID"] = MPIDSelect;
																	Villagers[i]["Inventory"][4]["Damage"] = MPDamageSelect;
																	Villagers[i]["Inventory"][4]["Amount"] = MPAmountSelect;

																	Player.addItemInventory(MPIDSelect, -(MPAmountSelect), MPDamageSelect);
																}
															}
														} else {
															print("この村人はこれ以上アイテムを持てません！");
														}

														Json.SaveJSON(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Villager's Inventory.Json", Villagers);

														GUIHelper.Dialogs[0].dismiss();
														DeleteGUI(0);
														DeleteGUI(1);
														DeleteGUI(2);
													}, function () {

													})
												])
											)
										}, function () {

										}),

										AddButton(1, "アイテムメニュー(村人)", 10, Color.Magenta, function () {
											ShowDialog(0, "アイテムメニュー(村人)",
												AddLinearLayout(2, "Vertical", [
													AddTextView(0, "村人のアイテム", 10, Color.Magenta, Align.Left, Align.Bottom, function () {

													}, function () {

													}),

													AddSpinner(0, VillagerItemTexts, function (Parent, View, Position, IDs) {
														if (Position != 0) {
															MVIDSelect = VillagerItems[Position - 1][0];
															MVDamageSelect = VillagerItems[Position - 1][1];

															GUIHelper.NumberPickers[0].setMaxValue(VillagerItems[Position - 1][2]);
															GUIHelper.NumberPickers[0].setValue(1);

															MVAmountSelect = 1;
														} else {
															GUIHelper.NumberPickers[0].setMaxValue(0);
															GUIHelper.NumberPickers[0].setValue(0);
														}
													}),

													AddTextView(1, "貰う個数", 10, Color.Magenta, Align.Left, Align.Bottom, function () {

													}, function () {

													}),

													AddNumberPicker(0, 1, 1, 64, function (Picker, OldValue, NewValue) {
														MVAmountSelect = NewValue;
													}),

													AddButton(1, "村人から貰う", 10, Color.Magenta, function () {
														for (var i = 0; i < Villagers.length; i++) {
															if (Villagers[i]["UUID"] == Victim) {
																for (var a = 0; a < 5; a++) {
																	if (Villagers[i]["Inventory"][a]["ID"] == MVIDSelect && Villagers[i]["Inventory"][a]["Damage"] == MVDamageSelect && Villagers[i]["Inventory"][a]["Amount"] >= MVAmountSelect) {
																		Villagers[i]["Inventory"][a]["Amount"] -= MVAmountSelect;
																		Player.addItemInventory(MVIDSelect, MVAmountSelect, MVDamageSelect);

																		if (Villagers[i]["Inventory"][a]["Amount"] == 0) {
																			Villagers[i]["Inventory"][a]["ID"] = 0;
																			Villagers[i]["Inventory"][a]["Damage"] = 0;
																		}

																		Json.SaveJSON(File.SpecialFolder.MCPE + "minecraftWorlds/" + Level.getWorldDir() + "/Villager's Inventory.Json", Villagers);

																		GUIHelper.Dialogs[0].dismiss();
																		DeleteGUI(0);
																		DeleteGUI(1);
																		DeleteGUI(2);

																		return true;
																	}
																}
															}
														}
													}, function () {

													})
												])
											)
										}, function () {

										})
									])
								, Size.Wrap, Size.Wrap, Align.Right, Align.Center, 0, 0);
							});
						}
					}
				}
			}

			preventDefault();
		}
	}

	function chatHook(Char) {
		eval(Char);
	}
}