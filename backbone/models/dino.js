var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

BonesApp.Models.Dino = Backbone.Model.extend({
  defaults:{
    name    : "",
    species : "",
    size    : ""
  }
});
