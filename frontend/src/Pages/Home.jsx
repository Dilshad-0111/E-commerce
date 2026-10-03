
import { Link } from "react-router-dom";

export default function Home() {
  let featuredProducts = [
    {
      name: "Samsung Galaxy S24",
      price: "$800",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s921bzkdins/gallery/in-galaxy-s24-s921-sm-s921bzkdins-thumb-539172383",
    },
    {
      name: "HP Laptop",
      price: "$700",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08580001.png",
    },
    {
      name: "Logitech M185",
      price: "$20",
      image:
        "https://resource.logitech.com/content/dam/logitech/en/products/mice/m185/gallery/m185-gallery-1.png",
    },
    {
      name: "LG 1.5 Ton AC",
      price: "$550",
      image:
        "https://www.lg.com/content/dam/channel/wcms/in/images/air-conditioners/ps-q19wnze/gallery/PS-Q19WNZE-AT_1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80"
          alt="E-commerce banner"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-xl text-white">
              <p className="mb-3 text-lg font-semibold uppercase tracking-wider">
                Welcome to Our Store
              </p>

              <h1 className="mb-5 text-4xl font-bold md:text-6xl">
                Everything You Need,
                <span className="block">All in One Place</span>
              </h1>

              <p className="mb-7 text-lg text-gray-200">
                Discover the latest mobiles, laptops, accessories and
                electronics at amazing prices.
              </p>

              <Link
                to="/mobile"
                className="inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-xl"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <div className="mb-3 text-4xl">🚚</div>
            <h3 className="text-xl font-bold">Free Delivery</h3>
            <p className="mt-2 text-gray-500">
              Free delivery on selected orders.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <div className="mb-3 text-4xl">🔒</div>
            <h3 className="text-xl font-bold">Secure Payment</h3>
            <p className="mt-2 text-gray-500">
              Your payment information is safe with us.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <div className="mb-3 text-4xl">⭐</div>
            <h3 className="text-xl font-bold">Quality Products</h3>
            <p className="mt-2 text-gray-500">
              We provide quality products at great prices.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="mb-8 text-center">
          <p className="font-semibold text-blue-600">OUR PRODUCTS</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Products
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Check out some of our most popular products.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Product Image */}
              <div className="h-60 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Details */}
              <div className="p-5">

                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    {product.price}
                  </span>

                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                    View
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= SALE BANNER ================= */}
      <section className="bg-blue-600 py-14 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Special Deals Are Waiting For You!
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-blue-100">
          Find amazing products and great deals for your everyday needs.
        </p>

        <Link
          to="/mobile"
          className="mt-6 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
        >
          Explore Products
        </Link>
      </section>

    </div>
  );
}

