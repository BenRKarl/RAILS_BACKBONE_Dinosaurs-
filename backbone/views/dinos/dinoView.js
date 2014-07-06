var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

BonesApp.Views.DinoView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render);
  },
  tagName: 'li',
  addBoneTemplate: _.template($('.edit-bone-template').html()),
  editTemplate: _.template($('.edit-dino-template').html()),
  template: _.template($('.dino-template').html()),
  render: function(){
    var renderedHTML = this.template(this.model.attributes);
    this.$el.html(renderedHTML);
    var boneCollectionView = new BonesApp.Views.BoneListView({
      collection: this.model.get('bones'),
      el: this.$el.find('.bones-list')
    });
    return this;
  },
  events:{
    'click [data-action="delete"]': 'deleteDino',
    'click [data-action="edit"]': 'renderDinoEditForm'
  },
  deleteDino: function(){
    this.model.destroy();
    return this;
  },
  renderDinoEditForm: function(){
    var that = this;
    this.$el.html(this.editTemplate(this.model.attributes));
    this.$el.find('form').on('submit', function(event){
      event.preventDefault();
      var nameField = that.$el.find('.edit-name');
      var newName = nameField.val();
      var sizeField = that.$el.find('.edit-size');
      var newSize = sizeField.val();
      var speciesField = that.$el.find('.edit-species');
      var newSpecies = speciesField.val();
      that.model.set('name', newName);
      that.model.set('species', newSpecies);
      that.model.set('size', newSize);
      // that.model.save();
    })
    return this;
  }
});
