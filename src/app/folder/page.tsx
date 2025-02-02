import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const title = (await searchParams).title;
  const icon = (await searchParams).icon;
  const iconUrl = `https://cdn.jsdelivr.net/npm/emoji-datasource-twitter/img/twitter/64/${
      Array.from(Array.isArray(icon) ? icon[0] : icon!)
        .map((char) => char.codePointAt(0)?.toString(16))
        .join("-")
    }.png`;

  return {
    title: typeof title === "string" && !!title ? title : "Awesome folder title",
    icons: {
      icon: iconUrl,
    }
  };
}

export default function Folder() {
  return (
    <div/>
  );
}
