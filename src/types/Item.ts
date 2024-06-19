export interface Item {
    itemId: number;
    name: string;
    type: string;
    size: string;
    manufacturer: string;
    dateAdded: Date;
    price: number;
    picturePath: string;
    inWishList?: boolean;
}