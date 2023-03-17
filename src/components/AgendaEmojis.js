import { forwardRef, useState } from "react"
import { data as emojiList } from "../data";
import { EmojiSearch } from "./EmojiSearch";

export  function AgendaEmojis (props, inputRef){

    const [isOpen, setIsOpen]= useState(false);
    const [emojis, setEmojis]= useState(emojiList)

    function handleClickOpen(){
        setIsOpen(!isOpen)
    }

    function handleSearch(e){
        const q = e.target.value.toLowerCase();
        //si esxiste un valor
        
        if (!!q) {
            const search = emojiList.filter((emoji) => {
                return (emoji.name.toLowerCase().includes(q) || emoji.keywords.toLowerCase().includes(q)
                );
            });
            setEmojis(search); 
        } else{
            setEmojis(emojiList);
        }

    }

   
    return(
        <div>
            <button onClick={handleClickOpen}> 😊 </button>
            { isOpen ? 
            (
                <div>
                    <EmojiSearch onSearch={handleSearch} />
                    <div>
                   {emojis.map(emoji =>
                        <div> {emoji.symbol} </div> ) }
                    </div>
                </div>
            )
                
                : ""}
        </div>
    )
}

export default forwardRef (AgendaEmojis);