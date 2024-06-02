var database = require("../database/config")

function salvarNotas(id, pontos) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvar():", id, pontos)
    var instrucao = `
        INSERT INTO quiz (fkUsuarioQuiz, desempenho) VALUES ('${id}', '${pontos}'); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarNotas(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function carregar():", id)
    var instrucao = `
        SELECT ROUND(AVG(desempenho),2) AS 'media', COUNT(fkUsuarioQuiz) AS 'tentativas' FROM quiz WHERE fkUsuarioQuiz = ${id}; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function salvarFav(id, modelo, desfile) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarFav():", id, modelo, desfile)
    var instrucao = `
        INSERT INTO favorito (fkUsuario, modelo, desfile) VALUES ('${id}', '${modelo}', '${desfile}'); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarFav(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function carregarFav():", id)
    var instrucao = `
        SELECT modelo AS 'modelos', desfile AS 'desfiles' FROM favorito WHERE fkUsuario = ${id}; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvarNotas,
    carregarNotas,
    salvarFav,
    carregarFav
};