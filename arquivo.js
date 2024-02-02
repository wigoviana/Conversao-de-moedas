
const buttonConvert = document.querySelector("#button")
const convertSelect = document.querySelector("#ConvertSelect")

function convertValue() {
    const inputCurrencyValue = document.querySelector("#valorDoInput").value
    const realValue = document.querySelector(".real") // valor em real
    const otherCurrencies = document.querySelector("#otherscoin") // valores de outras moedas

    const dolarDoDay = 4.92
    const euroDODay = 5.35
    const libraDoDay = 6.27
    const bitcoinDoDay = 212149.82

    if (convertSelect.value == "Bitcoin") {

        otherCurrencies.innerHTML = new Intl.NumberFormat('en-DE',
            {
                style: 'currency',
                currency: 'BTC'
            }).format(inputCurrencyValue / bitcoinDoDay)
    }

    if (convertSelect.value == "dolar") {

        otherCurrencies.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }).format(inputCurrencyValue / dolarDoDay)
    }

    if (convertSelect.value == "euro") {

        otherCurrencies.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            }).format(inputCurrencyValue / euroDODay)
    }

    if (convertSelect.value == "libra") {

        otherCurrencies.innerHTML = new Intl.NumberFormat('en-GB',
            {
                style: 'currency',
                currency: 'GBP'
            }).format(inputCurrencyValue / libraDoDay)
    }

    realValue.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRl'
        }).format(inputCurrencyValue)

}

function changeSelect() {

    const convertName = document.getElementById("namechange")
    const convertImg = document.querySelector("#imgchange")
    


    if (convertSelect.value == "dolar") {

        convertName.innerHTML = "Dolar Americano"
        convertImg.src = "./assets/dollar.png"

    }
    if (convertSelect.value == "euro") {

        convertName.innerHTML = "Euro"
        convertImg.src = "./assets/euro.png"
    }

    if (convertSelect.value == "libra") {

        convertName.innerHTML = "libra"
        convertImg.src = "./assets/libra.png"
    }
    
    if (convertSelect.value == "Bitcoin") {

        convertName.innerHTML = "Bitcoin"
        convertImg.src = "./assets/bitcoin.png"
    }

convertValue()
}




convertSelect.addEventListener("change", changeSelect)
buttonConvert.addEventListener("click", convertValue)




