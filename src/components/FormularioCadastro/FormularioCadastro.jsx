import { StepLabel,Step, Stepper,  Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "../DadosEntrega"
import DadosPessoais from "../DadosPessoais";
import DadosUsuario from "../DadosUsuario";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados}/>,
    <DadosEntrega aoEnviar={coletarDados}/>,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>
  ];

  useEffect(() => {
    if (etapaAtual === formularios.length-1) {
      aoEnviar(dadosColetados); // Efeito para quando um ciclo de vida do react for chamado, substituí o componentDidMoun,updat e unmount. Chama uma função anonima
    }
  });
  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados }); //Adicionando dados nos dados coletados
    proximaEtapa();
  }

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }

  /* function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximaEtapa} />;
      case 1:
        return <DadosPessoais aoEnviar={proximaEtapa} validarCPF={validarCPF} />;
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar}/>;
      default:
        return <Typography>Erro ao selecionar fourmulário</Typography>;
    }
  }
  
  Ao invés do switch é mais interessante chamar um array devido a quantidade e legibilidade do código*/

  return <>
  <Stepper activeStep={etapaAtual}> 
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
  {formularios[etapaAtual]}</>; 
  // O jsx não deixa renderizar if e switchs dentro dele entao vc cria uma funcao com switch ou um array que pega por posicao
  //O Stepper mostra a posição que a página est;a
}

export default FormularioCadastro;
