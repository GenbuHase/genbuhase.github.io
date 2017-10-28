/*/
 *#######################################################
 *WorldEdit Release 1.00
 *Copyright (C) 2015-2020 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

function procCmd(cmd) {
	cmd = cmd.toLowerCase();

	switch (cmd) {
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
			Set();
			break;
	}
}

var X1;
var Y1;
var Z1;

var X2;
var Y2;
var Z2;

function Area1() { //Area1
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

function Area2() { //Area2
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

function Set(Param) { //Set [ブロックID] [ダメージ値]
	Param = Param.split(" ");

	var XMax = Math.max(X1, X2);
	var XMin = Math.min(X1, X2);
	var YMax = Math.max(Y1, Y2);
	var YMin = Math.min(Y1, Y2);
	var ZMax = Math.max(Z1, Z2);
	var ZMin = Math.min(Z1, Z2);

	if (X1 = undefined) {
		clientMessage("選択範囲がありません");
		return;
	}
 
	if (X2 = undefined) {
		clientMessage("選択範囲がありません");
		return;
	}
 
	if (Y1 = undefined) {
		clientMessage("選択範囲がありません");
		return;
	}

	if (Y2 = undefined) {
		clientMessage("選択範囲がありません");
		return;
	}
 
	if (Z1 = undefined) {
		clientMessage("選択範囲がありません");
		return;
	}
 
	if (Z2 = undefined) {
		clientMessage("選択範囲がありません");
		return;
	}

	for (var X = XMax - XMin; X = 0; X--) {
		for (var Y = YMax - YMin; Y = 0; Y--) {
			for (var Z = ZMax - ZMin; Z = 0; Z--) {
				Level.setTile(XMin + X, YMin + Y, ZMin + Z,Param[0],Param[1]);
			}
		}
	}
 
	print("整地完了");
}