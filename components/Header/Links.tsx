import Link from 'next/link'
import styles from '@/styles/Links.module.scss'

// списочек ссылок для менюшки
const links = ['favorites']

const Links: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.ul}>
        {links.map((link) => (
          <li key={link}>
            <Link href={`/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Links
