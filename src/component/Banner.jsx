import Proptypes from "prop-types"
function Banner({img_src,className="banner"}){

    return (<img className={className}src={img_src}></img>);
}

export default Banner;


Banner.Proptypes = {
    img_src: Proptypes.string.isRequired,
    className:Proptypes.string.isRequired

}