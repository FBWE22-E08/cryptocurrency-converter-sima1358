 
// import "./css/style.css"; //importing css
const cryptoSelect = document.querySelector(".cryptoSelect");
const inputAmount = document.querySelector("#inputAmount");
const currency = document.querySelector(".fiatCurrencySelect");
const outputAmount= document.querySelector(".form-control");
const convert = document.querySelector(".btn");
const form = document.querySelector('form')

// // choose crypto and currency
// cryptoSelect.addEventListener('change', compute);
// currency.addEventListener('change', compute);

// // input and output
// inputAmount

 async function fetchConvertor (e){
    e.preventDefault()
   try{
        let response = await fetch(`https://api.coinconvert.net/convert/${cryptoSelect.value}/${currency.value}?amount=${inputAmount.value}`)
    let data = await response.json();
    console.log(data)
    outputAmount.value = data[currency.value.toUpperCase()]
    }
    catch(err) {
        console.log(err);
    }
 }

 form.addEventListener('submit', fetchConvertor)