$(function() {

  console.log("lit");

  $("#top").click(function(event) {
    $("html, body").animate({ scrollTop: 0}, "slow");
  });

});
