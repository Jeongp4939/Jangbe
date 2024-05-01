"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [menuStates1, setMenuStates1] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const [menuStates2, setMenuStates2] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const toggleMenu1 = (index: number) => {
    setMenuStates1((prevStates) => {
      const newMenuStates = [...prevStates];
      newMenuStates[index] = !newMenuStates[index];
      console.log(`menu button ${index} activate`);
      return newMenuStates;
    });
  };

  const toggleMenu2 = (index: number) => {
    setMenuStates2((prevStates) => {
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
          onClick={() => toggleMenu1(0)}
          className={styles.button}
        >
          차량 보기
        </button>
        <div className={`flex flex-col ${styles.submenu} ${menuStates1[0] ? "" : "hidden"}`}>
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
          onClick={() => toggleMenu2(0)}
          className={styles.button}
        >
          차량재고
        </button>
        <div className={`flex flex-col ${styles.submenu} ${menuStates2[0] ? "" : "hidden"}`}>
          <button
            type="button"
            className={styles.button}
            onClick={() => router.push("/products/eumseong-products", { scroll: false })}
          >
            음송재고
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
