export default function ListData (props) {
    return (
        <>
        <div>
            <input type="checkbox" onClick={() => props.check(props.value)} />
        </div>
        <div>
            <p>{props.data.title}</p>
        </div>
        <div>
            <button onClick={() => props.delete(props.data.id)}>Delete</button>
        </div>

        </>
    )
}