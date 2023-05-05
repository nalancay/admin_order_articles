import React, { useState } from "react";
import messageEN from "lang/en-US.json";
import messageES from "../lang/es-ES";
import { IntlProvider } from "react-intl";

const LangContext = React.createContext();

const LangProvider = ({ children }) => {
  const lang = localStorage.getItem("lang") ?? "en-US";
  let defaultMessages = lang === "en-US" ? messageEN : messageES;

  const [message, setMessage] = useState(defaultMessages);
  const [locale, setLocale] = useState("en-US");

  const setLang = (lang) => {
    switch (lang) {
      case "en-US":
        setMessage(messageEN);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
      case "es-ES":
        setMessage(messageES);
        setLocale("es-ES");
        localStorage.setItem("lang", "es-ES");
        break;
      default:
        setMessage(messageEN);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
    }
  };

  return (
    <LangContext.Provider value={{ setLang }}>
      <IntlProvider locale={locale} messages={message}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

export { LangProvider, LangContext };
