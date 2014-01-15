// Load foundation + stiky footer to all pages
Ember.View.reopen({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },
  afterRenderEvent : function(){
    $(document).foundation();
    $('.has-dropdown a.false').click(function() {
        return false;
    })
  }
});
