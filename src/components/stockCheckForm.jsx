import FormWrapper from "./formWrapper";
import FormContainer from "./formContainer";
import DropdownInput from "./dropdownInput";
import TextInput from "./textInput";
import FormSubmit from "./formSubmit";

export default function StockCheckForm(props) {


    return (
        <div className="">
            <FormWrapper>
                <div className="text-xs absolute right-16 p-4">*Required</div>
                <FormContainer className='pt-8'>
                    <DropdownInput label='Product' options={[{ value: 'A1234 rPET Cup' }, { value: 'b333 PET Cup' }]} />
                    <TextInput label='Quantity Remaining' />
                    <TextInput label='Date' />

                </FormContainer>

                <FormContainer className='pb-8'>
                    <FormSubmit />
                </FormContainer>
            </FormWrapper>
        </div>
    )
}