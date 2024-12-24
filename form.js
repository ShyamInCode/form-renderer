document.addEventListener('DOMContentLoaded', function() {
    // Styles
    const styles = document.createElement('style');
    styles.textContent = `
        .preference-field {
            display: flex;
            align-items: center;
            padding: 1rem;
            margin: 0.5rem;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        }
        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
        }
        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
        .toggle-switch input:checked + .slider {
            background-color: #2196F3;
        }
        .toggle-switch input:checked + .slider:before {
            transform: translateX(26px);
        }
        .form-container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            font-family: sans-serif;
        }
    `;
    document.head.appendChild(styles);

    // Form Configuration
    const config = {"fields":[{"id":"field-1","name":"SMS","type":"toggle","position":1}]};

    // Create and render form
    const container = document.createElement('div');
    container.className = 'form-container';
    
    config.fields.forEach(field => {
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'preference-field';
        
        const label = document.createElement('span');
        label.style.flexGrow = '1';
        label.textContent = field.name;
        
        const toggleLabel = document.createElement('label');
        toggleLabel.className = 'toggle-switch';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        
        const slider = document.createElement('span');
        slider.className = 'slider';
        
        toggleLabel.appendChild(input);
        toggleLabel.appendChild(slider);
        fieldDiv.appendChild(label);
        fieldDiv.appendChild(toggleLabel);
        container.appendChild(fieldDiv);
    });

    // Append to existing form container or body
    const existingContainer = document.getElementById('preference-form');
    if (existingContainer) {
        existingContainer.replaceWith(container);
    } else {
        document.body.appendChild(container);
    }
});
