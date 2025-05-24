import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface DonateItem {
  id: number;
  name: string;
  price: number;
  color: string;
}

interface DonateFormProps {
  package: DonateItem;
  onClose: () => void;
}

const DonateForm = ({ package: pkg, onClose }: DonateFormProps) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) {
      alert("Введите никнейм игрока!");
      return;
    }

    setIsProcessing(true);

    // Имитация обработки платежа
    setTimeout(() => {
      alert(
        `Донат успешно оформлен! Привилегия "${pkg.name}" будет выдана игроку ${nickname} в течение 5 минут.`,
      );
      setIsProcessing(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
      <Card className="w-full max-w-md mx-4 bg-black/90 border-2 border-green-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-yellow-400">
            <span className="font-minecraft">Оформление доната</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-green-200 hover:text-red-400"
            >
              <Icon name="X" size={20} />
            </Button>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="mb-6 p-4 bg-green-900/30 rounded-lg border border-green-600">
            <div
              className={`h-20 bg-gradient-to-r ${pkg.color} rounded mb-3 flex items-center justify-center`}
            >
              <span className="text-2xl font-bold text-white font-minecraft">
                {pkg.name}
              </span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-yellow-400">
                {pkg.price} ₽
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="nickname" className="text-green-200">
                Никнейм игрока *
              </Label>
              <Input
                id="nickname"
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Введите ваш игровой ник"
                className="bg-black/50 border-green-600 text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-green-200">
                Email (необязательно)
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-black/50 border-green-600 text-white placeholder-gray-400"
              />
            </div>

            <div className="pt-4 space-y-3">
              <Button
                type="submit"
                disabled={isProcessing}
                className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 font-bold text-white`}
              >
                {isProcessing ? (
                  <>
                    <Icon
                      name="Loader2"
                      size={20}
                      className="animate-spin mr-2"
                    />
                    Обработка платежа...
                  </>
                ) : (
                  <>
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оплатить {pkg.price} ₽
                  </>
                )}
              </Button>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-green-600 text-green-200"
                >
                  <Icon name="Smartphone" size={16} className="mr-2" />
                  СБП
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-green-600 text-green-200"
                >
                  <Icon name="CreditCard" size={16} className="mr-2" />
                  Карта
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-4 p-3 bg-yellow-900/30 rounded border border-yellow-600">
            <p className="text-xs text-yellow-200 flex items-start gap-2">
              <Icon name="Info" size={14} className="mt-0.5 flex-shrink-0" />
              Привилегии выдаются автоматически в течение 5 минут после оплаты.
              При возникновении проблем обращайтесь в Discord.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonateForm;
