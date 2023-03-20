import Layout from "../components/Layout";
import DirectorContainer from "../components/Director/DirectorContainer";
import PeliculaContainer from "../components/Pelicula/PeliculaContainer";

export default function PeliculaPage() {
    return (
        <Layout title="CRUD APP">
            <PeliculaContainer/>
        </Layout>
    )
}