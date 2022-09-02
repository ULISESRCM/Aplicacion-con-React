import React,{Component} from 'react';
import Pelicula from './Pelicula'

class TiraPeliculas extends Component() {
    render (){
        return (
            <div>
                <Pelicula generos={["fantasia","terror"]} titulo="harry poter1" rating={2.2} />
                <Pelicula generos={["fantasia2"]} titulo="harry poter2" rating={8.5}/>
                <Pelicula titulo="harry poter3" rating={5.5}/>
                <Pelicula generos={["fantasia4","terror4"]} titulo="harry poter4" rating={9.9}/>
            </div>
        );
    }
    
}

export default TiraPeliculas;