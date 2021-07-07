import { TextField, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../context/ValidacoesCadastro";
import useErros from "./hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, verificarEnvio] = useErros(validacoes);
  //const [erros, setErros] = useState({ senha: { valido: true, texto: "" } }); Mudança apos da criacao do hook


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (verificarEnvio()) {
          //Pode colocar a funcao na verificacao sem ser funcao = true
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        required
        margin="normal"
        fullWidth
        variant="outlined"
      ></TextField>
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        label="senha"
        type="password"
        required
        margin="normal"
        fullWidth
        variant="outlined"
      ></TextField>
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
