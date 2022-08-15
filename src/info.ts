import { baseWindow } from "./base-window";

export const openInfo = () => {
  const content = document.createElement("div");
  content.classList.add("info");
  content.innerHTML = `
    <h1>Info</h1>
    <p>
      You can check the source code on <a href="https://github.com/jpldcarvalho/jpldcarvalho.com">GitHub</a>
    </p>
    <p>
      All the icons are from <a href="https://icons8.com/">Icons8</a>
    </p>
  `;

  baseWindow("400px", "500px", content);
};