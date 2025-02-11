//dynamic image

//const images = `/public/assets/images`;
export const dynamicImage = (image: string | undefined) => {
    return image;
};

//dynamic Number
export function dynamicNumber(totalLength: number) {
    return Array.from({ length: totalLength }, (_, index) => index + 1);
// eslint-disable-next-line no-extra-semi
};

