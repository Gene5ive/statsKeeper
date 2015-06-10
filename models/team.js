StatsKeeper.Team = DS.Model.extend({
  name: DS.attr(),
  players: DS.hasMany('player', {async: true})
});
