import { Table } from "react-bootstrap";

export default function StuDataTable(props) {
  
  
    return (
        <div className="stuDataTable">
            <Table className="stuDataTable">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Course</th>
                        <th>Country</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {props.stuData.map((stu, index) => (
                        <tr key={index}>
                            <td>{stu.name}</td>
                            <td>{stu.email}</td>
                            <td>{stu.phone}</td>
                            <td>{stu.address}</td>
                            <td>{stu.gender}</td>
                            <td>{stu.birthdate}</td>
                            <td>{stu.major}</td>
                        </tr>
                    ))} */}
                </tbody>
            </Table>
        </div>
    );
}