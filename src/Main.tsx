import * as SolidJS from 'solid-js'
import * as SolidRouter from '@solidjs/router'

import * as Apps from './Apps/__apps'

import './Main.css'

const Component: SolidJS.Component = () => {
  const Element: SolidJS.JSX.Element = (
    <>
      <div class={`main`}>
        <Apps.SideBar.default />
        <div class={`content`}>
          <SolidRouter.Routes>
            <SolidRouter.Route path={`/profile`} component={Apps.Profile.default} />
            <SolidRouter.Route path={`/projects`}>
              <SolidRouter.Route path={`/current`} element={Apps.Projects.default({ Current: { IsActive: true }, New: { IsActive: false }, Old: { IsActive: false } })} />
              <SolidRouter.Route path={`/new`} element={Apps.Projects.default({ Current: { IsActive: false }, New: { IsActive: true }, Old: { IsActive: false } })} />
              <SolidRouter.Route path={`/old`} element={Apps.Projects.default({ Current: { IsActive: false }, New: { IsActive: false }, Old: { IsActive: true } })} />
            </SolidRouter.Route>
            <SolidRouter.Route path={`/usersList`} component={Apps.usersList.default} />
            <SolidRouter.Route path={`/requests`} component={Apps.requests.default} />
            <SolidRouter.Route path={`/projectform`} component={Apps.Projectform.default} />
            <SolidRouter.Route path={'/kpi'} component={Apps.KPI.default}/>
            <SolidRouter.Route path={'/rate'} component={Apps.rate.default}/>
            <SolidRouter.Route path={'/department'} component={Apps.department.default}/>
          </SolidRouter.Routes>
        </div>
      </div>
    </>
  )

  return Element
}

export default Component
