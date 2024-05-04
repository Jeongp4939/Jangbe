'use client'

import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

const dummyData = [
  {
    no: 1,
    date: '24.04.18',
    model: 'HW60',
    year: 2017,
    currentLocation: '음성',
    destination: '광주',
    salesRepresentative: '홍길동 대리',
    approvalStatus: '승인'
  }
];

export default function Release() {
  const router = useRouter();

  const handleEnterProducts = () => {
    router.push('/sales/release_request');
  };

  return (
    <>
      <div>
        <h1>출고관리</h1>
        
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>no.</th>
                <th>날짜</th>
                <th>모델</th>
                <th>연식</th>
                <th>현위치</th>
                <th>도착지</th>
                <th>영업담당자</th>
                <th>승인여부</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index}>
                  <td>{item.no}</td>
                  <td>{item.date}</td>
                  <td>{item.model}</td>
                  <td>{item.year}</td>
                  <td>{item.currentLocation}</td>
                  <td>{item.destination}</td>
                  <td>{item.salesRepresentative}</td>
                  <td>{item.approvalStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className={styles.button} onClick={handleEnterProducts}>출고 요청서 작성</button>
        </div>
      </div>
    </>
  );
}
