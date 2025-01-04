import {useState} from "react";
import "./StudentForm.css";

function StudentForm(){
    //craete the state to hoild teh name, age, and course
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[course, setCourse] = useState("");

        const handleStudent = async (e) => {
            e.preventDefault();
            const Student = {name, age, course};

            try{
                // calling the api using the fetch
                const res = await fetch("https://student-mern-4sp3.onrender.com/api/students", {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify(Student)
                });
                if(res.ok){
                    const data = await res.json();
                    console.log(data);
                    // clearing the form fields after submission
                    setName('');
                    setAge('');
                    setCourse('');
                }else{
                    console.log("failed to submit")
                }
            } catch(error){
                console.log(error.message)
            }
        }
        return(
            <form onSubmit={handleStudent} className="student-form">
                <h2>Add the student to teh Database</h2>
                <input
                    type="text"
                    placeholder="Enter the student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="number"
                    placeholder="Enter the student Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Enter the student Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form> 
        )
}

export default StudentForm;