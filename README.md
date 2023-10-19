<h1 align="center">Codificador / Decodificador Dufat</h1>

<p align="center">
Este repositório é o resultado do primeiro exercício proposto na aula de Lógica de Programação do curso de Análise de Dados na Toti diversidade.
<br/>
</p>

## 🚀 Tecnologias

O exercício foi desenvolvido com a linguagem de programação JavaScript.

## 💻 Exercício

Este repositório contém duas funções simples, codificar e decodificar, que permitem transformar palavras de uma maneira específica. 
O objetivo é substituir algumas letras por sequências de caracteres e, em seguida, restaurá-las à sua forma original.

A função codificar substitui as seguintes letras:

"e" por "enter" <br />
"i" por "imes"  <br />
"a" por "ai"  <br />
"o" por "ober" <br />
"u" por "ufat" <br />

A função decodificar faz a operação inversa, restaurando as letras à sua forma original.

## 📝 Como Usar
Para utilizar essas funções em seu projeto, basta incluir o código no seu arquivo JavaScript e chamar codificar e decodificar conforme necessário.

```
const textoCodificado = codificar("Texto a ser codificado");
const textoDecodificado = decodificar(textoCodificado);
```

## ⭐ Meu Resultado

```
console.log(codificar("ola eu sou carmen")); //oberlai enterufat soberufat cairmentern
console.log(decodificar("oberlai enterufat soberufat cairmentern")); //ola eu sou carmen
```

Feito com 💜

