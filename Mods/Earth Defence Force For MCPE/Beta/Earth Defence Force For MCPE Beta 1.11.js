/*/
 *##################################################
 *#Earth Defence Force Beta 1.11
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
	
	//Rocket Launcher
	RL: {
		StingRayM1: 600,
	}
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
		},
		
		//Rocket Launcher
		RL: {
			StingRayM1: {Bullet: 2, MaxBullet: 2, FireRate: 10, ReloadSpeed: 1.5}
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
		var Z = 10;
		
		var Model = Renderer.getModel();
		var Head = Model.getPart("head").clear();
		var Body = Model.getPart("body").clear();
		var RightArm = Model.getPart("rightArm").clear();
		var LeftArm = Model.getPart("leftArm").clear();
		var RightLeg = Model.getPart("rightLeg").clear();
		var LeftLeg = Model.getPart("leftLeg").clear();
		
		Head.setTextureOffset(48, 0, true);
		Head.setTextureOffset(48, 0, true);
		
		Head.addBox(-4 - 16 + 0, -14 + 0, 32 - 18 + 0, 4, 4, 4);
		Head.addBox(-4 - 16 + 0, -18 + 0, 28 - 18 + 0, 4, 4, 4);
		Head.addBox(-4 - 16 + 0, -22 + 0, 32 - 18 + 0, 4, 4, 4);
		Head.addBox(0 - 16 + 0, -22 + 0, 24 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -2 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -2 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -2 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -2 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -6 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -6 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -6 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -6 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -10 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -10 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -22 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(4 - 16 + 0, -22 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -2 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -2 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -2 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -2 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -2 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -2 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -6 + 0, -4 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -6 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -6 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -6 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -6 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -6 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -10 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -10 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -10 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -10 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -14 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -14 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(8 - 16 + 0, -18 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -2 + 0, -4 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -2 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -2 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -2 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -2 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -2 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -2 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -2 + 0, 24 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -6 + 0, -4 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -6 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -6 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -6 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -6 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -6 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -6 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -10 + 0, -4 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -10 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -10 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -10 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -10 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -10 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -14 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -14 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -14 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(12 - 16 + 0, -14 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -2 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -2 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -2 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -2 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -2 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -2 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -6 + 0, -4 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -6 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -6 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -6 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -6 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -6 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -10 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -10 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -10 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -10 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -14 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -14 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(16 - 16 + 0, -18 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -2 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -2 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -2 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -2 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -6 + 0, 0 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -6 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -6 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -6 + 0, 12 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -10 + 0, 4 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -10 + 0, 8 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -22 + 0, 16 - 18 + 0, 4, 4, 4);
		Head.addBox(20 - 16 + 0, -22 + 0, 20 - 18 + 0, 4, 4, 4);
		Head.addBox(24 - 16 + 0, -22 + 0, 24 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -2 + 0, -4 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -14 + 0, 32 - 18 + 0, 4, 4, 4);
		Head.addBox(28 - 16 + 0, -18 + 0, 28 - 18 + 0, 4, 4, 4);
		
		
		Body.setTextureOffset(0, 0, true);
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
		Body.addBox(20 - 16 + X, - 36 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 36 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 36 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 36 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(20 - 16 + X, - 36 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 4 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 4 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 4 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 4 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 4 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 4 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 4 + Y, 42 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 8 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 8 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 8 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 8 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 8 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 8 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 12 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 12 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 12 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 16 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 16 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 16 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 20 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 20 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 20 + Y, 42 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 24 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 24 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 24 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 28 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 28 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 28 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 32 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 32 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 32 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 32 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 32 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 32 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 36 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 36 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 36 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 36 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 36 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(24 - 16 + X, - 36 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 8 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 8 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 8 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 8 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 8 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 8 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 12 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 12 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 12 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 12 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 12 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 12 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 16 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 16 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 16 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 20 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 20 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 20 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 20 + Y, 38 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 24 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 24 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 24 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 28 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 28 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 28 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 28 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 28 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 28 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 32 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 32 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 32 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 32 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 32 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(28 - 16 + X, - 32 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 12 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 12 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 12 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 12 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 12 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 12 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 16 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 16 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 16 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 16 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 16 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 16 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 20 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 20 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 20 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 20 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 20 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 20 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 20 + Y, 34 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 24 + Y, - 6 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 24 + Y, - 2 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 24 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 24 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 24 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 24 + Y, 30 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 28 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 28 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 28 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 28 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 28 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(32 - 16 + X, - 28 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 16 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 16 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 16 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 16 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 16 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 16 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 20 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 20 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 20 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 20 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 20 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 20 + Y, 22 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 20 + Y, 26 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 24 + Y, 2 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 24 + Y, 6 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 24 + Y, 10 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 24 + Y, 14 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 24 + Y, 18 - 24 + Z, 4, 4, 4);
		Body.addBox(36 - 16 + X, - 24 + Y, 22 - 24 + Z, 4, 4, 4);
	},

	addRAntRenderType: function(Renderer) {
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
		
		Body.addBox(-4 - 18 + X, - 17 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 17 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 17 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 17 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 21 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 25 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 29 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 33 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 33 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 33 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 33 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 33 + Y, 168 - 96 + Z, 4, 4, 4);
		Body.addBox(-4 - 18 + X, - 37 + Y, 164 - 96 + Z, 4, 4, 4);
		
		Body.setTextureOffset(24, 0, true);
		
		Body.addBox(-4 - 18 + X, - 41 + Y, 168 - 96 + Z, 4, 4, 4);
		
		Body.setTextureOffset(24, 0, true);
		
		Body.addBox(-4 - 18 + X, - 45 + Y, 168 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 13 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 13 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 13 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 13 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 17 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 21 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 25 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 29 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 33 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 37 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 37 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 37 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 37 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(0 - 18 + X, - 41 + Y, 160 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 9 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 9 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 9 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 9 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 13 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 17 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 21 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 25 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 29 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 29 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 29 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 29 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 29 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 29 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 29 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 29 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 29 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 29 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 29 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 33 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 37 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 41 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 41 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 41 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 41 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 41 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(4 - 18 + X, - 41 + Y, 156 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 5 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 5 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 5 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 5 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 124 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 9 + Y, 128 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 128 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 13 + Y, 132 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 17 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 21 + Y, 156 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, - 24 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 124 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 132 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 25 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 29 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 33 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 33 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 33 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 33 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 33 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 33 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 33 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 33 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 33 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 33 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 33 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 37 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 41 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 45 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 45 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 45 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(8 - 18 + X, - 45 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 5 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 5 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 5 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 5 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 124 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 128 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 9 + Y, 132 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 128 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 13 + Y, 132 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 17 + Y, 156 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, - 24 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 124 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 132 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 156 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 21 + Y, 160 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, - 24 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 124 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 132 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 25 + Y, 156 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, - 24 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 124 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 132 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 29 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 33 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 37 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 41 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 45 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 45 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 45 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(12 - 18 + X, - 45 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 5 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 5 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 5 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 5 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 124 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 9 + Y, 128 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 128 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 13 + Y, 132 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 17 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 21 + Y, 156 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, - 24 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 124 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 132 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 25 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 29 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 33 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 33 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 33 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 33 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 33 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 33 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 33 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 33 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 33 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 33 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 33 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 37 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 41 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 45 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 45 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 45 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(16 - 18 + X, - 45 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 9 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 9 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 9 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 9 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 13 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 17 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 21 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 36 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 44 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 120 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 136 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 25 + Y, 148 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 29 + Y, - 20 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 29 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 29 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 29 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 29 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 29 + Y, 68 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 29 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 29 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 29 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 29 + Y, 140 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 29 + Y, 144 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 33 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 37 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 41 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 41 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 41 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 41 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 41 + Y, 152 - 96 + Z, 4, 4, 4);
		Body.addBox(20 - 18 + X, - 41 + Y, 156 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 13 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 13 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 13 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 13 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 17 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 21 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 32 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 48 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 25 + Y, 116 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, - 16 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 28 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 52 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 56 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 60 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 64 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 76 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 80 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 29 + Y, 112 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 33 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 37 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 37 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 37 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 37 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(24 - 18 + X, - 41 + Y, 160 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 17 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 17 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 17 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 17 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 21 + Y, 104 - 96 + Z, 4, 4, 4);
		
		Body.setTextureOffset(24, 0, true);
		
		Body.addBox(28 - 18 + X, - 21 + Y, 132 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 25 + Y, 108 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, - 12 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, - 8 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, - 4 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, 16 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, 20 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, 24 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, 84 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, 88 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, 92 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, 96 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, 100 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 29 + Y, 104 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 33 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 33 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 33 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 33 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 33 + Y, 168 - 96 + Z, 4, 4, 4);
		Body.addBox(28 - 18 + X, - 37 + Y, 164 - 96 + Z, 4, 4, 4);
		
		Body.setTextureOffset(24, 0, true);
		
		Body.addBox(32 - 18 + X, - 5 + Y, - 24 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 21 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 21 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 21 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 21 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 25 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 25 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 25 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 25 + Y, 12 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 29 + Y, 0 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 29 + Y, 4 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 29 + Y, 8 - 96 + Z, 4, 4, 4);
		Body.addBox(32 - 18 + X, - 29 + Y, 12 - 96 + Z, 4, 4, 4);
	}
}

var Spawn = {
	X: 0,
	Y: 0,
	Z: 0,
	Amount: 0,
	Time: 180,
	
	NormalAnt: function(X, Y, Z) {
		var Ent = Level.spawnMob(X, Y, Z, 35, "mob/NormalAnt.png");
		Entity.setRenderType(Ent, Mob.NormalAnt.renderType);
		Entity.setHealth(Ent, 50);
	},

	RedAnt: function(X, Y, Z) {
		var Ent = Level.spawnMob(X, Y, Z, 35, "mob/RedAnt.png");
		Entity.setRenderType(Ent, Mob.RedAnt.renderType);
		Entity.setHealth(Ent, 20);
	}
}

var Flag = {
	IsShowing: false,
	IsShooting: false,
	IsReloading: false
}

var Timer = {
	FireTick: 0,
	Reload: 0,
	Spawn: 0
}

var Dir = {
	SD: android.os.Environment.getExternalStorageDirectory().getPath(),
	Directory: android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/Earth Defence Force For MCPE"
}

var Options = [];

/*/
 *------------------------------
 *        Hook Functions
 *------------------------------
