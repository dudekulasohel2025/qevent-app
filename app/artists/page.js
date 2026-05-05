import ArtistCard from "@/components/ArtistCard";

async function getArtists() {
  const res = await fetch("https://qevent-backend.labs.crio.do/artists", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ArtistsPage() {
  const artists = await getArtists();

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artistData={artist} />
      ))}
    </div>
  );
}