$(document).ready(function () {

  var form = $("#form"); //we did this, because in this activity we will us this twice.

  enableFastFeedback(form);

  //select form
  form.submit(function (event) {
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

  function enableFastFeedback(formElement) {
    var nameInput = formElement.find("#name");
    var passwordInput = formElement.find("#password");
    var messageInput = formElement.find("#message");
    var checkboxInput = formElement.find("#checkbox");

    nameInput.blur(function (event) {
      var name = $(this).val();
      validateNameField(name, event);

      if (!isValidName(name)) {
        $(this).css({
          "box-shadow": "0 0 4px #811",
          "border": "1px solid #600",
        });
      } else {
        $(this).css({
          "box-shadow": "0 0 4px #181",
          "border": "1px solid #060"
        });
      }
    });

    passwordInput.blur(function (event) {
      var password = $(this).val();
      validatePasswordField(password, event);

      if (!isPasswordValid(password)) {
        $(this).css({
          "box-shadow": "0 0 4px #811",
          "border": "1px solid #600",
        });
      } else {
        $(this).css({
          "box-shadow": "0 0 4px #181",
          "border": "1px solid #060"
        });
      }
    });

    messageInput.blur(function (event) {
      var message = $(this).val();
      validateMessageField(message, event);

      if (!isValidMessage(message)) {
        $(this).css({
          "box-shadow": "0 0 4px #811",
          "border": "1px solid #600",
        });
      } else {
        $(this).css({
          "box-shadow": "0 0 4px #181",
          "border": "1px solid #060"
        });
      }
    });

    checkboxInput.change(function (event) {
      
      var isChecked = $(this).is(":checked"); 

      validateCheckbox(isChecked, event);

      if (!isChecked) {
        $(this).add("label[for='cb']").css({
          "box-shadow": "0 0 4px #811",
          "border": "1px solid #600",
        });
      } else {
        $(this).add("label[for='cb']").css({
          "box-shadow": "0 0 4px #181",
          "border": "1px solid #060"
        });
      }
    });
  }

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
    const regex = new RegExp('[0-9]');
    return password.length >= 6 && regex.test(password);
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