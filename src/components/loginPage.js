import { Formik } from 'formik';
import '../stylesheets/App.css';
import React,{useEffect,useState} from 'react';


function LoginPage() {
  
  let [language,setLanguage] = useState('English');
  useEffect(() =>{
    // JS injection to page
    document.querySelector('.select-wrapper').addEventListener('click', function () {
      document.querySelector('.select').classList.toggle('open');
    });
    document.querySelectorAll('.custom-option').forEach((s,i) => {s.addEventListener('click',e => {
      setLanguage(e.target.dataset.value);
      document.querySelector('#lang').value = e.target.dataset.value;
      document.querySelectorAll('.custom-option').forEach(ss => {ss.classList.remove('selected')})
      e.target.className = 'custom-option selected';
      }
    )}
    )
  })
  

  return (

    <div className="App">
      <div className="p-6 max-w-xl w-96 mx-auto bg-white shadow-md flex-col items-center">
        <img className="w-l h-m mx-auto my-5" src="/assets/logo.svg" alt="logo"/>
          
        {/* Form part */}
        <Formik
          initialValues={{ name: '', designation: '' ,language: language }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Enter name';
            }
            if(!values.designation){
              errors.designation = 'Required';
            }
            else if (!(/^\d+$/i.test(values.designation))){
              errors.designation = 'Enter valid number';
            }
            return errors;
        }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              let details = {...values, language: document.querySelector('.custom-option.selected').dataset.value};
              setSubmitting(false);
              localStorage.setItem('details', JSON.stringify(details));
              window.location.href = "./details";
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (



            <form className="flex flex-col" onSubmit={handleSubmit}>
              
              <label>
                <div>
                  <div>Name<sup>*</sup></div>
                  <div className="error">{(errors.name && touched.name && errors.name) ? <i className="fa-solid fa-exclamation"></i>:""} {errors.name && touched.name && errors.name}</div>
                </div>
                <input
                  type="text"
                  name="name"
                    className="rounded-full"
                  placeholder= "Enter full name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </label>


              <label>
                <div>
                  <div>Designation<sup>*</sup></div>
                  <div className="error">{(errors.designation && touched.designation && errors.designation) ? <i className="fa-solid fa-exclamation"></i>:''} {errors.designation && touched.designation && errors.designation}</div>
                </div>
              <input
                  className="rounded-full"
                type="text"
                name="designation"
                placeholder="Enter Position"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.designation}
              />
              </label>


            <label>
                <div><div>Language</div></div>

                <input type="text" id="lang" name="language" onChange={() => { setLanguage(document.querySelector('.custom-option.selected').dataset.value)}} value={values.language} hidden/>
                
                {/* Mocking a select input  */}
                <div className="select-wrapper">
                  <div className="select">
                    <div className="select__trigger"><span>{language}</span>
                      <div className="arrow"></div>
                    </div>
                    <div className="custom-options">
                      <span className="custom-option selected" data-value="English">English</span>
                      <span className="custom-option" data-value="Hindi">Hindi</span>
                      <span className="custom-option" data-value="Marathi">Marathi</span>
                    </div>
                  </div>
                </div>


            </label>

              <button type="submit" disabled={isSubmitting}>
                <span>Login</span><span><i className="fa-solid fa-angle-right"></i></span>
              </button>
            </form>
          )}
        </Formik>
        {/* form part */}

        <p className="text-center mt-4 text-xl">Powered by <img src="/assets/logo.svg" className="w-20 h-20 inline-block" alt="Logo"></img></p>
      </div>

    </div>
  );
}









export default LoginPage;


