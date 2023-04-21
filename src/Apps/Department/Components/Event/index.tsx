import * as SolidJS from 'solid-js'

import * as SolidIconsBS from 'solid-icons/bs'

import './index.css'

interface Event {
  readonly Name: string
  readonly Date: string
}

const Component: SolidJS.Component<Event> = (_) => {
  const Element: SolidJS.JSX.Element = (
    <div class={`event`}>
      <div class={`info`}>
        <div class={`name`}>
          <span>{_.Name}</span>
        </div>
        <div class={`date`}>
          <span>{_.Date}</span>
        </div>

      </div>
    </div>
  )
  return Element
}

export default Component
