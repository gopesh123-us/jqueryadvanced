$(function () {
  //We will deal with JSON DATA {}
  var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON(flickrApiUrl, {
    //options...
    tags: "hindu, india",
    tagmode: "any",
    format: "json"
  }).done(function (data) {
    //success
    console.log(data);
    $.each(data.items, function (index, item) {
      console.log(item);
      $("<img>").attr("src", item.media.m).appendTo("#flickr");
      if (index == 4) {
        return false;
      }
    });
  }).fail(function () {
    //fail
    alert("AJAX call failed");
  }); //asynchronous call
});