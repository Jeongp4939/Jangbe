"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { useState } from "react";
import Header from "./header";
export default function Navbar() {
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
    <nav className={`${styles.navbar} flex flex-col`}>
      <div>
        <button
          type="button"
          onClick={() => toggleMenu(0)}
          className={styles.button}
        >
          영업
        </button>
        <div
          className={`flex flex-col ${styles.submenu} ${
            menuStates[0] ? "" : "hidden"
          }`}
        >
          <button
            type="button"
            onClick={() => router.push("/sales/appraisal", { scroll: false })}
            className={styles.button}
          >
            감정평가
          </button>
          <button
            type="button"
            onClick={() => router.push("/sales/release", { scroll: false })}
            className={styles.button}
          >
            출고관리
          </button>
          <button
            type="button"
            onClick={() => router.push("/sales/transportation", { scroll: false })}
            className={styles.button}
          >
            배차정보
          </button>
          <button
            type="button"
            onClick={() => router.push("/sales/purchase", { scroll: false })}
            className={styles.button}
          >
            매입정보
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
        <div
          className={`flex flex-col ${styles.submenu} ${
            menuStates[2] ? "" : "hidden"
          }`}
        >
          <button
            type="button"
            className={styles.button}
            onClick={() =>
              router.push("/products/eumseong-products", { scroll: false })
            }
          >
            음성재고
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() =>
              router.push("/products/gwangju-products", { scroll: false })
            }
          >
            광주재고
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() =>
              router.push("/products/whole-products", { scroll: false })
            }
          >
            전체재고
          </button>
        </div>
      </div>
    </nav>
  );
}
