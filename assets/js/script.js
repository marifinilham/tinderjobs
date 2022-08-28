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

$(window).scroll(activator);