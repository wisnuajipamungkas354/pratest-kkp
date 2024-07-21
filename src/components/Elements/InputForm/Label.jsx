import { Form } from "react-bootstrap";

const LabelForm = (props) => {
    const { color, htmlFor, children } = props;
    return (
        <Form.Label htmlFor={htmlFor} className={`text-${color}`}>
            {children}
        </Form.Label>
    );
}

export default LabelForm;