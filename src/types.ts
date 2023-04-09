export interface productType 
{
    id:number,
    name:string,
    price:number,
    image: string,
    category: string,
    description: string,
    title: string

}
export type addItemType =(product:productType)=> void


export interface CardProps{
product:productType,
addItem:addItemType,

removeItem:any, addedItems:any

    
}