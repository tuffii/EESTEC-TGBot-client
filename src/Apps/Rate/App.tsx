import * as SolidJS from "solid-js";
import { createSignal } from 'solid-js';
import LogoPNG from '../../Assets/Media/Images/logo_rate.png'
import * as Components from './Components/__components'
import "./App.css";

const Component: SolidJS.Component = () => {
  const [showFilters, setShowFilters] = createSignal(false);

  const Element: SolidJS.JSX.Element = (
    <div class={`customElement`} id={`rate`}>
      <div class={'header'}> <img src={LogoPNG} alt={`logo`} no-select={`true`} />
      </div>
    
      <Components.rate.default List={[
      {
        Name: 'Ortur',
        secondName: 'Martushenlo',
        thirdName: 'Orturovitch',
        delta: 22,
        kpi: 255,
        IsAdmin: true
      },
      {
        Name: 'Tomas',
        secondName: 'Shyhinmaer',
        thirdName: 'Mich',
        delta: 21,
        kpi: 25523,
        IsAdmin: false
      },
      {
        Name: 'Shssysshinmssaer',
        secondName: 'Snmaer',
        thirdName: 'Mich',
        delta: 232,
        kpi: 12,
        IsAdmin: false
      },
      {
        Name: 'Tomas',
        secondName: 'sds',
        thirdName: 'Shyhinmaer',
        delta: 21,
        kpi: 223,
        IsAdmin: false
      },
      {
        Name: 'Tos',
        secondName: 'Shyh',
        thirdName: 'Mh',
        delta: 2321,
        kpi: 2523,
        IsAdmin: false
      },
      {
        Name: 'Osam',
        secondName: 'Clone',
        thirdName: 'Mich',
        delta: 2321,
        kpi: 22,
        IsAdmin: false
      }

     ]} />
    </div>
   
  )
  return Element
}
export default Component