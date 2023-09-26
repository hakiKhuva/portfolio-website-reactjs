import { Field, ErrorMessage } from "formik"

export default function ContactFormField(props){
    return(
        <div className="my-2">
            <Field
                {...props}
                className="p-3 rounded w-full bg-white/80 focus:bg-white shadow"
            />
            <ErrorMessage name={props.name} component={"small"} />
        </div>
    )
}