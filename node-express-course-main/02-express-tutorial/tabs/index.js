async function start() {
  const response = await fetch("http://localhost:5000/api/products");
  const products = await response.json();
//   console.log(products);
  const list = products.map((product) => {
    return `<li class = "item item-${product.id}">${product.name}</li>`;
  });
  console.log(list);
  
  document.getElementsByClassName("list")[0].innerHTML = list.join('');
}
start();