import FormWrapper from "./formWrapper";
import FormContainer from "./formContainer";
import DropdownInput from "./dropdownInput";
import TextInput from "./textInput";
import FormSubmit from "./formSubmit";

export default function CollectionForm(props) {


    return (
        <div className="">
            <FormWrapper>
                <div className="text-xs absolute right-16 p-4">*Required</div>
                <FormContainer className='pt-8'>
                    <DropdownInput label='Collection Type' options={[{ value: 'On-site Capture' }, { value: 'Waste Manager Pickup' }, { value: 'Deposit Figures' }]} />
                    <DropdownInput label='Stream' options={[{ value: 'Stream 1' }, { value: 'Stream 2' }]} />
                    <TextInput label='Date' />
                    <TextInput label='Quantity Collected' />
                    <DropdownInput label='Collector' options={[{ value: 'Collector 1' }, { value: 'Collector 2' }]} />

                </FormContainer>
                <FormContainer optional={true} className='bg-[#f6f6f640]'>
                    <TextInput label='Collection ID' />
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