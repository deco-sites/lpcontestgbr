import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  images: {
    src: ImageWidget;
    alt?: string;
  }[];
}

function EaselGallery({ images }: Props) {
  return (
    <section class="bg-theme-gray py-16 px-4 flex flex-col gap-16 items-center">
        <h2 class="w-full text-right text-5xl text-theme-light-brown font-serif">
            Explore diverse images and delve into the{" "}
            <strong class="text-theme-dark-brown font-normal">captivating</strong>
            {" "}
            details of each selected artwork
        </h2>

        <div class="w-full h-auto flex flex-col items-center gap-6">
            {/* hastes traseiras */}
            <div class="min-h-96 relative w-72 max-w-72">
                <div class="rounded-sm bg-theme-light-brown w-6 h-3 absolute top-0 left-1/2 -translate-x-1/2  z-10" />
                <div class="rounded-sm bg-theme-dark-brown w-3 h-full absolute left-1/2 -top-6 -translate-x-1/2 z-0" />
                <div class="rounded-sm bg-theme-light-brown w-4 h-full -bottom-2 absolute left-24 rotate-6 z-10" />
                <div class="rounded-sm bg-theme-light-brown w-4 h-full -bottom-2 absolute right-24 -rotate-6 z-10" />

                <div class="rounded-sm bg-white w-44 h-64 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 shadow-md overflow-hidden">
                    <Image
                    class=""
                    src={images[3].src || "https://i.pinimg.com/736x/41/2e/3b/412e3b1eca6d3224183dac182fff26aa.jpg"}
                    alt={`IA drawing`}
                    width={320}
                    height={400}
                    />
                </div>

                <div class="rounded-sm bg-theme-light-brown w-36 h-3 bottom-10 absolute right-1/2 translate-x-1/2 z-10 shadow-md" />
            </div>

            <div class="w-full flex flex-row max-h-36 overflow-x-scroll overflow-y-hidden scrollbar-none">
            {images &&
                images.map((image, index) => (
                <div class={`w-12 min-w-12 h-32 flex justify-center items-center overflow-hidden relative ${index == 3 && 'scale-150'}`}>
                    <div class={`absolute w-full h-full bg-black opacity-40 ${index == 3 && '!opacity-0'} hover:cursor-pointer hover:opacity-0 transition-all`} />
                    <Image
                    class="max-w-none"
                    src={image.src}
                    alt={image.alt || `Gabriel's drawing`}
                    width={300}
                    height={160}
                    />
                </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default EaselGallery;
