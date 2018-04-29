$(function(){

  $(document).ready(function() {
    $("#clip-text").focus();
    document.execCommand('paste');
  });


  if (localStorage["snippet-text"]) {
    $("#snippet-text").text(localStorage["snippet-text"]);
  } else {
    $("#snippet-text").text("no set");
  }

  $("#search").click(function () {
    var textList = $("#clip-text").val().split("\n");
    textList = textList.filter(Boolean);
    if (textList.length > 20) {
      $("#notice").text('クリップボード行数が長すぎます。20行以内にしてください。');
    } else {
    $.each(textList, function(index, val) {
      chrome.tabs.create({url: (
        'https://www.google.com/search?num=20&q=' +
        val + "+" +
        localStorage["snippet-text"])
      });
    });
    }
  });
});

