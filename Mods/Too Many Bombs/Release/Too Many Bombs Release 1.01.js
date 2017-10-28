/*/
 *------------------------------
 *             IDs
 *------------------------------
/*/
var Materials = {
	String: 287,
	GunPowder: 289,
}

var Blocks = {
	Fire: 51,
}

var Bomb = {
	Bomb: 501,
	SuperBomb: 502,
	HyperBomb: 503,
	UltimateBomb: 504,
	
	FireBomb: 505,
	SuperFireBomb: 506,
	HyperFireBomb: 507,
	UltimateFireBomb: 508
}


/*/
 *------------------------------
 *         System Args
 *------------------------------
/*/
var EntityAll;

var Flag  = {
	IsShow: false,
	IsTap: false
}


/*/
 *------------------------------
 *        Hook Functions
 *------------------------------
/*/
function newLevel() {
	AddItems();
	AddRecipes();
	SetCategory();
}

function leaveGame() {
	DeleteAllGUI();
}

function modTick() {
	if(Flag.IsTap) Throw(81, 1);
	
	switch(getCarriedItem()) {
		case Bomb.Bomb:
			if(!Flag.IsShow) {
				ShowBomb();
				Flag.IsShow = true;
			}
			
			EntityAll = Entity.getAll();
			
			for(var i = 0; i < EntityAll.length; i++) {
				if(Entity.getEntityTypeId(EntityAll[i]) == 81) {
					if(Level.getTile(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])) - 1, Math.round(Entity.getZ(EntityAll[i]))) != 0) {
						explode(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);

						Entity.remove(EntityAll[i]);
					}
				}
			}
			
			break;
			
		case Bomb.SuperBomb:
			if(!Flag.IsShow) {
				ShowBomb();
				Flag.IsShow = true;
			}
			
			EntityAll = Entity.getAll();
			
			for(var i = 0; i < EntityAll.length; i++) {
				if(Entity.getEntityTypeId(EntityAll[i]) == 81) {
					if(Level.getTile(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])) - 1, Math.round(Entity.getZ(EntityAll[i]))) != 0) {
						explode(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 25.0);

						Entity.remove(EntityAll[i]);
					}
				}
			}
			
			break;
			
		case Bomb.HyperBomb:
			if(!Flag.IsShow) {
				ShowBomb();
				Flag.IsShow = true;
			}
			
			EntityAll = Entity.getAll();
			
			for(var i = 0; i < EntityAll.length; i++) {
				if(Entity.getEntityTypeId(EntityAll[i]) == 81) {
					if(Level.getTile(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])) - 1, Math.round(Entity.getZ(EntityAll[i]))) != 0) {
						explode(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 75.0);

						Entity.remove(EntityAll[i]);
					}
				}
			}
			
			break;
			
		case Bomb.UltimateBomb:
			if(!Flag.IsShow) {
				ShowBomb();
				Flag.IsShow = true;
			}
			
			EntityAll = Entity.getAll();
			
			for(var i = 0; i < EntityAll.length; i++) {
				if(Entity.getEntityTypeId(EntityAll[i]) == 81) {
					if(Level.getTile(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])) - 1, Math.round(Entity.getZ(EntityAll[i]))) != 0) {
						explode(Math.round(Entity.getX(EntityAll[i])) + new java.util.Random().nextInt(10), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						explode(Math.round(Entity.getX(EntityAll[i])) + new java.util.Random().nextInt(10), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						explode(Math.round(Entity.getX(EntityAll[i])) + new java.util.Random().nextInt(10), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						explode(Math.round(Entity.getX(EntityAll[i])) + new java.util.Random().nextInt(10), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						explode(Math.round(Entity.getX(EntityAll[i])) + new java.util.Random().nextInt(10), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						explode(Math.round(Entity.getX(EntityAll[i])) - new java.util.Random().nextInt(10), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						explode(Math.round(Entity.getX(EntityAll[i])) - new java.util.Random().nextInt(10), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						explode(Math.round(Entity.getX(EntityAll[i])) - new java.util.Random().nextInt(10), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						explode(Math.round(Entity.getX(EntityAll[i])) - new java.util.Random().nextInt(10), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						explode(Math.round(Entity.getX(EntityAll[i])) - new java.util.Random().nextInt(10), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);

						Entity.remove(EntityAll[i]);
					}
				}
			}
			
			break;
			
		case Bomb.FireBomb:
			if(!Flag.IsShow) {
				ShowBomb();
				Flag.IsShow = true;
			}
			
			EntityAll = Entity.getAll();

			for(var i = 0; i < EntityAll.length; i++) {
				if(Entity.getEntityTypeId(EntityAll[i]) == 81) {
					if(Level.getTile(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])) - 1, Math.round(Entity.getZ(EntityAll[i]))) != 0) {
						explode(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						
						for (var X = 5; X >= 0; X--) {
							for (var Y = 5; Y >= 0; Y--) {
								for (var Z = 5; Z >= 0; Z--) {
									setTile(Entity.getX(EntityAll[i]) + X, Entity.getY(EntityAll[i]) + Y, Entity.getZ(EntityAll[i]) + Z, Blocks.Fire, 0);
								}
							}
						}

						Entity.remove(EntityAll[i]);
					}
				}
			}
			
			break;
			
		case Bomb.SuperFireBomb:
			if(!Flag.IsShow) {
				ShowBomb();
				Flag.IsShow = true;
			}
			
			EntityAll = Entity.getAll();

			for(var i = 0; i < EntityAll.length; i++) {
				if(Entity.getEntityTypeId(EntityAll[i]) == 81) {
					if(Level.getTile(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])) - 1, Math.round(Entity.getZ(EntityAll[i]))) != 0) {
						explode(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						
						for (var X = 10; X >= 0; X--) {
							for (var Y = 10; Y >= 0; Y--) {
								for (var Z = 10; Z >= 0; Z--) {
									setTile(Entity.getX(EntityAll[i]) + X, Entity.getY(EntityAll[i]) + Y, Entity.getZ(EntityAll[i]) + Z, Blocks.Fire, 0);
								}
							}
						}

						Entity.remove(EntityAll[i]);
					}
				}
			}
			
			break;
			
		case Bomb.HyperFireBomb:
			if(!Flag.IsShow) {
				ShowBomb();
				Flag.IsShow = true;
			}
			
			EntityAll = Entity.getAll();

			for(var i = 0; i < EntityAll.length; i++) {
				if(Entity.getEntityTypeId(EntityAll[i]) == 81) {
					if(Level.getTile(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])) - 1, Math.round(Entity.getZ(EntityAll[i]))) != 0) {
						explode(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						
						for (var X = 5; X >= 0; X--) {
							for (var Y = 5; Y >= 0; Y--) {
								for (var Z = 5; Z >= 0; Z--) {
									setTile(Entity.getX(EntityAll[i]) + X, Entity.getY(EntityAll[i]) + Y, Entity.getZ(EntityAll[i]) + Z, 10, 0);
								}
							}
						}

						Entity.remove(EntityAll[i]);
					}
				}
			}
			
			break;
			
		case Bomb.UltimateFireBomb:
			if(!Flag.IsShow) {
				ShowBomb();
				Flag.IsShow = true;
			}
			
			EntityAll = Entity.getAll();

			for(var i = 0; i < EntityAll.length; i++) {
				if(Entity.getEntityTypeId(EntityAll[i]) == 81) {
					if(Level.getTile(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])) - 1, Math.round(Entity.getZ(EntityAll[i]))) != 0) {
						explode(Math.round(Entity.getX(EntityAll[i])), Math.round(Entity.getY(EntityAll[i])), Math.round(Entity.getZ(EntityAll[i])), 5.0);
						
						for (var X = 10; X >= 0; X--) {
							for (var Y = 10; Y >= 0; Y--) {
								for (var Z = 10; Z >= 0; Z--) {
									setTile(Entity.getX(EntityAll[i]) + X, Entity.getY(EntityAll[i]) + Y, Entity.getZ(EntityAll[i]) + Z, 10, 0);
								}
							}
						}

						Entity.remove(EntityAll[i]);
					}
				}
			}
			
			break;

		default:
			if(Flag.IsShow) {
				DeleteGUI(0);
				Flag.IsShow = false;
			}
			
			break;
	}
}


