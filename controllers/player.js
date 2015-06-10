StatsKeeper.PlayerController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm('are you sure')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
