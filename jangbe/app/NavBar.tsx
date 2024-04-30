'use client'

import { useRouter } from 'next/navigation'
import styles from './styles.module.css'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <button
        type="button"
        onClick={() => router.push('/sales', { scroll: false })}
        className={styles.button} // CSS 모듈의 클래스 이름을 지정합니다.
      >
        차량 보기
      </button>

      <button
        type="button"
        onClick={() => router.push('/after-service', { scroll: false })}
        className={styles.button} // CSS 모듈의 클래스 이름을 지정합니다.
      >
        A/S 서비스
      </button>

      <button
        type="button"
        onClick={() => router.push('/products', { scroll: false })}
        className={styles.button} // CSS 모듈의 클래스 이름을 지정합니다.
      >
        차량재고
      </button>

      <button
        type="button"
        onClick={() => router.push('/', { scroll: false })}
        className={styles.button} // CSS 모듈의 클래스 이름을 지정합니다.
      >
        홈
      </button>

      
    </div>
  )
}