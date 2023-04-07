import * as SolidJS from 'solid-js'
import * as SolidRouter from '@solidjs/router'

import * as Components from './Components/__components'

import * as Hooks from '../../Hooks/__hooks'

import './App.css'

interface ProjectsTab {
  readonly Current: {
    readonly IsActive: boolean
  }
  readonly New: {
    readonly IsActive: boolean
  }
  readonly Old: {
    readonly IsActive: boolean
  }
}

const Component: SolidJS.Component<ProjectsTab> = (_) => {
  const Navigator = SolidRouter.useNavigate()

  const Element: SolidJS.JSX.Element = (
    <div class={'customElement'} id={'projects'}>
      <div class={'current'} is-active={`${_.Current.IsActive}`}>
        <div
          class={'selector'}
          onClick={(_) => {
            Navigator(`/projects/current`)
          }}
        >
            <div class={'title'}>
                <span>
                    Текущие проекты
                </span>
            </div>
        </div>
        <div class={'content'}>
            <Components.CurrentProjects.default />
        </div>
      </div>

      <div class={'new'} is-active={`${_.New.IsActive}`}>
        <div
          class={'selector'}
          onClick={(_) => {
            Navigator(`/projects/new`)
          }}
        >
            <div class={'title'}>
                <span>
                    Новые проекты
                </span>
            </div>
        </div>
        <div class={'content'}>
            <Components.NewProjects.default />
        </div>
      </div>

      <div class={'old'} is-active={`${_.Old.IsActive}`}>
        <div
          class={'selector'}
          onClick={(_) => {
            Navigator(`/projects/old`)
          }}
        >
            <div class={'title'}>
                <span>
                    Старые проекты
                </span>
            </div>
        </div>
        <div class={'content'}>
            <Components.OldProjects.default />
        </div>
      </div>
    </div>
  )
  return Element
}

export default Component
