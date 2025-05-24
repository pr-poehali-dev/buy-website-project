import MinecraftHeader from "@/components/MinecraftHeader";
import DonatePackageCard from "@/components/DonatePackageCard";
import DonateForm from "@/components/DonateForm";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { donatePackages } from "@/data/donatePackages";
import { useDonatePackages } from "@/hooks/useDonatePackages";

const Index = () => {
  const {
    selectedPackage,
    showDonateForm,
    handleDonate,
    handleCloseDonateForm,
  } = useDonatePackages();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-900">
      <MinecraftHeader />
      <HeroSection />

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

      <FeaturesSection />

      {/* Donate Form Modal */}
      {showDonateForm && selectedPackage && (
        <DonateForm package={selectedPackage} onClose={handleCloseDonateForm} />
      )}
    </div>
  );
};

export default Index;
