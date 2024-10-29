function createDetails(image, price, description) {
  return `<div class = "detail">
  <img class = "detail-image" src = "${image}">
  <p class = "detail-price">${"$" + price}</p>
  <p class = "detail-description">${description}</p>
  </div>`;
}
async function start() {
  const response = await fetch("http://localhost:5000/api/products");
  const products = await response.json();
  //   console.log(products);
  const list = products.map((product) => {
    return `<li class = "item"><a href = "" class = "links link-${product.id}">${product.name}</a></li>`;
  });
  document.getElementsByClassName("list")[0].innerHTML = list.join("");

  // console.log(list);
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const {image,price,desc} = products.filter((product)=>product.id == link.classList.item(1).split('link-')[1])[0];
      document.querySelector('.details').innerHTML = createDetails(image,price,desc);
    });
  });
}
start();
