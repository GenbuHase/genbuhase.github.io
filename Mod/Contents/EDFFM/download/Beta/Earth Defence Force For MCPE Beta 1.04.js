/*/
 *##################################################
 *#Earth Defence Force Beta 1.03
 *#Copyright © 2015 Genbu Hase All Rights Reserved.
 *##################################################
/*/

/*/
 *------------------------------
 *             IDs
 *------------------------------
/*/
var Ranger = {
	//Assault Rifle
	AR: {
		AF14: 501,
		AF14RA: 502,
	},
}

var WingDiver = {
	//Rapier
	Rapier: {
		Rapier: 601,
		RapierTrast: 602
	}
}

var Mob = {
	NormalAnt: Renderer.createHumanoidRenderer(),
	RedAnt: Renderer.createHumanoidRenderer(),
	GoldAnt: Renderer.createHumanoidRenderer(),
}

/*/
 *------------------------------
 *         System Args
 *------------------------------
/*/
var Param = {
	Ranger: {
		//Assault Rifle
		AR: {
			AF14: {Bullet: 120, MaxBullet: 120, FireRate: 2, ReloadSpeed: 1.5},
			AF14RA: {Bullet: 200, MaxBullet: 200, FireRate: 0, ReloadSpeed: 2.5}
		}
	},
	
	WingDiver: {
		Rapier: {
			Rapier: {Bullet: 600, MaxBullet: 600, FireRate: 0, ReloadSpeed: 1.5}
		}
	}
}

