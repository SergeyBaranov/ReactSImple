import logo from '/logo-name.svg'

export default function Header() {
  const timeNow = new Date()

  return (
    <header>
      {/* <h3>Test case for React App</h3> */}
      <img src={logo} alt={'Univercity logo'} />
      <span>Time now: {timeNow.toLocaleTimeString()}</span>
    </header>
  )
}