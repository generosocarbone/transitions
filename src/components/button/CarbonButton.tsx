import './CarbonButton.css';
import { Button } from '@carbon/react';

type ButtonProps = {
    text: string,
    callback: object
}

const CarbonButton = ({text, callback}: ButtonProps) => {
    return <Button 
        className="btn-bea"
        onClick={callback}
        >
            {text}
        </Button>
}

export default CarbonButton;