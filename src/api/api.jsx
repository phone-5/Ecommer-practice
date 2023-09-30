export async function fetchCProducts() {
  const respones = await fetch(`http://localhost:3000/clothes`);
  return respones.json();
}
export async function fetchDProducts() {
  const respones = await fetch(`http://localhost:3000/digital`);
  return respones.json();
}
export async function fetchCProduct(id) {
  const respones = await fetch(`http://localhost:3000/clothes/${id}`);
  return respones.json();
}
export async function fetchDProduct(id) {
  const respones = await fetch(`http://localhost:3000/digital/${id}`);
  return respones.json();
}

export async function putProductToFav(product) {
  const respones = await fetch(`http://localhost:3000/fav`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return respones.json();
}
export async function putProductToCart(product) {
  const respones = await fetch(`http://localhost:3000/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return respones.json();
}
export async function putProductToShopD(product) {
  const respones = await fetch(`http://localhost:3000/digital`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return respones.json();
}
export async function putProductToShopC(product) {
  const respones = await fetch(`http://localhost:3000/clothes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return respones.json();
}
export async function fetchFav() {
  const respones = await fetch(`http://localhost:3000/fav`);
  return respones.json();
}
export async function fetchCart() {
  const respones = await fetch(`http://localhost:3000/cart`);
  return respones.json();
}
export async function deleteproduct(id) {
  const respones = await fetch(`http://localhost:3000/fav/${id}`, {
    method: "DELETE",
  });
  return respones.json();
}
export async function deleteproductcart(id) {
  const respones = await fetch(`http://localhost:3000/cart/${id}`, {
    method: "DELETE",
  });
  return respones.json();
}
