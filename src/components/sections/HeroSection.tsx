import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
