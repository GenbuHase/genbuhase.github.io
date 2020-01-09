/*/
 *#######################################################
 *Data Helper Release 2.0
 *Copyright (C) 2016 Genbu Hase All Rights Reserved.
 *#######################################################
/*/
const DataHelper = (function () {
	const File = java.io.File;
	const Environment = android.os.Environment;

	const Utils = net.zhuoweizhang.mcpelauncher.Utils;



	const DataHelper = {};

	DataHelper.PATH = Object.create(Object.prototype, {
		SD: { value: Environment.getExternalStorageDirectory(), enumerable: true },
		ALARMS: { value: Environment.DIRECTORY_ALARMS, enumerable: true },
		DCIM: { value: Environment.DIRECTORY_DCIM, enumerable: true },
		//DOCUMENTS: { value: Environment.DIRECTORY_DOCUMENTS, enumerable: true },
		DOWNLOADS: { value: Environment.DIRECTORY_DOWNLOADS, enumerable: true },
		MOVIES: { value: Environment.DIRECTORY_MOVIES, enumerable: true },
		MUSIC: { value: Environment.DIRECTORY_MUSIC, enumerable: true },
		NOTIFICATIONS: { value: Environment.DIRECTORY_NOTIFICATIONS, enumerable: true },
		PICTURES: { value: Environment.DIRECTORY_PICTURES, enumerable: true },
		PODCASTS: { value: Environment.DIRECTORY_PODCASTS, enumerable: true },
		RINGTONES: { value: Environment.DIRECTORY_RINGTONES, enumerable: true },

		MCPE: { value: Environment.getExternalStorageDirectory() + "/games/com.mojang", enumerable: true },
		WORLD: { value () { return Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() }, enumerable: true }
	});



	DataHelper.File = (function () {
		function File (path) {
			this.fileObj = new java.io.File(path);
		}; File.prototype = Object.create(null, {
			constructor: { value: File },

			fileObj: { value: null, configurable: true, writable: true, enumerable: true }
		});



		File.create = function (file) {
			try {
				if (file instanceof File) {
					if (!DataHelper.Common.isVaild(file.fileObj)) {
						file.fileObj.mkdirs();
						file.fileObj.createNewFile();
					}
				} else {
					throw new TypeError("1st argument isn't " + file.constructor.name + ", it's " + DataHelper.File.prototype.constructor.name + ".");
				}
			} catch (Err) {
				throw Err;
			}
		};

		File.delete = function (file) {
			try {
				if (file instanceof File) {
					if (DataHelper.Common.isVaild(file.fileObj)) file.fileObj.delete();
				} else {
					throw new TypeError("1st argument isn't " + file.constructor.name + ", it's " + DataHelper.File.prototype.constructor.name + ".");
				}
			} catch (Err) {
				throw Err;
			}
		};

		return File;
	})();

	DataHelper.Folder = (function () {
		function Folder (path) {
			this.fileObj = new java.io.File(path);
		}; Folder.prototype = Object.create(null, {
			constructor: { value: Folder },

			fileObj: { value: null, configurable: true, writable: true, enumerable: true }
		});



		Folder.create = function (folder) {
			try {
				if (folder instanceof Folder) {
					folder.fileObj.mkdirs();
				} else {
					throw new TypeError("1st argument isn't " + folder.constructor.name + ", it's " + DataHelper.Folder.prototype.constructor.name + ".");
				}
			} catch (Err) {
				throw Err;
			}
		};

		return Folder;
	})();

	DataHelper.Common = (function () {
		const Common = {};

		Common.isVaild = function (elem) {
			try {
				if (elem instanceof DataHelper.File || elem instanceof DataHelper.Folder) {
					return elem.fileObj.exists();
				} else {
					throw new TypeError("1st argument isn't " + elem.constructor.name + ", it's " + [DataHelper.File.prototype.constructor.name, DataHelper.Folder.prototype.constructor.name].join(" or ") + ".");
				}
			} catch (Err) {
				throw Err;
			}
		};



		return Common;
	})();

	return DataHelper;
})();



function chatHook (Str) {
	if (Str.substr(0, 1) == "@") {
		eval(Str.slice(1));
	} else if (Str.substr(0, 1) == "#") {
		eval("clientMessage(" + Str.slice(1) + ")");
	} else if (Str.substr(0, 1) == "$") {
		Str = Str.slice(1);

		switch (Str) {
			case "create":
				DataHelper.File.create(new DataHelper.File(DataHelper.PATH.MCPE + "/test.txt"));
				break;
		}
	}
}