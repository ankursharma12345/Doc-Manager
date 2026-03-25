import DocumentsList from "./DocumentsList";
import Filter from "./Filter";
import "./assets/MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-container">
      <Filter />
      <DocumentsList />
    </div>
  )
}
export default MainLayout;