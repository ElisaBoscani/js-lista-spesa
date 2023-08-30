/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo while. */
const listEl = document.getElementById("list");
const productEl = document.getElementById("product");
const contentListEl = document.getElementById("contentList");
const products = [];

//prima versione
/* let i = 0;
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
console.log(products); */

//seconda versione
contentListEl.addEventListener("submit", function (e) {
  e.preventDefault();
  products.push(productEl.value);
  console.log(products);
  let i = 0;
  while (i < products.length) {
    if (isNaN(productEl.value)) {
      const markup = `<li>${productEl.value}</li>`;
      listEl.innerHTML += markup;

      products.length = 0;
      productEl.value = "";
    } else {
      const markup = `<li>prodotto non valido</li>`;
      listEl.innerHTML += markup;
      products.length = 0;
      productEl.value = "";
      console.log("errore");
    }
    i++;
  }
  listEl.style.display = "block";
});
