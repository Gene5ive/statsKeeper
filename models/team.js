StatsKeeper.Team = DS.Model.extend({
  name: DS.attr(),
  topPlayer: DS.attr(),
  players: DS.hasMany('player', {async: true})
});
