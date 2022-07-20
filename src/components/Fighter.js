
const Fighter = ({fighter}) => {
    return (
        //backgroundCOlor is inside curlies because style has to be returned as an object in jsx
        <div style={{backgroundColor: fighter.color}}>
        <img className="fighter-image" src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${fighter.name.toLowerCase()}.png`} />
        <span>
          <h5 className="fighter-name">{fighter.name}</h5>
        </span>
      </div>
    );
}

export default Fighter;