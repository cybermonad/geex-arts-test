import { ReactNode } from "react"
import { Dialog } from "@mui/material"
import styles from "./LoginDialog.module.scss"
import CloseIcon from "../../svg/CloseIcon"

interface LoginDialogProps {
  children: ReactNode
  open: boolean
  onClose?: () => void
}

const LoginDialog: React.FC<LoginDialogProps> = ({
  children,
  open,
  onClose
}) => {
  return (
    <Dialog open={open} className={styles.dialog} onClose={onClose}>
      <div className={styles.dialog_content}>
        <nav>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </nav>
        {children}
      </div>
    </Dialog>
  )
}

export default LoginDialog

