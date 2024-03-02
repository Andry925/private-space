import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SendEmailPage = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState('');

  useEffect(() => {
    axios.get('/api/email-templates/')
      .then(response => {
        if (Array.isArray(response.data)) {
          setTemplates(response.data);
          if (response.data.length > 0) {
            setSelectedTemplateId(response.data[0].id);
          }
        } else {
          console.error('Response is not an array:', response.data);
        }
      })
      .catch(error => console.error('Error fetching templates:', error));
  }, []);

  const handleSendEmails = () => {
    if (!selectedTemplateId) {
      alert('Будь ласка, виберіть шаблон для відправлення.');
      return;
    }

    axios.post('/api/send-email/', { templateId: selectedTemplateId })
      .then(response => {
        alert('Листи успішно відправлені.');
      })
      .catch(error => {
        console.error('Error sending emails:', error);
        alert('Сталася помилка при відправленні листів.');
      });
  };

  return (
    <div>
      <h2>Відправлення електронних листів</h2>
      <div>
        <label htmlFor="templateSelect">Виберіть шаблон: </label>
        <select
          id="templateSelect"
          value={selectedTemplateId}
          onChange={(e) => setSelectedTemplateId(e.target.value)}
        >
          {templates.map((template) => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSendEmails}>Відправити листи</button>
    </div>
  );
};

export default SendEmailPage;