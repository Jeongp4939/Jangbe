// Enter_Products.tsx

import styles from "./styles.module.css";

export default function Enter_Products() {
  return (
    <>
      <div className={styles.container}>
        <h1>재고 작성</h1>
        <form className={styles.form}>
          <div>
            <label htmlFor="purchaseDate">매입일자:</label>
            <input type="date" id="purchaseDate" name="purchaseDate" />

            <label htmlFor="category">구분:</label>
            <input type="text" id="category" name="category" />
          </div>
          <div>
            <label htmlFor="model">모델:</label>
            <input type="text" id="model" name="model" />

            <label htmlFor="customerName">고객명:</label>
            <input type="text" id="customerName" name="customerName" />
          </div>

          <div>
            <label htmlFor="chassisNumber">차대번호:</label>
            <input type="number" id="chassisNumber" name="chassisNumber" />

            <label htmlFor="year">년식:</label>
            <input type="number" id="year" name="year" />
          </div>
          <div>
            <label htmlFor="salePrice">판매조정가:</label>
            <input type="text" id="salePrice" name="salePrice" />

            <label htmlFor="branch">지점:</label>
            <select id="branch" name="branch">
              <option value="음성">음성</option>
              <option value="광주">광주</option>
            </select>
          </div>

          <div>
            <label htmlFor="remark">특이사항:</label>
            <input type="text" id="remark" name="remark" />

            <label htmlFor="stockStatus">입고여부:</label>
            <select id="stockStatus" name="stockStatus">
              <option value="입고">입고</option>
              <option value="출고">출고</option>
            </select>
          </div>

          <button className={styles.submitButton} type="submit">
            저장
          </button>
        </form>
      </div>
    </>
  );
}
