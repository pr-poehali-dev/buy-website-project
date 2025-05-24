import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Zap",
    title: "Мгновенная выдача",
    description: "Привилегии выдаются автоматически после оплаты",
  },
  {
    icon: "Shield",
    title: "Безопасность",
    description: "Защищённые платежи и гарантия получения доната",
  },
  {
    icon: "Clock",
    title: "Поддержка 24/7",
    description: "Администрация поможет решить любые вопросы",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-black/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400 font-minecraft">
          Почему выбирают нас?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-600/20 rounded-lg w-20 h-20 flex items-center justify-center mx-auto mb-4 border border-green-500">
                <Icon
                  name={feature.icon as any}
                  size={40}
                  className="text-yellow-400"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                {feature.title}
              </h3>
              <p className="text-green-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
