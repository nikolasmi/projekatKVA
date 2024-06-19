export interface Cart {
    cartId: number;
    userId: number;
    itemId: number;
    itemName: string;
    itemPicturePath: string,
    itemPrice: number,
    quantity: number;
}