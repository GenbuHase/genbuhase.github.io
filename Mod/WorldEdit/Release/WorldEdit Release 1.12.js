/*/
 *#######################################################
 *WorldEdit Release 1.12
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

/*/
 *------------------------------
 *             IDs
 *------------------------------
/*/
var Items = {
	SelectAxe1: 501,
	SelectAxe2: 502,
	IDChecker: 503
}

/*/
 *------------------------------
 *         System Args
 *------------------------------
/*/
var Location = {
	X1: undefined,
	X2: undefined,
	Y1: undefined,
	Y2: undefined,
	Z1: undefined,
	Z2: undefined
}

var Directory = {
	SD: android.os.Environment.getExternalStorageDirectory().getPath(),
	Dir: android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/WorldEdit",
}

var XMax;
var XMin;
var YMax;
var YMin;
var ZMax;
var ZMin;

/*/
 *------------------------------
 *        Hook Functions
 *------------------------------
/*/
function useItem(X, Y, Z, ItemID, BlockID, Side, ItemDamage, BlockDamage) {
	switch (ItemID) {
		case Items.SelectAxe1:
			Location.X1 = X;
			Location.Y1 = Y;
			Location.Z1 = Z;

			Area();
			break;

		case Items.SelectAxe2:
			Location.X2 = X;
			Location.Y2 = Y;
			Location.Z2 = Z;

			Area();
			break;
			
		case Items.IDChecker:
			clientMessage("タップしたブロックのID：" + BlockID);
			clientMessage("タップしたブロックのダメージ値：" + BlockDamage);
			break;
	}
}

function newLevel() {
	AddItems();
	SetCategory();
	
	try {
		CreateGUI(function() {
			SetOnPopUpWindow(0,
				AddButton(0, "WorldEdit", 10, Color.Magenta, function() {
					XMax = Math.max(Location.X1, Location.X2);
					XMin = Math.min(Location.X1, Location.X2);
					YMax = Math.max(Location.Y1, Location.Y2);
					YMin = Math.min(Location.Y1, Location.Y2);
					ZMax = Math.max(Location.Z1, Location.Z2);
					ZMin = Math.min(Location.Z1, Location.Z2);
					
					SetOnDialog(0, "WorldEdit メニュー",
						AddScrollView(0,
							AddLinearLayout(0, "Vertical",
								[
									AddButton(1, "Set", Size.Wrap, Color.Magenta, function() {
										SetOnDialog(1, "WorldEdit == Set",
											AddLinearLayout(0, "Vertical",
												[
													AddTextView(0, "ブロックID:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(0, "", Color.Yellow, Color.Red),
												
													AddTextView(1, "ダメージ値:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(1, "", Color.Yellow, Color.Red),
												
													AddButton(10, "確定", Size.Wrap, Color.Magenta, function() {
														Set(parseInt(EditTexts[0].getText()), parseInt(EditTexts[1].getText()));
													}, function() {
													
													})
												]
											)
										)
									}, function() {
									
									}),
								
									AddButton(2, "Box", Size.Wrap, Color.Magenta, function() {
										SetOnDialog(2, "WorldEdit == Box",
											AddLinearLayout(0, "Vertical",
												[
													AddTextView(0, "ブロックID:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(0, "", Color.Yellow, Color.Red),
												
													AddTextView(1, "ダメージ値:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(1, "", Color.Yellow, Color.Red),
												
													AddButton(10, "確定", Size.Wrap, Color.Yellow, function() {
														Box(parseInt(EditTexts[0].getText()), parseInt(EditTexts[1].getText()));
													}, function() {
													
													})
												]
											)
										)
									}, function() {
									
									}),
								
									AddButton(3, "Wall", Size.Wrap, Color.Magenta, function() {
										SetOnDialog(3, "WorldEdit == Wall",
											AddLinearLayout(0, "Vertical",
												[
													AddTextView(0, "ブロックID:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(0, "", Color.Yellow, Color.Red),
												
													AddTextView(1, "ダメージ値:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(1, "", Color.Yellow, Color.Red),
												
													AddButton(10, "確定", Size.Wrap, Color.Yellow, function() {
														Wall(parseInt(EditTexts[0].getText()), parseInt(EditTexts[1].getText()));
													}, function() {
													
													})
												]
											)
										)
									}, function() {
									
									}),
									
									AddButton(4, "Circle", Size.Wrap, Color.Magenta, function() {
										SetOnDialog(4, "WorldEdit == Circle",
											AddLinearLayout(0, "Vertical",
												[
													AddTextView(0, "半径:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(0, "", Color.Yellow, Color.Red),
													
													AddTextView(1, "高さ:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(1, "", Color.Yellow, Color.Red),
													
													AddTextView(2, "ブロックID:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(2, "", Color.Yellow, Color.Red),
													
													AddTextView(3, "ダメージ値:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(3, "", Color.Yellow, Color.Red),
													
													AddButton(10, "確定", Size.Wrap, Color.Yellow, function() {
														Circle(parseInt(EditTexts[0].getText()), parseInt(EditTexts[1].getText()), parseInt(EditTexts[2].getText()), parseInt(EditTexts[3].getText()));
													}, function() {
													
													})
												]
											)
										)
									}, function() {
									
									}),
								
									AddButton(5, "Ball", Size.Wrap, Color.Magenta, function() {
										SetOnDialog(5, "WorldEdit == Ball",
											AddLinearLayout(0, "Vertical",
												[
													AddButton(11, "Shape", Size.Wrap, Color.Magenta, function() {
														SetOnDialog(11, "WorldEdit == Ball(Shape)",
															AddLinearLayout(0, "Vertical",
																[
																	AddTextView(0, "半径:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
																	AddEditText(0, "", Color.Yellow, Color.Red),
																
																	AddTextView(1, "ブロックID:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
																	AddEditText(1, "", Color.Yellow, Color.Red),
																
																	AddTextView(2, "ダメージ値:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
																	AddEditText(2, "", Color.Yellow, Color.Red),
																
																	AddButton(10, "確定", Size.Wrap, Color.Yellow, function() {
																		Ball("Shape", parseInt(EditTexts[0].getText()), parseInt(EditTexts[1].getText()), parseInt(EditTexts[2].getText()));
																	}, function() {
																	
																	})
																]
															)
														)
													}, function() {
													
													}),
												
													AddButton(12, "Fill", Size.Wrap, Color.Magenta, function() {
														SetOnDialog(11, "WorldEdit == Ball(Fill)",
															AddLinearLayout(0, "Vertical",
																[
																	AddTextView(0, "半径:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
																	AddEditText(0, "", Color.Yellow, Color.Red),
																
																	AddTextView(1, "ブロックID:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
																	AddEditText(1, "", Color.Yellow, Color.Red),
																
																	AddTextView(2, "ダメージ値:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
																	AddEditText(2, "", Color.Yellow, Color.Red),
																
																	AddButton(10, "確定", Size.Wrap, Color.Yellow, function() {
																		Ball("Fill", parseInt(EditTexts[0].getText()), parseInt(EditTexts[1].getText()), parseInt(EditTexts[2].getText()));
																	}, function() {
																	
																	})
																]
															)
														)
													}, function() {
													
													})
												]
											)
										)
									}, function() {
									
									}),
									
									AddButton(6, "Pyramid", Size.Wrap, Color.Magenta, function() {
										SetOnDialog(6, "WorldEdit == Pyramid",
											AddLinearLayout(0, "Vertical",
												[
													AddTextView(0, "ブロックID:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(0, "", Color.Yellow, Color.Red),
												
													AddTextView(1, "ダメージ値:", Size.Wrap, Color.Magenta, Align.Left, Align.Center, function(){}, function(){}),
													AddEditText(1, "", Color.Yellow, Color.Red),
												
													AddButton(10, "確定", Size.Wrap, Color.Yellow, function() {
														Pyramid(parseInt(EditTexts[0].getText()), parseInt(EditTexts[1].getText()));
													}, function() {
													
													})
												]
											)
										)
									}, function() {
									
									}),

									AddButton(7, "Copy", Size.Wrap, Color.Magenta, function() {
										Copy();
									}, function() {
									
									}),

									AddButton(8, "Cut", Size.Wrap, Color.Magenta, function() {
										Cut();
									}, function() {
									
									}),

									AddButton(9, "Paste", Size.Wrap, Color.Magenta, function() {
										Paste();
									}, function() {
									
									}),
								]
							)
						)
					)
				}, function(){}
			), Size.Wrap, Size.Wrap, Align.Right, Align.Center, 0, -100)
		});
	} catch (Error) {
		clientMessage(Error);
	}
}

function leaveGame() {
	Location.X1, Location.X2 = undefined;
	Location.Y1, Location.Y2 = undefined;
	Location.Z1, Location.Z2 = undefined;
	
	DeleteGUI(0);
}

/*/
 *------------------------------
 *      Defined Functions
 *------------------------------
