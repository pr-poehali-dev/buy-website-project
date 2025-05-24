import { useState } from "react";
import { DonateItem, DonatePackage } from "@/types/donate";

export const useDonatePackages = () => {
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

  return {
    selectedPackage,
    showDonateForm,
    handleDonate,
    handleCloseDonateForm,
  };
};
