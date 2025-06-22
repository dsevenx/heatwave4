import ReviewCard from "@/components/ReviewCard"
import { reviews } from "@/constants"

const CustomerReviews = () => {
  return (
    <section id="CustomerReviews" className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">

      <h3 className="font-palanquin text-4xl text-center font-bold">
        What Our <span className="text-coral-red inline-block">Customers</span> Say?
      </h3>

      <p className="text-lg text-slate-500 mb-10 mt-10 leading-normal text-center">
        Here genuine customer reviews will be showcased to build trust and credibility.
      </p>

      {/*
<div className={`
  mt-16 grid gap-14 w-full
  ${reviews.length === 1 ? 'grid-cols-1' : ''}
  ${reviews.length === 2 ? 'grid-cols-2' : ''}
  ${reviews.length >= 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : ''}
`}>
</div>
*/}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 w-full">
        {reviews.map((review) => (
          <div key={review.customerName} >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

    </section>

  )
}

export default CustomerReviews