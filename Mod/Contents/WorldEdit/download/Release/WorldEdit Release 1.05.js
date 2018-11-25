/*/
 *#######################################################
 *WorldEdit Release 1.05
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

/*/
 *------------------------------
 *These are item ids for adding.
 *------------------------------
/*/
var SelectAxe1 = 501;
var SelectAxe2 = 502;
var IDChecker = 503;

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/
var X1, X2;
var Y1, Y2;
var Z1, Z2;

var System = {
	SD: android.os.Environment.getExternalStorageDirectory().getPath(),
	Directory: android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/WorldEdit",
}

function procCmd(cmd) {
	var XMax = Math.max(X1, X2);
	var XMin = Math.min(X1, X2);
	var YMax = Math.max(Y1, Y2);
	var YMin = Math.min(Y1, Y2);
	var ZMax = Math.max(Z1, Z2);
	var ZMin = Math.min(Z1, Z2);

	cmd = cmd.toLowerCase().split(" ");

	switch (cmd[0]) {
		case "/area1":
			Area1();
			break;

		case "/area2":
			Area2();
			break;

		case "/area":
			Area();
			break;

		case "/set":
			if (X1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (X2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Y1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Y2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Z1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Z2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (cmd[1] == undefined) {
				clientMessage("IDを入力してください");
			} else {
				for (var X = XMax - XMin; X >= 0; X--) {
					for (var Y = YMax - YMin; Y >= 0; Y--) {
						for (var Z = ZMax - ZMin; Z >= 0; Z--) {
							setTile(XMin + X, YMin + Y, ZMin + Z, cmd[1], cmd[2]);
						}
					}
				}

				print("整地完了");
			}

			break;

		case "/box":
			if (X1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (X2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Y1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Y2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Z1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Z2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (cmd[1] == undefined) {
				clientMessage("IDを入力してください");
			} else {
				for (var X = XMax - XMin; X >= 0; X--) {
					for (var Y = YMax - YMin; Y >= 0; Y--) {
						for (var Z = ZMax - ZMin; Z >= 0; Z--) {
							setTile(XMin + X, YMin + Y, ZMin + Z, cmd[1], cmd[2]);
						}
					}
				}

				for (var X = XMax - XMin - 1; X >= 1; X--) {
					for (var Y = YMax - YMin - 0; Y >= 0; Y--) {
						for (var Z = ZMax - ZMin - 1; Z >= 1; Z--) {
							setTile(XMin + X, YMin + Y, ZMin + Z, 0, 0);
						}
					}
				}

				print("整地完了");
			}

			break;
			
		case "/wall":
			if (X1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (X2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Y1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Y2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Z1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Z2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (cmd[1] == undefined) {
				clientMessage("IDを入力してください");
			} else {
				for (var X = XMax - XMin; X >= 0; X--) {
					for (var Y = YMax - YMin; Y >= 0; Y--) {
						for (var Z = ZMax - ZMin; Z >= 0; Z--) {
							setTile(XMin + X, YMin + Y, ZMin + Z, cmd[1], cmd[2]);
						}
					}
				}
				
				for (var X = XMax - XMin - 1; X >= 1; X--) {
					for (var Y = YMax - YMin; Y >= 0; Y--) {
						for (var Z = ZMax - ZMin - 1; Z >= 1; Z--) {
							setTile(XMin + X, YMin + Y, ZMin + Z, 0, 0);
						}
					}
				}
			}
			
			break;
			
		case "/circle":
			switch (cmd[1]) {
				case "shape":
					if (cmd[2] == undefined) {
						clientMessage("半径を入力してください");
					} else if (cmd[3] == undefined) {
						clientMessage("IDを入力してください");
					} else {
						for (var i = 0; i < parseInt(cmd[2]) + 2; i++) {
							for (var j = 0; j < parseInt(cmd[2]) + 2; j++) {
								if (cmd[2] > Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2))) {
									//XY基準
									setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) + j, Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) - j, Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) + j, Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) - j, Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) + j, -1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) - j, -1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) + j, -1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) - j, -1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), cmd[3], cmd[4]);

									//YZ基準
									setTile(Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) + j, cmd[3], cmd[4]);
									setTile(Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) - j, cmd[3], cmd[4]);
									setTile(Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) + j, cmd[3], cmd[4]);
									setTile(Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) - j, cmd[3], cmd[4]);
									setTile(-1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) + j, cmd[3], cmd[4]);
									setTile(-1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) - j, cmd[3], cmd[4]);
									setTile(-1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) + j, cmd[3], cmd[4]);
									setTile(-1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) - j, cmd[3], cmd[4]);

									//ZX基準
									setTile(Math.floor(Player.getX()) + i, Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) + i, Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) - i, Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) - i, Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) + i, -1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) + i, -1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) - i, -1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, cmd[3], cmd[4]);
									setTile(Math.floor(Player.getX()) - i, -1 * Math.round(Math.sqrt(Math.pow(cmd[2], 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, cmd[3], cmd[4]);
								}
							}
						}
					}

					break;

				case "fill":
					break;
			}

			break;
			
		case "/copy":
			if (X1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (X2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Y1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Y2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Z1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Z2 == undefined) {
				clientMessage("選択範囲がありません");
			} else {
				try {
					if(java.io.File(System.Directory).exists() == false) {
						java.io.File(System.Directory).mkdirs();
						java.io.File(System.Directory + "/Save").mkdirs();
					} else if(java.io.File(System.Directory + "/Save").exists() == false) {
						java.io.File(System.Directory + "/Save").mkdirs();
					}
					
					var StateFile = new java.io.BufferedWriter(new java.io.FileWriter(new java.io.File(System.Directory + "/Save/BlockState.sav"), false));
					
					for (var X = XMax - XMin; X >= 0; X--) {
						for (var Y = YMax - YMin; Y >= 0; Y--) {
							for (var Z = ZMax - ZMin; Z >= 0; Z--) {
								StateFile.write(Level.getTile(XMin + X, YMin + Y, ZMin + Z) + ",");
							}
						}
					}
					
					StateFile.newLine();
					
					for (var X = XMax - XMin; X >= 0; X--) {
						for (var Y = YMax - YMin; Y >= 0; Y--) {
							for (var Z = ZMax - ZMin; Z >= 0; Z--) {
								StateFile.write(Level.getData(XMin + X, YMin + Y, ZMin + Z) + ",");
							}
						}
					}
					
					StateFile.newLine();
					StateFile.write(Math.round(Player.getX()).toString() + "," + Math.round(Player.getY()).toString() + "," + Math.round(Player.getZ()).toString());
					
					StateFile.newLine();
					StateFile.write(X1 + "," + Y1 + "," + Z1 + "," + X2 + "," + Y2 + "," + Z2);
					
					StateFile.close();
				} catch (Error) {
					print("エラーが発生しました");
					print(Error);
				}
				
				print("コピー完了");
			}
			
			break;

		case "/cut":
			if (X1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (X2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Y1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Y2 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Z1 == undefined) {
				clientMessage("選択範囲がありません");
			} else if (Z2 == undefined) {
				clientMessage("選択範囲がありません");
			} else {
				try {
					if(java.io.File(System.Directory).exists() == false) {
						java.io.File(System.Directory).mkdirs();
						java.io.File(System.Directory + "/Save").mkdirs();
					} else if(java.io.File(System.Directory + "/Save").exists() == false) {
						java.io.File(System.Directory + "/Save").mkdirs();
					}
					
					var StateFile = new java.io.BufferedWriter(new java.io.FileWriter(new java.io.File(System.Directory + "/Save/BlockState.sav"), false));
					
					for (var X = XMax - XMin; X >= 0; X--) {
						for (var Y = YMax - YMin; Y >= 0; Y--) {
							for (var Z = ZMax - ZMin; Z >= 0; Z--) {
								StateFile.write(Level.getTile(XMin + X, YMin + Y, ZMin + Z) + ",");
							}
						}
					}
					
					StateFile.newLine();
					
					for (var X = XMax - XMin; X >= 0; X--) {
						for (var Y = YMax - YMin; Y >= 0; Y--) {
							for (var Z = ZMax - ZMin; Z >= 0; Z--) {
								StateFile.write(Level.getData(XMin + X, YMin + Y, ZMin + Z) + ",");
							}
						}
					}
					
					StateFile.newLine();
					StateFile.write(Math.round(Player.getX()).toString() + "," + Math.round(Player.getY()).toString() + "," + Math.round(Player.getZ()).toString());
					
					StateFile.newLine();
					StateFile.write(X1 + "," + Y1 + "," + Z1 + "," + X2 + "," + Y2 + "," + Z2);
					
					StateFile.close();
					
					for (var X = XMax - XMin; X >= 0; X--) {
						for (var Y = YMax - YMin; Y >= 0; Y--) {
							for (var Z = ZMax - ZMin; Z >= 0; Z--) {
								setTile(XMin + X, YMin + Y, ZMin + Z, 0, 0);
							}
						}
					}
				} catch (Error) {
					print("エラーが発生しました");
					print(Error);
				}
				
				print("コピー完了");
			}
			
			break;
			
		case "/paste":
			try {
				if(java.io.File(System.Directory + "/Save/BlockState.sav").exists() == false) {
					clientMessage("コピーがされていません");
				} else {
					var StateFile = new java.io.BufferedReader(new java.io.FileReader(new java.io.File(System.Directory + "/Save/BlockState.sav")));
					var BlockID = StateFile.readLine().split(",");
					var BlockData = StateFile.readLine().split(",");
					var Position = StateFile.readLine().split(",");
					var Coordinate = StateFile.readLine().split(",");

					for (var i = 0; i < BlockID.length; i++) {
						clientMessage(BlockID[i]);
					}
					
					for (var i = 0; i < BlockID.length; i++) {
						for (var X = XMax - XMin; X >= 0; X--) {
							for (var Y = YMax - YMin; Y >= 0; Y--) {
								for (var Z = ZMax - ZMin; Z >= 0; Z--) {
									setTile(Player.getX() + X, Player.getY() - (Position[1] - YMax) + Y, Player.getZ() + Z, BlockID[i++], BlockData[i]);
								}
							}
						}
					}
				}
				
				
			} catch (Error) {
				print("エラーが発生しました");
				print(Error);
			}
			
			print("ペースト完了");
			break;
	}
}

function modTick() {
	
}

function useItem(X, Y, Z, ItemID, BlockID, Side, ItemDamage, BlockDamage) {
	switch (ItemID) {
		case SelectAxe1:
			X1 = X;
			Y1 = Y;
			Z1 = Z;

			Area();
			break;

		case SelectAxe2:
			X2 = X;
			Y2 = Y;
			Z2 = Z;

			Area();
			break;
			
		case IDChecker:
			clientMessage("タップしたブロックのID：" + BlockID);
			clientMessage("タップしたブロックのダメージ値：" + BlockDamage);
			break;
	}
}

function newLevel() {
	AddItems();
	AddRecipes();
	SetCategory();
}

function leaveGame() {
	X1, X2 = undefined;
	Y1, Y2 = undefined;
	Z1, Z2 = undefined;
}

/*/
 *------------------------------
 *These are defined functions.
 *------------------------------
