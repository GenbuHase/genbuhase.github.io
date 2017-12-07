/*/
 *#######################################################
 *Customizable Blocks v1.0
 *Copyright (C) 2017 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

const DataHelper = function () {
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

			WorldDir: function () {
				return android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/";
			}
		},

		CreateFile: function (Path) {
			with (JavaImporter(java.io)) {
				try {
					if (!new File(Path).getParentFile().exists()) {
						new File(Path).getParentFile().mkdirs();
					}

					new File(Path).createNewFile();
				} catch (Error) {
					return Error;
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
					return Error;
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
					return Error;
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
					return Error;
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
					return null;
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
					return null;
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
					return null;
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
					return Error;
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
					return null;
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
					return null;
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
					return Error;
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

					return Data;
				} catch (Error) {
					return null;
				} finally {
					Reader.close();
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
					return Error;
				}
			}
		},

		LoadJSON: function (Path) {
			with (new DataHelper()) {
				try {
					return JSON.parse(File.ReadFile(Path).replace("\n", ""));
				} catch (Error) {
					return null;
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

				while (Th.getState() != java.lang.Thread.State.TERMINATED) { }
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

		Param: function (Obj, InitValue) {
			return (Obj != false && !Obj) ? InitValue : Obj;
		}
	}
};



with (new DataHelper()) {
	const CustomizableBlock = function (DoesRunInit) {
		CustomizableBlock.self = this;

		this.BlockData = function (Damage, Property) {
			this.Damage = Util.Param(Damage, 0);

			this.Property = Util.Param(Property, {
				Textures: [
					["dirt", 0],
					["dirt", 0],
					["dirt", 0],
					["dirt", 0],
					["dirt", 0],
					["dirt", 0]
				],

				Shape: [
					[0, 0, 0],
					[1, 1, 1]
				]
			});
		};

		this.BlockData.prototype = Object.create(Object.prototype, {
			append: {
				value: function () {
					CustomizableBlock.self.blockDatas[Damage] = this;
					CustomizableBlock.self.update();
				},

				configurable: false,
				writable: false,
				enumerable: false
			}
		});



		this.filePath = File.SpecialFolder.WorldDir() + "CustomizableBlock.cfg";

		this.blockID = 255;
		this.blockName = "Customizable Block";

		this.blockDatas = (function () {
			let Elem = new Array(16);

			for (let i = 0; i < Elem.length; i++) {
				Elem[i] = new this.BlockData(i);
			}

			return Elem;
		}).bind(this)();
		


		this.init = function () {
			this.filePath = File.SpecialFolder.WorldDir() + "CustomizableBlock.cfg";

			this.loadBlockDatas();
			this.update();
		};

		

		this.update = function () {
			Block.defineBlock(this.blockID, this.blockName, this.getTextures(), 1);
			Item.setCategory(this.blockID, ItemCategory.DECORATION);

			for (let i = 0; i < 16; i++) {
				Block.setShape.apply(this, Array.prototype.concat(this.blockID, this.blockDatas[i].Property.Shape[0], this.blockDatas[i].Property.Shape[1], i));
				Player.addItemCreativeInv(this.blockID, 64, i);
			}
		};

		this.saveBlockDatas = function () {
			Json.SaveJSON(this.filePath, this.blockDatas);
		};

		this.loadBlockDatas = function () {
			if (!File.IsVaild(this.filePath)) {
				this.saveBlockDatas();
			}

			this.blockDatas = Json.LoadJSON(this.filePath);
		};



		this.getTextures = function () {
			let Result = [];

			this.blockDatas.forEach(function (Elem, ID, Parent) {
				for (let i = 0; i < Elem.Property.Textures.length; i++) {
					Result.push(Elem.Property.Textures[i]);
				}
			});

			return Result;
		};



		DoesRunInit ? (function () {
			this.init();
		}).bind(this)() : (function () {
			
		})();
	};
}



let Base = new CustomizableBlock();

function newLevel() {
	Base.init();
}

function leaveGame() {
	Base.saveBlockDatas();
}

/*function chatHook(Str) {
	with (JavaImporter(net.zhuoweizhang.mcpelauncher)) {
		if (Str.substr(0, 1) == "@") {
			(function (Str) {
				if (Str.substr(0, 1) == "#") {
					eval("clientMessage(" + Str.slice(1) + ")");
				} else {
					switch (Str) {
						default:
							try {
								eval(Str);
							} catch (Error) {
								clientMessage(Error);
							}

							break;
					}
				}
			})(Str.slice(1));
		}
	}
}*/