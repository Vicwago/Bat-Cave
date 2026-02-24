// script.js

document.addEventListener('DOMContentLoaded', () => {
    // === Cargar Agentes ===
    const agentListDiv = document.getElementById('agent-list');
    const agents = [
        { id: 'batman', name: 'Batman', role: 'Agente Principal', status: 'Activo', lastTask: 'Orquestando agentes' },
        { id: 'superman', name: 'Superman', role: 'Agente de Investigación', status: 'Inactivo', lastTask: 'Ninguna' },
        { id: 'wonder-woman', name: 'Wonder Woman', role: 'Agente de Marketing Digital', status: 'Inactivo', lastTask: 'Ninguna' },
        { id: 'flash', name: 'Flash', role: 'Agente de Finanzas', status: 'Inactivo', lastTask: 'Ninguna' },
        { id: 'cyborg', name: 'Cyborg', role: 'Agente de Programación', status: 'Inactivo', lastTask: 'Ninguna' },
        { id: 'green-lantern', name: 'Green Lantern', role: 'Agente de Contenido y Comunicación', status: 'Inactivo', lastTask: 'Ninguna' },
    ];

    agents.forEach(agent => {
        const agentCard = document.createElement('div');
        agentCard.classList.add('agent-card');
        agentCard.innerHTML = `
            <h3>${agent.name}</h3>
            <p><strong>Rol:</strong> ${agent.role}</p>
            <p><strong>Estado:</strong> ${agent.status}</p>
            <p><strong>Última Tarea:</strong> ${agent.lastTask}</p>
        `;
        agentListDiv.appendChild(agentCard);
    });

    // === Cargar Tareas del Kanban ===
    const kanbanBoardDiv = document.getElementById('kanban-board');
    const columns = ['pendientes', 'en-proceso', 'revision', 'completado'];

    columns.forEach(column => {
        const taskListDiv = document.getElementById(`task-list-${column}`);
        // Para simplificar, aquí cargaremos un placeholder.
        // En una implementación real, haríamos fetch a los archivos Markdown
        // en la carpeta `kanban/${column}/` y parsearíamos su contenido.
        // Ejemplo de cómo leer una tarea de Markdown (esto es conceptual para el cliente):
        /*
        fetch(`/kanban/${column}/nombre_de_la_tarea.md`)
            .then(response => response.text())
            .then(markdownContent => {
                // Parsear Markdown y crear card de tarea
                const taskCard = document.createElement('div');
                taskCard.classList.add('task-card');
                taskCard.innerHTML = `<h4>Título de la Tarea</h4><p>Subagente: Agente X</p>`;
                taskListDiv.appendChild(taskCard);
            })
            .catch(error => console.error('Error fetching task:', error));
        */

        // Placeholder para mostrar algo mientras no implementamos el parsing de Markdown en JS
        if (column === 'pendientes') {
            const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.innerHTML = `
                <h4>Investigar mercados Norte IA</h4>
                <p><strong>Subagente:</strong> Superman</p>
                <p><em>Nueva tarea pendiente.</em></p>
            `;
            taskListDiv.appendChild(taskCard);
        } else {
            const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.innerHTML = `
                <h4>Tarea de ejemplo (${column})</h4>
                <p><strong>Subagente:</strong> Sin Asignar</p>
                <p><em>Descripción breve.</em></p>
            `;
            taskListDiv.appendChild(taskCard);
        }
    });
});
