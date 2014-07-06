var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

BonesApp.Views.BoneView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render);
  },
  tagName: 'li',
  template: _.template($('.bone-template').html()),
  render: function(){
    var renderedHTML = this.template(this.model.attributes);
    this.$el.html(renderedHTML);
    return this;
  },
  events:{
    'click [data-action="delete-bone"]': 'deleteBone',
    'click [data-action="edit-bone"]': 'editBone'
  },
  deleteBone: function(){
    this.model.destroy();
    return this;
  }
});
