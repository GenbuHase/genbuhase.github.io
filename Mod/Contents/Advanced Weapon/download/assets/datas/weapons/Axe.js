[
	{
		id: 521,
		name: "Crasher",
		texture: ["Crasher", 0],

		heart: 12,
		durability: 900,

		recipe: new AdvancedWeapon.ShapedRecipe(1, [
			"III",
			"III",
			" S "
		], [
			'I', Item.internalNameToId("iron_ingot"), 0,
			'S', Item.internalNameToId("stick"), 0
		]),
		
		onAttack (Attacker, Victim) {
			this.attack(Attacker, Victim);
		}
	},
	
	{
		id: 522,
		name: "Tomahawk",
		texture: ["Tomahawk", 0],

		heart: 5,
		durability: 150,

		recipe: new AdvancedWeapon.ShapedRecipe(1, [
			"   ",
			"III",
			" S "
		], [
			'I', Item.internalNameToId("iron_ingot"), 0,
			'S', Item.internalNameToId("stick"), 0
		]),
		
		onAttack (Attacker, Victim) {
			this.attack(Attacker, Victim);
		}
	}
]