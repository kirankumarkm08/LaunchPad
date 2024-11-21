import Link from "next/link";
import React from "react";
import Twitter from "@/public/assets/icons/x.svg";
import Internet from "@/public/assets/icons/internet.svg";
import Telegram from "@/public/assets/icons/telegram.svg";
import Discord from "@/public/assets/icons/discord.svg";
import Youtube from "@/public/assets/icons/youtube.svg";
import { SOCIALTYPE } from "@/types";

interface SocialLinksProps {
  name: SOCIALTYPE;
  url: string;
}

const SocialIconLink: React.FC<SocialLinksProps> = ({ name, url }) => {
  let icon;

  switch (name) {
    case "twitter":
      icon = (
        <Twitter className="w-6 h-6 text-light-graystone-500 dark:text-light-graystone-300" />
      );
      break;
    case "website":
      icon = (
        <Internet className="w-6 h-6 text-light-graystone-500 dark:text-light-graystone-300" />
      );
      break;
    case "telegram":
      icon = (
        <Telegram className="w-6 h-6 text-light-graystone-500 dark:text-light-graystone-300" />
      );
      break;
    case "discord":
      icon = (
        <Discord className="w-6 h-6 text-light-graystone-500 dark:text-light-graystone-300" />
      );
      break;
    case "youtube":
      icon = (
        <Youtube className="w-6 h-6 text-light-graystone-500 dark:text-light-graystone-300" />
      );
      break;
    default:
      throw new Error("Invalid social media platform");
  }

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      {icon}
    </Link>
  );
};

export default SocialIconLink;
