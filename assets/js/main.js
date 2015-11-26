$(function()
{
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var control = $('.controls form:first'),
            actualEntry = $(this).parents('.entry:first'),
            newEntry = $(actualEntry.clone()).appendTo(control);

        newEntry.find('input').val('');
        control.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.entry:first').remove();

		e.preventDefault();
		return false;
	});
});

function incrementValue() {
  var value = parseInt(document.getElementById('item').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('item').value = value;
}

function decrementValue() {
  if((document.getElementById('item').value) == 0) {
  }
  else {
    var value = parseInt(document.getElementById('item').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('item').value = value;
  }
}