/*/
 *------------------------------
 *      Defined Functions
 *------------------------------
/*/
function AddItems() {
	ModPE.setItem(Bomb.Bomb, "StandardBomb", 0, "爆弾", 1);
	ModPE.setItem(Bomb.SuperBomb, "StandardBomb", 0, "爆弾+", 1);
	ModPE.setItem(Bomb.HyperBomb, "StandardBomb", 0, "爆弾++", 1);
	ModPE.setItem(Bomb.UltimateBomb, "StandardBomb", 0, "爆弾+++", 1);
	
	ModPE.setItem(Bomb.FireBomb, "FireBomb", 0, "炎の爆弾", 1);
	ModPE.setItem(Bomb.SuperFireBomb, "FireBomb", 0, "炎の爆弾+", 1);
	ModPE.setItem(Bomb.HyperFireBomb, "FireBomb", 0, "炎の爆弾++", 1);
	ModPE.setItem(Bomb.UltimateFireBomb, "FireBomb", 0, "炎の爆弾+++", 1);
}

function AddRecipes() {
	Item.addShapedRecipe(Bomb.Bomb, 9, 0, ["GSG", "GGG", "GGG"], ["G", Materials.GunPowder, 1, "S", Materials.String, 0]); //普通の爆弾 のレシピ追加(火薬 * 8 & 糸 * 1)
}

