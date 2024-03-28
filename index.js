function solucao(ano) {
    const proximoAno = ano + 76;
    console.log(`Se o cometa Halley passou no ano ${ano}, ele passará novamente no ano ${proximoAno}`);
}

function processData(input) {
    const ano = Number(input);
    solucao(ano);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
