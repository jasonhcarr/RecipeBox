RecipeBox.service('VerifyService', function () {

function validateEmail(email) {
    var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validated = true;
    if (!emailRegEx.test(email))
        validated = false;
    return validated;
}

function enterAsTab(event) {
  var form = $(this).parents('form:eq(0)'),
      focusable = $('form').find('.text-input').filter(':visible'),
      next = focusable.eq(focusable.index(this) + 1);
  if (event.keyCode == 13) {
      event.preventDefault();
      if (next.length) {
          next.focus();
      } else {
          if (!canSubmit()) {
              next = focusable.eq(0);
              next.focus();
          } else {
              form.submit();
          }
      }
      return false;
  }

}

return {
  email: validateEmail,
  enter: enterAsTab
};

});
