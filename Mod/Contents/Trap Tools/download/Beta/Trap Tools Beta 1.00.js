/*/
 *------------------------------
 *These are material ids.
 *------------------------------
/*/
var Materials = {
	SlimeBall: 341,
	IronIngot: 265,
	Suger: 353,
}

/*/
 *------------------------------
 *These are item ids for adding.
 *------------------------------
/*/
var TrapBlocks = {
	SuperSpeedBlock: 201,
	JumpBlock: 202,
	TurnBlock: 203,
	SecretBlock_Glass: 204,
}

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/
var EntityAll;

function newLevel() {
	AddBlocks();
	AddItems();
	AddRecipes();
	SetCategory();
	SetShape();
}

function modTick() {
	EntityAll = Entity.getAll();
	
	for(var i = 0; i < EntityAll.length; i++) {
		switch(getTile(Entity.getX(EntityAll[i]), Entity.getY(EntityAll[i]) - 2, Entity.getZ(EntityAll[i])) || getTile(Entity.getX(EntityAll[i]), Entity.getY(EntityAll[i]) - 1, Entity.getZ(EntityAll[i])) || getTile(Entity.getX(EntityAll[i]), Entity.getY(EntityAll[i]), Entity.getZ(EntityAll[i]))) {
			case TrapBlocks.SuperSpeedBlock:
				Jump(EntityAll[i], 5, 0);
				break;
				
			case TrapBlocks.JumpBlock:
				Jump(EntityAll[i], 0, 5);
				break;
				
			case TrapBlocks.TurnBlock:
				break;
		}
	}
}

/*/
 *------------------------------
 *These are defined functions.
 *------------------------------
/*/
function AddBlocks() {
	DefineBlock(TrapBlocks.SuperSpeedBlock, "高速移動ブロック",
		["JumpBlock",
		 "JumpBlock",
		 "JumpBlock",
		 "JumpBlock",
		 "JumpBlock",
		 "JumpBlock"], [0, 0, 1, 1, 1, 1],

		0, false, 0, 1, Infinity, 15, 0
	);

	DefineBlock(TrapBlocks.JumpBlock, "ジャンプブロック",
		["JumpBlock",
		 "JumpBlock",
		 "JumpBlock",
		 "JumpBlock",
		 "JumpBlock",
		 "JumpBlock"], [0, 0, 1, 1, 1, 1],

		 0, false, 0, 1, Infinity, 15, 0
	);
	
	DefineBlock(TrapBlocks.TurnBlock, "方向転換ブロック",
		["JumpBlock",
		 "JumpBlock",
		 "JumpBlock",
		 "JumpBlock",
		 "JumpBlock",
		 "JumpBlock"], [0, 0, 1, 1, 1, 1],

		 0, false, 0, 1, Infinity, 15, 0
	);

	DefineBlock(TrapBlocks.SecretBlock_Glass, "隠しブロック(草ブロック)",
		["dirt",
		 "grass",
		 "grass",
		 "grass",
		 "grass",
		 "grass"], [0, 2, 3, 3, 3, 3],

		2, false, 0, 1, Infinity, 0, 10
	);
}

function AddItems() {
	
}

function AddRecipes() {
	Item.addShapedRecipe(TrapBlocks.SuperSpeedBlock, 3, 0,
		["ISI",
		 "ISI",
		 "III"], ["I", Materials.IronIngot, 0, "S", Materials.Suger, 0]
	);

	Item.addShapedRecipe(TrapBlocks.JumpBlock, 3, 0,
		["ISI",
		 "ISI",
		 "III"], ["I", Materials.IronIngot, 0, "S", Materials.SlimeBall, 0]
	);
}

function SetCategory() {
	Item.setCategory(TrapBlocks.SuperSpeedBlock, ItemCategory.DECORATION);
	Player.addItemCreativeInv(TrapBlocks.SuperSpeedBlock, 1, 0);

	Item.setCategory(TrapBlocks.JumpBlock, ItemCategory.DECORATION);
	Player.addItemCreativeInv(TrapBlocks.JumpBlock, 1, 0);
	
	Item.setCategory(TrapBlocks.SecretBlock_Glass, ItemCategory.DECORATION);
	Player.addItemCreativeInv(TrapBlocks.SecretBlock_Glass, 1, 0);
}

function SetShape() {
	Block.setShape(TrapBlocks.SuperSpeedBlock, 0, 0, 0, 1, 1 / 16, 1);
	Block.setShape(TrapBlocks.JumpBlock, 0, 0, 0, 1, 1 / 16, 1);
}

function Throw(Ent, XSpeed, YSpeed) {
	var playerYaw = Entity.getYaw(Player.getEntity());
	var playerPitch = Entity.getPitch(Player.getEntity());

	vpc = Math.sin(playerYaw / 180 * Math.PI)
	vps = Math.cos((playerPitch - 180) / 180 * Math.PI)
	vpt = Math.cos(playerYaw / 180 * Math.PI)

	velY = Math.sin((playerPitch - 180) / 180 * Math.PI);
	velX = (vpc * vps);
	velZ = -1 * (vpt * vps);

	setVelX(Ent, velX * XSpeed);
	setVelY(Ent, velY * YSpeed);
	setVelZ(Ent, velZ * XSpeed);
}

function Jump(Ent, XSpeed, YSpeed) {
	var EntityYaw = Entity.getYaw(Ent);
	var EntityPitch = Entity.getPitch(Ent);

	vpc = Math.sin(EntityYaw / 180 * Math.PI)
	vps = Math.cos((EntityPitch - 180) / 180 * Math.PI)
	vpt = Math.cos(EntityYaw / 180 * Math.PI)

	velY = Math.sin((EntityPitch - 180) / 180 * Math.PI);
	velX = (vpc * vps);
	velZ = -1 * (vpt * vps);

	setVelX(Ent, velX * XSpeed);
	setVelY(Ent, velY * YSpeed);
	setVelZ(Ent, velZ * XSpeed);
}

function DefineBlock(ID, Name, TextureName, TextureDamage, ToolToBreak, IsOpaque, RenderType, DestroyTime, ExplosionResistance, LightLevel, PassLightLevel) {
	Block.defineBlock(ID, Name,
		[
			[TextureName[0], TextureDamage[0]],
			[TextureName[1], TextureDamage[1]],
			[TextureName[2], TextureDamage[2]],
			[TextureName[3], TextureDamage[3]],
			[TextureName[4], TextureDamage[4]],
			[TextureName[5], TextureDamage[5]]
		], ToolToBreak, IsOpaque, RenderType
	);
	Block.setDestroyTime(ID, DestroyTime);
	Block.setExplosionResistance(ID, ExplosionResistance);
	Block.setLightLevel(ID, LightLevel);
	Block.setLightOpacity(ID, PassLightLevel);
}
