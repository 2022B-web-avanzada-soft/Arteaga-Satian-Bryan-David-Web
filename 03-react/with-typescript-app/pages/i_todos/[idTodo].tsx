import Layout from "../../components/Layout";
import {GetStaticProps} from "next";
import {TodoHttp} from "../../services/http/todo.http";

export default function Todo() {
    return (
        <Layout title="Todo">
            <h1>Todos HIJO</h1>
        </Layout>
    );
}


//Código para cargar información EN EL SERVIDOR y enviar al cliente
export const getStaticProps: GetStaticProps = async ({params}) => {
    try {
        //El idTodo viene porque así está puesto en el nombre del archivo [idTodo].tsx
        const id = params.idTodo;
        const resultado = await TodoHttp(id as string);
        return {
            props: {
                todo: resultado
            }
        }
    } catch (error) {
        return {
            props: {
                error: error.message
            }
        }
    }
}

//define los paths que se van a generar y cuales no
export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    idTodo: "1"
                }
            },
            {
                params: {
                    idTodo: "2"
                }
            },
            {
                params: {
                    idTodo: "3"
                }
            },
        ],
        fallback: false
    }
}