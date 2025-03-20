// На HTML-сторінці є 6 чекбоксів.
// Напишіть скріпт, який після того,
// як користувач позначив будь-які 3 чекбокси,
// всі чекбокси робить неактивними.

// Завдання виділене вставкою Task4

$(document).ready(function () {
  let checkedCount = 0;

  $('input[type="checkbox"]').change(function () {
    if ($(this).prop("checked")) {
      checkedCount++;
    } else {
      checkedCount--;
    }

    if (checkedCount >= 3) {
      $('input[type="checkbox"]').prop("disabled", true);
    }
  });
});
