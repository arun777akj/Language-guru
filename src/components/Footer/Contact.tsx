import { useLocale } from "../../hooks/useLocale";
import { AddressIcon } from "../icons/AddressIcon";
import { MailIdIcon } from "../icons/MailIdIcon";
import { PhoneIcon } from "../icons/PhoneIcon";

export const Contact = () => {
  const t = useLocale([
    "CONTACT",
    "48 Kelvin Avenue , Kitchener , Ontario N2M 3N8",
  ]);
  return (
    <div>
      <h3 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
        {t["CONTACT"]}
      </h3>
      <div className="grid grid-cols-8 mb-4 md:justify-start">
        <AddressIcon />
        <p className="col-span-7 text-left">
          {
            t[
              "48 Kelvin Avenue , Kitchener , Ontario N2M 3N8"
            ]
          }
        </p>
      </div>
      <div className="grid grid-cols-8 mb-4 md:justify-start">
        <MailIdIcon />
        <p className="col-span-7 text-left whitespace-pre-wrap">
          contact.languageguru@gmail.com
        </p>
      </div>
      <div className="grid grid-cols-8 mb-4 md:justify-start">
        <PhoneIcon />
        <p className="col-span-7 text-left">+1(382)885-0508</p>
      </div>
    </div>
  );
};
