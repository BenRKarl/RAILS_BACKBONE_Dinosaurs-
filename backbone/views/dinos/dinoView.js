var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

BonesApp.Views.DinoView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render);
  },
  tagName: 'li',
  template: _.template($('.dino-template').html()),
  render: function(){
    var renderedHTML = this.template(this.model.attributes);
    this.$el.html(renderedHTML);
    return this;
  },
  events:{
    'click [data-action="delete"]': 'deleteDino'
  },
  deleteDino: function(){
    this.model.destroy();
    return this;
  }
});
