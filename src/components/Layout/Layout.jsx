import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Container from "./Container";
import "../../styles/Layout.css";

export default function Layout({children}) {
  return (
    <>
      <Navbar/>
      <div className="row layout ">
        <div className="col-2">
          <SideBar/>
        </div>
        <div className="col-10">
          <Container>
          {children}
          </Container>
        </div>
      </div>
    </>
  );
}
