import React from "react";

const students = [
    {
        id: 1,
        name: "Lee",
    },
    {
        id: 2,
        name: "Kim",
    },
    {
        id: 3,
        name: "Jung",
    },
    {
        id: 4,
        name: "Hong",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;