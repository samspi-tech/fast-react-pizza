export type CartItemTypes = {
    pizzaId?: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    addIngredients?: string[];
    removeIngredients?: string[];
};
