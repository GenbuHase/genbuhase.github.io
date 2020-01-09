/*/
 *##################################################
 *#Reality Building Beta 1.00
 *#Copyright © 2015 Genbu Hase All Rights Reserved.
 *##################################################
/*/

/*/
 *------------------------------
 *             IDs
 *------------------------------
/*/
var Blocks = {
	HalfDirt: 201,
	HalfStone: 202
}

/*/
 *------------------------------
 *         System Args
 *------------------------------
/*/
var Category = {
	Block: 1,
	Decoration: 2,
	Tool: 3,
	Food: 4
}

/*/
 *------------------------------
 *        Hook Functions
 *------------------------------
/*/
function newLevel() {
	AddBlock();
	SetBlockOption();
	SetCategory();
}

/*/
 *------------------------------
 *      Defined Functions
 *------------------------------
/*/
function AddBlock() {
	DefineBlock(Blocks.HalfDirt, "土の厚板",
		["dirt",
		 "dirt",
		 "dirt",
		 "dirt",
		 "dirt",
		 "dirt"], [0, 0, 0, 0, 0, 0],
		 
		 0, false, 0, 1, Infinity, 0, 0
	);
}

function SetBlockOption() {
	Block.setShape(Blocks.HalfDirt, 0, 0, 0, 1, 8 / 16, 1);
}

function SetCategory() {
	Item.setCategory(Blocks.HalfDirt, Category.Block);
	Player.addItemCreativeInv(Blocks.HalfDirt, 1, 0);
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
