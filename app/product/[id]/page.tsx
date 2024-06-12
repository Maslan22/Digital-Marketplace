import prisma from "@/app/lib/db";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

async function getData(id: string) {
  const data = await prisma.product.findUnique({
    where: {
      id,
    },
    select: {
      category: true,
      description: true,
      smallDescription: true,
      name: true,
      images: true,
      price: true,
      createdAt: true,
      User: {
        select: {
          profileImage: true,
          firstName: true,
        },
      },
    },
  });

  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  return (
    <section className="mx-auto px-4  lg:mt-10 max-w-7xl lg:px-8 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
      <Carousel className="">
        <CarouselContent>
            {data?.images.map((item, index)=>(
                <CarouselItem key={index} className="">
                    <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                        <Image src={item as string} alt="Product Image" fill className="object-cover w-full h-full rounded-lg"/>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
