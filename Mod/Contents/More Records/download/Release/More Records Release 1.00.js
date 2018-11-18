/*/
 *#######################################################
 *More Records Release 1.00
 *Copyright (C) 2016 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

/*/
 *####################
 *<<APIs>>
 *####################
/*/

/*/
 *###########################################################################
 *#Data Helper Release 1.05
 *#Copyright © 2016-2017 Genbu Project and Genbu Hase All Rights Reserved.
 *###########################################################################
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
		GetFileText: function (URL) {
			new java.lang.Thread(
				new java.lang.Runnable({
					run: function () {
						with (JavaImporter(java.io, java.net)) {
							try {
								var Reader = new BufferedReader(new ImputStreamReader(new URL(URL).getInputStream()));
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

with (new DataHelper()) {
	var Records = [];
	var JukeBoxes = null;
	var MPlayer = new android.media.MediaPlayer();
	
	var Actions = {
		PlayMusic: function (Path) {
			new java.lang.Thread(
				new java.lang.Runnable({
					run: function () {
						try {
							MPlayer.reset();
							MPlayer.setDataSource(Path);
							MPlayer.prepare();
							MPlayer.setVolume(1.0, 1.0);
							MPlayer.start();
						} catch (Error) {
							clientMessage(Error);
						}
					}
				})
			).start();
		},
		
		StopMusic: function () {
			MPlayer.reset();
		},

		VolumeSet: function () {
			if (Math.abs(JukeBoxes[0] - Math.floor(Player.getX())) <= 10 && Math.abs(JukeBoxes[1] - Math.floor(Player.getY())) <= 10 && Math.abs(JukeBoxes[2] - Math.floor(Player.getZ())) <= 10) {
				var Max = Math.max(Math.max((Math.abs(JukeBoxes[0] - Math.floor(Player.getX()))) / 10, (Math.abs(JukeBoxes[1] - Math.floor(Player.getY()))) / 10), (Math.abs(JukeBoxes[2] - Math.floor(Player.getZ()))) / 10)
				MPlayer.setVolume(1.0 - Max, 1.0 - Max);
			} else {
				MPlayer.setVolume(0.0, 0.0);
			}
		}
	}
	
	function newLevel() {
		AddBlocks();
		
		if (!File.IsVaild(File.SpecialFolder.MCPE + "More Records/Records.Json")) File.CreateFile(File.SpecialFolder.MCPE + "More Records/Records.Json");
		var RecordFile = Json.LoadJSON(File.ReadFile(File.SpecialFolder.MCPE + "More Records/Records.Json"));
		
		for (var i = 0; i < RecordFile.length; i++) {
			Records[i] = new Array(4);
			Records[i][0] = RecordFile[i]["ID"];
			Records[i][1] = RecordFile[i]["Name"];
			Records[i][2] = RecordFile[i]["Type"];
			Records[i][3] = RecordFile[i]["URL"];
			
			ModPE.setItem(Records[i][0], "Record", Records[i][2], Records[i][1], 1);
			Item.setCategory(Records[i][0], ItemCategory.DECORATION);
		}
	}
	
	function useItem(X, Y, Z, ItemID, BlockID, Side, ItemDamage, BlockDamage) {
		if (BlockID == 250 && BlockDamage == 0) {
			for (var i = 0; i < Records.length; i++) {
				if (ItemID == Records[i][0]) {
					Actions.PlayMusic(Records[i][3]);
					Level.setTile(X, Y, Z, 250, 1);
					JukeBoxes = [X, Y, Z];
				}
			}
		} else if (BlockID == 250 && BlockDamage == 1) {
			Actions.StopMusic();
			Level.setTile(X, Y, Z, 250, 0);
			JukeBoxes = null;
		}
	}

	function modTick() {
		if (JukeBoxes != null) {
			Actions.VolumeSet();
		}
	}
}

function AddBlocks() {
	Block.defineBlock(250, "Record Box", [["JukeBox", 0], ["JukeBox", 1], ["JukeBox", 0], ["JukeBox", 0], ["JukeBox", 0], ["JukeBox", 0]], 1, true, 0);
	Item.setCategory(250, ItemCategory.DECORATION);
}
