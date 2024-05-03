import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface SliderProps {
    /**
     * @description element id
     */
    id?: string
    bioText: HTMLWidget
    image: {
        src: ImageWidget;
        /**
        * @default Gabriel's art
        * @title
        * */
        alt?: string;
    }
}

function Bio({ bioText, image, id="bio" }: SliderProps) {
    return (
        <section id={id} class="flex flex-col lg:flex-row lg:justify-center items-center gap-6 px-4 py-8 lg:py-16 z-10 bg-theme-offwhite">
            <p
                dangerouslySetInnerHTML={{ __html: bioText }}
                class="text-theme-light-brown font-light lg:max-w-3xl lg:text-lg"
            />
            <div class="relative w-80 h-80 m-4">
                <Image
                    class="w-80 h-80 lg:rounded-tl-[256px]"
                    src={image.src}
                    alt={image.alt}
                    width={468}
                    height={639}
                />

                <div class="w-full h-full absolute border lg:rounded-tl-[256px] border-theme-dark-beige -top-2 -left-2 z-10" />
            </div>
        </section>
    )
}

export default Bio
