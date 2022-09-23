import React from 'react'


export function EmojiButton({emojisList, onClick}) {


  function handleClick(){
    onClick(emojisList)
  }
  return (
   <button onClick={handleClick}>{emojisList.symbol}</button>
  )
}

