var Badass;

function deathHook(murderer,victim){
	Badass = Level.spawnMob(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), Entity.getEntityTypeId(victim));
	Entity.addEffect(Badass, MobEffect.damageBoost && MobEffect.movementSpeed && MobEffect.regeneration, 1000000 * 20, 16, false, true);
}
