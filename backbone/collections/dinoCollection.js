var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

var BonesApp.Collections.DinoCollection = Backbone.Collection.extend({
  model: BonesApp.Models.Dino,
  url: '/dinos'
});
