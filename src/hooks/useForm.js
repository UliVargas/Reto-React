import { useState } from "react";
import { useEffect } from "react";



export const useForm = (validateForm) => {

    const initialForm = {
        nombreComercio: "",
        razonSocial: "",
        nacionalidadComercio: "",
        constitucionComercio: "",
        rfcComercio: "",
        regimenFiscal: "",
        industria: "",
        calle: "",
        numExt: "",
        numInt: "",
        cp: "",
        colonia: "",
        ciudad: "",
        estado: "",
        pais: "",
        telefonoComercio: "",
        correoComercio: "",
        nombre: "",
        genero: "",
        fechaNacimiento: "",
        lugarNacimiento: "",
        nacionalidad: "",
        curp: "",
        domicilio: "",
        estadoCivil: "",
        correoPersonal: "",
        telefonoPersonal: "",
        banco: "",
        clabe: ""
    }
    
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [personaState, setPersonaState] = useState("");
    const [files, setFiles] = useState("")
    const [stepForm, setStepForm] = useState(0)
    const [disableSubmit, setDisableSubmit] = useState(true)
    const [disabledNext, setDisabledNext] = useState(true)
    const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    useEffect(()=>{
        if(stepForm === 0) {
            if(personaState.persona === "personaFisica" && form.nombreComercio && form.regimenFiscal && form.industria) {
                setDisabledNext(false)
            }
            else if(personaState.persona === "personaMoral" && form.nombreComercio && form.regimenFiscal && form.industria && form.razonSocial && form.nacionalidadComercio && form.constitucionComercio && form.rfcComercio) {
                setDisabledNext(false)
             }
            } else setDisabledNext(true)
       if(stepForm === 1) {
           if(form.calle && form.numExt && form.cp && form.colonia && form.ciudad && form.estado && form.pais) {
               setDisabledNext(false)
            } else setDisabledNext(true)
        }
        if(stepForm === 2) {
           if (files && form.telefonoComercio && Number(form.telefonoComercio.length) >= 10 && form.correoComercio && emailValid.test(form.correoComercio)) {
               setDisabledNext(false)
            } else setDisabledNext(true)
        }
        if(stepForm === 3) {
            if(form.nombre && form.genero && form.fechaNacimiento && form.lugarNacimiento && form.nacionalidad && form.curp && form.domicilio && form.estadoCivil && form.correoPersonal && emailValid.test(form.correoPersonal) && form.telefonoPersonal && Number(form.telefonoPersonal.length) >= 10 && files) {
                setDisabledNext(false)
            } else setDisabledNext(true)
        }
        if(stepForm === 4) {
            if(form.clabe && form.banco && form.clabe.length >= 10 && form.clabe.length <= 20) {
                setDisableSubmit(false)
            } else setDisableSubmit(true)
        }
    },[form, setDisabledNext, setDisableSubmit, personaState, files, stepForm])
    
    
    const handlePersonState = (e) => {
        const {name, value} = e.target;
        setPersonaState({
            [name]: value
        });
    };

    const handleAddStep = () => {
        setStepForm(stepForm + 1);
        setDisabledNext(true);
    };
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleFile = (e) => {
        const { files } = e.target;
        console.log(files);
        setFiles(files[0])
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form))
    };

    const handleSubmit = (e) => {
            alert("El formulario se envió correctamente")
    };

    return {
        handleSubmit,
        handleBlur,
        handleChange,
        handlePersonState,
        handleFile,
        handleAddStep,
        personaState,
        form,
        errors,
        files,
        stepForm,
        disabledNext,
        disableSubmit
    }
};