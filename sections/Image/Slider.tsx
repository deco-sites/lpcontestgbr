import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface SliderProps {
    /**@description element id */
    id?: string
    images: {
        /**
        * @default Gabriel's art
        * @title
        * */
        src: ImageWidget;
        alt?: string;
    }[]
}

//animation: verticalScroll var(--_animation-duration,30s) var(--_animation-direction,forwards) linear infinite;

function Slider({ id="slider", images }: SliderProps) {
  return (
        <div id={id} class="flex flex-row max-h-36 lg:max-h-56 overflow-x-scroll overflow-y-hidden scrollbar-none">
            { images && images.map(image => (
                <div class="min-w-72 lg:min-w-[600px] h-36 lg:h-[800px] flex justify-center items-center">
                    <Image
                        class="w-72 lg:w-[600px] h-96 lg:h-[800px] lg:-translate-y-1/3"
                        src={image.src}
                        alt={image.alt || `Gabriel's drawing`}
                        width={600}
                        height={300}
                        preload
                        loading="eager"
                        fetchPriority="high"
                    />
                </div>
            ))}
        </div>
  )
}

export default Slider
