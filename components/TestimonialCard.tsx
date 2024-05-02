import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface TestimonialCardProps {
    image: {
        src: ImageWidget
        /**@default Gabriel's art */
        alt?: string
    }
   /**@format textarea */
    content: string
    autor: string
}

function TestimonialCard({ image, autor, content}: TestimonialCardProps) {
    return (
        <div class="flex flex-col items-center gap-11 px-4 py-6 rounded-md min-w-56 max-w-56 border border-theme-light-beige bg-theme-white">
            <div class="rounded-full w-28 h-28 overflow-hidden flex justify-center items-center">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={122}
                />
            </div>

            <p class="font-light text-sm text-theme-dark-brown text-center">
                {content}
            </p>

            <span class="font-light text-xs text-slate-400">{autor}</span>
        </div>
    )
}

export default TestimonialCard
