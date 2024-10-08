import { ComboBox } from "@/app/components/ui/combobox";
import { MapPin } from "lucide-react";

const Navigation = () => {
  return (
    <header className="py-4 px-8 flex items-center justify-between">
      <div>
        <MapPin />
        <ComboBox cities={[]} />
      </div>
    </header>
  );
};

export default Navigation;
