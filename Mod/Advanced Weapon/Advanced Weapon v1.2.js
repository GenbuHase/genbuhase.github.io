/*/
 *################################################################################
 *Advanced Weapon v1.2
 *Copyright (C) 2017-2020 Genbu Hase & シグマらなーい猫うさぎ All Rights Reserved.
 *################################################################################
/*/
function newLevel () {};
function leaveGame () {};
function attackHook (Attacker, Victim) {};

const AdvancedWeapon = (function () {
	const File = java.io.File;
	const InputStreamReader = java.io.InputStreamReader;
	const BufferedReader = java.io.BufferedReader;
	const FileOutputStream = java.io.FileOutputStream;

	const Environment = android.os.Environment;
	const SoundPool = android.media.SoundPool;
	const AudioManager = android.media.AudioManager;
	const AudioAttributes = android.media.AudioAttributes;
	
	const PATH = {
		Low: {
			Sword: "assets/datas/weapons/Sword.js",
			Axe: "assets/datas/weapons/Axe.js"
		},

		High: {

		},

		Sound: {
			Slash: "assets/sounds/Slash.wav"
		},

		Lang: "assets/datas/weapons/Languages.json"
	};
	
	

	let speakers = {};
	
	function AdvancedWeapon () {
		this.loadWeapon();
	}; AdvancedWeapon.prototype = Object.create(null, {
		constructor: { value: AdvancedWeapon },

		weapons: { value: { low: [], high: [] }, configurable: true, writable: true, enumerable: true },
		materials: { value: [], configurable: true, writable: true, enumerable: true },

		loadWeapon: {
			value () {
				for (let Type in PATH.Low) {
					let reader = new AdvancedWeapon.Loader.JsLoaderFromTexturePack(PATH.Low[Type]);
					let weaponData = reader.toObject();

					for (let i = 0; i < weaponData.length; i++) {
						this["add" + Type](new AdvancedWeapon.Weapon[Type](weaponData[i]));
					}
				}
			},
		},
		
		loadLang: {
			value () {
				let reader = new AdvancedWeapon.Loader.JsonLoaderFromTexturePack(PATH.Lang);
				let langData = reader.toObject();

				
				for (let Key in langData[ModPE.getLanguage()]) {
					ModPE.langEdit(Key, langData[ModPE.getLanguage()][Key]);
				}
			},
		},

		loadSpeaker: {
			value () {
				speakers.slash = new AdvancedWeapon.Loader.SELoader(PATH.Sound.Slash);
			},
		},

		releaseSpeaker: {
			value () {
				for (let speakerName in speakers) {
					speakers[speakerName].release();
				}
			}
		},
		

		
		addSword: {
			value (sword) {
				if (sword instanceof AdvancedWeapon.Weapon.Sword) {
					ModPE.setItem(sword.id, sword.texture[0], sword.texture[1], sword.name, 1);
					Item.setHandEquipped(sword.id, true);
					Item.setMaxDamage(sword.id, sword.durability);
					
					if (sword.recipe instanceof AdvancedWeapon.Recipe) Item.addCraftRecipe(sword.id, sword.recipe.amount, 0, sword.recipe.materials);
					if (sword.recipe instanceof AdvancedWeapon.ShapedRecipe) Item.addShapedRecipe(sword.id, sword.recipe.amount, 0, sword.recipe.shape, sword.recipe.materials);
					
					Item.setCategory(sword.id, sword.creativeTab);
					Player.addItemCreativeInv(sword.id, 1, 0);
					
					this.weapons.low.push(sword);
				} else {
					throw new TypeError("The parameter 1 isn't " + sword.constructor.name + ", it's " + AdvancedWeapon.Weapon.Sword.name + ".");
				}
			}
		},
		
		addAxe: {
			value (axe) {
				if (axe instanceof AdvancedWeapon.Weapon.Axe) {
					ModPE.setItem(axe.id, axe.texture[0], axe.texture[1], axe.name, 1);
					Item.setHandEquipped(axe.id, true);
					Item.setMaxDamage(axe.id, axe.durability);
					
					if (axe.recipe instanceof AdvancedWeapon.Recipe) Item.addCraftRecipe(axe.id, axe.recipe.amount, 0, axe.recipe.materials);
					if (axe.recipe instanceof AdvancedWeapon.ShapedRecipe) Item.addShapedRecipe(axe.id, axe.recipe.amount, 0, axe.recipe.shape, axe.recipe.materials);
					
					Item.setCategory(axe.id, axe.creativeTab);
					Player.addItemCreativeInv(axe.id, 1, 0);
					
					this.weapons.low.push(axe);
				} else {
					throw new TypeError("The parameter 1 isn't " + axe.constructor.name + ", it's " + AdvancedWeapon.Weapon.Axe.name + ".");
				}
			}
		},
		
		

		attackInit: {
			value (Attacker, Victim) {
				for (let i = 0; i < this.weapons.low.length; i++) {
					if (Player.getCarriedItem() == this.weapons.low[i].id) {
						switch (this.weapons.low[i].type) {
							case "Sword":
								speakers.slash.play();
								break;
						}

						this.weapons.low[i].onAttack.bind(this.weapons.low[i])(Attacker, Victim);
					}
				}
			}
		},



		getSpeakers: { value () { return speakers } }
	});
	
	
	
	AdvancedWeapon.Weapon = (function () {
		function Weapon (param) {
			!param ? param = {} : null;
			param.id ? this.id = param.id : null,
			param.name ? this.name = param.name : null,
			param.texture ? this.texture = param.texture : null,
			param.heart ? this.heart = param.heart : null,
			param.recipe ? this.recipe = param.recipe : this.recipe = new AdvancedWeapon.ShapedRecipe(1, ["   ", "   ", "   "], []),
			param.creativeTab ? this.creativeTab = param.creativeTab : null;
		}; Weapon.prototype = Object.create(null, {
			constructor: { value: Weapon },

			type: { value: "Unknown", configurable: true, writable: true, enumerable: true },

			id: { value: 501, configurable: true, writable: true, enumerable: true },
			name: { value: "Untitled", configurable: true, writable: true, enumerable: true },
			texture: { value: ["stick", 0], configurable: true, writable: true, enumerable: true },
			heart: { value: 4, configurable: true, writable: true, enumerable: true },
			recipe: { value: null, configurable: true, writable: true, enumerable: true },
			creativeTab: { value: ItemCategory.TOOL, configurable: true, writable: true, enumerable: true },

			attack: {
				value (Attacker, Victim) {
					Entity.setHealth(Victim, Entity.getHealth(Victim) + 1 - this.heart);
				}
			}
		});
		
		
		
		Weapon.LowRange = (function () {
			function LowRange (param) {
				AdvancedWeapon.Weapon.call(this, param);

				!param ? param = {} : null;
				param.durability ? this.durability = param.durability : null,
				param.onAttack ? this.onAttack = param.onAttack : null;
			}; LowRange.prototype = Object.create(Weapon.prototype, {
				constructor: { value: LowRange },

				durability: { value: 0, configurable: true, writable: true, enumerable: true },
				onAttack: { value: function (Attacker, Victim) {}, configurable: true, writable: true, enumerable: true }
			});

			return LowRange;
		})();

		Weapon.HighRange = (function () {
			function HighRange (param) {
				AdvancedWeapon.Weapon.call(this, param);

				!param ? param = {} : null;
				param.velocity ? this.velocity = param.velocity : null,
				param.onShot ? this.onShot = param.onShot : null,
				param.onHit ? this.onHit = param.onHit : null;
			}; HighRange.prototype = Object.create(Weapon.prototype, {
				constructor: { value: HighRange },

				velocity: { value: 1, configurable: true, writable: true, enumerable: true },
				onShot: { value: function () {}, configurable: true, writable: true, enumerable: true },
				onHit: { value: function (Victim) {}, configurable: true, writable: true, enumerable: true },

				fire: {
					value () {
						let r, x, y, z;

						r = Math.cos(-Entity.getPitch(Player.getEntity()) / 57.3) * 2;
						x = Math.sin(-Entity.getYaw(Player.getEntity()) / 57.3) * r + Entity.getX(Player.getEntity());
						y = Math.sin(-Entity.getPitch(Player.getEntity()) / 57.3) * 2 + Entity.getY(Player.getEntity());
						z = Math.cos(-Entity.getYaw(Player.getEntity()) / 57.3) * r + Entity.getZ(Player.getEntity());
						
						let thrownObj = Level.spawnMob(x, y, z, 81);
						
						r = Math.cos(-1 * Entity.getPitch(Player.getEntity()) / 57.3) * (this.velocity + 2);
						x = Math.sin(-1 * Entity.getYaw(Player.getEntity()) / 57.3) * r + Entity.getX(Player.getEntity());
						y = Math.sin(-1 * Entity.getPitch(Player.getEntity()) / 57.3) * (this.velocity + 2) + Entity.getY(Player.getEntity());
						z = Math.cos(-1 * Entity.getYaw(Player.getEntity()) / 57.3) * r + Entity.getZ(Player.getEntity());
						
						Entity.setVelX(thrownObj, x - Entity.getX(Bullet));
						Entity.setVelY(thrownObj, y - Entity.getY(Bullet));
						Entity.setVelZ(thrownObj, z - Entity.getZ(Bullet));
					}
				}
			});

			return HighRange;
		})();



		Weapon.Sword = (function () {
			function Sword (param) {
				Weapon.LowRange.call(this, param);

				this.type = "Sword";
			}; Sword.prototype = Object.create(Weapon.LowRange.prototype, {
				constructor: { value: Sword }
			});
			
			return Sword;
		})();

		Weapon.Axe = (function () {
			function Axe (param) {
				Weapon.LowRange.call(this, param);

				this.type = "Axe";
			}; Axe.prototype = Object.create(Weapon.LowRange.prototype, {
				constructor: { value: Axe }
			});
			
			return Axe;
		})();
		
		
		
		Weapon.Thrown = (function () {
			function Thrown (param) {
				Weapon.LowRange.call(this, param);
				
				this.type = "Thrown";
			}; Thrown.prototype = Object.create(Weapon.LowRange.prototype, {
				constructor: { value: Thrown }
			});
			
			return Thrown;
		})();
		
		
		
		return Weapon;
	})();
	
	
	
	AdvancedWeapon.Recipe = (function () {
		function Recipe (amount, materials) {
			this.amount = amount,
			this.materials = materials;
		}; Recipe.prototype = Object.create(null, {
			constructor: { value: Recipe },

			amount: { value: 1, configurable: true, writable: true, enumerable: true },
			materials: { value: [], configurable: true, writable: true, enumerable: true }
		});
		
		return Recipe;
	})();
	
	AdvancedWeapon.ShapedRecipe = (function () {
		function ShapedRecipe (amount, recipe, materials) {
			this.amount = amount,
			this.shape = recipe,
			this.materials = materials;
		}; ShapedRecipe.prototype = Object.create(null, {
			constructor: { value: ShapedRecipe },

			amount: { value: 1, configurable: true, writable: true, enumerable: true },
			shape: { value: ["   ", "   ", "   "], configurable: true, writable: true, enumerable: true },
			materials: { value: [], configurable: true, writable: true, enumerable: true }
		});
		
		return ShapedRecipe;
	})();



	AdvancedWeapon.Loader = (function () {
		const Loader = {};

		Loader.AssetLoader = (function () {
			function AssetLoader () {
				
			}; AssetLoader.prototype = Object.create(null, {
				constructor: { value: AssetLoader },

				copiedAsset: { value: null, configurable: true, writable: true, enumerable: true },

				load: {
					value (assetPath, copiedPath) {
						try {
							this.copiedAsset = new File(Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/AdvancedWeapon", copiedPath);
							this.copiedAsset.getParentFile().mkdirs();
							this.copiedAsset.createNewFile();

							let writer = new FileOutputStream(this.copiedAsset);
								writer.write(ModPE.getBytesFromTexturePack(assetPath));
								writer.close();
						} catch (Err) {
							throw Err;
						}
					}
				},

				release: {
					value () {
						try {
							if (this.copiedAsset.exists()) this.copiedAsset.delete();

							this.copiedAsset = null;
						} catch (Err) {
							throw Err;
						}
					}
				}
			});
			
			return AssetLoader;
		})();

		Loader.SELoader = (function () {
			function SELoader (path) {
				this.load(path, "sounds/SE/" + path.split("/")[path.split("/").length - 1]);
				this.soundId = this.player.load(this.copiedAsset.getAbsolutePath(), 1);
			}; SELoader.prototype = Object.create(Loader.AssetLoader.prototype, {
				constructor: { value: SELoader },

				player: { value: new SoundPool(5, AudioManager.STREAM_NOTIFICATION, 44100) },
				soundId: { value: 0, configurable: true, writable: true, enumerable: true },

				play: {
					value () {
						this.player.play(this.soundId, 1, 1, 1, 0, 1.0);
					}
				}
			});

			return SELoader;
		})();

		

		Loader.JsonLoaderFromTexturePack = (function () {
			function JsonLoaderFromTexturePack (path) {
				try {
					return Object.create(new BufferedReader(new InputStreamReader(ModPE.openInputStreamFromTexturePack(path))), {
						toObject: {
							value () {
								let mem = "",
									res = "";

								while ((mem = this.readLine()) != null) {
									res += mem + "\n";
								}
								
								return(JSON.parse(res));
							}
						}
					});
				} catch (Err) {
					clientMessage(Err);
				}
			};

			return JsonLoaderFromTexturePack;
		})();

		Loader.JsLoaderFromTexturePack = (function () {
			function JsLoaderFromTexturePack (path) {
				try {
					return Object.create(new BufferedReader(new InputStreamReader(ModPE.openInputStreamFromTexturePack(path))), {
						toObject: {
							value () {
								let mem = "",
									res = "";

								while ((mem = this.readLine()) != null) {
									res += mem + "\n";
								}
								
								return(eval(res));
							}
						}
					});
				} catch (Err) {
					clientMessage(Err);
				}
			};

			return JsLoaderFromTexturePack;
		})();



		return Loader;
	})();
	
	
	
	return AdvancedWeapon;
})();



const Base = new AdvancedWeapon();

function newLevel () {
	Base.loadLang();
	Base.loadSpeaker();
}

function leaveGame () {
	Base.releaseSpeaker();
}

function attackHook (Attacker, Victim) {
	Base.attackInit(Attacker, Victim);
}



function chatHook (Str) {
	if (Str.substr(0, 1) == "@") {
		eval(Str.slice(1));
	} else if (Str.substr(0, 1) == "#") {
		eval("clientMessage(" + Str.slice(1) + ")");
	} else if (Str.substr(0, 1) == "$") {
		Str = Str.slice(1);

		switch (Str) {
			default:
				break;
		}
	}
}