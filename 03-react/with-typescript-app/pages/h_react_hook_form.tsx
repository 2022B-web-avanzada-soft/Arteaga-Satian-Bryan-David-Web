import {useState} from "react";
import {useForm} from "react-hook-form";
import Layout from "../components/Layout";
import {Button} from "@mui/material";


interface IFormularioEjemplo {
    nombre: string;
}

export default function () {
    const [nombre, setNombre] = useState("David");

    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormularioEjemplo>(
        {
            defaultValues: {
                nombre: nombre
            },
            mode: "all"
        }
    )

    const controladorSubmit = (datos: IFormularioEjemplo) => {
        console.log(datos);
    }
    return (
        <>
            <Layout title={"React Hook Form"}>
                <h1>React Hook Form</h1>
                <form onSubmit={handleSubmit(controladorSubmit)}>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        className={"form-control"}
                        placeholder={"Nombre"}
                        type="text"
                        id={"nombre"}
                        {...register("nombre",{
                            required: true,
                        })}
                    />
                    <br/>
                    <div id={"nombreHelp"} className={"form-text"}>Ingresa tu nombre</div>
                    <Button type="submit" variant={"outlined"}>Enviar</Button>
                </form>
            </Layout>
        </>
    )
}
