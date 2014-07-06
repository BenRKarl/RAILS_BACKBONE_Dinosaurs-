var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

BonesApp.Collections.DinoCollection = Backbone.Collection.extend({
  model: BonesApp.Models.Dino
});
