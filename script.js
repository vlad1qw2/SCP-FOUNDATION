window.onload = function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('scp-list');
            data.forEach(scp => {
                const scpElement = document.createElement('div');
                scpElement.classList.add('scp-item');
                scpElement.innerHTML = 
                    <h3><a href="${scp.link}">${scp.id} - ${scp.name}</a></h3>
                    <p><strong>Клас:</strong> ${scp.class}</p>
                    <p><strong>Опис:</strong> ${scp.description}</p>
                ;
                container.appendChild(scpElement);
            });
        });
};