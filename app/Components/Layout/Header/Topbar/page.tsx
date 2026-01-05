import { messages } from "@/lib/i18n";
import { useUIStore } from "@/store/ui.store";

export const TopBar = () => {

    const { lang } = useUIStore();
    const t = messages[lang];

  return (
    <div className="w-full h-8 bg-Lapis text-white flex items-center justify-evenly text-sm font-medium">
      <div className="flex justify-center">
        {t.test}
      </div>
    </div>
  );
};
