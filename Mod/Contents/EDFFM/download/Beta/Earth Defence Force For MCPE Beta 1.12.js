/*/
 *###########################################################################
 *#Earth Defence Force Beta 1.12
 *#Copyright © 2015-2016 Genbu Project and Genbu Hase All Rights Reserved.
 *###########################################################################
/*/

/*/
 *------------------------------
 *<<Classes>>
 *------------------------------
/*/
var Gun = function (Property) {
	this.Property = Property;
	
	this.Fire = function () {
		R = Math.cos(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2;
		X = Math.sin(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
		Y = Math.sin(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2 + Entity.getY(getPlayerEnt());
		Z = Math.cos(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
		
		Bullet = Level.spawnMob(X, Y, Z, 81);
		Level.playSoundEnt(Player.getEntity(), "random.explode", 0.5, Property.Pitch);
		
		R = Math.cos(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Property.Speed + 2);
		X = Math.sin(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
		Y = Math.sin(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Property.Speed + 2) + Entity.getY(getPlayerEnt());
		Z = Math.cos(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
		
		setVelX(Bullet, X - Entity.getX(Bullet));
		setVelY(Bullet, Y - Entity.getY(Bullet));
		setVelZ(Bullet, Z - Entity.getZ(Bullet));
	}
	
	this.ShowButton = function () {
		if (!Flag.IsShowing) {
			CreateGUI(function () {
				SetOnPopUpWindow(0,
					AddTouch(0, "Fire", 10, Color.Red, function () {
						Flag.IsShooting = true;
					}, function () {
						Flag.IsShooting = false;
					})
				, 200, 100, Align.Right, Align.Center, 0, -50);
				
				SetOnPopUpWindow(1,
					AddButton(0, "Reload", 10, Color.Green, function () {
						if (Flag.IsReloading) {
							
						} else if (!Flag.IsReloading) {
							SetOnPopUpWindow(2,
								AddProgressBar(0, 0, 1, "Horizontal", Color.Red)
							, 400, 100, Align.Center, Align.Center, 0, 50);
							
							Flag.IsReloading = true;
						}
					}, function () {})
				, 200, 100, Align.Right, Align.Center, 0, 50);
			});
			
			Flag.IsShowing = true;
		}
	}
	
	this.HideButton = function () {
		if (Flag.IsShowing) {
			DeleteGUI(0);
			DeleteGUI(1);
			Flag.IsShowing = false;
		}
	}
	
	this.AddGun = function () {
		ModPE.setItem(Property.ID, Property.TextureName, Property.TextureDamage, Property.Name, 1);
		Item.setCategory(Property.ID, ItemCategory.TOOL);
		Player.addItemCreativeInv(Property.ID, 1, Property.TextureDamage);
	}
	
	this.IsHolding = function () {
		switch (getCarriedItem()) {
			case Ranger.AR.AF14.Property.ID:
			case Ranger.AR.AF14RA.Property.ID:
			case Ranger.RL.StingRayM1.Property.ID:
				Result = true;
				break;
				
			default:
				Result = false;
				break;
		}
		
		return Result;
	}
}

var EquipBox = function (Property) {
	this.Property = Property;
	
	this.AddBlock = function () {
		Block.defineBlock(Property.ID, Property.Name,
			[
				[Property.BottomName, Property.BottomDamage],
				[Property.TopName, Property.TopDamage],
				[Property.SouthName, Property.SouthDamage],
				[Property.NorthName, Property.NorthDamage],
				[Property.WestName, Property.WestDamage],
				[Property.EastName, Property.EastDamage]
			], Property.MaterialID, Property.Opaque, Property.RenderType
		);
		
		Item.setCategory(Property.ID, ItemCategory.DECORATION);
		Player.addItemCreativeInv(Property.ID, 1, Property.Damage);
	}
}

/*/
 *------------------------------
 *<<Weapons>>
 *------------------------------
/*/
var Ranger = {
	AR: {
		AF14: new Gun(
			{
				ID: 501,
				Name: "AF14",
				Damage: 10,
				Ammo: 120,
				MaxAmmo: 120,
				FireRate: 2,
				Speed: 2.5,
				ReloadSpeed: 1.5,
				
				TextureName: "AF14",
				TextureDamage: 0,
				
				Pitch: 2.5
			}
		),
		AF14RA: new Gun(
			{
				ID: 502,
				Name: "AF14RA",
				Damage: 6,
				Ammo: 200,
				MaxAmmo: 200,
				Speed: 2.5,
				FireRate: 0,
				ReloadSpeed: 2.5,
				
				TextureName: "AF14RA",
				TextureDamage: 0,
				
				Pitch: 2.5
			}
		),
		AF14ST: new Gun(
			{
				ID: 503,
				Name: "AF14ST",
				Damage: 70,
				Ammo: 10,
				MaxAmmo: 10,
				Speed: 2.5,
				FireRate: 10,
				ReloadSpeed: 1.5,
				
				TextureName: "AF14ST",
				TextureDamage: 0,
				
				Pitch: 2.5
			}
		)
	},
	
	RL: {
		StingRayM1: new Gun(
			{
				ID: 520,
				Name: "スティングレイM1",
				Damage: 8,
				DamageArea: 10,
				Ammo: 2,
				MaxAmmo: 2,
				Speed: 5,
				FireRate: 10,
				ReloadSpeed: 1.5,
				
				TextureName: "StingRayM1",
				TextureDamage: 0,
				
				Pitch: 1
			}
		)
	}
}

/*/
 *------------------------------
 *<<Blocks>>
 *------------------------------
/*/
var ToolBox = {
	WeaponChange: new EquipBox(
		{
			ID: 150,
			Damage: 0,
			Name: "装備変更ブロック",
			
			BottomName: "WeaponChange", BottomDamage: 0,
			TopName: "WeaponChange", TopDamage: 1,
			SouthName: "WeaponChange", SouthDamage: 0,
			NorthName: "WeaponChange", NorthDamage: 0,
			WestName: "WeaponChange", WestDamage: 0,
			EastName: "WeaponChange", EastDamage: 0,
			
			MaterialID: 2,
			Opaque: true,
			RenderType: 0
		}
	),
	
	PlayerChange: new EquipBox(
		{
			ID: 151,
			Damage: 0,
			Name: "兵種変更ブロック",
			
			BottomName: "PlayerChange", BottomDamage: 0,
			TopName: "PlayerChange", TopDamage: 1,
			SouthName: "PlayerChange", SouthDamage: 0,
			NorthName: "PlayerChange", NorthDamage: 0,
			WestName: "PlayerChange", WestDamage: 0,
			EastName: "PlayerChange", EastDamage: 0,
			
			MaterialID: 2,
			Opaque: true,
			RenderType: 0
		}
	)
}

/*/
 *------------------------------
 *<<System Args>>
 *------------------------------
/*/
var Flag = {
	IsEquiping: false,
	IsShowing: false,
	IsShooting: false,
	IsReloading: false,
	
	Counter: 0
}

/*/
 *------------------------------
 *<<Hook Functions>>
 *------------------------------
/*/
function newLevel() {
	//Guns
	Ranger.AR.AF14.AddGun();
	Ranger.AR.AF14RA.AddGun();
	Ranger.AR.AF14ST.AddGun();
	
	Ranger.RL.StingRayM1.AddGun();
	
	//Blocks
	ToolBox.WeaponChange.AddBlock();
	ToolBox.PlayerChange.AddBlock();
}

function leaveGame() {
	DeleteAllGUI();
}

function modTick() {
	//所持確認処理
	if (new Gun().IsHolding()) {
		new Gun().ShowButton();
	} else if (!new Gun().IsHolding()) {
		new Gun().HideButton();
	}
	
	//リロード処理
	if (Flag.IsReloading) {
		Flag.Counter++;
		
		switch (getCarriedItem()) {
			case Ranger.AR.AF14.Property.ID:
				if (ProgressBars[0].getProgress() < 100) {
					ProgressBars[0].setProgress(Flag.Counter / (Ranger.AR.AF14.Property.ReloadSpeed * 20));
				} else {
					Flag.Counter = 0;
					DeleteGUI(2);
				}
				
				break;
				
			case Ranger.AR.AF14RA.Property.ID:
				if (ProgressBars[0].getProgress() < 100) {
					ProgressBars[0].setProgress(Flag.Counter / (Ranger.AR.AF14RA.Property.ReloadSpeed * 20));
				} else {
					Flag.Counter = 0;
					DeleteGUI(2);
				}
				
				break;

			case Ranger.AR.AF14ST.Property.ID:
				if (ProgressBars[0].getProgress() < 100) {
					ProgressBars[0].setProgress(Flag.Counter / (Ranger.AR.AF14ST.Property.ReloadSpeed * 20));
				} else {
					Flag.Counter = 0;
					DeleteGUI(2);
				}
				
				break;
				
			case Ranger.RL.StingRayM1.Property.ID:
				if (ProgressBars[0].getProgress() < 100) {
					ProgressBars[0].setProgress(Flag.Counter / (Ranger.RL.StingRayM1.Property.ReloadSpeed * 20));
				} else {
					Flag.Counter = 0;
					DeleteGUI(2);
				}
				
				break;
		}
	} else if (!Flag.IsReloading) {
		
	}
	
	//発射処理
	if (Flag.IsShooting) {
		Flag.Counter++;
		
		switch (getCarriedItem()) {
			case Ranger.AR.AF14.Property.ID:
				if (Flag.Counter >= Ranger.AR.AF14.Property.FireRate) {
					Ranger.AR.AF14.Fire();
					Flag.Counter = 0;
				}
				
				break;
				
			case Ranger.AR.AF14RA.Property.ID:
				if (Flag.Counter >= Ranger.AR.AF14RA.Property.FireRate) {
					Ranger.AR.AF14RA.Fire();
					Flag.Counter = 0;
				}
				
				break;

			case Ranger.AR.AF14ST.Property.ID:
				if (Flag.Counter >= Ranger.AR.AF14ST.Property.FireRate) {
					Ranger.AR.AF14ST.Fire();
					Flag.Counter = 0;
				}
				
				break;
				
			case Ranger.RL.StingRayM1.Property.ID:
				if (Flag.Counter >= Ranger.RL.StingRayM1.Property.FireRate) {
					Ranger.RL.StingRayM1.Fire();
					Flag.Counter = 0;
				}
				
				break;
		}
	} else if (!Flag.IsShooting) {
		switch (getCarriedItem()) {
			case Ranger.AR.AF14.Property.ID:
				Flag.Counter = Ranger.AR.AF14.Property.FireRate;
				break;
				
			case Ranger.AR.AF14RA.Property.ID:
				Flag.Counter = Ranger.AR.AF14RA.Property.FireRate;
				break;

			case Ranger.AR.AF14ST.Property.ID:
				Flag.Counter = Ranger.AR.AF14ST.Property.FireRate;
				break;
				
			case Ranger.RL.StingRayM1.Property.ID:
				Flag.Counter = Ranger.RL.StingRayM1.Property.FireRate;
				break;
		}
	}
}

function useItem(X, Y, Z, ItemID, BlockID, Side, ItemDamage, BlockDamage) {
	switch (BlockID) {
		case ToolBox.WeaponChange.Property.ID:
			CreateGUI(function () {
				ShowDialog(0, "EDFFM == 武器変更",
					AddLinearLayout(0, "Vertical",
						[
							AddButton(0, "AssaultRifle", Size.Wrap, Color.Black, function () {
								
							}, function () {
								
							})
						]
					)
				);
			});
			
			break;
			
		case ToolBox.PlayerChange.Property.ID:
			break;
	}
}

function projectileHitEntityHook(Bullet, Victim) {
	if (Entity.getEntityTypeId(Bullet) == 81) {
		var Damage = 0;
		
		switch (getCarriedItem()) {
			case Ranger.AR.AF14.Property.ID:
				Damage = Ranger.AR.AF14.Property.Damage;
				break;
				
			case Ranger.AR.AF14RA.Property.ID:
				Damage = Ranger.AR.AF14RA.Property.Damage;
				break;

			case Ranger.AR.AF14ST.Property.ID:
				Damage = Ranger.AR.AF14ST.Property.Damage;
				break;
				
			case Ranger.RL.StingRayM1.Property.ID:
				preventDefault();
				explode(Math.round(Entity.getX(Bullet)), Math.round(Entity.getY(Bullet)), Math.round(Entity.getZ(Bullet)), Ranger.RL.StingRayM1.Property.DamageArea);
				break;
		}
		
		Entity.setHealth(Victim, Entity.getHealth(Victim) - Damage);
	}
}

function projectileHitBlockHook(Bullet, Block) {
	if (Entity.getEntityTypeId(Bullet) == 81) {
		var Damage = 0;
		
		switch (getCarriedItem()) {
			case Ranger.RL.StingRayM1.Property.ID:
				preventDefault();
				explode(Math.round(Entity.getX(Bullet)), Math.round(Entity.getY(Bullet)), Math.round(Entity.getZ(Bullet)), Ranger.RL.StingRayM1.Property.DamageArea);
				break;
		}
	}
}

/*/
 *###########################################################################
 *#GUI Helper Release 1.10
 *#Copyright © 2015-2016 Genbu Project and Genbu Hase All Rights Reserved.
 *###########################################################################
/*/

/*/
 *------------------------------
 *         System Args
 *------------------------------
/*/
var GUI = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var PopUpWindows = [];
var Dialogs = [];
var AlertDialogs = [];

var TextViews = [];
var Buttons = [];
var Toggles = [];
var Touches = [];
var EditTexts = [];
var CheckBoxes = [];
var SeekBars = [];
var ProgressBars = [];
var ImageViews = [];
var ImageButtons = [];

var LinearLayouts = [];
var ScrollViews = [];

var Version = {
	This: 1.10,
	Remote: null
}
/*/
 *------------------------------
 *         Style Args
 *------------------------------
/*/
var Align = {
	Left: android.view.Gravity.LEFT, //左
	Right: android.view.Gravity.RIGHT, //右
	Top: android.view.Gravity.TOP, //上
	Bottom: android.view.Gravity.BOTTOM, //下
	Center: android.view.Gravity.CENTER //中央
}

var Color = {
	Black: android.graphics.Color.BLACK,
	Blue: android.graphics.Color.BLUE,
	Cyan: android.graphics.Color.CYAN,
	DarkGray: android.graphics.Color.DKGRAY,
	Gray: android.graphics.Color.GRAY,
	Green: android.graphics.Color.GREEN,
	LightGray: android.graphics.Color.LTGRAY,
	Magenta: android.graphics.Color.MAGENTA,
	Red: android.graphics.Color.RED,
	White: android.graphics.Color.WHITE,
	Yellow: android.graphics.Color.YELLOW,
	Transparent: android.graphics.Color.TRANSPARENT,
	ARGB: function(A, R, G, B) {return android.graphics.Color.argb(A, R, G, B)}
}

var ScaleType = {
	Normal: android.widget.ImageView.ScaleType.CENTER,
	AllFit: android.widget.ImageView.ScaleType.FIT_XY,
	Fit_Center_HorizontalWide: android.widget.ImageView.ScaleType.CENTER_CROP,
	Fit_Center_VerticalWide: android.widget.ImageView.ScaleType.FIT_CENTER,
	Fit_Left_VerticalWide: android.widget.ImageView.ScaleType.FIT_START,
	Fit_Right_VerticalWide: android.widget.ImageView.ScaleType.FIT_END
}

var Size = {
	Wrap: android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
	Match: android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
	Fill: android.widget.LinearLayout.LayoutParams.FILL_PARENT
}

/*/
 *------------------------------
 *      Defined Functions
 *------------------------------
/*/
function CreateGUI(Content) {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				Content();
			} catch(Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

function DeleteGUI(ID) {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				PopUpWindows[ID].dismiss();
			} catch (Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

function DeleteAllGUI() {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				for (var i = 0; i < PopUpWindows.length; i++) {
					PopUpWindows[i].dismiss();
				}
			} catch (Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

function SetOnPopUpWindow(ID, Content, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	PopUpWindows[ID] = new android.widget.PopupWindow(Content, Width, Height);
	PopUpWindows[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	PopUpWindows[ID].setContentView(Content);
}

function ShowDialog(ID, Title, Content) {
	Dialogs[ID] = new android.app.Dialog(GUI);
	Dialogs[ID].setTitle(Title);
	
	Dialogs[ID].setContentView(Content);
	Dialogs[ID].show();
}

function ShowAlertDialog(ID, Title, Message, Text1, Text2, Text3, Button1Fuc, Button2Fuc, Button3Fuc, IsCancelable) {
	AlertDialogs[ID] = new android.app.AlertDialog.Builder(GUI);
	AlertDialogs[ID].setTitle(Title);
	AlertDialogs[ID].setMessage(Message);
	
	AlertDialogs[ID].setPositiveButton(Text1,
		new android.content.DialogInterface.OnClickListener() {
			onClick: function() {
				Button1Fuc();
			}
		}
	);
	AlertDialogs[ID].setNeutralButton(Text2,
		new android.content.DialogInterface.OnClickListener() {
			onClick: function() {
				Button2Fuc();
			}
		}
	);
	AlertDialogs[ID].setNegativeButton(Text3,
		new android.content.DialogInterface.OnClickListener() {
			onClick: function() {
				Button3Fuc();
			}
		}
	);
	
	AlertDialogs[ID].setCancelable(IsCancelable);
	AlertDialogs[ID].create().show();
}

/*/
 *------------------------------
 *      Property Functions
 *------------------------------
/*/
function AddTextView(ID, Text, TextSize, Color, XTextAlign, YTextAlign, Fuc, LongFuc) {
	TextViews[ID] = new android.widget.TextView(GUI);
	TextViews[ID].setText(Text);
	TextViews[ID].setTextSize(TextSize);
	TextViews[ID].setTextColor(Color);
	TextViews[ID].setGravity(YTextAlign|XTextAlign);
	
	TextViews[ID].setOnClickListener(new android.view.View.OnClickListener() {
		onClick: function() {
			Fuc();
		}
	});
	TextViews[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	});
	
	return TextViews[ID];
}

function AddButton(ID, Text, TextSize, Color, Fuc, LongFuc) {
	Buttons[ID] = new android.widget.Button(GUI);
	Buttons[ID].setText(Text);
	Buttons[ID].setTextSize(TextSize);
	Buttons[ID].setTextColor(Color);
	
	Buttons[ID].setOnClickListener(new android.view.View.OnClickListener() {
		onClick: function() {
			Fuc();
		}
	});
	Buttons[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	});
	
	return Buttons[ID];
}

function AddToggle(ID, Text1, Text2, TextSize1, TextSize2, Color1, Color2, Fuc1, Fuc2, LongFuc) {
	Toggles[ID] = new android.widget.Button(GUI);
	Toggles[ID].setText(Text1);
	Toggles[ID].setTextSize(TextSize1);
	Toggles[ID].setTextColor(Color1);
	
	Toggles[ID].setOnClickListener(new android.view.View.OnClickListener() {
		onClick: function() {
			if (Toggles[ID].getText() == Text2) {
				Toggles[ID].setText(Text1);
				Toggles[ID].setTextSize(TextSize1);
				Toggles[ID].setTextColor(Color1);
				
				Fuc1();
			} else if (Toggles[ID].getText() == Text1) {
				Toggles[ID].setText(Text2);
				Toggles[ID].setTextSize(TextSize2);
				Toggles[ID].setTextColor(Color2);
				
				Fuc2();
			}
		}
	});
	Toggles[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	});
	
	return Toggles[ID];
}

function AddTouch(ID, Text, TextSize, Color, TouchFuc, ReleaseFuc) {
	Touches[ID] = new android.widget.Button(GUI);
	Touches[ID].setText(Text);
	Touches[ID].setTextSize(TextSize);
	Touches[ID].setTextColor(Color);
	
	Touches[ID].setOnTouchListener(new android.view.View.OnTouchListener() {
		onTouch: function(View, Event) {
			switch(Event.getAction()) {
				case android.view.MotionEvent.ACTION_DOWN:
					TouchFuc();
					break;
					
				case android.view.MotionEvent.ACTION_UP:
					ReleaseFuc();
					break;
			}
			
			return true;
		}
	});
	
	return Touches[ID];
}

function AddEditText(ID, Text, Color, BackGroundColor) {
	EditTexts[ID] = new android.widget.EditText(GUI);
	EditTexts[ID].setText(Text);
	EditTexts[ID].setTextColor(Color);
	EditTexts[ID].setBackgroundColor(BackGroundColor);
	
	return EditTexts[ID];
}

function AddCheckBox(ID, Value, ChangeFuc) {
	CheckBoxes[ID] = new android.widget.CheckBox(GUI);
	CheckBoxes[ID].setChecked(Value);
	
	CheckBoxes[ID].setOnClickListener(new android.view.View.OnClickListener() {
		onClick: function() {
			ChangeFuc();
		}
	});
	
	return CheckBoxes[ID];
}

function AddSeekBar(ID, Value, MaxValue, DragFuc, TouchFuc, ReleaseFuc) {
	SeekBars[ID] = new android.widget.SeekBar(GUI);
	SeekBars[ID].setProgress(Value);
	SeekBars[ID].setMax(MaxValue);
	
	SeekBars[ID].setOnSeekBarChangeListener(new android.view.View.OnSeekBarChangeListener() {
		onProgressChanged: function() {
			DragFuc();
		},
		
		onStartTrackingTouch: function() {
			TouchFuc();
		},
		
		onStopTrackingTouch: function() {
			ReleaseFuc();
		}
	});
	
	return SeekBars[ID];
}

function AddProgressBar(ID, Value, MaxValue, Size, Color) {
	switch(Size.toLowerCase().toString()) {
		case "small":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyleSmall);
			break;
			
		case "normal":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyle);
			break;
			
		case "large":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyleLarge);
			break;
			
		case "horizontal":
			ProgressBars[ID] = new android.widget.ProgressBar(GUI, null, android.R.attr.progressBarStyleHorizontal);
			break;
	}
	
	ProgressBars[ID].setProgress(Value);
	ProgressBars[ID].setMax(MaxValue);
	ProgressBars[ID].getProgressDrawable().setColorFilter(Color, android.graphics.PorterDuff.Mode.SRC_IN);

	return ProgressBars[ID];
}

function AddImageButton(ID, Mode, URL, ScaleType, Fuc, LongFuc) {
	ImageButtons[ID] = new android.widget.ImageButton(GUI);
	
	switch(Mode.toLowerCase().toString()) {
		case "local":
			try {
				ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(URL))));
			} catch(Error) {
				clientMessage(Error);
				print("ファイルが存在しません");
			}
			
			break;
			
		case "texture":
			try {
				ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack(URL)));
			} catch(Error) {
				clientMessage(Error);
				print("ファイルが存在しません");
			}
			
			break;
			
		case "network":
			new java.lang.Thread(
				new java.lang.Runnable({
					run: function () {
						try {
							ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.net.URL(URL).openConnection().getInputStream()));
						} catch(Error) {
							clientMessage(Error);
							print("インターネットに接続されていません");
						}
					}
				})
			).start();
			
			break;
	}
	
	ImageButtons[ID].setScaleType(ScaleType);
	
	ImageButtons[ID].setOnClickListener(new android.view.View.OnClickListener() {
		onClick: function() {
			Fuc();
		}
	});
	ImageButtons[ID].setOnLongClickListener(new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	});
	
	return ImageButtons[ID];
}

