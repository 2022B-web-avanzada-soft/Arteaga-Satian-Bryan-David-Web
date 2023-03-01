// i_todos
//  - index.tsx

import Layout from "../../components/Layout";
import {useEffect, useState} from "react";
import {Todo, TodoHttp} from "../../services/http/todo.http";

export default function Todos() {
    const [arregloTodos, setArregloTodos] = useState<Todo[]>([] as Todo[]);

    useEffect(() => {
            consultarTodos().then().catch((error) => {
                console.error("Error al consulta a la API")
            });
        },
        []
    )


    const consultarTodos = async () => {
        const resultado = await TodoHttp();
        setArregloTodos([
            ...arregloTodos,
            ...resultado
        ]);
    }
    return (
        <Layout title="Todos">
            <h1>Todos</h1>
            {
                arregloTodos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            {todo.id} - {todo.completed} - {todo.title}
                            <a href={`/i_todos/${todo.id}`}>Ver</a>
                        </li>
                    )
                })
            }
        </Layout>
    );
}