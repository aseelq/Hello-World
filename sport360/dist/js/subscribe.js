$(document).ready(function () {
    var url = window.location.href.includes("/en");
    
    $(".more_icon").click(function () {
        $('.more_icon').css("display", "none");
        $('.show_icon').css("display", "inline-block");
    });
    $(".more_icon_inside").click(function () {
        $('.more_icon_inside').css("display", "none");
        $('.show_icon_inside').css("display", "inline-block");
    });

	$('#newsletter-form').on('submit', function() {
		if (!validateNewsletter()) {
			return false;
		}
});

	$('#subscribe-form').on('submit', function() {
		if (!validateSubscribe()) {
			return false;
		}
	});
});

function validateNewsletter() {
	var validForm = true;
	var firstError = '';

	if (!validateFirstName($('#firstName').val())) {
		validForm = false;
		$('#firstName').parent('div').addClass('has-error');
		$('#firstName').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'firstName';

	} else {
		$('#firstName').parent('div').removeClass('has-error');
		$('#firstName').next('cite').addClass('hidden');
	}

	if (!validateLastName($('#lastName').val())) {
		validForm = false;
		$('#lastName').parent('div').addClass('has-error');
		$('#lastName').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'lastName';

	} else {
		$('#lastName').parent('div').removeClass('has-error');
		$('#lastName').next('cite').addClass('hidden');
	}

	if (!validateEmail($('#email').val())) {
		validForm = false;
		$('#email').parent('div').addClass('has-error');
		$('#email').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'email';

	} else {
		$('#email').parent('div').removeClass('has-error');
		$('#email').next('cite').addClass('hidden');
	}

	if (!validateAgreement($('#agreement'))) {

		validForm = false;
		$('#agreement').parent().parent().addClass('has-error');
		$('#agreement').parent().next('cite').text("You've to approve the conditions");

		if (firstError == '')
			firstError = 'agreement';

	} else {
		$('#agreement').parent().parent().removeClass('has-error');
		$('#agreement').parent().next('cite').text('');
	}

	if (!validateCategories()) {
		$('.option_box').addClass('has-error');
		$('.option_box cite').text('Please choose your category.');
	} else {
		$('.option_box').removeClass('has-error');
		$('.option_box cite').text('');
	}

	if (!validForm) {
		$('html, body').animate({
			scrollTop: ($("#"+firstError).offset().top - 120)
		}, 1000);
		return false;
	}

	return true;
}