/*/
function newLevel() {
	AddItem();
	AddMob();
	SetCategory();
	
	if(java.io.File(Dir.Directory + "/Option/SpawnOption.op").exists() == false) {
		OptionSave();
	} else if(java.io.File(Dir.Directory + "/Option/SpawnOption.op").exists() == true) {
		OptionLoad();
	}
}

function leaveGame() {
	DeleteAllGUI();
}

function modTick() {
	if(Timer.Spawn != null) {
		Timer.Spawn++;
	}
	
	if(Timer.Spawn == 1) { 
		Spawn.X = new java.util.Random().nextInt(60) - 30;
		Spawn.Z = new java.util.Random().nextInt(60) - 30;
		Spawn.Amount = new java.util.Random().nextInt(15);
		Spawn.Time = new java.util.Random().nextInt(240) + 120;
	}
	
	if(Timer.Spawn >= Spawn.Time) {
		for(var i = 0; i < Spawn.Amount; i++) {
			//Spawn.NormalAnt(Player.getX() + Spawn.X, Player.getY(), Player.getZ() + Spawn.Z);
			Spawn.RedAnt(Player.getX() + Spawn.X, Player.getY(), Player.getZ() + Spawn.Z);
		}
		
		Timer.Spawn = 0;
	}
	
	if(Flag.IsShooting) {
		Timer.FireTick++;
	}
	
	if(Flag.IsReloading) {
		Timer.Reload++;
		
		switch(getCarriedItem()) {
			case Ranger.AR.AF14:
				ProgressBars[3].setProgress((Timer.Reload / (Param.Ranger.AR.AF14.ReloadSpeed * 20)) * 100);
				break;
				
			case Ranger.AR.AF14RA:
				ProgressBars[3].setProgress((Timer.Reload / (Param.Ranger.AR.AF14RA.ReloadSpeed * 20)) * 100);
				break;
				
				
			case Ranger.RL.StingRayM1:
				ProgressBars[3].setProgress((Timer.Reload / (Param.Ranger.RL.StingRayM1.ReloadSpeed * 20)) * 100);
				break;
		}
	} else if(!Flag.IsReloading) {
		Timer.Reload = 0;
	}
	
	if(!Flag.IsShowing) {
		switch(getCarriedItem()) {
			case Ranger.AR.AF14:
			case Ranger.AR.AF14RA:
			
			case Ranger.RL.StingRayM1:
				ShowGun();
				Flag.IsShowing = true;
				break;
		}
	} else if(Flag.IsShowing) {
		switch(getCarriedItem()) {
			case Ranger.AR.AF14:
				ModPE.showTipMessage(Param.Ranger.AR.AF14.Bullet + "/" + Param.Ranger.AR.AF14.MaxBullet);
				
				if(!Flag.IsShooting) {
					Timer.FireTick = 2;
				}
				
				if(Timer.Reload >= Param.Ranger.AR.AF14.ReloadSpeed * 20) {
					Param.Ranger.AR.AF14.Bullet = 120;
					DeleteGUI(2);
					DeleteGUI(3);
					Flag.IsReloading = false;
				}
				
				if(Param.Ranger.AR.AF14.Bullet == 0) {
					
				} else if(Flag.IsShooting) {
					if(Timer.FireTick >= 2) {
						Fire(80, 5);
						Param.Ranger.AR.AF14.Bullet--;
						Timer.FireTick = 0;
					}
				}
				
				break;
				
			case Ranger.AR.AF14RA:
				ModPE.showTipMessage(Param.Ranger.AR.AF14RA.Bullet + "/" + Param.Ranger.AR.AF14RA.MaxBullet);
				
				if(!Flag.IsShooting) {
					Timer.FireTick = 0;
				}
				
				if(Timer.Reload >= Param.Ranger.AR.AF14RA.ReloadSpeed * 20) {
					Param.Ranger.AR.AF14RA.Bullet = 200;
					DeleteGUI(2);
					DeleteGUI(3);
					Flag.IsReloading = false;
				}
				
				if(Param.Ranger.AR.AF14RA.Bullet == 0) {
					
				} else if(Flag.IsShooting) {
					if(Timer.FireTick >= 0) {
						Fire(80, 2);
						Param.Ranger.AR.AF14RA.Bullet--;
						Timer.FireTick = 0;
					}
				}
				
				break;
				
				
			case Ranger.RL.StingRayM1:
				ModPE.showTipMessage(Param.Ranger.RL.StingRayM1.Bullet + "/" + Param.Ranger.RL.StingRayM1.MaxBullet);
				
				if(!Flag.IsShooting) {
					Timer.FireTick = 20;
				}
				
				if(Timer.Reload >= Param.Ranger.RL.StingRayM1.ReloadSpeed * 20) {
					Param.Ranger.RL.StingRayM1.Bullet = 2;
					DeleteGUI(2);
					DeleteGUI(3);
					Flag.IsReloading = false;
				}
				
				if(Param.Ranger.RL.StingRayM1.Bullet == 0) {
					
				} else if(Flag.IsShooting) {
					if(Timer.FireTick >= 20) {
						Fire(81, 10);
						Param.Ranger.RL.StingRayM1.Bullet--;
						Timer.FireTick = 0;
					}
				}
				
				break;
				
			default:
				DeleteAllGUI();
				Flag.IsShowing = false;
				break;
		}
	}
}

function procCmd(Cmd) {
	Cmd = Cmd.toLowerCase().split(" ");
	
	switch(Cmd[0]) {
		case "debug":
			switch(Cmd[1]) {
				case "spawn":
					switch(Cmd[2]) {
						case "on":
							Timer.Spawn = 0;
							print("It turned on.");
							break;
							
						case "off":
							Timer.Spawn = null;
							print("It turned off.");
							break;
					}
					
					break;
			}
			
			break;
	}
}

/*/
 *------------------------------
 *      Defined Functions
 *------------------------------
