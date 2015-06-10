StatsKeeper.Router.map(function() {
  this.resource('teams', {path: '/'});
  this.resource('new-team');
  this.resource('team', {path: ':team_id'}, function() {
    this.resource('new-player');
  });
});
