/*/
 *###########################################################################
 *GUI Helper Beta 1.20 - Build 5
 *Copyright (C) 2015-2020 Genbu Hase All Rights Reserved.
 *###########################################################################
/*/
Object.prototype.getClassName = function () {
	return Object.prototype.toString.call(this).slice(8, -1);
};

Object.definePropertiesAsConst = function (Obj, Prop) {
	for (let Key in Prop) {
		Object.defineProperty(Obj, Key, {
			value: Prop[Key],
			
			configurable: false,
			writable: false
		});

		if (Prop[Key].getClassName() == "Object") {
			arguments.callee(Prop[Key]);
		}
	}

	return Obj;
};



const GUIHelper = function (Ctx) {
	this.info = {
		name: "GUI Helper",
		releaseType: "Beta",
		version: "1.20 - Build 5",
		author: "Genbu Hase"
	};
	
	this.ctx = Ctx ? Ctx : com.mojang.minecraftpe.MainActivity.currentMainActivity.get();



	this.Button = function () {
		let Widget = new android.widget.Button(this.ctx);
		
		return Widget;
	}
};

GUIHelper.prototype = Object.create(null, {
	run: {
		value: function (Fuc) {
			this.ctx.runOnUiThread(
				new java.lang.Runnable({
					run: function () {
						Fuc();
					}
				})
			).start();
		}
	}
}), Object.definePropertiesAsConst(GUIHelper, {
	"ALIGN": {
		LEFT: android.view.Gravity.LEFT, //左
		RIGHT: android.view.Gravity.RIGHT, //右
		TOP: android.view.Gravity.TOP, //上
		BOTTOM: android.view.Gravity.BOTTOM, //下
		CENTER: android.view.Gravity.CENTER //中央
	},
	
	"COLOR": {
		BLACK: android.graphics.Color.BLACK,
		BLUE: android.graphics.Color.BLUE,
		CYAN: android.graphics.Color.CYAN,
		DARKGRAY: android.graphics.Color.DKGRAY,
		GRAY: android.graphics.Color.GRAY,
		GREEN: android.graphics.Color.GREEN,
		LIGHTGRAY: android.graphics.Color.LTGRAY,
		MAGENTA: android.graphics.Color.MAGENTA,
		RED: android.graphics.Color.RED,
		WHITE: android.graphics.Color.WHITE,
		YELLOW: android.graphics.Color.YELLOW,
		TRANSPARENT: android.graphics.Color.TRANSPARENT,
		ARGB: function (A, R, G, B) { return android.graphics.Color.argb(A, R, G, B) }
	}
});

(function () {
	GUIHelper.Buttons = [],
	GUIHelper.CheckBoxs = [],
	GUIHelper.TextBoxs = [],
	GUIHelper.ImageButtons = [];
})();



function chatHook (Str) {
	switch (Str.slice(0, 1)) {
		default:
			break;
			
		case "#":
			try {
				preventDefault();
				eval(Str.substr(1));
			} catch (Error) {
				clientMessage(Error);
			}

			break;
			
		case "@":
			try {
				preventDefault();
				clientMessage(eval(Str.substr(1)));
			} catch (Error) {
				clientMessage(Error);
			}

			break;
	}
};



Base = new GUIHelper();