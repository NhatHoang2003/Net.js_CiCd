type Params = {
  params: {
    slug: string;
  };
};

// 👇 THÊM CÁI NÀY
export function generateStaticParams() {
  return [
    { slug: "post-1" },
    { slug: "post-2" },
  ];
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>This is the content for the post with slug:</p>
    </>
  );
}