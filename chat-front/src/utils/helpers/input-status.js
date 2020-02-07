export default (key, error, touched)  => error[key] && touched[key] ? "error" : "success"; 

