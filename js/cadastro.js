const dadosCadastrados = JSON.parse(localStorage.getItem('usuario')) || [];

const formulario = document.querySelector("form");
//console.log(formulario)

formulario.addEventListener("submit", function (evento) {
  console.clear();
  evento.preventDefault();

  let usuario = document.getElementById("usuario");
  //console.log(usuario)

  let senha = document.getElementById("new-password");
  //console.log(senha)

if(senha.value != repeteSenha.value){
return alert('Senhas estão diferentes');
}

  let cadastroUsuario = {
    usuario: usuario.value,
    senha: senha.value,
  };

  dadosCadastrados.push(cadastroUsuario);

  //alert("Formulário submetido via JS");

  //console.log(dadosCadastrados);

  localStorage.setItem('usuarios', JSON.stringify(dadosCadastrados));
});