function AddImageView(ID, Mode, URL) {
	ImageViews[ID] = new android.widget.ImageView(GUI);
	
	switch(Mode.toLowerCase().toString()) {
		case "local":
			try {
				ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(URL))));
			} catch(Error) {
				clientMessage(Error);
				print("ファイルが存在しません");
			}
			
			break;
			
		case "texture":
			try {
				ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack(URL)));
			} catch(Error) {
				clientMessage(Error);
				print("ファイルが存在しません");
			}
			
			break;
			
		case "network":
			new java.lang.Thread(
				new java.lang.Runnable({
					run: function () {
						try {
							ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.net.URL(URL).openConnection().getInputStream()));
						} catch(Error) {
							clientMessage(Error);
							print("インターネットに接続されていません");
						}
					}
				})
			).start();
			
			break;
	}
	
	return ImageViews[ID];
}

function AddLinearLayout(ID, Type, Content) {
	LinearLayouts[ID] = new android.widget.LinearLayout(GUI);
	
	switch(Type.toLowerCase().toString()) {
		case "vertical":
			LinearLayouts[ID].setOrientation(android.widget.LinearLayout.VERTICAL);
			break;
			
		case "horizontal":
			LinearLayouts[ID].setOrientation(android.widget.LinearLayout.HORIZONTAL);
			break;
			
		case "normal":
			break;
	}
	
	for(var i = 0; i < Content.length; i++) {
		LinearLayouts[ID].addView(Content[i]);
	}
	
	return LinearLayouts[ID];
}

