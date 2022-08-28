const activator = () => {
	const wrappers = [
		'#job-wrapper', '#company-wrapper'
	];

	wrappers.forEach(wrapper => {
		const el = $(wrapper);
		let scrollTop = $(document).scrollTop();
		let wrapperTop = parseInt(el.offset().top);

		if (scrollTop >= wrapperTop) {
			el.addClass('active');
		} else {
			el.removeAttr('class');
		}
	});
}

const theme = (val) => {
	localStorage.theme = val !== undefined ? val : 'dark';
	
	let dark = localStorage.theme === 'dark';
	
	if (dark) {
		$('head').append('<link rel="stylesheet" type="text/css" href="assets/css/dark.css">');
	} else {
		$('link[href*="dark.css"]').remove();
	}
}

$('.mode input').click(function() {
	theme(this.checked ? 'dark' : 'light');
});

if (localStorage.theme === 'dark')
	$('.mode input').click();

$(window).scroll(activator);