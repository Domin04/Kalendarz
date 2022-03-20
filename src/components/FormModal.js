import Modal from 'react-modal';
import { useForm } from "react-hook-form";

import {
  ModalCancel,
  ModalSubmit,
  ModalFooter,
  InputField,
  InputSpan,
  InputContainer,
  ModalBody,
  ModalHeader,
  customStyles
} from '../styledComponent/index';

function FormModal( props ) {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    if ( data.Name && data.Place && data.Date && data.Time ) {
      props.onModalSubmit( data )
      props.openModal()
    }
  }

    return (
        <Modal
          isOpen={ props.modalState }
          ariaHideApp={false}
          onRequestClose={props.openModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalHeader>Utworz wydarzenie</ModalHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            
            <InputContainer>
              <InputSpan>Nazwa:</InputSpan>
              <InputField {...register("Name")}></InputField>
            </InputContainer>
            <InputContainer>
            <InputSpan>Miejsce:</InputSpan>
              <InputField {...register("Place")}></InputField>
            </InputContainer>
            <InputContainer>
              <InputSpan>Data:</InputSpan>
              <InputField {...register("Date")} type="number" min="1" max="31" placeholder="Wpisz dzien 1 - 31"></InputField>
            </InputContainer>
            <InputContainer>
              <InputSpan>Czas:</InputSpan>
              <InputField {...register("Time")} type="number" min="1" max="24" placeholder="Wpisz godzine 1 - 24"></InputField>
            </InputContainer>
          </ModalBody>
          <ModalFooter>
              <ModalSubmit>Dodaj</ModalSubmit>
              <ModalCancel onClick={props.openModal}>Anuluj</ModalCancel>
          </ModalFooter>
          </form>
        </Modal>
    );
  }
  
  export default FormModal;