
type LParams = {
    data: list[]
}

type list = {
    title: string
    description: string
}

export default function List(params: LParams) {
    const { data } = params
    const items = data.map((item, index) => {
        const { title, description } = item
        return (
            <li key={index + 'list'}>
                <h3 className="fs-600 fw-bold">{title}</h3>
                <p>{description}</p>
            </li>
        )
    })
    return (
        <ul role="list" className="numbered-items">
            {items}
        </ul>
    )
}