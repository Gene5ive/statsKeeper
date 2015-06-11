StatsKeeper.NewPlayerController = Ember.Controller.extend({
  needs: ['team'],
  actions: {
    save: function() {
      var player = this.store.createRecord('player', {
        name: this.get('player-name'),
        shotArray: [],
        shotPercentage: null,
        totalShots: null
      });
      player.save();
      var team = this.get('controllers.team.model');
      team.get('players').pushObject(player);
      team.save();
      this.transitionToRoute('team', team.id);
    }
  }
});
