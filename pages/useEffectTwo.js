import Link from "next/link";
import { useEffect, useState } from "react"
import styles from "@/styles/useEffectTwo.module.css"

export default function useEffectTwo() {
   const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return(
        <div className={styles.main}>
            <Link className={styles.home} href="/">Home</Link>
            <div className={styles.title}>
                useEffect Two
            </div>
            <div className={styles.number}>
                {number}
            </div>
        </div>
    )
}