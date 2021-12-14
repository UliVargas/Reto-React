

export const useValidationForm = (form) => {
    const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
        const useErrors = {}
        if(!form.nombreComercio) {
            useErrors.nombreComercio = "El campo 'Nombre Comercial' es requerido"
        }
        if(!form.regimenFiscal) {
            useErrors.regimenFiscal = "El campo 'Regimen Fiscal' es requerido"
        }
        if(!form.industria) {
            useErrors.industria = "El campo 'Industria' es requerido"
        }
        if(!form.nacionalidadComercio) {
            useErrors.nacionalidadComercio = "El campo 'Nacionalidad' es requerido"
        }
        if(!form.constitucionComercio) {
            useErrors.constitucionComercio = "El campo 'Fecha de Constitución' es requerido"
        }
        if(!form.rfcComercio) {
            useErrors.rfcComercio = "El campo 'RFC' es requerido"
        }
        if(!form.calle) {
            useErrors.calle = "El campo 'Calle' es requerido"
        }
        if(!form.numExt) {
            useErrors.numExt = "El campo 'Numero Exterior' es requerido"
        }
        if(!form.cp) {
            useErrors.cp = "El campo 'Codigo Postal' es requerido"
        }
        if(!form.colonia) {
            useErrors.colonia = "El campo 'Colonia' es requerido"
        }
        if(emailValid.test(form.correoComercio)){
            useErrors.correoInvalido = "Escriba un correo electronico valido"
        }
        if(!form.ciudad) {
            useErrors.ciudad = "El campo 'Ciudad' es requerido"
        }
        if(!form.estado) {
            useErrors.estado = "El campo 'Entidad Federativa o Estado' es requerido"
        }
        if(!form.pais) {
            useErrors.pais = "El campo 'Pais' es requerido"
        }
        if(!form.telefonoComercio) {
            useErrors.telefonoComercio = "El campo 'Telefono' es requerido"
        }
        if(!form.correoComercio) {
            useErrors.correoComercio = "El campo 'Correo Electronico' es requerido"
        }
        if(!form.nombre) {
            useErrors.nombre = "El campo 'Nombre' es requerido"
        }
        if(!form.genero) {
            useErrors.genero = "El campo 'Genero' es requerido"
        }
        if(!form.fechaNacimiento) {
            useErrors.fechaNacimiento = "El campo 'Fecha de Nacimiento' es requerido"
        }
        if(!form.lugarNacimiento) {
            useErrors.lugarNacimiento = "El campo 'Lugar de Nacimiento' es requerido"
        }
        if(!form.nacionalidad) {
            useErrors.nacionalidad = "El campo 'Nacionalidad' es requerido"
        }
        if(!form.curp) {
            useErrors.curp = "El campo 'CURP' es requerido"
        }
        if(!form.domicilio) {
            useErrors.domicilio = "El campo 'Domicilio' es requerido"
        }
        if(!form.estadoCivil) {
            useErrors.estadoCivil = "El campo 'Estado Civil' es requerido"
        }
        if(!form.correoPersonal) {
            useErrors.correoPersonal = "El campo 'Correo' es requerido"
        }
        if(!form.razonSocial) {
            useErrors.razonSocial = "El campo 'Razon Social' es requerido"
        }
        if(form.telefonoPersonal) {
            useErrors.telefonoPersonal = "El campo 'Telefono' es requerido"
        }
        if(!form.clabe) {
            useErrors.clabe = "El campo 'CLABE' es requerido"
        }
        if(!form.banco) {
            useErrors.banco = "El campo 'Banco' es requerido"
        }

    
    
        return useErrors
};