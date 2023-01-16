import * as React from 'react'

const NewForm = (props) => {
    const [formState, setFormState] = React.useState({});
  
    const handleChange = (event) => {
      setFormState({
        ...formState,
        [event.target.name]: event.target.value
      });
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formState);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        {React.Children.map(props.children, child => {
          if (child.type === 'NewDropdownMenu') {
            return (
              <>
                <label className='form-label' htmlFor={child.props.name}>{child.props.label}</label>
                {React.cloneElement(child, {
                  className: 'form-field',
                  onChange: handleChange
                })}
              </>
            );
          } else {
            return (
              <>
                <label className='form-label' htmlFor={child.props.name}>{child.props.label}</label>
                {React.cloneElement(child, {
                  className: 'form-field',
                  onChange: handleChange,
                  value: formState[child.props.name]
                })}
              </>
            );
          }
        })}
        <button type="submit">Submit</button>
      </form>
    );
  }
  

export default NewForm;