function SetCategory() {
	Item.setCategory(Bomb.Bomb, ItemCategory.TOOL);
	Item.setCategory(Bomb.SuperBomb, ItemCategory.TOOL);
	Item.setCategory(Bomb.HyperBomb, ItemCategory.TOOL);
	Item.setCategory(Bomb.UltimateBomb, ItemCategory.TOOL);
	Player.addItemCreativeInv(Bomb.Bomb, 1, 0);
	Player.addItemCreativeInv(Bomb.SuperBomb, 1, 0);
	Player.addItemCreativeInv(Bomb.HyperBomb, 1, 0);
	Player.addItemCreativeInv(Bomb.UltimateBomb, 1, 0);
	
	Item.setCategory(Bomb.FireBomb, ItemCategory.TOOL);
	Item.setCategory(Bomb.SuperFireBomb, ItemCategory.TOOL);
	Item.setCategory(Bomb.HyperFireBomb, ItemCategory.TOOL);
	Item.setCategory(Bomb.UltimateFireBomb, ItemCategory.TOOL);
	Player.addItemCreativeInv(Bomb.FireBomb, 1, 0);
	Player.addItemCreativeInv(Bomb.SuperFireBomb, 1, 0);
	Player.addItemCreativeInv(Bomb.HyperFireBomb, 1, 0);
	Player.addItemCreativeInv(Bomb.UltimateFireBomb, 1, 0);
}

function ShowBomb() {
	CreateGUI(function() {
		AddButton(0, "爆弾投擲", 10, Color.RED, function() {
			Throw(81, 1);
		}, function(){}, 200, 100, Align.RIGHT, Align.CENTER, 0, 0);
	});
}

