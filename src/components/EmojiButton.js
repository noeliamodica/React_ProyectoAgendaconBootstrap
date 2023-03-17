import 'bootstrap/dist/css/bootstrap.min.css';

export default function EmojiButton ({emoji, onClick }){

    function handleClick(){
        onClick(emoji)
    }

    return(
        <button variant="light" onClick={handleClick}> {emoji.symbol} </button>
    )
}