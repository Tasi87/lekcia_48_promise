//idea	Promise
// sľub dokončenia niekedy v budúcnosti

const myPromise = new Promise((resolve, reject) => {
	const condition = true	
	// stav pripojenia k serveru, výsledok asynchronného požiadavku, vstup do uživateľa

	// simulácia saynchronnej situácie (čakanie na server, spracovanie dát)
	setTimeout(() => {
		if(condition) {
			// promise je úspešná
			resolve("Operácia prebehla úspešne!")
		} else {
			// promise je neúspešná
			reject("Chyba, niečo sa pokazilo!")
		}
	}, 2500);

})

myPromise
	.then( result => `Úspech ${result}`)
	.then( result2 => `${result2} Y`)
	.then( result3 => console.log(`${result3} Z`))
	.catch( err => {
		console.error("Neúspech:", err)
	})