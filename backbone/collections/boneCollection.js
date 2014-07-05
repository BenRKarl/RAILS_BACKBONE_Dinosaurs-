var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

var BonesApp.Collections.BoneCollection = Backbone.Collection.extend({
  model: BonesApp.Models.Bone,
  url: '/dinos'
});