/*/
function Area1() {
	X1 = Math.round(Player.getX());
	Y1 = Math.round(Player.getY - 2());
	Z1 = Math.round(Player.getZ());

	clientMessage("始点X：" + X1);
	clientMessage("始点Y：" + Y1);
	clientMessage("始点Z：" + Z1);

	clientMessage("終点X：" + X2);
	clientMessage("終点Y：" + Y2);
	clientMessage("終点Z：" + Z2);
}

function Area2() {
	X2 = Math.round(Player.getX());
	Y2 = Math.round(Player.getY() - 2);
	Z2 = Math.round(Player.getZ());

	clientMessage("始点X：" + X1);
	clientMessage("始点Y：" + Y1);
	clientMessage("始点Z：" + Z1);

	clientMessage("終点X：" + X2);
	clientMessage("終点Y：" + Y2);
	clientMessage("終点Z：" + Z2);
}

function Area() {
	clientMessage("始点X：" + X1);
	clientMessage("始点Y：" + Y1);
	clientMessage("始点Z：" + Z1);

	clientMessage("終点X：" + X2);
	clientMessage("終点Y：" + Y2);
	clientMessage("終点Z：" + Z2);
}

function AddItems() {
	ModPE.setItem(SelectAxe1, "axe", 0, "選択ツール1", 1);
	ModPE.setItem(SelectAxe2, "axe", 0, "選択ツール2", 1);
	ModPE.setItem(IDChecker, "blaze_rod", 0, "ID Checker", 1);
}

function AddRecipes() {

}

function SetCategory() {
	Item.setCategory(SelectAxe1, ItemCategory.TOOL);
	Player.addItemCreativeInv(SelectAxe1, 1, 0);

	Item.setCategory(SelectAxe2, ItemCategory.TOOL);
	Player.addItemCreativeInv(SelectAxe2, 1, 0);
	
	Item.setCategory(IDChecker, ItemCategory.TOOL);
	Player.addItemCreativeInv(IDChecker, 1, 0);
}
