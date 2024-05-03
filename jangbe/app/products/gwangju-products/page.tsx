'use client'

import styles from '../styles.module.css';
import { useRouter } from 'next/navigation';

const dummyData = [
  {
    no: 1,
    purchaseDate: '23.04.18',
    category: '미니',
    model: 'SK20SR-5',
    customerName: '백인수',
    chassisNumber: '1019',
    year: 2012,
    salePrice: '17,000,000',
    branch: '모든',
    remark: '-',
    stockStatus: '광주'
  },
  {
    no: 2,
    purchaseDate: '23.06.12',
    category: '02H',
    model: 'U30-5',
    customerName: '권태영',
    chassisNumber: '1164',
    year: 2008,
    salePrice: '18,000,000',
    branch: '모든',
    remark: '뿌쪽대',
    stockStatus: '광주'
  }
];

export default function GwangjuProducts() {

  const router = useRouter();

  const handleEnterProducts = () => {
    router.push('/products/enter_products');
  };


  return (
    <>
     <div>
        <h1>광주 재고</h1>
        
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>no.</th>
                <th>매입일자</th>
                <th>구분</th>
                <th>모델</th>
                <th>고객명</th>
                <th>차대번호</th>
                <th>년식</th>
                <th>판매조정가</th>
                <th>지점</th>
                <th>특이사항</th>
                <th>입고여부</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index}>
                  <td>{item.no}</td>
                  <td>{item.purchaseDate}</td>
                  <td>{item.category}</td>
                  <td>{item.model}</td>
                  <td>{item.customerName}</td>
                  <td>{item.chassisNumber}</td>
                  <td>{item.year}</td>
                  <td>{item.salePrice}</td>
                  <td>{item.branch}</td>
                  <td>{item.remark}</td>
                  <td>{item.stockStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className={styles.button} onClick={handleEnterProducts}>재고 작성</button>
        </div>
      </div>
    </>
  );
}
