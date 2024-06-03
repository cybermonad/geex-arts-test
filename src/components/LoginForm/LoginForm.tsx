import { Button } from "@mui/material"
import LogoCompact from "../../svg/LogoCompact"
import styles from "./LoginForm.module.scss"

export default function LoginForm() {
  return (
    <>
      <header className={styles.login_header}>
        <LogoCompact />
        <h3>Регистрация</h3>
        <p>
          Код будет автоматически отправлен на Ваш номер телефона с помощью SMS
        </p>
      </header>
      <form className={styles.login_form}>
        <Button disableElevation variant="contained">
          Получить код
        </Button>
        <Button disableElevation variant="text" color="info">
          Нет аккаунта?
        </Button>
        <Button disableElevation variant="contained" color="secondary">
          Зарегистрироваться
        </Button>
      </form>
    </>
  )
}

