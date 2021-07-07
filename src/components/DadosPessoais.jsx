import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../context/ValidacoesCadastro";
import useErros from "./hooks/useErros";

function DadosPessoais({ aoEnviar}) {
  //Essa chave aqui chamada de técnica de desconstrucao de objetos
  /*Escrevendo componentet atraves de função e nao classes, essa funcao deve ter um retorno que faz tipo o papel do render
   Utilizamos o hook de useState indicamos para o React que aquele componente quer guardar estado. Para isso são devolvidas duas informações,
   a primeira é a referência para o valor do estado atual e a segunda é a função que altera esse estado. Precisamos dessa separação para que 
   o React consiga fazer o gerenciamento do componente e chamar o o ciclo de renderização quando o estado for alterado. Nunca se chama o state
   diretamente*/

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, verificarEnvio] = useErros(validacoes);
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (verificarEnvio()) {
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes }); //Tem que colocar dentro da {}, pq a {} representa um objeto no JS se n só vai ler o primeiro
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        margin="normal"
        fullWidth
        variant="outlined"
        id="nome"
        label="Nome"
        name="nome"
        required
      ></TextField>

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        margin="normal"
        fullWidth
        variant="outlined"
        id="sobrenome"
        label="Sobrenome"
        name="sobrenome"
        required
      ></TextField>

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos} //Propriedade de quando vc para de digitar, saí da caixinha de texto
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        margin="normal"
        fullWidth
        variant="outlined"
        id="cpf"
        label="CPF"
        name="cpf"
        required
      ></TextField>

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes} //é tipo o value
            color="primary"
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          ></Switch>
        }
      ></FormControlLabel>

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            color="primary"
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          ></Switch>
        }
      ></FormControlLabel>

      <Button type="text" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}
export default DadosPessoais;
