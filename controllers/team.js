Blogger.TeamController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    delete:function() {
      if(confirm('Are you sure?')){
        this.get('model').destroyRecord();
        this.transitionToRoute('teams');
      }
    },
  }
});
