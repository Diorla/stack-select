import InputLabel from "components/InputLabel";
import Input from "components/Input";
import Pile from "components/Pile";
import ErrorMessage from "components/ErrorMessage";
import Textarea from "./Textarea";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isTouched?: boolean;
  errorMessage?: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  isTouched?: boolean;
  errorMessage?: string;
  multiline: true;
}

/**
 * It is meant to work with Formik and Yup
 * @param props default input props, as well as `label`, `isTouched`, `errorMessage` and `multiline`
 * @param label: what will be rendered in the label
 * @param multiline returns textarea when true, otherwise input
 * @param errorMessage from formik.error
 * @param isTouched from formik.touched
 * @returns JSX.Element
 * @example <InputField
    label="First Name"
    id="firstName"
    multiline
    isTouched={formik.touched.firstName}
    errorMessage={formik.errors.firstName}
    {...formik.getFieldProps("firstName")}
  />
 */
export default function InputField(props: TextareaProps): JSX.Element;
export default function InputField(props: InputProps): JSX.Element;
export default function InputField(props: any): JSX.Element {
  const { label, id, isTouched, errorMessage, multiline } = props;
  return (
    <Pile>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {multiline ? <Textarea {...props} /> : <Input {...props} />}
      {isTouched ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </Pile>
  );
}
