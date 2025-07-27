 import { useState } from "react";

export default function BarraPesquisa({onSearch}){
    const [termo,serTermo] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(termo.toLowerCase());
    }

    return (
    <form onSubmit={handleSearch} className="barra_pesquisa">
        <input
        type="text"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Pesquisar..."
        className="search_input" 
        ></input>
        <button type="submit" hidden> Buscar</button>

    </form>
    )

}

