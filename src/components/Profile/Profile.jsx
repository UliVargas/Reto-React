import { useForm } from "../../hooks/useForm";
import Button from "../Button/Button"
import { useValidationForm } from "../../hooks/useValidation";

export const Profile = () => {

    
    const {
        handleBlur,
        handleSubmit,
        handleChange,
        handlePersonState,
        handleFile,
        handleAddStep,
        personaState,
        form,
        errors,
        stepForm,
        disabledNext,
        disableSubmit
    } = useForm(useValidationForm)


    const bancos = [
        {
            label: "BBVA", 
            value: "BBVA"
        },
        {
            label: "Santander",
            value: "Santander"
        }, 
        {
            label: "HSBC",
            value: "HSBC"
        }, 
        {
            label: "CitiBanamex",
            value: "CitiBanamex"
        }, 
        {
            label: "Inbursa",
            value: "Inbursa"
        }, 
        {
            label: "Bancoppel",
            value: "Bancoppel"
        }, 
        {
            label: "BancoAzteca",
            value: "BancoAzteca"
        }, 
        {
            label: "Banorte",
            value: "Banorte"
        }, 
        {
            label: "Banregio",
            value: "Banregio"
        }
    ]
    

    return (
        <div className="flex flex-col w-screen items-center justify-center lg:h-screen p-12 bg-yellow-200">
            <h2 className="font-bold text-gray-800 text-3xl mb-4">Formulario de registro de datos</h2>
            <div className="lg:flex lg:w-1/2 lg:h-full justify-center bg-gray-100">
                <form action="" onSubmit={handleSubmit} className="px-10 pt-5 pb-10 h-full w-full shadow-lg rounded-md flex flex-col justify-between">
                    <div>
                        {stepForm === 0 && (
                            <div id="paso1">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Datos Generales</h3>
                                <div className="mb-4">
                                    <div className="flex gap-4 justify-center">
                                        <div className="flex items-center gap-2">
                                            <label htmlFor="personaFisica">Persona Fisica</label>
                                            <input type="radio" name="persona" id="personaFisica" value="personaFisica" onChange={handlePersonState} onBlur={handleBlur} />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <label htmlFor="personaMoral">Persona Moral</label>
                                            <input type="radio" name="persona" id="personaMoral" value="personaMoral" onChange={handlePersonState} onBlur={handleBlur}  />
                                        </div>
                                    </div>
                                    {!personaState.persona && <span className="text-red-500 text-sm font-bold flex justify-center pt-2">Es necesario indicar el tipo de persona</span>}
                                </div>
            
                                <div className="lg:flex lg:gap-4">
                                    {personaState.persona === "personaMoral" && (
                                        <div className="flex flex-col flex-1 gap-y-4">
                                        <div>
                                            <label htmlFor="razonSocial">Razón Social: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" id="razonSocial" name="razonSocial" value={form.razonSocial} onChange={handleChange}/>
                                            {!form.razonSocial && <span className="text-red-700 text-sm font-bold">{errors.razonSocial}</span>}
                                        </div>
                
                
                                        <div>
                                            <label htmlFor="nacionalidadComercio">Nacionalidad: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" id="nacionalidadComercio" name="nacionalidadComercio" value={form.nacionalidadComercio} onChange={handleChange} onBlur={handleBlur}/>
                                            {!form.nacionalidadComercio && <span className="text-red-700 text-sm font-bold">{errors.nacionalidadComercio}</span>}
                                        </div>
                
                                        <div>
                                            <label htmlFor="constitucionComercio">Fecha de constitución: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="date" id="constitucionComercio" name="constitucionComercio" value={form.constitucionComercio} onChange={handleChange} onBlur={handleBlur}/>
                                            {!form.constitucionComercio && <span className="text-red-700 text-sm font-bold">{errors.constitucionComercio}</span>}
                                        </div>
                
                                        <div>
                                            <label htmlFor="rfcComercio">RFC: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" id="rfcComercio" name="rfcComercio" value={form.rfcComercio} onChange={handleChange} onBlur={handleBlur}/>
                                            {!form.rfcComercio && <span className="text-red-700 text-sm font-bold">{errors.rfcComercio}</span>}
                                        </div>
                                    </div>
                                    )}
                                    <div className="lg:flex lg:flex-col lg:flex-1 lg:gap-y-4">
                                        <div>
                                            <label htmlFor="nombreComercio">Nombre comercial: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text"  name="nombreComercio" value={form.nombreComercio} onBlur={handleBlur} onChange={handleChange} id="NComercial" />
                                            {!form.nombreComercio && <span className="text-red-700 text-sm text-sm font-bold">{errors.nombreComercio}</span>}
                                        </div>

                                        <div>
                                            <label htmlFor="regimenFiscal">Regimen Fiscal: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" id="regimenFiscal" name="regimenFiscal" value={form.regimenFiscal} onBlur={handleBlur} onChange={handleChange} />
                                        {!form.regimenFiscal && <span className="text-red-700 text-sm font-bold">{errors.regimenFiscal}</span>}
                                        </div>
                    
                                        <div>
                                            <label htmlFor="industria">Industria: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" id="industria" name="industria" value={form.industria} onChange={handleChange} onBlur={handleBlur} />
                                        {!form.industria && <span className="text-red-700 text-sm font-bold">{errors.industria}</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
            
                        {stepForm === 1 && (
                            <div id="paso2">
                            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Domicilio</h3>
                            <div className="lg:flex lg:gap-4">
                                <div className="flex flex-col gap-y-4">
                                    <div>
                                        <label htmlFor="calle">Calle o Avenida: </label>
                                        <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" name="calle" id="calle" value={form.calle} onBlur={handleBlur} onChange={handleChange} />
                                    {!form.calle && <span className="text-red-700 text-sm font-bold">{errors.calle}</span>}
                                    </div>

                                    <div>
                                        <label htmlFor="numExt">Numero Exterior: </label>
                                        <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="number" name="numExt" id="numExt" value={form.numExt}  onBlur={handleBlur} onChange={handleChange} />
                                    {!form.numExt && <span className="text-red-700 text-sm font-bold">{errors.numExt}</span>}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="numInt">Numero Interior: </label>
                                        <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="number" name="numInt" id="numInt" value={form.numInt} onBlur={handleBlur} onChange={handleChange} />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="cp">Codigo Postal: </label>
                                        <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="number" name="cp" id="cp" value={form.cp} onBlur={handleBlur} onChange={handleChange} />
                                    {!form.cp && <span className="text-red-700 text-sm font-bold">{errors.cp}</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <div>
                                        <label htmlFor="colonia">Colonia: </label>
                                        <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" name="colonia" id="colonia" value={form.colonia} onBlur={handleBlur} onChange={handleChange} />
                                    {!form.colonia && <span className="text-red-700 text-sm font-bold">{errors.colonia}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="ciudad">Ciudad o Poblacion: </label>
                                        <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" name="ciudad" id="ciudad" value={form.ciudad} onBlur={handleBlur} onChange={handleChange} />
                                    {!form.ciudad && <span className="text-red-700 text-sm font-bold">{errors.ciudad}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="estado">Entidad Federativa o Estado: </label>
                                        <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" name="estado" id="estado" value={form.estado} onBlur={handleBlur} onChange={handleChange} />
                                    {!form.estado && <span className="text-red-700 text-sm font-bold">{errors.industria}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="pais">Pais: </label>
                                        <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" name="pais" id="pais" value={form.pais} onBlur={handleBlur} onChange={handleChange} />
                                    {!form.pais && <span className="text-red-700 text-sm font-bold">{errors.pais}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        
            
                        {stepForm === 2 && (
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Datos de contacto</h3>
                                <div className="flex flex-col gap-y-4">
                                    <div>
                                        <label htmlFor="comprobanteDomicilio">Comprobante de domicilio: </label>
                                        <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="file" id="comprobanteDomicilio" name="comprobanteDomicilio" onBlur={handleBlur} onChange={handleFile} />
                                    {!form.industria && <span className="text-red-700 text-sm font-bold">{errors.industria}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="telefonoComercio">Numero de telefono: </label>
                                        <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="tel" name="telefonoComercio" id="telefonoComercio" value={form.telefonoComercio} onBlur={handleBlur} onChange={handleChange} />
                                    {!form.telefonoComercio && <span className="text-red-700 text-sm font-bold">{errors.telefonoComercio}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="correoComercio">Correo Electronico: </label>
                                        <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="email" name="correoComercio" id="correoComercio" value={form.correoComercio} onBlur={handleBlur} onChange={handleChange} />
                                    {!form.correoComercio && !errors.correoInvalido ? <span className="text-red-700 text-sm font-bold">{errors.correoComercio}</span> : <span className="text-red-700 text-sm font-bold">{errors.correoInvalido}</span>}
                                    </div>
                                </div>
                            </div>
                        )}
            
                        {stepForm === 3 && (
                            <div>
                                {personaState.persona === "personaMoral" ? <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Datos de representante legal</h3> : <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Datos personales</h3>}
                                
                                <div className="lg:flex lg:gap-4">
                                    <div className="flex flex-col gap-y-4 flex-1">
                                        <div>
                                            <label htmlFor="nombre">Nombre: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" name="nombre" id="" value={form.nombre} onBlur={handleBlur} onChange={handleChange} />
                                        {!form.nombre && <span className="text-red-700 text-sm font-bold">{errors.nombre}</span>}
                                        </div>
    
                                        <div>
                                            <label htmlFor="genero">Genero: </label>
                                            <select className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" name="genero" id="genero" value={form.genero}  onChange={handleChange} onBlur={handleBlur}>
                                                <option value="" defaultValue disabled>--Selecciona una opción--</option>
                                                <option value="hombre">Hombre</option>
                                                <option value="mujer">Mujer</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        {!form.genero && <span className="text-red-700 text-sm font-bold">{errors.genero}</span>}
                                        </div>
    
                                        <div>
                                            <label htmlFor="fechaNacimiento">Fecha de nacimiento: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="date" id="fechaNacimiento" name="fechaNacimiento" value={form.fechaNacimiento} onBlur={handleBlur} onChange={handleChange} />
                                        {!form.fechaNacimiento && <span className="text-red-700 text-sm font-bold">{errors.fechaNacimiento}</span>}
                                        </div>
    
                                        <div>
                                            <label htmlFor="lugarNacimiento">Lugar de nacimiento: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" id="lugarNacimiento" name="lugarNacimiento" value={form.lugarNacimiento} onBlur={handleBlur} onChange={handleChange} />
                                        {!form.lugarNacimiento && <span className="text-red-700 text-sm font-bold">{errors.lugarNacimiento}</span>}
                                        </div>
    
                                        <div>
                                            <label htmlFor="nacionalidad">Nacionalidad: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" id="nacionalidad" name="nacionalidad" value={form.nacionalidad} onBlur={handleBlur} onChange={handleChange} />
                                        {!form.nacionalidad && <span className="text-red-700 text-sm font-bold">{errors.nacionalidad}</span>}
                                        </div>
    
                                    </div>
    
                                    <div className="flex flex-col gap-y-2 flex-1">
                                        <div>
                                            <label htmlFor="curp">CURP: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" id="curp" name="curp" value={form.curp} onBlur={handleBlur} onChange={handleChange} />
                                        {!form.curp && <span className="text-red-700 text-sm font-bold">{errors.curp}</span>}
                                        </div>
    
                                        <div>
                                            <label htmlFor="domicilio">Domicilio: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" id="domicilio" name="domicilio" value={form.domicilio} onBlur={handleBlur} onChange={handleChange} />
                                        {!form.domicilio && <span className="text-red-700 text-sm font-bold">{errors.domicilio}</span>}
                                        </div>
    
                                        <div>
                                            <label htmlFor="estadoCivil">Estado Civil: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" id="estadoCivil" name="estadoCivil" value={form.estadoCivil} onBlur={handleBlur} onChange={handleChange} />
                                        {!form.estadoCivil && <span className="text-red-700 text-sm font-bold">{errors.estadoCivil}</span>}
                                        </div>
    
                                        <div>
                                            <label htmlFor="correoPersonal">Correo: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="text" id="correoPersonal" name="correoPersonal" value={form.correoPersonal} onBlur={handleBlur} onChange={handleChange} />
                                            {!form.correoPersonal && !errors.correoInvalido ? <span className="text-red-700 text-sm font-bold">{errors.correoPersonal}</span> : <span className="text-red-700 text-sm font-bold">{errors.correoInvalido}</span>}
                                        </div>
                                        <div>
                                            <label htmlFor="telefonoPersonal">Telefono: </label>
                                            <input type="tel" id="telefonoPersonal" name="telefonoPersonal" onChange={handleChange} onBlur={handleBlur} value={form.telefonoPersonal} className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1"/>
                                        </div>
                                        <div>
                                            <label htmlFor="identificacion">Documento de Identidicaion: </label>
                                            <input className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" type="file" id="identificacion" name="identificacion" onBlur={handleBlur} onChange={handleFile} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                            {stepForm === 4 && (
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Cuenta Bancaria</h3>
                                    <div>
                                        <label htmlFor="banco">Banco: </label>
                                        <select name="banco" onBlur={handleBlur} id="banco" className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1">
                                            {bancos.map(banco => (
                                                <option key={banco.label} value={banco.value}>{banco.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="clabe">CLABE Interbancaria: </label>
                                        <input type="number" className="text-gray-800 border-2 border-blue-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-1" name="clabe"maxLength={3} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>
                                </div>
                            )}
                    </div>
                    
                    <div className="mt-4 flex gap-4 justify-center">
                        
                        {stepForm !== 4 && 
                            <Button
                            disabled={disabledNext}
                            text="Siguiente"
                            customTextColor="#FFFFF"
                            theme="#155E75"
                            action={handleAddStep}
                            />
                        }
                        
                        {stepForm === 4 && 
                            <Button
                            text="Enviar"
                            customTextColor="#FFFFF"
                            theme="#155E75"
                            submit
                            disabled={disableSubmit}
                            />
                        }

                    </div>
                </form>
            </div>
        </div>
    )
};