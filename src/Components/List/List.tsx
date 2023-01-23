
type LParams = {
    data: list[]
    listStyle: string
}

type list = {
    title: string
    description: string
}

export default function List(params: LParams) {
    const { data, listStyle } = params
    const items = data.map((item, index) => {
        const { title, description } = item
        return (
            <li key={index + 'list'}>
                <h3 className={listStyle}>{title}</h3>
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
