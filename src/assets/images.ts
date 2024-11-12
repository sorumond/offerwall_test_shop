export const allImages = import.meta.glob('./*.png');

export async function getAllImages() {
    const images: { [key: string]: string } = {};
    for (const img in allImages) {
        const image = await allImages[img]().then((image: any): Promise<{ default: string }> => {
            return image;
        })
        images[img] = image.default;
    }

    return images;
}
