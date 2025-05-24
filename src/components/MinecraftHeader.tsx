import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MinecraftHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-green-600 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-600 border-2 border-green-400"></div>
          <h1 className="text-2xl font-bold text-yellow-400 font-minecraft">
            MineServer
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Button
            variant="ghost"
            className="text-green-200 hover:text-yellow-400 font-medium"
          >
            Главная
          </Button>
          <Button
            variant="ghost"
            className="text-green-200 hover:text-yellow-400 font-medium"
          >
            Донат
          </Button>
          <Button
            variant="ghost"
            className="text-green-200 hover:text-yellow-400 font-medium"
          >
            Правила
          </Button>
          <Button
            variant="ghost"
            className="text-green-200 hover:text-yellow-400 font-medium"
          >
            Форум
          </Button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-green-200 hover:text-yellow-400"
          >
            <Icon name="Users" size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-green-200 hover:text-yellow-400"
          >
            <Icon name="MessageCircle" size={20} />
          </Button>
          <Button
            variant="outline"
            className="border-green-600 text-green-200 hover:bg-green-600 hover:text-white"
          >
            <Icon name="LogIn" size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MinecraftHeader;
