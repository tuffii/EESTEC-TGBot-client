import * as SolidJS from 'solid-js'
import './index.css'

interface User {
    readonly FirstName : string,
    readonly SecondName : string,
    readonly ThirdName : string,
}

const Component : SolidJS.Component<User> = (_) => {
    const Element: SolidJS.JSX.Element = (
        <div class={`user`}>
            <div class={`secondName`}>
                <span>{_.SecondName}</span>
            </div>
            <div class={`firstName`}>
                <span>{_.FirstName}</span>
            </div>
            <div class={`thirdName`}>
                <span>{_.ThirdName}</span>
            </div>
        </div>
    )
    return Element
}

export default Component