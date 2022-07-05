let userAgentEl = document.getElementById("userAgentParagraph");
let userAgentDataEl = document.getElementById("userAgentDataParagraph");
const { userAgent, userAgentData } = navigator;
userAgentEl.innerText = 'Are you on Instagram? :' + userAgent.includes("Instagram");
userAgentDataEl.innerText = JSON.stringify(userAgentData);
