import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState('')
  const [reason, setReasson] = useState('help')
  const [hasError, setHasError] = useState(false) 

  function handleChangeName(event) {
    setName(event.target.value)
    setHasError(event.target.value.trim().length < 2)
  }

  function handleChangeReason(event) {
    setReasson(event.target.value)
  }


  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input 
          type="text"
          className="control"
          id="name"
          value={name}
          style={{
            border: hasError ? '1px solid red' : null
          }}
          onChange={handleChangeName}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select name="" id="reason" className="control" value={reason} onChange={handleChangeReason}>
          <option value="error">ошибка</option>
          <option value="advice">совет</option>
          <option value="other">другое</option>
        </select>

        <pre style={ { background: '#f4f4f4', padding: '12px', marginBottom: '1rem' } }>
          name: {name}
          <br />
          reason: {reason}
        </pre>

        <Button disabled={hasError} isActive={!hasError}>Отправить</Button>
      </form>
    </section>
  )
}