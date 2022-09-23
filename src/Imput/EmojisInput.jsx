import React from 'react'
import { useRef } from 'react'
import { EmojiPicker } from '../Picker/EmojiPicker'

export function EmojisInput() {
  const refInput = useRef(null);


   
  return (
    <div>
        <input ref={refInput} />
         <EmojiPicker ref={refInput}/>
    </div>
  )
}

