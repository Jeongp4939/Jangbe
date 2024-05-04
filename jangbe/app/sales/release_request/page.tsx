
import styles from './styles.module.css' ;

export default function Release_Request() {
  return (
    <>
      <div className={styles.container}>
        <h1>재고 작성 페이지</h1>
        
        <form className={styles.form}>
          <label htmlFor="purchaseDate">날짜:</label>
          <input type="date" id="purchaseDate" name="purchaseDate" />

          <label htmlFor="model">모델:</label>
          <input type="text" id="model" name="model" />

          <label htmlFor="chassisNumber">차대번호:</label>
          <input type="text" id="chassisNumber" name="chassisNumber" />

          <label htmlFor="currentLocation">현위치:</label>
          <input type="text" id="currentLocation" name="currentLocation" />

          <label htmlFor="currentManager">담당자:</label>
          <input type="text" id="currentManager" name="currentManager" />

          <label htmlFor="currentPhone">전화번호:</label>
          <input type="tel" id="currentPhone" name="currentPhone" />

          <label htmlFor="destination">도착지:</label>
          <input type="text" id="destination" name="destination" />

          <label htmlFor="destinationManager">담당자:</label>
          <input type="text" id="destinationManager" name="destinationManager" />

          <label htmlFor="destinationPhone">전화번호:</label>
          <input type="tel" id="destinationPhone" name="destinationPhone" />

          <label htmlFor="remark">기타사항:</label>
          <input type="text" id="remark" name="remark" />

          <label htmlFor="approvalStatus">승인여부:</label>
          <select id="approvalStatus" name="approvalStatus">
            <option value="미승인">미승인</option>
            <option value="승인">승인</option>
          </select>

          <label htmlFor="dispatchInfo">배차정보:</label>
          <input type="text" id="dispatchInfo" name="dispatchInfo" />

          <button className={styles.submitButton} type="submit">저장</button>
        </form>
      </div>
    </>
  );
}