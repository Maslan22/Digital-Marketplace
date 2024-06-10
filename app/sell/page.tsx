import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";

export default function SellRoute() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-8">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell your product with ease</CardTitle>
            <CardDescription>
              Please describe your product here in detail so that it can be sold
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
                <Label>Name</Label>
                <Input type="text" placeholder="Name of your Product" />
            </div>
            <div className="flex flex-col gap-y-2">
                <Label>Category</Label>
                <SelectCategory />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Price</Label>
              <Input type="number" placeholder="29$" />
            </div>

            <div className="flex flex-col gap-y-2">
              <label>Small Summary</label>
              <Textarea placeholder="Please describe your product shortly right here..."/>
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
}
