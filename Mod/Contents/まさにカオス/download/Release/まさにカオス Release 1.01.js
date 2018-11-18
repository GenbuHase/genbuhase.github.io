var Badass;

function deathHook(murderer,victim){
	Badass = Level.spawnMob(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), Entity.getEntityTypeId(victim));
	Entity.addEffect(Badass, MobEffect.damageBoost && MobEffect.movementSpeed && MobEffect.regeneration, 1000000 * 20, 16, false, true);
}

function explodeHook(entity, x, y, z, power, fire) {
	if (Entity.getEntityTypeId(entity) == 33) {
		Badass = Level.spawnMob(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity), Entity.getEntityTypeId(entity));
		Entity.addEffect(Badass, MobEffect.damageBoost && MobEffect.regeneration, 1000000 * 20, 16, false, true);
	}
}
