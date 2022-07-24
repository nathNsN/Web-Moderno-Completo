import React from 'react';
import ReactDom from 'react-dom';

// import Multiplos from './componentes/Multiplos'
// import {BoaTarde, BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

ReactDom.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Nathan" />
        {/* <Multiplos.BoaTarde nome='Ana'/>
        <Multiplos.BoaNoite nome='Ana'/> */}
    </div>
    , document.getElementById('root'));