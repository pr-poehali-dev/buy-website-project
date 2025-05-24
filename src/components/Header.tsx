import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ShoppingCart from "./ShoppingCart";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface HeaderProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const Header = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Store" size={28} className="text-primary" />
          <h1 className="text-2xl font-bold font-montserrat text-primary">
            ShopSpace
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="font-medium">
            Каталог
          </Button>
          <Button variant="ghost" className="font-medium">
            Акции
          </Button>
          <Button variant="ghost" className="font-medium">
            О нас
          </Button>
          <Button variant="ghost" className="font-medium">
            Контакты
          </Button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Icon name="Search" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Heart" size={20} />
          </Button>
          <ShoppingCart
            items={cartItems}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
            onCheckout={onCheckout}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