function Throw(EntityID, Speed) {
	R = Math.cos(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2;
	X = Math.sin(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
	Y = Math.sin(-Entity.getPitch(getPlayerEnt()) / 57.3) * 2 + Entity.getY(getPlayerEnt());
	Z = Math.cos(-Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
	
	var Bullet = Level.spawnMob(X, Y, Z, EntityID);
	
	R = Math.cos(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2);
	X = Math.sin(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getX(getPlayerEnt());
	Y = Math.sin(-1 * Entity.getPitch(getPlayerEnt()) / 57.3) * (Speed + 2) + Entity.getY(getPlayerEnt());
	Z = Math.cos(-1 * Entity.getYaw(getPlayerEnt()) / 57.3) * R + Entity.getZ(getPlayerEnt());
	
	setVelX(Bullet, X - Entity.getX(Bullet));
	setVelY(Bullet, Y - Entity.getY(Bullet));
	setVelZ(Bullet, Z - Entity.getZ(Bullet));
}


/*/
 *##################################################
 *#GUI Helper Release 1.08
 *#Copyright © 2015 Genbu Hase All Rights Reserved.
 *##################################################
/*/

/*/
 *------------------------------
 *These are args for define.
 *------------------------------
/*/
var GUI = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Window = [];

var TextViews = [];
var Buttons = [];
var Toggles = [];
var Touches = [];
var SeekBars = [];
var ProgressBars = [];
var ImageViews = [];

/*/
 *------------------------------
 *These are args you can use.
 *------------------------------
/*/
var Align = {
	LEFT: android.view.Gravity.LEFT, //左
	RIGHT: android.view.Gravity.RIGHT, //右
	TOP: android.view.Gravity.TOP, //上
	BOTTOM: android.view.Gravity.BOTTOM, //下
	CENTER: android.view.Gravity.CENTER //中央
}

var Color = {
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
	ARGB: function(A, R, G, B) {android.graphics.Color.argb(A, R, G, B)}
}

var Touch = {
	Press: android.view.MotionEvent.ACTION_DOWN,
	Release: android.view.MotionEvent.ACTION_UP
}

function CreateGUI(Content) {
	GUI.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
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
				Window[ID].dismiss();
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
				for (var i = 0; i < Window.length; i++) {
					Window[i].dismiss();
				}
			} catch (Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

/*/
 *------------------------------
 *These are property classes.
 *------------------------------
/*/
function AddTextView(ID, Text, TextSize, Color, XTextAlign, YTextAlign, Fuc, LongFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	TextViews[ID] = new android.widget.TextView(GUI);
	TextViews[ID].setText(Text);
	TextViews[ID].setTextSize(TextSize);
	TextViews[ID].setTextColor(Color);
	TextViews[ID].setGravity(YTextAlign|XTextAlign);
	
	var Content = new android.view.View.OnClickListener() {
		onClick: function() {
			Fuc();
		}
	}
	
	var LongContent = new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	}
	
	TextViews[ID].setOnClickListener(Content);
	TextViews[ID].setOnLongClickListener(LongContent);
	
	Window[ID] = new android.widget.PopupWindow(TextViews[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(TextViews[ID]);
}

function AddButton(ID, Text, TextSize, Color, Fuc, LongFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	Buttons[ID] = new android.widget.Button(GUI);
	Buttons[ID].setText(Text);
	Buttons[ID].setTextSize(TextSize);
	Buttons[ID].setTextColor(Color);
	
	var Content = new android.view.View.OnClickListener() {
		onClick: function() {
			Fuc();
		}
	}
	
	var LongContent = new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	}
	
	Buttons[ID].setOnClickListener(Content);
	Buttons[ID].setOnLongClickListener(LongContent);
	
	Window[ID] = new android.widget.PopupWindow(Buttons[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(Buttons[ID]);
}

function AddToggle(ID, Text1, Text2, TextSize1, TextSize2, Color1, Color2, Fuc, LongFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	Toggles[ID] = new android.widget.Button(GUI);
	Toggles[ID].setText(Text1);
	Toggles[ID].setTextSize(TextSize1);
	Toggles[ID].setTextColor(Color1);
	
	var Content = new android.view.View.OnClickListener() {
		onClick: function() {
			if (Toggles[ID].getText() == Text2) {
				Toggles[ID].setText(Text1);
				Toggles[ID].setTextSize(TextSize1);
				Toggles[ID].setTextColor(Color1);
			} else if (Toggles[ID].getText() == Text1) {
				Toggles[ID].setText(Text2);
				Toggles[ID].setTextSize(TextSize2);
				Toggles[ID].setTextColor(Color2);
			}
			
			Fuc();
		}
	}
	
	var LongContent = new android.view.View.OnLongClickListener() {
		onLongClick: function() {
			LongFuc();
			return true;
		}
	}
	
	Toggles[ID].setOnClickListener(Content);
	Toggles[ID].setOnLongClickListener(LongContent);
	
	Window[ID] = new android.widget.PopupWindow(Toggles[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(Toggles[ID]);
}

function AddTouch(ID, Text, TextSize, Color, TouchFuc, ReleaseFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	Touches[ID] = new android.widget.Button(GUI);
	Touches[ID].setText(Text);
	Touches[ID].setTextSize(TextSize);
	Touches[ID].setTextColor(Color);
	
	var TouchContent = new android.view.View.OnTouchListener() {
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
	}
	
	Touches[ID].setOnTouchListener(TouchContent);
	
	Window[ID] = new android.widget.PopupWindow(Touches[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(Touches[ID]);
}

function AddSeekBar(ID, Value, MaxValue, DragFuc, TouchFuc, ReleaseFuc, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	SeekBars[ID] = new android.widget.SeekBar(GUI);
	SeekBars[ID].setProgress(Value);
	SeekBars[ID].setMax(MaxValue);
	
	var SeekContent = new android.view.View.OnSeekBarChangeListener() {
		onProgressChanged: function() {
			DragFuc();
		},
		
		onStartTrackingTouch: function() {
			TouchFuc();
		},
		
		onStopTrackingTouch: function() {
			ReleaseFuc();
		}
	}
	
	SeekBars[ID].setOnSeekBarChangeListener(SeekContent);
	
	Window[ID] = new android.widget.PopupWindow(SeekBars[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(SeekBars[ID]);
}

function AddProgressBar(ID, Value, MaxValue, Size, Width, Height, XAlign, YAlign, XPosition, YPosition) {
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
	
	Window[ID] = new android.widget.PopupWindow(ProgressBars[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(ProgressBars[ID]);
}

function AddImageView(ID, URL, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	ImageViews[ID] = new android.widget.ImageView(GUI);
	
	var Connecter = new java.net.URL(URL).openConnection();
		Connecter.setDoInput(true);
		Connecter.connect();
	
	ImageViews[ID].setImageBitmap(BitmapFactory.decodeStream(Connecter.getInputStream()));
	
	Window[ID] = new android.widget.PopupWindow(ImageViews[ID], Width, Height);
	Window[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	Window[ID].setContentView(ImageViews[ID]);
}
