import Navbar from "./components/Navbar";
import { InicioPage } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { EstudiosPage } from "./pages/EstudiosPage";
import { EstudiosUnoPage } from "./pages/EstudiosUnoPage";
import { EstudiosDosPage } from "./pages/EstudiosDosPage";
import { ExperienciaPage } from "./pages/ExperienciaPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { ContactoPage } from "./pages/ContactoPage";

function App() {
  return (
    <>
      <Navbar />
      <section id="inicio" Class="px">
        <InicioPage />
      </section>
      <section id="perfil">
        <PerfilPage />
      </section>
      <section id="estudios">
        <EstudiosPage />
      </section>
      <section id="estudiosUno">
        <EstudiosUnoPage />
      </section>
      <section id="estudiosDos">
        <EstudiosDosPage />
      </section>
      <section id="experiencia">
        <ExperienciaPage />
      </section>
      <section id="portafolio">
        <PortafolioPage />
      </section>
      <section id="contacto">
        <ContactoPage />
      </section>
    </>
  );
}

export default App;
