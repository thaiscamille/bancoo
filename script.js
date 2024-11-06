const email = "teste@teste.com"
const senha = "123456"
localStorage.setItem(email,senha)

cont emailInput = Document.getelementbyId(email")
cont emailInput = Document.getelementbyId(senha")
cont emailInput = Document.getelementbyId("formulario_login")
 
//quando o formulario for submetido
//ele envia e atualiza a pagina 
//esse evento padrao ("default") do html para a tag <form>

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const emaildigitado = imailinpult.Value
    const senhadigitada = senhainput.value

    console.log(emailInput.Value)
    console.log(senhaInput.Value)
})

