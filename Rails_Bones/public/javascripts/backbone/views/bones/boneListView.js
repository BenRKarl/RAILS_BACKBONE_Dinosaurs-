var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

BonesApp.Views.BoneListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'all', this.render);
  },
  render: function(){
    var that = this;
    this.$el.empty()
    _.each(this.collection.models, function(bone){
      var newBoneView = new BonesApp.Views.BoneView({model: bone});
      that.$el.append( newBoneView.render().el )
    });
    return this;
  }
})
