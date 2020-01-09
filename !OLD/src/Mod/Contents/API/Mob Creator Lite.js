//ここを変更すると基準の大きさが変わる
var RenderSize = 4;
var Picture;
var IsSelected = false;

function newLevel() {
	CreateDirectory();
	clientMessage("ファイル作成成功");
}

function useItem(X, Y, Z, ItemID, BlockID, Side, ItemData, BlockData) {
	if (ItemID == 363) {
		X1 = X;
		Y1 = Y;
		Z1 = Z;
		IsSelected = true;
		clientMessage("始点を設定しました");
	}

	if (ItemID == 281) {
		if (IsSelected == false) {
			clientMessage("始点が設定されていません");
		} else {
			X2 = X;
			Y2 = Y;
			Z2 = Z;
			
			XMin = Math.min(X1, X2);
			YMin = Math.min(Y1, Y2);
			ZMin = Math.min(Z1, Z2);
			XMax = Math.max(X1, X2);
			YMax = Math.max(Y1, Y2);
			ZMax = Math.max(Z1, Z2);
			
			avx = Math.floor(((X1 + X2)  / 2) - XMin);
			avy = Math.floor(((Y1 + Y2)  / 2) - YMin);
			avz = Math.floor(((Z1 + Z2)  / 2) - ZMin);
			
			pax = Math.abs((XMax - XMin) * RenderSize  / 2);
			paz = Math.abs((ZMax - ZMin) * RenderSize  / 2);
			Data = "/sdcard/Mods/レンダラー生成.js";

			var Writer = new java.io.OutputStreamWriter(new java.io.FileOutputStream(Data));
			Writer.append("/" + "*" + "この値を変えると全体の座標が変わる" + "*" + "/");
			Writer.append("X = 0;Y = 0;Z = 0;");

			switch (RenderSize) {
				case 1:
					Picture = "ModPE.overrideTexture('images/mob/Mob.png', 'http://i.imgur.com/t1RXtje.png');";
					break;

				case 2:
					Picture = "ModPE.overrideTexture('images/mob/Mob.png','http://i.imgur.com/XUNMObM.png');";
					break;

				case 3:
					Picture = "ModPE.overrideTexture('images/mob/Mob.png','http://i.imgur.com/bYyAn4c.png');";
					break;

				case 4:
					Picture = "ModPE.overrideTexture('images/mob/Mob.png','http://i.imgur.com/oAIh2qf.png');";
					break;
			}

			Writer.append(Picture + "var MobRenderType = Renderer.createHumanoidRenderer();addMobRenderType(MobRenderType);function addMobRenderType(Renderer) {var Model = Renderer.getModel();var Head = Model.getPart('head').clear();var Body = Model.getPart('body').clear();var RightArm = Model.getPart('rightArm').clear();var LeftArm = Model.getPart('leftArm').clear();var RightLeg = Model.getPart('rightLeg').clear();var LeftLeg = Model.getPart('leftLeg').clear();");

			for (var x = XMin; x <= XMax; x++) {
				for (var y = YMin; y <= YMax; y++) {
					for (var z = ZMin; z <= ZMax; z++) {
						var BlockID = Level.getTile(x, y, z);

						if (BlockID == 1) {
							Writer.append("Body.setTextureOffset(0,0, true);");
						}

						if (BlockID == 3) {
							Writer.append("Body.setTextureOffset(" + 4 * RenderSize + ",0, true);");
						}

						if (BlockID == 4) {
							Writer.append("Body.setTextureOffset(" + 8 * RenderSize + ",0, true);");
						}

						if (BlockID == 5) {
							Writer.append("Body.setTextureOffset(" + 12 * RenderSize + ",0, true);");
						}

						if (BlockID != 20 && BlockID != 0) {
							Writer.append("Body.addBox(" + (-avx + (x - XMin) * RenderSize) + (-pax) + "+X" + "," + (avy + (y - YMin) * RenderSize) * - 1 + "+Y" + "," + (-avz + (z - ZMin) * RenderSize) + (-paz) + "+Z" + "," + (RenderSize) + "," + (RenderSize) + "," + (RenderSize) + ");  ");
						}
					}
				}
			}

			Writer.append("}");
			Writer.append("function useItem(X, Y, Z, ItemID, BlockID, Side, ItemData, BlockData) {if(ItemID == 349) {var Mob = Level.spawnMob(X, Y + 1, Z, 15, 'mob/Mob.png');Entity.setRenderType(Mob, MobRenderType.renderType);}}");
			Writer.close();
			clientMessage("Mod作成成功");
			IsSelected = false;
		}
	}
}

function CreateDirectory() {
	SDcard = android.os.Environment.getExternalStorageDirectory();
	Folder = new java.io.File(SDcard.getAbsolutePath(), "/Mods/");
	Folder.mkdirs();
	Data = new java.io.File(Folder, "レンダラー生成.js");
	Data.createNewFile();
}
