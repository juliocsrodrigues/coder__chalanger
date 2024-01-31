function criptografar() {
    var texto = document.getElementById("texto").value;
    var resultado = criptografarTexto(texto);
    document.getElementById("resultado").value = resultado;
}

function descriptografar() {
    var texto = document.getElementById("texto").value;
    var resultado = descriptografarTexto(texto);
    document.getElementById("resultado").value = resultado;
}

function criptografarTexto(texto) {
    return texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografarTexto(texto) {
    return texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function copiarResultado() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
}