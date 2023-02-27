import Layout from "../components/Layout";
import CryptoFormulario from "../components/f_ejemplo_cripto/CryptoFormulario";

export default function () {
    return (
        <>
            <Layout title={"F Ejemplo Criptomonedas | EPN"}>
                <CryptoFormulario setMonedas={""}></CryptoFormulario>
            </Layout>

        </>
    );
}