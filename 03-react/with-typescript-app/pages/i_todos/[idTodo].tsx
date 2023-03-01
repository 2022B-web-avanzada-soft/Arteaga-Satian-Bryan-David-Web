import Layout from "../../components/Layout";
import {GetStaticProps} from "next";
import {ITodo, TodoHttp} from "../../services/http/todo.http";
import {useRouter} from "next/router";

interface IParametrosTodo {
    error?: string,
    todo?: ITodo
}

export default function Todo(params: IParametrosTodo) {
    console.log(params)
    //Podemoos obtener los parámetros de la ruta
    const router = useRouter();
    const {idTodo, nombre, apellido} = router.query;
    console.log(idTodo, nombre, apellido);
    //ejm: http://localhost:3000/i_todos/3?nombre=David
    //Se imprime: 3 David undefined
    console.log(router);
    return (
        <Layout title="Todo hijo">
            <h1>Todos HIJO {params?.todo.title}</h1>
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