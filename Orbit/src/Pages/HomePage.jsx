import HeaderMain from "./Componets/HeaderMain";
import FooterMain from "./Componets/FooterMain";
import DashBoard from "./Componets/DashBoard";
import SideBarNav from "./Componets/SideBarNav";

function HomePage() {
  return (
    <>
      <HeaderMain />
      <DashBoard />
      <SideBarNav />
      <FooterMain />
    </>
  );
}

export default HomePage;
