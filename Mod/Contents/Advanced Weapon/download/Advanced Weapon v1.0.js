/*/
 *################################################################################
 *Advanced Weapon v1.0
 *Copyright (C) 2017 Genbu Hase & シグマらなーい猫うさぎ All Rights Reserved.
 *################################################################################
/*/
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
	
	

	let slashPlayer = null;
	
	function AdvancedWeapon () {
		this.loadData();

		slashPlayer = new AdvancedWeapon.SELoader(PATH.Sound.Slash);
	}; AdvancedWeapon.prototype = Object.create(null, {
		constructor: { value: AdvancedWeapon },

		weapons: { value: { low: [], high: [] }, configurable: true, writable: true, enumerable: true },
		materials: { value: [], configurable: true, writable: true, enumerable: true },

		loadData: {
			value () {
				for (let Type in PATH.Low) {
					let reader = new AdvancedWeapon.JsonReaderFromTexturePack(PATH.Low[Type]);
					let weaponData = reader.toObject();

					for (let i = 0; i < weaponData.length; i++) {
						this["add" + Type](new AdvancedWeapon[Type](weaponData[i]));
					}
				}

				(function () {
					let reader = new AdvancedWeapon.JsonReaderFromTexturePack(PATH.Lang);
					let langData = reader.toObject();

					for (let Key in langData[ModPE.getLanguage()]) {
						ModPE.langEdit(Key, langData[ModPE.getLanguage()][Key]);
					}
				})();
			}
		},
		
		attackInit: {
			value (Attacker, Victim) {
				for (let i = 0; i < this.weapons.low.length; i++) {
					if (Attacker == Player.getEntity() && Player.getCarriedItem() == this.weapons.low[i].id) {
						slashPlayer.play();

						this.weapons.low[i].onAttack.bind(this.weapons.low[i])(Attacker, Victim);
					}
				}
			}
		},



		addSword: {
			value (sword) {
				if (sword instanceof AdvancedWeapon.Sword) {
					ModPE.setItem(sword.id, sword.texture[0], sword.texture[1], sword.name, 1);
					Item.setHandEquipped(sword.id, true);
					Item.setMaxDamage(sword.id, sword.durability);
					
					if (sword.recipe instanceof AdvancedWeapon.Recipe) Item.addCraftRecipe(sword.id, sword.recipe.amount, 0, sword.recipe.materials);
					if (sword.recipe instanceof AdvancedWeapon.ShapedRecipe) Item.addShapedRecipe(sword.id, sword.recipe.amount, 0, sword.recipe.shape, sword.recipe.materials);
					
					Item.setCategory(sword.id, sword.creativeTab);
					Player.addItemCreativeInv(sword.id, 1, 0);
					
					this.weapons.low.push(sword);
				} else {
					throw new TypeError("The parameter 1 isn't " + sword.constructor.name + ", it's " + AdvancedWeapon.Sword.name + ".");
				}
			}
		}
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
		
		
		
		return Weapon;
	})();
	
	AdvancedWeapon.Sword = (function () {
		function Sword (param) {
			AdvancedWeapon.Weapon.LowRange.call(this, param);

			this.type = "Sword";
		}; Sword.prototype = Object.create(AdvancedWeapon.Weapon.LowRange.prototype, {
			constructor: { value: Sword }
		});
		
		return Sword;
	})();

	AdvancedWeapon.Axe = (function () {
		function Axe (param) {
			AdvancedWeapon.Weapon.LowRange.call(this, param);

			this.type = "Axe";
		}; Axe.prototype = Object.create(AdvancedWeapon.Weapon.LowRange.prototype, {
			constructor: { value: Axe }
		});
		
		return Axe;
	})();

	AdvancedWeapon.Thrown = (function () {
		function Thrown (param) {
			AdvancedWeapon.Weapon.LowRange.call(this, param);

			this.type = "Thrown";
		}; Thrown.prototype = Object.create(AdvancedWeapon.Weapon.LowRange.prototype, {
			constructor: { value: Thrown }
		});
		
		return Thrown;
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



	AdvancedWeapon.JsonReaderFromTexturePack = (function () {
		function JsonReaderFromTexturePack (path) {
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

		return JsonReaderFromTexturePack;
	})();
	


	AdvancedWeapon.AssetLoader = (function () {
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

						let writer = new FileOutputStream(this.copiedFile);
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

	AdvancedWeapon.SELoader = (function () {
		function SELoader (path) {
			AdvancedWeapon.AssetLoader.call(this);

			this.load(path, "sounds/SE/" + path.split("/")[path.split("/").length - 1]);
			this.soundId = this.player.load(this.copiedAsset.getAbsolutePath(), 1);
		}; /*SELoader.prototype = Object.create(AdvancedWeapon.AssetLoader.prototype, {
			constructor: { value: SELoader },

			player: { value: new SoundPool.Builder().setMaxStreams(5).setAudioAttributes(new AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_GAME).setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION).build()).build() },
			soundId: { value: 0, configurable: true, writable: true, enumerable: true },

			play: {
				value () {
					this.player.play(this.soundId, 1, 1, 1, 0, 1.0);
				}
			}
		});*/ SELoader.prototype = Object.create(AdvancedWeapon.AssetLoader.prototype, {
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
	
	
	
	return AdvancedWeapon;
})();



const Base = new AdvancedWeapon();

function attackHook (Attacker, Victim) {
	Base.attackInit(Attacker, Victim);
}