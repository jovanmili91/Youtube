import Image from "next/image";
import css from "../styles/Hero.module.css";
import Cherry from "../assets/sunglasses2.png";
import HeroImage from "../assets/HeroImage1.png";
import { UilPhone } from "@iconscout/react-unicons";
import Pizza1 from "../assets/smSunglasses.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>luxury accessories</span>
          <Image src={Cherry} alt="" width={40} height={40} />
        </div>

        <div className={css.heroText}>
          <span>Najbrza Dostava</span>
          <span>Savršen Kvalitet</span>
          <span>
            LadyS <span style={{ color: "var(--themeRed)" }}>Accessories</span>
          </span>
        </div>

        <span className={css.miniText}>
          Vaš omiljn <span style={{ color: "var(--themeRed)" }}>LadzS </span>
          Accessories za svaku priliku -{" "}
          <span style={{ color: "var(--themeRed)" }}>Brza </span>
          <span style={{ color: "var(--themeRed)" }}>Sigurna</span> dostava -
          <span style={{ color: "var(--themeRed)" }}> Garancija</span> na
          kvalitet
        </span>

        <Link href="#menu">
          <button className={`btn ${css.btn}`}>NAOČARE</button>
        </Link>
      </div>

      {/* right side */}

      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>

        <div className={css.ContactUs}>
          <span>Kontaktirajte Nas</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>

        <div className={css.Pizza}>
          <div>
            <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <div className={css.details}>
            <span>Luxury Sunglasses</span>
            <span>
              <span style={{ color: "var(--themeRed" }}>$</span> 7.49
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
