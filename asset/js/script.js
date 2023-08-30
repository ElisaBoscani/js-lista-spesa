/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo while. */
const listEl = document.getElementById("list");
const products = [];

let i = 0;
while (i < 3) {
  const shoppingList = prompt("Inserisci prodotto");
  if (isNaN(shoppingList)) {
    products.push(shoppingList);
    const markup = `<li>${shoppingList}</li>`;
    listEl.innerHTML += markup;
  } else {
    const markup = `<li>prodotto non valido</li>`;
    listEl.innerHTML += markup;
    console.log("errore");
  }

  i++;
}
console.log(products);
