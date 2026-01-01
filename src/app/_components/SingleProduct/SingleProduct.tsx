import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function SingleProduct({ product }: { product: any }) {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 " key={product._id}>
      <div className="p-2">
        <Card className="gap-2 px-3">
          <Link href={`/products/${product._id}`}>
            <CardHeader>
              <Image
                width={300}
                height={300}
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
            <CardFooter className="block">
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
          </Link>
          <Button className="w-full mt-3 cursor-pointer">Add to Cart</Button>
        </Card>
      </div>
    </div>
  );
}
