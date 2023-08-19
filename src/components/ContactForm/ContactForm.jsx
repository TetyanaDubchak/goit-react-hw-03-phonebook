import { Formik } from 'formik';
import { StyledForm, StyledError, Button,Label,Input } from "./ContactForm.styled";
import * as Yup from 'yup';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Required'),
     number: Yup.string()
     .length(7, 'Not valid, must be 7 signs!')
     .required('Required'),
   
 });

export const ContactForm = ({onAdd}) => {
    return (
        <Formik
            initialValues={{
            name: '',
            number: '',
            }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
            onAdd({ ...values, id: nanoid()}, values.name, values.number)
            actions.resetForm()
      }}
    >
      <StyledForm>
            <Label>Name
                    <Input name="name" type="text"/>
                    <StyledError name='name' component='div'/>
            </Label>
        
            <Label>Number
                    <Input name="number" type="tel" />
                    <StyledError name='number'component='div'/>    
            </Label>
        
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>

    )

}

ContactForm.propTypes = {
    onAdd: PropTypes.func,
}