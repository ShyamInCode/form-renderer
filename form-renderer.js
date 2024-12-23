(function() {
  // Create form styles
  const styles = `
    .dynamic-form {
      max-width: 500px;
      margin: 20px auto;
      padding: 20px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .form-field {
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 48px;
      height: 24px;
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
      border-radius: 24px;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
    
    input:checked + .slider {
      background-color: #2693e6;
    }
    
    input:checked + .slider:before {
      transform: translateX(24px);
    }
  `;

  // Create and inject styles
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  // Create form from config
  function createForm(config) {
    const form = document.createElement('form');
    form.className = 'dynamic-form';

    config.fields.forEach(field => {
      const fieldDiv = document.createElement('div');
      fieldDiv.className = 'form-field';

      // Add field label
      const label = document.createElement('label');
      label.textContent = field.name;
      fieldDiv.appendChild(label);

      // Add toggle switch
      const toggleContainer = document.createElement('label');
      toggleContainer.className = 'toggle-switch';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = field.enabled;
      input.name = field.id;

      const slider = document.createElement('span');
      slider.className = 'slider';

      toggleContainer.appendChild(input);
      toggleContainer.appendChild(slider);
      fieldDiv.appendChild(toggleContainer);

      form.appendChild(fieldDiv);
    });

    return form;
  }

  // Wait for DOM to be loaded
  function init() {
    if (window.formConfig) {
      const targetElement = document.querySelector('[data-form-container]') || document.body;
      const form = createForm(window.formConfig);
      targetElement.appendChild(form);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(); 
