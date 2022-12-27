import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import headerLeftEffect from "../../assets/header-left-effect.svg";
import headerRightEffect from "../../assets/header-right-effect.svg";


export function Header() {
    return (
        <HeaderContainer>
            <img src={headerLeftEffect} alt="imagem esquerda de decoração do cabeçalho" />
            <img src={logo} alt="logo" />
            <img src={headerRightEffect} alt="imagem direita de decoração do cabeçalho" />
        </HeaderContainer>
    )
}