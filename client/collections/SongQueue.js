// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      var firstModel = this.models.slice(0, 1);
      this.remove(firstModel);

      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      var firstModel = this.models.slice(0, 1);
      this.remove(firstModel);
    });
  },

  playFirst: function() {
    this.at(0).play();
  }

});