import { notFound } from "next/navigation";

async function getData(category: string) {

    let input;

    switch (category) {
        case "template" : {
            input =  'template';
            break;
        } case "uikit" : {
            input =  'uikit';
            break;
        }case "icon" : {
            input =  'icon';
            break;
        }case "all" : {
            input =  'all';
            break;
        }default : {
            return notFound();
        }
    }
}

export default function CategoryPage() {

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-4">

            </div>
        </section>
    )
}
