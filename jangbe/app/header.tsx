"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  return (
    <div className="header">
      <button
        type="button"
        onClick={() => router.push("/", { scroll: false })}
        className={styles.button}
      >
        <Image src={"/logo.png"} alt="Logo" width={150} height={30} />
      </button>
    </div>
  );
}
