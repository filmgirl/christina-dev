import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import IconBluesky from "@/assets/icons/IconBluesky.svg";
import IconMastodon from "@/assets/icons/IconMastodon.svg";
import IconInstagram from "@/assets/icons/IconInstagram.svg";
import IconYoutube from "@/assets/icons/IconYoutube.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "X",
    href: "https://x.com/film_girl",
    linkTitle: `${SITE.author} on X`,
    icon: IconBrandX,
  },
  {
    name: "GitHub",
    href: "https://github.com/filmgirl",
    linkTitle: `${SITE.author} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/filmgirl.bsky.social",
    linkTitle: `${SITE.author} on Bluesky`,
    icon: IconBluesky,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@film_girl",
    linkTitle: `${SITE.author} on Mastodon`,
    icon: IconMastodon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/film_girl",
    linkTitle: `${SITE.author} on Instagram`,
    icon: IconInstagram,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@ChristinaWarren",
    linkTitle: `${SITE.author} on YouTube`,
    icon: IconYoutube,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/filmgirl/",
    linkTitle: `${SITE.author} on LinkedIn`,
    icon: IconLinkedin,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
