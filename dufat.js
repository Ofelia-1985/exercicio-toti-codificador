function codificar(palavras) {
	palavras = palavras.replaceAll ("e", "enter");
	palavras = palavras.replaceAll ("i", "imes");
	palavras = palavras.replaceAll ("a", "ai");
	palavras = palavras.replaceAll ("o", "ober");
	palavras = palavras.replaceAll ("u", "ufat");
	return palavras;
}

function decodificar(palavras) {
	palavras = palavras.replaceAll ("enter", "e");
	palavras = palavras.replaceAll ("imes", "i");
	palavras = palavras.replaceAll ("ai", "a");
	palavras = palavras.replaceAll ("ober", "o");
	palavras = palavras.replaceAll ("ufat", "u");
	return palavras;
	}

console.log(codificar("ola eu sou carmen"));
console.log(decodificar("oberlai enterufat soberufat cairmentern"));