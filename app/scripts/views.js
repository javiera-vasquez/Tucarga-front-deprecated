// Load foundation
Ember.View.reopen({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },
  afterRenderEvent : function(){
    $(document).foundation();
  }
});


App.DirectorioView = Ember.View.extend({
  didInsertElement : function(){
    this._super();
        var loopAd = $('#ad-loop').clone();
        $('.loop-list:first-child').after(loopAd);
  }
});
