// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
		if (!form.checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
		}

		form.classList.add('was-validated')
		}, false)
	})
})()

// TOOLTIPS AND POPOVERS
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
		var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
		})
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
})

// NAVBAR 
var nav = document.querySelector('nav');
	window.addEventListener('scroll', function () {
		if (window.scrollY > 10) {
			nav.classList.add('bg-primary', 'shadow');
			const logo = document.getElementById('logo');
			logo.classList.add('logo');
		} else {
			nav.classList.remove('bg-primary', 'shadow');
			logo.classList.remove('logo');
		}
});

// HORARIOS
function todos() {
	const musc = document.getElementsByClassName('musc');
	for (let i = 0; i < musc.length; i++) {
		musc[i].classList.remove('d-none');
		musc[i].classList.add('d-block');
	}
	const func = document.getElementsByClassName('func');
	for (let i = 0; i < func.length; i++) {
		func[i].classList.remove('d-none');
		func[i].classList.add('d-block');
	}
	const hiit = document.getElementsByClassName('func-hiit');
	for (let i = 0; i < hiit.length; i++) {
		hiit[i].classList.remove('d-none');
		hiit[i].classList.add('d-block');
	}	
}

function allday() {
	const all = document.getElementsByClassName('tarde');
	for (let i = 0; i < all.length; i++) {
		all[i].classList.add('table-row');
		all[i].classList.remove('d-none');
	}
	const all2 = document.getElementsByClassName('mañana');
	for (let i = 0; i < all2.length; i++) {
		all2[i].classList.add('table-row');
		all2[i].classList.remove('d-none');	
	}	
}

function mañana() {
	const mañ = document.getElementsByClassName('tarde');
	for (let i = 0; i < mañ.length; i++) {
		mañ[i].classList.add('d-none');
		mañ[i].classList.remove('d-block');
	}
	const mañ2 = document.getElementsByClassName('mañana');
	for (let i = 0; i < mañ2.length; i++) {
		mañ2[i].classList.add('table-row');
		mañ2[i].classList.remove('d-none');	
	}	
}

function tarde() {
	const tar = document.getElementsByClassName('mañana');
	for (let i = 0; i < tar.length; i++) {
		tar[i].classList.add('d-none');
		tar[i].classList.remove('d-block');
	}
	const tar2 = document.getElementsByClassName('tarde');
	for (let i = 0; i < tar2.length; i++) {
		tar2[i].classList.add('table-row');
		tar2[i].classList.remove('d-none');	
	}	
}

function musc() {
	const musc = document.getElementsByClassName('musc');
	for (let i = 0; i < musc.length; i++) {
		musc[i].classList.remove('d-none');
		musc[i].classList.add('d-block');
	}
	const musc1 = document.getElementsByClassName('func');
	for (let i = 0; i < musc1.length; i++) {
		musc1[i].classList.add('d-none');
		musc1[i].classList.remove('d-block');
	}
	const musc2 = document.getElementsByClassName('func-hiit');
	for (let i = 0; i < musc2.length; i++) {
		musc2[i].classList.add('d-none');
		musc2[i].classList.remove('d-block');
	}
}

function func() {
	const func = document.getElementsByClassName('func');
	for (let i = 0; i < func.length; i++) {
		func[i].classList.remove('d-none');
		func[i].classList.add('d-block');
	}
	const func1 = document.getElementsByClassName('musc');
	for (let i = 0; i < func1.length; i++) {
		func1[i].classList.add('d-none');
		func1[i].classList.remove('d-block');
	}
	const func2 = document.getElementsByClassName('func-hiit');
	for (let i = 0; i < func2.length; i++) {
		func2[i].classList.add('d-none');
		func2[i].classList.remove('d-block');
	}
}

function hiit() {
	const hiit = document.getElementsByClassName('func-hiit');
	for (let i = 0; i < hiit.length; i++) {
		hiit[i].classList.remove('d-none');
		hiit[i].classList.add('d-block');
	}
	const hiit1 = document.getElementsByClassName('musc');
	for (let i = 0; i < hiit1.length; i++) {
		hiit1[i].classList.add('d-none');
		hiit1[i].classList.remove('d-block');
	}
	const hiit2 = document.getElementsByClassName('func');
	for (let i = 0; i < hiit2.length; i++) {
		hiit2[i].classList.add('d-none');
		hiit2[i].classList.remove('d-block');
	}
}

// TEXTAREA CONTADOR
const $ = (element) => document.querySelector(element)

const textarea = $('.textarea')
const ch = $('.ch')

ch.innerHTML = 0

textarea.addEventListener('input', (e) => {
	ch.innerHTML = e.target.value.length	
})