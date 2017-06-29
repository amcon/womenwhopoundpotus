$(function() {

  console.log("lit");

  $("#top").click(function(event) {
    $("html, body").animate({ scrollTop: 0}, "slow");
  });

  $("#press").click(function(event) {
    $(".press-photos").css('margin-top', '100px');
    $(".press-img").css('height', '300px');
    $(".bottom").css('height', '260px');
  });

});
