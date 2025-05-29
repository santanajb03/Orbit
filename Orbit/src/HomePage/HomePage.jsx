import DashBoard from "../Components/DashBoard/DashBoard";
import SideBarNav from "../Components/SideBarNav/SideBarNav";

import styleGlobal from "../globalStyles.module.css";
import stylePage from "./styleHomePage.module.css";

function HomePage() {
  return (
    <div className={styleGlobal.globalStyle}>
      <div className={stylePage.contentContainer}>
        <SideBarNav />
        <DashBoard />
      </div>
    </div>
  );
}

export default HomePage;
