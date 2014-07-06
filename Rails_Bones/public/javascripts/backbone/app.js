var BonesApp = BonesApp || { Models: {}, Collections: {}, Views: {} };

var dinos;

BonesApp.initialize = function(){
  dinos = new BonesApp.Collections.DinoCollection();

  var listView = new BonesApp.Views.DinoListView({
    el: $('.dino-list'),
    collection: dinos
  });

  dinos.fetch();
  bones.fetch();

  $('.dino-form').on('submit', function(event){
    event.preventDefault();
    var nameField = $('form.dino-form input.dino-name');
    var newName = nameField.val();
    var speciesField = $('form.dino-form input.dino-species');
    var newSpecies = speciesField.val();
    var sizeField = $('form.dino-form input.dino-size');
    var newSize = sizeField.val();
    var newDino = new BonesApp.Models.Dino({name: newName, species: newSpecies, size: newSize});
    dinos.create(newDino);
    nameField.val("");
    speciesField.val("");
    sizeField.val("");
  });
}

$(function(){
  BonesApp.initialize();
});
