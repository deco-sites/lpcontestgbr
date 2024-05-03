import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface SliderProps {
    id?: string
    bioText: HTMLWidget
    image: {
        src: ImageWidget;
        alt?: string;
    }
}

function Bio({ bioText, image, id="bio" }: SliderProps) {
    return (
        <section id={id} class="flex flex-col items-center gap-6 px-4 py-8 z-10 bg-theme-offwhite">
            <p
                dangerouslySetInnerHTML={{ __html: bioText }}
                class="text-theme-light-brown font-light"
            />
            <div class="relative w-80 h-80 m-4">
                <Image
                    class="w-80 h-80"
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                />

                <div class="w-full h-full absolute border border-theme-dark-beige -top-2 -left-2 z-10" />
            </div>
        </section>
    )
}

export default Bio
