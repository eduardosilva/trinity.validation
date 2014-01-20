var trinity = (trinity !== undefined) ? trinity : {};

trinity.validation.brazil = (function () {
	"use strict";

    return {
    	isRG: function (numero) {
    		/*
            ##  Igor Carvalho de Escobar
            ##    www.webtutoriais.com
            ##   Java Script Developer
            */
    		var numero = numero.split("");
    		tamanho = numero.length;
    		vetor = new Array(tamanho);

    		if (tamanho >= 1) {
    			vetor[0] = parseInt(numero[0]) * 2;
    		}
    		if (tamanho >= 2) {
    			vetor[1] = parseInt(numero[1]) * 3;
    		}
    		if (tamanho >= 3) {
    			vetor[2] = parseInt(numero[2]) * 4;
    		}
    		if (tamanho >= 4) {
    			vetor[3] = parseInt(numero[3]) * 5;
    		}
    		if (tamanho >= 5) {
    			vetor[4] = parseInt(numero[4]) * 6;
    		}
    		if (tamanho >= 6) {
    			vetor[5] = parseInt(numero[5]) * 7;
    		}
    		if (tamanho >= 7) {
    			vetor[6] = parseInt(numero[6]) * 8;
    		}
    		if (tamanho >= 8) {
    			vetor[7] = parseInt(numero[7]) * 9;
    		}
    		if (tamanho >= 9) {
    			vetor[8] = parseInt(numero[8]) * 100;
    		}

    		total = 0;

    		if (tamanho >= 1) {
    			total += vetor[0];
    		}
    		if (tamanho >= 2) {
    			total += vetor[1];
    		}
    		if (tamanho >= 3) {
    			total += vetor[2];
    		}
    		if (tamanho >= 4) {
    			total += vetor[3];
    		}
    		if (tamanho >= 5) {
    			total += vetor[4];
    		}
    		if (tamanho >= 6) {
    			total += vetor[5];
    		}
    		if (tamanho >= 7) {
    			total += vetor[6];
    		}
    		if (tamanho >= 8) {
    			total += vetor[7];
    		}
    		if (tamanho >= 9) {
    			total += vetor[8];
    		}

    		var resto = total % 11;

    		if (resto != 0) {
    			return false;
    		}
    		else {
    			return true;
    		}
    	},
    	isCPF: function (value) {
    		value = jQuery.trim(value);

    		cpf = value.replace(/\./g, '')
                       .replace(/\-/g, '');

    		//chech minimal length
    		if (cpf.length < 11) return false;

    		while (cpf.length < 11) cpf = "0" + cpf;
    		var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
    		var a = [];
    		var b = new Number;
    		var c = 11;
    		for (i = 0; i < 11; i++) {
    			a[i] = cpf.charAt(i);
    			if (i < 9) b += (a[i] * --c);
    		}
    		if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11 - x }
    		b = 0;
    		c = 11;
    		for (y = 0; y < 10; y++) b += (a[y] * c--);
    		if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11 - x; }

    		var retorno = true;
    		if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) retorno = false;

    		return retorno;
    	},
    	isCNPJ: function (value) {
    		var cnpj = $.trim(value);

    		// DEIXA APENAS OS NúMEROS
    		cnpj = cnpj.replace(/\//g, '')
                       .replace(/\./g, '')
                       .replace(/\-/g, '');

    		var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
    		digitos_iguais = 1;

    		if (cnpj.length < 14 && cnpj.length < 15) {
    			return false;
    		}
    		for (i = 0; i < cnpj.length - 1; i++) {
    			if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
    				digitos_iguais = 0;
    				break;
    			}
    		}

    		if (!digitos_iguais) {
    			tamanho = cnpj.length - 2;
    			numeros = cnpj.substring(0, tamanho);
    			digitos = cnpj.substring(tamanho);
    			soma = 0;
    			pos = tamanho - 7;

    			for (i = tamanho; i >= 1; i--) {
    				soma += numeros.charAt(tamanho - i) * pos--;
    				if (pos < 2) {
    					pos = 9;
    				}
    			}
    			resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    			if (resultado != digitos.charAt(0)) {
    				return false;
    			}
    			tamanho = tamanho + 1;
    			numeros = cnpj.substring(0, tamanho);
    			soma = 0;
    			pos = tamanho - 7;
    			for (i = tamanho; i >= 1; i--) {
    				soma += numeros.charAt(tamanho - i) * pos--;
    				if (pos < 2) {
    					pos = 9;
    				}
    			}
    			resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    			if (resultado != digitos.charAt(1)) {
    				return false;
    			}
    			return true;
    		} else {
    			return false;
    		}
    	}
    }
}());