[
	{
		id: 501,
		name: "BloodSword",
		texture: ["BloodSword", 0],

		heart: 6,
		durability: 500,

		recipe: new AdvancedWeapon.ShapedRecipe(1, [
			" R ",
			" R ",
			" S "
		], [
			'R', Item.internalNameToId("redstone"), 0,
			'S', Item.internalNameToId("stick"), 0
		]),
		
		onAttack (Attacker, Victim) {
			this.attack(Attacker, Victim);
			Entity.setHealth(Attacker, Entity.getHealth(Attacker) + this.heart / 2);
		}
	},
	
	{
		id: 502,
		name: "IronSlasher",
		texture: ["IronSlasher", 0],

		heart: 8,
		durability: 750,

		recipe: new AdvancedWeapon.ShapedRecipe(1, [
			" II",
			" SI",
			" S "
		], [
			'I', Item.internalNameToId("iron_ingot"), 0,
			'S', Item.internalNameToId("stick"), 0
		]),
		
		onAttack (Attacker, Victim) {
			this.attack(Attacker, Victim);
			
			let rnd = Math.floor(Math.random() * 100);
			
			if (0 <= rnd && rnd <= 30) {
				this.attack(Attacker, Victim);
			}
		}
	},

	{
		id: 503,
		name: "Hrunting",
		texture: ["Hrunting", 0],

		heart: 6,
		durability: 450,

		recipe: new AdvancedWeapon.ShapedRecipe(1, [
			" E ",
			" E ",
			" S "
		], [
			'E', Item.internalNameToId("spider_eye"), 0,
			'S', Item.internalNameToId("stick"), 0
		]),
		
		onAttack (Attacker, Victim) {
			this.attack(Attacker, Victim);
			
			let rnd = Math.floor(Math.random() * 100);
			
			if (0 <= rnd && rnd <= 25) {
				Entity.addEffect(Victim, MobEffect.poison, 20 * 5, 1);
			}
		}
	},

	{
		id: 504,
		name: "Laevateinn",
		texture: ["Laevateinn", 0],

		heart: 7,
		durability: 500,

		recipe: new AdvancedWeapon.ShapedRecipe(1, [
			" L ",
			" L ",
			" S "
		], [
			'L', Item.internalNameToId("bucket"), 10,
			'S', Item.internalNameToId("stick"), 0
		]),
		
		onAttack (Attacker, Victim) {
			this.attack(Attacker, Victim);
			Entity.setFireTicks(Victim, 20 * 2.5);
		}
	},

	/*{
		id: 505,
		name: "BananaSword",
		texture: ["BananaSword", 0],

		heart: 3,
		durability: 25,

		recipe: new AdvancedWeapon.ShapedRecipe(1, [
			" L ",
			" L ",
			" S "
		], [
			'L', Item.internalNameToId("bucket"), 10,
			'S', Item.internalNameToId("stick"), 0
		]),
		
		onAttack (Attacker, Victim) {
			this.attack(Attacker, Victim);
		}
	}*/
]