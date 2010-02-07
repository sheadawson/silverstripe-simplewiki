
(function ($) {
	$().ready(function () {
		// find the save button and add in its accesskey... really need to
		// get around to patching this in core!
		$('#Form_StatusForm_action_startediting').attr('accesskey', 's');

		var createPageForm = $('#Form_CreatePageForm').hide();
		
		$('#Form_EditForm_action_addpage_t').click(function () {
			createPageForm.toggle();
		    return false;
		});

		$('#Form_EditForm_action_delete').click(function () {
			if (!confirm("Are you sure you want to delete this page?")) {
				return false;
			}
			return true;
		});

		createPageForm.submit(function () {
			if (!$(this).find('[@name="NewPageName"]').val()) {
				$(this).find('[@name="NewPageName"]').css('border', '1px solid red');
				return false;
			}
		});
	});
})(jQuery);