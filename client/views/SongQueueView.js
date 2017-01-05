// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    SongQueueEntryView.prototype.render();

    this.collection.on('remove', this.render, this);
    this.collection.on('add', this.render, this);
  },

  render: function() {
    return this.$el;
  }

});
