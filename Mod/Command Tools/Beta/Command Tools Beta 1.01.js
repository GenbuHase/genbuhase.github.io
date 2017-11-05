/*
 *=========================
 *<<Hook Functions>>
 *=========================
 */
function procCmd(Command) {
	Command = Command.toLowerCase().split(" ");

	switch (Command[0]) {
		case "give":
			Give(Command[1], Command[2], Command[3]);
			break;

		case "fly":
			Fly(Command[1]);
			break;
			
		case "summon":
			Summon(Command[1], Command[2], Command[3]);
			break;
	}
}

/*
 *=========================
 *<<Commands>>
 *=========================
 */
function Give(ID, Damage, Amount) {
	if (ID == undefined || Damage == undefined || Amount == undefined) {
		clientMessage("/Give [アイテムID] [ダメージ値] [個数]");
	} else {
		Player.addItemInventory(ID, Amount, Damage);
		clientMessage("プレイヤーにID" + ID + "を" + Amount + "個与えました");
	}
}

function Fly(CanFly) {
	switch (CanFly) {
		case "true":
			Player.setCanFly(1);
			clientMessage("飛行が可能になりました");
			break;

		case "false":
			Player.setCanFly(0);
			clientMessage("飛行が不可能になりました");
			break;

		case undefined:
			clientMessage("/Fly [True(可能)|False(不可能)]");
			break;
	}
}

function Summon(EntityID, X, Y, Z) {
	if (EntityID == undefined || X == undefined || Y == undefined || Z == undefined) {
		clientMessage("/Summon [エンティティID] [X] [Y] [Z]");
	} else {
		if (X == "~") {
			X = Player.getX();
		} else if (Y == "~") {
			Y = Player.getY();
		} else if (Z == "~") {
			Z = Player.getZ();
		}

		Level.spawnMob(X, Y, Z, EntityID);
		clientMessage(X + ", " + Y + ", " + Z + "にID" + EntityID + "を召喚しました");
	}
}