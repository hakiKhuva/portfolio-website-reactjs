import ContactFormField from "./ContactFormField";
import { useCallback, useState } from "react";
import { LuLoader2 } from "react-icons/lu"
import { config } from "../config"
import { Formik, Form } from "formik"
import { BiErrorCircle } from "react-icons/bi"
import { validateContactForm } from "../utils";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";


export default function ContactForm(){
    const [formMessages, setFormMessages] = useState([])

    const handleFormSubmission = useCallback((values, {setSubmitting, resetForm}) => {
        fetch(config.formspreeFormURL,{
            method:"POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.ok === true){
                setFormMessages([
                    ...formMessages,
                    {
                        id: Date.now(),
                        type: 'success',
                        message: 'Your information has been submitted successfully.'
                    }
                ])
                resetForm();
            } else {
                setFormMessages([
                    ...formMessages,
                    {
                        id: Date.now(),
                        type: 'error',
                        message: "Could not submit the form, tryagain soon!"
                    }
                ])
            }
            setSubmitting(false)
        })
        .catch(err => {
            setFormMessages([
                ...formMessages,
                {
                    id: Date.now(),
                    type: 'error',
                    message: "Unknown error occured, tryagain soon!"
                }
            ])
            setSubmitting(false)
        })
    },[ formMessages ])

    return(
        <Formik
            initialValues={{
                name: "",
                email: "",
                subject: "",
                message: ""
            }}
            validate={validateContactForm}
            onSubmit={handleFormSubmission}
        >
            {
                ({isSubmitting}) => (
                    <Form className="font-karla flex flex-col p-2 w-full">
                        {
                        formMessages.length > 0
                        &&
                        formMessages.map(formMessage => (
                            <div
                            className={`my-2 bg-red w-full p-3 rounded flex items-center shadow ${formMessage.type === "error" ? 'bg-red-300 text-red-900' : 'bg-green-300 text-green-950'}`}
                            key={formMessage.id}
                            >
                                <div>
                                    {
                                    formMessage.type === "error" ?
                                    <BiErrorCircle className="text-xl mr-1" />
                                    :
                                    <AiOutlineCheckCircle className="text-xl mr-1" />
                                    }
                                </div>
                                <p className="text-base break-words">{formMessage.message}</p>
                                <button type="button"
                                    className="mr-0 ml-auto cursor-pointer hover:scale-110 transition"
                                    onClick={()=>{
                                        setFormMessages(formMessages.filter(item => item.id != formMessage.id))
                                    }}
                                >
                                    <AiOutlineCloseCircle
                                        className="text-xl"
                                    />
                                </button>
                            </div>
                        ))
                        }

                        <ContactFormField
                            type="text"
                            name="name"
                            placeholder="Your name"
                        />
                        <ContactFormField
                            type="email"
                            name="email"
                            placeholder="Your email address"
                        />
                        <ContactFormField
                            type="text"
                            name="subject"
                            placeholder="Subject"
                        />
                        <ContactFormField
                            as="textarea"
                            name="message"
                            placeholder="Message"
                            rows={6}
                        />

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-teal-700 text-white hover:bg-teal-950 transition duration-300 font-semibold rounded flex items-center justify-center"
                            disabled={isSubmitting}
                        >
                            { isSubmitting && <LuLoader2 className="animate-spin" /> }
                            <span className="mx-1">Submit</span>
                        </button>
                    </Form>
                )
            }
        </Formik>
    )
}