import { useState } from "react";
export function TwitterFollowCard({
  formatUserName,
  userName,
  name,
}) {
  const [isFollowed, setIsFollowed] = useState(false);
  const imgResource = `https://unavatar.io/${userName}`;
  console.log(isFollowed);
  const text = isFollowed ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowed
    ? "tw-followCardButton is-following"
    : "tw-followCardButton";

 const handleClick = () => {
    setIsFollowed(!isFollowed);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCardAvatar" src={imgResource} alt="avatar1" />
        <div className="tw-followCardinfo">
          <strong>{name}</strong>
          <span className="tw-followCardUsername">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCardText">{text}</span>
          <span className="tw-stopFollowing">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