/*/
function AddItem() {
	ModPE.setItem(Ranger.AR.AF14, "AF14", 0, "AF14", 1);
	ModPE.setItem(Ranger.AR.AF14RA, "AF14RA", 0, "AF14RA", 1);
	
	ModPE.setItem(Ranger.RL.StingRayM1, "StingRayM1", 0, "スティングレイM1", 1);
}

function AddMob() {
	ModPE.overrideTexture('assets/images/mob/NormalAnt.png','http://i.imgur.com/oAIh2qf.png');
	ModPE.overrideTexture('assets/images/mob/RedAnt.png','http://i.imgur.com/XUNMObM.png');
	
	Render.addAntRenderType(Mob.NormalAnt);
	Render.addRAntRenderType(Mob.RedAnt);
}

function SetCategory() {
	Item.setCategory(Ranger.AR.AF14, ItemCategory.TOOL);
	Player.addItemCreativeInv(Ranger.AR.AF14, 1, 0);
	
	Item.setCategory(Ranger.AR.AF14RA, ItemCategory.TOOL);
	Player.addItemCreativeInv(Ranger.AR.AF14RA, 1, 0);
	
	
	Item.setCategory(Ranger.RL.StingRayM1, ItemCategory.TOOL);
	Player.addItemCreativeInv(Ranger.RL.StingRayM1, 1, 0);
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

function Reload() {
	switch(getCarriedItem()) {
		case Ranger.AR.AF14:
			if(Param.Ranger.AR.AF14.Bullet != Param.Ranger.AR.AF14.MaxBullet && !Flag.IsReloading) {
				AddTextView(2, "RELOAD", 24, Color.RED, Align.CENTER, Align.CENTER, function(){}, function(){}, 800, 400, Align.CENTER, Align.CENTER, 0, -100);
				AddProgressBar(3, 0, 100, "Horizontal", Color.GREEN, 600, 300, Align.CENTER, Align.CENTER, 0, 0);
				Flag.IsReloading = true;
				Param.Ranger.AR.AF14.Bullet = 0;
			}
			
			break;
			
		case Ranger.AR.AF14RA:
			if(Param.Ranger.AR.AF14RA.Bullet != Param.Ranger.AR.AF14RA.MaxBullet && !Flag.IsReloading) {
				AddTextView(2, "RELOAD", 24, Color.RED, Align.CENTER, Align.CENTER, function(){}, function(){}, 800, 400, Align.CENTER, Align.CENTER, 0, -100);
				AddProgressBar(3, 0, 100, "Horizontal", Color.GREEN, 600, 300, Align.CENTER, Align.CENTER, 0, 0);
				Flag.IsReloading = true;
				Param.Ranger.AR.AF14RA.Bullet = 0;
			}
			
			break;
			
		case Ranger.RL.StingRayM1:
			if(Param.Ranger.RL.StingRayM1.Bullet != Param.Ranger.RL.StingRayM1.MaxBullet && !Flag.IsReloading) {
				AddTextView(2, "RELOAD", 24, Color.RED, Align.CENTER, Align.CENTER, function(){}, function(){}, 800, 400, Align.CENTER, Align.CENTER, 0, -100);
				AddProgressBar(3, 0, 100, "Horizontal", Color.GREEN, 600, 300, Align.CENTER, Align.CENTER, 0, 0);
				Flag.IsReloading = true;
				Param.Ranger.RL.StingRayM1.Bullet = 0;
			}
			
			break;
	}
}

function ShowGun() {
	CreateGUI(function() {
		AddTouch(0, "Fire", 10, Color.RED, function() {
			Flag.IsShooting = true;
		}, function() {
			Flag.IsShooting = false;
		}, 200, 100, Align.RIGHT, Align.CENTER, 0, -50);
		
		AddButton(1, "Reload", 10, Color.WHITE, function() {
			Reload();
		}, function(){}, 200, 100, Align.RIGHT, Align.CENTER, 0, 50);
	});
}

function OptionSave() {
	try {
		if(java.io.File(Dir.Directory).exists() == false) {
			java.io.File(Dir.Directory).mkdirs();
			java.io.File(Dir.Directory + "/Option").mkdirs();
		} else if(java.io.File(Dir.Directory + "/Option").exists() == false) {
			java.io.File(Dir.Directory + "/Option").mkdirs();
		}
		
		var OptionFile = new java.io.BufferedWriter(new java.io.FileWriter(new java.io.File(Dir.Directory + "/Option/SpawnOption.op"), false));
		
		for(var i = 1; i <= 5; i++) {
			switch(i) {
				case 2:
					OptionFile.write("#This is an option file.");
					OptionFile.newLine();
					OptionFile.write("#Don't change this file if you don't know.");
					OptionFile.newLine();
					
					i = 4;
					break;
					
				case 5:
					OptionFile.write("CanSpawn = true");
					OptionFile.newLine();
					break;
			}
			
			OptionFile.write("##################################################");
			OptionFile.newLine();
		}
		
		OptionFile.close();
		
		Timer.Spawn = 0;
	} catch (Error) {
		print("エラーが発生しました");
		print(Error);
	}
}

function OptionLoad() {
	try {
		if(java.io.File(Dir.Directory).exists() == false) {
			java.io.File(Dir.Directory).mkdirs();
			java.io.File(Dir.Directory + "/Option").mkdirs();
		} else if(java.io.File(Dir.Directory + "/Option").exists() == false) {
			java.io.File(Dir.Directory + "/Option").mkdirs();
		}
		
		var OptionFile = new java.io.BufferedReader(new java.io.FileReader(new java.io.File(Dir.Directory + "/Option/SpawnOption.op")));
		
		for(var i = 1; i <= 5; i++) {
			switch(i) {
				case 5:
					Options[0] = OptionFile.readLine().split(" = ");
					break;
			}
			
			OptionFile.readLine();
		}
		
		OptionFile.close();
		
		switch(Options[0][1]) {
			case "true":
				Timer.Spawn = 0;
				break;
				
			case "false":
				Timer.Spawn = null;
				break;
		}
	} catch (Error) {
		print("エラーが発生しました");
		print(Error);
	}
}


/*/
 *##################################################
 *#GUI Helper Release 1.09
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
var ImageViews = [];

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

