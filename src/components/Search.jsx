import axios from 'axios'
import React, { useState } from 'react'


function Search() {

    const [frases, setFrases] = useState(null)

    axios.get('https://type.fit/api/quotes')
        .then(function (response) {
            // manejar respuesta exitosa
            const frase = frases[Math.floor(Math.random() * frases.length)]
            setFrases(response.data)

        })
        .catch(function (error) {
            // manejar error
            console.log(error);
        })
        .then(function () {
            // siempre sera executado
        });


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card-columns">
                        <button
                            className="btn btn-primary btn-block"
                            onClick={() => {
                                console.log(frases)
                            }}
                        >Añadir Frase</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
