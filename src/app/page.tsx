'use client';
import "./globals.scss";

import { useState } from "react";
import { EmojiStyle, default as EmojiPicker } from "emoji-picker-react";
import Twemoji from "react-twemoji";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [title , setTitle] = useState("");
  const [icon, setIcon] = useState("📁");

  return (
    <main className="scoped">
      <section>
        <form action="/folder">
            <header>
              <h2>📁 Folderion 📁</h2>
              <p>Preudo folder for Orion browser</p>
            </header>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" placeholder="Awesome folder title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="icon">Icon:</label>
            <span style={{ display: "flex", gap: "1em"}}>
              <span style={{ width: 64, paddingLeft: "1.25em", paddingRight: "1em", marginBottom: 0}}>
                <Twemoji>{icon}</Twemoji>
              </span>
              <div style={{ flex: 1, margin: 0, position: "relative" }}>
              <button
                style={{ width: "100%", margin: 0, color: "rgb(18, 128, 235)", background: "transparent", border: "1px solid rgb(18, 128, 235)", cursor: "pointer" }}
                onClick={(e) => {
                  setIsOpen(!isOpen);
                  e.preventDefault();
                  return false;
                }}>
                  Select emoji
                </button>
                <EmojiPicker
                  style={{ position: "absolute", left: 0, top: 0, zIndex: 1 }}
                  open={isOpen}
                  searchDisabled
                  skinTonesDisabled
                  onEmojiClick={(e) => {
                    setIcon(e.emoji);
                    setIsOpen(!isOpen);
                  }}
                  emojiStyle={EmojiStyle.TWITTER}
                />
              </div>
            </span>
            <input type="hidden" id="icon" name="icon" value={icon} />
            <section style={{ marginTop: "2em" }}>
              <button type="submit">Generate</button>
            </section>
        </form>
        </section>
    </main>
  );
}
