"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [menuStates, setMenuStates] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const toggleMenu = (index: number) => {
    setMenuStates((prevStates) => {
      const newMenuStates = [...prevStates];
      newMenuStates[index] = !newMenuStates[index];
      console.log(`menu button ${index} activate`);
      return newMenuStates;
    });
  };

  return (
    <nav className="flex flex-col">
      <div>
        <button
          type="button"
          onClick={() => router.push("/", { scroll: false })}
          className={styles.button}
        >
          홈
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => toggleMenu(0)}
          className={styles.button}
        >
          차량 보기
        </button>
        <div className={`flex flex-col ${styles.submenu} ${menuStates[0] ? "" : "hidden"}`}>
          <button
            type="button"
            className={styles.button}
          >
            menu 1
          </button>
          <button
            type="button"
            className={styles.button}
          >
            menu 2
          </button>
          <button
            type="button"
            className={styles.button}
          >
            menu 3
          </button>
          <button
            type="button"
            className={styles.button}
          >
            menu 4
          </button>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={() => router.push("/after-service", { scroll: false })}
          className={styles.button}
        >
          A/S 서비스
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => toggleMenu(2)}
          className={styles.button}
        >
          차량재고
        </button>
        <div className={`flex flex-col ${styles.submenu} ${menuStates[2] ? "" : "hidden"}`}>
          <button
            type="button"
            className={styles.button}
            onClick={() => router.push("/products/eumseong-products", { scroll: false })}
          >
            음성재고
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => router.push("/products/gwangju-products", { scroll: false })}
          >
            광주재고
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => router.push("/products/whole-products", { scroll: false })}
          >
            전체재고
          </button>

        </div>
      </div>
    </nav>
  );
}
