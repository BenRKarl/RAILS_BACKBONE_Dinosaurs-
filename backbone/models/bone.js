var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

BonesApp.Models.Bone = Backbone.Model.extend({
  defaults:{
    name    : "",
    size    : ""
  }
});
