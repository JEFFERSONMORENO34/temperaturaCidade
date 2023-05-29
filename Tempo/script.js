


const key = "57ec2f74550c1fb9afa80b876105f97d"

function colocarDadosNaTela(dados) {
    console.log(dados) 
    document.querySelector(".cidade").innerHTML = "Tempo em" + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor (dados.main.tempo) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())
   
    colocarDadosNaTela(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value 

    buscarCidade(cidade)
}