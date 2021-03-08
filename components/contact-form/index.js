import { Formik, Field } from "formik" ;
import { useRouter } from "next/router" ;

import Card from "../card";

const urlEncode = (data) => {
  return Object.entries(data).map((entry) => {
    return `${encodeURIComponent(entry[0])}=${encodeURIComponent(entry[1])}` ;
  }).join("&");
}

export default function ContactForm({}){
  const router = useRouter();
  return (
    <div className="-mt-20 relative z-20">
      <div className="container">
        <div className="w-full lg:w-8/12 inner-spacing">
          <Card>
            <div className="p-6">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: ""
                }}
                validate={(values) => {
                  const emailRegex = /[A-Z0-9%+-_]+@[A-Z0-9.-]+\.[A-Z0-9]+/i ;
                  const errors = {};
                  if(!values.email){
                    errors.email = "Veuillez compléter ce champ";
                  } else if ( !emailRegex.test(values.email) ) {
                    errors.email = "Veuillez entrer une adresse email correcte" ;
                  } 
                  if(!values.name){
                    errors.name = "Veuillez compléter ce champ";
                  } 
                  if(!values.message){
                    errors.message = "Veuillez compléter ce champ";
                  }
                  return errors ;
                }}
                onSubmit={(values, actions) => {
                  console.log(values);
                  fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: urlEncode({ "form-name": "contact", ...values }) 
                  })
                  .then(() => {
                    actions.resetForm();
                    router.push('/');
                  })
                  .catch(() => {
                    alert("Il y a eu une erreur lors de la transmission du message. Merci de réessayer.");
                  })
                  .finally(() => actions.setSubmitting(false));
                }}
              >
                {({values, errors, touched, handleChange, handleSubmit}) => (
                  <form onSubmit={handleSubmit} name="contact" data-netlify="true" >

                    <input 
                      type="hidden" 
                      name="form-name" 
                      value="contact" 
                    />

                    <div className="field-block">
                      <label className="label" htmlFor="name">Nom et Prénom</label>
                      <Field 
                        className={`field ${errors.name && touched.name ? "error" : "" }`}
                        placeholder="Vos Nom et Prénoms"
                        type="text"
                        name="name"
                        id="name"
                        error={errors.name && touched.name}
                      />
                      {errors.name && touched.name ? <div className="error-message">{errors.name}</div> :  null}                
                    </div>

                    <div className="field-block">
                      <label className="label" htmlFor="email">Email</label>
                      <Field 
                        className={`field ${errors.email && touched.email? "error" : "" }`}
                        placeholder="Votre email"
                        type="email"
                        name="email"
                        id="email"
                        error={errors.email && touched.email}
                      />
                      {errors.email && touched.email ? <div className="error-message">{errors.email}</div> :  null}                
                    </div>

                    <div className="field-block">
                      <label className="label" htmlFor="message">Votre message</label>
                      <Field 
                        className={`field textarea ${errors.message && touched.message? "error" : "" }`}
                        placeholder="Votre Message"
                        error={errors.message && touched.message}
                        name="message"
                        id="message"
                        as="textarea"
                      />              
                      {errors.message && touched.message ? <div className="error-message">{errors.message}</div> :  null}
                    </div>

                    <button className="btn" type="submit">Envoyer</button>

                  </form>
                )}
              </Formik>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}