import './BeaDiv.css'

type BeaDivPros = {
    beaclass: string
}

const BeaDiv = ({beaclass}: BeaDivPros) => {
    return <div className={`animation ${beaclass}`}>
        This is a div
    </div>
}

export default BeaDiv