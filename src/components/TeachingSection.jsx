import { ways } from '../data'
import WayToTeach from './WayToTeach'

export default function TeachingSection( { data, contentType, handleClick, differences } ) {
  return (
    <section>
      <ul>
        { ways.map((way) => <WayToTeach key={way.title}{ ...way } />) }
      </ul>
    </section>
  )
}