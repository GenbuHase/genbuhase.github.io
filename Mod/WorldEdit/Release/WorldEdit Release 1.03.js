/*/
 *#######################################################
 *WorldEdit Release 1.03
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

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/
var X1, X2;
var Y1, Y2;
var Z1, Z2;

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
			} else {
				for (var X = XMax - XMin; X >= 0; X--) {
					for (var Y = YMax - YMin; Y >= 0; Y--) {
						for (var Z = ZMax - ZMin; Z >= 0; Z--) {
							setTile(XMin + X, YMin + Y, ZMin + Z, cmd[1], cmd[2]);
						}
					}
				}

				for (var X = XMax - XMin - 1; X >= 1; X--) {
					for (var Y = YMax - YMin - 1; Y >= 1; Y--) {
						for (var Z = ZMax - ZMin - 1; Z >= 1; Z--) {
							setTile(XMin + X, YMin + Y, ZMin + Z, 0, 0);
						}
					}
				}

				print("整地完了");
			}

			break;

		case "/circle":
			switch (cmd[1]) {
				case "shape":
					if (cmd[2] == "") {
						clientMessage("半径を入力してください");
					} else if (cmd[3] == "") {
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
	}
}

function useItem(x, y, z, itemId, blockId, side) {
	switch (itemId) {
		case SelectAxe1:
			X1 = x;
			Y1 = y;
			Z1 = z;

			clientMessage("始点X：" + X1);
			clientMessage("始点Y：" + Y1);
			clientMessage("始点Z：" + Z1);

			clientMessage("終点X：" + X2);
			clientMessage("終点Y：" + Y2);
			clientMessage("終点Z：" + Z2);

			break;

		case SelectAxe2:
			X2 = x;
			Y2 = y;
			Z2 = z;

			clientMessage("始点X：" + X1);
			clientMessage("始点Y：" + Y1);
			clientMessage("始点Z：" + Z1);

			clientMessage("終点X：" + X2);
			clientMessage("終点Y：" + Y2);
			clientMessage("終点Z：" + Z2);

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
	Y1 = Math.round(Player.getY());
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
	Y2 = Math.round(Player.getY());
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
}

function AddRecipes() {

}

function SetCategory() {
	Item.setCategory(SelectAxe1, ItemCategory.TOOL);
	Player.addItemCreativeInv(SelectAxe1, 1, 0);

	Item.setCategory(SelectAxe2, ItemCategory.TOOL);
	Player.addItemCreativeInv(SelectAxe2, 1, 0);
}
