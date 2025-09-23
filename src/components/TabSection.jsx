import Button from "./Button/Button";

export default function TabSection( {active, onChange} ) {
  return (
    <section style={ { marginBottom: '24px' } }>
      <Button isActive={active == 'main'} onClick={() => onChange('main')}>Главная</Button>
      <Button isActive={active == 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>
    </section>
  )
}