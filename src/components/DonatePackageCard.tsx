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

interface DonatePackageCardProps {
  package: DonatePackage;
  onDonate: (pkg: DonatePackage) => void;
}

const DonatePackageCard = ({
  package: pkg,
  onDonate,
}: DonatePackageCardProps) => {
  const discount = pkg.originalPrice
    ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
    : 0;

  return (
    <Card
      className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-black/40 border-2 ${
        pkg.popular
          ? "border-yellow-500 ring-2 ring-yellow-500/50"
          : "border-green-600"
      } backdrop-blur`}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <div
            className={`h-32 bg-gradient-to-r ${pkg.color} opacity-80`}
          ></div>
          <div className="absolute inset-0 bg-black/30"></div>

          {pkg.popular && (
            <Badge className="absolute top-3 left-3 bg-yellow-500 text-black font-bold">
              🔥 ПОПУЛЯРНЫЙ
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="absolute top-3 right-3 bg-red-500 text-white">
              -{discount}%
            </Badge>
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-3xl font-bold text-white font-minecraft drop-shadow-lg">
              {pkg.name}
            </h3>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-3xl font-bold text-yellow-400">
            {pkg.price} ₽
          </span>
          {pkg.originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              {pkg.originalPrice} ₽
            </span>
          )}
        </div>

        <div className="space-y-2">
          <h4 className="text-green-400 font-semibold mb-2">Привилегии:</h4>
          {pkg.privileges.map((privilege, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-green-200"
            >
              <Icon
                name="Check"
                size={14}
                className="text-green-400 flex-shrink-0"
              />
              <span>{privilege}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onDonate(pkg)}
          className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 transition-all font-bold text-white`}
        >
          <Icon name="CreditCard" size={16} className="mr-2" />
          Купить привилегию
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonatePackageCard;
