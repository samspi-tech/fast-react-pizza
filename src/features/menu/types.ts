export type Pizza = {
    id: number;
    imageUrl: string;
    ingredients: string[];
    name: string;
    soldOut: boolean;
    unitPrice: number;
};

export type PizzaMenu = Pizza[] | undefined;
