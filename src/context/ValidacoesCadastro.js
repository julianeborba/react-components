import React from "react";

const ValidacoesCadastro = React.createContext();

/* Outra opção se nao quiser usar o Provider dentro de App.js é colocar as validacoes que voce quer que ele realize dentro de create Context
{cpf: validarCPF,senha: validarSenha,nome: validarSenha} e uma funcao semValidacao aqui abaixo
function semValidacao(dados){
    console.log(dados)
    return{valido:true, texto:""};
    
Ambas opcoes deve ter o contexto definido*/

export default ValidacoesCadastro;
