/*/
 *#######################################################
 *GUI Helper Beta 1.20
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
 *#######################################################
/*/
var GUIHelper = function (ModName) {
	this.Ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	this.ModName = ModName;

	R = {
		THIS: this,
	}

	this.Init = function (GUIFuc) {
		this.Ctx.runOnUiThread(
			new java.lang.Runnable({
				run: function () {
					try {
						GUIFuc();
					} catch (Error) {
						clientMessage(Error);
						R.THIS.Util.Message("<" + R.THIS.ModName + "> GUI処理の実行中に不明なエラーが発生しました", android.widget.Toast.LENGTH_LONG);
					}
				}
			})
		).start();
	}

	this.CreateShowPopupWindow = function (Width, Height, XAlign, YAlign, XPosition, YPosition) {
		var View = new android.widget.PopupWindow(null, Width, Height);
			View.showAtLocation(this.Ctx.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);

		return View;
	}

	this.CreateDialog = function (Title, Content) {
		var View = new android.app.Dialog(this.Ctx);
			View.setTitle(Title);
			View.setContentView(Content);

		return View;
	}

	this.CreateButton = function (Text, OnClick, OnLongClick) {
		var View = new android.widget.Button(this.Ctx);
			View.setText(Text);
			
			View.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					OnClick();
				}
			});

			View.setOnLongClickListener(new android.view.View.OnLongClickListener() {
				onLongClick: function() {
					OnLongClick();
					return true;
				}
			});

		return View;
	}

	this.CreateCheckBox = function (Value, OnChange) {
		var View = new android.widget.CheckBox(this.Ctx);
			View.setChecked(Value);
			
			View.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
					OnChange();
				}
			});
			
		return View;
	}

	this.CreateEditText = function (Text) {
		var View = new android.widget.EditText(this.Ctx);
			View.setText(Text);
			View.setBackgroundColor(BackGroundColor);
			
		return View;
	}

	this.CreateTextView = function (Text) {
		try {
			var View = new android.widget.TextView(this.Ctx);
				View.setText(Text);

			return View;
		} catch (Error) {
			clientMessage(Error);
			R.THIS.System.ErrorLog(Error, "CreateTextView");
		}
	}

	this.Property = {
		BackgroundColor: function (View, Color) {
			View.setBackgroundColor(Color);
			return View;
		},

		TextColor: function (View, Color) {
			try {
				View.setTextColor(Color);
				return View;
			} catch (Error) {
				clientMessage(Error);
				R.THIS.System.ErrorLog(Error, "Property.TextColor");
			}
		},

		TextSize: function (View, Size) {
			try {
				View.setTextSize(Size);
				return View;
			} catch (Error) {
				clientMessage(Error);
				R.THIS.System.ErrorLog(Error, "Property.TextSize");
			}
		}
	}

	this.Util = {
		Message: function (Obj, Length) {
			new android.widget.Toast(R.THIS.Ctx).makeText(R.THIS.Ctx, Obj, Length == undefined ? android.widget.Toast.LENGTH_SHORT : Length).show();
		}
	}

	//Do not use this method.
	this.System = {
		ErrorLog: function (Error, MethodName) {
			clientMessage(Error);
			R.THIS.Util.Message("<" + R.THIS.ModName + " / GUI Helper> " + MethodName + "でエラーが発生しました", android.widget.Toast.LENGTH_LONG);
		}
	}
}