$(function(){

  $("#save").click(function () {
    localStorage["snippet-text"] = $("#snippet-text").val();
  });

  if (localStorage["snippet-text"]) {
    $("#snippet-text").val(localStorage["snippet-text"]);
  }

});

