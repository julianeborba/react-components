import { Container, Typography } from "@material-ui/core";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";
import { validarCPF, validarSenha } from "./components/models/cadastro";
import ValidacoesCadastro from "./context/ValidacoesCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography align="center" component="h1" variant="h3">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{
          cpf: validarCPF,
          senha: validarSenha,
          nome: validarSenha
        }}  
      >
        <FormularioCadastro aoEnviar={onSubmit} />
      </ValidacoesCadastro.Provider>
      
    </Container>
  );
}
//Um chave pra abrir js e outra pra abrir um objeto
//aoEnviar é uma propriedade, pode chamar como quiser
function onSubmit(dados) {
  console.log(dados);
}

export default App;
