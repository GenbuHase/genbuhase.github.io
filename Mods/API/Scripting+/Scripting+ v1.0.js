/*/
 *#######################################################
 *Scripting+ v1.0
 *Copyright (C) 2017-2020 Genbu Hase All Rights Reserved.
 *#######################################################
/*/
const Scripting = (function () {
	const File = java.io.File;
	const InputStreamReader = java.io.InputStreamReader;
	const FileWriter = java.io.FileWriter;
	const PrintWriter = java.io.PrintWriter;
	const FileOutputStream = java.io.FileOutputStream;
	const BufferedReader = java.io.BufferedReader;
	const BufferedWriter = java.io.BufferedWriter;



	(function () {
		Object.prototype.getClassName = function () {
			return Object.prototype.toString.call(this).slice(8, -1);
		}, Object.defineProperty(Object.prototype, "getClassName", {
			enumerable: false
		});
	})();



	const Scripting = {}; Object.defineProperties(Scripting, {
		Loader: {
			value: (function () {
				const Loader = {}; Object.defineProperties(Loader, {
					AssetLoader: {
						value: (function () {
							function AssetLoader (assetPath, copyTo) {
								this.load(assetPath, copyTo);
							}; AssetLoader.prototype = Object.create(null, {
								constructor: { value: AssetLoader },

								asset: { value: null, configurable: true, writable: true, enumerable: true },

								load: {
									value (assetPath, copyTo) {
										try {
											this.asset = new File(copyTo);
											this.asset.getParentFile().mkdirs();
											this.asset.createNewFile();

											let writer = new FileOutputStream(this.asset);
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
											if (this.asset.exists()) this.asset.delete();

											this.asset = null;
										} catch (Err) {
											throw Err;
										}
									}
								}
							});
							
							return AssetLoader;
						})(),

						enumerable: true
					},

					SoundLoader: {
						value: (function () {
							function SoundLoader (assetPath, copyTo) {
								Loader.AssetLoader.call(this, arguments);

								try {
									this.soundId = this.player.load(this.asset.getAbsolutePath(), 1);
								} catch (Err) {
									throw Err;
								}
							}; SoundLoader.prototype = Object.create(Loader.AssetLoader.prototype, {
								player: { value: new SoundPool(5, AudioManager.STREAM_NOTIFICATION, 44100) },
								soundId: { value: 0, configurable: true, writable: true, enumerable: true },

								play: {
									value () {
										try {
											this.player.play(this.soundId, 1, 1, 1, 0, 1.0);
										} catch (Err) {
											throw Err;
										}
									}
								}
							});

							return SoundLoader;
						})(),

						enumerable: true
					},


				
					FileLoaderFromTexturePack: {
						value: (function () {
							function FileLoaderFromTexturePack () {
								
							}; FileLoaderFromTexturePack.prototype = Object.create(null, {
								constructor: { value: FileLoaderFromTexturePack },

								load: {
									value (path, encodeType) {
										try {
											return new java.lang.String(ModPE.getBytesFromTexturePack(path), encodeType ? encodeType : "UTF-8");
										} catch (Err) {
											throw Err;
										}
									}
								}
							});

							return FileLoaderFromTexturePack;
						})(),

						enumerable: true
					}
				});

				return Loader;
			})(),

			enumerable: true
		},

		Schematic: {
			value: (function () {
				function Schematic (width, height, depth, data) {
					!width ? this.width = width : null,
					!height ? this.height = height : null,
					!depth ? this.depth = depth : null,
					!data ? this.data = data : null;
				}; Schematic.prototype = Object.create(null, {
					constructor: { value: Schematic },

					width: { value: 0, configurable: true, writable: true, enumerable: true },
					height: { value: 0, configurable: true, writable: true, enumerable: true },
					depth: { value: 0, configurable: true, writable: true, enumerable: true },
					data: { value: [], configurable: true, writable: true, enumerable: true },

					putTo: {
						value (startX, startY, startZ) {
							for (let y = this.height; y >= 0; y--) {
								for (let z = this.depth; z >= 0; z--) {
									for (let x = 0; x <= this.width; x++) {
										Level.setTile(startX + x, startY + y, startZ + z, this.data[this.height - y][this.depth - z][x][0], this.data[this.height - y][this.depth - z][x][1]);
									}
								}
							}
						}
					}
				}); Object.defineProperties(Schematic, {
					getSchematic: {
						value (startX, startY, startZ, endX, endY, endZ) {
							let data = [],
								minX = Math.min(startX, endX),
								minY = Math.min(startY, endY),
								minZ = Math.min(startZ, endZ),
								distanceX = Math.abs(startX - endX),
								distanceY = Math.abs(startY - endY),
								distanceZ = Math.abs(startZ - endZ);

							for (let y = distanceY; y >= 0; y--) {
								data.push([]);

								for (let z = distanceZ; z >= 0; z--) {
									data[data.length - 1].push([]);

									for (let x = 0; x <= distanceX; x++) {
										data[distanceY - y][distanceZ - z][x] = [
											Level.getTile(minX + x, minY + y, minZ + z),
											Level.getData(minX + x, minY + y, minZ + z)
										];
									}
								}
							}

							return new Schematic(distanceX, distanceY, distanceZ, data);
						},

						enumerable: true
					}
				});



				return Schematic;
			})(),

			enumerable: true
		},

		Mob: {
			value: (function () {
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

					renderer: {
						value: Object.create(Renderer.createHumanoidRenderer(), {
							__rendererName: { value: "author.modname.renderername", configurable: true, writable: true },

							rendererName: {
								set: function (val) {
									this.setName(val);
									this.__rendererName = val;
								},

								get: function () {
									return this.__rendererName;
								}
							},
						}),
						
						configurable: true, writable: true, enumerable: true
					},

					model: { value: null, configurable: true, writable: true, enumerable: true },
					head: { value: null, configurable: true, writable: true, enumerable: true },
					body: { value: null, configurable: true, writable: true, enumerable: true },
					leftArm: { value: null, configurable: true, writable: true, enumerable: true },
					rightArm: { value: null, configurable: true, writable: true, enumerable: true },
					leftLeg: { value: null, configurable: true, writable: true, enumerable: true },
					rightLeg: { value: null, configurable: true, writable: true, enumerable: true }
				});

				return Mob;
			}),

			enumerable: true
		},

		Logger: {
			value: (function () {
				function Logger (logfilePath) {
					try {
						this.logfile = new File(logfilePath);
						this.logfile.getParent() ? this.logfile.getParent().mkdirs() : null;
						this.logfile.createNewFile();

						this.writer = new PrintWriter(new BufferedWriter(new FileWriter(this.logfile, true)));
					} catch (Err) {
						throw Err;
					}
				}; Logger.prototype = Object.create(null, {
					constructor: { value: Logger },

					logfile: { value: null, configurable: true, writable: true, enumerable: true },
					writer: { value: null, configurable: true, writable: true },

					log: {
						value (obj) {
							try {
								switch (obj.getClassName()) {
									default:
										this.writer.println(obj);
										break;

									case "Object":
										this.writer.println(obj.toSource());
										
										(function Looper (root, count) {
											for (let Key in root) {
												this.writer.println([">".repeat(count), Key, "=", root[Key]].join(" "));
												
												if (root[Key].getClassName() == "Object") Looper.call(this, root[Key], ++count);
											}
										}).bind(this)(obj, 1);
										
										break;

									case "Array":
										this.writer.println(obj.toSource());

										(function Looper (root, count) {
											for (let i = 0; i < root.length; i++) {
												this.writer.println([">".repeat(count), root[i]].join(" "));

												if (root[Key].getClassName() == "Array") Looper.call(this, root[Key], ++count);
											}
										}).bind(this)(obj, 1);

										break;
								}
								
								this.writer.flush();
							} catch (Err) {
								throw Err;
							}
						}
					},
					
					clear: {
						value () {
							try {
								new FileWriter(this.logfile).close();
							} catch (Err) {
								throw Err;
							}
						}
					}
				});

				return Logger;
			})(),

			enumerable: true
		}
	});

	
	
	return Scripting;
})();