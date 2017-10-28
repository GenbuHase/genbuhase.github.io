/*/
 *Level.ViewArea(StartPos, EndPos, ParticleID)
 *
 *<<概要>>
 *	指定された範囲をパーティクルで囲みます
 *	
 *<<引数>>
 *	StartPos(Array型)
 *		=>[0](int型)：開始地点のX座標
 *		=>[1](int型)：開始地点のY座標
 *		=>[2](int型)：開始地点のZ座標
 *		
 *	EndPos(Array型)
 *		=>[0](int型)：終了地点のX座標
 *		=>[1](int型)：終了地点のY座標
 *		=>[2](int型)：終了地点のZ座標
 *		
 *	ParticleID(int型<省略可能>)：表示するパーティクルのID
/*/
Level.ViewArea = function (StartPos, EndPos, ParticleID) {
	var XMax = Math.max(StartPos[0], EndPos[0]), XMin = Math.min(StartPos[0], EndPos[0]),
		YMax = Math.max(StartPos[1], EndPos[1]), YMin = Math.min(StartPos[1], EndPos[1]),
		ZMax = Math.max(StartPos[2], EndPos[2]), ZMin = Math.min(StartPos[2], EndPos[2]);
		
	if (ParticleID == undefined) {
		ParticleID = ParticleType.flame;
	}
	
	for (var Y = 0; Y <= YMax - YMin; Y++) {
		for (var X = 0; X <= XMax - XMin; X++) {
			for (var Z = 0; Z <= ZMax - ZMin; Z++) {
				for (var Xs = 0; Xs < 2; Xs++) {
					for (var ZCon = 0; ZCon <= 1; ZCon += 0.5) {
						Level.addParticle(ParticleID, XMin + X + Xs, YMin + Y, ZMin + Z + ZCon, 0, 0, 0, 1);
						Level.addParticle(ParticleID, XMin + X + Xs, YMin + Y + 1, ZMin + Z + ZCon, 0, 0, 0, 1);
					}
				}
				
				for (var Zs = 0; Zs < 2; Zs++) {
					for (var XCon = 0; XCon <= 1; XCon += 0.5) {
						Level.addParticle(ParticleID, XMin + X + XCon, YMin + Y, ZMin + Z + Zs, 0, 0, 0, 1);
						Level.addParticle(ParticleID, XMin + X + XCon, YMin + Y + 1, ZMin + Z + Zs, 0, 0, 0, 1);
					}
				}
				
				for (var Xs = 0; Xs < 2; Xs++) {
					for (var Zs = 0; Zs < 2; Zs++) {
						for (var YCon = 0; YCon <= 1; YCon += 0.5) {
							Level.addParticle(ParticleID, XMin + X + Xs, YMin + Y + YCon, ZMin + Z + Zs, 0, 0, 0, 1);
						}
					}
				}
			}
		}
	}
}

var Pos1 = [null, null, null],
	Pos2 = [null, null, null];
	
var Counter = 0;
	
function newLevel() {
	ModPE.setItem(504, "blaze_rod", 0, "選択ツール(開始地点)", 1);
	ModPE.setItem(505, "blaze_rod", 0, "選択ツール(終了地点)", 1);
	
	Player.addItemCreativeInv(504, 1, 0);
	Player.addItemCreativeInv(505, 1, 0);
	
	Item.setCategory(504, ItemCategory.TOOL);
	Item.setCategory(505, ItemCategory.TOOL);
}

function useItem(X, Y, Z, ItemID, BlockID, Side, ItemDamage, BlockDamage) {
	switch (ItemID) {
		case 504:
			Pos1 = [X, Y, Z];
			clientMessage("開始地点を[" + X + ", " + Y + ", " + Z + "]に設定しました");
			
			break;
			
		case 505:
			Pos2 = [X, Y, Z];
			clientMessage("終了地点を[" + X + ", " + Y + ", " + Z + "]に設定しました");
			
			break;
	}
}

function modTick() {
	if (Counter == 20) {
		if (Pos1[0] != null && Pos1[1] != null && Pos1[2] != null && Pos2[0] != null && Pos2[1] != null && Pos2[2] != null) {
			Level.ViewArea(Pos1, Pos2);
		}
		
		Counter = 0;
	}
	
	Counter++;
}
