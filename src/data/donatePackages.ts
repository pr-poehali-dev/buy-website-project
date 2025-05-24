import { DonatePackage } from "@/types/donate";

export const donatePackages: DonatePackage[] = [
  {
    id: 1,
    name: "VIP",
    price: 299,
    originalPrice: 399,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    privileges: [
      "Цветной ник",
      "Киты каждые 12 часов",
      "Доступ к /fly",
      "Приватные регионы x2",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    id: 2,
    name: "Premium",
    price: 599,
    originalPrice: 799,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
    privileges: [
      "Все из VIP",
      "Доступ к /god",
      "Киты каждые 6 часов",
      "Креатив в регионах",
      "Телепорты без ожидания",
    ],
    popular: true,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 3,
    name: "Ultimate",
    price: 999,
    originalPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2ac1?w=400&h=300&fit=crop",
    privileges: [
      "Все из Premium",
      "Доступ к /vanish",
      "Киты каждые 3 часа",
      "WorldEdit",
      "Спавн мобов",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    name: "Legend",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    privileges: [
      "Все из Ultimate",
      "Кастомные команды",
      "Безлимитные регионы",
      "Модерские права",
      "Доступ к админ-панели",
    ],
    color: "from-yellow-500 to-orange-500",
  },
];
