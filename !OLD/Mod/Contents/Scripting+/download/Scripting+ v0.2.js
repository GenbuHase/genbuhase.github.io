/*/
 *#######################################################
 *Scripting+ v0.2
 *Copyright (C) 2017 Genbu Hase All Rights Reserved.
 *#######################################################
/*/
const Scripting = (() => {
	const File = java.io.File;
	const InputStreamReader = java.io.InputStreamReader;
	const FileWriter = java.io.FileWriter;
	const PrintWriter = java.io.PrintWriter;
	const FileOutputStream = java.io.FileOutputStream;
	const BufferedReader = java.io.BufferedReader;
	const BufferedWriter = java.io.BufferedWriter;


	
	const Scripting = {};	Object.defineProperties(Scripting, {
		Loader: {
			get () {
				return {
					AssetLoader: (() => {
						function AssetLoader (assetPath, copyTo) {
							this.load(assetPath, copyTo);
						};	AssetLoader.prototype = Object.create(null, {
							constructor: { value: AssetLoader },

							load: {
								value (assetPath, copyTo) {
									assetPath = assetPath || "",
									copyTo = copyTo || "";

									try {
										this.asset = new File(copyTo);
										this.asset.getParentFile().mkdirs();
										this.asset.createNewFile();

										let writer = new FileOutputStream(this.asset);
											writer.write(ModPE.getBytesFromTexturePack(assetPath));
											writer.close();
									} catch (err) {
										throw err;
									}
								}
							},

							release: {
								value () {
									try {
										if (this.asset.exists()) this.asset.delete();

										this.asset = null;
									} catch (err) {
										throw err;
									}
								}
							}
						});

						return AssetLoader;
					})(),

					SoundLoader: (() => {
						function SoundLoader (assetPath, copyTo) {
							Scripting.Loader.AssetLoader.apply(this, arguments);

							try {
								this.soundId = this.player.load(this.asset.getAbsolutePath(), 1);
							} catch (err) {
								throw err;
							}
						}; SoundLoader.prototype = Object.create(Scripting.Loader.AssetLoader.prototype, {
							player: { value: new SoundPool(5, AudioManager.STREAM_NOTIFICATION, 44100) },

							play: {
								value () {
									try {
										this.player.play(this.soundId, 1, 1, 1, 0, 1.0);
									} catch (err) {
										throw err;
									}
								}
							}
						});

						return SoundLoader;
					})(),

					FileLoaderFromTexturePack: (() => {
						function FileLoaderFromTexturePack () {
							
						};	FileLoaderFromTexturePack.prototype = Object.create(null, {
							constructor: { value: FileLoaderFromTexturePack },

							load: {
								value (path, encodeType) {
									path = path || "",
									encodeType = encodeType || "UTF-8";

									try {
										return new java.lang.String(ModPE.getBytesFromTexturePack(path), encodeType);
									} catch (err) {
										throw err;
									}
								}
							}
						});

						return FileLoaderFromTexturePack;
					})()
				}
			}
		},

		Schematic: {
			get () {
				return (() => {
					function Schematic (width, height, depth, data) {
						this.width = width || 0,
						this.height = height || 0,
						this.depth = depth || 0,
						this.data = data || [];
					};	Schematic.prototype = Object.create(null, {
						constructor: { value: Schematic },

						put: {
							value (x, y, z) {
								for (let dy = this.height; dy >= 0; dy--) {
									for (let dz = this.depth; dz >= 0; dz--) {
										for (let dx = 0; dx <= this.width; dx++) {
											Level.setTile(x + dx, y + dy, z + dz, this.data[this.height - dy][this.depth - dz][dx][0], this.data[this.height - dy][this.depth - dz][dx][1]);
										}
									}
								}
							}
						}
					});	Object.defineProperties(Schematic, {
						getSchematic: {
							value (x1, y1, z1, x2, y2, z2) {
								x1 = x1 || 0,
								y1 = y1 || 0,
								z1 = z1 || 0,
								x2 = x2 || 0,
								y2 = y2 || 0,
								z2 = z2 || 0;

								let data = [],
									mx = Math.min(x1, x2),
									dx = Math.abs(x1 - x2),
									my = Math.min(y1, y2),
									dy = Math.abs(y1 - y2),
									mz = Math.min(z1, z2),
									dz = Math.abs(z1 - z2);

								for (let y = dy; y >= 0; y--) {
									data.push([]);
	
									for (let z = dz; z >= 0; z--) {
										data[data.length - 1].push([]);
	
										for (let x = 0; x <= dx; x++) {
											data[dy - y][dz - z][x] = [
												Level.getTile(mx + x, my + y, mz + z),
												Level.getData(mx + x, my + y, mz + z)
											];
										}
									}
								}
	
								return new Schematic(dx, dy, dz, data);
							}
						}
					});

					return Schematic;
				})();
			}
		},

		Mob: {
			get () {
				return (() => {
					function Mob () {
						this.model = this.renderer.getModel();
	
						this.head = this.model.getPart("head").clear(),
						this.body = this.model.getPart("body").clear(),
						this.leftArm = this.model.getPart("rightArm").clear(),
						this.rightArm = this.model.getPart("leftArm").clear(),
						this.leftLeg = this.model.getPart("rightLeg").clear(),
						this.rightLeg = this.model.getPart("leftLeg").clear();
					}; Mob.prototype = Object.create(null, {
						constructor: { value: Mob },
	
						ai: { value: function () {}, configurable: true, writable: true, enumerable: true },
	
						renderer: { value: Renderer.createHumanoidRenderer(), configurable: true, writable: true, enumerable: true },
						model: { value: null, configurable: true, writable: true, enumerable: true },
						head: { value: null, configurable: true, writable: true, enumerable: true },
						body: { value: null, configurable: true, writable: true, enumerable: true },
						leftArm: { value: null, configurable: true, writable: true, enumerable: true },
						rightArm: { value: null, configurable: true, writable: true, enumerable: true },
						leftLeg: { value: null, configurable: true, writable: true, enumerable: true },
						rightLeg: { value: null, configurable: true, writable: true, enumerable: true }
					});
	
					return Mob;
				})();
			}
		}
	});

	return Scripting;
})();