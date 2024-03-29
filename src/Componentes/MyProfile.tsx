import "../stylesheets/Myprofile.css";
import avatarUser from "../Imagenes/avatar-user.png";
import userProfile from "../Imagenes/user-myprofile.png";

function MyProfile() {
  return (
    <main className="myprofile-container route_page">
      <section className="container">
        <section className="section-profile-description">
          <section>
            <img src={avatarUser} className="avatar-user" />
          </section>
          <section className="text-description">
            <h2 className="welcome-text-two">Nombre_usuario</h2>
            <h3 className="welcome-text-two">Descripción_del_perfil</h3>
            <h4 className="welcome-text-two">Ciudad</h4>
          </section>
        </section>
        <section className="group-profile">
          <p>Personas que conoces</p>
          <img src={userProfile} className="user-profile" />
          <img src={userProfile} className="user-profile" />
          <p className="ver-mas">
            <a href="www.ejemplo.com">Ver más</a>
          </p>
        </section>
        <section className="group-message">
          <p>Mensajes (2)</p>
          <p className="text-messages-myprofile">
            Lorem ipsum dolor sit amet. Hic autem placeat in atque dolor hic
            magni Quis?
          </p>
          <p className="ver-mas">
            <a href="www.ejemplo.com">Ver más</a>
          </p>
          <p className="text-messages-myprofile">
            Lorem ipsum dolor sit amet. Hic autem placeat in atque dolor hic
            magni Quis?
          </p>
          <p className="ver-mas">
            <a href="www.ejemplo.com">Ver más</a>
          </p>
        </section>
      </section>
    </main>
  );
}

export default MyProfile;
