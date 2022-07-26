import React from 'react';
import ReactDom from 'react-dom';

// import Multiplos from './componentes/Multiplos'
// import {BoaTarde, BoaNoite} from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
        </Pai>


        {/* <Saudacao tipo="Bom dia" nome="Nathan" />
        <Multiplos.BoaTarde nome='Ana'/>
        <Multiplos.BoaNoite nome='Ana'/> */}
    </div>
    , document.getElementById('root'));