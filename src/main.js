const MenuList = ["Menu1", "Menu2", "Menu3"];
var MenuElement = document.querySelector("#menu");
if (MenuElement) {
  for (let i = 0; i < MenuList.length; i++) {
    MenuElement.innerHTML += `<li>${MenuList[i]}</li>`;
  }
}
