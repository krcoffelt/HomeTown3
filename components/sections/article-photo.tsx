import Image from "next/image";
import { SectionShell } from "@/components/layout/section-shell";
import { articlePhotography, type ArticlePhotoItem } from "@/data/article-photography";

export function PhotoCredit({ photo }: { photo: ArticlePhotoItem }) {
  return (
    <span className="text-xs leading-relaxed text-muted-foreground">
      Stock photo · <a href={photo.photographerHref} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-accent">{photo.photographer}</a>
      {" / "}<a href={photo.sourceHref} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-accent">Pexels</a>
      {" · "}<a href={photo.licenseHref} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-accent">License</a>
    </span>
  );
}

export function ArticlePhoto({ photo }: { photo: ArticlePhotoItem }) {
  return (
    <figure id="article-photo" className="my-10 scroll-mt-28" data-article-photo>
      <a href={photo.sourceHref} target="_blank" rel="noreferrer" aria-label={`View this stock photo on Pexels by ${photo.photographer}`} className="group relative block aspect-[8/5] overflow-hidden rounded-[1rem] bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 92vw, 1024px" loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
      </a>
      <figcaption className="mt-4 grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{photo.caption}</p>
        <PhotoCredit photo={photo} />
      </figcaption>
    </figure>
  );
}

export function ArticlePhotoSection({ slug }: { slug: string }) {
  const photo = articlePhotography[slug];
  return photo ? <SectionShell className="py-0 md:py-0"><div className="mx-auto max-w-5xl"><ArticlePhoto photo={photo} /></div></SectionShell> : null;
}
