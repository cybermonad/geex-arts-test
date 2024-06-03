import CompanyIcon from "../svg/CompanyIcon"
import HomeIcon from "../svg/HomeIcon"
import RatingIcon from "../svg/RatingIcon"
import ShopIcon from "../svg/ShopIcon"
import TrophyIcon from "../svg/TrophyIcon"

const navLinks = [
  {
    text: "Лента",
    href: "/feed",
    icon: <HomeIcon />
  },
  {
    text: "Маркетплейс",
    href: "/shop",
    icon: <ShopIcon />
  },
  {
    text: "Рейтинги",
    href: "/ratings",
    icon: <RatingIcon />
  },
  {
    text: "Cоревнования",
    href: "/tournaments",
    icon: <TrophyIcon />
  },
  {
    text: "Организации",
    href: "companies",
    icon: <CompanyIcon />
  }
]

export default navLinks

