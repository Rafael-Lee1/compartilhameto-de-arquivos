const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
const fileViewer = document.getElementById("fileViewer");

const uploadedFiles = []; // Para rastrear os arquivos enviados

function uploadFile() {
    const file = fileInput.files[0];
    if (file) {
        const fileName = file.name;
        const listItem = document.createElement("li");
        listItem.textContent = fileName;

        // Armazena o arquivo para futura visualização
        uploadedFiles.push({ name: fileName, file });

        listItem.onclick = function () {
            openViewer(fileName);
        };

        fileList.appendChild(listItem);
    }
}

function openViewer(fileName) {
    const file = uploadedFiles.find(item => item.name === fileName);
    if (file) {
        fileViewer.src = URL.createObjectURL(file.file);
        fileViewer.style.display = "block";
    }
}

function closeViewer() {
    fileViewer.style.display = "none";
    fileViewer.src = "";
}
