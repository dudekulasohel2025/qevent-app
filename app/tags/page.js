import Tag from "@/components/Tag";

async function getTags() {
  const res = await fetch("https://qevent-backend.labs.crio.do/tags", {
    cache: "no-store",
  });
  return res.json();
}

export default async function TagsPage() {
  const tags = await getTags();

  return (
    <div className="p-6 flex flex-wrap gap-4">
      {tags.map((tag) => (
        <Tag key={tag.id} text={tag.name} />
       ))}
    </div>
  );
}