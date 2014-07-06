var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

BonesApp.Models.Dino = Backbone.Model.extend({
  initialize: function(){
    this.set('bones', new BonesApp.Collections.BoneCollection());
  },
  defaults:{
    name    : "",
    species : "",
    size    : ""
  }
});
