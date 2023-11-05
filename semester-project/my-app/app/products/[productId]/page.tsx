import { Product } from "../page";

interface Params {
  productId: string;
}

const BASE_API_URL = "https://api.escuelajs.co/api/v1/products";

const getProduct = async (id: string): Promise<Product> => {
  const data = await fetch(`${BASE_API_URL}/${id}`);
  return data.json();
};

export default async function Product({ params }: { params: Params }) {
  const product = await getProduct(params.productId);

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10 capitalize">
        <span className="text-neutral-400">Product:{product.id}:</span> {product.description}
        <img src={product.images} alt="product-picture" />
        <span className="text-center"><p>{product.price}&euro;</p></span>
      </h1>
    </main>
  );
}