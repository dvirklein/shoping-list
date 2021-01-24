const uList = document.querySelector("#ulist");

const button = document.querySelector("button");

const input = document.querySelector("#item");

button.onclick = function () {
  let count = input.value;
  input.value = "";
  let d = document.createElement("li");
  d.innerText = count;
  uList.append(d);
  // above is the collector of inputs,underneath is the delete option pay attention the child here is important,and that's why we should never forget the children//
  const spanTag = document.createElement("span");
  spanTag.innerText = count;
  const buttonNew = document.createElement("button");
  buttonNew.innerText = "Delete";
  d.appendChild(spanTag);
  d.appendChild(buttonNew);
  uList.appendChild(d);

  buttonNew.onclick = function () {
    uList.removeChild(d);
  };
};
