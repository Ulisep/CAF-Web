const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
	event.preventDefault();	
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value/100;
		
	var imc = (peso / (altura ** 2)).toFixed(2);
	var valor = document.getElementById('valor-icm');
	document.getElementById('info').classList.remove('d-none');
	valor.textContent = imc;
	const msj = document.getElementById('msj');
	msj.classList.add('d-none');
	if (imc < 16){
		valor.textContent = "< 16";
		const msj = document.getElementById('msj');
		msj.classList.remove('d-none');
		msj.classList.add('d-block');					
	}else if (imc > 40){
		valor.textContent = "> 40";
		const msj = document.getElementById('msj');
		msj.classList.remove('d-none');
		msj.classList.add('d-block');
	}	
});
/*
function calcular(){
	if (medida.value = 2){
		var altura = document.getElementById('altura').value/100;
		var imc = (peso / (altura ** 2)).toFixed(2);
		var valor = document.getElementById('valor-icm');
		document.getElementById('info').classList.remove('d-none');
		valor.textContent = imc;
		if (imc < 16){
			valor.textContent = "< 16";
		}else if (imc > 40){
			valor.textContent = "> 40";
		}
	}
}



/*if(medida.value = 2){
		var peso = document.getElementById('peso').value;
		var altura = document.getElementById('altura').value;		

		var altura = document.getElementById('altura').value/100;
		var imc = (peso / (altura ** 2)).toFixed(2);
		var valor = document.getElementById('valor-icm');
		document.getElementById('info').classList.remove('d-none');
		valor.textContent = imc;
		if (imc < 16){
			valor.textContent = "< 16";
		}else if (imc > 40){
			valor.textContent = "> 40";
		}
	}	*/