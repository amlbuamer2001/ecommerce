import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/src/components/ui/card";
export default function SingleProduct({ product }: { product: any }) {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 " key={product._id}>
            <div className="p-2">
              <Card className="gap-0">
                <CardHeader>
                  <img
                    src={product.imageCover}
                    className="img-fluid rounded-2xl overflow-hidden"
                    alt={product.title}
                  />

                  <CardDescription>{product.category.name}</CardDescription>
                  {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent>
                  <p className="font-bold cursor-pointer line-clamp-2">
                    {product.title}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between items-center w-full">
                    <span className="font-bold text-lg text-emerald-600">
                      ${product.price}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      {product.ratingsAverage}
                      <i className="fas fa-star text-yellow-500"></i>
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
  )
}
