import * as SolidJS from "solid-js"
import * as SolidRouter from "@solidjs/router"
import * as Components from "./Components/__components"

import './App.css'
const Component: SolidJS.Component = () => {

    const Element: SolidJS.JSX.Element = (
            <div class={`customElement`} id={`kpi`}>
                <div class={`content`}>
                    <div class={`kpiInfo`}>
                        <div class={`name`}>
                            <span>История полученых KPI</span>
                        </div>
                        <div class={`kpi`}>
                            <span>KPI: 80 %</span>
                        </div>
                    </div>
                    <div class={'tasks'}>
                        <div class={`table`}>
                            <div class={`header`}>
                                <div class={`tag`}>
                                    <span>Tag</span>
                                </div>
                                <div class={`description`}>
                                    <span>Description</span>
                                </div>
                                <div class={`date`}>
                                    <span>Date</span>
                                </div>
                                <div class={`count`}>
                                    <span>Kpi</span>
                                </div>
                            </div>
                            <div class={`list`}>
                                <Components.Tasks.default Color={[0,150,0]} Tag={`Project`} Name={`New Post`} Description={`post for group VK`} Date={{Day:`22 фераля 2004`, Time:`15:58`}} NumberOfPoints={100} />
                                <Components.Tasks.default Color={[255,215,0]} Tag={`CR`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />
                                <Components.Tasks.default Color={[255,215,0]} Tag={`HR`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />
                                <Components.Tasks.default Color={[0,150,0]} Tag={`Project`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />
                                <Components.Tasks.default Color={[150,150,150]} Tag={`Meeting`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />
                                <Components.Tasks.default Color={[150,150,150]} Tag={`Meeting`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />
                                <Components.Tasks.default Color={[255,215,0]} Tag={`HR`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />
                                <Components.Tasks.default Color={[0,150,0]} Tag={`Project`} Name={`New Post`} Description={`post for group VK`} Date={{Day:`22 фераля 2004`, Time:`15:58`}} NumberOfPoints={100} />
                                <Components.Tasks.default Color={[255,215,0]} Tag={`CR`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />
                                <Components.Tasks.default Color={[255,215,0]} Tag={`HR`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />
                                <Components.Tasks.default Color={[0,150,0]} Tag={`Project`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />
                                <Components.Tasks.default Color={[150,150,150]} Tag={`Meeting`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />
                                <Components.Tasks.default Color={[150,150,150]} Tag={`Meeting`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />
                                <Components.Tasks.default Color={[255,215,0]} Tag={`HR`} Name={`Old Post`} Description={`post for group Instagram`} Date={{Day:`25 фераля 2034`, Time:`18:58`}} NumberOfPoints={10} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    return Element
}

export default Component