function AddSeekBar(ID, Value, MaxValue, DragFuc, TouchFuc, ReleaseFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	SeekBars[ID] = new android.widget.SeekBar(GUI);
	SeekBars[ID].setProgress(Value);
	SeekBars[ID].setMax(MaxValue);
	
	var SeekContent = new android.view.View.OnSeekBarChangeListener() {
		onProgressChanged: function() {
			DragFuc();
		},
		
		onStartTrackingTouch: function() {
			TouchFuc();
		},
		
		onStopTrackingTouch: function() {
			ReleaseFuc();
		}
	}
	
	SeekBars[ID].setOnSeekBarChangeListener(SeekContent);
	
	Window[ID] = new android.widget.PopupWindow(SeekBars[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(SeekBars[ID]);
}

function AddProgressBar(ID, Value, MaxValue, Size, Color, Width, Height, XAlign, YAlign, XPosition, YPosition) {
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
	ProgressBars[ID].getProgressDrawable().setColorFilter(Color, android.graphics.PorterDuff.Mode.SRC_IN);
	
	Window[ID] = new android.widget.PopupWindow(ProgressBars[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(ProgressBars[ID]);
}

function AddImageView(ID, URL, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	ImageViews[ID] = new android.widget.ImageView(GUI);
	
	var Connecter = new java.net.URL(URL).openConnection();
		Connecter.setDoInput(true);
		Connecter.connect();
	
	ImageViews[ID].setImageBitmap(BitmapFactory.decodeStream(Connecter.getInputStream()));
	
	Window[ID] = new android.widget.PopupWindow(ImageViews[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(ImageViews[ID]);
}
