import React from 'react';
import {TextField,Button} from '@material-ui/core'
import { useFormik } from 'formik';


function Form() {
    const formik = useFormik({
        initialValues:{
           "email":"",
            "password":""
        },
        onSubmit:(values)=>{
          console.log("After Form Submit",values)
        }
    })

    //console.log("values",formik.email,formik.password)
 
    return (
        <div>
          <form onSubmit={formik.handleSubmit}>
          <TextField id="outlined-basic" label="Email" variant="outlined" name="email"  value={formik.values.email} onChange={formik.handleChange}/> <br/>
          <TextField id="outlined-basic" type="password" label="Password" variant="outlined" name="password" value={formik.values.password} onChange={formik.handleChange}/><br/> <br/>
          <Button variant="contained" color="primary" type="submit">submit</Button>
            </form>
        </div >
    )
}


export default Form;