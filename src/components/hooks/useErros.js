import React, { useState } from "react";

/* Hooks do react só devem ser usadas em funcoes do react, mas quando voce quiser utilizar um hook para salvar um estado e nao replicar
codigo como a validacao de erros em dados usuario, dados pessoais e dados de entrega, vc cria um hook customizável.

Uma regra do react na criacao de hooks customizáveis é começar com o nome Use.*/

function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  function validarCampos(event) {
    const { id, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[id] = validacoes[id](value);
    setErros(novoEstado); //setErros({ cpf: verificarCPF }); Fez isso pq pode ter varios erros
  }

  function verificarEnvio() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return [erros, validarCampos, verificarEnvio];
}


function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: "" };
  }
  return estadoInicial;
}

export default useErros;
