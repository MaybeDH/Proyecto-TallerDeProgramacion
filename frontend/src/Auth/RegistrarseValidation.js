const Validation=(values)=>{
    // alert("")
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.nombre===""){
        error.nombre="Nombre requerido"
    }else{
        error.nombre=""
    }

    if(values.apellido===""){
        error.apellido="Apellido requerido"
    }else{
        error.apellido=""
    }

    if(values.email===""){
        error.email="Email requerido"
    }
    else if (!email_pattern.test(values.email)) {
        error.email="Email inválido"
    }else{
        error.email=""
    }


    if(values.role===""){
        error.role="Role is required"
    }else{
        error.role=""
    }

    if(values.password===""){
        error.password="Contraseña requerida"
    }else if (!password_pattern.test(values.password)) {
        error.password="La contraseña no es segura"
    }else{
        error.password=""
    }
    return error;
}
export default Validation