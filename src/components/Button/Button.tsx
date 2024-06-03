import MuiButton from "@mui/material/Button"
import { ReactNode } from "react"
import styles from "./Button.module.scss"

interface ButtonProps {
  children: string | ReactNode
  variant?: "text" | "outlined" | "contained"
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  return (
    <MuiButton
      color="secondary"
      className={styles.button}
      variant={variant}
      disableElevation
    >
      {children}
    </MuiButton>
  )
}

export default Button

