/*/
 *#######################################################
 *Command Tools Release 1.00
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/

function procCmd(cmd) {
	var Command = cmd.toLowerCase().split(" ");

	switch (Command[0]) {
		case "give":
			if (Command[1] == undefined) {
				clientMessage("/Give [アイテムID] [ダメージ値] [個数]");
			} else if (Command[2] == undefined) {
				clientMessage("/Give [アイテムID] [ダメージ値] [個数]");
			} else if (Command[3] == undefined) {
				clientMessage("/Give [アイテムID] [ダメージ値] [個数]");
			} else if (Command[1] == "/?") {
				clientMessage("/Give [アイテムID] [ダメージ値] [個数]");
			} else {
				Player.addItemInventory(parseInt(Command[1]), parseInt(Command[3]), parseInt(Command[2]));
				clientMessage("プレイヤーにアイテムを与えました");
			}

			break;

		case "fly":
			if (Command[1] == undefined) {
				clientMessage("/Fly [True(可能)|False(不可能)]");
			} else if (Command[1] == "/?") {
				clientMessage("/Fly [True(可能)|False(不可能)]");
			} else if (Command[1] == "true") {
				Player.setCanFly(1);
				clientMessage("飛行が可能になりました");
			} else if (Command[1] == "false") {
				Player.setCanFly(0);
				clientMessage("飛行が不可能になりました");
			}

			break;
	}
}