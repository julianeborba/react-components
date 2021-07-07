import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({aoEnviar}) {
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, numero, endereco, cidade, estado });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        margin="normal"
        fullWidth
        variant="outlined"
        required
      ></TextField>
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        label="Endereço"
        type="text"
        margin="normal"
        fullWidth
        variant="outlined"
        required
      ></TextField>
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="numero"
        label="Número"
        type="number"
        margin="normal"
        fullWidth
        variant="outlined"
        required
      ></TextField>
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        required
      ></TextField>
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="cidade"
        label="Cidade"
        type="text"
        margin="normal"
        variant="outlined"
        required
      ></TextField>

      <Button type="submit" variant="contained" color="primary">
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
