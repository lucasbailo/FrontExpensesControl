export default function Home() {
    return (
        <div className="h-[calc(100vh-120px)] flex flex-col justify-center items-center">
            <h1>Bem vindo ao Home, voce esta logado</h1>
            <h2>Cadastre suas despesas</h2>
            <a
                href="/expenses"
            >
                Clique aqui para acessar a página
            </a>
        </div>
    );
}