/*/
 *##################################################
 *#Many Phones Release 1.00
 *#Copyright © 2015 Genbu Hase All Rights Reserved.
 *##################################################
/*/

/*/
 *------------------------------
 *These are material ids.
 *------------------------------
/*/
var IronIngot = 265;

/*/
 *------------------------------
 *These are item ids for adding.
 *------------------------------
/*/
var iPhone = {
	iPhone5s_0: 501,
	iPhone5s_1: 502
}

var Android = {
	Android_0: 511,
	Android_1: 512
}

var iPhone_Part = {
	Circle: 521
}

var Android_Part = {
	Back: 531,
	Home: 532,
	Thread: 533
}

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/
var App = {
	Calculator: null
}

var Root;

function procCmd(cmd) {
	var Command = cmd.toLowerCase().split(" ");
	Root = Math.round(Math.random() * 5);

	switch (Player.getCarriedItem()) {
		case iPhone.iPhone5s_0:
			switch (Command[0]) {
				case "time":
					switch (Command[1]) {
						case "get":
							clientMessage("現在の時刻：" + Level.getTime());
							break;
					}

					break;

				case "root":
					switch(Root) { //5分の4の確率で成功
						case 1:
							print(Root);
							Entity.setCarriedItem(Player.getEntity(), iPhone.iPhone5s_1, Player.getCarriedItemCount(), 0);
							print("脱獄完了");
							break;
							
						case 2:
							print(Root);
							Entity.setCarriedItem(Player.getEntity(), iPhone.iPhone5s_1, Player.getCarriedItemCount(), 0);
							print("脱獄完了");
							break;
							
						case 3:
							print(Root);
							Entity.setCarriedItem(Player.getEntity(), iPhone.iPhone5s_1, Player.getCarriedItemCount(), 0);
							print("脱獄完了");
							break;
							
						case 4:
							print(Root);
							Entity.setCarriedItem(Player.getEntity(), iPhone.iPhone5s_1, Player.getCarriedItemCount(), 0);
							print("脱獄完了");
							break;
							
						default:
							print(Root);
							Entity.setCarriedItem(Player.getEntity(), 0, 0, 0);
							print("脱獄失敗");
							break;
					}

					break;
					
				case "app":
					switch (Command[1]) {
						case "check":
							clientMessage("電卓 ----- " + App.Calculator);
							break;
							
						case "install":
							switch (Command[2]) {
								case "calculator":
									ModPE.saveData("Calculator", "already");
									print("電卓 インストール完了");
									break;
							}
					}
			}

			break;

		case iPhone.iPhone5s_1:
			switch (Command[0]) {
				case "time":
					switch (Command[1]) {
						case "set":
							Level.setTime(Command[2]);
							print("時刻を" + Command[2] + "に設定しました");
							break;

						case "get":
							clientMessage("現在の時刻：" + Level.getTime());
							break;
					}

					break;
					
				case "app":
					switch (Command[1]) {
						case "check":
							clientMessage("電卓 ----- " + App.Calculator);
							break;
							
						case "install":
							switch (Command[2]) {
								case "calculator":
									ModPE.saveData("Calculator", "already");
									print("電卓 インストール完了");
									break;
							}
					}
			}

			break;

		case Android.Android_0:
			switch (Command[0]) {
				case "time":
					switch (Command[1]) {
						case "get":
							clientMessage("現在の時刻：" + Level.getTime());
							break;
					}

					break;

				case "root":
					switch(Root) { //5分の4の確率で成功
						case 1:
							print(Root);
							Entity.setCarriedItem(Player.getEntity(), Android.Android_1, Player.getCarriedItemCount(), 0);
							print("Root化完了");
							break;
							
						case 2:
							print(Root);
							Entity.setCarriedItem(Player.getEntity(), Android.Android_1, Player.getCarriedItemCount(), 0);
							print("Root化完了");
							break;
							
						case 3:
							print(Root);
							Entity.setCarriedItem(Player.getEntity(), Android.Android_1, Player.getCarriedItemCount(), 0);
							print("Root化完了");
							break;
							
						case 4:
							print(Root);
							Entity.setCarriedItem(Player.getEntity(), Android.Android_1, Player.getCarriedItemCount(), 0);
							print("Root化完了");
							break;
							
						default:
							print(Root);
							Entity.setCarriedItem(Player.getEntity(), 0, 0, 0);
							print("Root化失敗");
							break;
					}

					break;
					
				case "app":
					switch (Command[1]) {
						case "check":
							clientMessage("電卓 ----- " + App.Calculator);
							break;
							
						case "install":
							switch (Command[2]) {
								case "calculator":
									ModPE.saveData("Calculator", "already");
									print("電卓 インストール完了");
									break;
							}
					}
			}

			break;

		case Android.Android_1:
			switch (Command[0]) {
				case "time":
					switch (Command[1]) {
						case "set":
							Level.setTime(Command[2]);
							print("時刻を" + Command[2] + "に設定しました");
							break;

						case "get":
							clientMessage("現在の時刻：" + Level.getTime());
							break;
					}

					break;
					
				case "app":
					switch (Command[1]) {
						case "check":
							clientMessage("電卓 ----- " + App.Calculator);
							break;
							
						case "install":
							switch (Command[2]) {
								case "calculator":
									ModPE.saveData("Calculator", "already");
									print("電卓 インストール完了");
									break;
							}
					}
			}

			break;
	}
}

