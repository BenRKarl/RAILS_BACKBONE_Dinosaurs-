var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

BonesApp.Views.BoneView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render);
  },
  tagName: 'li',
  template: _.template($('.bone-template').html()),
  editBoneTemplate: _.template($('.edit-bone-template').html()),
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
  },
  editBone: function(){
    var that = this;
    this.$el.html(this.editBoneTemplate(this.model.attributes));
    this.$el.find('form').on('submit', function(event){
      event.preventDefault();
      var nameField = that.$el.find('.edit-name');
      var newName = nameField.val();
      var sizeField = that.$el.find('.edit-size');
      var newSize = sizeField.val();
      that.model.save({name: newName, size: newSize});
    });
    return this;
  }
});
