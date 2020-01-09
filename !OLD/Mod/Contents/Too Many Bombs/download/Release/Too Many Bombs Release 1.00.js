/*/
 *##################################################
 *#Too Many Bombs Release 1.00
 *#Copyright © 2015 Genbu Hase All Rights Reserved.
 *##################################################
/*/

/*/
 *------------------------------
 *These are material ids.
 *------------------------------
/*/
var Materials = {
	String: 287,
	GunPowder: 289,
}

var Entities = {
	SnowBall: 81,
}

var Blocks = {
	Fire: 51,
}

/*/
 *------------------------------
 *These are item ids for adding.
 *------------------------------
/*/
var Bomb = {
	StandardBomb: 501,
	FireBomb: 502,
}

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/
var GUI = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Button = new android.widget.Button(GUI);
var PopUp = new android.widget.PopupWindow(Button, 300, 125);
var EntityAll;

function newLevel() {
	AddItems();
	AddRecipes();
	SetCategory();
}

function leaveGame() {
	HideGUI();
}

function modTick() {
	switch(getCarriedItem()) {
		case Bomb.StandardBomb:
			ShowGUI();
			EntityAll = Entity.getAll();

			for(var i = 0; i < EntityAll.length; i++) {
				if(Entity.getEntityTypeId(EntityAll[i]) == Entities.SnowBall) {
					if(Level.getTile(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])) - 1, Math.round(Entity.getZ(EntityAll[i]))) != 0) {
						explode(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
					}
				}
			}
			
			break;
			
		case Bomb.FireBomb:
			ShowGUI();
			EntityAll = Entity.getAll();

			for(var i = 0; i < EntityAll.length; i++) {
				if(Entity.getEntityTypeId(EntityAll[i]) == Entities.SnowBall) {
					if(Level.getTile(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])) - 1, Math.round(Entity.getZ(EntityAll[i]))) != 0) {
						explode(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
						Level.setTile(Math.round(Entity.getX(EntityAll[i])) + i, Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])) + i, Blocks.Fire);
					}
				}
			}
			
			break;

		default:
			HideGUI();
			break;
	}
}

/*/
 *------------------------------
 *These are defined functions.
 *------------------------------
/*/
function AddItems() {
	ModPE.setItem(Bomb.StandardBomb, "StandardBomb", 0, "普通の爆弾", 1);
	ModPE.setItem(Bomb.FireBomb, "snowball", 0, "炎の爆弾", 1);
}

function AddRecipes() {
	Item.addShapedRecipe(Bomb.StandardBomb, 9, 0, ["GSG", "GGG", "GGG"], ["G", Materials.GunPowder, 1, "S", Materials.String, 0]); //普通の爆弾 のレシピ追加(火薬 * 8 & 糸 * 1)
}

function SetCategory() {
	Item.setCategory(Bomb.StandardBomb, ItemCategory.TOOL);
	Player.addItemCreativeInv(Bomb.StandardBomb, 1, 0);
	
	Item.setCategory(Bomb.FireBomb, ItemCategory.TOOL);
	Player.addItemCreativeInv(Bomb.FireBomb, 1, 0);
}

function Throw(Entity, XSpeed, YSpeed) {
	var playerYaw = Entity.getYaw(Player.getEntity());
	var playerPitch = Entity.getPitch(Player.getEntity());

	vpc = Math.sin(playerYaw / 180 * Math.PI)
	vps = Math.cos((playerPitch - 180) / 180 * Math.PI)
	vpt = Math.cos(playerYaw / 180 * Math.PI)

	velY = Math.sin((playerPitch - 180) / 180 * Math.PI);
	velX = (vpc * vps);
	velZ = -1 * (vpt * vps);

	setVelX(Entity, velX * XSpeed);
	setVelY(Entity, velY * YSpeed);
	setVelZ(Entity, velZ * XSpeed);
}

function Throw_Arrow(Speed) {
	R = Math.cos(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2;
	X = Math.sin(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
	Y = Math.sin(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2 + Entity.getY(getPlayerEnt());
	Z = Math.cos(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
	
	Arrow = Level.spawnMob(X, Y, Z, 80);
	
	R = Math.cos(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2);
	X = Math.sin(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
	Y = Math.sin(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2) + Entity.getY(getPlayerEnt());
	Z = Math.cos(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
	
	setVelX(Arrow, X - Entity.getX(Arrow));
	setVelY(Arrow, Y - Entity.getY(Arrow));
	setVelZ(Arrow, Z - Entity.getZ(Arrow));
}

function Throw_SnowBall(Speed) {
	R = Math.cos(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2;
	X = Math.sin(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
	Y = Math.sin(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2 + Entity.getY(getPlayerEnt());
	Z = Math.cos(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
	
	SnowBall = Level.spawnMob(X, Y, Z, 81);
	
	R = Math.cos(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2);
	X = Math.sin(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
	Y = Math.sin(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2) + Entity.getY(getPlayerEnt());
	Z = Math.cos(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
	
	setVelX(SnowBall, X - Entity.getX(SnowBall));
	setVelY(SnowBall, Y - Entity.getY(SnowBall));
	setVelZ(SnowBall, Z - Entity.getZ(SnowBall));
}

function ShowGUI(){
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				Button.setText("爆弾投擲");

				Content = new android.view.View.OnClickListener(){
					onClick: function() {
						Throw_SnowBall(1);
					}
				}
				Button.setOnClickListener(Content);

				PopUp.showAtLocation(GUI.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.CENTER, 0, 0);
			} catch(Error) {
				clientMessage(Error);
			}
		}
	}))
}

function HideGUI() {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				PopUp.dismiss();
			} catch (Error) {
				clientMessage(Error);
			}
		}
	}));
}
