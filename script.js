


const usuario = {} ;

 const emailInput = Document.getelementbyId ("email")
 const senhalInput = Document.getelementbyId ("senha")
 const formulario = Document.getelementbyId ("formulario_login")
  

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const emaildigitado = emailInput.Value
    const senhadigitada = senhaInput.value

// Buscar usuarios no local storage
const usuarios = JSON.parse(localStorage.getItem("usuarios"))
const usuarioEncontrado = usuarios.find((usuarios) => {
  return (
    usuario.email == emailDigitado && 
    usuario.senha == senhaDigitada
  )
})

}) 
 //lembre de (id,email e senha), escrito somas duplas
 const usuarios = {
 } 

  "id" : 1,
  "email" :"durvaldo@TextDecoderStream.com" ,
  "senha" : "senha123"
{,  
{
    "id" : 2,
    "email": "tiao@teste.com",
    "senha": "password"

},
{

    "id":3,
    "email":"joisce@teste.com",
     "senha": "passoca "


}
}










    <!-- SCRIPT NOSSO -->
 html>

 "id":2,
 "email":"tião@teste.com"
 "senha":"password"
 




