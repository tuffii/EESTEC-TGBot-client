import * as SolidJS from 'solid-js'

import * as Components from './Components/__components'

import * as Hooks from '../../Hooks/__hooks'

import AvatarJPG from '../../Assets/Media/Images/avatar.jpg'
import KPIPNG from '../../Assets/Media/Images/kpi.png'
import BrawlStars from '../../Assets/Media/Images/Achievements/brawl-stars.png'

import './App.css'

interface Department {
  readonly id: number
  readonly name: string
}
const GetDepartment = async (DepartmentId: number) => await Hooks.Server.SendRequest<Department>(`/api/eestec/users/id/${DepartmentId}`, `GET`, {}, {})

const IsAdmin = true // Промежуточный cock

const Component: SolidJS.Component = () => {
  const [DepartmentID, SetDepartmentID] = SolidJS.createSignal(0)

  const [DepartmentDataResource] = SolidJS.createResource(DepartmentID, GetDepartment)
  const DepartmentDataResponse = () => Hooks.Server.GetResponseResource(DepartmentDataResource)

  const [DepartmentNName, SetDepartmentNName] = SolidJS.createSignal(``)

  SolidJS.createEffect(() => {
    const DepartmentData = DepartmentDataResponse()

    if (DepartmentData.Status.IsFinished) {
      if (DepartmentData.Status.IsValid) {
        const Department = DepartmentData.Body

        SetDepartmentNName(Department.name)
      } else {
        SetDepartmentNName(`Department`)
      }
    }
  })

  const DepartmentName = () => {
    const DepartmentName = {
      First: DepartmentNName(),
    }

    return DepartmentName
  }

  const Element: SolidJS.JSX.Element = (
    <div class={`customElement`} id={`department`}>
      <div class={`main`}>
        <div class={`content`}>
          <div class={`preview`}>
            <div class={`avatar`}>
              <img src={AvatarJPG} alt={`avatar`} no-select={`true`} />
            </div>
          </div>
          
          <div class={`info`}>
            <div class={`main`}>
              <div class={`credentials`}>
                <div class={`name`} no-select={`true`}>
                  <div class={`name`}>
                    <span>{DepartmentName().First}</span>
                  </div>
                </div>
                <div class = 'peopleKPI'> 
                  <div class = 'people'>
                    <span> Участники: 200 </span>
                  </div>
                  <div class={`kpi`} style={{ filter: `blur(${IsAdmin ? `0px` : `5px`})` }} no-select={`true`}>
                    <img src={KPIPNG} alt={`kpi`} no-select={`true`} />
                    <div class={`value`}>
                      <span>{170}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`info`}>
                <div class={`description`}>
                  <span>Краткое описание</span>
                </div>
              </div>
              <div class = ' JB'>
                <button class={`join`} no-select={`true`}>
                    <span>вступить</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class={`admin-access`}>
          <div class={`attendance`}>
            <div class={`events`}>
              <div class = 'title'> Events </div>
                <div class={`list`}>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                  <Components.Event.default Name={`Встреча отдела AT`} Date={`14 Февраля 2023`}/>
                </div>
              </div>
          </div>
        </div>
        <div class = 'members'> 
          <div class = {'list'}> 
          <div class = 'title'> Участники </div>
            <Components.Member.default Name={'Artur'} Surname='Matyushenko' Phone={'89118189379'}/>
            <Components.Member.default Name={'Artur'} Surname='Matyushenko' Phone={'89118189379'}/>
            <Components.Member.default Name={'Artur'} Surname='Matyushenko' Phone={'89118189379'}/>
            <Components.Member.default Name={'Artur'} Surname='Matyushenko' Phone={'89118189379'}/>
            <Components.Member.default Name={'Artur'} Surname='Matyushenko' Phone={'89118189379'}/>
            <Components.Member.default Name={'Artur'} Surname='Matyushenko' Phone={'89118189379'}/>
            <Components.Member.default Name={'Artur'} Surname='Matyushenko' Phone={'89118189379'}/>
            
          </div>
        </div>
    </div>
  )
  return Element
}

export default Component
