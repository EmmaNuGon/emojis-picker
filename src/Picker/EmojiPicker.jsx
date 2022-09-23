import { forwardRef } from "react";
import { useState } from "react";
import { EmojiButton } from "../Button/EmojiButton";
import emojisList from "../Data/Data";
import SearchEmoji from "../Search/SearchEmoji";

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojisList);

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }

  function handleSearch(e) {
    const q = e.target.value.toLowerCase();

    if (!!q) {
      const search = emojisList.filter((e) => {
        return (
          e.name.toLowerCase().includes(q) ||
          e.keywords.toLowerCase().includes(q)
        );
      });
      setEmojis(search);
    } else {
      setEmojis(emojisList);
    }
  }

  function handleOnClickEmoji(emojisList) {
    const cursorPos = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursorPos);
    const next = text.slice(cursorPos);

    inputRef.current.value = prev + emojisList.symbol + next;
    inputRef.current.selectionStart = cursorPos + emojisList.symbol.length;
    inputRef.current.selectionEnd = cursorPos + emojisList.symbol.length;
    inputRef.current.focus();
  }

  return (
    <div>
      <button onClick={handleClickOpen}>🙂</button>

      {isOpen ? (
        <div>
          <SearchEmoji onSearch={handleSearch} />
          <div>
            {emojis.map(e => (
              <EmojiButton
                key={e.symbol}
                emojisList={e}
                onClick={handleOnClickEmoji}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default forwardRef(EmojiPicker);
