import { NavLink } from "react-router-dom";
import {
    ContainerInfoBar,
  ContainerSocial,
  ContentLinks,
  DivButtonContact,
  HeaderBar,
  HeaderNav,
  LogoEletro,
} from "./styles";

import LogoPng from "../../assets/images/logohorizon.png";
import { ButtonPrimary } from "../button";
import { EnvelopeSimple, MapPin } from "phosphor-react";
import { BiLogoFacebookSquare, BiLogoInstagramAlt } from 'react-icons/bi'

export const NavBar = () => {
  const createLinkWhatsApp = () => {
    return "https://api.whatsapp.com/send?phone=5518935002592&text=Preciso%20de%20mais%20informa%C3%A7%C3%B5es";
  };

  return (
    <>
      <HeaderBar>
        <ContainerInfoBar>
          <p>
            {" "}
            <EnvelopeSimple size={20} color="#ffffff" weight="bold" />{" "}
            contato@eletrolar.com.br
          </p>
          <p>
            {" "}
            <MapPin size={20} color="#fcfcfd" weight="bold" /> Pres.Prudente-SP
          </p>
        </ContainerInfoBar>

        <ContainerSocial>
          <a
            href="https://www.linkedin.com/company/length-tecnologia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagramAlt />
          </a>
          <a
            href="https://www.linkedin.com/company/length-tecnologia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoFacebookSquare />
          </a>
          <a
            href="https://www.linkedin.com/company/length-tecnologia/"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </ContainerSocial>
      </HeaderBar>

      <HeaderNav>
        <ContentLinks>
          <LogoEletro src={LogoPng} alt="" />

          <nav>
            <NavLink to="/" title="Home">
              <span>Home</span>
            </NavLink>
            <NavLink to="/about" title="About">
              <span>Sobre</span>
            </NavLink>
            <NavLink to="/services" title="Services">
              <span>Serviços</span>
            </NavLink>
            <NavLink to="/contact" title="Contact">
              <span>Contato</span>
            </NavLink>
          </nav>

          <DivButtonContact>
            <a
              href={createLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonPrimary title={"Entre em Contato"}></ButtonPrimary>
            </a>
          </DivButtonContact>
        </ContentLinks>
      </HeaderNav>
    </>
  );
};
