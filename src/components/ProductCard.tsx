import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <Badge className="absolute top-3 left-3 bg-red-500 text-white">
              -{discount}%
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Badge variant="secondary" className="text-gray-800">
                Нет в наличии
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <Badge variant="outline" className="mb-2 text-xs">
          {product.category}
        </Badge>
        <CardTitle className="text-lg font-montserrat mb-2 line-clamp-2">
          {product.name}
        </CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            {product.price.toLocaleString("ru-RU")} ₽
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {product.originalPrice.toLocaleString("ru-RU")} ₽
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock || isAdding}
          className="w-full bg-primary hover:bg-primary/90 transition-colors"
        >
          {isAdding ? (
            <>
              <Icon name="Loader2" size={16} className="animate-spin mr-2" />
              Добавляю...
            </>
          ) : (
            <>
              <Icon name="ShoppingCart" size={16} className="mr-2" />В корзину
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
