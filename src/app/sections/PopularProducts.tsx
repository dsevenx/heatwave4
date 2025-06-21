import PoppularProductCard from "@/components/PoppularProductCard"
import { products } from "@/constants"


const PopularProducts = () => {
  return (
    <section id="products">
      <div className="flex flex-coll justify-srat gap-5">
        <h2 className="text-4xl font-bold font-palanquin" >
          Our <span className="text-coral-red">Popular </span>
          Products</h2></div>
      <p className="lg:max-w-lg mt-2 text-slate-500">Experience top-notch quality and style with our sought-after selections. Dicover a world of comfort, design and value</p>

      <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {products.map((product) => (
          <PoppularProductCard key={product.name} product={product}/>))
        }
      </div>

    </section>
  )
}

export default PopularProducts