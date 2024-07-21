import InputForm from "./Input";
import LabelForm from "./Label";
import { Form } from "react-bootstrap";

const InputData = (props) => {
    const {type, placeholder, children, htmlFor, colorLabel} = props;
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <LabelForm htmlFor={htmlFor} color={colorLabel}>{children}</LabelForm>
            <InputForm type={type} placeholder={placeholder}></InputForm>
        </Form.Group>
    );
}

export default InputData;