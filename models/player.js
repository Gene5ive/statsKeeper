StatsKeeper.Player = DS.Model.extend({
  name: DS.attr(),
  team: DS.belongsTo('team', {async: true})
  // shotAttempt: DS.hasMany('shotAttempts', {async: true})
})
