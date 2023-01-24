import '../../utils.css'
import List from '../List/List';
import { data } from './data.json'

export default function Article() {
    return (
        <section className="article padding-block-900">
            <div className="container">
                <div className="even-columns">
                    <div>
                        <h2 className="fs-secondary-heading fw-bold">
                            What's different about
                            Manage?
                        </h2>
                        <p>
                            Manage provides all the functionality your
                            team needs, without the complexity. Our
                            software is tailor-made for modern digital
                            product teams.
                        </p>
                    </div>
                    <div>
                        <List data={data} listStyle='fs-600 fw-bold' />
                    </div>
                </div>
            </div>
        </section>
    )
}
