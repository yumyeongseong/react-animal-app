import React from "react";
import styles from './AnimalForm.module.css'


const AnimalForm = ({ updateMainAnimal }) => {

  const [value, setValue] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')

  const hangul = (text) => /[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(text);

  function handleInputChange(data) {
    const userValue = data.target.value;
    setValue(userValue.toUpperCase());

    if (hangul(userValue)) {
      setErrorMessage('한글은 입력할 수 없습니다.')
    } else {
      setErrorMessage('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (value === '') {
      setErrorMessage('빈 값은 추가할 수 없습니다.');
      return;
    }

    setErrorMessage('');
    // updateMainAnimal()
    updateMainAnimal(value)
    // setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.animalForm}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="고양이가 머라고 할까요?"
        onChange={handleInputChange}
        value={value}
      />
      <button type="submit">추가</button>
      <p style={{ color: 'red', backgroundColor: 'yellow' }} >{errorMessage}</p>
    </form>
  );
}

export default AnimalForm;