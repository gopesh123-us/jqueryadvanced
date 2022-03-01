$(document).ready(function () {
  //select form
  $("#form").submit(function (event) {
    //gather all the inputs 
    var name = $("#name").val();
    var password = $("#password").val();
    var isChecked = $("#checkbox").is(":checked"); //to get the boolean value
    var message = $("#message").val();

    validateNameField(name, event);
    validatePasswordField(password, event);
    validateMessageField(message, event);
    validateCheckbox(isChecked, event);
    
  });

  function validateNameField(name, event) {
    if (!isValidName(name)) {
      $("#name-feedback").text("Please enter at least 2 characters");
      event.preventDefault();
    } else {
      //remove any text previously
      $("#name-feedback").text("");
    }
  }

  function isValidName(name) {
    return name.length >= 2;
  }

  function validatePasswordField(password, event) {
    if (!isPasswordValid(password)) {
      $("#password-feedback").text("Please enter valid password with at least 6 charaters and one number");
      event.preventDefault();
    } else {
      $("#password-feedback").text("");
    }
  }
  function isPasswordValid(password) {
    return password.length >= 6 && /.*[0-9]*./.test(password);
  }

  function validateCheckbox(isChecked, event) {
    if (!isChecked) {
      $("#checkbox-feedback").text("Please agree to this");
      event.preventDefault();
    } else {
      $("#checkbox-feedback").text("");
    }
  }

  function validateMessageField(message, event) {
    if (!isValidMessage(message)) {
      $("#message-feedback").text("Please enter message");
      event.preventDefault();
    } else {
      $("#message-feedback").text("");
    }
  }

  function isValidMessage(message) {
    return message.trim() != "";
  }

});