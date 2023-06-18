

export default function TableContent({ users }) {
    return (
        <tbody>
            {users.map(user => (
                <tr>
                    <td>{Object.values(user.id)}</td>
                    <td>{Object.values(user.first_name)}</td>
                    <td>{Object.values(user.last_name)}</td>
                    <td>{Object.values(user.email)}</td>
                    <td>{Object.values(user.gender)}</td>
                    <td>{Object.values(user.ip_address)}</td>
                </tr>
            ))}
        </tbody>
    )
}