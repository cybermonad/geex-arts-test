import styles from "./FeedPage.module.scss"

export default function FeedPage() {
  return (
    <main className={styles.feed}>
      <div className="scroller"></div>
      <div className="posts">
        <article></article>
      </div>
    </main>
  )
}

