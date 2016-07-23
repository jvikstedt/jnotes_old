import { reduxForm } from 'redux-form';
import { createNote } from 'redux/modules/notes';
import Form from 'components/notes/form';

function validate(formProps, props) {
  const errors = {}
  if (!formProps.title) {
    errors.title = 'Title can\'t be blank';
  }

  return errors;
}

function mapDispatchToProps(dispatch) {
  return {
    handleFormSubmit: ({title}) => {
      dispatch(createNote({title}));
    }
  };
}

export default reduxForm({
  form: 'createNote',
  fields: ['title'],
  validate
}, null, mapDispatchToProps)(Form)
