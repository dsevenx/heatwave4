
export type Service4Card = {
    imgURL: string;
    label: string;
    subtext: string;

}; export type Shoe = {
    thumbnail: string;
    changeBigShoeImage: (image: string) => void;
    bigShowImageShoe: string;
    bigShowImageAnzeige: string;
};
export type Product4Card = {
    imgURL: string;
    name: string;
    price: string;

};

export type Review4Card = {
    imgURL: string,
    customerName: string,
    rating: number,
    feedback: string
};


