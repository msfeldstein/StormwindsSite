import "./index.css";

const eldritch = new URL("./assets/eldritch.svg", import.meta.url);
const gem = new URL("./assets/gem.svg", import.meta.url);
const loveless = new URL("./assets/loveless.svg", import.meta.url);
const shard = new URL("./assets/shard.svg", import.meta.url);
const sword = new URL("./assets/sword.svg", import.meta.url);
const undead = new URL("./assets/undead.svg", import.meta.url);
const svgs = [eldritch, gem, loveless, shard, sword, undead];
let i = 0;
const img = document.querySelector("#svg-icon") as HTMLImageElement;
const next = () => {
  const svg = svgs[i++ % svgs.length];
  img.src = svg.pathname;
  img.style.display = "block";
};
next();
setInterval(next, 1000);
