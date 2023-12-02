import { NavbarContainer, LinkPage, Span } from "../style/Navbar.style";
import { useSelector } from "react-redux";
import Search from "./Search";

export default function Navbar() {
  const selector = useSelector((state) => state.user.isLogin);

  return (
    <NavbarContainer>
      <LinkPage to="/">
        <h1>SMU_TALK</h1>
      </LinkPage>
      {selector ? (
        <LinkPage to="/Profile">
          <h2>Profile</h2>
        </LinkPage>
      ) : (
        <Span>
          <h2>Profile</h2>
        </Span>
      )}
      <Search />
      <LinkPage to="/SignUp">
        <h2>Sign Up</h2>
      </LinkPage>
    </NavbarContainer>
  );
}
