// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    SongQueueEntryView.prototype.render();
    // console.log(this.collection);
    // this.collection.on('change', this.render, this);
    // this.listenTo(this.colle);
  },

  render: function() {
    return this.$el;
  }

});
