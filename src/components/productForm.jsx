import FormWrapper from "./formWrapper";
import FormContainer from "./formContainer";
import DropdownInput from "./dropdownInput";
import TextInput from "./textInput";
import FormSubmit from "./formSubmit";
import SearchInput from "./searchInput";

export default function ProductForm(props) {


    return (
        <div className="">
            <FormWrapper>
                <div className="text-xs absolute right-16 p-4">*Required</div>
                <FormContainer className='pt-8'>
                    <DropdownInput label='Product Type' options={[{ value: 'Plastic Cup' }, { value: 'Paper Cup' }]} />
                    <SearchInput label='Product Name' options={[{ value: 'A1234 rPET Cup' }, { value: 'b333 PET Cup' }]} />
                </FormContainer>
                <FormContainer optional={true} className='bg-[#f6f6f640]'>
                    <DropdownInput label='Distributor' options={[{ value: 'Distributor 1' }, { value: 'Distributor 2' }]} />
                    <TextInput label='Custom Product Name' />
                    <TextInput label='Custom Product Manufacturer' />
                    <TextInput label='Custom Product Weight' />
                    <TextInput label='Custom Product Image' />
                    <TextInput label='Custom Product Datasheet' />

                </FormContainer>
                <FormContainer className='pb-8'>
                    <FormSubmit />
                </FormContainer>
            </FormWrapper>
        </div>
    )
}