import pokemonLogo from "./pngegg.png";
export default function MiHeader(){
    return (
        <header className={"text-center"}>
            <img src={pokemonLogo.src} alt="Pokemon Logo" />
        </header>
    );
}