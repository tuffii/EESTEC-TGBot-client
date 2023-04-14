import * as SolidJS from "solid-js";
import {createSignal} from "solid-js";

import * as Components from "./Components/__components"

import "./App.css";

interface User {
    readonly First: string
    readonly Second: string
    readonly Third: string
}
type Users = Array<User>

const DefaultUsers: Users = [
    {
        First: 'Matushenko',
        Second: 'Artur',
        Third: 'Vladimirovitch',
    },
    {
        First: 'John',
        Second: 'Doe',
        Third: 'Smith',
    },
    {
        First: 'Jane',
        Second: 'Doe',
        Third: 'Johnson',
    },
    {
        First: 'Matur',
        Second: 'artur',
        Third: 'rte',
    },
    {
        First: 'John',
        Second: 'Doe',
        Third: 'Smith',
    },
    {
        First: 'Jane',
        Second: 'Doe',
        Third: 'Johnson',
    },
    {
        First: 'Alice',
        Second: 'Jones',
        Third: 'Brown',
    },
    {
        First: 'Bob',
        Second: 'Smith',
        Third: 'Johnson',
    },
    {
        First: 'Sarah',
        Second: 'Williams',
        Third: 'Davis',
    },
    {
        First: 'Kevin',
        Second: 'Lee',
        Third: 'Chung',
    },
    {
        First: 'Emily',
        Second: 'Johnson',
        Third: 'Taylor',
    },
    {
        First: 'David',
        Second: 'Miller',
        Third: 'Garcia',
    },
]

const Component: SolidJS.Component = () => {
  const [showForm, setShowForm] = createSignal(false)

  const [inputName, setInputName] = createSignal(``)
  const [isInputNameValid, setInputNameValid] = createSignal(false)
    SolidJS.createEffect(() => {
        setInputNameValid(inputName().length <= 20 && inputName().length > 0)
    })
/*

  const [inputComment, setInputComment] = createSignal(``)
  const [isInputCommentValid, setInputCommentValid] = createSignal(false)
    SolidJS.createEffect(() => {
        setInputCommentValid(inputComment().length <= 20 && inputComment().length > 0)
    })
*/

  const [inputLeader, setInputLeader] = createSignal(``)
  const [isInputLeaderValid, setInputLeaderValid] = createSignal(false)
    SolidJS.createEffect(() => {
        setInputLeaderValid(inputLeader().length <= 20 && inputLeader().length > 0)
    })

    const [Users, SetUsers] = SolidJS.createSignal([...DefaultUsers], { equals: (_prev, _next) => false })

    const UpdateUsersByStringFilter = (searchQuery: string): void => {
        SetUsers([...DefaultUsers.filter((_el, _ind, _arr) => {
            const searchQueries = searchQuery.split(/\s+/)
            return searchQueries.every((__el, __ind, __arr) => {
                return [_el.First, _el.Second, _el.Third].filter((___el, ___ind, ___arr) => {
                    return ___el.toLowerCase().includes(__el.toLowerCase())
                }).length > 0
            })
        })])
    }

    const UpdateLeaderValue = (newLeader: string): void => {
        setInputLeader(newLeader)
        UpdateUsersByStringFilter(newLeader)
    }

    const Element: SolidJS.JSX.Element = (
    <div class={`customElement`} id={`projectForm`}>
      <div class={`form`}>

              <div class={`header`}>
                  <div class={`name`}>
                      <span>Создание проекта</span>
                  </div>
                  <button class={`close`}>
                      <i class="fa-sharp fa-light fa-xmark fa-xl"></i>
                  </button>
              </div>

          <form method={`post`} action={`/projectform`}>
              <div class={`content`}>
                  <div class={`name`}>
                      <input class={`inputName`}
                             placeholder={`Название проекта`}
                             is-valid={`${isInputNameValid()}`}
                             onInput={(_) => {
                                 setInputName(_.currentTarget.value)
                             }}
                      />
                  </div>

                  <div class={`leader`}>
                      <input class={`inputLeader`}
                             placeholder={`Руководитель проекта`}
                             type={`search`}
                             is-valid={`${isInputLeaderValid()}`}
                             onInput={(_) => {
                                 UpdateLeaderValue(_.currentTarget.value)
                             }}
                      />
                      <div class={`list1`}>
                          <SolidJS.For each={Users()}>
                              {
                                  (User) => (
                                      <Components.Users.default FirstName={User.First} SecondName={User.Second} ThirdName={User.Third}/>
                                  )
                              }
                          </SolidJS.For>
                      </div>
                  </div>


                  <div class={`date`}>
                      <input class={`inputDate`}
                             placeholder={`Дата начала`}
                             type={`text`}
                             onFocus={`(this.type='date')`}
                             onBlur={`(this.type='text')`}
                      />
                  </div>

                  <div class={`date`}>
                      <input class={`inputDate`}
                             placeholder={`Дата завершения`}
                             type={`text`}
                             onFocus={`(this.type='date')`}
                             onBlur={`(this.type='text')`}
                      />
                  </div>

                  <div class={`comment`}>
                      <textarea class={`inputComment`}
                             placeholder={`Описание проекта`}
                      />
                  </div>


              </div>

              <button class={`button`}>
                  <span>Создать</span>
              </button>

          </form>

          <div class={`footer`}>

          </div>
      </div>
    </div>

  )
  return Element
}
export default Component

