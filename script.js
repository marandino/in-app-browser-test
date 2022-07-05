let userAgentEl = document.getElementById("userAgentParagraph");
let userAgentDataEl = document.getElementById("userAgentDataParagraph");
const { userAgent, userAgentData } = navigator;
userAgentEl.innerText = userAgent;
userAgentDataEl.innerText = JSON.stringify(userAgentData);
