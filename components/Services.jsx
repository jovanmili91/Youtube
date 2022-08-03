import css from "../styles/Services.module.css";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <Link href="../ponuda">
          <button className={`btn ${css.btn}`}>Celokupna Ponuda</button>
        </Link>
        <span>Brzina od Kupivine do Vaše adrese</span>
        <span>Garancija na Kvalitet</span>
      </div>

      {/* features */}
      <div className={css.services}>
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s1} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <span>Laka Porudžbina</span>
          <span>Potrebno je samo nekoliko koraka</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s2} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <span>Dostava</span>
          <span>Pošiljka je uvek na vreme ČAK i brže</span>
        </div>
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s3} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <span>Sigurnost i kvalitet</span>
          <span>Ne samo brzina, Kvalitet je na prvom mestu</span>
        </div>
      </div>
    </>
  );
}
