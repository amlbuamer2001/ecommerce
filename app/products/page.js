
export default async function Products() {
  let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
  let {data} = await response.json();
  console.log(data);
  return <div>
    {data.map((product)=>(
      <div key={product._id}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span>{product.price}</span>
      </div>
    ))}
  </div>;
}
