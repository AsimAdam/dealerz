export interface productType {
    isAdded: boolean;

    id:number,
    name:string,
    price:number,
    image: string,
    category: string,
    description: string,
    title: string

}

export type addItemType = (product: productType) => void;


export interface CardProps {

    product: productType & {isAdded?: boolean},
    addItem: addItemType,
    removeItem: any, 
    addedItems: any    
}
