import { Form } from "react-bootstrap";

const InputForm = (props) => {
    const { type, placeholder } = props;
    return (
        <Form.Control type={type} placeholder={placeholder} />
    );
}

export default InputForm;