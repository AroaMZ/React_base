export interface SelectedCheck{
    selected: boolean;
}




export interface PictureInfo extends SelectedCheck{
    id : number;
    name: string;
    price: string;
    imgUrl: number;
   }