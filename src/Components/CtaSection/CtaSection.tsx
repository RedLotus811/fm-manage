import '../../utils.css'
export default function CtaSection() {

    return (
        <section className="cta | bg-accent-400 text-accent-100 padding-block-700">
            <div className="container">
                <div className="even-columns">
                    <div>
                        <p className="fs-secondary-heading fw-bold">
                            Simplify how your team
                            works today.
                        </p>
                    </div>
                    <div>
                        <button className="button" data-type="inverse">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}