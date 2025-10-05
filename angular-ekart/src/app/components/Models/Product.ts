export class Product{
      id: number;
      name: string;
      description: string;
      brand: string;
      gender: string;
      category: string;
      size: number[];
      color: string[];
      price: number;
      discountPrice ? :number; //ye optional hai sab shoes mein discount nahi hai
      is_in_inventory: boolean;
      items_left: number;
      imageURL: string;
      slug: string;
}