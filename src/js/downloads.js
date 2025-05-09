const downloadItems = document.getElementById("download-items");
const mockObjectList = [
    {
        imagePath: "",
        label: "Título clicável",
        description: "Aqui vai ser exibida a descrição do arquivo a ser baixado."
    },
    {
        imagePath: "",
        label: "Título Clicável 2",
        description: "Aqui vai ser exibida a descrição do arquivo 2 a ser baixado."
    },
    {
        imagePath: "",
        label: "Título Clicável 3",
        description: "Aqui vai ser exibida a descrição do arquivo 3 a ser baixado."
    },
    {
        imagePath: "",
        label: "Título Clicável 4",
        description: "Aqui vai ser exibida a descrição do arquivo 4 a ser baixado."
    }
];

function buildDownloadItemsList() {
    mockObjectList.forEach(element => {
        downloadItems.innerHTML += `
            <div class="download-item-container">
                <img class="download-img" src="../assets/images/broken_cup.jpg" alt="download-item-img"/>
                <div class="download-text-content">
                    <a href="#">${element.label}</a>
                    <p>${element.description}</p>
                </div>
            </div>
        `;
    });
}

buildDownloadItemsList();

