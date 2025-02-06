import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  hi: 'हिंदी',
};

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Languages className="w-5 h-5" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as keyof typeof languages)}
        className="bg-transparent border-none focus:ring-0"
      >
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}