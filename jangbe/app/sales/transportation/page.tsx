import styles from "./styles.module.css";

const dummyData = [
  {
    no: 1,
    date: "24.04.18",
    model: "HW60",
    year: 2017,
    currentLocation: "음성",
    destination: "광주",
    transportationState: "O",
    salesRepresentative: "홍길동 대리",
    approvalStatus: "승인",
  },
];

export default function Transportation() {
  return (
    <>
      <div>
        <h1>배차정보</h1>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>no.</th>
                <th>날짜</th>
                <th>모델</th>
                <th>연식</th>
                <th>현위치</th>
                <th>도착지</th>
                <th>배차상황</th>
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
                  <td>{item.transportationState}</td>
                  <td>{item.salesRepresentative}</td>
                  <td>{item.approvalStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
