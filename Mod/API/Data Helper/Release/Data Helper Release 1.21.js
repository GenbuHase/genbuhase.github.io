/*/
 *#######################################################
 *Data Helper Release 1.21
 *Copyright (C) 2016-2020 Genbu Hase All Rights Reserved.
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

			MCPE: android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/",
			WorldDir: android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/"
		},

		CreateFile: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					if (!new File(Path).getParentFile().exists()) {
						new File(Path).getParentFile().mkdirs();
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
					if (!new File(Path).getParentFile().exists()) {
						new File(Path).getParentFile().mkdirs();
					}
					
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

					let Result = "",
						Memory = "";
						
					while ((Memory = Reader.readLine()) != null) {
						Result += Memory + "\n";
					}

					return Result;
				} catch (Error) {
					clientMessage(Error);
				} finally {
					Reader.close();
				}
			}
		},

		ReadFileLine: function (Path, Line) {
			with (JavaImporter(java.io)) {
				try {
					var Reader = new BufferedReader(new FileReader(new File(Path)));
					
					let Result = "",
						Memory = "",
						LineNumber = 0;
						
					while ((Memory = Reader.readLine(), LineNumber++) != null) {
						if (LineNumber == Line) {
							Result = Memory;
						}
					}

					return Result;
				} catch (Error) {
					clientMessage(Error);
				} finally {
					Reader.close();
				}
			}
		},

		ReadFileFromTexturePack: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					var Reader = new BufferedReader(new InputStreamReader(ModPE.openInputStreamFromTexturePack(Path)));
					
					let Result = "",
						Memory = "";

					while ((Memory = Reader.readLine()) != null) {
						Result += Memory + "\n";
					}

					return Result;
				} catch (Error) {
					clientMessage(Error);
				} finally {
					Reader.close();
				}
			}
		},

		WriteFile: function (Path, Data) {
			with (JavaImporter(java.io)) {
				try {
					if (!new DataHelper().File.IsVaild(Path)) {
						new DataHelper().File.CreateFile(Path);
					}
					
					var Writer = new BufferedWriter(new FileWriter(new File(Path)));
						Writer.write(Data);

					Writer.close();
				} catch (Error) {
					clientMessage(Error);
				} finally {
					Writer.close();
				}
			}
		},

		GetFileLine: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					var Reader = new BufferedReader(new FileReader(new File(Path)));

					let Result = 0,
						Memory = "";

					while ((Memory = Reader.readLine()) != null) {
						Result++;
					}

					return Result;
				} catch (Error) {
					clientMessage(Error);
				} finally {
					Reader.close();
				}
			}
		},

		GetFiles: function (Path) {
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

	/**
	 *現在DBクラスは非推奨のクラスに指定されています。
	 */
	this.DB = {
		SaveDB: function (Path, Data, SplitWord) {
			with (JavaImporter(java.io)) {
				try {
					if (!new DataHelper().File.IsVaild(Path)) new DataHelper().File.CreateFile(Path);
					
					let Writer = new BufferedWriter(new FileWriter(new File(Path))),
						Lines = 0;

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
					let Reader = new BufferedReader(new FileReader(new File(Path))),
						Data = "";

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
					if (!new DataHelper().File.IsVaild(Path)) {
						new DataHelper().File.CreateFile(Path);
					}
					
					File.WriteFile(Path, JSON.stringify(Data, null, "\t"));
				} catch (Error) {
					clientMessage(Error);
				}
			}
		},

		LoadJSON: function (Path) {
			with (new DataHelper()) {
				try {
					return JSON.parse(File.ReadFile(Path).replace("\n", ""));
				} catch (Error) {
					clientMessage(Error);
				}
			}
		}
	}

	this.Net = {
		Ajax: function (Type, Url, Data, ContentType) {
			let Result = {},
				Memory = "";

			Result.response = "",
			Result.status = 200;

			with (JavaImporter(java.lang, java.io, java.net)) {
				var Th = new Thread(
					new Runnable({
						run: function () {
							try {
								switch (Type.toUpperCase()) {
									case "GET":
										var Con = (HttpURLConnection)(new URL(Url).openConnection());
											Con.setRequestMethod("GET");
											Con.setRequestProperty("Content-Type", ContentType ? ContentType : "Text/Plain");
											Con.setInstanceFollowRedirects(false);
											Con.setDoInput(true);

										var Reader = new BufferedReader(new InputStreamReader(Con.getInputStream()));

										while ((Memory = Reader.readLine()) != null) {
											Result.response += Memory + "\n";
										}

										Result.status = Con.getResponseCode();

										Reader.close();
										break;

									case "POST":
										var Con = (HttpURLConnection)(new URL(Url).openConnection());
											Con.setRequestMethod("POST");
											Con.setRequestProperty("Content-Type", ContentType ? ContentType : "Text/Plain");
											Con.setInstanceFollowRedirects(false);
											Con.setDoOutput(true);

										var Sender = new BufferedWriter(new OutputStreamWriter(Con.getOutputStream()));
											Sender.write(!Array.isArray(Data) && Data.toString().slice(8, -1) === "Object" ? JSON.stringify(Data) : Data);

											Sender.close();

										var Reader = new BufferedReader(new InputStreamReader(Con.getInputStream()));

										while ((Memory = Reader.readLine()) != null) {
											Result.response += Memory + "\n";
										}

										Result.status = Con.getResponseCode();

										Reader.close();
										break;

									case "PUT":
										var Con = (HttpURLConnection)(new URL(Url).openConnection());
											Con.setRequestMethod("PUT");
											Con.setRequestProperty("Content-Type", ContentType ? ContentType : "Text/Plain");
											Con.setInstanceFollowRedirects(false);
											Con.setDoOutput(true);

										var Sender = new BufferedWriter(new OutputStreamWriter(Con.getOutputStream()));
											Sender.write(!Array.isArray(Data) && Data.toString().slice(8, -1) === "Object" ? JSON.stringify(Data) : Data);

											Sender.close();

										var Reader = new BufferedReader(new InputStreamReader(Con.getInputStream()));

										while ((Memory = Reader.readLine()) != null) {
											Result.response += Memory + "\n";
										}

										Result.status = Con.getResponseCode();

										Reader.close();
										break;

									case "DELETE":
										var Con = (HttpURLConnection)(new URL(Url).openConnection());
											Con.setRequestMethod("DELETE");
											Con.setRequestProperty("Content-Type", ContentType ? ContentType : "Text/Plain");
											Con.setInstanceFollowRedirects(false);
											Con.setDoOutput(true);

										var Sender = new BufferedWriter(new OutputStreamWriter(Con.getOutputStream()));
											Sender.write(!Array.isArray(Data) && Data.toString().slice(8, -1) === "Object" ? JSON.stringify(Data) : Data);

											Sender.close();

										var Reader = new BufferedReader(new InputStreamReader(Con.getInputStream()));

										while ((Memory = Reader.readLine()) != null) {
											Result.response += Memory + "\n";
										}

										Result.status = Con.getResponseCode();

										Reader.close();
										break;
								}
							} catch (Error) {
								Result.responseType = "Error",
								Result.status = Con.getResponseCode(),
								Result.message = Error.message;
								
								var ErrorReader = new BufferedReader(new InputStreamReader(Con.getErrorStream()));
								
								while ((Memory = ErrorReader.readLine()) != null) {
									Result.response += Memory + "\n";
								}
							} finally {
								try {
									Result.response = JSON.parse(Result.response);
								} catch (ParseError) {

								}
							}
						}
					})
				);
				
				Th.start();
				
				while (Th.getState() != java.lang.Thread.State.TERMINATED) {
					
				}
			}
			
			return Result;
		}
	}

	this.Util = {
		Convert: {
			atob: function (Base64Str) {
				return android.util.Base64.decode(Base64Str, android.util.Base64.DEFAULT);
			},

			btoa: function (RawStr) {
				return android.util.Base64.encodeToString(java.lang.String(RawStr).getBytes(), android.util.Base64.DEFAULT);
			},

			escape: function (URL) {
				return java.net.URLEncoder.encode(URL, "UTF-8");
			},

			unescape: function (URL) {
				return java.net.URLDecoder.decode(URL, "UTF-8");
			}
		},

		Base64ToBitmap: function (Base64) {
			try {
				var DncodedByte = android.util.Base64.decode(Base64, android.util.Base64.DEFAULT);
				return android.graphics.BitmapFactory.decodeByteArray(DncodedByte, 0, DncodedByte.length);
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