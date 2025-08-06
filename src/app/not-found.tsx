import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center front-bold mt-9 text6x1">Pagina 404 nao encontrada</h1>
            <p>Essa pagina que tentou acessar nao foi encontrada</p>
            <Link href="/">
            Voltar para Home
            </Link>
        </div>
    )
}