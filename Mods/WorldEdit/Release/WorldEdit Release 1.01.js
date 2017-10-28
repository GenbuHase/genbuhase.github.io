/*/
 *#######################################################
 *WorldEdit Release 1.01
 *Copyright (C) 2015-2020 Genbu Hase All Rights Reserved.
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
			var XMax = Math.max(X1, X2);
			var XMin = Math.min(X1, X2);
			var YMax = Math.max(Y1, Y2);
			var YMin = Math.min(Y1, Y2);
			var ZMax = Math.max(Z1, Z2);
			var ZMin = Math.min(Z1, Z2);
			
			if (X1 == undefined) {
				clientMessage("選択範囲がありません");
				return;
			}
 
			if (X2 == undefined) {
				clientMessage("選択範囲がありません");
				return;
			}
			
			if (Y1 == undefined) {
				clientMessage("選択範囲がありません");
				return;
			}

			if (Y2 == undefined) {
				clientMessage("選択範囲がありません");
				return;
			}
 
			if (Z1 == undefined) {
				clientMessage("選択範囲がありません");
				return;
			}
 
			if (Z2 == undefined) {
				clientMessage("選択範囲がありません");
				return;
			}

			for (var X = XMax - XMin; X >= 0; X--) {
				for (var Y = YMax - YMin; Y >= 0; Y--) {
					for (var Z = ZMax - ZMin; Z >= 0; Z--) {
						setTile(XMin + X, YMin + Y, ZMin + Z, cmd[1], cmd[2]);
					}
				}
			}
 
			print("整地完了");
			
			break;
	}
}

function useItem(x, y, z, itemId, blockId, side){
	switch(itemId){
		case SelectAxe1:
			X1 = x;
			Y1 = y;
			Z1 = z;
			
			clientMessage("X1：" + X1);
			clientMessage("Y1：" + Y1);
			clientMessage("Z1：" + Z1);
			
			clientMessage("X2：" + X2);
			clientMessage("Y2：" + Y2);
			clientMessage("Z2：" + Z2);
			
			break;
			
		case SelectAxe2:
			X2 = x;
			Y2 = y;
			Z2 = z;
			
			clientMessage("X1：" + X1);
			clientMessage("Y1：" + Y1);
			clientMessage("Z1：" + Z1);
			
			clientMessage("X2：" + X2);
			clientMessage("Y2：" + Y2);
			clientMessage("Z2：" + Z2);
			
			break;
	}
}

function newLevel(){
	AddItems();
	AddRecipes();
	SetCategory();
}

function leaveGame(){
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
	X1 = Math.round(getPlayerX());
	Y1 = Math.round(getPlayerY());
	Z1 = Math.round(getPlayerZ());

	clientMessage("X1：" + X1);
	clientMessage("Y1：" + Y1);
	clientMessage("Z1：" + Z1);

	clientMessage("X2：" + X2);
	clientMessage("Y2：" + Y2);
	clientMessage("Z2：" + Z2);
}

function Area2() {
	X2 = Math.round(getPlayerX());
	Y2 = Math.round(getPlayerY());
	Z2 = Math.round(getPlayerZ());

	clientMessage("X1：" + X1);
	clientMessage("Y1：" + Y1);
	clientMessage("Z1：" + Z1);

	clientMessage("X2：" + X2);
	clientMessage("Y2：" + Y2);
	clientMessage("Z2：" + Z2);
}

function Area() { //Area
	clientMessage("X1：" + X1);
	clientMessage("Y1：" + Y1);
	clientMessage("Z1：" + Z1);

	clientMessage("X2：" + X2);
	clientMessage("Y2：" + Y2);
	clientMessage("Z2：" + Z2);
}

function AddItems(){
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
