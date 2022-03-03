export interface Icategory{
    id:number;
    name:string;
}

export enum DiscountOffers {
'noDiscount'='nodiscount',
 "10%"='10%',
 "20%"='20%',

}
export interface Iproduct{

    id:number;
    name:string;
    quantity:number;
    price:number;
    img:string;
}