import Link from 'next/link'
import styles from '@/styles/Links.module.scss'

// списочек ссылок для менюшки
const links = ['favorites']

const Links: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.ul}>
        {links.map((link) => (
          <li>
            <Link key={link} href={`/${link}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Links