function modTick() {
	ArgDefine();
}

function newLevel() {
	AddItems();
	AddRecipes();
	SetCategory();
	
	ModPE.saveData("Calculator", "yet");
}

/*/
 *------------------------------
 *These are defined functions.
 *------------------------------
/*/
function AddItems() {
	ModPE.setItem(iPhone.iPhone5s_0, "iPhone5s", 0, "iPhone5s(未脱獄)", 1);
	ModPE.setItem(iPhone.iPhone5s_1, "iPhone5s", 1, "iPhone5s(脱獄済)", 1);

	ModPE.setItem(Android.Android_0, "Android", 0, "Android(未Root)", 1);
	ModPE.setItem(Android.Android_1, "Android", 1, "Android(Root済)", 1);
	
	ModPE.setItem(iPhone_Part.Circle, "Circle", 0, "ホームボタン(iPhone)", 1);
	ModPE.setItem(Android_Part.Back, "Back", 0, "戻るボタン", 1);
	ModPE.setItem(Android_Part.Home, "Home", 0, "ホームボタン(Android)", 1);
	ModPE.setItem(Android_Part.Thread, "Thread", 0, "タブボタン", 1);
}

function AddRecipes() {
	Item.addShapedRecipe(iPhone.iPhone5s_0, 1, 0, ["III", "III", "ICI"], ["I", IronIngot, 0, "C", iPhone_Part.Circle, 0]);
	Item.addShapedRecipe(Android.Android_0, 1, 0, ["III", "III", "BHT"], ["I", IronIngot, 0, "B", Android_Part.Back, 0, "H", Android_Part.Home, 0, "T", Android_Part.Thread, 0]);
}

function SetCategory() {
	Item.setCategory(iPhone.iPhone5s_0, ItemCategory.TOOL);
	Player.addItemCreativeInv(iPhone.iPhone5s_0, 1, 0);

	Item.setCategory(iPhone.iPhone5s_1, ItemCategory.TOOL);
	Player.addItemCreativeInv(iPhone.iPhone5s_1, 1, 0);

	Item.setCategory(Android.Android_0, ItemCategory.TOOL);
	Player.addItemCreativeInv(Android.Android_0, 1, 0);

	Item.setCategory(Android.Android_1, ItemCategory.TOOL);
	Player.addItemCreativeInv(Android.Android_1, 1, 0);
}

function ArgDefine() {
	if(ModPE.readData("Calculator") == "yet") {
		App.Calculator = "インストールする";
	} else if(ModPE.readData("Calculator") == "already") {
		App.Calculator = "インストール済";
	}
}
