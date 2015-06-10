StatsKeeper.NewTeamController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newTeam = this.store.createRecord('team', {
        name: this.get('team-name')
      });
      this.set('players', [])
      newTeam.save();
      this.transitionToRoute('teams');
    }
  }
});
