$(document).ready(function () {
  $('form#input').submit(function (event) {
    event.preventDefault();
    var sum = 0;
    $('input:checkbox[name=warning-signs]:checked').each(function () {
      var score = parseInt($(this).val());
      sum += score
    });

    $('input:checkbox[name=health-symptoms]:checked').each(function () {
      var score = parseInt($(this).val());
      sum += score
    });

    $('input:checkbox[name=coping-methods]:checked').each(function () {
      var score = parseInt($(this).val());
      sum += score
    });
    if (sum >= 0) {
      $('.doing-good').show();
    }else {
      $('.warning').show();
    }
    console.log(sum);
  });
});
