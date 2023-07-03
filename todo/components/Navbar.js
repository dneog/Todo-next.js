import Link from "next/link";
import styles from './Navbar.module.css'
export default function Navbar(){
    return(
        <nav className={styles.navs}>
            <Link href={'/'}>TODO</Link>
            <button className={styles.but}><Link href={'/addTodo'}>Add</Link></button>
        </nav>
    )
}