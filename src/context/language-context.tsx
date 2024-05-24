import { useEffect, useState, createContext, useContext } from "react";

type Language = "SK" | "EN";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("SK");

  const toggleLanguage = () => {
    if (language === "SK") {
      setLanguage("EN");
      window.localStorage.setItem("language", "EN");
      document.documentElement.classList.remove("SK");
      document.documentElement.classList.add("EN");
    } else {
      setLanguage("SK");
      window.localStorage.setItem("language", "SK");
      document.documentElement.classList.remove("EN");
      document.documentElement.classList.add("SK");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language") as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);
      document.documentElement.classList.add(localLanguage);
    } else {
      setLanguage("SK");
      document.documentElement.classList.add("SK");
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
