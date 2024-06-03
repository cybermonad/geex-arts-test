import { Link } from "react-router-dom"
import { Drawer } from "@mui/material"
import styles from "./NavDrawer.module.scss"
import navLinks from "../../constants/navLinks"

const NavDrawer = () => {
  return (
    <Drawer className={styles.drawer} anchor="bottom">
      <div className={styles.drawer_content}>
        <ul className={styles.drawer_links}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.href}>
                {link.icon}
                <span>{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Drawer>
  )
}

export default NavDrawer

