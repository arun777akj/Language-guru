import { useRouter } from "next/router";
import { en } from "../locales/en";
import { fr } from "../locales/ml";

export const useLocale = (props: string[]): { [key: string]: string } => {
  const { locale } = useRouter();

  if (locale)
    return props.reduce((a, v) => {
      const val = locale === "en" ? en[v] : fr[v];

      if (val) return { ...a, [v]: val };
      return { ...a, [v]: v };
    }, {});

  return {};
};
