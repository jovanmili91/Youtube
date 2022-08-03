import css from "../styles/Header.module.css";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpened, setmenuOpened] = useState(false);
  const [Order, setOrder] = useState("");
  const [width, setWidth] = useState(0);

  const mobile = width <= 768 ? true : false;

  const handleToggle = () => {
    setmenuOpened(!menuOpened);
  };

  useEffect(() => {
    setOrder(localStorage.getItem("order"));
    setWidth(window.innerWidth);
  }, []);

  const items = useStore((state) => state.cart.pizzas.length);

  return (
    <div className={css.header}>
      {/* logo side */}
      <Link href="../">
        <div className={css.logo}>
          <Image src={Logo} alt="" width={50} height={50} />
          <span>Lady S - Accessories </span>
        </div>
      </Link>
      {/* menu side */}

      {menuOpened === false && mobile === true ? (
        <div></div>
      ) : (
        <ul className={css.menu}>
          <li onClick={() => setmenuOpened(false)}>
            <Link href="../">Home</Link>
          </li>
          <li onClick={() => setmenuOpened(false)}>
            <Link href="../ponuda">Menu</Link>
          </li>
          <li onClick={() => setmenuOpened(false)}>Contact</li>
        </ul>
      )}

      {/* right side */}
      <div className={css.rightSide}>
        <Link href="/cart">
          <div className={css.cart}>
            <UilShoppingBag size={35} color="#2E2E2E" />
            <div className={css.badge}>{items}</div>
          </div>
        </Link>
        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color="#2E2E2E" />
              {Order != "" && <div className={css.badge}>1</div>}
            </div>
          </Link>
        )}
        <div className={css.bars} onClick={handleToggle}>
          <FaBars />
        </div>
      </div>
    </div>
  );
}
