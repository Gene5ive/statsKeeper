StatsKeeper.ShotAttempt = DS.Model.extend({
  shotAttempt: DS.belongsTo('player', {async: true})
});
