import {pages} from "../controllers/index";

let content = document.getElementById("root");

export default (route) => {
  content.innerHTML = "";
  switch (route) {
    case "":
      return content.appendChild(pages.home());
    case "#/products":
      return console.log("PRODUCTS!!");
    case "#/posts":
      return content.appendChild(pages.posts());
    case "#/form":
      return content.appendChild(pages.form());
    default:
      return content.appendChild(pages.notFound());
  }
};
