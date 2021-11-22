import React from 'react'
import TextoCentral from '../components/TextoCentral'
import TextCentral from '../components/TextoCentral'

export default props => {
    const route = props.route || { params: { numero: 0 } }
    return (
        <TextCentral corFundo='#9932cd'>
            Tela C - {route.params.numero}
        </TextCentral>
    )
}