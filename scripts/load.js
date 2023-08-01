
const backendUrl = "https://portfolio-api33-production.up.railway.app";

var projectIndex = 0;
function getCurrentProjects() {
  return db.projects.slice(projectIndex, projectIndex + 3);
}

function nextProject() {
  projectIndex++;
  if (projectIndex > db.projects.length - 3) {
    projectIndex = 0;
  }
  render();
}

async function loadProjects(){
  const url= `${backendUrl}/projects`
  const result= await fetch(url);
  console.log(result);

  return await result.json();
}

async function load() {
  // const url = `${backendUrl}/assets/db.json`;
  console.log("estoy en el load")
  try {
    db.projects= await loadProjects();
  } catch (e) {
    console.log("ERROR!");
  }

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  load();
  render();
  setInterval(nextProject, 5000);
});
