import { API_URL } from "@env";
import axios from "axios";
import { useEffect, useState } from "react";

const useTurmaConteudo = (turma: any) => {
    const [conteudo, setConteudo] = useState([]);
    useEffect(() => {
        if (turma) {
            console.log("Consultando API para turma: ", turma);
            axios.get(`${API_URL}/${turma}`)
                .then(response => {
                    setConteudo(response.data);
                    // console.log(response);
                })
                .catch(error => console.error(error));
        }
    }, [turma]);

    return conteudo;
}

export default useTurmaConteudo;