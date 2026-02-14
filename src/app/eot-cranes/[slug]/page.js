import eotCranesData from "@/app/apis/eot-cranes";
import EotCranesComponent from "./_components/eot-cranes";
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const item = eotCranesData.find((val) => val.slug == slug);

  if (!item) {
    return {
      title: "Crane Not Found",
      description: "Requested crane page not found",
    };
  }

  return {
    title: item.seo?.title || item.title,
    description: item.seo?.description || item.description,
    keywords: item.seo?.keywords || [],
    alternates: {
      canonical: item.seo?.canonical || "",
    },
    openGraph: {
      title: item.seo?.title || item.title,
      description: item.seo?.description || item.description,
      url: item.seo?.canonical || "",
      images: [
        {
          url: item.mainImage,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  console.log(slug);

  const item = eotCranesData.find((val) => val.slug === slug);

  if (!item) {
    return <div className="text-center py-20">Item Not Found</div>;
  }

  return <EotCranesComponent selectedItem={item} />;
}
