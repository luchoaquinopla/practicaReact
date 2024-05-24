export function TwitterFollowCard({formatUserName,username,name,isfollowing}){
 
    const imageSrc = `https://unavatar.io/${username}`
    return(
        <article className='twitter-follow-card'>
        <header className='twitter-follow-card-header'>
            <img className ='twitter-follow-card-header-img'	
            alt="kikobeats" src={imageSrc}/>
            <div>
                <strong>{name}  </strong>
                <span className='twitter-follow-card-header-username'>{formatUserName(username)}</span>
            </div>
          </header>
          <aside>
          <button className='twitter-follow-card-button'>
            Seguir</button>
          </aside>
       </article>
    )
}