function validateSubscribe() {
	var validForm = true;
	var firstError = '';

	if (!validateFirstName($('#firstName').val())) {
		validForm = false;
		$('#firstName').parent('div').addClass('has-error');
		$('#firstName').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'firstName';

	} else {
		$('#firstName').parent('div').removeClass('has-error');
		$('#firstName').next('cite').addClass('hidden');
	}

	if (!validateLastName($('#lastName').val())) {
		validForm = false;
		$('#lastName').parent('div').addClass('has-error');
		$('#lastName').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'lastName';

	} else {
		$('#lastName').parent('div').removeClass('has-error');
		$('#lastName').next('cite').addClass('hidden');
	}

	if (!validateEmail($('#email').val())) {
		validForm = false;
		$('#email').parent('div').addClass('has-error');
		$('#email').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'email';

	} else {
		$('#email').parent('div').removeClass('has-error');
		$('#email').next('cite').addClass('hidden');
	}

	if (!validateMobile($('#mobile').val())) {
		validForm = false;
		$('#mobile').parent('div').addClass('has-error');
		$('#mobile').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'mobile';

	} else {
		$('#mobile').parent('div').removeClass('has-error');
		$('#mobile').next('cite').addClass('hidden');
	}

	if (!validateTelephone($('#telephone').val())) {
		validForm = false;
		$('#telephone').parent('div').addClass('has-error');
		$('#telephone').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'telephone';

	} else {
		$('#telephone').parent('div').removeClass('has-error');
		$('#telephone').next('cite').addClass('hidden');
	}

	if (!validateCity($('#city').val())) {
		validForm = false;
		$('#city').parent('div').addClass('has-error');
		$('#city').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'city';

	} else {
		$('#city').parent('div').removeClass('has-error');
		$('#city').next('cite').addClass('hidden');
	}

	if (!validateMobileDelivery($('#mobileDelivery').val())) {
		validForm = false;
		$('#mobileDelivery').parent('div').addClass('has-error');
		$('#mobileDelivery').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'mobileDelivery';

	} else {
		$('#mobileDelivery').parent('div').removeClass('has-error');
		$('#mobileDelivery').next('cite').addClass('hidden');
	}

	if (!validateApartment($('#apartment').val())) {
		validForm = false;
		$('#apartment').parent('div').addClass('has-error');
		$('#apartment').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'apartment';

	} else {
		$('#apartment').parent('div').removeClass('has-error');
		$('#apartment').next('cite').addClass('hidden');
	}

	if (!validateBuilding($('#building').val())) {
		validForm = false;
		$('#building').parent('div').addClass('has-error');
		$('#building').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'building';

	} else {
		$('#building').parent('div').removeClass('has-error');
		$('#building').next('cite').addClass('hidden');
	}

	if (!validateStreet($('#street').val())) {
		validForm = false;
		$('#street').parent('div').addClass('has-error');
		$('#street').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'street';

	} else {
		$('#street').parent('div').removeClass('has-error');
		$('#street').next('cite').addClass('hidden');
	}

	if (!validateLandmark($('#landmark').val())) {
		validForm = false;
		$('#landmark').parent('div').addClass('has-error');
		$('#landmark').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'landmark';

	} else {
		$('#landmark').parent('div').removeClass('has-error');
		$('#landmark').next('cite').addClass('hidden');
	}

	if (!validatePoBox($('#pobox').val())) {
		validForm = false;
		$('#pobox').parent('div').addClass('has-error');
		$('#pobox').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'pobox';

	} else {
		$('#pobox').parent('div').removeClass('has-error');
		$('#pobox').next('cite').addClass('hidden');
	}

	if (!validateEmiratePoBox($('#Emiratepobox').val())) {
		validForm = false;
		$('#Emiratepobox').parent('div').addClass('has-error');
		$('#Emiratepobox').next('cite').text('The data you entered is incorrect.');

		if (firstError == '')
			firstError = 'Emiratepobox';

	} else {
		$('#Emiratepobox').parent('div').removeClass('has-error');
		$('#Emiratepobox').next('cite').addClass('hidden');
	}


	if (!validateAgreement($('#agreement'))) {

		validForm = false;
		$('#agreement').parent().parent().addClass('has-error');
		$('#agreement').parent().next('cite').text("You've to approve the conditions");

		if (firstError == '')
			firstError = 'agreement';

	} else {
		$('#agreement').parent().parent().removeClass('has-error');
		$('#agreement').parent().next('cite').text('');
	}

	if (!validForm) {
		$('html, body').animate({
			scrollTop: ($("#"+firstError).offset().top - 120)
		}, 1000);
		return false;
	}

	return true;
}

function validateFirstName(value) {
	if (value == '')
		return false;

	return true;
}

function validateLastName(value) {
	if (value == '')
		return false;

	return true;
}

function validateEmail(value) {
	if (value == '')
		return false;

	return true;
}

function validateAgreement(element) {
	if (element.is(":checked"))
		return true;

	return false;
}

function validateCategories() {
	if ($("input:checkbox[name='categories[]']").is(":checked"))
		return true;

	return false;
}

function validateMobile(value) {
	if (value == '')
		return false;

	return true;
}

function validateTelephone(value) {
	if (value == '')
		return false;

	return true;
}

function validateCity(value) {
	if (value == '')
		return false;

	return true;
}

function validateMobileDelivery(value) {
	if (value == '')
		return false;

	return true;
}

function validateApartment(value) {
	if (value == '')
		return false;

	return true;
}

function validateBuilding(value) {
	if (value == '')
		return false;

	return true;
}

function validateStreet(value) {
	if (value == '')
		return false;

	return true;
}

function validateLandmark(value) {
	if (value == '')
		return false;

	return true;
}

function validatePoBox(value) {
	if (value == '')
		return false;

	return true;
}

function validateEmiratePoBox(value) {
	if (value == '')
		return false;

	return true;
}

$('.related .owl-carousel').owlCarousel({
	loop:false,
	margin:15,
	nav:false,
	responsive:{
		0:{
			items:1
		},
		959:{
			items:2
		}
	}
})

/* Collapse Change Arrow Direction */
$('.panel-collapse').on('shown.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
});

//The reverse
$('.panel-collapse').on('hidden.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
});