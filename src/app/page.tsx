import Link from 'next/link';

export default function Home() {
  return (
       <div className="flex">
        <section className="flex flex-col gap-4 h-screen">
          <div>
            <Link href="/" replace>Main</Link>
          </div>
          <div>
            <Link href="/slides" replace>Slides</Link>
          </div>
          <div>
            <Link href="/songs" replace>Músicas</Link>
          </div>
          <div>
            <Link href="/videos" replace>Vídeos</Link>
          </div>
        </section>

        <main>This is where the content is gonna go</main>
       </div>
  );
}
