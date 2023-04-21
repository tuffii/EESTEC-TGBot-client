{/* <button >
  <span>
    <i class={`fa-solid fa-paper-plane`} style={{ '--fa-primary-color': '#FFFFFF', '--fa-secondary-color': '#FFFFFF' }}></i>
  </span>
</button> */}

import * as SolidJS from 'solid-js'

import * as SolidIconsBS from 'solid-icons/bs'

import './index.css'

interface Member {
  readonly Name: string
  readonly Surname: string
  readonly Phone: string
}

const Component: SolidJS.Component<Member> = (_) => {
  const Element: SolidJS.JSX.Element = (
    <div class={`member`}>
      <div class={`info`}>
        <div class={`name`}>
          <span>{_.Name}</span>
        </div>
        <div class={`surname`}>
          <span>{_.Surname}</span>
        </div>
        <div class={`phone`}>
          <span>{_.Phone}</span>
        </div>
      </div>
      <button class = {'message'}>
        <span>
          <i class={`fa-solid fa-paper-plane`} style={{ '--fa-primary-color': '#FFFFFF', '--fa-secondary-color': '#FFFFFF' }}></i>
        </span>
      </button>
      <button class = {'profile'}>
        <span>
          <i class={"fas fa-user"} style={{ '--fa-primary-color': '#FFFFFF', '--fa-secondary-color': '#FFFFFF' }}></i>
        </span>
      </button>
    </div>
  )
  return Element
}
{/* <i class="fas fa-user"></i> */}
export default Component