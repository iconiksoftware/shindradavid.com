import type { Action } from 'svelte/action';

export default (function (element) {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			} else {
				entry.target.classList.remove('show');
			}
		});
	});

	const animatedElements = element.getElementsByClassName('animate-on-scroll');

	for (const animatedElement of animatedElements) {
		observer.observe(animatedElement);
	}

	return {
		destroy() {
			for (const animatedElement of animatedElements) {
				observer.unobserve(animatedElement);
			}
		}
	};
} satisfies Action);
