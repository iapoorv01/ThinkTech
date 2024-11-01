let prompt = document.querySelector(".prompt")
let container = document.querySelector(".container")
let chatContainer = document.querySelector(".chat-container")
let btn = document.querySelector(".btn")
let userMessage = null
let Api_url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR API KEY' //Place  Your API Key here 

//const Api_url=paste here your api url , you can watch it on my video
function createChatBox(html, className) {
  const div = document.createElement("div")
  div.classList.add(className)
  div.innerHTML = html;
  return div
}
async function generateApiResponse(aiChatBox) {
  const textElement = aiChatBox.querySelector(".text")
  try {
    let response = await fetch(Api_url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          "role": "user",
          "parts": [{ "text": `${userMessage}` }]
        }]
      })
    })
    const data = await response.json()
    const apiResponse = data?.candidates[0].content.parts[0].text.trim();
    textElement.innerText = apiResponse

  }
  catch (error) {
    console.log(error)
  }
  finally {
    aiChatBox.querySelector(".loading").style.display = "none"
  }
}
function showLoading() {
  const html = ` <div id="img">
  <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
<rect height="7.5" width="12.5" y="5.75" x="1.75"/>
<path d="m10.75 8.75v1.5m-5.5-1.5v1.5m-.5-7.5 3.25 3 3.25-3"/>
</svg>
    </div>
    <div class="text">
    </div>
    <img src="loading.gif" alt="" height="50" class="loading">`
  let aiChatBox = createChatBox(html, "ai-chat-box")
  chatContainer.appendChild(aiChatBox)
  generateApiResponse(aiChatBox)

}


btn.addEventListener("click", () => {
  userMessage = prompt.value;
  if (prompt.value = "") {
    container.style.display = "flex"
  } else {
    container.style.display = "none"
  }
  if (!userMessage) return;
  const html = ` <div id="img">
<svg fill="#fff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>
  </div>
  <div class="text">
  </div>`
  let userChatBox = createChatBox(html, "user-chat-box")
  userChatBox.querySelector(".text").innerText = userMessage
  chatContainer.appendChild(userChatBox)
  prompt.value = ""
  setTimeout(showLoading, 500)

})
