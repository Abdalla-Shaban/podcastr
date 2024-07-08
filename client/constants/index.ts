import { Appearance } from "@clerk/types";
import homeIcon from "../public/icons/home.svg";
import discoverIcon from "../public/icons/discover.svg";
import podcastIcon from "../public/icons/podcast.svg";
import userIcon from "../public/icons/user.svg";
export const ClerkAppearance: Appearance = {
  layout: {
    logoImageUrl: "/icons/LOGO.svg",
    socialButtonsVariant: "iconButton",
  },

  variables: {
    colorBackground: "#15171C",
    colorPrimary: "",
    colorText: "white",
    colorInputBackground: "#1b1f29",
    colorInputText: "white",
  },

  elements: {
    logoImage: {
      width: "10rem",
      height: "3rem",
    },
    socialButtonsIconButton: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.85)",
      },
    },
    providerIcon: {
      width: "20px",
    },
    dividerLine: {
      backgroundColor: "#71788B",
    },
    formButtonPrimary: {
      backgroundColor: "#F97535",
      "&:hover": {
        backgroundColor: "rgba(249, 117, 53, 0.6)",
      },
    },
  },
};

export const SidebarLinks = [
  {
    label: "Home",
    url: "/",
    imgSrc: homeIcon,
  },
  {
    label: "Discover",
    url: "/discover",
    imgSrc: discoverIcon,
  },
  {
    label: "Create Podcast",
    url: "/create-podcast",
    imgSrc: podcastIcon,
  },
  {
    label: "My Profile",
    url: "/profile",
    imgSrc: userIcon,
  },
];