/*/
function AddItems() {
	ModPE.setItem(Items.SelectAxe1, "axe", 0, "選択ツール1", 1);
	ModPE.setItem(Items.SelectAxe2, "axe", 0, "選択ツール2", 1);
	ModPE.setItem(Items.IDChecker, "blaze_rod", 0, "ID Checker", 1);
}

function SetCategory() {
	Item.setCategory(Items.SelectAxe1, ItemCategory.TOOL);
	Player.addItemCreativeInv(Items.SelectAxe1, 1, 0);

	Item.setCategory(Items.SelectAxe2, ItemCategory.TOOL);
	Player.addItemCreativeInv(Items.SelectAxe2, 1, 0);
	
	Item.setCategory(Items.IDChecker, ItemCategory.TOOL);
	Player.addItemCreativeInv(Items.IDChecker, 1, 0);
}

function Area() {
	clientMessage("始点X：" + Location.X1);
	clientMessage("始点Y：" + Location.Y1);
	clientMessage("始点Z：" + Location.Z1);

	clientMessage("終点X：" + Location.X2);
	clientMessage("終点Y：" + Location.Y2);
	clientMessage("終点Z：" + Location.Z2);
}

function Set(BlockID, BlockData) {
	if (Location.X1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.X2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z2 == undefined) {
		clientMessage("選択範囲がありません");
	} else {
		for (var X = XMax - XMin; X >= 0; X--) {
			for (var Y = YMax - YMin; Y >= 0; Y--) {
				for (var Z = ZMax - ZMin; Z >= 0; Z--) {
					Level.setTile(XMin + X, YMin + Y, ZMin + Z, BlockID, BlockData);
				}
			}
		}

		print("整地完了");
	}
}

function Box(BlockID, BlockData) {
	if (Location.X1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.X2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z2 == undefined) {
		clientMessage("選択範囲がありません");
	} else {
		for (var X = XMax - XMin; X >= 0; X--) {
			for (var Y = YMax - YMin; Y >= 0; Y--) {
				for (var Z = ZMax - ZMin; Z >= 0; Z--) {
					Level.setTile(XMin + X, YMin + Y, ZMin + Z, BlockID, BlockData);
				}
			}
		}

		for (var X = XMax - XMin - 1; X >= 1; X--) {
			for (var Y = YMax - YMin - 1; Y >= 1; Y--) {
				for (var Z = ZMax - ZMin - 1; Z >= 1; Z--) {
					Level.setTile(XMin + X, YMin + Y, ZMin + Z, 0, 0);
				}
			}
		}

		print("整地完了");
	}
}

function Wall(BlockID, BlockData) {
	if (Location.X1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.X2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z2 == undefined) {
		clientMessage("選択範囲がありません");
	} else {
		for (var X = XMax - XMin; X >= 0; X--) {
			for (var Y = YMax - YMin; Y >= 0; Y--) {
				for (var Z = ZMax - ZMin; Z >= 0; Z--) {
					Level.setTile(XMin + X, YMin + Y, ZMin + Z, BlockID, BlockData);
				}
			}
		}
				
		for (var X = XMax - XMin - 1; X >= 1; X--) {
			for (var Y = YMax - YMin; Y >= 0; Y--) {
				for (var Z = ZMax - ZMin - 1; Z >= 1; Z--) {
					Level.setTile(XMin + X, YMin + Y, ZMin + Z, 0, 0);
				}
			}
		}

		print("整地完了");
	}
}

function Circle(Range, Height, BlockID, BlockData) {
	if (Range == undefined) {
		clientMessage("半径を入力してください");
	} else if (Height == undefined) {
		clientMessage("高さを入力してください");
	} else if (BlockID == undefined) {
		clientMessage("IDを入力してください");
	} else {
		for (var i = 0; i < Height; i++) {
			for (var j = 0; j < Range; j++) {
				//X基準
				Level.setTile(Math.floor(Player.getX()) + j, Math.floor(Player.getY()) - 2 + i, Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(j, 2)) + Math.floor(Player.getZ())), BlockID, BlockData);
				Level.setTile(Math.floor(Player.getX()) - j, Math.floor(Player.getY()) - 2 + i, Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(j, 2)) + Math.floor(Player.getZ())), BlockID, BlockData);
				Level.setTile(Math.floor(Player.getX()) + j, Math.floor(Player.getY()) - 2 + i, -1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(j, 2)) - Math.floor(Player.getZ())), BlockID, BlockData);
				Level.setTile(Math.floor(Player.getX()) - j, Math.floor(Player.getY()) - 2 + i, -1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(j, 2)) - Math.floor(Player.getZ())), BlockID, BlockData);
				
				//Z基準
				Level.setTile(Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(j, 2)) + Math.floor(Player.getX())), Math.floor(Player.getY()) - 2 + i, Math.floor(Player.getZ()) + j, BlockID, BlockData);
				Level.setTile(Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(j, 2)) + Math.floor(Player.getX())), Math.floor(Player.getY()) - 2 + i, Math.floor(Player.getZ()) - j, BlockID, BlockData);
				Level.setTile(-1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(j, 2)) - Math.floor(Player.getX())), Math.floor(Player.getY()) - 2 + i, Math.floor(Player.getZ()) + j, BlockID, BlockData);
				Level.setTile(-1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(j, 2)) - Math.floor(Player.getX())), Math.floor(Player.getY()) - 2 + i, Math.floor(Player.getZ()) - j, BlockID, BlockData);
			}
		}
		
		print("整地完了");
	}
}

function Ball(Type, Range, BlockID, BlockData) {
	if (Range == undefined) {
		clientMessage("半径を入力してください");
	} else if (BlockID == undefined) {
		clientMessage("IDを入力してください");
	} else {
		switch (Type.toLowerCase().toString()) {
			case "shape":
				for (var i = 0; i < parseInt(Range) + 2; i++) {
					for (var j = 0; j < parseInt(Range) + 2; j++) {
						for (var k = 0; k < parseInt(Range) + 2; k++) {
							if (Range > Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2))) {
								//XY基準
								Level.setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) + j, Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) - j, Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) + j, Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) - j, Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) + j, -1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) - j, -1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) + j, -1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) - j, -1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
								
								//YZ基準
								Level.setTile(Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) + j, BlockID, BlockData);
								Level.setTile(Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) - j, BlockID, BlockData);
								Level.setTile(Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) + j, BlockID, BlockData);
								Level.setTile(Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) - j, BlockID, BlockData);
								Level.setTile(-1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) + j, BlockID, BlockData);
								Level.setTile(-1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) - j, BlockID, BlockData);
								Level.setTile(-1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) + j, BlockID, BlockData);
								Level.setTile(-1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) - j, BlockID, BlockData);
								
								//ZX基準
								Level.setTile(Math.floor(Player.getX()) + i, Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) + i, Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) - i, Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) - i, Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) + i, -1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) + i, -1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) - i, -1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, BlockID, BlockData);
								Level.setTile(Math.floor(Player.getX()) - i, -1 * Math.round(Math.sqrt(Math.pow(Range, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, BlockID, BlockData);
							}
						}
					}
				}
				
				break;
				
			case "fill":
				for (var l = 0; Range - l > 0; l++) {
					for (var i = 0; i < parseInt(Range) + 2; i++) {
						for (var j = 0; j < parseInt(Range) + 2; j++) {
							for (var k = 0; k < parseInt(Range) + 2; k++) {
								if (Range > Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2))) {
									//XY基準
									Level.setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) + j, Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) - j, Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) + j, Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) - j, Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) + j, -1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) + i, Math.floor(Player.getY()) - j, -1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) + j, -1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) - i, Math.floor(Player.getY()) - j, -1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getZ()), BlockID, BlockData);
									
									//YZ基準
									Level.setTile(Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) + j, BlockID, BlockData);
									Level.setTile(Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) - j, BlockID, BlockData);
									Level.setTile(Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) + j, BlockID, BlockData);
									Level.setTile(Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) - j, BlockID, BlockData);
									Level.setTile(-1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) + j, BlockID, BlockData);
									Level.setTile(-1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) + i, Math.floor(Player.getZ()) - j, BlockID, BlockData);
									Level.setTile(-1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) + j, BlockID, BlockData);
									Level.setTile(-1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getX()), Math.floor(Player.getY()) - i, Math.floor(Player.getZ()) - j, BlockID, BlockData);
									
									//ZX基準
									Level.setTile(Math.floor(Player.getX()) + i, Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) + i, Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) - i, Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) - i, Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) + i, -1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) + i, -1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) - i, -1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) + j, BlockID, BlockData);
									Level.setTile(Math.floor(Player.getX()) - i, -1 * Math.round(Math.sqrt(Math.pow(Range - l, 2) - Math.pow(i, 2) - Math.pow(j, 2))) + Math.floor(Player.getY()), Math.floor(Player.getZ()) - j, BlockID, BlockData);
								}
							}
						}
					}
				}
				
				break;
		}

		print("整地完了");
	}
}

function Pyramid(BlockID, BlockData) {
	if (Location.X1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.X2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z2 == undefined) {
		clientMessage("選択範囲がありません");
	} else {
		for (var Y = 0; Y <= YMax - YMin; Y++) {
			for (var X = Y; X <= XMax - XMin - Y; X++) {
				for (var Z = Y; Z <= ZMax - ZMin - Y; Z++) {
					Level.setTile(XMin + X, YMin + Y, ZMin + Z, BlockID, BlockData);
				}
			}
		}
	}
}

function Copy() {
	if (Location.X1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.X2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z2 == undefined) {
		clientMessage("選択範囲がありません");
	} else {
		try {
			if(!java.io.File(Directory.Dir).exists()) {
				java.io.File(Directory.Dir).mkdirs();
				java.io.File(Directory.Dir + "/Save").mkdirs();
			} else if(!java.io.File(Directory.Dir + "/Save").exists()) {
				java.io.File(Directory.Dir + "/Save").mkdirs();
			}
					
			var StateFile = new java.io.BufferedWriter(new java.io.FileWriter(new java.io.File(Directory.Dir + "/Save/BlockState.map"), false));
					
			for (var X = 0; X <= XMax - XMin; X++) {
				for (var Y = 0; Y <= YMax - YMin; Y++) {
					for (var Z = 0; Z <= ZMax - ZMin; Z++) {
						StateFile.write(Level.getTile(XMin + X, YMin + Y, ZMin + Z) + ",");
					}
				}
			}
					
			StateFile.newLine();
					
			for (var X = 0; X <= XMax - XMin; X++) {
				for (var Y = 0; Y <= YMax - YMin; Y++) {
					for (var Z = 0; Z <= ZMax - ZMin; Z++) {
						StateFile.write(Level.getData(XMin + X, YMin + Y, ZMin + Z) + ",");
					}
				}
			}

			StateFile.newLine();

			for (var X = 0; X <= XMax - XMin; X++) {
				for (var Y = 0; Y <= YMax - YMin; Y++) {
					for (var Z = 0; Z <= ZMax - ZMin; Z++) {
						StateFile.write(X + ",");
					}
				}
			}

			StateFile.newLine();

			for (var X = 0; X <= XMax - XMin; X++) {
				for (var Y = 0; Y <= YMax - YMin; Y++) {
					for (var Z = 0; Z <= ZMax - ZMin; Z++) {
						StateFile.write(Y + ",");
					}
				}
			}

			StateFile.newLine();

			for (var X = 0; X <= XMax - XMin; X++) {
				for (var Y = 0; Y <= YMax - YMin; Y++) {
					for (var Z = 0; Z <= ZMax - ZMin; Z++) {
						StateFile.write(Z + ",");
					}
				}
			}
					
			StateFile.newLine();
			StateFile.write(Math.round(Player.getX()).toString() + "," + Math.round(Player.getY()).toString() + "," + Math.round(Player.getZ()).toString());
					
			StateFile.newLine();
			StateFile.write(Location.X1 + "," + Location.Y1 + "," + Location.Z1 + "," + Location.X2 + "," + Location.Y2 + "," + Location.Z2);
					
			StateFile.close();

			print("コピー完了");
		} catch (Error) {
			print("エラーが発生しました");
			print(Error);
		}
	}
}

function Cut() {
	if (Location.X1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.X2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Y2 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z1 == undefined) {
		clientMessage("選択範囲がありません");
	} else if (Location.Z2 == undefined) {
		clientMessage("選択範囲がありません");
	} else {
		try {
			if(!java.io.File(Directory.Dir).exists()) {
				java.io.File(Directory.Dir).mkdirs();
				java.io.File(Directory.Dir + "/Save").mkdirs();
			} else if(!java.io.File(Directory.Dir + "/Save").exists()) {
				java.io.File(Directory.Dir + "/Save").mkdirs();
			}

			var StateFile = new java.io.BufferedWriter(new java.io.FileWriter(new java.io.File(Directory.Dir + "/Save/BlockState.map"), false));

			for (var X = 0; X <= XMax - XMin; X++) {
				for (var Y = 0; Y <= YMax - YMin; Y++) {
					for (var Z = 0; Z <= ZMax - ZMin; Z++) {
						StateFile.write(Level.getTile(XMin + X, YMin + Y, ZMin + Z) + ",");
					}
				}
			}
					
			StateFile.newLine();
					
			for (var X = 0; X <= XMax - XMin; X++) {
				for (var Y = 0; Y <= YMax - YMin; Y++) {
					for (var Z = 0; Z <= ZMax - ZMin; Z++) {
						StateFile.write(Level.getData(XMin + X, YMin + Y, ZMin + Z) + ",");
					}
				}
			}

			StateFile.newLine();

			for (var X = 0; X <= XMax - XMin; X++) {
				for (var Y = 0; Y <= YMax - YMin; Y++) {
					for (var Z = 0; Z <= ZMax - ZMin; Z++) {
						StateFile.write(X + ",");
					}
				}
			}

			StateFile.newLine();

			for (var X = 0; X <= XMax - XMin; X++) {
				for (var Y = 0; Y <= YMax - YMin; Y++) {
					for (var Z = 0; Z <= ZMax - ZMin; Z++) {
						StateFile.write(Y + ",");
					}
				}
			}

			StateFile.newLine();

			for (var X = 0; X <= XMax - XMin; X++) {
				for (var Y = 0; Y <= YMax - YMin; Y++) {
					for (var Z = 0; Z <= ZMax - ZMin; Z++) {
						StateFile.write(Z + ",");
					}
				}
			}
					
			StateFile.newLine();
			StateFile.write(Math.round(Player.getX()).toString() + "," + Math.round(Player.getY()).toString() + "," + Math.round(Player.getZ()).toString());
					
			StateFile.newLine();
			StateFile.write(Location.X1 + "," + Location.Y1 + "," + Location.Z1 + "," + Location.X2 + "," + Location.Y2 + "," + Location.Z2);
					
			StateFile.close();

			for (var X = 0; X <= XMax - XMin; X++) {
				for (var Y = 0; Y <= YMax - YMin; Y++) {
					for (var Z = 0; Z <= ZMax - ZMin; Z++) {
						Level.setTile(XMin + X, YMin + Y, ZMin + Z, 0, 0);
					}
				}
			}

			print("カット完了");
		} catch (Error) {
			print("エラーが発生しました");
			print(Error);
		}
	}
}

function Paste() {
	new java.lang.Thread(function() {
		try {
			if (!java.io.File(Directory.Dir + "/Save/BlockState.map").exists()) {
				clientMessage("コピーされていません");
			} else {
				var StateFile = new java.io.BufferedReader(new java.io.FileReader(new java.io.File(Directory.Dir + "/Save/BlockState.map")));

				var BlockID = StateFile.readLine().split(",");
				var BlockData = StateFile.readLine().split(",");
				var X = StateFile.readLine().split(",");
				var Y = StateFile.readLine().split(",");
				var Z = StateFile.readLine().split(",");
				var Position = StateFile.readLine().split(",");
				var Coordinate = StateFile.readLine().split(",");

				StateFile.close();

				for (var i = 0; i < BlockID.length; i++) {
					Level.setTile(Player.getX() + parseInt(X[i]), Player.getY() + parseInt(Y[i]), Player.getZ() + parseInt(Z[i]), parseInt(BlockID[i]), parseInt(BlockData[i]));
				}

				print("ペースト完了");
			}
		} catch (Error) {
			print("エラーが発生しました");
			print(Error);
		}
	}).start();
}


/*/
 *#######################################################
 *GUI Helper Release 1.10
 *Copyright (C) 2015 Genbu Hase All Rights Reserved.
 *#######################################################
