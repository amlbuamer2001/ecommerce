export async function getProducts() {
  let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
  let { data } = await response.json();
  console.log(data);

    return data;
}
