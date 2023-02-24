import FormWrapper from "./formWrapper";
import FormContainer from "./formContainer";
import DropdownInput from "./dropdownInput";
import TextInput from "./textInput";
import FormSubmit from "./formSubmit";
import SearchInput from "./searchInput";

export default function StreamForm(props) {


    return (
        <div className="">
            <FormWrapper>
                <div className="text-xs absolute right-16 p-4">*Required</div>
                <FormContainer className='pt-8'>
                    <TextInput label='Stream Name' />
                    <DropdownInput label='Materials' options={['PET', 'rPET', 'Aluminium', 'PVC']} />
                </FormContainer>
                <FormContainer optional={true} className='bg-[#f6f6f640]'>
                    <DropdownInput label='Linked Products' options={['Product 1', 'Product 2']} />
                    <DropdownInput label='Waste Collector' options={['Waste Collector 1', 'Waste Collector 2']} />
                </FormContainer>
                <FormContainer className='pb-8'>
                    <FormSubmit />
                </FormContainer>
            </FormWrapper>
        </div>
    )
}