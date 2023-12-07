import { Product } from "../page";

interface Params {
  productId: string;
}

const BASE_API_URL = "https://api.escuelajs.co/api/v1/products";

const getProduct = async (id: string): Promise<Product> => {
  const limit = 24;
  const data = await fetch(`${BASE_API_URL}/${id}?limit=${limit}`);
  return data.json();
};

export default async function Product({ params }: { params: Params }) {
  const product = await getProduct(params.productId);

  return (
    <main className="flex flex-col items-center min-h-screen max-w-3xl m-auto p-10 overflow-hidden shadow-lg mt-12">
      <h1 className="text-3xl font-bold p-10 capitalize">
      <img src={product.images} alt="product-picture" />
        <span className="text-neutral-400">Product:{product.id}:</span> {product.description}
        <span className="text-center mt-2"><p>{product.price}&euro;</p></span>
      </h1>
    </main>
  );
}