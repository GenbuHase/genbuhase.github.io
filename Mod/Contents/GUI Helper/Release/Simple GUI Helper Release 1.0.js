/*/
 *#######################################################
 *Simple GUI Helper Release 1.0
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

var SimpleGUIHelper = function () {
	GUI = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

	//ウィジェット格納変数
	Widget = {
		PopupWindows: {},
		Dialogs: {},

		TextViews: {},
		Buttons: {},

		LinearLayouts: {},
	}

	//GUIスタイル用定数
	this.Style = {
		Align: {
			Left: android.view.Gravity.LEFT, //左
			Right: android.view.Gravity.RIGHT, //右
			Top: android.view.Gravity.TOP, //上
			Bottom: android.view.Gravity.BOTTOM, //下
			Center: android.view.Gravity.CENTER //中央
		},
		
		Color: {
			Black: android.graphics.Color.BLACK, //黒色
			Blue: android.graphics.Color.BLUE, //青色
			Cyan: android.graphics.Color.CYAN, //水色
			DarkGray: android.graphics.Color.DKGRAY, //濃い灰色
			Gray: android.graphics.Color.GRAY, //灰色
			Green: android.graphics.Color.GREEN, //緑色
			LightGray: android.graphics.Color.LTGRAY, //薄い灰色
			Magenta: android.graphics.Color.MAGENTA, //桃色
			Red: android.graphics.Color.RED, //赤色
			White: android.graphics.Color.WHITE, //白色
			Yellow: android.graphics.Color.YELLOW, //黄色
			Transparent: android.graphics.Color.TRANSPARENT, //透明

			ARGB: function (R, G, B, A) {
				return android.graphics.Color.argb(A, R, G, B);
			} //赤R, 緑G, 青B, 透明度Aの色
		},
		
		Size: {
			Wrap: android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, //丁度いいサイズ
			Match: android.widget.LinearLayout.LayoutParams.MATCH_PARENT, //画面に合わせたサイズ
			Fill: android.widget.LinearLayout.LayoutParams.FILL_PARENT //画面に合わせたサイズ(非推奨)
		}
	}

	this.Sets = {
		Init: function (Content) {
			GUI.runOnUiThread(
				new java.lang.Runnable({
					run: function () {
						try {
							Content();
						} catch (Error) {
							print("Simple GUI HelperのCreateThread処理でエラーが発生しました");
							clientMessage(Error);
						}
					}
				})
			);
		},

		DeleteGUIByID: function (ID) {
			GUI.runOnUiThread(
				new java.lang.Runnable({
					run: function () {
						try {
							Widget.PopupWindows[ID].dismiss();
							Widget.PopupWindows[ID] = undefined;
						} catch (Error) {
							print("Simple GUI HelperのDeleteGUIByID処理でエラーが発生しました");
							clientMessage(Error);
						}
					}
				})
			)
		},

		DeleteAllGUI: function () {
			GUI.runOnUiThread(
				new java.lang.Runnable({
					run: function () {
						try {
							for (var ID in Widget.PopupWindows) {
								Widget.PopupWindows[ID].dismiss();
								Widget.PopupWindows[ID] = undefined;
							}
						} catch (Error) {
							print("Simple GUI HelperのDeleteAllGUI処理でエラーが発生しました");
							clientMessage(Error);
						}
					}
				})
			)
		},

		ShowPopupWindow: function (ID, Content, Size, Align, Position) {
			try {
				Widget.PopupWindows[ID] = new android.widget.PopupWindow(Content, Size[0], Size[1]);
				Widget.PopupWindows[ID].showAtLocation(GUI.getWindow().getDecorView(), Align[0] | Align[1], Position[0], Position[1]);

				Widget.PopupWindows[ID].setContentView(Content);
			} catch (Error) {
				print("Simple GUI HelperのShowPopupWindow処理でエラーが発生しました");
				clientMessage(Error);
			}

			return Widget.PopupWindows[ID];
		}, //画面にContentを表示する

		ShowDialog: function (ID, Title, Content) {
			try {
				Widget.Dialogs[ID] = new android.app.Dialog(GUI);
				Widget.Dialogs[ID].setTitle(Title);

				Widget.Dialogs[ID].setContentView(Content);
				Widget.Dialogs[ID].show();
			} catch (Error) {
				print("Simple GUI HelperのShowDialog処理でエラーが発生しました");
				clientMessage(Error);
			}

			return Widget.Dialogs[ID];
		}, //Titleの名前が付いたContentをダイアログに表示する
	}

	this.Parts = {
		Button: function (ID, Text, FontSize, FontColor, Fuc, LongFuc) {
			try {
				Widget.Buttons[ID] = new android.widget.Button(GUI);
				Widget.Buttons[ID].setText(Text);
				Widget.Buttons[ID].setTextSize(FontSize);
				Widget.Buttons[ID].setTextColor(FontColor);

				Widget.Buttons[ID].setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function () {
						Fuc();
					}
				});

				Widget.Buttons[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
					onLongClick: function () {
						LongFuc();
					}
				});
			} catch (Error) {
				print("Simple GUI HelperのButton処理でエラーが発生しました");
				clientMessage(Error);
			}

			return Widget.Buttons[ID];
		},

		LinearLayout: function (ID, Type, Content) {
			try {
				Widget.LinearLayouts[ID] = new android.widget.LinearLayout(GUI);
			
				switch (Type.toLowerCase().toString()) {
					case "vertical":
						Widget.LinearLayouts[ID].setOrientation(android.widget.LinearLayout.VERTICAL);
						break;
					
					case "horizontal":
						Widget.LinearLayouts[ID].setOrientation(android.widget.LinearLayout.HORIZONTAL);
						break;
					
					case "normal":
						break;

					default:
						break;
				}
			
				for (var i = 0; i < Content.length; i++) {
					Widget.LinearLayouts[ID].addView(Content[i]);
				}
			} catch (Error) {
				print("Simple GUI HelperのLinearLayout処理でエラーが発生しました");
				clientMessage(Error);
			}

			return Widget.LinearLayouts[ID];
		}
	}
}