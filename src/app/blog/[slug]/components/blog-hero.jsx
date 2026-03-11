import Image from "next/image";

export default function BlogHero({ img }) {
  return (
    <div className="mb-8 overflow-hidden rounded-xl shadow-xl">
      <Image
        src={`${process.env.NEXT_PUBLIC_API}/${img}`}
        width={1200}
        height={600}
        alt="blog-img"
        className="h-96 w-full object-cover"
        priority
      />
    </div>
  );
}
