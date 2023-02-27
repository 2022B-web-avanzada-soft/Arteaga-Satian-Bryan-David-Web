import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <header>
            <nav>
                <Link href="/">Home / Casa</Link> | <Link href="/about">About</Link> |{' '}
                <Link href="/users">Users List</Link> |{' '}
                <Link href="/a_hola_mundo">A Hola Mundo</Link> |{' '}
                <Link href="about">About</Link> |{' '}
                <Link href="c_use_state">C Use State</Link> |{' '}
                <Link href="d_hook_custom">D Hook Custom</Link> |{' '}
                <Link href="e_use_context">E Use Context</Link> |{' '}
                <Link href="f_ejemplo_criptomonedas">F Ejemplo Criptomonedas</Link> |{' '}

                <a href="/api/users">Users API</a>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                      rel="stylesheet"
                      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                      crossOrigin="anonymous"></link>
            </nav>
        </header>
        {children}
        <footer>
            <hr/>
            <span className={"text-3xl font-bold underline"}>I'm here to stay (Footer)</span>
        </footer>
    </div>
)

export default Layout
