import React, { useState } from 'react';
import './Rating.css'

const StudentTable = () => {
    const [students, setStudents] = useState([
        { id: 1, firstName: 'Ivan', lastName: 'Goroshko', email: 'ivan@example.com', subject: 'Math', rating: 85 },
        { id: 2, firstName: 'Cosmo', lastName: 'Kitzen', email: 'cosmokitzen@example.com', subject: 'Science', rating: 78 },
        { id: 3, firstName: 'Neptun', lastName: 'King', email: 'petro@example.com', subject: 'Astrology', rating: 90 }
    ]);

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th className='caption'>Student</th>
                    <th className='caption'>Name</th>
                    <th className='caption'>Surname</th>
                    <th className='caption'>Email</th>
                    <th className='caption'>Subject</th>
                    <th className='caption'>Rating</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td className='user-text'>{student.id}</td>
                        <td className='user-text'>{student.firstName}</td>
                        <td className='user-text'>{student.lastName}</td>
                        <td className='user-text'>{student.email}</td>
                        <td className='user-text'>{student.subject}</td>
                        <td className='user-text'>{student.rating}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentTable;