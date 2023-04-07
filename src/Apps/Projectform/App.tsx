import * as SolidJS from "solid-js";
import { createSignal } from 'solid-js';
//import * as Components from './Components/__components'
import * as Hooks from "../../Hooks/__hooks";
import "./App.css";

const Component: SolidJS.Component = () => {
  const [showForm, setShowForm] = createSignal(false)
  const [inputName, setInputName] = createSignal('')
  const [isInputNameValid, setInputNameValid] = createSignal(false)
  SolidJS.createEffect(() => {
      setInputNameValid(inputName().length <= 20 && inputName().length > 0)

  })

  const Element: SolidJS.JSX.Element = (
    <div class={`customElement`} id={`projectForm`}>
      <div class={'form'}>
          <div class={'header'}>
              <span>Хуй Большой, не Томаса!</span>
              <button class={'close'}>
                  <i class="fa-sharp fa-light fa-xmark fa-xl"></i>
              </button>
          </div>
          <div class={'content'}>
              <input class={'name'}
                     placeholder={'Name of Project'}
                     is-valid={`${isInputNameValid()}`}
                     onInput={(_) => {
                         setInputName(_.currentTarget.value)

                     }}/>
              <input class={'name'}
                     placeholder={'Comment'}
                     is-valid={`${isInputNameValid()}`}
                     onInput={(_) => {
                         setInputName(_.currentTarget.value)

                     }}/>
              <input class={'leader'}
                     placeholder={'Search'}
                     is-valid={`${isInputNameValid()}`}
                     onInput={(_) => {
                         setInputName(_.currentTarget.value)

                     }}>
                  <div class={'users'}>
                      <div class={'list'}>
                          <div class={'user'}>
                              ШЕЛБИ
                          </div>
                          <div class={'user'}>
                              ШЕЛБИ
                          </div>
                          <div class={'user'}>
                              ШЕЛБИ
                          </div>
                      </div>
                  </div>
              </input>
          </div>


          <div class={'footer'}>

          </div>


      </div>

    </div>
  )
  return Element
}
export default Component

