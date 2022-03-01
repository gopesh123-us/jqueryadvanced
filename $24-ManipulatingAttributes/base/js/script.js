$(document).ready(function () {
  
  var galleryImage = $(".gallery").find("img").first();

  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];
  
  //switch image every 2 seconds
  var i = 0;
  setInterval(() => {
    i = (i + 1) % images.length;
    galleryImage.fadeOut(function () {
      $(this).attr("src", images[i]); 
      $(this).fadeIn();
      console.log(galleryImage.attr("src"));
    });
  }, 3000);

});
