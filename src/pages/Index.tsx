import { useState } from "react";
import MinecraftHeader from "@/components/MinecraftHeader";
import DonatePackageCard from "@/components/DonatePackageCard";
import DonateForm from "@/components/DonateForm";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface DonatePackage {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  privileges: string[];
  popular?: boolean;
  color: string;
}

interface DonateItem {
  id: number;
  name: string;
  price: number;
  color: string;
}

const donatePackages: DonatePackage[] = [
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

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<DonateItem | null>(
    null,
  );
  const [showDonateForm, setShowDonateForm] = useState(false);

  const handleDonate = (donatePackage: DonatePackage) => {
    setSelectedPackage({
      id: donatePackage.id,
      name: donatePackage.name,
      price: donatePackage.price,
      color: donatePackage.color,
    });
    setShowDonateForm(true);
  };

  const handleCloseDonateForm = () => {
    setShowDonateForm(false);
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-900">
      <MinecraftHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-minecraft mb-6 text-yellow-400 drop-shadow-lg">
            MineServer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-200">
            Получи донат-привилегии мгновенно!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="bg-black/50 px-6 py-3 rounded-lg border border-green-500">
              <span className="text-green-400 font-mono">Онлайн: </span>
              <span className="text-white font-bold">247/500</span>
            </div>
            <div className="bg-black/50 px-6 py-3 rounded-lg border border-yellow-500">
              <span className="text-yellow-400 font-mono">IP: </span>
              <span className="text-white font-bold">play.mineserver.ru</span>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg"
          >
            <Icon name="Gamepad2" size={24} className="mr-2" />
            Начать играть
          </Button>
        </div>

        {/* Minecraft blocks decoration */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-amber-600 opacity-20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-green-600 opacity-20 rotate-12"></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-stone-600 opacity-20"></div>
      </section>

      {/* Donate Packages */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400 font-minecraft">
          Донат-привилегии
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donatePackages.map((pkg) => (
            <DonatePackageCard
              key={pkg.id}
              package={pkg}
              onDonate={handleDonate}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-black/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400 font-minecraft">
            Почему выбирают нас?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600/20 rounded-lg w-20 h-20 flex items-center justify-center mx-auto mb-4 border border-green-500">
                <Icon name="Zap" size={40} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Мгновенная выдача
              </h3>
              <p className="text-green-200">
                Привилегии выдаются автоматически после оплаты
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-lg w-20 h-20 flex items-center justify-center mx-auto mb-4 border border-green-500">
                <Icon name="Shield" size={40} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Безопасность
              </h3>
              <p className="text-green-200">
                Защищённые платежи и гарантия получения доната
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-lg w-20 h-20 flex items-center justify-center mx-auto mb-4 border border-green-500">
                <Icon name="Clock" size={40} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Поддержка 24/7
              </h3>
              <p className="text-green-200">
                Администрация поможет решить любые вопросы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Form Modal */}
      {showDonateForm && selectedPackage && (
        <DonateForm package={selectedPackage} onClose={handleCloseDonateForm} />
      )}
    </div>
  );
};

export default Index;
