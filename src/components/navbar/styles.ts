import styled from 'styled-components'

export const HeaderNav = styled.div`
width: 100%;
height: 9.75rem;
display: flex;
align-items: center;
justify-content: space-between;
background-color:#fff;
padding: 0px 7.5rem;
top: 0;


@media (max-width: 768px) {
    padding: 0 1rem;

}

`

export const ContentLinks = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 3.5rem;


nav{
    display: flex;
    align-items: center;
    gap: 3.125rem;
}

a {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    color: var(--blue-300);
    text-decoration: none;
    gap: 4px;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    @media (max-width: 768px) {
      display: none;
    }


}

a:after {
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    
}

a:hover{
    transform:scale(1.25,1.25);
}


`

export const LogoEletro = styled.img`
width: 12.5rem;
height: 3.1875rem;


`

export const DivButtonContact = styled.div`
height: 60px;
margin-left: 280px;
display:flex;
align-items: center;
justify-content: center;


`

export const HeaderBar = styled.div`
width:100%;
height:2.75rem;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 120px;
padding-right:120px;
gap: 20px;
background-color: var(--orange-300);


p {
align-items: center;
display: flex;
color: #fff;
font-weight: 200;


}

svg {
    font-size:20px;
    margin-right: 8px;
    
}



`

export const ContainerInfoBar = styled.div`
display: flex;
align-items: center;
justify-content:center;
gap: 20px;

`

export const ContainerSocial = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 80px;
margin-left: 31.25rem;


svg {
    color: #fff;
    font-size: 20px;
    opacity: 1;
    transition: opacity 1s ease 0s;	
}

svg:hover {
    color: var(--blue-300);
    opacity: 0.7;
}    


`