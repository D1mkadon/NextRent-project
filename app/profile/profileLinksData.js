import { UserRound } from "lucide-react";
import { Wallet } from "lucide-react";
import { Boxes } from "lucide-react";
import { Tag } from "lucide-react";

export const profileLinksData = [
  {
    text: "personal information",
    Icon: <UserRound />,
    link: "/personal_information",
  },
  {
    text: "my coupons",
    Icon: <Tag />,
    link: "/coupons",
  },
  {
    text: "my purchases",
    Icon: <Wallet />,
    link: "/purchases",
  },
  {
    text: "my orders",
    Icon: <Boxes />,
    link: "/orders",
  },
];
