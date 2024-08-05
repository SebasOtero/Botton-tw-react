import { useState } from 'react' // Importa el hook useState de React

export function TwitterFollowCard({ children, userName = "unknown" }) {
  // Define el estado inicial isFollowing como false
  const [isFollowing, setIsFollowing] = useState(false);

  // Define el texto del botón basado en el estado isFollowing
  const text = isFollowing ? "Siguiendo" : "Seguir";
  
  // Define la clase del botón basada en el estado isFollowing
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  // Maneja el clic en el botón para cambiar el estado isFollowing
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  // Retorna el JSX del componente
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-follorCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName"> @{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  );
}
