import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface SliderProps {
    bioText: HTMLWidget
    image: {
        src: ImageWidget;
        alt?: string;
    }
}

function Bio({ bioText, image }: SliderProps) {
    return (
        <article class="flex flex-col gap-6 px-2 py-8">
            <p dangerouslySetInnerHTML={{ __html: bioText }} />
            <Image
                src={image.src}
                alt={image.alt}
                width={550}
                height={700}
            />
        </article>
    )
}

export default Bio
