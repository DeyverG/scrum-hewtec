import React from 'react';
import '../assets/styles/header.css'
const Header = ({ bandera }) => {


    const handleChange = e => {
        const elementos = Object.values(document.getElementsByClassName("filtro"));
        elementos.filter(elemento => elemento.name.toLowerCase().search(e.target.value) > -1 ? elemento.classList.remove("esconder") : elemento.classList.add("esconder"));
    }
    return (
        <>
            <div className="header">
                <i className="fas fa-bars iconoHeader" id="check" ></i>
                {!bandera
                    ?
                    null
                    :
                    <div className=" buscador">
                        <div className="iconobuscar form-control">
                            <i className="fas fa-search"></i>
                        </div>
                        <input type="text" className="form-control inputBuscador" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} />
                    </div>
                }
            </div>
        </>
    );
}

export default Header;