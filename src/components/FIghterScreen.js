const FighterScreen = ({selectedFighter}) => {

    return(
        //style elements that are dynamic like this background that changes cannot be inside a css file and must be handled inside a JSx file
        <div id="fighter-screen" style={{backgroundImage: `url(https://www.smashbros.com/assets_v2/img/fighter/${selectedFighter.toLowerCase()}/bg.jpg)`}}>
            <img src='' className="char-model"/>
            <h3 className="char-name">{selectedFighter}</h3>
        </div>
    
    )

}
export default FighterScreen;