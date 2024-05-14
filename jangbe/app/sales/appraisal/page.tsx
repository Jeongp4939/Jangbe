import styles from './styles.module.css';

export default function Appraisal() {
  const dummyAppraisalData = [
    {
      no: 1,
      작성일: '24.04.18',
      고객명: '장길산',
      기종: '크레인',
      감정가: '10,000,000원',
      장비어태치상황: '숏불',
      담당자: '홀길동',
      평가완료여부: '완료'
    },
    {
      no: 2,
      작성일: '25.05.18',
      고객명: '홍길동',
      기종: '트럭',
      감정가: '15,000,000원',
      장비어태치상황: '노후',
      담당자: '이순신',
      평가완료여부: '미완료'
    },
    {
      no: 3,
      작성일: '26.06.18',
      고객명: '유관순',
      기종: '파워로더',
      감정가: '20,000,000원',
      장비어태치상황: '우수',
      담당자: '안중근',
      평가완료여부: '완료'
    }
  ];

  return (
    <>
      <div className={styles.appraisalHeader}>Appraisal Route 감정평가</div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No.</th>
              <th>작성일</th>
              <th>고객명</th>
              <th>기종</th>
              <th>감정가</th>
              <th>장비어태치상황</th>
              <th>담당자</th>
              <th>평가완료여부</th>
            </tr>
          </thead>
          <tbody>
            {dummyAppraisalData.map((item, index) => (
              <tr key={index}>
                <td>{item.no}</td>
                <td>{item['작성일']}</td>
                <td>{item['고객명']}</td>
                <td>{item['기종']}</td>
                <td>{item['감정가']}</td>
                <td>{item['장비어태치상황']}</td>
                <td>{item['담당자']}</td>
                <td>{item['평가완료여부']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
