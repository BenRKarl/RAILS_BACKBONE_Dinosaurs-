var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

BonesApp.Views.DinoListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'all', this.render);
  },
  render: function(){
    var that = this;
    // this.$el.empty();
    _.each(this.collection.models, function(dino){
      var newDinoView = new BonesApp.Views.DinoView({ model: dino });
      that.$el.append( newDinoView.render().el );
    });
    return this;
  }
})
