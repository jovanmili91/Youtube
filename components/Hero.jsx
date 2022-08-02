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
          <span>More Than Faster</span>
          <Image src={Cherry} alt="" width={40} height={40} />
        </div>

        <div className={css.heroText}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>
          <span>
            Your <span style={{ color: "var(--themeRed)" }}>Accessories</span>
          </span>
        </div>

        <span className={css.miniText}>
          Our Mission is to filling your wishes with amazing products with and
          free delivery
        </span>

        <Link href="#menu">
          <button className={`btn ${css.btn}`}>Get Started</button>
        </Link>
      </div>

      {/* right side */}

      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>

        <div className={css.ContactUs}>
          <span>Contact us</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>

        <div className={css.Pizza}>
          <div>
            <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <div className={css.details}>
            <span>Beautiful</span>
            <span>
              <span style={{ color: "var(--themeRed" }}>$</span> 7.49
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
