StatsKeeper.PlayerController = Ember.ObjectController.extend({
  needs: ['player'],
  actions: {
    delete: function() {
      if (confirm('are you sure')) {
        this.get('model').destroyRecord();
      }
    },
    shotMade: function() {
      var player = this.get('controllers.player.model');
      this.get('shotArray').pushObject(1);
      player.save();
    },
    shotMissed: function() {
      var player = this.get('controllers.player.model');
      this.get('shotArray').pushObject(0);
      player.save();
    },
    totalShots: function() {
      this.set("totalShots", this.get('shotArray').length);
    },
    percentage: function() {
      var array = this.get('shotArray');
      var made = array.reduce(function(a, b) {
        return a + b;
      });
      var total = this.get('shotArray').length;
      this.set("shotPercentage", (Math.floor((made / total) * 100)));
      $(".progress").html('<div class="progress-bar progress-bar-success" style="width: ' + this.get('shotPercentage') + '%"></div>' +
                          '<div class="progress-bar progress-bar-danger" style="width: ' + (100 - this.get('shotPercentage')) + '%"></div>'
      );
    }
  }
});

// baskets: function() {
//
// }.property('shotArray'),
// misses: function() {
//   var count = this.get('shotArray');
//   return (count.length - this.baskets);
// }.property('shotArray')