/*/

/*/
 *------------------------------
 *         System Args
 *------------------------------
/*/
var GUI = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var PopUpWindow = [];
var Dialogs = [];

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
	ARGB: function(A, R, G, B) {android.graphics.Color.argb(A, R, G, B)}
}

var Size = {
	Wrap: android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
	Match: android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
	Fill: android.widget.LinearLayout.LayoutParams.FILL_PARENT
}

var Touch = {
	Press: android.view.MotionEvent.ACTION_DOWN,
	Release: android.view.MotionEvent.ACTION_UP
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
				PopUpWindow[ID].dismiss();
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
				for (var i = 0; i < PopUpWindow.length; i++) {
					PopUpWindow[i].dismiss();
				}
			} catch (Error) {
				print("エラーが発生しました");
				clientMessage(Error);
			}
		}
	}))
}

function SetOnPopUpWindow(ID, Content, Width, Height, XAlign, YAlign, XPosition, YPosition) {
	PopUpWindow[ID] = new android.widget.PopupWindow(Content, Width, Height);
	PopUpWindow[ID].showAtLocation(GUI.getWindow().getDecorView(), XAlign|YAlign, XPosition, YPosition);
	
	PopUpWindow[ID].setContentView(Content);
}

function SetOnDialog(ID, Title, Content) {
	Dialogs[ID] = new android.app.Dialog(GUI);
	Dialogs[ID].setTitle(Title);
	
	Dialogs[ID].setContentView(Content);
	Dialogs[ID].show();
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

	return TextViews[ID];
}

function AddButton(ID, Text, TextSize, Color, Fuc, LongFuc) {
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

	return Buttons[ID];
}

function AddToggle(ID, Text1, Text2, TextSize1, TextSize2, Color1, Color2, Fuc1, Fuc2, LongFuc) {
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
				
				Fuc1();
			} else if (Toggles[ID].getText() == Text1) {
				Toggles[ID].setText(Text2);
				Toggles[ID].setTextSize(TextSize2);
				Toggles[ID].setTextColor(Color2);
				
				Fuc2();
			}
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

	return Toggles[ID];
}

function AddTouch(ID, Text, TextSize, Color, TouchFuc, ReleaseFuc) {
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
	
	var ChangeContent = new android.view.View.OnClickListener() {
		onClick: function() {
			ChangeFuc();
		}
	}
	
	CheckBoxes[ID].setOnClickListener(ChangeContent);
	
	return CheckBoxes[ID];
}

function AddSeekBar(ID, Value, MaxValue, DragFuc, TouchFuc, ReleaseFuc) {
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

function AddImageButton(ID, Mode, URL) {
	ImageButtons[ID] = new android.widget.ImageButtons(GUI);
	
	switch(Mode.toLowerCase().toString()) {
		case "local":
			try {
				ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(new java.io.FileInputStream(new java.io.File(URL))));
			} catch(Error) {
				clientMessage(Error);
				print("ファイルが存在しません");
			}
			
			break;
			
		case "network":
			try {
				var Connecter = new java.net.URL(URL).openConnection();
					Connecter.setDoInput(true);
					Connecter.connect();
		
				ImageButtons[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(Connecter.getInputStream()));
			} catch(Error) {
				clientMessage(Error);
				print("インターネットに接続されていないかAndroid 4.0以上です");
			}
			
			break;
	}
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

		case "network":
			try {
				var Connecter = new java.net.URL(URL).openConnection();
					Connecter.setDoInput(true);
					Connecter.connect();
		
				ImageViews[ID].setImageBitmap(android.graphics.BitmapFactory.decodeStream(Connecter.getInputStream()));
			} catch(Error) {
				clientMessage(Error);
				print("インターネットに接続されていないかAndroid 4.0以上です");
			}

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
