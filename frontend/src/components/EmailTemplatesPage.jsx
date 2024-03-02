import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmailTemplatesPage = () => {
  const [templates, setTemplates] = useState([]);
  const [newTemplate, setNewTemplate] = useState({ name: '', subject: '', body: '' });

  useEffect(() => {
    axios.get('/api/email-templates/')
      .then(response => {
        if (Array.isArray(response.data)) {
          setTemplates(response.data);
        }
      })
      .catch(error => console.error('Error fetching templates', error));
  }, []);

  const createTemplate = () => {
    axios.post('/api/email-templates/', newTemplate)
      .then(response => {
        setTemplates(prevTemplates => [...prevTemplates, response.data]);
        setNewTemplate({ name: '', subject: '', body: '' }); // Очистити форму
      })
      .catch(error => {
        console.error('Error creating template', error);
      });
  };

  return (
    <div>
      <h2>Шаблони електронних листів</h2>
      {Array.isArray(templates) && templates.map(template => (
        <div key={template.id}>
          <h3>{template.name}</h3>
          <p>Subject: {template.subject}</p>
          <p>Body: {template.body}</p>
        </div>
      ))}

      <h2>Створити новий шаблон</h2>
      <input
        type="text"
        placeholder="Назва шаблону"
        value={newTemplate.name}
        onChange={e => setNewTemplate({ ...newTemplate, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Тема листа"
        value={newTemplate.subject}
        onChange={e => setNewTemplate({ ...newTemplate, subject: e.target.value })}
      />
      <textarea
        placeholder="Тіло листа"
        value={newTemplate.body}
        onChange={e => setNewTemplate({ ...newTemplate, body: e.target.value })}
      />
      <button onClick={createTemplate}>Створити шаблон</button>
    </div>
  );
};

export default EmailTemplatesPage;
