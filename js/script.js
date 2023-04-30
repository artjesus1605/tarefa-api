const apikey = "665c418138d96f40f8101ba8dca1db55"
const apiPaisUrl = "https://www.countryflagicons.com/FLAT/64/"

const cidadeInput = document.querySelector("#cidade-input")
const botao = document.querySelector("#btnEnviar")

const nomeCidade = document.querySelector("#cidade")
const temperatura = document.querySelector("#temperatura span")
const desc = document.querySelector("#descricao")
const weatherIcon = document.querySelector("#weather-icon")
const coutryIcon = document.querySelector("#pais")
const umidade = document.querySelector("#umidade span")
const vento = document.querySelector("#vento span")

const getweatherData = async (cidade) =>{
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apikey}&lang=pt_br`
  const res = await fetch(apiWeatherURL)
  const data = await res.json()

  return data

  console.log(data)
}

const showWheatherData = async (cidade) =>{
  const data = await getweatherData(cidade)

  nomeCidade.innerText = data.name
  temperatura.innerText = parseInt(data.main.temp)
  desc.innerText = data.weather[0].description
  weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
  coutryIcon.setAttribute("src", apiPaisUrl + data.sys.country + ".png")
  umidade.innerText = `${data.main.humidity}%`
  vento.innerText = `${data.wind.speed}`
}

botao.addEventListener("click", (event) =>{
  event.preventDefault()
  const cidade = cidadeInput.value

  showWheatherData(cidade)
})