import { NavItem, NavLinkStyled, NavStyled } from "./Navigation.styled.js";

const Navigation = () => {
  return (
    <NavStyled>
      <NavItem>
        <NavLinkStyled to="/">HOME</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/movies">MOVIE</NavLinkStyled>
      </NavItem>
    </NavStyled>
  );
};

export default Navigation;
