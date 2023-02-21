import Carousel from "./components/index"
import Link from "next/link"
import styles from './styles/carouselPage.module.css'

export default function CarouselPage() {
    return(
        <>
            <Link className={styles.home} color= "--blue" href="/">Home</Link>
            <div className={styles.carousel}>
            <Carousel/>
            </div>
        </>
    )

}