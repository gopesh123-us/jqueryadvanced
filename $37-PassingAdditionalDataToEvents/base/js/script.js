$(function() {
  $("#content").on('click', {
    user: 'Gopesh Sharma' || "Anonymous",
    age: '53',
  }, function (event) {
    console.log("User age is " + event.data.age + " and user name is " + event.data.user);
    console.log(event);
  });
});