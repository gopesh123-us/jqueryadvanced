$(document).ready(function () {

  //code below works but commented for the gallery code to work

  /* $("html").on('click keydown', function () {
    console.log("either mouse clicked or key pressed");
  }); */

  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  var imageNum = 0;
  galleryImage.on('click', function () {
    imageNum = (imageNum + 1) % images.length;
    galleryImage.fadeOut(function () {
      $(this).attr("src", images[imageNum]);
      $(this).fadeIn();
    });
  });  
});
