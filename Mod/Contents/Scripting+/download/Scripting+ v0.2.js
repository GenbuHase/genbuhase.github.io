/*/
 *#######################################################
 *Scripting+ v0.2
 *Copyright (C) 2017 Genbu Hase All Rights Reserved.
 *#######################################################
/*/
const Scripting = (() => {
	const Scripting = {};	Object.defineProperties(Scripting, {
		Loader: {
			get () {
				return {
					AssetLoader: (() => {
						function AssetLoader (assetPath, copyTo) {
							this.load(assetPath, copyTo);
						};	AssetLoader.prototype = Object.create(null, {
							constructor: { value: AssetLoader },

							asset: { value: null, configurable: true, writable: true },

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
							soundId: { value: 0, configurable: true, writable: true },

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
		}
	});

	return Scripting;
})();