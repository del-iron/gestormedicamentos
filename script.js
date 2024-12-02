// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("medication-form");
    const tableBody = document.querySelector("#medication-table tbody");

    // Handler para adicionar medicamentos
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("med-name").value;
        const dosage = document.getElementById("dosage").value;
        const time = document.getElementById("time").value;

        addMedication(name, dosage, time);
        form.reset();
    });

    // Função para adicionar medicamento na tabela
    function addMedication(name, dosage, time) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${dosage} mg</td>
            <td>${time}</td>
            <td><button class="delete-btn">Remover</button></td>
        `;

        // Remover medicamento
        row.querySelector(".delete-btn").addEventListener("click", () => {
            row.remove();
        });

        tableBody.appendChild(row);

        // Agendar notificação
        scheduleNotification(name, time);
    }

    // Função para agendar notificações
    function scheduleNotification(name, time) {
        const now = new Date();
        const medTime = new Date();
        const [hours, minutes] = time.split(":");
        medTime.setHours(hours, minutes, 0);

        const timeout = medTime.getTime() - now.getTime();

        if (timeout > 0) {
            setTimeout(() => {
                alert(`Hora de tomar o medicamento: ${name}`);
            }, timeout);
        }
    }
});
