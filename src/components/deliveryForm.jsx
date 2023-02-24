import FormWrapper from "./formWrapper";
import FormContainer from "./formContainer";
import DropdownInput from "./dropdownInput";
import TextInput from "./textInput";
import FormSubmit from "./formSubmit";

export default function DeliveryForm(props) {


    return (
        <div className="">
            <FormWrapper>
                <div className="text-xs absolute right-16 p-4">*Required</div>
                <FormContainer className='pt-8'>
                    <DropdownInput label='Product' options={[{ value: 'A1234 rPET Cup' }, { value: 'b333 PET Cup' }]} />
                    <TextInput label='Quantity Delivered' />
                    <TextInput label='Date' />

                </FormContainer>
                <FormContainer optional={true} className='bg-[#f6f6f640]'>
                    <DropdownInput label='Distributor' options={[{ value: 'Distributor 1' }, { value: 'Distributor 2' }]} />
                    <TextInput label='Delivery ID' />
                    <DropdownInput label='Event' options={[{ value: 'Event 1' }, { value: 'Event 2' }]} />

                    <TextInput label='Attach Document' />

                </FormContainer>
                <FormContainer className='pb-8'>
                    <FormSubmit />
                </FormContainer>
            </FormWrapper>
        </div>
    )
}