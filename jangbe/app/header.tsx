"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <button
        onClick={() => router.push("/", { scroll: false })}
      >
        <Image src={"/logo.png"} alt="Logo" width={150} height={30} />
      </button>

      <button className={styles.profileButton}>
        홍길동 대리
      </button>
    </div>
  );
}
