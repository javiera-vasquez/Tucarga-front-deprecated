// Load foundation + stiky footer to all pages
Ember.View.reopen({
  didInsertElement : function(){
    this._super();
    $(document).foundation();
    $('.has-dropdown a.false').click(function() {
        return false;
    })
  }
});

// App.IndexView = Ember.View.extend({
//   didInsertElement : function(){
//     this._super();
//     $('#header').show();
//     $(document).foundation();
//     $('.has-dropdown a.false').click(function() {
//         return false;
//     })
// });

App.ApplicationView = Ember.View.extend({
  didInsertElement : function(){
    this._super();
        var loopAd = $('#ad-loop').clone();
        $('.loop-list:first-child').after(loopAd);
  }
});

App.RegistroView = Ember.View.extend({
  didInsertElement: function(){
    this._super();
    $('#header').hide();
    $('.radiobuttons.type li').on('click',  function() {
        $('.radiobuttons.type li').removeClass('active');
        $(this).addClass('active');
    });
    $('.radiobuttons.truck .awnser-yes').on('click',  function() {
      $('.awnser.truck').show();
    });
    $('.radiobuttons.storage .awnser-yes').on('click',  function() {
      $('.awnser.storage').show();
    });
    $('.radiobuttons.truck .awnser-no').on('click',  function() {
      $('.awnser.truck').hide();
    });
    $('.radiobuttons.storage .awnser-no').on('click',  function() {
      $('.awnser.storage').hide();
    });
  }
});
