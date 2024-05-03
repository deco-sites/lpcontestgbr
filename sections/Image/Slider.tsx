import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface SliderProps {
    id?: string
    images: {
        src: ImageWidget;
        alt?: string;
    }[]
}

function Slider({ id="slider", images }: SliderProps) {
  return (
    <div id={id} class="flex flex-row max-h-36 overflow-x-scroll overflow-y-hidden scrollbar-none">
        { images && images.map(image => (
            <div class="w-72 h-36 flex justify-center items-center">
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
  )
}

export default Slider
