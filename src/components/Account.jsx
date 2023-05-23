import React from "react";

export default function Account({ type }) {
  return <div>계정입니다</div>;
  if (type === "result")
    return (
      <div>
        <img>이미지</img>
        <p>텍스트</p>
      </div>
    );
}
