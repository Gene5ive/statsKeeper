StatsKeeper.Player = DS.Model.extend({
  name: DS.attr(),
  shotArray: DS.attr(),
  shotPercentage: DS.attr(),
  totalShots: DS.attr(),
  team: DS.belongsTo('team', {async: true})
});
