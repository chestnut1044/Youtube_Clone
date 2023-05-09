import React from "react";

export default function Info({ type }) {
  if (type === "result") return <div>
    <img>이미지</img>
    <p>텍스트</p>
  </div>;
}
