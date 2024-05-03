import Image from "apps/website/components/Image.tsx";
import { useSignal } from '@preact/signals'
import Theme from "apps/website/components/Theme.tsx";

export interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

function IslandEaselGallery({ images }: Props) {
  const selectedImageIndex = useSignal(0)

  return (
    <div class="w-full lg:max-w-[700px] h-auto flex flex-col lg:flex-row-reverse items-center gap-6">
      {/* hastes traseiras */}
      <div class="min-h-[470px] relative w-72 max-w-72">
        <div class="rounded-sm  bg-theme-light-brown w-6 h-3 absolute -top-2 left-1/2 -translate-x-1/2  z-10" />
        <div class={`rounded-sm bg-theme-dark-brown w-3 h-full absolute left-1/2 -top-6 -translate-x-1/2 z-0`} />
        <div class="rounded-sm border-r-2 border-t border-theme-easel-border bg-theme-light-brown w-4 h-full -bottom-2 absolute left-24 rotate-6 z-10" />
        <div class="rounded-sm border-l-2 border-t border-theme-easel-border bg-theme-light-brown w-4 h-full -bottom-2 absolute right-24 -rotate-6 z-10" />

        <div class="rounded-sm bg-white w-60 h-80 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 shadow-md overflow-hidden">
          <Image
            class=""
            src={images[selectedImageIndex.value].src ||
              "https://i.pinimg.com/736x/41/2e/3b/412e3b1eca6d3224183dac182fff26aa.jpg"}
            alt={`IA drawing`}
            width={240}
            height={320}
          />
        </div>

        <div class="rounded-sm bg-theme-light-brown w-40 h-3 bottom-12 absolute right-1/2 translate-x-1/2 z-10 shadow-md" />
      </div>

      <div class="w-full max-w-72 flex flex-row lg:flex-col max-h-36 lg:max-h-[500px] overflow-x-scroll lg:overflow-x-hidden overflow-y-hidden lg:overflow-y-scroll scrollbar-none">
        {images &&
          images.map((image, index) => (
            <div
              onClick={() => selectedImageIndex.value = index}
              class={`${
                index == selectedImageIndex.value ? "w-16" : "w-14"
              } min-w-14 lg:min-w-80 h-32 lg:h-20 flex justify-center items-center overflow-hidden relative`}
            >
              <div
                class={`absolute w-full h-full bg-black opacity-40 ${
                  index == selectedImageIndex.value && "!opacity-0"
                } hover:cursor-pointer hover:opacity-0 transition-all`}
              />
              <Image
                class="max-w-none"
                src={image.src}
                alt={image.alt || `Gabriel's drawing`}
                width={367}
                height={488}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default IslandEaselGallery;
