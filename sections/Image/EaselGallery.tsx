import { ImageWidget } from "apps/admin/widgets.ts";
import IslandEaselGallery from "../../islands/IslandEaselGallery.tsx";

export interface Props {
  /**@description element id */
  id?: string
  images: {
    src: ImageWidget;
    /**
     * @default Gabriel's art
     * @title
     * */
    alt: string;
  }[];
}

function EaselGallery({ id="easelGallery", images }: Props) {
  return (
    <section id={id} class="bg-theme-gray py-16 px-4 flex flex-col lg:flex-row-reverse gap-16 items-center lg:justify-center">
        <h2 class="w-full lg:max-w-96 text-right text-5xl text-theme-light-brown font-serif">
            Explore diverse images and delve into the{" "}
            <strong class="text-theme-dark-brown font-normal">captivating</strong>
            {" "}
            details of each selected artwork
        </h2>

        <IslandEaselGallery images={images} />
    </section>
  );
}

export default EaselGallery;
