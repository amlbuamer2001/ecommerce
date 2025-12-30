import { Button } from '@/src/components/ui/button'
export default function ProductDetailsCard({ data }: { data: any }) {
  return (
   <div className="container w-full lg:w-[80%] flex items-center mx-auto my-10 ">
        <div className="w-full lg:w-1/4">
          <img
            src={data.imageCover}
            alt={data.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full lg:w-3/4">
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-gray-700 mb-2">{data.description}</p>
            <p className="text-gray-500 mb-2">{data.category.name}</p>
            <div className="flex justify-between items-center w-full">
              <span className="font-bold text-lg text-emerald-600">
                ${data.price}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                {data.ratingsAverage}
                <i className="fas fa-star text-yellow-500"></i>
              </span>
            </div>
            <Button className="cursor-pointer mt-3 w-full">Add to Cart</Button>
          </div>
        </div>
      </div>
  )
}
