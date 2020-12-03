export const HashCharacter = {
    'Estudiante': 1,
    'Profesora': 2,
    'Secretaria': 3,
    'Fraile': 4
}
export const getCooldown = (player, cooldownChars) => {
    const cooldown = { ...cooldownChars }
    const missions = player.quests.available.player_trigger.missions
      cooldown.estudiante = missions.locked.estudiante_cooldown ? parseInt(missions.locked.estudiante_cooldown.repeatable_rules.time_left) : 0
      cooldown.fraile = missions.locked.fraile_cooldown ? parseInt(missions.locked.fraile_cooldown.repeatable_rules.time_left) : 0
      cooldown.secretaria = missions.locked.secretaria_cooldown ? parseInt(missions.locked.secretaria_cooldown.repeatable_rules.time_left) : 0
      cooldown.profesora = missions.locked.profesora_cooldown ? parseInt(missions.locked.profesora_cooldown.repeatable_rules.time_left) : 0
    return cooldown
}