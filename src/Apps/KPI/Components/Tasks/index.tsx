import * as SolidJS from 'solid-js'
import './index.css'

interface Task {
    readonly Color: readonly [number, number, number]
    readonly Tag: string
    readonly Name: string
    readonly Description: string
    readonly Date: {
        readonly Day: string,
        readonly Time: string
    }
    readonly NumberOfPoints: number
}

const Component: SolidJS.Component<Task> = (_) => {
    const Element: SolidJS.JSX.Element = (
        <div class={`task`}>
            <div class={`tag`}
            style={{
                background: `rgba(${_.Color[0]}, ${_.Color[1]}, ${_.Color[2]}, 0.5)`,
            }}
            >
                <span>{_.Tag}</span>
            </div>
            <div class={`description`}>
                <div class={`name`}>
                    <span>{_.Name}</span>
                </div>
                <div class={`comment`}>
                    <span>{_.Description}</span>
                </div>
            </div>
            <div class={`date`}>
                <div class={`day`}>
                    <span>{_.Date.Day}</span>
                </div>
                <div class={`time`}>
                    <span>{_.Date.Time}</span>
                </div>
            </div>
            <div class={'numberOfPoints'}>
                <span>{_.NumberOfPoints}</span>
            </div>
        </div>
    )
    return Element
}

export default Component