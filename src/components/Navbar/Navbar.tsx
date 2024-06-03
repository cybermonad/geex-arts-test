import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"
import BurgerIcon from "../../svg/BurgerIcon"
import LanguageRuIcon from "../../svg/LanguageRuIcon"
import ArrowDownIcon from "../../svg/ArrowDownIcon"
import ProfileIcon from "../../svg/ProfileIcon"
import useCheckDesktopScreen from "../../hooks/useCheckDesktopScreen"
import navLinks from "../../constants/navLinks"
import Logo from "../../svg/Logo"
import LoginDialog from "../LoginDialog/LoginDialog"
import LoginForm from "../LoginForm/LoginForm"

export default function Navbar() {
  const isDesktop = useCheckDesktopScreen()
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const toggleLoginOpen = () => {
    setIsLoginOpen(!isLoginOpen)
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className="container">
          <ul className={styles.nav_wrapper}>
            <li className={styles.nav_logo}>
              <Link to="/feed">
                <Logo />
              </Link>
            </li>
            {!!isDesktop && (
              <>
                <li className={styles.nav_links}>
                  <ul>
                    {navLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.href}>
                          {link.icon}
                          <span>{link.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className={styles.nav_user}>
                  <ul>
                    <li className={styles.nav_user_language}>
                      <LanguageRuIcon />
                      <span>RU</span>
                      <ArrowDownIcon />
                    </li>
                    <li className={styles.nav_user_profile}>
                      <button onClick={toggleLoginOpen}>
                        <ProfileIcon />
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            )}
            {!isDesktop && (
              <li className={styles.nav_burger}>
                <button>
                  <BurgerIcon />
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
      {!!isDesktop && (
        <LoginDialog open={isLoginOpen} onClose={toggleLoginOpen}>
          <LoginForm />
        </LoginDialog>
      )}
    </>
  )
}

