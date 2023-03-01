import {MONEDAS} from "../d_hook_custom/monedas";
import {useEffect, useState} from "react";
import {IMoneda} from "../../interfaces/moneda";
import useSelectMoneda from "../hooks/UseSelectMoneda";
import {IConsultaMoneda} from "../../pages/f_ejemplo_criptomonedas";

export default function (params) {
    const {setMonedas} = params;
    const [monedasArreglo, setMonedasArreglo] = useState(MONEDAS);
    const [criptoMonedasArreglo, setCriptoMonedasArreglo] = useState([] as IMoneda[]);

    const [valorMoneda, selectValorMoneda] = useSelectMoneda(
        "Seleccionar moneda",
        monedasArreglo
    );
    const [valorCriptoMoneda, selectValorCriptoMoneda] = useSelectMoneda(
        "Seleccionar criptomoneda",
        criptoMonedasArreglo
    );

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            const arregloCriptos: IMoneda[] = resultado.Data.map((info) => {
                const criptoMonedaLocal: IMoneda = {
                    id: info.CoinInfo.Name,
                    nombre: info.CoinInfo.FullName,
                }
                return criptoMonedaLocal;
            })
            setCriptoMonedasArreglo(arregloCriptos);
        }
        consultarAPI().then().catch((error) => console.error("Hubo un error al consultar a la API"))
    }, []);

    const manejarSubmitFormulario = (e) => {
        e.preventDefault();
        const monedasConsulta: IConsultaMoneda = {
            valorMoneda: valorMoneda as string,
            valorCriptoMoneda: valorCriptoMoneda as string
        }
        setMonedas(monedasConsulta);
    }

    return (
        <>
            <form onSubmit={manejarSubmitFormulario}>
                {selectValorMoneda}
                {selectValorCriptoMoneda}
                <br/>
                <button className={'btn btn-primary w-100'} type={"submit"}>Consultar</button>
            </form>
        </>
    );
}