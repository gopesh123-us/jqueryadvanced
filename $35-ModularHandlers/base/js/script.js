$(document).ready(function () {

  //code below works but commented for the gallery code to work

  $("html").on('click keydown', logEvent);

  //modularizing the handlers - giving names
  function logEvent() {
    console.log("Either mouse is clicked or key pressed");
  }

  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  var imageNum = 0;
  galleryImage.on('click', switchToNextImage);

  function switchToNextImage() {
    imageNum = (imageNum + 1) % images.length;
    galleryImage.fadeOut(function () {
      galleryImage.attr("src", images[imageNum]);
      galleryImage.fadeIn();
    });
  }

});