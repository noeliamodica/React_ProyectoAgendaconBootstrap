import { forwardRef, useState } from "react"
import { data as emojiList } from "../data";
import EmojiButton from "./EmojiButton";
import { EmojiSearch } from "./EmojiSearch";

export  function AgendaEmojis (props, inputRef){

    const [isOpen, setIsOpen]= useState(false);
    const [emojis, setEmojis]= useState(emojiList)

    function handleClickOpen(){
        setIsOpen(!isOpen)
    }

    function handleSearch(e){
        const q = e.target.value.toLowerCase();
        //si existe un valor
        
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
    function handleEmojiClick(emoji){
       
        inputRef.current.value = emoji.symbol
        inputRef.current.selectionStart = emoji.symbol.length

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
                        <EmojiButton 
                            key={emoji.symbol}
                            emoji={emoji}
                            onClick={handleEmojiClick}
                        />) }
                    </div>
                </div>
            )
                
                : ""}
        </div>
    )
}

export default forwardRef (AgendaEmojis);