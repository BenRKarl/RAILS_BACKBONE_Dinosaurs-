var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

BonesApp.Collections.BoneCollection = Backbone.Collection.extend({
  model: BonesApp.Models.Bone,
  url: '/dinos'
});
