import Link from 'next/link'
import Layout from '../components/Layout'
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function IndexPage() {

    const router = useRouter()

    useEffect(() => {
        router.push("/director")
    }, [])

    return (
        <>
        </>
    )
}