var Render = {
	addAntRenderType: function(Renderer) {
		var X = 0;
		var Y = 0;
		var Z = 0;
		
		var Model = Renderer.getModel();
		var Head = Model.getPart("head").clear();
		var Body = Model.getPart("body").clear();
		var RightArm = Model.getPart("rightArm").clear();
		var LeftArm = Model.getPart("leftArm").clear();
		var RightLeg = Model.getPart("rightLeg").clear();
		var LeftLeg = Model.getPart("leftLeg").clear();
		
		Head.setTextureOffset(0, 0, true);
		Head.setTextureOffset(16, 0, true);
		Head.setTextureOffset(32, 0, true);
		Head.setTextureOffset(48, 0, true);
		Head.setTextureOffset(0, 8, true);
		Head.setTextureOffset(16, 8, true);
		Head.setTextureOffset(32, 8, true);
		Head.setTextureOffset(48, 8, true);
		Head.setTextureOffset(0, 16, true);
		Head.setTextureOffset(16, 16, true);
		Head.setTextureOffset(32, 16, true);
		Head.setTextureOffset(48, 16, true);
		Head.setTextureOffset(0, 24, true);
		Head.setTextureOffset(16, 24, true);
		Head.setTextureOffset(32, 24, true);
		Head.setTextureOffset(48, 24, true);
		
		Head.addBox(4 - 16 + 0, -19 + 0, 32 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -23 + 0, 28 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -27 + 0, 24 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -7 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -7 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -7 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -7 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -11 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -11 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -11 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -11 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -15 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -15 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -27 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -27 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -3 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -3 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -3 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -3 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -7 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -7 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -7 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -7 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -7 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -7 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -11 + 0, -4 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -11 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -11 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -11 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -11 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -11 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -15 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -15 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -15 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -15 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -19 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -19 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -23 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -3 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -3 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -3 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -3 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -3 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -3 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -7 + 0, -4 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -7 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -7 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -7 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -7 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -7 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -7 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -7 + 0, 24 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -11 + 0, -4 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -11 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -11 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -11 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -11 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -11 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -11 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -15 + 0, -4 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -15 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -15 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -15 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -15 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -15 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -19 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -19 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -19 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -19 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -3 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -3 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -3 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -3 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -7 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -7 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -7 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -7 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -7 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -7 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -11 + 0, -4 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -11 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -11 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -11 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -11 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -11 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -15 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -15 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -15 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -15 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -19 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -19 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -23 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -7 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -7 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -7 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -7 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -11 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -11 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -11 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -11 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -15 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -15 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -27 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -27 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(32 - 16 + 0, -27 + 0, 24 - 18 + 0, 4, 4, 4);
		Head.addBox(36 - 16 + 0, -19 + 0, 32 - 18 + 0, 4, 4, 4);
		Head.addBox(36 - 16 + 0, -23 + 0, 28 - 18 + 0, 4, 4, 4);
		
		
		/*Body.setTextureOffset(0, 0, true);
		Body.setTextureOffset(16, 0, true);
		Body.setTextureOffset(32, 0, true);
		Body.setTextureOffset(48, 0, true);
		Body.setTextureOffset(0, 8, true);
		Body.setTextureOffset(16, 8, true);
		Body.setTextureOffset(32, 8, true);
		Body.setTextureOffset(48, 8, true);
		Body.setTextureOffset(0, 16, true);
		Body.setTextureOffset(16, 16, true);
		Body.setTextureOffset(32, 16, true);
		Body.setTextureOffset(48, 16, true);
		Body.setTextureOffset(0, 24, true);
		Body.setTextureOffset(16, 24, true);
		Body.setTextureOffset(32, 24, true);
		Body.setTextureOffset(48, 24, true);
		
		Body.addBox(4 - 16 + X, - 16 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 16 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 16 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 16 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 16 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 16 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 20 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 20 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 20 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 20 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 20 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 20 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 20 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 24 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 24 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 24 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 24 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 24 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(4 - 16 + X, - 24 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 12 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 12 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 12 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 12 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 12 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 12 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 16 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 16 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 16 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 16 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 16 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 16 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 20 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 20 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 20 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 20 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 20 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 20 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 20 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 24 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 24 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 24 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 24 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 24 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 24 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 28 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 28 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 28 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 28 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 28 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(8 - 16 + X, - 28 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 8 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 8 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 8 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 8 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 8 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 8 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 12 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 12 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 12 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 12 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 12 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 12 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 16 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 16 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 16 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 20 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 20 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 20 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 20 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 24 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 24 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 24 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 28 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 28 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 28 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 28 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 28 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 28 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 32 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 32 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 32 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 32 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 32 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(12 - 16 + X, - 32 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 4 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 4 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 4 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 4 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 4 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 4 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 4 + Y, 42 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 8 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 8 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 8 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 8 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 8 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 8 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 12 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 12 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 12 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 16 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 16 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 16 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 20 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 20 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 20 + Y, 42 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 24 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 24 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 24 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 28 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 28 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 28 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 32 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 32 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 32 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 32 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 32 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 32 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 36 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 36 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 36 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 36 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 36 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(16 - 16 + X, - 36 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 4 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 4 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 4 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 4 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 4 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 4 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 4 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 4 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 4 + Y, 42 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 8 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 8 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 8 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 8 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 8 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 8 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 8 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 12 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 12 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 12 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 12 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 16 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 16 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 16 + Y, 42 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 20 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 20 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 20 + Y, 42 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 24 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 24 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 24 + Y, 42 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 28 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 28 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 28 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 28 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 32 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 32 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 32 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 32 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 32 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 32 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 32 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 36 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 36 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 36 + Y, 10 - 24 + Z, 4, 4, 4); Body.addBox(20 - 16 + X, - 36 + Y, 14 - 24 + Z, 4, 4, 4); Body.addBox(20 - 16 + X, - 36 + Y, 18 - 24 + Z, 4, 4, 4); Body.addBox(20 - 16 + X, - 36 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(20 - 16 + X, - 36 + Y, 26 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 4 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 4 + Y, 6 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 4 + Y, 10 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 4 + Y, 14 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 4 + Y, 18 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 4 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 4 + Y, 42 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 8 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 8 + Y, - 2 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 8 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 8 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 8 + Y, 26 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 8 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 12 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 12 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 12 + Y, 34 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 16 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 16 + Y, 34 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 16 + Y, 38 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 20 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 20 + Y, 38 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 20 + Y, 42 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 24 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 24 + Y, 34 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 24 + Y, 38 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 28 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 28 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 28 + Y, 34 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 32 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 32 + Y, - 2 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 32 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 32 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 32 + Y, 26 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 32 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 36 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 36 + Y, 6 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 36 + Y, 10 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 36 + Y, 14 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 36 + Y, 18 - 24 + Z, 4, 4, 4); Body.addBox(24 - 16 + X, - 36 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 8 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 8 + Y, 6 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 8 + Y, 10 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 8 + Y, 14 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 8 + Y, 18 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 8 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 12 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 12 + Y, - 2 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 12 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 12 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 12 + Y, 26 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 12 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 16 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 16 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 16 + Y, 34 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 20 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 20 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 20 + Y, 34 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 20 + Y, 38 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 24 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 24 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 24 + Y, 34 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 28 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 28 + Y, - 2 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 28 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 28 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 28 + Y, 26 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 28 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 32 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 32 + Y, 6 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 32 + Y, 10 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 32 + Y, 14 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 32 + Y, 18 - 24 + Z, 4, 4, 4); Body.addBox(28 - 16 + X, - 32 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 12 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 12 + Y, 6 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 12 + Y, 10 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 12 + Y, 14 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 12 + Y, 18 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 12 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 16 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 16 + Y, - 2 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 16 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 16 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 16 + Y, 26 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 16 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 20 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 20 + Y, - 2 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 20 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 20 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 20 + Y, 26 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 20 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 20 + Y, 34 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 24 + Y, - 6 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 24 + Y, - 2 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 24 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 24 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 24 + Y, 26 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 24 + Y, 30 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 28 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 28 + Y, 6 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 28 + Y, 10 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 28 + Y, 14 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 28 + Y, 18 - 24 + Z, 4, 4, 4); Body.addBox(32 - 16 + X, - 28 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 16 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 16 + Y, 6 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 16 + Y, 10 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 16 + Y, 14 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 16 + Y, 18 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 16 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 20 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 20 + Y, 6 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 20 + Y, 10 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 20 + Y, 14 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 20 + Y, 18 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 20 + Y, 22 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 20 + Y, 26 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 24 + Y, 2 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 24 + Y, 6 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 24 + Y, 10 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 24 + Y, 14 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 24 + Y, 18 - 24 + Z, 4, 4, 4); Body.addBox(36 - 16 + X, - 24 + Y, 22 - 24 + Z, 4, 4, 4);*/
	}
}

var Spawn = {
	NormalAnt: function(X, Y, Z) {
		var Ent = Level.spawnMob(X, Y, Z, 35, "mob/NormalAnt.png");
		Entity.setRenderType(Ent, Mob.NormalAnt.renderType);
		Entity.setHealth(Ent, 50);
	}
}

var IsShowing = false;
var IsShooting = false;
var IsReloading = false;

var Timer = {
	FireTick: 0,
	Reload: 0,
	Spawn: 0
}

function newLevel() {
	AddItem();
	AddMob();
	SetCategory();
}

function leaveGame() {
	DeleteAllGUI();
}

function modTick() {
	if(Timer.Spawn == 0) {
		var RX = new java.util.Random().nextInt(5) - 5;
		var RZ = new java.util.Random().nextInt(5) - 5;
	}
	
	Timer.Spawn++;
	
	if(Timer.Spawn >= 300) {
		Spawn.NormalAnt(Player.getX() + RX, Player.getY(), Player.getZ() + RZ);
		clientMessage("Ant!!!");
		Timer.Spawn = 0;
	}
	
	if(IsShooting) {
		Timer.FireTick++;
	}
	
	if(IsReloading) {
		Timer.Reload++;
		
		switch(getCarriedItem()) {
			case Ranger.AR.AF14:
				ProgressBars[2].setProgress((Timer.Reload / (Param.Ranger.AR.AF14.ReloadSpeed * 20)) * 100);
				break;
				
			case Ranger.AR.AF14RA:
				ProgressBars[2].setProgress((Timer.Reload / (Param.Ranger.AR.AF14RA.ReloadSpeed * 20)) * 100);
				break;
		}
	} else if(!IsReloading) {
		Timer.Reload = 0;
	}
	
	if(!IsShowing) {
		switch(getCarriedItem()) {
			case Ranger.AR.AF14:
				ShowGun();
				IsShowing = true;
				break;
				
			case Ranger.AR.AF14RA:
				ShowGun();
				IsShowing = true;
				break;
		}
	} else if(IsShowing) {
		switch(getCarriedItem()) {
			case Ranger.AR.AF14:
				ModPE.showTipMessage(Param.Ranger.AR.AF14.Bullet + "/" + Param.Ranger.AR.AF14.MaxBullet);
				
				if(!IsShooting) {
					Timer.FireTick = 2;
				}
				
				if(Timer.Reload >= Param.Ranger.AR.AF14.ReloadSpeed * 20) {
					Param.Ranger.AR.AF14.Bullet = 120;
					DeleteGUI(2);
					IsReloading = false;
				}
				
				if(Param.Ranger.AR.AF14.Bullet == 0) {
					
				} else if(IsShooting) {
					if(Timer.FireTick >= 2) {
						Fire(80, 2);
						Param.Ranger.AR.AF14.Bullet--;
						Timer.FireTick = 0;
					}
				}
				
				break;
				
			case Ranger.AR.AF14RA:
				ModPE.showTipMessage(Param.Ranger.AR.AF14RA.Bullet + "/" + Param.Ranger.AR.AF14RA.MaxBullet);
				
				if(!IsShooting) {
					Timer.FireTick = 0;
				}
				
				if(Timer.Reload >= Param.Ranger.AR.AF14RA.ReloadSpeed * 20) {
					Param.Ranger.AR.AF14RA.Bullet = 200;
					DeleteGUI(2);
					IsReloading = false;
				}
				
				if(Param.Ranger.AR.AF14RA.Bullet == 0) {
					
				} else if(IsShooting) {
					if(Timer.FireTick >= 0) {
						Fire(80, 2);
						Param.Ranger.AR.AF14RA.Bullet--;
						Timer.FireTick = 0;
					}
				}
				
				break;
				
			case WingDiver.Repier:
				ModPE.showTipMessage(Param.Ranger.AR.AF14.Bullet + "/" + Param.Ranger.AR.AF14.MaxBullet);
				
				if(!IsShooting) {
					Timer.FireTick = 2;
				}
				
				if(Timer.Reload >= Param.Ranger.AR.AF14.ReloadSpeed * 20) {
					Param.Ranger.AR.AF14.Bullet = 120;
					DeleteGUI(2);
					IsReloading = false;
				}
				
				if(Param.Ranger.AR.AF14.Bullet == 0) {
					
				} else if(IsShooting) {
					if(Timer.FireTick >= 2) {
						Fire(80, 2);
						Param.Ranger.AR.AF14.Bullet--;
						Timer.FireTick = 0;
					}
				}
				
				break;
				
			default:
				DeleteAllGUI();
				IsShowing = false;
				break;
		}
	}
	
	Entity.setNameTag(Player.getPointedEntity(),"§5♡" + Entity.getHealth(Player.getPointedEntity()));
	clientMessage(Timer.Spawn);
}

/*/
 *------------------------------
 *      Defined Functions
 *------------------------------
/*/
function AddItem() {
	ModPE.setItem(Ranger.AR.AF14, "AF14", 0, "AF14", 1);
	ModPE.setItem(Ranger.AR.AF14RA, "AF14RA", 0, "AF14RA", 1);
}

function AddMob() {
	Render.addAntRenderType(Mob.NormalAnt);
}

function SetCategory() {
	Item.setCategory(Ranger.AR.AF14, ItemCategory.TOOL);
	Player.addItemCreativeInv(Ranger.AR.AF14, 1, 0);
	
	Item.setCategory(Ranger.AR.AF14RA, ItemCategory.TOOL);
	Player.addItemCreativeInv(Ranger.AR.AF14RA, 1, 0);
}

function Fire(EntityID, Speed) {
	R = Math.cos(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2;
	X = Math.sin(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
	Y = Math.sin(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2 + Entity.getY(getPlayerEnt());
	Z = Math.cos(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
	
	var Bullet = Level.spawnMob(X, Y, Z, EntityID);
	
	R = Math.cos(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2);
	X = Math.sin(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
	Y = Math.sin(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2) + Entity.getY(getPlayerEnt());
	Z = Math.cos(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
	
	setVelX(Bullet, X - Entity.getX(Bullet));
	setVelY(Bullet, Y - Entity.getY(Bullet));
	setVelZ(Bullet, Z - Entity.getZ(Bullet));
}

function ShowGun() {
	CreateGUI(function() {
		AddTouch(0, "Fire", 10, Color.RED, function() {
			IsShooting = true;
		}, function() {
			IsShooting = false;
		}, 200, 100, Align.RIGHT, Align.CENTER, 0, -50);
		
		AddButton(1, "Reload", 10, Color.WHITE, function() {
			switch(getCarriedItem()) {
				case Ranger.AR.AF14:
					if(Param.Ranger.AR.AF14.Bullet != 120 && !IsReloading) {
						AddProgressBar(2, 0, 100, "Horizontal", 600, 300, Align.CENTER, Align.CENTER, 0, 0);
						IsReloading = true;
						Param.Ranger.AR.AF14.Bullet = 0;
					} else {
						
					}
					
					break;
					
				case Ranger.AR.AF14RA:
					if(Param.Ranger.AR.AF14RA.Bullet != 200 && !IsReloading) {
						AddProgressBar(2, 0, 100, "Horizontal", 600, 300, Align.CENTER, Align.CENTER, 0, 0);
						IsReloading = true;
						Param.Ranger.AR.AF14RA.Bullet = 0;
					} else {
						
					}
					
					break;
			}
		}, function(){}, 200, 100, Align.RIGHT, Align.CENTER, 0, 50);
	});
}



/*/
 *##################################################
 *#GUI Helper Release 1.07
 *#Copyright © 2015 Genbu Hase All Rights Reserved.
 *##################################################
/*/

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/
var GUI = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Window = [];

var TextViews = [];
var Buttons = [];
var Toggles = [];
var Touches = [];
var SeekBars = [];
var ProgressBars = [];

/*/
 *------------------------------
 *These are args you can use.
 *------------------------------
/*/
var Align = {
	LEFT: android.view.Gravity.LEFT, //左
	RIGHT: android.view.Gravity.RIGHT, //右
	TOP: android.view.Gravity.TOP, //上
	BOTTOM: android.view.Gravity.BOTTOM, //下
	CENTER: android.view.Gravity.CENTER //中央
}

var Color = {
	BLACK: android.graphics.Color.BLACK,
	BLUE: android.graphics.Color.BLUE,
	CYAN: android.graphics.Color.CYAN,
	DARKGRAY: android.graphics.Color.DKGRAY,
	GRAY: android.graphics.Color.GRAY,
	GREEN: android.graphics.Color.GREEN,
	LIGHTGRAY: android.graphics.Color.LTGRAY,
	MAGENTA: android.graphics.Color.MAGENTA,
	RED: android.graphics.Color.RED,
	WHITE: android.graphics.Color.WHITE,
	YELLOW: android.graphics.Color.YELLOW,
	TRANSPARENT: android.graphics.Color.TRANSPARENT,
	ARGB: function(A, R, G, B) {android.graphics.Color.argb(A, R, G, B)}
}

var Touch = {
	Press: android.view.MotionEvent.ACTION_DOWN,
	Release: android.view.MotionEvent.ACTION_UP
}

function CreateGUI(Content) {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				Content();
			} catch(Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

function DeleteGUI(ID) {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				Window[ID].dismiss();
			} catch (Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

function DeleteAllGUI() {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				for (var i = 0; i < Window.length; i++) {
					Window[i].dismiss();
				}
			} catch (Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

/*/
 *------------------------------
 *These are property classes.
 *------------------------------
/*/
function AddTextView(ID, Text, TextSize, Color, XTextAlign, YTextAlign, Fuc, LongFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	TextViews[ID] = new android.widget.TextView(GUI);
	TextViews[ID].setText(Text);
	TextViews[ID].setTextSize(TextSize);
	TextViews[ID].setTextColor(Color);
	TextViews[ID].setGravity(YTextAlign|XTextAlign);
	
	var Content = new android.view.View.OnClickListener() {
		onClick: function() {
			Fuc();
		}
	}
	
	var LongContent = new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	}
	
	TextViews[ID].setOnClickListener(Content);
	TextViews[ID].setOnLongClickListener(LongContent);
	
	Window[ID] = new android.widget.PopupWindow(TextViews[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(TextViews[ID]);
}

function AddButton(ID, Text, TextSize, Color, Fuc, LongFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	Buttons[ID] = new android.widget.Button(GUI);
	Buttons[ID].setText(Text);
	Buttons[ID].setTextSize(TextSize);
	Buttons[ID].setTextColor(Color);
	
	var Content = new android.view.View.OnClickListener() {
		onClick: function() {
			Fuc();
		}
	}
	
	var LongContent = new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	}
	
	Buttons[ID].setOnClickListener(Content);
	Buttons[ID].setOnLongClickListener(LongContent);
	
	Window[ID] = new android.widget.PopupWindow(Buttons[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(Buttons[ID]);
}

function AddToggle(ID, Text1, Text2, TextSize1, TextSize2, Color1, Color2, Fuc, LongFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	Toggles[ID] = new android.widget.Button(GUI);
	Toggles[ID].setText(Text1);
	Toggles[ID].setTextSize(TextSize1);
	Toggles[ID].setTextColor(Color1);
	
	var Content = new android.view.View.OnClickListener() {
		onClick: function() {
			if (Toggles[ID].getText() == Text2) {
				Toggles[ID].setText(Text1);
				Toggles[ID].setTextSize(TextSize1);
				Toggles[ID].setTextColor(Color1);
			} else if (Toggles[ID].getText() == Text1) {
				Toggles[ID].setText(Text2);
				Toggles[ID].setTextSize(TextSize2);
				Toggles[ID].setTextColor(Color2);
			}
			
			Fuc();
		}
	}
	
	var LongContent = new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	}
	
	Toggles[ID].setOnClickListener(Content);
	Toggles[ID].setOnLongClickListener(LongContent);
	
	Window[ID] = new android.widget.PopupWindow(Toggles[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(Toggles[ID]);
}

function AddTouch(ID, Text, TextSize, Color, TouchFuc, ReleaseFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	Touches[ID] = new android.widget.Button(GUI);
	Touches[ID].setText(Text);
	Touches[ID].setTextSize(TextSize);
	Touches[ID].setTextColor(Color);
	
	var TouchContent = new android.view.View.OnTouchListener() {
		onTouch: function(View, Event) {
			switch(Event.getAction()) {
				case android.view.MotionEvent.ACTION_DOWN:
					TouchFuc();
					break;
					
				case android.view.MotionEvent.ACTION_UP:
					ReleaseFuc();
					break;
			}
			
			return true;
		}
	}
	
	Touches[ID].setOnTouchListener(TouchContent);
	
	Window[ID] = new android.widget.PopupWindow(Touches[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(Touches[ID]);
}

function AddSeekBar(ID, Value, MaxValue, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	SeekBars[ID] = new android.widget.SeekBar(GUI);
	SeekBars[ID].setProgress(Value);
	SeekBars[ID].setMax(MaxValue);
	
	Window[ID] = new android.widget.PopupWindow(SeekBars[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(SeekBars[ID]);
}

function AddProgressBar(ID, Value, MaxValue, Size, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	switch(Size.toLowerCase().toString()) {
		case "small":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyleSmall);
			break;
			
		case "normal":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyle);
			break;
			
		case "large":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyleLarge);
			break;
			
		case "horizontal":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyleHorizontal);
			break;
	}
	
	ProgressBars[ID].setProgress(Value);
	ProgressBars[ID].setMax(MaxValue);
	
	Window[ID] = new android.widget.PopupWindow(ProgressBars[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(ProgressBars[ID]);
}