function AddScrollView(ID, Content) {
	ScrollViews[ID] = new android.widget.ScrollView(GUI);
	ScrollViews[ID].addView(Content);
	
	return ScrollViews[ID];
}


function UpdateCheck() {
	new java.lang.Thread(
		new java.lang.Runnable({
			run: function () {
				try {
					var VersionConnecter = new java.net.URL("https://raw.githubusercontent.com/GenbuHase/GUI-Helper-Official-Repository/master/VERSION").openConnection();
					var VersionReader = new java.io.BufferedReader(new java.io.InputStreamReader(VersionConnecter.getInputStream()));
					
					Version.Remote = VersionReader.readLine();
					
					if (Version.This != Version.Remote && Version.This < Version.Remote) {
						Update();
					}
				} catch (Error) {
					clientMessage(Error);
					print("ネットワークに接続されていません");
				}
			}
		})
	).start();
}

function Update() {
	CreateGUI(function() {
		ShowAlertDialog(0, "アップデート確認()", "最新バージョンが確認されました。\nアップデートしますか？", "Yes", "Cancel", "No", function() {
			new java.lang.Thread(
				new java.lang.Runnable({
					run: function () {
						try {
							var Connecter = {
								This: new java.io.File(GUI.getDir("modscripts", 0)).listFiles(),
								Remote: new java.net.URL("https://raw.githubusercontent.com/GenbuHase/GUI-Helper-Official-Repository/master/Release/GUI%20Helper%20Release%20" + Version.Remote + ".js").openConnection()
							}
							
							var Reader = {
								This: null,
								Remote: new java.io.BufferedReader(new java.io.InputStreamReader(Connecter.Remote.getInputStream()))
							}
							
							for (var i = 0; i < Connecter.This.length; i++) {
								Reader.This = new java.io.BufferedReader(new java.io.InputStreamReader(new java.net.URL(new java.io.File(Connecter.This[i])).openConnection().getInputStream()));
								
								for (var Lines = Reader.This.readLine(); Lines != null; Lines = Reader.This.readLine()) {
									clientMessage(Lines);
								}
							}
							
							for (var Lines = Reader.Remote.readLine(); Lines != null; Lines = Reader.Remote.readLine()) {
								clientMessage(Lines);
							}
						} catch (Error) {
							clientMessage(Error);
						}
					}
				})
			).start();
		}, function() {
			
		}, function() {
			
		}, true);
	});
}
