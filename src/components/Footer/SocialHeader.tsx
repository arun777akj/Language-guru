import { useLocale } from "../../hooks/useLocale";
import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { TelegramIcon } from "../icons/TelegramIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

export const SocialHeader = () => {
  const t = useLocale(["Get connected with us on social networks:"]);
  return (
    <div className="flex items-center justify-center p-6 border-b border-gray-300 lg:justify-between">
      <div className="hidden mr-12 lg:block">
        <span>{t["Get connected with us on social networks:"]}</span>
      </div>
      <div className="flex justify-center">
        <a
          href="https://www.youtube.com/@LanguageGuruonlinecoachingwebs"
          target="blank"
          rel="noreferrer"
          className="mr-6 text-gray-600"
        >
          <label className="sr-only">Youtube</label>
          <YoutubeIcon />
        </a>
        <a
          href="https://t.me/LanguageGurur"
          target="blank"
          rel="noreferrer"
          className="mr-6 text-gray-600"
        >
          <label className="sr-only">Telegram</label>
          <TelegramIcon />
        </a>
        <a
          href="https://www.instagram.com/language_guru2"
          target="blank"
          rel="noreferrer"
          className="mr-6 text-gray-600"
        >
          <label className="sr-only">Instagram</label>
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61563793296992"
          target="blank"
          rel="noreferrer"
          className="mr-6 text-gray-600"
        >
          <label className="sr-only">Facebook</label>
          <FacebookIcon />
        </a>
        <a
          href="https://x.com/Language_Guru0?t=8m_XYBztkMrTrlARgejM4w&s=09"
          target="blank"
          rel="noreferrer"
          className="mr-6 text-gray-600"
        >
          <label className="sr-only">Twitter</label>
          <TwitterIcon />
        </a>
        <a
          href="tel:+13828850508"
          target="blank"
          rel="noreferrer"
          className="text-gray-600"
        >
          <label className="sr-only">WhatsApp</label>
          <WhatsAppIcon color="black" />
        </a>
      </div>
    </div>
  );
};
